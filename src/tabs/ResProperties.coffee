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
        # Create the application window
        super()

        # Create the underlying liststore for the project data
        for item in @prj.data.gresource
            [name, path] = String(item.value).split(' ')
            @listStore.set(@listStore.append(), [0, 1, 2],
                [name, path, String(item.readonly)])


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

