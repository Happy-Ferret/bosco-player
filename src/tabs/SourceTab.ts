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
    if (this.prj.data.gresource != null) 
      for (let item of this.prj.data.vala_source) 
            this.add(item.value, "", item.readonly)

    let lm = new GtkSource.LanguageManager()
    let buff = this.text.get_buffer() as GtkSource.Buffer
    buff.set_language(lm.get_language("vala"))
    return panes
  }
  onSelectionChanged() {  
    let [isSelected, model, iter] = super.onSelectionChanged()

    if (isSelected) {
      let text = String(Util.readFile(`${this.prj.path}/src/${model.get_value(iter, 0)}` ))
      this.text.get_buffer().set_text(text, text.length)
    }

    return [isSelected, model, iter]
  }
}
