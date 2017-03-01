import * as GLib from 'GLib'
import * as Gtk from 'Gtk'
import {Application, AboutDialog, Settings} from 'Gtk'
import {ApplicationFlags, Menu, SimpleAction} from 'Gio'
import {AppWindow, PlayerWindow} from 'PlayerWindow'
import {Util} from 'Util'

const darkTheme_default = "true"
const themeName_default = "elementary"

const config_default = {
  appName: "BoscoPlayer",
  darkTheme: darkTheme_default,
  themeName: themeName_default
}
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
        this.appWindow = new PlayerWindow({
          application: this.application,
        }, this)
        this.buildUI()
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
    about.set_logo_icon_name(null)
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

    let data = Util.readFile(GLib.get_user_data_dir() + "/bosco/config.json")
    let isNew = data == null 
    let config = isNew ? config_default : JSON.parse(data)
    if (isNew) this.setConfig(config)

    let gtkSettings = Gtk.Settings.get_default()
    gtkSettings.gtk_application_prefer_dark_theme = config.darkTheme === 'true'
    gtkSettings.gtk_theme_name = config.themeName
    return config
  }

  /**
   * setConfig
   * 
   * @config new values
   */
  setConfig(config) {
      Util.writeFile(GLib.get_user_data_dir() + "/bosco/config.json", JSON.stringify(config, null, 2))
  }

  /**
   * setConfigValue
   * 
   * @name property name
   * @value new value
   */
  setConfigValue(name: string, value: string) {
    if (value === "") return
    let data = Util.readFile(GLib.get_user_data_dir() + "/bosco/config.json")
    let config = data == null ? config_default : JSON.parse(data)
    if (config[name] === value) return
    let gtkSettings = Gtk.Settings.get_default()
    switch(name) {
      case 'darkTheme':
        gtkSettings.gtk_application_prefer_dark_theme = value === 'true'
        config[name] = value
        this.setConfig(config)
        this.appWindow.setConfig(config)
        break

      case 'themeName':
        gtkSettings.gtk_theme_name = value
        config[name] = value
        this.setConfig(config)
        this.appWindow.setConfig(config)
        break

    }
  }

}
