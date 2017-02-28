import * as Gtk from 'Gtk'
import * as GObject from 'GObject'
import {NotebookTab} from 'tabs/NotebookTab'
/**
 *
 * AutovalaTab class - 
 *
 * view autovala data
 *
 */
export class AutovalaTab extends NotebookTab {
 
  buildUI() {
    let panes = super.buildUI()
    let data = this.prj.data
    for (let key in data) {
      let item = data[key]
      if (!Array.isArray(item)) {
        this.add(key, item.value, item.readonly)
      }
    }
    return panes
  }

}
