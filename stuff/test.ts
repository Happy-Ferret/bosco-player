#!/usr/bin/gjs
const Gtk = imports.gi.Gtk

class Application {

    application: Gtk.Application
    _window: Gtk.ApplicationWindow
    label: Gtk.Label

    // create the application
    constructor() {
        this.application = new Gtk.Application()
        // connect to 'activate' and 'startup' signals to handlers.
        this.application.connect('activate', () => this._onActivate())
        this.application.connect('startup', () => this._onStartup())
    }

    // create the UI
    _buildUI() {
        this._window = new Gtk.ApplicationWindow({application: this.application, title: "Hello World!"})
        this._window.set_default_size(200, 200)
        this.label = new Gtk.Label({label: "Hello World"})
        this._window.add(this.label)
    }
    // handler for 'activate' signal
    _onActivate() {
        // show the window and all child widgets
        this._window.show_all()
    }
    // handler for 'startup' signal
    _onStartup() {
        this._buildUI()
    }
}
// run the application
var app = new Application()
app.application.run(ARGV)
