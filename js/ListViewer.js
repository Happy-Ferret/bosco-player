var GObject, Gtk, ListViewer, Pango;

GObject = imports.gi.GObject;

Gtk = imports.gi.Gtk;

Pango = imports.gi.Pango;


/*
 *
 * ListViewer class - 
 *
 * parses autovala data
 *
 */

export default ListViewer = (function() {
  function ListViewer() {}

  ListViewer.prototype.buildUI = function() {
    var bold, contact, firstName, i, lastName, len, normal, phone, phonebook;
    this._listStore = new Gtk.ListStore();
    this._listStore.set_column_types([GObject.TYPE_STRING, GObject.TYPE_STRING, GObject.TYPE_STRING, GObject.TYPE_STRING]);
    phonebook = [
      {
        name: "Jurg",
        surname: "Billeter",
        phone: "555-0123",
        description: "A friendly person."
      }, {
        name: "Johannes",
        surname: "Schmid",
        phone: "555-1234",
        description: "Easy phone number to remember."
      }, {
        name: "Julita",
        surname: "Inca",
        phone: "555-2345",
        description: "Another friendly person."
      }, {
        name: "Javier",
        surname: "Jardon",
        phone: "555-3456",
        description: "Bring fish for his penguins."
      }, {
        name: "Jason",
        surname: "Clinton",
        phone: "555-4567",
        description: "His cake's not a lie."
      }, {
        name: "Random J.",
        surname: "Hacker",
        phone: "555-5678",
        description: "Very random!"
      }
    ];
    for (i = 0, len = phonebook.length; i < len; i++) {
      contact = phonebook[i];
      this._listStore.set(this._listStore.append(), [0, 1, 2, 3], [contact.name, contact.surname, contact.phone, contact.description]);
    }
    this._treeView = new Gtk.TreeView({
      expand: true,
      model: this._listStore
    });
    firstName = new Gtk.TreeViewColumn({
      title: "First Name"
    });
    lastName = new Gtk.TreeViewColumn({
      title: "Last Name"
    });
    phone = new Gtk.TreeViewColumn({
      title: "Phone Number"
    });
    bold = new Gtk.CellRendererText({
      weight: Pango.Weight.BOLD
    });
    normal = new Gtk.CellRendererText();
    firstName.pack_start(bold, true);
    lastName.pack_start(normal, true);
    phone.pack_start(normal, true);
    firstName.add_attribute(bold, "text", 0);
    lastName.add_attribute(normal, "text", 1);
    phone.add_attribute(normal, "text", 2);
    this._treeView.insert_column(firstName, 0);
    this._treeView.insert_column(lastName, 1);
    this._treeView.insert_column(phone, 2);
    this._label = new Gtk.Label({
      label: ""
    });
    this.selection = this._treeView.get_selection();
    this.selection.connect('changed', (function(_this) {
      return function() {
        return _this._onSelectionChanged();
      };
    })(this));
    this._grid = new Gtk.Grid;
    this._grid.attach(this._treeView, 0, 0, 1, 1);
    this._grid.attach(this._label, 0, 1, 1, 1);
    return this._grid;
  };

  ListViewer.prototype._onSelectionChanged = function() {
    var isSelected, iter, model, ref;
    ref = this.selection.get_selected(), isSelected = ref[0], model = ref[1], iter = ref[2];
    return this._label.set_label("\n" + this._listStore.get_value(iter, 0) + " " + this._listStore.get_value(iter, 1) + " " + this._listStore.get_value(iter, 2) + "\n" + this._listStore.get_value(iter, 3));
  };

  return ListViewer;

})();
