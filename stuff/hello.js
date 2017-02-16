const Lang = imports.lang;
const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;
const Gtk = imports.gi.Gtk;

function readFile(filename) {
  let file = Gio.file_new_for_path(filename);
  let [success, data, length] = file.load_contents(null);
  return data;
}

const App = Lang.Class({
  Name: 'App',
  Extends: Gtk.Application,

  _init: function() {
    this.parent();
  },

  vfunc_activate: function() {
    this.window = new AppWindow({application: this});
    this.window.present();
  }
});

const AppWindow = Lang.Class({
  Name: 'AppWindow',
  Extends: Gtk.ApplicationWindow,
//   Template: readFile('sample.ui'),
//   Children: ['button1'],
  Template: readFile('hello.glade'),
  Children: ['label', 'button'],

  _init: function(params) {
    this.parent(params);
    this.label.set_text('Hello, World!');
    this.button.connect('clicked', this.onClose.bind(this));
    // this.button1.connect('clicked', this.onClose.bind(this));
  },

  onClose: function() {
    this.application.quit();
  }
});

let app = new App();
app.run(ARGV);