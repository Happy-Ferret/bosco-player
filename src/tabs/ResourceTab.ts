import * as Gtk from 'Gtk'
import {Util} from 'Util'
import {parseString} from 'xml2js'
import {NotebookTab} from 'tabs/NotebookTab'
/**
 *
 * ResourceTab class
 * 
 * view the resource.xml data
 *
 */
export class ResourceTab extends NotebookTab {

  buildUI() {
    let panes = super.buildUI()
    // TODO: 

    if (this.prj.data.gresource != null) {
      for (let item of this.prj.data.gresource) {
        let [name, path] = String(item.value).split(' ')
        this.add(name, path, item.readonly)

        let text = String(Util.readFile(`${this.prj.path}/${path}`))
        this.text.get_buffer().set_text(text, text.length)


      }
    }
    return panes
  }


}

