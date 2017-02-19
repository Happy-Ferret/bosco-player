var AppWindow, GLib, Gio, Gtk, Lang, readFile;

Lang = imports.lang;

GLib = imports.gi.GLib;

Gio = imports.gi.Gio;

Gtk = imports.gi.Gtk;

readFile = function(filename) {
  var data, file, length, ref, success;
  file = Gio.file_new_for_path(filename);
  ref = file.load_contents(null), success = ref[0], data = ref[1], length = ref[2];
  return data;
};

export default AppWindow = (function() {
  var GladeAppWindow;

  GladeAppWindow = Lang.Class({
    Name: 'AppWindow',
    Extends: Gtk.ApplicationWindow,
    Template: readFile('data/main.ui'),
    Children: ['background'],
    _init: function(params, outer) {
      this.parent(params);
    }
  });

  function AppWindow(params) {
    this.window = new GladeAppWindow(params, this);
  }

  return AppWindow;

})();
