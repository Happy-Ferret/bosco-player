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
export default class ResourceTab extends NotebookTab
    
    # Build the application's UI
    buildUI:() ->
        super()
        if @prj.data.gresource?
            for item in @prj.data.gresource
                [name, path] = String(item.value).split(' ')
                @add(name, path, item.readonly)

        @grid

