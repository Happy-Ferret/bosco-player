import * as Gtk from 'Gtk'
import {File} from 'Gio'
import {Util} from 'Util'
import {Project} from 'Project'
import {Player} from 'Player'
import {SourceTab} from 'tabs/SourceTab'
import {PackageTab} from 'tabs/PackageTab'
import {ResourceTab} from 'tabs/ResourceTab'
import {AutovalaTab} from 'tabs/AutovalaTab'
import {EntitasTab} from 'tabs/EntitasTab'

const THEMES = [
  "elementary",
  "Adwaita"
]
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
  textCss: Gtk.CssProvider
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
  ecsContent: Gtk.Box
  parent: Player

  /**
   * Load the glade template
   */
  constructor(params, parent) {
    this.parent = parent
    this.window = new (AppWindow())(params) as AppWindow
    this.regularCss = new Gtk.CssProvider()
    this.regularCss.load_from_data("* { font-family: Dejavu;  font-size: medium }")
    this.logoCss = new Gtk.CssProvider()
    this.logoCss.load_from_data("* { font-family: OpenDyslexic;  font-size: 32px }")
    Gtk.Window.set_default_icon_from_file(ICON)
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
      title: this.config.appName,
      show_close_button: true
    })
    this.headerbar.pack_start(this.buildOpen())
    this.headerbar.pack_start(this.buildPreferences())
    this.window.background.add(this.buildBackground())
    this.window.set_default_size(1040, 740)
    this.window.set_titlebar(this.headerbar)
    this.window.set_icon_from_file(ICON)
    return this.window.show_all()
  }

  buildPreferences() {

    // Add options to set the name and the prefix
    let grid = new Gtk.Grid({
        column_spacing: 10,
        row_spacing: 10,
        margin: 10
    })

    grid.set_column_homogeneous(true)

    let darkLabel = new Gtk.Label({ label: "Dark theme:" })
    darkLabel.set_halign(Gtk.Align.END)

    let darkEntry = new Gtk.Switch({
      state: this.config.darkTheme === 'true', 
      valign: Gtk.Align.CENTER
    })
    darkEntry.connect('state-set', () => this.parent.setConfigValue('darkTheme', darkEntry.get_active().toString()))

    grid.attach(darkLabel, 0, 0, 1, 1)
    grid.attach_next_to(darkEntry, darkLabel, Gtk.PositionType.RIGHT, 2, 1)

    let themeLabel = new Gtk.Label({label: "Theme name:"})
    themeLabel.set_halign(Gtk.Align.END)

    let themeSelect = new Gtk.ComboBoxText()
    THEMES.forEach((theme, i) => themeSelect.insert(i, theme, theme))
    themeSelect.set_active_id(this.config.themeName)
    themeSelect.connect('changed', () => this.parent.setConfigValue('themeName', themeSelect.get_active_text()))

    grid.attach(themeLabel, 0, 1, 1, 1)
    grid.attach_next_to(themeSelect, themeLabel, Gtk.PositionType.RIGHT, 2, 1)

    let menubutton = new Gtk.ToggleButton()
    menubutton.add(new Gtk.Image({
      icon_name: "open-menu-symbolic",
      icon_size: Gtk.IconSize.SMALL_TOOLBAR
    }))

    let menu = new Gtk.Popover()
    menu.set_relative_to(menubutton)
    menu.connect("closed", () => menubutton.get_active() ? menubutton.set_active(false) : null)
    menubutton.connect("clicked", () => menubutton.get_active() ? menu.show_all() : null)
    menu.add(grid)
    return menubutton
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
    // notebook.remove_page(0)
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
    this.ecsContent = new Gtk.Box()
    notebook.append_page(this.ecsContent, title)
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
    this.window.set_title((this.avprj.get('project_name')) + " - " + this.config.appName)
    this.avContent.pack_start(new AutovalaTab(this, this.avprj, this.window.status).buildUI(), true, true, 0)
    this.avContent.get_style_context().add_provider(this.regularCss, 0)
    this.pkContent.pack_start(new PackageTab(this, this.avprj, this.window.status).buildUI(), true, true, 0)
    this.pkContent.get_style_context().add_provider(this.regularCss, 0)
    this.srcContent.pack_start(new SourceTab(this, this.avprj, this.window.status).buildUI(), true, true, 0)
    this.srcContent.get_style_context().add_provider(this.regularCss, 0)
    this.resContent.pack_start(new ResourceTab(this, this.avprj, this.window.status).buildUI(), true, true, 0)
    this.resContent.get_style_context().add_provider(this.regularCss, 0)
    this.ecsContent.pack_start(new EntitasTab(this, this.avprj, this.window.status).buildUI(), true, true, 0)
    this.ecsContent.get_style_context().add_provider(this.regularCss, 0)
    this.window.show_all()
    this.notebook.set_current_page(1)
  }

}