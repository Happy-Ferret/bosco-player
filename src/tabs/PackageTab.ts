import * as GtkSource from 'GtkSource'
import {NotebookTab} from 'tabs/NotebookTab'
import {Util} from 'Util'
/**
 *
 * PackageTab class - 
 *
 * view pkg-config data:
 * /usr/share/pkgconfig/
 * /usr/local/lib/pkgconfig/
 *
 */
let LIB_PATHS = [
  '/usr/share',
  '/usr/lib',
  '/usr/lib/x86_64-linux-gnu',
  '/usr/local/lib'  
] 


export class PackageTab extends NotebookTab {

  buildUI() {
    let panes = super.buildUI()
    if (!this.prj.isNull('vala_check_package'))
      this.prj.get('vala_check_package').forEach((item, i) => {
        this.add(item.value, '', item.readonly)
      })
    
    let buff = this.text.get_buffer() as GtkSource.Buffer
    let lang = new GtkSource.LanguageManager()
    buff.set_language(lang.get_language("sh"))
    return this.panes
  }

  /**
    * show the pkg-config data
   */
  onSelectionChanged() {  
    let [isSelected, model, iter] = super.onSelectionChanged()

    if (isSelected) {
      for (let p in LIB_PATHS) {
        let path = LIB_PATHS[p]
        let f1 = Util.readFile(`${path}/pkgconfig/${model.get_value(iter, 0)}.pc`)
        if (f1 != null) { 
            let text = String(f1)
            this.text.get_buffer().set_text(text, text.length)
            break
        }
      }

    }

    return [isSelected, model, iter]
  }
  

}

