import {NotebookTab} from 'tabs/NotebookTab'
/**
 *
 * PackageTab class - 
 *
 * view pkg-config data:
 * /usr/share/pkgconfig/
 * /usr/local/lib/pkgconfig/
 *
 */
export class PackageTab extends NotebookTab {

  buildUI() {
    // var i, item, len, ref
    let panes = super.buildUI()
    for (let item of this.prj.data.vala_check_package) {
      this.add(item.value, "", item.readonly)
    }
    return this.panes
  }

}

