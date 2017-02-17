Lang = imports.lang
GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk

readFile = (filename) ->
  file = Gio.file_new_for_path(filename)
  [success, data, length] = file.load_contents(null)
  data


s
App = Lang.Class
  Name: 'App'
  Extends: Gtk.Application

  _init: () ->
    @parent()
    return

  vfunc_activate: () ->
    @window = new AppWindow({application: this})
    @window.present()
    return


AppWindow = Lang.Class
  Name: 'AppWindow'
  Extends: Gtk.ApplicationWindow
  Template: readFile('data/hello.glade')
  Children: ['label', 'button']

  _init: (params) ->
    @parent(params)
    @label.set_text('Hello, World!')
    @button.connect('clicked', @onClose.bind(this))
    return

  onClose: () ->
    @application.quit()
    return


app = new App()
app.run(ARGV)