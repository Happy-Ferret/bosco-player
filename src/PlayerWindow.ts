import * as Gtk from 'Gtk'
import {File} from 'Gio'
import {Util} from 'Util'
import {Project} from 'Project'
import {SourceTab} from 'tabs/SourceTab'
import {PackageTab} from 'tabs/PackageTab'
import {ResourceTab} from 'tabs/ResourceTab'
import {AutovalaTab} from 'tabs/AutovalaTab'

const DATADIR = "share/bosco"

/** 
 * Interface for the template: AppWindow.ui
 */
export interface AppWindow extends Gtk.ApplicationWindow {
  background: Gtk.Box
  status: Gtk.Statusbar
}

/**
 * Returns an anonymous implemention of the AppWindow interface
 */
function AppWindow() {
  return Util.loadTemplate({
    name: 'AppWindow',
    extends: Gtk.ApplicationWindow,
    fields: ['background', 'status'],
    path: `${DATADIR}/AppWindow.ui`
  })
}

/**
 * Top level Application
 */
export class PlayerWindow {
  config: any     /* config hash*/
  avprj: any      /* autovala hash*/
  entitas: any    /* ecs hash*/
  window: AppWindow
  background: Gtk.Box
  regularCss: Gtk.CssProvider
  logoCss: Gtk.CssProvider
  headerbar: Gtk.HeaderBar
  projectPath: string
  projectFile: File
  entitasFile: File
  notebook: Gtk.Notebook
  avContent: Gtk.Box
  resContent: Gtk.Box
  pkContent: Gtk.Box
  srcContent: Gtk.Box
  entitasContent: Gtk.Box

  /**
   * Load the glade template
   */
  constructor(params) {
    this.window = new (AppWindow())(params) as AppWindow
    this.regularCss = new Gtk.CssProvider()
    this.regularCss.load_from_data("* { font-family: Dejavu;  font-size: medium }")
    this.logoCss = new Gtk.CssProvider()
    this.logoCss.load_from_data("* { font-family: OpenDyslexic;  font-size: 32px }")
  }

  setConfig(config) {
    this.config = config
  }
  /** 
   * buildUI
   *   
   * @param config
   */
  buildUI() {
    this.headerbar = new Gtk.HeaderBar({
      title: this.config.app_name,
      show_close_button: true
    })
    this.headerbar.pack_start(this.buildOpen())
    this.window.background.add(this.buildBackground())
    this.window.set_default_size(1040, 620)
    this.window.set_titlebar(this.headerbar)
    this.window.set_icon_from_file(`${DATADIR}/bosco.png`)
    return this.window.show_all()
  }
  /**
   * builds the client background
   *   
   * @param config
   */
  buildBackground() {
    const background = new Gtk.Box()
    background.set_vexpand(true)
    background.set_hexpand(true)
    const label = new Gtk.Label({
      label: _("Bosco Player")
    })
    background.set_center_widget(label)
    background.get_style_context().add_provider(this.logoCss, 0)
    return this.background = background
  }
  /**
   * build notebook
   *
   */
  buildNotebook() {
    const builder = new Gtk.Builder()
    builder.add_from_file(`${DATADIR}/project.glade`)
    const notebook = builder.get_object("project") as Gtk.Notebook
    let title = new Gtk.Label({
      label: _("Autovala")
    })
    this.avContent = new Gtk.Box()
    notebook.append_page(this.avContent, title)
    title = new Gtk.Label({
      label: _("GResources")
    })
    this.resContent = new Gtk.Box()
    notebook.append_page(this.resContent, title)
    title = new Gtk.Label({
      label: _("Packages")
    })
    this.pkContent = new Gtk.Box()
    notebook.append_page(this.pkContent, title)
    title = new Gtk.Label({
      label: _("Source")
    })
    this.srcContent = new Gtk.Box()
    notebook.append_page(this.srcContent, title)
    title = new Gtk.Label({
      label: _("Entitas")
    })
    this.entitasContent = new Gtk.Box()
    notebook.append_page(this.entitasContent, title)
    return this.notebook = notebook
  }
  /**
   * build open project button
   *   
   * @param config
   */
  buildOpen() {
    const openButton = new Gtk.Button()
    openButton.add(new Gtk.Image({
      icon_name: "document-open-symbolic",
      icon_size: Gtk.IconSize.SMALL_TOOLBAR
    }))
    openButton.connect("clicked", () => {
        const chooser = new Gtk.FileChooserDialog({
          title: _("Select Project File"),
          action: Gtk.FileChooserAction.OPEN,
          transient_for: this.window,
          modal: true
        })
        chooser.set_select_multiple(false)
        chooser.add_button(_("Open"), Gtk.ResponseType.OK)
        chooser.add_button(_("Cancel"), Gtk.ResponseType.CANCEL)
        chooser.set_default_response(Gtk.ResponseType.OK)
        chooser.connect("response", (dialog, response) => {
          this.projectPath = dialog.get_filenames()[0]
          dialog.destroy()
          return this.displayProject(this.projectPath)
        })
        return chooser.run()
    })
    return openButton
  }
  /**
   * display project
   *   
   * @param path
   */
  displayProject(path) {
    this.projectFile = File.new_for_path(path)
    if (!this.projectFile.query_exists(null)) {
      return
    }
    if (this.notebook != null) {
      this.window.background.remove(this.notebook)
    } else {
      this.window.background.remove(this.background)
    }
    this.window.background.add(this.buildNotebook())

    let [success, data, length] = this.projectFile.load_contents(null)
    this.avprj = new Project(path, String(data))
    path = path.substring(0, path.lastIndexOf("/"))
    this.entitasFile = File.new_for_path(path + "/entitas.json")

    if (this.entitasFile.query_exists(null)) {
      [success, data, length] = this.entitasFile.load_contents(null)
      this.entitas = JSON.parse(data)
    } else {
      this.entitas = null
    }
    this.window.set_title((this.avprj.get('project_name')) + " - " + this.config.app_name)
    this.avContent.pack_start(new AutovalaTab(this.avprj, this.window.status).buildUI(), true, true, 0)
    this.avContent.get_style_context().add_provider(this.regularCss, 0)
    this.resContent.pack_start(new ResourceTab(this.avprj, this.window.status).buildUI(), true, true, 0)
    this.resContent.get_style_context().add_provider(this.regularCss, 0)
    this.pkContent.pack_start(new PackageTab(this.avprj, this.window.status).buildUI(), true, true, 0)
    this.pkContent.get_style_context().add_provider(this.regularCss, 0)
    this.srcContent.pack_start(new SourceTab(this.avprj, this.window.status).buildUI(), true, true, 0)
    this.srcContent.get_style_context().add_provider(this.regularCss, 0)
    this.window.show_all()
    this.notebook.set_current_page(1)
  }

}