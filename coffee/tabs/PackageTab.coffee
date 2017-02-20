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
export default class PackageTab extends NotebookTab

    # Build the application's UI
    buildUI:() ->
        super()
        for item in @prj.data.vala_check_package
            @add(item.value, "", item.readonly)

        @grid

