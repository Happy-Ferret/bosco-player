import * as GLib from 'GLib'
import {Application, AboutDialog, Settings} from 'Gtk'
import {ApplicationFlags, Menu, SimpleAction} from 'Gio'
import {AppWindow, PlayerWindow} from 'PlayerWindow'
import {Util} from 'Util'
/**
 * Bosco Player 
 *
 * top level application object
 */
export class Player {

  application: Application
  appWindow: PlayerWindow
  window: AppWindow
  path: string
  name: string

  constructor() {
    this.application = new Application({flags: ApplicationFlags.FLAGS_NONE})
    this.application.connect('activate', () => {
        this.buildUI()
        this.appWindow = new PlayerWindow({
          application: this.application
        })
        this.appWindow.setConfig(this.getConfig())
        this.appWindow.buildUI()
        this.window = this.appWindow.window
        
        this.window.present()
    })
  }
  
  /**
   * build the Gio.Application Menu
   *
   * main app menu
   */
  buildUI() {

    let gtkSettings = Settings.get_default()
    gtkSettings.gtk_application_prefer_dark_theme = true
    
    let menu = new Menu()
    menu.append(_("New"), 'app.new')
    menu.append(_("About"), 'app.about')
    menu.append(_("Quit"), 'app.quit')

    this.application.set_app_menu(menu)
    let newAction = new SimpleAction({
      name: 'new'
    })

    newAction.connect('activate', () => {
      return this.showNew()
    })

    this.application.add_action(newAction)
    let aboutAction = new SimpleAction({
      name: 'about'
    })

    aboutAction.connect('activate', () => {
      return this.showAbout()
    })

    this.application.add_action(aboutAction)
    let quitAction = new SimpleAction({
      name: 'quit'
    })

    quitAction.connect('activate', () => {
      return this.window.destroy()
    })

    this.application.add_action(quitAction)
  }


  /**
   * New project dialog
   */
  showNew() {
    return print("Not implemented")
  }


  /**
   * About dialog
   */
  showAbout() {
    let about = new AboutDialog()
    about.set_transient_for(this.window)
    about.set_program_name(_("Bosco Player"))
    about.set_version(_("1.0"))
    about.set_comments("If it's not dark, it's not data")
    about.set_website("")
    about.set_website_label("Dark Overlord of Data")
    about.set_authors(["bruce davidson"])
    about.run()
    return about.destroy()
  }


  /**
   * load configuration
   */
  getConfig() {
    const res_name_default = "custom.gresource"
    const res_prefix_default = "/com/darkoverlordofdata/custom"

    let data = Util.readFile(GLib.get_user_data_dir() + "/bosco/config.json")
    let config = data != null ? JSON.parse(data) : {}
    config.app_name = "Player"
    let ref
    config.res_name = (ref = config.res_name) != null ? ref : res_name_default
    config.res_prefix = (ref = config.res_prefix) != null ? ref : res_prefix_default
    return config
  }


}
