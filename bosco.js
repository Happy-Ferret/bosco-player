#!/usr/bin/env gjs
/**
 * AMD Compatible module loader
 *
 * @param root object
 * @returns module loader function define
 *
 */
var define = (function (modules) {
    return function (name, deps, callback) {
        modules[name] = { id: name, exports: {} };
        var args = [function (name) { return modules[name].exports; }, modules[name].exports];
        for (var i = 2; i < deps.length; i++)
            args.push(modules[deps[i]].exports);
        callback.apply(modules[name].exports, args);
    };
}({}));
// Generated by CoffeeScript 1.11.1
define("Project", ["require", "exports"], function (require, exports) {
    "use strict";
    /*
     *
     * Project class -
     *
     *
     */
    var Project;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Project = (function () {
        function Project(data) {
            var j, key, len, line, lines, readonly, ref, ref1, ref2, value;
            this.data = {};
            lines = data.split('\n');
            for (j = 0, len = lines.length; j < len; j++) {
                line = lines[j];
                if (line === "") {
                    continue;
                }
                if (line[0] === "#") {
                    continue;
                }
                ref = line.split(/\s*\:\s*/), key = ref[0], value = ref[1];
                if (key[0] === '*') {
                    ref1 = [true, key.substring(1)], readonly = ref1[0], key = ref1[1];
                }
                else {
                    ref2 = [false, key], readonly = ref2[0], key = ref2[1];
                }
                if (this.data[key] != null) {
                    if (!Array.isArray(this.data[key])) {
                        this.data[key] = [this.data[key]];
                    }
                    this.data[key].push({
                        value: value,
                        readonly: readonly
                    });
                }
                else {
                    this.data[key] = {
                        value: value,
                        readonly: readonly
                    };
                }
            }
        }
        Project.prototype.isArray = function (key) {
            return Array.isArray(this.data[key]);
        };
        Project.prototype.count = function (key) {
            return this.data[key].length;
        };
        Project.prototype.get = function (key, i) {
            if (i == null) {
                i = -1;
            }
            if (i === -1) {
                return this.data[key].value;
            }
            else {
                return this.data[key][i].value;
            }
        };
        Project.prototype.readonly = function (key, i) {
            if (i == null) {
                i = -1;
            }
            if (i === -1) {
                return this.data[key].readonly;
            }
            else {
                return this.data[key][i].readonly;
            }
        };
        return Project;
    })();
});
define("tabs/PropertyViewer", ["require", "exports"], function (require, exports) {
    "use strict";
    // Generated by CoffeeScript 1.11.1
    var GObject, Gtk, Pango, PropertyViewer, slice = [].slice;
    GObject = imports.gi.GObject;
    Gtk = imports.gi.Gtk;
    Pango = imports.gi.Pango;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PropertyViewer = (function () {
        /*
          * set the autovala project data
          * @param prj:Project
         */
        function PropertyViewer(prj) {
            this.prj = prj;
        }
        /*
          *
          *  buildUI
          *
          *  sets up the base UI page for property display
          *  subclass must override & super this method
          *
         */
        PropertyViewer.prototype.buildUI = function () {
            var bold, key, normal, readonly, value;
            this.listStore = new Gtk.ListStore();
            this.listStore.set_column_types([GObject.TYPE_STRING, GObject.TYPE_STRING, GObject.TYPE_STRING]);
            this.treeView = new Gtk.TreeView({
                expand: true,
                model: this.listStore
            });
            this.label = new Gtk.Label({
                label: ""
            });
            this.selection = this.treeView.get_selection();
            this.selection.connect('changed', (function (_this) {
                return function () {
                    return _this.onSelectionChanged();
                };
            })(this));
            this.grid = new Gtk.Grid();
            key = new Gtk.TreeViewColumn({
                title: "Key"
            });
            value = new Gtk.TreeViewColumn({
                title: "Value"
            });
            readonly = new Gtk.TreeViewColumn({
                title: "Readonly"
            });
            bold = new Gtk.CellRendererText({
                weight: Pango.Weight.BOLD
            });
            normal = new Gtk.CellRendererText();
            key.pack_start(bold, true);
            value.pack_start(normal, true);
            readonly.pack_start(normal, true);
            key.add_attribute(bold, "text", 0);
            value.add_attribute(normal, "text", 1);
            readonly.add_attribute(normal, "text", 2);
            this.treeView.insert_column(key, 0);
            this.treeView.insert_column(value, 1);
            this.treeView.insert_column(readonly, 2);
            this.scrollView = new Gtk.ScrolledWindow({
                hscrollbar_policy: Gtk.PolicyType.NEVER,
                vscrollbar_policy: Gtk.PolicyType.AUTOMATIC
            });
            this.scrollView.add(this.treeView);
            this.grid.attach(this.scrollView, 0, 0, 1, 1);
            return this.grid.attach(this.label, 0, 1, 1, 1);
        };
        /*
          * Add data to the list store
         */
        PropertyViewer.prototype.add = function () {
            var arg;
            arg = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return this.listStore.set(this.listStore.append(), [0, 1, 2], [String(arg[0]), String(arg[1]), String(arg[2])]);
        };
        /*
          * show the current selected row
         */
        PropertyViewer.prototype.onSelectionChanged = function () {
            var isSelected, iter, model, ref;
            ref = this.selection.get_selected(), isSelected = ref[0], model = ref[1], iter = ref[2];
            return this.label.set_label("\n" + this.listStore.get_value(iter, 0) + " " + this.listStore.get_value(iter, 1) + " " + this.listStore.get_value(iter, 2) + "\n");
        };
        return PropertyViewer;
    })();
});
define("tabs/AvProperties", ["require", "exports", "tabs/PropertyViewer"], function (require, exports, PropertyViewer_1) {
    "use strict";
    // Generated by CoffeeScript 1.11.1
    var AvProperties, GObject, Gtk, Pango, extend = function (child, parent) { for (var key in parent) {
        if (hasProp.call(parent, key))
            child[key] = parent[key];
    } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
    GObject = imports.gi.GObject;
    Gtk = imports.gi.Gtk;
    Pango = imports.gi.Pango;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AvProperties = (function (superClass) {
        extend(AvProperties, superClass);
        function AvProperties(prj) {
            this.prj = prj;
        }
        AvProperties.prototype.buildUI = function () {
            var item, key, ref;
            AvProperties.__super__.buildUI.call(this);
            ref = this.prj.data;
            for (key in ref) {
                item = ref[key];
                if (!Array.isArray(item)) {
                    this.add(key, item.value, item.readonly);
                }
            }
            return this.grid;
        };
        return AvProperties;
    })(PropertyViewer_1.default);
});
define("tabs/ResProperties", ["require", "exports", "tabs/PropertyViewer"], function (require, exports, PropertyViewer_2) {
    "use strict";
    // Generated by CoffeeScript 1.11.1
    var GObject, Gtk, Pango, ResProperties, extend = function (child, parent) { for (var key in parent) {
        if (hasProp.call(parent, key))
            child[key] = parent[key];
    } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
    GObject = imports.gi.GObject;
    Gtk = imports.gi.Gtk;
    Pango = imports.gi.Pango;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ResProperties = (function (superClass) {
        extend(ResProperties, superClass);
        function ResProperties(prj) {
            this.prj = prj;
        }
        ResProperties.prototype.buildUI = function () {
            var i, item, len, name, path, ref, ref1;
            ResProperties.__super__.buildUI.call(this);
            if (this.prj.data.gresource != null) {
                ref = this.prj.data.gresource;
                for (i = 0, len = ref.length; i < len; i++) {
                    item = ref[i];
                    ref1 = String(item.value).split(' '), name = ref1[0], path = ref1[1];
                    this.add(name, path, item.readonly);
                }
            }
            return this.grid;
        };
        return ResProperties;
    })(PropertyViewer_2.default);
});
define("tabs/PkProperties", ["require", "exports", "tabs/PropertyViewer"], function (require, exports, PropertyViewer_3) {
    "use strict";
    // Generated by CoffeeScript 1.11.1
    var GObject, Gtk, Pango, PkProperties, extend = function (child, parent) { for (var key in parent) {
        if (hasProp.call(parent, key))
            child[key] = parent[key];
    } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
    GObject = imports.gi.GObject;
    Gtk = imports.gi.Gtk;
    Pango = imports.gi.Pango;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PkProperties = (function (superClass) {
        extend(PkProperties, superClass);
        function PkProperties(prj) {
            this.prj = prj;
        }
        PkProperties.prototype.buildUI = function () {
            var i, item, len, ref;
            PkProperties.__super__.buildUI.call(this);
            ref = this.prj.data.vala_check_package;
            for (i = 0, len = ref.length; i < len; i++) {
                item = ref[i];
                this.add(item.value, "", item.readonly);
            }
            return this.grid;
        };
        return PkProperties;
    })(PropertyViewer_3.default);
});
define("tabs/SrcProperties", ["require", "exports", "tabs/PropertyViewer"], function (require, exports, PropertyViewer_4) {
    "use strict";
    // Generated by CoffeeScript 1.11.1
    var GObject, Gtk, Pango, SrcProperties, extend = function (child, parent) { for (var key in parent) {
        if (hasProp.call(parent, key))
            child[key] = parent[key];
    } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }, hasProp = {}.hasOwnProperty;
    GObject = imports.gi.GObject;
    Gtk = imports.gi.Gtk;
    Pango = imports.gi.Pango;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SrcProperties = (function (superClass) {
        extend(SrcProperties, superClass);
        function SrcProperties(prj) {
            this.prj = prj;
        }
        SrcProperties.prototype.buildUI = function () {
            var i, item, len, ref;
            SrcProperties.__super__.buildUI.call(this);
            ref = this.prj.data.vala_source;
            for (i = 0, len = ref.length; i < len; i++) {
                item = ref[i];
                this.add(item.value, "", item.readonly);
            }
            return this.grid;
        };
        return SrcProperties;
    })(PropertyViewer_4.default);
});
define("AppWindow", ["require", "exports", "Project", "tabs/AvProperties", "tabs/ResProperties", "tabs/PkProperties", "tabs/SrcProperties"], function (require, exports, Project_1, AvProperties_1, ResProperties_1, PkProperties_1, SrcProperties_1) {
    "use strict";
    // Generated by CoffeeScript 1.11.1
    var AppWindow, GLib, Gio, Gtk, Lang, Notify, readFile;
    Lang = imports.lang;
    GLib = imports.gi.GLib;
    Gio = imports.gi.Gio;
    Gtk = imports.gi.Gtk;
    Notify = imports.gi.Notify;
    readFile = function (filename) {
        var data, file, length, ref, success;
        file = Gio.file_new_for_path(filename);
        ref = file.load_contents(null), success = ref[0], data = ref[1], length = ref[2];
        return data;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = AppWindow = (function () {
        var Gjs_AppWindow;
        Gjs_AppWindow = Lang.Class({
            Name: 'AppWindow',
            Extends: Gtk.ApplicationWindow,
            Template: readFile('data/main.ui'),
            Children: ['background'],
            _init: function (params, outer) {
                this.parent(params);
            }
        });
        function AppWindow(params) {
            this.window = new Gjs_AppWindow(params, this);
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
        AppWindow.prototype.buildUI = function (config) {
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
        AppWindow.prototype.buildAppMenu = function () {
            var aboutAction, menu, newAction, quitAction;
            menu = new Gio.Menu();
            menu.append("New", 'app.new');
            menu.append("About", 'app.about');
            menu.append("Quit", 'app.quit');
            this.application.set_app_menu(menu);
            newAction = new Gio.SimpleAction({
                name: 'new'
            });
            newAction.connect('activate', (function (_this) {
                return function () {
                    return _this.showNew();
                };
            })(this));
            this.application.add_action(newAction);
            aboutAction = new Gio.SimpleAction({
                name: 'about'
            });
            aboutAction.connect('activate', (function (_this) {
                return function () {
                    return _this.showAbout();
                };
            })(this));
            this.application.add_action(aboutAction);
            quitAction = new Gio.SimpleAction({
                name: 'quit'
            });
            quitAction.connect('activate', (function (_this) {
                return function () {
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
        AppWindow.prototype.buildBackground = function (config) {
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
        AppWindow.prototype.buildOpen = function (config) {
            var openButton;
            openButton = new Gtk.Button();
            openButton.add(new Gtk.Image({
                icon_name: "document-open-symbolic",
                icon_size: Gtk.IconSize.SMALL_TOOLBAR
            }));
            openButton.connect("clicked", (function (_this) {
                return function () {
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
                    chooser.connect("response", function (dialog, response) {
                        _this.projectPath = dialog.get_filenames()[0];
                        dialog.destroy();
                        return _this.displayProject(_this.projectPath);
                    });
                    return chooser.run();
                };
            })(this));
            return openButton;
        };
        AppWindow.prototype.displayProject = function (path) {
            var data, length, ref, ref1, success;
            this.projectFile = Gio.File.new_for_path(path);
            if (!this.projectFile.query_exists(null)) {
                return;
            }
            ref = this.projectFile.load_contents(null), success = ref[0], data = ref[1], length = ref[2];
            this.avprj = new Project_1.default(String(data));
            path = path.substring(0, path.lastIndexOf("/"));
            this.entitasFile = Gio.File.new_for_path(path + "/entitas.json");
            if (this.entitasFile.query_exists(null)) {
                ref1 = this.entitasFile.load_contents(null), success = ref1[0], data = ref1[1], length = ref1[2];
                this.entitas = JSON.parse(data);
            }
            else {
                this.entitas = null;
            }
            this.window.set_title((this.avprj.get('project_name')) + " - " + this.config.app_name);
            this.avContent.pack_start(new AvProperties_1.default(this.avprj).buildUI(), true, true, 0);
            this.avContent.get_style_context().add_provider(this.regularCss, 0);
            this.resContent.pack_start(new ResProperties_1.default(this.avprj).buildUI(), true, true, 0);
            this.resContent.get_style_context().add_provider(this.regularCss, 0);
            this.pkContent.pack_start(new PkProperties_1.default(this.avprj).buildUI(), true, true, 0);
            this.pkContent.get_style_context().add_provider(this.regularCss, 0);
            this.srcContent.pack_start(new SrcProperties_1.default(this.avprj).buildUI(), true, true, 0);
            this.srcContent.get_style_context().add_provider(this.regularCss, 0);
            this.window.show_all();
        };
        AppWindow.prototype.buildNotebook = function () {
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
        AppWindow.prototype.buildOptions = function (config) {
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
            nameentry.connect("changed", (function (_this) {
                return function () {
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
            prefixentry.connect("changed", (function (_this) {
                return function () {
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
            menubutton.connect("clicked", (function (_this) {
                return function () {
                    if (menubutton.get_active()) {
                        return menu.show_all();
                    }
                };
            })(this));
            menu = new Gtk.Popover();
            menu.set_relative_to(menubutton);
            menu.connect("show", (function (_this) {
                return function () {
                    nameentry.set_text(config.res_name);
                    return prefixentry.set_text(config.res_prefix);
                };
            })(this));
            menu.connect("closed", (function (_this) {
                return function () {
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
                        }
                        else {
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
        return AppWindow;
    })();
});
define("main", ["require", "exports", "AppWindow"], function (require, exports, AppWindow_1) {
    "use strict";
    // Generated by CoffeeScript 1.11.1
    var App, GLib, Gio, Gtk, app, config, config_file, data, length, ref, ref1, ref2, res_name_default, res_prefix_default, success;
    GLib = imports.gi.GLib;
    Gio = imports.gi.Gio;
    Gtk = imports.gi.Gtk;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = App = (function () {
        function App(config) {
            this.application = new Gtk.Application({
                application_id: 'com.darkoverlordodfdata.player',
                flags: Gio.ApplicationFlags.FLAGS_NONE
            });
            this.application.connect('activate', (function (_this) {
                return function () {
                    return _this.activate();
                };
            })(this));
        }
        App.prototype.activate = function () {
            this.buildAppMenu();
            this.appWindow = new AppWindow_1.default({
                application: this.application
            });
            this.appWindow.buildUI(config);
            this.window = this.appWindow.window;
            this.window.present();
        };
        /*
         * builds the Application Menu
         *
         * main app menu
         */
        App.prototype.buildAppMenu = function () {
            var aboutAction, menu, newAction, quitAction;
            menu = new Gio.Menu();
            menu.append("New", 'app.new');
            menu.append("About", 'app.about');
            menu.append("Quit", 'app.quit');
            this.application.set_app_menu(menu);
            newAction = new Gio.SimpleAction({
                name: 'new'
            });
            newAction.connect('activate', (function (_this) {
                return function () {
                    return _this.showNew();
                };
            })(this));
            this.application.add_action(newAction);
            aboutAction = new Gio.SimpleAction({
                name: 'about'
            });
            aboutAction.connect('activate', (function (_this) {
                return function () {
                    return _this.showAbout();
                };
            })(this));
            this.application.add_action(aboutAction);
            quitAction = new Gio.SimpleAction({
                name: 'quit'
            });
            quitAction.connect('activate', (function (_this) {
                return function () {
                    return _this.window.destroy();
                };
            })(this));
            this.application.add_action(quitAction);
        };
        /*
         * New project dialog
         */
        App.prototype.showNew = function () {
            return print("Not implemented");
        };
        /*
         * About dialog
         */
        App.prototype.showAbout = function () {
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
        return App;
    })();
    res_name_default = "custom.gresource";
    res_prefix_default = "/com/darkoverlordofdata/custom";
    config = {};
    config_file = Gio.File.new_for_path(GLib.get_user_data_dir() + "/bosco/config.json");
    if (config_file.query_exists(null)) {
        ref = file.load_contents(null), success = ref[0], data = ref[1], length = ref[2];
        config = JSON.parse(data);
    }
    config.res_name = (ref1 = config.res_name) != null ? ref1 : res_name_default;
    config.res_prefix = (ref2 = config.res_prefix) != null ? ref2 : res_prefix_default;
    config.app_name = "Player";
    app = new App(config);
    app.application.run(ARGV);
});
