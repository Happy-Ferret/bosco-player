GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gtk = imports.gi.Gtk

import AppWindow from 'app/AppWindow'

export default class App
    constructor: () ->
        @application = new Gtk.Application(
            application_id: 'org.example.myapp',
            flags: Gio.ApplicationFlags.FLAGS_NONE
        )
        @application.connect 'activate', => @activate()

    activate: () ->
        @window = new AppWindow(application: @application).window
        @window.present()
        return


