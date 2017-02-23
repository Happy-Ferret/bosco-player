./gir2dts /usr/share/gir-1.0/Atk-1.0.gir src/gnome/atk-3.0.d.ts
./gir2dts /usr/share/gir-1.0/xlib-2.0.gir src/gnome/xlib-2.0.d.ts
./gir2dts /usr/share/gir-1.0/Gtk-3.0.gir src/gnome/gtk-3.0.d.ts
./gir2dts /usr/share/gir-1.0/Gio-2.0.gir src/gnome/gio-2.0.d.ts
./gir2dts /usr/share/gir-1.0/GLib-2.0.gir src/gnome/glib-2.0.d.ts
./gir2dts /usr/share/gir-1.0/GObject-2.0.gir src/gnome/gobject-2.0.d.ts
./gir2dts /usr/share/gir-1.0/Pango-1.0.gir src/gnome/pango-1.0.d.ts
    


cat src/gnome/gjs.d.ts \
    src/gnome/glib-2.0.d.ts \
    src/gnome/gobject-2.0.d.ts \
    src/gnome/xlib-2.0.d.ts \
    src/gnome/atk-3.0.d.ts \
    src/gnome/gio-2.0.d.ts \
    src/gnome/gtk-3.0.d.ts \
    src/gnome/pango-1.0.d.ts \
    > src/gjs.d.ts