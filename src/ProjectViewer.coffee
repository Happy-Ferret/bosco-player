GObject = imports.gi.GObject
Gtk = imports.gi.Gtk
Pango = imports.gi.Pango

###
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
###
export default class ProjectViewer 
    # Create the application itself
    constructor:(@prj) ->
    

    # Build the application's UI
    buildUI:() ->
        # Create the application window

        # Create the underlying liststore for the project data
        @_listStore = new Gtk.ListStore()
        @_listStore.set_column_types([
            GObject.TYPE_STRING,    # Key
            GObject.TYPE_STRING,    # Value
            GObject.TYPE_STRING])   # Readonly


        # Put the project data into the liststore
        for key, item of @prj.data
            if not Array.isArray(item)
                @_listStore.set(@_listStore.append(), [0, 1, 2],
                    [String(key), String(item.value), String(item.readonly)])
        
        for key, item of @prj.data
            if Array.isArray(item)
                @_listStore.set(@_listStore.append(), [0, 1, 2],
                    [String(key), String(item.length), ''])


        # Create the treeview
        @_treeView = new Gtk.TreeView(
            expand: true,
            model: @_listStore)

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
        @_treeView.insert_column(key, 0)
        @_treeView.insert_column(value, 1)
        @_treeView.insert_column(readonly, 2)

        # Create the label that shows details for the name you select
        @_label = new Gtk.Label(label: "")

        # Get which item is selected
        @selection = @_treeView.get_selection()

        # When something new is selected, call _on_changed
        @selection.connect('changed', => @_onSelectionChanged())

        # Create a grid to organize everything in
        @_grid = new Gtk.Grid

        # Attach the treeview and label to the grid
        @_grid.attach(@_treeView, 0, 0, 1, 1)
        @_grid.attach(@_label, 0, 1, 1, 1)

        @_grid

    _onSelectionChanged: () ->

        # Grab a treeiter pointing to the current selection
        [ isSelected, model, iter ] = @selection.get_selected()

        # Set the label to read off the values stored in the current selection
        @_label.set_label("\n" +
            @_listStore.get_value(iter, 0) + " " +
            @_listStore.get_value(iter, 1) + " " +
            @_listStore.get_value(iter, 2) + "\n")


