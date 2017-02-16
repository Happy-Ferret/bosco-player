GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gdk = imports.gi.Gdk
Gtk = imports.gi.Gtk
Notify = imports.gi.Notify

APP_NAME = "Bosco"

export default class Application
    Name: APP_NAME

    constructor: () ->
        @application = new Gtk.Application(
            application_id: "com.darkoverlordofdata.bosco",
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
    
