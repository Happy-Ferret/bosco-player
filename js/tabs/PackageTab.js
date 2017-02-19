var GObject, Gtk, PackageTab, Pango,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

GObject = imports.gi.GObject;

Gtk = imports.gi.Gtk;

Pango = imports.gi.Pango;

import NotebookTab from 'tabs/NotebookTab';


/*
 *
 * ProjectViewer class - 
 *
 * view autovala data
 *
 */

export default PackageTab = (function(superClass) {
  extend(PackageTab, superClass);

  function PackageTab() {
    return PackageTab.__super__.constructor.apply(this, arguments);
  }

  PackageTab.prototype.buildUI = function() {
    var i, item, len, ref;
    PackageTab.__super__.buildUI.call(this);
    ref = this.prj.data.vala_check_package;
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      this.add(item.value, "", item.readonly);
    }
    return this.grid;
  };

  return PackageTab;

})(NotebookTab);
