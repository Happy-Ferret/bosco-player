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
export default class ResourceTab extends NotebookTab {

  costructor(prj, status) {
    super(prj, status)
  }

  buildUI() {
    super.buildUI()
    
    if (this.prj.data.gresource != null) {
      for (let item of this.prj.data.gresource) {
            let [name, path] = String(item.value).split(' ')
            this.add(name, path, item.readonly)
      }
    }
    return this.grid
  }


}

