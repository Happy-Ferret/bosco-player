import * as GtkSource from 'GtkSource'
import {NotebookTab} from 'tabs/NotebookTab'
import {Util} from 'Util'
import * as GLib from 'GLib'
/**
 *
 * SourceTab class - 
 *
 * view source code
 * http://www.bravegnu.org/gtktext/
 *
 */
export class EntitasTab extends NotebookTab {

  buildUI() {
    let panes = super.buildUI()
    // if (this.prj.data.gresource != null) 
    //   for (let item of this.prj.data.vala_source) 
    //         this.add(item.value, "", item.readonly)


    let lm = new GtkSource.LanguageManager()
    let buff = this.text.get_buffer() as GtkSource.Buffer
    buff.set_language(lm.get_language("json"))
    let text = String(Util.readFile(`${this.prj.path}/entitas.json` ))
    this.text.get_buffer().set_text(text, text.length)
    return panes
  }
}
