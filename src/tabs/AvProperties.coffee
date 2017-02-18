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
export default class AvProperties extends PropertyViewer
    # Create the application itself
    constructor:(@prj) ->
    
    # Build the application's UI
    buildUI:() ->
        super()
        for key, item of @prj.data
            if not Array.isArray(item)
                @add(key, item.value, item.readonly)
        
        @grid

