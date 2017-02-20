const GObject = imports.gi.GObject
const Gtk = imports.gi.Gtk
const Pango = imports.gi.Pango

import NotebookTab from 'tabs/NotebookTab'
/**
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
 */
export default class AutovalaTab extends NotebookTab {
 
  costructor(prj, status) {
    super(prj, status)
  }

  buildUI() {
    super.buildUI()
    let data = this.prj.data
    for (let key in data) {
      let item = data[key]
      if (!Array.isArray(item)) {
        this.add(key, item.value, item.readonly)
      }
    }
    return this.grid
  }

}
