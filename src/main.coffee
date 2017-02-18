GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk

import AppWindow from 'AppWindow'

export default class App
    constructor: () ->
        @application = new Gtk.Application(
            application_id: 'com.darkoverlordodfdata.player',
            flags: Gio.ApplicationFlags.FLAGS_NONE
        )
        @application.connect 'activate', => @activate()

    activate: () ->
        @window = new AppWindow(application: @application).window
        @window.present()
        return



app = new App()
app.application.run(ARGV)
