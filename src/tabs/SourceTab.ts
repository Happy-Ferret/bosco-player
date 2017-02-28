import {NotebookTab} from 'tabs/NotebookTab'
/**
 *
 * SourceTab class - 
 *
 * view source code
 * http://www.bravegnu.org/gtktext/
 *
 */
export class SourceTab extends NotebookTab {

  buildUI() {
    let panes = super.buildUI()
    
    if (this.prj.data.gresource != null) {
      for (let item of this.prj.data.vala_source) {
            this.add(item.value, "", item.readonly)
      }
    }
    return panes
  }
}
