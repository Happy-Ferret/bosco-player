var GObject, Gtk, Pango, SourceTab,
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

export default SourceTab = (function(superClass) {
  extend(SourceTab, superClass);

  function SourceTab() {
    return SourceTab.__super__.constructor.apply(this, arguments);
  }

  SourceTab.prototype.buildUI = function() {
    var i, item, len, ref;
    SourceTab.__super__.buildUI.call(this);
    ref = this.prj.data.vala_source;
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      this.add(item.value, "", item.readonly);
    }
    return this.grid;
  };

  return SourceTab;

})(NotebookTab);
