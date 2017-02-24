import * as Gtk from 'Gtk'
import * as GObject from 'GObject'
import * as Pango from 'Pango'

/**
 *
 * Abstract Class ProjectViewer - 
 *
 * view autovala data
 *
 */
export abstract class NotebookTab {

  prj: any
  id: number
  status: Gtk.Statusbar
  listStore: Gtk.ListStore
  treeView: Gtk.TreeView
  selection: Gtk.TreeSelection
  grid: Gtk.Grid
  scrollView: Gtk.ScrolledWindow

  /**
    * set the autovala project data 
    * @param prj:Project
   */
  constructor(prj, status) {
    this.prj = prj
    this.status = status
    this.id = this.status.get_context_id(this.constructor['name'])
  }
  /**
    *
    *  buildUI  
    *
    *  sets up the base UI page for property display
    *  subclass must override & super this method
    *
   */
  buildUI() {
    this.listStore = new Gtk.ListStore()
    this.listStore.set_column_types([GObject.TYPE_STRING, GObject.TYPE_STRING, GObject.TYPE_STRING])
    this.treeView = new Gtk.TreeView({
      expand: true,
      model: this.listStore
    })
    this.selection = this.treeView.get_selection()
    this.selection.connect('changed', () => {
        return this.onSelectionChanged()
    })
    this.grid = new Gtk.Grid()
    const key = new Gtk.TreeViewColumn({
      title: "Key"
    })
    const value = new Gtk.TreeViewColumn({
      title: "Value"
    })
    const readonly = new Gtk.TreeViewColumn({
      title: "Readonly"
    })
    const bold = new Gtk.CellRendererText({
      weight: Pango.Weight.BOLD
    })
    const normal = new Gtk.CellRendererText()
    key.pack_start(bold, true)
    value.pack_start(normal, true)
    readonly.pack_start(normal, true)
    key.add_attribute(bold, "text", 0)
    value.add_attribute(normal, "text", 1)
    readonly.add_attribute(normal, "text", 2)
    this.treeView.insert_column(key, 0)
    this.treeView.insert_column(value, 1)
    this.treeView.insert_column(readonly, 2)
    this.scrollView = new Gtk.ScrolledWindow({
      hscrollbar_policy: Gtk.PolicyType.NEVER,
      vscrollbar_policy: Gtk.PolicyType.AUTOMATIC
    })
    this.scrollView.add(this.treeView)
    return this.grid.attach(this.scrollView, 0, 0, 1, 1)
  }


  /**
    * Add data to the list store
    * call from subclass buildUI
   */
  add(p1, p2, p3) {
    return this.listStore.set(this.listStore.append(), [0, 1, 2], [String(p1), String(p2), String(p3)])
  }


  /**
    * show the current selected row
   */
  onSelectionChanged() {
    let [isSelected, model, iter] = this.selection.get_selected()
    this.status.push(this.id, 
        this.listStore.get_value(iter, 0) + " " + 
        this.listStore.get_value(iter, 1) + " " + 
        this.listStore.get_value(iter, 2))
    return
  }

}
