import * as Gtk from 'Gtk'
import * as GtkSource from 'GtkSource'
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
    if (this.prj.data.gresource != null) 
      for (let item of this.prj.data.vala_source) 
            this.add(item.value, "", item.readonly)

    let lm = new GtkSource.LanguageManager()
    let buff = this.text.get_buffer() as GtkSource.Buffer
    buff.set_language(lm.get_language("xml"))
    return panes
  }

  /**
    * show the current selected row
   */
  onSelectionChanged() {  
    let [isSelected, model, iter] = super.onSelectionChanged()

    if (isSelected) {
      let text = String(Util.readFile(`${this.prj.path}/${model.get_value(iter, 1)}` ))
      this.text.get_buffer().set_text(text, text.length)
    }

    return [isSelected, model, iter]
  }

}

