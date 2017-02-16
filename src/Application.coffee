GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gdk = imports.gi.Gdk
Gtk = imports.gi.Gtk
Notify = imports.gi.Notify

export default class Application
    constructor: (config) ->
        @projectPath = ""
        @application = new Gtk.Application(
            application_id: "com.darkoverlordofdata.bosco",
            flags: Gio.ApplicationFlags.FLAGS_NONE
        )

        @application.connect "activate", => @window.present()
        @application.connect "startup", => 
            @buildMenu()
            @buildUI(config)


    buildMenu: () ->
        menu = new Gio.Menu()
        menu.append("New",'app.new')
        menu.append("About", 'app.about')
        menu.append("Quit",'app.quit')
        @application.set_app_menu(menu)

        newAction = new Gio.SimpleAction(name: 'new')
        newAction.connect 'activate', => @showNew()
        @application.add_action(newAction)

        aboutAction = new Gio.SimpleAction(name: 'about')
        aboutAction.connect 'activate', => @showAbout()
        @application.add_action(aboutAction)

        quitAction = new Gio.SimpleAction(name: 'quit')
        quitAction.connect 'activate', => @window.destroy()
        @application.add_action(quitAction)
        return
    ###
    # buildUI
    #   
    # @param config
    ###
    buildUI: (config) ->
        @window = new Gtk.ApplicationWindow(
            application: @application
            window_position: Gtk.WindowPosition.CENTER
            title: config.app_name
        )

        try 
            @window.set_icon_from_file("/home/bruce/gjs/bosco/data/bosco.png")
        catch e 
            printerr(e)
        

        @headerbar = new Gtk.HeaderBar(
            title: config.app_name
            show_close_button: true
        )

        # Add options to set the name and the prefix
        grid = new Gtk.Grid(
            column_spacing: 10,
            row_spacing: 10,
            margin: 10
        )

        grid.set_column_homogeneous(true)

        namelabel = new Gtk.Label(label: "File name:")

        namelabel.set_halign(Gtk.Align.END)

        nameentry = new Gtk.Entry()

        nameentry.connect("changed", () => config.res_name = nameentry.get_text())

        nameentry.set_placeholder_text(config.res_name)

        grid.attach(namelabel, 0, 0, 1, 1)
        grid.attach_next_to(nameentry, namelabel, Gtk.PositionType.RIGHT, 2, 1)

        prefixlabel = new Gtk.Label(label: "Resource prefix:")

        prefixlabel.set_halign(Gtk.Align.END)

        prefixentry = new Gtk.Entry()

        prefixentry.set_placeholder_text(config.res_prefix)

        prefixentry.connect("changed", () => res_prefix = prefixentry.get_text())

        grid.attach(prefixlabel, 0, 1, 1, 1)
        grid.attach_next_to(prefixentry, prefixlabel, Gtk.PositionType.RIGHT, 2, 1)

        menubutton = new Gtk.ToggleButton()

        menubutton.add(new Gtk.Image(
            icon_name: "open-menu-symbolic"
            icon_size: Gtk.IconSize.SMALL_TOOLBAR
        ))

        menubutton.connect "clicked", () => 
            if menubutton.get_active()
                menu.show_all()
            
        

        menu = new Gtk.Popover()

        menu.set_relative_to(menubutton)

        menu.connect "show", () => 
            nameentry.set_text(config.res_name)
            prefixentry.set_text(config.res_prefix)
        

        menu.connect "closed", () => 
            if menubutton.get_active()
                menubutton.set_active(false)

            config.res_name = config.res_name || config.res_name
            res_prefix = res_prefix || config.res_prefix
            write = false

            if config.config.res_name != config.res_name
                config.config.res_name = config.res_name
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

        @headerbar.pack_end(menubutton)

        background = new Gtk.Box()

        background.set_vexpand(true)
        background.set_hexpand(true)

        label = new Gtk.Label( label: "Welcome to Bosco Player" )
        background.set_center_widget(label)
        css = new Gtk.CssProvider()
        css.load_from_data("* { font-family: OpenDyslexic ; font-size: xx-large }")
        background.get_style_context().add_provider(css, 0)
        @window.add(background)

        addbutton = new Gtk.Button()
        addbutton.add(new Gtk.Image(
            icon_name: "document-open-symbolic"
            icon_size: Gtk.IconSize.SMALL_TOOLBAR
        ))

        addbutton.connect "clicked", () => 
            chooser = new Gtk.FileChooserDialog(
                title: "Select Project Folder"
                action: Gtk.FileChooserAction.SELECT_FOLDER
                transient_for: @window
                modal: true
            )

            chooser.set_select_multiple(false)

            chooser.add_button("Open", Gtk.ResponseType.OK)
            chooser.add_button("Cancel", Gtk.ResponseType.CANCEL)

            chooser.set_default_response(Gtk.ResponseType.OK)

            chooser.connect "response", (dialog, response) => 
                @projectPath = dialog.get_uris()
                dialog.destroy()
                if response == Gtk.ResponseType.OK && @projectPath && @projectPath.length
                    print "Selected #{@projectPath}"
            chooser.run()

        @headerbar.pack_start(addbutton)
        @window.set_default_size(800, 600)
        @window.set_titlebar(@headerbar)
        @window.show_all()
    
    ###
    # New project dialog
    ###
    showNew: () ->
        print "Not implemented"

    ###
    # About dialog
    ###
    showAbout: () ->
        about = new Gtk.AboutDialog()
        about.set_program_name("Bosco Player")
        about.set_version("1.0")
        about.set_comments("If it's not dark, it's not data")
        about.set_website("http://darkoverlordofdata.com")
        about.set_website_label("Dark Overlord of Data")
        about.set_authors(["bruce davidson"])
        about.run()
        about.destroy()

