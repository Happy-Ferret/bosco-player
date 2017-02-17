Lang = imports.lang
GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk
Granite = imports.gi.Granite

readFile = (filename) ->
  file = Gio.file_new_for_path(filename)
  [success, data, length] = file.load_contents(null)
  data



App = Lang.Class
  Name: 'App'
  Extends: Granite.Application #Gtk.Application

  _init: () ->
    @parent({}
      # application_id: "simple.granite.org"
      # program_name: "Simple Granite"
      # app_years: "2012"
      # build_version: "1.0"
      # app_icon: "help"
      # main_url: "https://launchpad.net/granite"
      # bug_url: "https://bugs.launchpad.net/granite"
      # help_url: "https://answers.launchpad.net/granite"
      # translate_url: "https://translations.launchpad.net/granite"
      # about_authors: ["Jose L. Navarro"]
      # about_documenters: ["Valadoc"]
      # about_artists: ["jln"]
      # about_comments: "A demo of the Granite toolkit"
      # about_translators: "Launchpad Translators"
      # about_license_type: Gtk.License.GPL_2_0
    )
    return

  activate: ->
    @window = new Gtk.Window()
    @window.title = "Simple App"
    @window.set_default_size(400, 400)
    @window.connect "destroy", () -> Gtk.main_quit()
    @window.show_all()



  # vfunc_activate: () ->
  #   @window = new AppWindow({application: this})
  #   @window.present()
  #   return

export default App

# AppWindow = Lang.Class
#   Name: 'AppWindow'
#   Extends: Gtk.ApplicationWindow
#   Template: readFile('data/hello.glade')
#   Children: ['label', 'button']

#   _init: (params) ->
#     @parent(params)
#     @label.set_text('Hello, World!')
#     @button.connect('clicked', @onClose.bind(this))
#     return

#   onClose: () ->
#     @application.quit()
#     return


