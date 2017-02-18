Lang = imports.lang
GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk

readFile = (filename) ->
  file = Gio.file_new_for_path(filename)
  [success, data, length] = file.load_contents(null)
  data

export default class AppWindow
    GladeAppWindow = Lang.Class
        Name: 'AppWindow'
        Extends: Gtk.ApplicationWindow
        Template: readFile('data/main.ui')
        Children: ['background']
        _init: (params, outer) ->
            @parent(params)
            # @label.set_text('Hello, World!')
            # @menuQuit.connect 'activate', => @application.quit()
            return

    constructor: (params) ->
        @window = new GladeAppWindow(params, this)




# export default class AppWindow
#     GladeAppWindow = Lang.Class
#         Name: 'AppWindow'
#         Extends: Gtk.ApplicationWindow
#         Template: readFile('data/hello.glade')
#         Children: ['label', 'button']
#         _init: (params, outer) ->
#             @parent(params)
#             @label.set_text('Hello, World!')
#             @button.connect 'clicked', => @application.quit()
#             return

#     constructor: (params) ->
#         @window = new GladeAppWindow(params, this)



