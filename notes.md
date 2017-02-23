### installing stuf

dev/test/prod

dev - run in the ide
test - runs from ~/.local
prod - runs from  /usr/local

it needs to run smoothly in all locations
but the bits are in different locations and reference each other.

code references locations
.ui references icon location - not a good idea
.desktop file references locations

1st part of code:
```
#!/usr/bin/env gjs
const PREFIX = "/home/bruce/gjs/bosco/"
const PREFIX = "/home/bruce/.local/"
const PREFIX = "/usr/local/"
```
use sed to reset the prefix during install.

### autovala fields of interest
* autovala_version (24)
* project_name
* vala_version     vapi level
* vala_binary      location of exe
* desktop          .desktop file location
* full_icon        icon location
* gresource #      resources file location
* use_gresource #  resources to use file location

## TODO:
file:///usr/share/gir-1.0/Gtk-3.0.gir
file:///usr/share/gir-1.0/GLib-2.0.gir
file:///usr/share/gir-1.0/Gio-2.0.gir
file:///usr/share/gir-1.0/GObject-2.0.gir


./gir2dts /usr/share/gir-1.0/Gtk-3.0.gir src/gtk-3.0.d.ts
gir2dts /usr/share/gir-1.0/Gio-2.0.gir src/gio-2.0.d.ts
gir2dts /usr/share/gir-1.0/GLib-2.0.gir src/glib-2.0.d.ts
gir2dts /usr/share/gir-1.0/GObject-2.0.gir src/gobject-2.0.d.ts
gir2dts /usr/share/gir-1.0/Pango-1.0.gir src/pango-1.0.d.ts


Bosco Player should provide a gui to 
* manage component definitions (entitas.json)
* organize assets and update the resource xml - look at grrr.js
* edit .desktop file
* select icon
* start in debugger

Future?
* profile while running the game
* manage entity definitions
* adjust pool sizes
* scripting
