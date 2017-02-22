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
export default class SourceTab extends NotebookTab {

  constructor(prj, status) {
    super(prj, status)
  }

  buildUI() {
    super.buildUI()
    
    if (this.prj.data.gresource != null) {
      for (let item of this.prj.data.vala_source) {
            this.add(item.value, "", item.readonly)
      }
    }
    return this.grid
  }


}
