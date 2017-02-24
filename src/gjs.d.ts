/**
 * Atk.d.ts
 *
 */
declare module 'Atk' {
}
/**
 * cairo.d.ts
 *
 */
declare module 'cairo' {
  export function image_surface_create():void
  export enum Content{
    COLOR,
    ALPHA,
    COLOR_ALPHA,
  }
}
/**
 * Gio.d.ts
 *
 */
declare module 'Gio' {
    import * as GObject from "GObject"
    export class File extends GObject.Object {
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
 * Gdk.d.ts
 *
 */
declare module 'Gdk' {
}
/**
 * Pango.d.ts
 *
 */
declare module 'Pango' {
}
/**
 * xLib.d.ts
 *
 */
declare module 'xLib' {
}