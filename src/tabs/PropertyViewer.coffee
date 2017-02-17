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
export default class PropertyViewer 
    # Create the application itself
    constructor:(@prj) ->

    buildUI:() ->
        @listStore = new Gtk.ListStore()
        @listStore.set_column_types([
            GObject.TYPE_STRING,    # Key
            GObject.TYPE_STRING,    # Value
            GObject.TYPE_STRING])   # Readonly
    
        # Create the treeview
        @treeView = new Gtk.TreeView(
            expand: true,
            model: @listStore)
    
        # Create the label that shows details for the name you select
        @label = new Gtk.Label(label: "")

        # Get which item is selected
        @selection = @treeView.get_selection()

        # When something new is selected, call _on_changed
        @selection.connect 'changed', => @_onSelectionChanged()

        @grid = new Gtk.Grid

    _onSelectionChanged: () ->

        # Grab a treeiter pointing to the current selection
        [ isSelected, model, iter ] = @selection.get_selected()

        # Set the label to read off the values stored in the current selection
        @label.set_label("\n" +
            @listStore.get_value(iter, 0) + " " +
            @listStore.get_value(iter, 1) + " " +
            @listStore.get_value(iter, 2) + "\n")


