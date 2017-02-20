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
export default class PackageTab extends NotebookTab {

  constructor(prj, status) {
    super(prj, status)
  }

  buildUI() {
    // var i, item, len, ref
    super.buildUI()
    for (let item of this.prj.data.vala_check_package) {
      this.add(item.value, "", item.readonly)
    }
    return this.grid
  }

}

