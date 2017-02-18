GObject = imports.gi.GObject
Gtk = imports.gi.Gtk
Pango = imports.gi.Pango
###
 *
 * Abstract Class ProjectViewer - 
 *
 * view autovala data
 *
###
export default class PropertyViewer 
    ###
     # set the autovala project data 
     # @param prj:Project 
     ###
    constructor:(@prj) ->

    ###
     #
     #  buildUI  
     #
     #  sets up the base UI page for property display
     #  subclass must override & super this method
     #
    ###
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
        @selection.connect 'changed', => @onSelectionChanged()

        @grid = new Gtk.Grid()

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

        @scrollView = new Gtk.ScrolledWindow({
        	hscrollbar_policy: Gtk.PolicyType.NEVER,
        	vscrollbar_policy: Gtk.PolicyType.AUTOMATIC })
        @scrollView.add(@treeView)
        # Attach the treeview and label to the grid
        @grid.attach(@scrollView, 0, 0, 1, 1)
        @grid.attach(@label, 0, 1, 1, 1)


    ###
     # Add data to the list store
    ###
    add: (arg...) ->
        @listStore.set(@listStore.append(), [0, 1, 2],
            [String(arg[0]), String(arg[1]), String(arg[2])])
    
    ###
     # show the current selected row
    ###
    onSelectionChanged: () ->

        # Grab a treeiter pointing to the current selection
        [ isSelected, model, iter ] = @selection.get_selected()

        # Set the label to read off the values stored in the current selection
        @label.set_label("\n" +
            @listStore.get_value(iter, 0) + " " +
            @listStore.get_value(iter, 1) + " " +
            @listStore.get_value(iter, 2) + "\n")


