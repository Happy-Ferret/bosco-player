var GObject, Gtk, Pango, ResourceTab,
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

export default ResourceTab = (function(superClass) {
  extend(ResourceTab, superClass);

  function ResourceTab() {
    return ResourceTab.__super__.constructor.apply(this, arguments);
  }

  ResourceTab.prototype.buildUI = function() {
    var i, item, len, name, path, ref, ref1;
    ResourceTab.__super__.buildUI.call(this);
    if (this.prj.data.gresource != null) {
      ref = this.prj.data.gresource;
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        ref1 = String(item.value).split(' '), name = ref1[0], path = ref1[1];
        this.add(name, path, item.readonly);
      }
    }
    return this.grid;
  };

  return ResourceTab;

})(NotebookTab);
