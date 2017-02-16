using Gtk;
//SDL_CreateWindowFrom()


public class CustomClass {
    public int x = 0;
}

public CustomClass customFunction() {
    return new CustomClass();
}

public class Juego : Gtk.Application {

    public Juego() {
        Object(application_id: "notify.app",
        flags: ApplicationFlags.FLAGS_NONE);
    }

    protected override void activate() {
        var app_window = new Gtk.ApplicationWindow(this);
        var grid = new Gtk.Grid();
        grid.orientation = Gtk.Orientation.VERTICAL;
        grid.row_spacing = 6;

        var title_label = new Gtk.Label(_("Notifications"));
        var show_button = new Gtk.Button.with_label(_("Show"));

        grid.add(title_label);
        grid.add(show_button);

        app_window.title = _("Tierra del Juego");
        app_window.set_border_width(12);
        app_window.set_position(Gtk.WindowPosition.CENTER);
        app_window.set_default_size(800, 600);
        app_window.destroy.connect(Gtk.main_quit);

        show_button.clicked.connect(() => {
            var notification = new Notification(_("Hello World"));
            var image = new Gtk.Image.from_icon_name("dialog-warning", Gtk.IconSize.DIALOG);
            notification.set_icon(image.gicon);            
            notification.set_body(_("This is my first notification!"));
            this.send_notification("notify.app", notification);
        });
        
        try {
            app_window.icon = new Gdk.Pixbuf.from_file("juego.png");
        } catch (Error e) {
            stderr.printf ("Could not load application icon: %s\n", e.message);
        }
        app_window.add(grid);
        app_window.show_all();
        app_window.show();
        Gtk.main();
    }


    // public static int main(string[] args) {
    //     var app = new Juego();
    //     return app.run(args);
    // }
}
