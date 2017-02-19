var App, GLib, Gio, Gtk;

GLib = imports.gi.GLib;

Gio = imports.gi.Gio;

Gtk = imports.gi.Gtk;

import AppWindow from 'app/AppWindow';

export default App = (function() {
  function App() {
    this.application = new Gtk.Application({
      application_id: 'org.example.myapp',
      flags: Gio.ApplicationFlags.FLAGS_NONE
    });
    this.application.connect('activate', (function(_this) {
      return function() {
        return _this.activate();
      };
    })(this));
  }

  App.prototype.activate = function() {
    this.window = new AppWindow({
      application: this.application
    }).window;
    this.window.present();
  };

  return App;

})();
