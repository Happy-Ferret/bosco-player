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
        # Create the application window
        super()

        # Put the project data into the liststore
        for key, item of @prj.data
            if not Array.isArray(item)
                @listStore.set(@listStore.append(), [0, 1, 2],
                    [String(key), String(item.value), String(item.readonly)])
        

        # Create the columns for the address book
        key = new Gtk.TreeViewColumn(title: "Key")
        value = new Gtk.TreeViewColumn(title: "Value")
        readonly = new Gtk.TreeViewColumn(title: "Readonly")

        # Create a cell renderer for when bold text is needed
        bold = new Gtk.CellRendererText(weight: Pango.Weight.BOLD)

        # Create a cell renderer for normal text
        normal = new Gtk.CellRendererText()

        # Pack the cell renderers into the columns
        key.pack_start(bold, true)
        value.pack_start(normal, true)
        readonly.pack_start(normal, true)

        # Set each column to pull text from the TreeView's model
        key.add_attribute(bold, "text", 0)
        value.add_attribute(normal, "text", 1)
        readonly.add_attribute(normal, "text", 2)

        # Insert the columns into the treeview
        @treeView.insert_column(key, 0)
        @treeView.insert_column(value, 1)
        @treeView.insert_column(readonly, 2)

        # Attach the treeview and label to the grid
        @grid.attach(@treeView, 0, 0, 1, 1)
        @grid.attach(@label, 0, 1, 1, 1)

        @grid

