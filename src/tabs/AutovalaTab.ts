import * as Gtk from 'Gtk'
import * as GObject from 'GObject'
import {NotebookTab} from 'tabs/NotebookTab'
/**
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
 */
export class AutovalaTab extends NotebookTab {
 
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
