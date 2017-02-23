/**
 * Atk.d.ts
 *
 */
declare module 'Atk' {
}
/**
 * Gio.d.ts
 *
 */
declare module 'Gio' {
    export class File extends GObject {
        query_exists(obj:any): boolean
        load_contents(obj:any): any
        static new_for_path(path: string): File
    }

}
/**
 * GLib.d.ts
 *
 */
declare module 'GLib' {
}
/**
 * GObject.d.ts
 *
 */
declare module 'GObject' {
}
/**
 * Gtk.d.ts
 *
 */
declare module 'Gtk' {
}
/**
 * Pango.d.ts
 *
 */
declare module 'Pango' {
}
/**
 * xlib.d.ts
 *
 */
declare module 'xlib' {
}