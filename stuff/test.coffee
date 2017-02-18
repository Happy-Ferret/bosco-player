Lang = imports.lang
GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk

readFile = (filename) ->
  file = Gio.file_new_for_path(filename)
  [success, data, length] = file.load_contents(null)
  data



class App
    constructor: () ->
        @application = new Gtk.Application(
            application_id: 'org.example.myapp',
            flags: Gio.ApplicationFlags.FLAGS_NONE
        )

        @application.connect('activate', => @activate())

    activate: () ->
        @window = new AppWindow(application: @application).window
        @window.present()
        return


class AppWindow
    GladeAppWindow = Lang.Class
        Name: 'AppWindow'
        Extends: Gtk.ApplicationWindow
        Template: readFile('../data/hello.glade')
        Children: ['label', 'button']
        _init: (params, outer) ->
            @parent(params)
            @label.set_text('Hello, World!')
            @button.connect 'clicked', => @application.quit()
            return

    constructor: (params) ->
        @window = new GladeAppWindow(params, this)




app = new App()
app.application.run(ARGV)