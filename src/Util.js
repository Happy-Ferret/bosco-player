const Gio = imports.gi.Gio
const Gtk = imports.gi.Gtk
const Lang = imports.lang

export default class Util {

  static readFile(filename) {
    const file = Gio.file_new_for_path(filename)
    if (file.query_exists(null)) {
      let [success, data, length] = file.load_contents(null)
      return data
    } else {
      return null
    }
  }

  static loadTemplate(name, path, children, params) {
    const klass = Lang.Class({
      Name: name,
      Extends: Gtk.ApplicationWindow,
      Template: Util.readFile(path),
      Children: children,
      _init: function(params) {
        return this.parent(params)
      }
    })
    return new klass(params)
  }
}

