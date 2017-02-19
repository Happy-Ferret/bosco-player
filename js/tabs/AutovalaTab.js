var AutovalaTab, GObject, Gtk, Pango,
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

export default AutovalaTab = (function(superClass) {
  extend(AutovalaTab, superClass);

  function AutovalaTab() {
    return AutovalaTab.__super__.constructor.apply(this, arguments);
  }

  AutovalaTab.prototype.buildUI = function() {
    var item, key, ref;
    AutovalaTab.__super__.buildUI.call(this);
    ref = this.prj.data;
    for (key in ref) {
      item = ref[key];
      if (!Array.isArray(item)) {
        this.add(key, item.value, item.readonly);
      }
    }
    return this.grid;
  };

  return AutovalaTab;

})(NotebookTab);
