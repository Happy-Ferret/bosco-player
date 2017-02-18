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
export default class ResProperties extends PropertyViewer
    # Create the application itself
    constructor:(@prj) ->
    
    # Build the application's UI
    buildUI:() ->
        super()
        if @prj.data.gresource?
            for item in @prj.data.gresource
                [name, path] = String(item.value).split(' ')
                @add(name, path, item.readonly)

        @grid

