import * as Gtk from 'Gtk'
import * as GObject from 'GObject'
import * as Pango from 'Pango'
import NotebookTab from 'tabs/NotebookTab'
/**
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
 */
export default class ResourceTab extends NotebookTab {

  constructor(prj, status) {
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

