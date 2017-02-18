Lang = imports.lang
GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk
Notify = imports.gi.Notify

import Util from 'Util'
import Project from 'Project'
import AvProperties from 'tabs/AvProperties' 
import ResProperties from 'tabs/ResProperties' 
import PkProperties from 'tabs/PkProperties' 
import SrcProperties from 'tabs/SrcProperties' 

export default class Application
    # inner GObject proxy used for loading glade
    Gjs_AppWindow = Lang.Class
        Name: 'AppWindow'
        Extends: Gtk.ApplicationWindow
        Template: Util.readFile('data/main.ui')
        Children: ['background']
        _init: (params, outer) ->
            @parent(params)
            return

    constructor: (params) ->
        @window = new Gjs_AppWindow(params, this)
        @regularCss = new Gtk.CssProvider()
        @regularCss.load_from_data("* { font-family: Dejavu ; font-size: medium }")
        
        @logoCss = new Gtk.CssProvider()
        @logoCss.load_from_data("* { font-family: OpenDyslexic ; font-size: 32px }")


    ###
    # buildUI
    #   
    # @param config
    ###
    buildUI: (config) ->
        @config = config

        @headerbar = new Gtk.HeaderBar(title: config.app_name, show_close_button: true)
        @headerbar.pack_start(@buildOpen(config))
        @headerbar.pack_end(@buildOptions(config))

        @window.set_icon_from_file("/home/bruce/gjs/bosco/data/bosco.png")
        @window.background.add(@buildNotebook())

        @window.set_default_size(1040, 620)
        @window.set_titlebar(@headerbar)
        @window.show_all()

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
    # builds the client background
    #   
    # @param config
    ###
    buildBackground: (config) ->
        background = new Gtk.Box()
        background.set_vexpand(true)
        background.set_hexpand(true)

        label = new Gtk.Label( label: "Bosco Player" )
        background.set_center_widget(label)
        background.get_style_context().add_provider(@logoCss, 0)
        @background = background

    ###
    # build open project button
    #   
    # @param config
    ###
    buildOpen: (config) ->
        openButton = new Gtk.Button()
        openButton.add(new Gtk.Image(
            icon_name: "document-open-symbolic"
            icon_size: Gtk.IconSize.SMALL_TOOLBAR
        ))

        openButton.connect "clicked", () => 
            chooser = new Gtk.FileChooserDialog(
                title: "Select Project File"
                action: Gtk.FileChooserAction.OPEN
                transient_for: @window
                modal: true
            )

            chooser.set_select_multiple(false)
            chooser.add_button("Open", Gtk.ResponseType.OK)
            chooser.add_button("Cancel", Gtk.ResponseType.CANCEL)
            chooser.set_default_response(Gtk.ResponseType.OK)

            chooser.connect "response", (dialog, response) => 
                @projectPath = dialog.get_filenames()[0]
                dialog.destroy()
                @displayProject(@projectPath)

            chooser.run()
        openButton

    ###
    # display project
    #   
    # @param path
    ###
    displayProject: (path) ->
        @projectFile = Gio.File.new_for_path(path)
        if not @projectFile.query_exists(null) then return

        [success, data, length] = @projectFile.load_contents(null)
        @avprj = new Project(String(data))

        path = path.substring(0, path.lastIndexOf("/"))
        @entitasFile = Gio.File.new_for_path("#{path}/entitas.json")
        if @entitasFile.query_exists(null) 

            [success, data, length] = @entitasFile.load_contents(null)
            @entitas = JSON.parse(data)

        else @entitas = null

        @window.set_title("#{@avprj.get('project_name')} - #{@config.app_name}")

        @avContent.pack_start(new AvProperties(@avprj).buildUI(), true, true, 0)
        @avContent.get_style_context().add_provider(@regularCss, 0)

        @resContent.pack_start(new ResProperties(@avprj).buildUI(), true, true, 0)
        @resContent.get_style_context().add_provider(@regularCss, 0)

        @pkContent.pack_start(new PkProperties(@avprj).buildUI(), true, true, 0)
        @pkContent.get_style_context().add_provider(@regularCss, 0)

        @srcContent.pack_start(new SrcProperties(@avprj).buildUI(), true, true, 0)
        @srcContent.get_style_context().add_provider(@regularCss, 0)

        @window.show_all()
        return
    

    ###
    # build notebook
    #   
    ###
    buildNotebook: () ->
        notebook = new Gtk.Notebook()

        title = new Gtk.Label(label: "Autovala")
        @avContent = new Gtk.Box()
        notebook.append_page(@avContent, title)

        title = new Gtk.Label(label: "GResources")
        @resContent = new Gtk.Box()
        notebook.append_page(@resContent, title)

        title = new Gtk.Label(label: "Packages")
        @pkContent = new Gtk.Box()
        notebook.append_page(@pkContent, title)

        title = new Gtk.Label(label: "Source")
        @srcContent = new Gtk.Box()
        notebook.append_page(@srcContent, title)

        title = new Gtk.Label(label: "Entitas")
        @entitasContent = new Gtk.Box()
        notebook.append_page(@entitasContent, title)

        title = new Gtk.Label(label: "Build")
        @buildContent = new Gtk.Box()
        notebook.append_page(@buildContent, title)

        notebook
        

    ###
    # build project options editor
    #   
    # @param config
    ###
    buildOptions: (config) ->
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
        nameentry.connect "changed", () => config.res_name = nameentry.get_text()
        nameentry.set_placeholder_text(config.res_name)
        grid.attach(namelabel, 0, 0, 1, 1)
        grid.attach_next_to(nameentry, namelabel, Gtk.PositionType.RIGHT, 2, 1)

        prefixlabel = new Gtk.Label(label: "Resource prefix:")
        prefixlabel.set_halign(Gtk.Align.END)
        prefixentry = new Gtk.Entry()
        prefixentry.set_placeholder_text(config.res_prefix)
        prefixentry.connect "changed", () => res_prefix = prefixentry.get_text()

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

            if config.res_name != config.res_name
                config.res_name = config.res_name
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
        menubutton
