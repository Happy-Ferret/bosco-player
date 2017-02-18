Lang = imports.lang
GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk

readFile = (filename) ->
  file = Gio.file_new_for_path(filename)
  [success, data, length] = file.load_contents(null)
  data

export default class AppWindow
    Gjs_AppWindow = Lang.Class
        Name: 'AppWindow'
        Extends: Gtk.ApplicationWindow
        Template: readFile('data/main.ui')
        Children: ['background']
        _init: (params, outer) ->
            @parent(params)
            return

    constructor: (params) ->
        @application = params.application
        @buildAppMenu()
        @window = new Gjs_AppWindow(params, this)



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


