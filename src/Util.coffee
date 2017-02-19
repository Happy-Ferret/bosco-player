Gio = imports.gi.Gio
Gtk = imports.gi.Gtk
Lang = imports.lang

export default class Util

    @readFile: (filename) ->
        file = Gio.file_new_for_path(filename)
        if file.query_exists(null)
            [success, data, length] = file.load_contents(null)
            data
        else null

    @loadTemplate: (name, path, children, params) ->
        klass = Lang.Class {
            Name: name
            Extends: Gtk.ApplicationWindow
            Template: Util.readFile(path)
            Children: children
            _init: (params) -> @parent(params)
        }
        new klass(params)
