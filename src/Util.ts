
import * as Gio from 'Gio'
import * as Gtk from 'Gtk'
import * as Lang from 'Lang'

export class Util {

  static readFile(filename) {
    const file = Gio.file_new_for_path(filename)
    if (file.query_exists(null)) {
      let [success, data, length] = file.load_contents(null)
      return data
    } else {
      return null
    }
  }

  static loadTemplate(template) {
    return Lang.Class({
      Name: template.name,
      Extends: template.superclass,
      Template: Util.readFile(template.path),
      Children: template.children,
      _init: function(params) {
        return this.parent(params)
      }
    })
  }
}

