
declare const ARGV: string[]
type Handler = (...args) => void
declare function print(...args: any[])
declare function require(name: string): any

declare class GObject {
    connect(signal: string, handler: Handler)
}

declare module "GObject" {
    var TYPE_STRING: number
}
declare module "Gio" {

    export class File extends GObject {
        query_exists(obj:any): boolean
        load_contents(obj:any): any
        static new_for_path(path: string): File
    }
    export class Menu extends GObject {
        append(label: string, action: string)
    }
    export class SimpleAction extends GObject {
        constructor(config: any)
    }
    export enum ApplicationFlags {
        FLAGS_NONE
    }
    export function file_new_for_path(path: string): File
}

declare module "Gtk" {
    export enum Align {
        END
    }
    export enum IconSize {
        SMALL_TOOLBAR
    }
    export enum PositionType {
        RIGHT
    }
    export enum FileChooserAction {
        OPEN
    }
    export enum ResponseType {
        OK,
        CANCEL
    }
    export enum PolicyType {
        NEVER,
        AUTOMATIC
    }
    export abstract class Widget extends GObject {
        constructor(config?: any)
        show_all()
    }
    export class ApplicationWindow extends Widget {

    }
    export class Application extends Widget {
    }
    export class AboutDialog extends Widget {
        set_transient_for(parent: any)
        set_program_name(name: string)
        set_version(version: string)
        set_comments(comments: string)
        set_website(url: string)
        set_website_label(label: string)
        set_authors(authors: string[])
        run()
        destroy()
    }
    export class CssProvider extends GObject {}
    export class HeaderBar extends Widget {
    }
    export class Box extends Widget {
        set_vexpand(flag: boolean)
        set_hexpand(flag: boolean)
        set_center_widget(widget: Widget)
        get_style_context(): any
    }
    export class Grid extends Widget {
        set_column_homogeneous(flag: boolean)
        attach(widget: Widget, left: number, top: number, width: number, height: number)
        attach_next_to(child: Widget, sibline: Widget, side: PositionType, width: number, height: number)
    }
    export class Entry extends Widget {
        set_text(text: string)
        get_text(): string
        set_placeholder_text(text: string)
    }
    export class Label extends Widget {
        set_halign(align:Align)
    }
    export class Button extends Widget {
        add(widget: Widget)
    }
    export class ToggleButton extends Button {
        set_active(is_active: boolean)
        get_active(): boolean
    }
    export class Popover extends Widget {
        set_relative_to(relative_to: Widget)
        add(widget: Widget)
    }
    export class Image extends Widget {        
    }
    export class FileChooserDialog extends Widget {
        set_select_multiple(select: boolean)
        set_default_response(response: ResponseType)
        add_button(label: string, response: ResponseType)
        run()
    }
    export class Builder extends GObject {
        add_from_file(path: string)
        get_object(name: string): any
    }
    export class ListStore extends GObject {

    }
    export class TreeView extends Widget {

    }
    export class TreeViewColumn extends Widget {
        
    }
    
    export class CellRendererText extends Widget {

    }
    export class ScrolledWindow extends Widget {

    }

}

declare module "GLib" {
    export function get_user_data_dir(): string
}

declare module "Notify" {}

declare module "Pango" {
    export enum Weight {
        BOLD    
    }
}

declare module "Lang" {
    export function Class(config: any)
}
