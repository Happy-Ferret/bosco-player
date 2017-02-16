#!/usr/bin/gjs
Lang = imports.lang
GObject = imports.gi.GObject
Gtk = imports.gi.Gtk
Gio = imports.gi.Gio
Pango = imports.gi.Pango

readFile = (filename) ->
  file = Gio.file_new_for_path(filename)
  [success, data, length] = file.load_contents(null)
  data



class Example 
    Name: 'TreeView Example with Simple ListStore'

    # Create the application itself
    constructor:() ->
        @application = new Gtk.Application(application_id: 'org.example.example')

        # Connect 'activate' and 'startup' signals to the callback s
        @application.connect('activate', => @_onActivate())
        @application.connect('startup', => @_onStartup())
    

    # Callback  for 'activate' signal presents window when active
    _onActivate:() ->
        @_window.present()

    # Callback  for 'startup' signal builds the UI
    _onStartup:() ->
        @_buildUI()

    # Build the application's UI
    _buildUI:() ->
        # Create the application window
        @_window = new Gtk.ApplicationWindow(
            application: @application,
            window_position: Gtk.WindowPosition.CENTER,
            default_height: 250,
            default_width: 100,
            border_width: 20,  
            Template: readFile('hello.glade'),
            # Children: ['label', 'button'],
            title: "My Phone Book")


# Run the application
app = new Example()
app.application.run(ARGV)
