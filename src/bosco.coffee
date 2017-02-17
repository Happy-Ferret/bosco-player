GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gdk = imports.gi.Gdk
Gtk = imports.gi.Gtk
Notify = imports.gi.Notify

###
 * Main entry point
 * 
 * load the configuration and start gtk
###
import Application from 'Application'

res_name_default = "custom.gresource"
res_prefix_default = "/com/darkoverlordofdata/custom"
config = {}
config_file = Gio.File.new_for_path(GLib.get_user_data_dir() + "/bosco/config.json")
if config_file.query_exists(null) 
    [success, data, length] = file.load_contents(null)
    config = JSON.parse(data)

config.res_name = config.res_name ? res_name_default
config.res_prefix = config.res_prefix ? res_prefix_default
config.app_name = "Player"
Notify.init(config.app_name)
    
app = new Application(config)
app.application.run(ARGV)
