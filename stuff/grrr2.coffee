GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gdk = imports.gi.Gdk
Gtk = imports.gi.Gtk
Notify = imports.gi.Notify
#Lang = imports.lang

APP_NAME = "Grrr!"

Notify.init(APP_NAME)

res_name_default = "custom.gresource"
res_prefix_default = "/org/gnome/custom"

res_name = res_name_defaultnew
res_prefix = res_prefix_default

config = {}

config_file = Gio.File.new_for_path(GLib.get_user_data_dir() + "/grrr/config.json")

if config_file.query_exists(null) 
    size = config_file.query_info("standard::size",
                                  Gio.FileQueryInfoFlags.NONE,
                                  null).get_size()

    try 
        data = config_file.read(null).read_bytes(size, null).get_data()

        config = JSON.parse(data)

        if config.res_name
            res_name = config.res_name
        

        if config.res_prefix
            res_prefix = config.res_prefix
        
    catch e
        printerr(e)
    


class GResource
    _name: res_name
    _prefix: res_prefix


    constructor: () ->
        @_files = []

    set_name: (name) ->
        @_name = name

    set_prefix: (prefix) ->
        @_prefix = prefix

    add: (dir) ->
        @_base = @_base || dir.get_parent()

        if dir.query_info("standard::*",
                            Gio.FileQueryInfoFlags.NONE,
                            null).get_file_type() != Gio.FileType.DIRECTORY

            @_files.push(dir)

            return
        

        fileEnum = null

        try 
            fileEnum = dir.enumerate_children("standard::name,standard::type",
                                            Gio.FileQueryInfoFlags.NONE, null)
        catch e
            fileEnum = null
        

        if fileEnum != null
            info = null

            while info = fileEnum.next_file(null) != null
                file = dir.resolve_relative_path(info.get_name())

                if info.get_file_type() == Gio.FileType.DIRECTORY
                    @add(file)
                else 
                    @_files.push(file)

    build: () ->
        xml = "<?xml version='1.0' encoding='UTF-8'?>\n"

        xml += "<gresources>\n\t<gresource prefix='" + @_prefix + "'>\n"

        for file in @_files
            info = file.query_info("standard::*", Gio.FileQueryInfoFlags.NONE, null)

            xml += "\t\t"

            path = @_base.get_relative_path(file)
                            .replace(/&/g, "&amp")
                            .replace(/</g, "&lt")
                            .replace(/>/g, "&gt")
                            .replace(/"/g, "&quot")
                            .replace(/'/g, "&apos")

            if /image\//.test(info.get_content_type())
                xml += "<file preprocess='to-pixdata'>" + path + "</file>\n"
            else
                xml += "<file>" + path + "</file>\n"


        xml += "\t</gresource>\n</gresources>\n"

        xmlfile = @_base.resolve_relative_path(@_name + ".xml")

        if xmlfile.query_exists(null)
            xmlfile.delete(null)

        outputstream = xmlfile.create(Gio.FileCreateFlags.REPLACE_DESTINATION, null)

        outputstream.write_all(xml, null)

        outputstream.close(null)

    compile: (cb = () => {}) ->
        # ok = false 
        # pid = 0

        try 
            [ ok, pid ] = GLib.spawn_async(@_base.get_path(),
                                            [ "glib-compile-resources", @_name + ".xml" ],
                                            GLib.get_environ(),
                                            GLib.SpawnFlags.SEARCH_PATH_FROM_ENVP | GLib.SpawnFlags.DO_NOT_REAP_CHILD,
                                            null)
        catch e
            printerr(e)
        

        if ok == false
            return
        

        if typeof pid == "number"
            GLib.child_watch_add GLib.PRIORITY_DEFAULT, pid, () => 
                GLib.spawn_close_pid(pid)

                try 
                    notification = new Notify.Notification
                        summary: "Gresource file generated!"
                        body: @_name + " generated at " + @_base.get_path()
                        icon_name: "dialog-information"
            

                    notification.set_timeout(1000)

                    notification.show()
                catch e 
                    printerr(e)
                

                cb()
            

class Application
    Name: APP_NAME

    constructor: () ->
        @application = new Gtk.Application(
            application_id: "org.ozonos.grrr",
            flags: Gio.ApplicationFlags.FLAGS_NONE
        )

        @application.connect "activate", => @_window.present()
        @application.connect "startup", => @_buildUI()


    _buildUI: ->
        @_window = new Gtk.ApplicationWindow({
                application: @application,
                window_position: Gtk.WindowPosition.CENTER,
                title: APP_NAME
            })

        try 
            icon = Gtk.IconTheme.get_default().load_icon("binary", 48, 0)

            @_window.set_icon(icon)
        catch e 
            printerr(e)
        

        @_headerbar = new Gtk.HeaderBar({
            title: APP_NAME,
            show_close_button: true
        })

        # Add options to set the name and the prefix
        grid = new Gtk.Grid({
            column_spacing: 10,
            row_spacing: 10,
            margin: 10
        })

        grid.set_column_homogeneous(true)

        namelabel = new Gtk.Label({ label: "File name:" })

        namelabel.set_halign(Gtk.Align.END)

        nameentry = new Gtk.Entry()

        nameentry.connect("changed", () => res_name = nameentry.get_text())

        nameentry.set_placeholder_text(res_name_default)

        grid.attach(namelabel, 0, 0, 1, 1)
        grid.attach_next_to(nameentry, namelabel, Gtk.PositionType.RIGHT, 2, 1)

        prefixlabel = new Gtk.Label(label: "Resource prefix:")

        prefixlabel.set_halign(Gtk.Align.END)

        prefixentry = new Gtk.Entry()

        prefixentry.set_placeholder_text(res_prefix_default)

        prefixentry.connect("changed", () => res_prefix = prefixentry.get_text())

        grid.attach(prefixlabel, 0, 1, 1, 1)
        grid.attach_next_to(prefixentry, prefixlabel, Gtk.PositionType.RIGHT, 2, 1)

        menubutton = new Gtk.ToggleButton()

        menubutton.add(new Gtk.Image({
            icon_name: "open-menu-symbolic",
            icon_size: Gtk.IconSize.SMALL_TOOLBAR
        }))

        menubutton.connect "clicked", () => 
            if menubutton.get_active()
                menu.show_all()
            
        

        menu = new Gtk.Popover()

        menu.set_relative_to(menubutton)

        menu.connect "show", () => 
            nameentry.set_text(res_name)
            prefixentry.set_text(res_prefix)
        

        menu.connect "closed", () => 
            if menubutton.get_active()
                menubutton.set_active(false)
            

            res_name = res_name || res_name_default
            res_prefix = res_prefix || res_prefix_default

            write = false

            if config.res_name != res_name
                config.res_name = res_name

                write = true
            

            if config.res_prefix != res_prefix
                config.res_prefix = res_prefix

                write = true
            

            if write
                parent = config_file.get_parent()

                if parent.query_exists(null)
                    if config_file.query_exists(null)
                        config_file.delete(null)
                    
                else
                    parent.make_directory_with_parents(null)
                

                outputstream = config_file.create(Gio.FileCreateFlags.REPLACE_DESTINATION, null)

                outputstream.write_all(JSON.stringify(config), null)

                outputstream.close(null)

        menu.add(grid)

        @_headerbar.pack_end(menubutton)

        spinner = new Gtk.Spinner(active: true )

        spinner.set_size_request(64, 64)

        label = new Gtk.Label( label: "Drop files and folders to generate a gresource file!" )

        # Let's set up our window for drag 'n drop
        dnd = new Gtk.Box()

        dnd.set_vexpand(true)
        dnd.set_hexpand(true)

        dnd.drag_dest_set(Gtk.DestDefaults.ALL, null, Gdk.DragAction.COPY)

        dnd.drag_dest_add_text_targets()

        generate = (uris) => 
            gresource = new GResource()

            for uri in uris
                gresource.add(Gio.File.new_for_uri(uri))
            

            gresource.build()
            gresource.compile(() => 
                complete = new Gtk.Label({ label: res_name + " generated!" })

                dnd.set_center_widget(complete)

                dnd.show_all()

                GLib.timeout_add(GLib.PRIORITY_DEFAULT, 3000, () => 
                    dnd.set_center_widget(label)

                    dnd.show_all()

                    return false
                , null)
            )

        

        dnd.connect("drag_data_received", (s, c, x, y, selection) => 

            dnd.set_center_widget(spinner)

            dnd.show_all()

            text = selection.get_text()

            if text
                generate(text.split("\n").map(u => u.trim()).filter(u => !!u))
            
        )

        dnd.set_center_widget(label)

        addbutton = new Gtk.Button()

        addbutton.add(new Gtk.Image({
            icon_name: "list-add-symbolic",
            icon_size: Gtk.IconSize.SMALL_TOOLBAR
        }))

        addbutton.connect("clicked", () => 
            chooser = new Gtk.FileChooserDialog({
                title: "Select folders",
                action: Gtk.FileChooserAction.SELECT_FOLDER,
                transient_for: @_window,
                modal: true
            })

            chooser.set_select_multiple(true)

            chooser.add_button("Add", Gtk.ResponseType.OK)
            chooser.add_button("Cancel", Gtk.ResponseType.CANCEL)

            chooser.set_default_response(Gtk.ResponseType.OK)

            chooser.connect("response", (dialog, response) => 
                uris = dialog.get_uris()

                dialog.destroy()

                if response == Gtk.ResponseType.OK && uris && uris.length
                    generate(uris)
                
            )

            chooser.run()
        )

        @_headerbar.pack_start(addbutton)

        # Add some styles
        css = new Gtk.CssProvider()

        css.load_from_data("* { font-size: large }")

        dnd.get_style_context().add_provider(css, 0)

        @_window.add(dnd)

        @_window.set_default_size(800, 600)
        @_window.set_titlebar(@_headerbar)
        @_window.show_all()
    

    _onActivate: () ->
        @_window.present()
    

    _onStartup: () ->
        @_buildUI()
    


app = new Application()

app.application.run(ARGV)
