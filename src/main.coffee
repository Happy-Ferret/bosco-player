GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk

import AppWindow from 'AppWindow'

export default class App
    constructor: () ->
        @application = new Gtk.Application(
            application_id: 'com.darkoverlordodfdata.player',
            flags: Gio.ApplicationFlags.FLAGS_NONE
        )
        @application.connect 'activate', => 
            @buildAppMenu()
            @appWindow = new AppWindow(application: @application)
            @appWindow.buildUI(@getConfig())
            @window = @appWindow.window
            @window.present()
            return


    ###
    # builds the Application Menu
    #
    # main app menu
    ###
    buildAppMenu: () ->
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

    getConfig:() ->
        res_name_default = "custom.gresource"
        res_prefix_default = "/com/darkoverlordofdata/custom"
        config = {}
        config_file = Gio.File.new_for_path(GLib.get_user_data_dir() + "/bosco/config.json")
        if config_file.query_exists(null) 
            [success, data, length] = file.load_contents(null)
            config = JSON.parse(data)

        config.res_name = config.res_name ? res_name_default
        config.res_prefix = config.res_prefix ? res_prefix_default
        config.app_name = "Player"
        config
    

app = new App()
app.application.run(ARGV)
