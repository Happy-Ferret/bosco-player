import {NotebookTab} from 'tabs/NotebookTab'
/**
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
 */
export class PackageTab extends NotebookTab {

  buildUI() {
    // var i, item, len, ref
    super.buildUI()
    for (let item of this.prj.data.vala_check_package) {
      this.add(item.value, "", item.readonly)
    }
    return this.grid
  }

}

