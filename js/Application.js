// Generated by CoffeeScript 1.11.1
var Application, GLib, Gdk, Gio, Gtk, Notify;

GLib = imports.gi.GLib;

Gio = imports.gi.Gio;

Gdk = imports.gi.Gdk;

Gtk = imports.gi.Gtk;

Notify = imports.gi.Notify;

import Project from 'Project';

import AvProperties from 'tabs/AvProperties';

import ResProperties from 'tabs/ResProperties';

import PkProperties from 'tabs/PkProperties';

import SrcProperties from 'tabs/SrcProperties';


/*
 *
 * Main Application class
 *
 */

export default Application = (function() {
  function Application(config1) {
    this.config = config1;
    this.projectPath = "";
    this.application = new Gtk.Application({
      application_id: "com.darkoverlordofdata.bosco",
      flags: Gio.ApplicationFlags.FLAGS_NONE
    });
    this.application.connect("activate", (function(_this) {
      return function() {
        return _this.window.present();
      };
    })(this));
    this.application.connect("startup", (function(_this) {
      return function() {
        return _this.buildUI(_this.config);
      };
    })(this));
    this.regularCss = new Gtk.CssProvider();
    this.regularCss.load_from_data("* { font-family: Dejavu ; font-size: medium }");
    this.logoCss = new Gtk.CssProvider();
    this.logoCss.load_from_data("* { font-family: OpenDyslexic ; font-size: 32px }");
  }


  /*
   * buildUI
   *   
   * @param config
   */

  Application.prototype.buildUI = function(config) {
    this.buildAppMenu();
    this.window = new Gtk.ApplicationWindow({
      application: this.application,
      window_position: Gtk.WindowPosition.CENTER,
      title: config.app_name
    });
    this.headerbar = new Gtk.HeaderBar({
      title: config.app_name,
      show_close_button: true
    });
    this.headerbar.pack_start(this.buildOpen(config));
    this.headerbar.pack_end(this.buildOptions(config));
    this.window.set_icon_from_file("/home/bruce/gjs/bosco/data/bosco.png");
    this.window.add(this.buildNotebook());
    this.window.set_default_size(1040, 620);
    this.window.set_titlebar(this.headerbar);
    return this.window.show_all();
  };


  /*
   * builds the Application Menu
   *
   * main app menu
   */

  Application.prototype.buildAppMenu = function() {
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
   * builds the client background
   *   
   * @param config
   */

  Application.prototype.buildBackground = function(config) {
    var background, label;
    background = new Gtk.Box();
    background.set_vexpand(true);
    background.set_hexpand(true);
    label = new Gtk.Label({
      label: "Bosco Player"
    });
    background.set_center_widget(label);
    background.get_style_context().add_provider(this.logoCss, 0);
    return this.background = background;
  };


  /*
   * build open project button
   *   
   * @param config
   */

  Application.prototype.buildOpen = function(config) {
    var openButton;
    openButton = new Gtk.Button();
    openButton.add(new Gtk.Image({
      icon_name: "document-open-symbolic",
      icon_size: Gtk.IconSize.SMALL_TOOLBAR
    }));
    openButton.connect("clicked", (function(_this) {
      return function() {
        var chooser;
        chooser = new Gtk.FileChooserDialog({
          title: "Select Project File",
          action: Gtk.FileChooserAction.OPEN,
          transient_for: _this.window,
          modal: true
        });
        chooser.set_select_multiple(false);
        chooser.add_button("Open", Gtk.ResponseType.OK);
        chooser.add_button("Cancel", Gtk.ResponseType.CANCEL);
        chooser.set_default_response(Gtk.ResponseType.OK);
        chooser.connect("response", function(dialog, response) {
          _this.projectPath = dialog.get_filenames()[0];
          dialog.destroy();
          return _this.displayProject(_this.projectPath);
        });
        return chooser.run();
      };
    })(this));
    return openButton;
  };

  Application.prototype.displayProject = function(path) {
    var data, length, ref, ref1, success;
    this.projectFile = Gio.File.new_for_path(path);
    if (!this.projectFile.query_exists(null)) {
      return;
    }
    ref = this.projectFile.load_contents(null), success = ref[0], data = ref[1], length = ref[2];
    this.avprj = new Project(String(data));
    path = path.substring(0, path.lastIndexOf("/"));
    this.entitasFile = Gio.File.new_for_path(path + "/entitas.json");
    if (this.entitasFile.query_exists(null)) {
      ref1 = this.entitasFile.load_contents(null), success = ref1[0], data = ref1[1], length = ref1[2];
      this.entitas = JSON.parse(data);
    } else {
      this.entitas = null;
    }
    this.window.set_title((this.avprj.get('project_name')) + " - " + this.config.app_name);
    this.avContent.pack_start(new AvProperties(this.avprj).buildUI(), true, true, 0);
    this.avContent.get_style_context().add_provider(this.regularCss, 0);
    this.resContent.pack_start(new ResProperties(this.avprj).buildUI(), true, true, 0);
    this.resContent.get_style_context().add_provider(this.regularCss, 0);
    this.pkContent.pack_start(new PkProperties(this.avprj).buildUI(), true, true, 0);
    this.pkContent.get_style_context().add_provider(this.regularCss, 0);
    this.srcContent.pack_start(new SrcProperties(this.avprj).buildUI(), true, true, 0);
    this.srcContent.get_style_context().add_provider(this.regularCss, 0);
    this.window.show_all();
  };

  Application.prototype.buildNotebook = function() {
    var notebook, title;
    notebook = new Gtk.Notebook();
    title = new Gtk.Label({
      label: "Autovala"
    });
    this.avContent = new Gtk.Box();
    notebook.append_page(this.avContent, title);
    title = new Gtk.Label({
      label: "GResources"
    });
    this.resContent = new Gtk.Box();
    notebook.append_page(this.resContent, title);
    title = new Gtk.Label({
      label: "Packages"
    });
    this.pkContent = new Gtk.Box();
    notebook.append_page(this.pkContent, title);
    title = new Gtk.Label({
      label: "Source"
    });
    this.srcContent = new Gtk.Box();
    notebook.append_page(this.srcContent, title);
    title = new Gtk.Label({
      label: "Entitas"
    });
    this.entitasContent = new Gtk.Box();
    notebook.append_page(this.entitasContent, title);
    title = new Gtk.Label({
      label: "Build"
    });
    this.buildContent = new Gtk.Box();
    notebook.append_page(this.buildContent, title);
    return notebook;
  };


  /*
   * build project options editor
   *   
   * @param config
   */

  Application.prototype.buildOptions = function(config) {
    var grid, menu, menubutton, nameentry, namelabel, prefixentry, prefixlabel;
    grid = new Gtk.Grid({
      column_spacing: 10,
      row_spacing: 10,
      margin: 10
    });
    grid.set_column_homogeneous(true);
    namelabel = new Gtk.Label({
      label: "File name:"
    });
    namelabel.set_halign(Gtk.Align.END);
    nameentry = new Gtk.Entry();
    nameentry.connect("changed", (function(_this) {
      return function() {
        return config.res_name = nameentry.get_text();
      };
    })(this));
    nameentry.set_placeholder_text(config.res_name);
    grid.attach(namelabel, 0, 0, 1, 1);
    grid.attach_next_to(nameentry, namelabel, Gtk.PositionType.RIGHT, 2, 1);
    prefixlabel = new Gtk.Label({
      label: "Resource prefix:"
    });
    prefixlabel.set_halign(Gtk.Align.END);
    prefixentry = new Gtk.Entry();
    prefixentry.set_placeholder_text(config.res_prefix);
    prefixentry.connect("changed", (function(_this) {
      return function() {
        var res_prefix;
        return res_prefix = prefixentry.get_text();
      };
    })(this));
    grid.attach(prefixlabel, 0, 1, 1, 1);
    grid.attach_next_to(prefixentry, prefixlabel, Gtk.PositionType.RIGHT, 2, 1);
    menubutton = new Gtk.ToggleButton();
    menubutton.add(new Gtk.Image({
      icon_name: "open-menu-symbolic",
      icon_size: Gtk.IconSize.SMALL_TOOLBAR
    }));
    menubutton.connect("clicked", (function(_this) {
      return function() {
        if (menubutton.get_active()) {
          return menu.show_all();
        }
      };
    })(this));
    menu = new Gtk.Popover();
    menu.set_relative_to(menubutton);
    menu.connect("show", (function(_this) {
      return function() {
        nameentry.set_text(config.res_name);
        return prefixentry.set_text(config.res_prefix);
      };
    })(this));
    menu.connect("closed", (function(_this) {
      return function() {
        var outputstream, parent, res_prefix, write;
        if (menubutton.get_active()) {
          menubutton.set_active(false);
        }
        config.res_name = config.res_name || config.res_name;
        res_prefix = res_prefix || config.res_prefix;
        write = false;
        if (config.config.res_name !== config.res_name) {
          config.config.res_name = config.res_name;
          write = true;
        }
        if (config.res_prefix !== res_prefix) {
          config.res_prefix = res_prefix;
          write = true;
        }
        if (write) {
          parent = config_file.get_parent();
          if (parent.query_exists(null)) {
            if (config_file.query_exists(null)) {
              config_file["delete"](null);
            }
          } else {
            parent.make_directory_with_parents(null);
          }
          outputstream = config_file.create(Gio.FileCreateFlags.REPLACE_DESTINATION, null);
          outputstream.write_all(JSON.stringify(config), null);
          return outputstream.close(null);
        }
      };
    })(this));
    menu.add(grid);
    return menubutton;
  };


  /*
   * New project dialog
   */

  Application.prototype.showNew = function() {
    return print("Not implemented");
  };


  /*
   * About dialog
   */

  Application.prototype.showAbout = function() {
    var about;
    about = new Gtk.AboutDialog();
    about.set_program_name("Bosco Player");
    about.set_version("1.0");
    about.set_comments("If it's not dark, it's not data");
    about.set_website("http://darkoverlordofdata.com");
    about.set_website_label("Dark Overlord of Data");
    about.set_authors(["bruce davidson"]);
    about.run();
    return about.destroy();
  };

  return Application;

})();