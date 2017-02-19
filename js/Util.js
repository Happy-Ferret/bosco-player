var Gio, Gtk, Lang, Util;

Gio = imports.gi.Gio;

Gtk = imports.gi.Gtk;

Lang = imports.lang;

export default Util = (function() {
  function Util() {}

  Util.readFile = function(filename) {
    var data, file, length, ref, success;
    file = Gio.file_new_for_path(filename);
    if (file.query_exists(null)) {
      ref = file.load_contents(null), success = ref[0], data = ref[1], length = ref[2];
      return data;
    } else {
      return null;
    }
  };

  Util.loadTemplate = function(name, path, children, params) {
    var klass;
    klass = Lang.Class({
      Name: name,
      Extends: Gtk.ApplicationWindow,
      Template: Util.readFile(path),
      Children: children,
      _init: function(params) {
        return this.parent(params);
      }
    });
    return new klass(params);
  };

  return Util;

})();
