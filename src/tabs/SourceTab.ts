import * as GtkSource from 'GtkSource'
import {NotebookTab} from 'tabs/NotebookTab'
import {Util} from 'Util'
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
    if (!this.prj.isNull('vala_source'))
      this.prj.get('vala_source').forEach((item, i) => {
        this.add(item.value, '', item.readonly)
      })

    let buff = this.text.get_buffer() as GtkSource.Buffer
    let lang = new GtkSource.LanguageManager()
    buff.set_language(lang.get_language("vala"))
    return panes
  }

  /**
    * show the Vala source code
   */
  onSelectionChanged() {  
    let [isSelected, model, iter] = super.onSelectionChanged()

    if (isSelected) {
      let text = String(Util.readFile(`${this.prj.path}/src/${model.get_value(iter, 0)}` ))
      // this.text['buffer']['text'] = text
      this.text.get_buffer().set_text(text, text.length)
    }

    return [isSelected, model, iter]
  }
}
