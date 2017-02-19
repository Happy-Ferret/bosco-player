GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk

import Util from 'Util'
import Application from 'Application'
###
# Bosco Player 
#
# top level application object
###
export default class Player
    constructor: () ->
        @application = new Gtk.Application(
            # application_id: 'com.darkoverlordodfdata.playery',
            flags: Gio.ApplicationFlags.FLAGS_NONE
        )
        @application.connect 'activate', => 
            @buildUI()
            @appWindow = new Application(application: @application)
            @appWindow.buildUI(@getConfig())
            @window = @appWindow.window
            @window.present()
            return


    ###
    # build the Application Menu
    #
    # main app menu
    ###
    buildUI: () ->
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
        about.set_transient_for(@window)
        about.set_program_name("Bosco Player")
        about.set_version("1.0")
        about.set_comments("If it's not dark, it's not data")
        about.set_website("")
        about.set_website_label("Dark Overlord of Data")
        about.set_authors(["bruce davidson"])
        about.run()
        about.destroy()

    ###
    # load configuration 
    ###
    getConfig:() ->
        res_name_default = "custom.gresource"
        res_prefix_default = "/com/darkoverlordofdata/custom"

        data = Util.readFile(GLib.get_user_data_dir() + "/bosco/config.json")
        config = if data? then JSON.parse(data) else {}

        config.app_name = "Player"
        config.res_name = config.res_name ? res_name_default
        config.res_prefix = config.res_prefix ? res_prefix_default
        config
    

