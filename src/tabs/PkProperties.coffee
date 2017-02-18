GObject = imports.gi.GObject
Gtk = imports.gi.Gtk
Pango = imports.gi.Pango

import PropertyViewer from 'tabs/PropertyViewer'
###
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
###
export default class PkProperties extends PropertyViewer
    # Create the application itself
    constructor:(@prj) ->

    # Build the application's UI
    buildUI:() ->
        super()
        for item in @prj.data.vala_check_package
            @add(item.value, "", item.readonly)

        @grid

