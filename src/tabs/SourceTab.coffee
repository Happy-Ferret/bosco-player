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
export default class SourceTab extends NotebookTab
    
    # Build the application's UI
    buildUI:() ->
        super()
        for item in @prj.data.vala_source
            @add(item.value, "", item.readonly)

        @grid

