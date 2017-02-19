var GLib, GResource, Gdk, Gio, Gtk, Notify;

GLib = imports.gi.GLib;

Gio = imports.gi.Gio;

Gdk = imports.gi.Gdk;

Gtk = imports.gi.Gtk;

Notify = imports.gi.Notify;

export default GResource = (function() {
  function GResource(config) {
    this.resName = config.res_name;
    this.resPrefix = config.res_prefix;
    this.files = [];
  }

  GResource.prototype.setName = function(name) {
    return this.resName = name;
  };

  GResource.prototype.setPrefix = function(prefix) {
    return this.resPrefix = prefix;
  };


  /*
   * add
   *   
   * @param dir
   */

  GResource.prototype.add = function(dir) {
    var e, file, fileEnum, info, results;
    this.base = this.base || dir.get_parent();
    if (dir.query_info("standard::*", Gio.FileQueryInfoFlags.NONE, null).get_file_type() !== Gio.FileType.DIRECTORY) {
      this.files.push(dir);
      return;
    }
    fileEnum = null;
    try {
      fileEnum = dir.enumerate_children("standard::name,standard::type", Gio.FileQueryInfoFlags.NONE, null);
    } catch (error) {
      e = error;
      fileEnum = null;
    }
    if (fileEnum !== null) {
      info = null;
      results = [];
      while (info = fileEnum.next_file(null) !== null) {
        file = dir.resolve_relative_path(info.get_name());
        if (info.get_file_type() === Gio.FileType.DIRECTORY) {
          results.push(this.add(file));
        } else {
          results.push(this.files.push(file));
        }
      }
      return results;
    }
  };


  /*
   * build
   *
   */

  GResource.prototype.build = function() {
    var file, i, info, len, outputstream, path, ref, xml, xmlfile;
    xml = "<?xml version='1.0' encoding='UTF-8'?>\n";
    xml += "<gresources>\n\t<gresource prefix='" + this.resPrefix + "'>\n";
    ref = this.files;
    for (i = 0, len = ref.length; i < len; i++) {
      file = ref[i];
      info = file.query_info("standard::*", Gio.FileQueryInfoFlags.NONE, null);
      xml += "\t\t";
      path = this.base.get_relative_path(file).replace(/&/g, "&amp").replace(/</g, "&lt").replace(/>/g, "&gt").replace(/"/g, "&quot").replace(/'/g, "&apos");
      if (/image\//.test(info.get_content_type())) {
        xml += "<file preprocess='to-pixdata'>" + path + "</file>\n";
      } else {
        xml += "<file>" + path + "</file>\n";
      }
    }
    xml += "\t</gresource>\n</gresources>\n";
    xmlfile = this.base.resolve_relative_path(this.resName + ".xml");
    if (xmlfile.query_exists(null)) {
      xmlfile["delete"](null);
    }
    outputstream = xmlfile.create(Gio.FileCreateFlags.REPLACE_DESTINATION, null);
    outputstream.write_all(xml, null);
    return outputstream.close(null);
  };


  /*
   * compile
   *   
   * @param next
   */

  GResource.prototype.compile = function(next) {
    var e, ok, pid, ref;
    if (next == null) {
      next = (function(_this) {
        return function() {
          return {};
        };
      })(this);
    }
    try {
      ref = GLib.spawn_async(this.base.get_path(), ["glib-compile-resources", this.resName + ".xml"], GLib.get_environ(), GLib.SpawnFlags.SEARCH_PATH_FROM_ENVP | GLib.SpawnFlags.DO_NOT_REAP_CHILD, null), ok = ref[0], pid = ref[1];
    } catch (error) {
      e = error;
      printerr(e);
    }
    if (ok === false) {
      return;
    }
    if (typeof pid === "number") {
      return GLib.child_watch_add(GLib.PRIORITY_DEFAULT, pid, (function(_this) {
        return function() {
          var notification;
          GLib.spawn_close_pid(pid);
          try {
            notification = new Notify.Notification({
              summary: "Gresource file generated!",
              body: _this.resName + " generated at " + _this.base.get_path(),
              icon_name: "dialog-information"
            });
            notification.set_timeout(1000);
            notification.show();
          } catch (error) {
            e = error;
            printerr(e);
          }
          return next();
        };
      })(this));
    }
  };

  return GResource;

})();
