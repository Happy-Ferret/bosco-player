import * as Gtk from 'Gtk'
import {Util} from 'Util'
import {parseString} from 'xml2js'
import {NotebookTab} from 'tabs/NotebookTab'
/**
 *
 * GResource data view
 *
 */
export class ResourceTab extends NotebookTab {

  buildUI() {
    super.buildUI()
    // TODO: 

    if (this.prj.data.gresource != null) {
      for (let item of this.prj.data.gresource) {
        let [name, path] = String(item.value).split(' ')
        this.add(name, path, item.readonly)
        //print(`${this.prj.path}/${path}`)
        parseString(Util.readFile(`${this.prj.path}/${path}`), (err, res) => {
          let pfx = res.gresources.gresource[0].$['prefix']
          let files = res.gresources.gresource[0].file
          //print(`Prefix: ${pfx}\nFiles:\n`)
          //print(JSON.stringify(files, null, 2))

        })
      }
    }
    return this.grid
  }


}

