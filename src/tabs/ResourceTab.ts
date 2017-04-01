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
    if (!this.prj.isNull('gresource')) 
      this.prj.get('gresource').forEach((item, i) => {
        this.add(item.value.split(' ')[0], item.value.split(' ')[1], item.readonly)
      })

    let buff = this.text.get_buffer() as GtkSource.Buffer
    let lang = new GtkSource.LanguageManager()
    buff.set_language(lang.get_language("xml"))

    return panes
  }

  /**
    * show the GResource xml
   */
  onSelectionChanged() {  
    let [isSelected, model, iter] = super.onSelectionChanged()

    if (isSelected) {
      let text = String(Util.readFile(`${this.prj.path}/${model.get_value(iter, 1)}`))
      this.text.get_buffer().set_text(text, text.length)
    }

    return [isSelected, model, iter]
  }

}

