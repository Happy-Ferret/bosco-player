import {NotebookTab} from 'tabs/NotebookTab'
/**
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
 */
export class SourceTab extends NotebookTab {

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
