// Generated by CoffeeScript 1.11.1
var GLib, Gdk, Gio, Gtk, Notify, app, config, config_file, data, length, ref, ref1, ref2, res_name_default, res_prefix_default, success;

GLib = imports.gi.GLib;

Gio = imports.gi.Gio;

Gdk = imports.gi.Gdk;

Gtk = imports.gi.Gtk;

Notify = imports.gi.Notify;


/*
 * Main entry point
 * 
 * load the configuration and start gtk
 */

import Application from 'Application';

import TreeViewer from 'TreeViewer';

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

Notify.init(config.app_name);

app = new Application(config);

app.application.run(ARGV);