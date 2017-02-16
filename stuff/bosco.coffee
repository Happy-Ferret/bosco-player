GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gdk = imports.gi.Gdk
Gtk = imports.gi.Gtk
Notify = imports.gi.Notify
#Lang = imports.lang

APP_NAME = "Bosco!"

Notify.init(APP_NAME)

res_name_default = "custom.gresource"
res_prefix_default = "/org/gnome/custom"

res_name = res_name_default
res_prefix = res_prefix_default

config = {}

config_file = Gio.File.new_for_path(GLib.get_user_data_dir() + "/grrr/config.json")

if config_file.query_exists(null) 
    size = config_file.query_info("standard::size",
                                  Gio.FileQueryInfoFlags.NONE,
                                  null).get_size()

    try 
        data = config_file.read(null).read_bytes(size, null).get_data()

        config = JSON.parse(data)

        if config.res_name
            res_name = config.res_name
        

        if config.res_prefix
            res_prefix = config.res_prefix
        
    catch e
        printerr(e)
    



app = new Application()

app.application.run(ARGV)
