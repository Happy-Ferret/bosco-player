GObject = imports.gi.GObject
Gtk = imports.gi.Gtk
Pango = imports.gi.Pango

import NotebookTab from 'tabs/NotebookTab'
###
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
###
export default class AutovalaTab extends NotebookTab
    
    # Build the application's UI
    buildUI:() ->
        super()
        for key, item of @prj.data
            if not Array.isArray(item)
                @add(key, item.value, item.readonly)
        
        @grid

