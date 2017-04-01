import * as Gtk from 'Gtk'
import * as GObject from 'GObject'
import * as Pango from 'Pango'
import * as GtkSource from 'GtkSource'
import {PlayerWindow} from 'PlayerWindow'
import {Project} from 'Project'
/**
 *
 * Abstract Class ProjectViewer - 
 *
 * view autovala data
 * notebook with 2 pane explorer style tabs
 *
 */
export abstract class NotebookTab {

  prj: Project
  id: number
  status: Gtk.Statusbar
  listStore: Gtk.ListStore
  treeView: Gtk.TreeView
  selection: Gtk.TreeSelection
  leftPane: Gtk.Grid
  rightPane: Gtk.Box
  panes: Gtk.Paned
  leftScroll: Gtk.ScrolledWindow
  rightScroll: Gtk.ScrolledWindow
  text: GtkSource.View
  parent: PlayerWindow
  /**
    * set the autovala project data 
    * @param prj:Project
   */
  constructor(parent, prj, status) {
    this.parent = parent
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
    this.selection.connect('changed', () => this.onSelectionChanged())

    const bold = new Gtk.CellRendererText({ weight: Pango.Weight.BOLD })
    const normal = new Gtk.CellRendererText()

    const key = new Gtk.TreeViewColumn({ title: "Key" })
    key.pack_start(bold, true)
    key.add_attribute(bold, "text", 0)
    this.treeView.insert_column(key, 0)

    const value = new Gtk.TreeViewColumn({ title: "Value" })
    value.pack_start(normal, true)
    value.add_attribute(normal, "text", 1)
    this.treeView.insert_column(value, 1)

    const readonly = new Gtk.TreeViewColumn({ title: "" })
    readonly.pack_start(normal, true)
    readonly.add_attribute(normal, "text", 2)
    this.treeView.insert_column(readonly, 2)

    this.text = GtkSource.View.new_with_buffer(new GtkSource.Buffer())
    this.text.set_show_line_numbers(true)

    let css = new Gtk.CssProvider()
    css.load_from_data("* { font-family: Dejavu;  font-size: large }")
    this.text.get_style_context().add_provider(css, 0)

    /** make the left pane */
    this.leftPane = new Gtk.Grid()
    this.leftScroll = new Gtk.ScrolledWindow({
      hscrollbar_policy: Gtk.PolicyType.NEVER,
      vscrollbar_policy: Gtk.PolicyType.AUTOMATIC
    })
    
    /** make the right pane */
    this.rightPane = new Gtk.Box()
    this.rightScroll = new Gtk.ScrolledWindow({
      hscrollbar_policy: Gtk.PolicyType.AUTOMATIC,
      vscrollbar_policy: Gtk.PolicyType.AUTOMATIC
    })
    
    /** put the panes together */

    this.leftScroll.add(this.treeView)
    this.leftPane.attach(this.leftScroll, 0, 0, 1, 1)
    this.rightScroll.add(this.text)
    this.rightPane.pack_start(this.rightScroll, true, true, 5)
    
    this.panes = new Gtk.Paned()
    this.panes.set_direction(Gtk.Orientation.HORIZONTAL)
    this.panes.add1(this.leftPane)
    this.panes.add2(this.rightPane)
    return this.panes
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
    let key = model.get_value(iter, 0)
    let value = model.get_value(iter, 1)
    this.status.push(this.id, key + (value.length>0 ? `[${value}]` : '' ))

    return [isSelected, model, iter]
  }

}
