var GLib, Gio, Gtk, Player;

GLib = imports.gi.GLib;

Gio = imports.gi.Gio;

Gtk = imports.gi.Gtk;

import Util from 'Util';

import Application from 'Application';


/*
 * Bosco Player 
 *
 * top level application object
 */

export default Player = (function() {
  function Player() {
    this.application = new Gtk.Application({
      flags: Gio.ApplicationFlags.FLAGS_NONE
    });
    this.application.connect('activate', (function(_this) {
      return function() {
        _this.buildUI();
        _this.appWindow = new Application({
          application: _this.application
        });
        _this.appWindow.buildUI(_this.getConfig());
        _this.window = _this.appWindow.window;
        _this.window.present();
      };
    })(this));
  }


  /*
   * build the Application Menu
   *
   * main app menu
   */

  Player.prototype.buildUI = function() {
    var aboutAction, menu, newAction, quitAction;
    menu = new Gio.Menu();
    menu.append("New", 'app.new');
    menu.append("About", 'app.about');
    menu.append("Quit", 'app.quit');
    this.application.set_app_menu(menu);
    newAction = new Gio.SimpleAction({
      name: 'new'
    });
    newAction.connect('activate', (function(_this) {
      return function() {
        return _this.showNew();
      };
    })(this));
    this.application.add_action(newAction);
    aboutAction = new Gio.SimpleAction({
      name: 'about'
    });
    aboutAction.connect('activate', (function(_this) {
      return function() {
        return _this.showAbout();
      };
    })(this));
    this.application.add_action(aboutAction);
    quitAction = new Gio.SimpleAction({
      name: 'quit'
    });
    quitAction.connect('activate', (function(_this) {
      return function() {
        return _this.window.destroy();
      };
    })(this));
    this.application.add_action(quitAction);
  };


  /*
   * New project dialog
   */

  Player.prototype.showNew = function() {
    return print("Not implemented");
  };


  /*
   * About dialog
   */

  Player.prototype.showAbout = function() {
    var about;
    about = new Gtk.AboutDialog();
    about.set_transient_for(this.window);
    about.set_program_name("Bosco Player");
    about.set_version("1.0");
    about.set_comments("If it's not dark, it's not data");
    about.set_website("");
    about.set_website_label("Dark Overlord of Data");
    about.set_authors(["bruce davidson"]);
    about.run();
    return about.destroy();
  };


  /*
   * load configuration
   */

  Player.prototype.getConfig = function() {
    var config, data, ref, ref1, res_name_default, res_prefix_default;
    res_name_default = "custom.gresource";
    res_prefix_default = "/com/darkoverlordofdata/custom";
    data = Util.readFile(GLib.get_user_data_dir() + "/bosco/config.json");
    config = data != null ? JSON.parse(data) : {};
    config.app_name = "Player";
    config.res_name = (ref = config.res_name) != null ? ref : res_name_default;
    config.res_prefix = (ref1 = config.res_prefix) != null ? ref1 : res_prefix_default;
    return config;
  };

  return Player;

})();
