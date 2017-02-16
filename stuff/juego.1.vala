using Gtk;
using SDL;

// int main(string[] args) {
//     Gtk.init(ref args);
//     var window = new Gtk.Window();

//     window.title = "First GTK+ Program";
//     window.border_width = 10;
//     window.window_position = WindowPosition.CENTER;
//     window.set_default_size(640, 800);
//     window.destroy.connect(Gtk.main_quit);

//     var button = new Button.with_label("Click me!");
//     button.clicked.connect(() => {
//         button.label = "Thank you";
//         doStuff();
//     });

//     window.add(button);
//     window.show_all();

//     stdout.printf("MAIN5\n");
//     Gtk.main();
//     stdout.printf("MAIN6\n");
//     return 0;
// }

// void doStuff() {
//     stdout.printf("Doing Stuff!\n");
// }