/**
 * gtk.d.ts
 * 
 * Gtk declarations for typescript
 */
declare module "Gtk" {
    import * as GObject from "GObject"
    import * as GLib from "GLib"
    import * as Gio from "Gio"

    export class AboutDialog extends Dialog {
        constructor()
        add_credit_section(section_name: string, people: string[]):void
        get_artists():string[]
        get_authors():string[]
        get_comments():string
        get_copyright():string
        get_documenters():string[]
        get_license():string
        get_license_type():License
        get_logo():any
        get_logo_icon_name():string
        get_program_name():string
        get_translator_credits():string
        get_version():string
        get_website():string
        get_website_label():string
        get_wrap_license():boolean
        set_artists(artists: string[]):void
        set_authors(authors: string[]):void
        set_comments(comments: string):void
        set_copyright(copyright: string):void
        set_documenters(documenters: string[]):void
        set_license(license: string):void
        set_license_type(license_type: License):void
        set_logo(logo: any):void
        set_logo_icon_name(icon_name: string):void
        set_program_name(name: string):void
        set_translator_credits(translator_credits: string):void
        set_version(version: string):void
        set_website(website: string):void
        set_website_label(website_label: string):void
        set_wrap_license(wrap_license: boolean):void
    }
    export class AccelGroup extends GObject.Object {
        activate(accel_quark: any, acceleratable: GObject.Object, accel_key: number, accel_mods: any):boolean
        //connect(accel_key: number, accel_mods: any, accel_flags: any, closure: any):void
        connect_by_path(accel_path: string, closure: any):void
        disconnect(closure: any):boolean
        disconnect_key(accel_key: number, accel_mods: number):boolean
        find(find_func: any, data: any):any
        get_is_locked():boolean
        get_modifier_mask():number
        lock():void
        query(accel_key: number, accel_mods: number, n_entries: number):any[]
        unlock():void
    }
    export class Adjustment extends GObject.InitiallyUnowned {
        constructor(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number)
        changed():void
        clamp_page(lower: number, upper: number):void
        configure(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number):void
        get_lower():number
        get_minimum_increment():number
        get_page_increment():number
        get_page_size():number
        get_step_increment():number
        get_upper():number
        get_value():number
        set_lower(lower: number):void
        set_page_increment(page_increment: number):void
        set_page_size(page_size: number):void
        set_step_increment(step_increment: number):void
        set_upper(upper: number):void
        set_value(value: number):void
        value_changed():void
    }
    export class ApplicationWindow extends Window {
        constructor(application: Application)
        get_id():number
        get_show_menubar():boolean
        set_show_menubar(show_menubar: boolean):void
    }
    export class Application extends Gio.Application {
        constructor(config?:any)
        constructor(application_id: string, flags: Gio.ApplicationFlags)
        add_accelerator(accelerator: string, action_name: string, parameter: any):void
        add_window(window: Window):void
        get_accels_for_action(detailed_action_name: string):string[]
        get_actions_for_accel(accel: string):string[]
        get_active_window():Window
        get_app_menu():Gio.MenuModel
        get_menu_by_id(id: string):Gio.Menu
        get_menubar():Gio.MenuModel
        get_window_by_id(id: number):Window
        get_windows():any
        inhibit(window: Window, flags: ApplicationInhibitFlags, reason: string):number
        is_inhibited(flags: ApplicationInhibitFlags):boolean
        list_action_descriptions():string[]
        prefers_app_menu():boolean
        remove_accelerator(action_name: string, parameter: any):void
        remove_window(window: Window):void
        set_accels_for_action(detailed_action_name: string, accels: string[]):void
        set_app_menu(app_menu: Gio.MenuModel):void
        set_menubar(menubar: Gio.MenuModel):void
        uninhibit(cookie: number):void
    }
    export class Bin extends Container {
        get_child():Widget
    }
    
    export class Box extends Container {
        constructor()
        constructor(orientation: Orientation, spacing: number)
        get_baseline_position():BaselinePosition
        get_center_widget():Widget
        get_homogeneous():boolean
        get_spacing():number
        pack_end(child: Widget, expand: boolean, fill: boolean, padding: number):void
        pack_start(child: Widget, expand: boolean, fill: boolean, padding: number):void
        query_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType):void
        reorder_child(child: Widget, position: number):void
        set_baseline_position(position: BaselinePosition):void
        set_center_widget(widget: Widget):void
        set_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType):void
        set_homogeneous(homogeneous: boolean):void
        set_spacing(spacing: number):void
    }
    export class Builder extends GObject.Object {
        constructor()
        constructor(filename: string)
        constructor(resource_path: string)
        constructor(string: string, length: number)
        add_callback_symbol(callback_name: string, callback_symbol: Function):void
        add_callback_symbols(first_callback_name: string, first_callback_symbol: Function, ...args: any[]):void
        add_from_file(filename: string):number
        add_from_resource(resource_path: string):number
        add_from_string(buffer: string, length: number):number
        add_objects_from_file(filename: string, object_ids: string[]):number
        add_objects_from_resource(resource_path: string, object_ids: string[]):number
        add_objects_from_string(buffer: string, length: number, object_ids: string[]):number
        connect_signals(user_data: any):void
        connect_signals_full(func: Function, user_data: any):void
        expose_object(name: string, object: GObject.Object):void
        get_application():Application
        get_object(name: string):GObject.Object
        get_objects():any
        get_translation_domain():string
        get_type_from_name(type_name: string):number
        lookup_callback_symbol(callback_name: string):Function
        set_application(application: Application):void
        set_translation_domain(domain: string):void
        value_from_string(pspec: any, string: string, value: any):boolean
        value_from_string_type(type: number, string: string, value: any):boolean
    }
    export class Button extends Bin {
        constructor()
        constructor(icon_name: string, size: number)
        constructor(label: string)
        clicked():void
        enter():void
        get_alignment(xalign: number, yalign: number):void
        get_always_show_image():boolean
        get_event_window():any
        get_focus_on_click():boolean
        get_image():Widget
        get_image_position():PositionType
        get_label():string
        get_relief():ReliefStyle
        get_use_stock():boolean
        get_use_underline():boolean
        leave():void
        pressed():void
        released():void
        set_alignment(xalign: number, yalign: number):void
        set_always_show_image(always_show: boolean):void
        set_focus_on_click(focus_on_click: boolean):void
        set_image(image: Widget):void
        set_image_position(position: PositionType):void
        set_label(label: string):void
        set_relief(relief: ReliefStyle):void
        set_use_stock(use_stock: boolean):void
        set_use_underline(use_underline: boolean):void
    }
    
    export class CellRenderer extends GObject.InitiallyUnowned {
        constructor(config?:any)
        activate(event: any, widget: Widget, path: string, background_area: any, cell_area: any, flags: CellRendererState):boolean
        get_aligned_area(widget: Widget, flags: CellRendererState, cell_area: any, aligned_area: any):void
        get_alignment(xalign: number, yalign: number):void
        get_fixed_size(width: number, height: number):void
        get_padding(xpad: number, ypad: number):void
        get_preferred_height(widget: Widget, minimum_size: number, natural_size: number):void
        get_preferred_height_for_width(widget: Widget, width: number, minimum_height: number, natural_height: number):void
        get_preferred_size(widget: Widget, minimum_size: any, natural_size: any):void
        get_preferred_width(widget: Widget, minimum_size: number, natural_size: number):void
        get_preferred_width_for_height(widget: Widget, height: number, minimum_width: number, natural_width: number):void
        get_request_mode():SizeRequestMode
        get_sensitive():boolean
        get_size(widget: Widget, cell_area: any, x_offset: number, y_offset: number, width: number, height: number):void
        get_state(widget: Widget, cell_state: CellRendererState):StateFlags
        get_visible():boolean
        is_activatable():boolean
        render(cr: any, widget: Widget, background_area: any, cell_area: any, flags: CellRendererState):void
        set_alignment(xalign: number, yalign: number):void
        set_fixed_size(width: number, height: number):void
        set_padding(xpad: number, ypad: number):void
        set_sensitive(sensitive: boolean):void
        set_visible(visible: boolean):void
        start_editing(event: any, widget: Widget, path: string, background_area: any, cell_area: any, flags: CellRendererState):any
        stop_editing(canceled: boolean):void
    }
    export class CellRendererText extends CellRenderer {
        set_fixed_height_from_font(number_of_rows: number):void
    }
    export class Container extends Widget {
        add(widget: Widget):void
        add_with_properties(widget: Widget, first_prop_name: string, ...args: any[]):void
        check_resize():void
        child_get(child: Widget, first_prop_name: string, ...args: any[]):void
        child_get_property(child: Widget, property_name: string, value: any):void
        child_get_valist(child: Widget, first_property_name: string, var_args: any):void
        child_notify(...args: any[]):void
        child_notify_by_pspec(child: Widget, pspec: any):void
        child_set(child: Widget, first_prop_name: string, ...args: any[]):void
        child_set_property(child: Widget, property_name: string, value: any):void
        child_set_valist(child: Widget, first_property_name: string, var_args: any):void
        child_type():number
        forall(callback: any, callback_data: any):void
        foreach(callback: any, callback_data: any):void
        get_border_width():number
        get_children(): any
        get_focus_chain(focusable_widgets: any):boolean
        get_focus_child():Widget
        get_focus_hadjustment():Adjustment
        get_focus_vadjustment():Adjustment
        get_path_for_child(child: Widget):any
        get_resize_mode():ResizeMode
        propagate_draw(child: Widget, cr: any):void
        remove(widget: Widget):void
        resize_children():void
        set_border_width(border_width: number):void
        set_focus_chain(focusable_widgets: any):void
        set_focus_child(child: Widget):void
        set_focus_hadjustment(adjustment: Adjustment):void
        set_focus_vadjustment(adjustment: Adjustment):void
        set_reallocate_redraws(needs_redraws: boolean):void
        set_resize_mode(resize_mode: ResizeMode):void
        unset_focus_chain():void
    }

    export class CssProvider extends GObject.Object {
        load_from_data(data: number[], length: number):boolean
        load_from_file(file: Gio.File):boolean
        load_from_path(path: string):boolean
        load_from_resource(resource_path: string):void
        to_string():string
    }
    
    export class Dialog extends Window {
        constructor(title: string, parent: Window, flags: DialogFlags, first_button_text: string, ...args: any[])
        add_action_widget(child: Widget, response_id: number):void
        add_button(button_text: string, response_id: number):Widget
        add_buttons(first_button_text: string, ...args: any[]):void
        get_action_area():Widget
        get_content_area():Box
        get_header_bar():Widget
        get_response_for_widget(widget: Widget):number
        get_widget_for_response(response_id: number):Widget
        response(response_id: number):void
        run():number
        set_alternative_button_order(first_response_id: number, ...args: any[]):void
        set_alternative_button_order_from_array(n_params: number, new_order: number[]):void
        set_default_response(response_id: number):void
        set_response_sensitive(response_id: number, setting: boolean):void
    }
    export class Entry extends Widget {
        constructor()
        constructor(buffer: EntryBuffer)
        get_activates_default():boolean
        get_alignment():number
        get_attributes():any
        get_buffer():EntryBuffer
        get_completion():any
        get_current_icon_drag_source():number
        get_cursor_hadjustment():Adjustment
        get_has_frame():boolean
        get_icon_activatable(icon_pos: EntryIconPosition):boolean
        get_icon_area(icon_pos: EntryIconPosition, icon_area: any):void
        get_icon_at_pos(x: number, y: number):number
        get_icon_gicon(icon_pos: EntryIconPosition):any
        get_icon_name(icon_pos: EntryIconPosition):string
        get_icon_pixbuf(icon_pos: EntryIconPosition):any
        get_icon_sensitive(icon_pos: EntryIconPosition):boolean
        get_icon_stock(icon_pos: EntryIconPosition):string
        get_icon_storage_type(icon_pos: EntryIconPosition):ImageType
        get_icon_tooltip_markup(icon_pos: EntryIconPosition):string
        get_icon_tooltip_text(icon_pos: EntryIconPosition):string
        get_inner_border():any
        get_input_hints():InputHints
        get_input_purpose():InputPurpose
        get_invisible_char():number
        get_layout():any
        get_layout_offsets(x: number, y: number):void
        get_max_length():number
        get_max_width_chars():number
        get_overwrite_mode():boolean
        get_placeholder_text():string
        get_progress_fraction():number
        get_progress_pulse_step():number
        get_tabs():any
        get_text():string
        get_text_area(text_area: any):void
        get_text_length():number
        get_visibility():boolean
        get_width_chars():number
        grab_focus_without_selecting():void
        im_context_filter_keypress(event: any):boolean
        layout_index_to_text_index(layout_index: number):number
        progress_pulse():void
        reset_im_context():void
        set_activates_default(setting: boolean):void
        set_alignment(xalign: number):void
        set_attributes(attrs: any):void
        set_buffer(buffer: EntryBuffer):void
        set_completion(completion: any):void
        set_cursor_hadjustment(adjustment: Adjustment):void
        set_has_frame(setting: boolean):void
        set_icon_activatable(icon_pos: EntryIconPosition, activatable: boolean):void
        set_icon_drag_source(icon_pos: EntryIconPosition, target_list: any, actions: number):void
        set_icon_from_gicon(icon_pos: EntryIconPosition, icon: any):void
        set_icon_from_icon_name(icon_pos: EntryIconPosition, icon_name: string):void
        set_icon_from_pixbuf(icon_pos: EntryIconPosition, pixbuf: any):void
        set_icon_from_stock(icon_pos: EntryIconPosition, stock_id: string):void
        set_icon_sensitive(icon_pos: EntryIconPosition, sensitive: boolean):void
        set_icon_tooltip_markup(icon_pos: EntryIconPosition, tooltip: string):void
        set_icon_tooltip_text(icon_pos: EntryIconPosition, tooltip: string):void
        set_inner_border(border: any):void
        set_input_hints(hints: InputHints):void
        set_input_purpose(purpose: InputPurpose):void
        set_invisible_char(ch: number):void
        set_max_length(max: number):void
        set_max_width_chars(n_chars: number):void
        set_overwrite_mode(overwrite: boolean):void
        set_placeholder_text(text: string):void
        set_progress_fraction(fraction: number):void
        set_progress_pulse_step(fraction: number):void
        set_tabs(tabs: any):void
        set_text(text: string):void
        set_visibility(visible: boolean):void
        set_width_chars(n_chars: number):void
        text_index_to_layout_index(text_index: number):number
        unset_invisible_char():void
    }
    export class EntryBuffer extends GObject.Object {
        constructor(initial_chars: string, n_initial_chars: number)
        delete_text(position: number, n_chars: number):number
        emit_deleted_text(position: number, n_chars: number):void
        emit_inserted_text(position: number, chars: string, n_chars: number):void
        get_bytes():number
        get_length():number
        get_max_length():number
        get_text():string
        insert_text(position: number, chars: string, n_chars: number):number
        set_max_length(max_length: number):void
        set_text(chars: string, n_chars: number):void
    }
    export class FileChooserDialog extends Dialog {
        constructor(config?:any)
        constructor(title: string, parent: Window, action: FileChooserAction, first_button_text: string, ...args: any[])
        set_select_multiple(select: boolean)
    }
    export class Grid extends Container {
        attach(child: Widget, left: number, top: number, width: number, height: number):void
        attach_next_to(child: Widget, sibling: Widget, side: PositionType, width: number, height: number):void
        get_baseline_row():number
        get_child_at(left: number, top: number):Widget
        get_column_homogeneous():boolean
        get_column_spacing():number
        get_row_baseline_position(row: number):BaselinePosition
        get_row_homogeneous():boolean
        get_row_spacing():number
        insert_column(position: number):void
        insert_next_to(sibling: Widget, side: PositionType):void
        insert_row(position: number):void
        remove_column(position: number):void
        remove_row(position: number):void
        set_baseline_row(row: number):void
        set_column_homogeneous(homogeneous: boolean):void
        set_column_spacing(spacing: number):void
        set_row_baseline_position(row: number, pos: BaselinePosition):void
        set_row_homogeneous(homogeneous: boolean):void
        set_row_spacing(spacing: number):void
    }
    export class HeaderBar extends Container {
        get_custom_title():Widget
        get_decoration_layout():string
        get_has_subtitle():boolean
        get_show_close_button():boolean
        get_subtitle():string
        get_title():string
        pack_end(child: Widget):void
        pack_start(child: Widget):void
        set_custom_title(title_widget: Widget):void
        set_decoration_layout(layout: string):void
        set_has_subtitle(setting: boolean):void
        set_show_close_button(setting: boolean):void
        set_subtitle(subtitle: string):void
        set_title(title: string):void
    }
    export class Image extends Container {        
    }
    export class Label extends Misc {
        constructor(config?:any)
        constructor(str: string)
        get_angle():number
        get_attributes():any
        get_current_uri():string
        get_ellipsize():any
        get_justify():Justification
        get_label():string
        get_layout():any
        get_layout_offsets(x: number, y: number):void
        get_line_wrap():boolean
        get_line_wrap_mode():any
        get_lines():number
        get_max_width_chars():number
        get_mnemonic_keyval():number
        get_mnemonic_widget():Widget
        get_selectable():boolean
        get_selection_bounds(start: number, end: number):boolean
        get_single_line_mode():boolean
        get_text():string
        get_track_visited_links():boolean
        get_use_markup():boolean
        get_use_underline():boolean
        get_width_chars():number
        get_xalign():number
        get_yalign():number
        select_region(start_offset: number, end_offset: number):void
        set_angle(angle: number):void
        set_attributes(attrs: any):void
        set_ellipsize(mode: any):void
        set_justify(jtype: Justification):void
        set_label(str: string):void
        set_line_wrap(wrap: boolean):void
        set_line_wrap_mode(wrap_mode: any):void
        set_lines(lines: number):void
        set_markup(str: string):void
        set_markup_with_mnemonic(str: string):void
        set_max_width_chars(n_chars: number):void
        set_mnemonic_widget(widget: Widget):void
        set_pattern(pattern: string):void
        set_selectable(setting: boolean):void
        set_single_line_mode(single_line_mode: boolean):void
        set_text(str: string):void
        set_text_with_mnemonic(str: string):void
        set_track_visited_links(track_links: boolean):void
        set_use_markup(setting: boolean):void
        set_use_underline(setting: boolean):void
        set_width_chars(n_chars: number):void
        set_xalign(xalign: number):void
        set_yalign(yalign: number):void
    }
    export class ListStore extends GObject.Object {
        constructor(config?:any)
        constructor(n_columns: number, ...args: any[])
        constructor(n_columns: number, types: number[])
        append(iter: any):void
        clear():void
        insert(iter: any, position: number):void
        insert_after(iter: any, sibling: any):void
        insert_before(iter: any, sibling: any):void
        insert_with_values(iter: any, position: number, ...args: any[]):void
        insert_with_valuesv(iter: any, position: number, columns: number[], values: any[], n_values: number):void
        iter_is_valid(iter: any):boolean
        move_after(iter: any, position: any):void
        move_before(iter: any, position: any):void
        prepend(iter: any):void
        remove(iter: any):boolean
        reorder(new_order: number[]):void
        set(iter: any, ...args: any[]):void
        set_column_types(n_columns: number, types: number[]):void
        set_valist(iter: any, var_args: any):void
        set_value(iter: any, column: number, value: any):void
        set_valuesv(iter: any, columns: number[], values: any[], n_values: number):void
        swap(a: any, b: any):void
    }
    export class Misc extends Widget {
        get_alignment(xalign: number, yalign: number):void
        get_padding(xpad: number, ypad: number):void
        set_alignment(xalign: number, yalign: number):void
        set_padding(xpad: number, ypad: number):void
    }
    export class Notebook extends Container {
        append_page(child: Widget, tab_label: Widget):number
        append_page_menu(child: Widget, tab_label: Widget, menu_label: Widget):number
        detach_tab(child: Widget):void
        get_action_widget(pack_type: PackType):Widget
        get_current_page():number
        get_group_name():string
        get_menu_label(child: Widget):Widget
        get_menu_label_text(child: Widget):string
        get_n_pages():number
        get_nth_page(page_num: number):Widget
        get_scrollable():boolean
        get_show_border():boolean
        get_show_tabs():boolean
        get_tab_detachable(child: Widget):boolean
        get_tab_hborder():number
        get_tab_label(child: Widget):Widget
        get_tab_label_text(child: Widget):string
        get_tab_pos():PositionType
        get_tab_reorderable(child: Widget):boolean
        get_tab_vborder():number
        insert_page(child: Widget, tab_label: Widget, position: number):number
        insert_page_menu(child: Widget, tab_label: Widget, menu_label: Widget, position: number):number
        next_page():void
        page_num(child: Widget):number
        popup_disable():void
        popup_enable():void
        prepend_page(child: Widget, tab_label: Widget):number
        prepend_page_menu(child: Widget, tab_label: Widget, menu_label: Widget):number
        prev_page():void
        remove_page(page_num: number):void
        reorder_child(child: Widget, position: number):void
        set_action_widget(widget: Widget, pack_type: PackType):void
        set_current_page(page_num: number):void
        set_group_name(group_name: string):void
        set_menu_label(child: Widget, menu_label: Widget):void
        set_menu_label_text(child: Widget, menu_text: string):void
        set_scrollable(scrollable: boolean):void
        set_show_border(show_border: boolean):void
        set_show_tabs(show_tabs: boolean):void
        set_tab_detachable(child: Widget, detachable: boolean):void
        set_tab_label(child: Widget, tab_label: Widget):void
        set_tab_label_text(child: Widget, tab_text: string):void
        set_tab_pos(pos: PositionType):void
        set_tab_reorderable(child: Widget, reorderable: boolean):void
    }
    export class Popover extends Bin {
        constructor(config?:any)
        constructor(relative_to: Widget)
        constructor(relative_to: Widget, model: Gio.MenuModel)
        bind_model(model: Gio.MenuModel, action_namespace: string):void
        get_default_widget():Widget
        get_modal():boolean
        get_pointing_to(rect: any):boolean
        get_position():PositionType
        get_relative_to():Widget
        get_transitions_enabled():boolean
        set_default_widget(widget: Widget):void
        set_modal(modal: boolean):void
        set_pointing_to(rect: any):void
        set_position(position: PositionType):void
        set_relative_to(relative_to: Widget):void
        set_transitions_enabled(transitions_enabled: boolean):void
    }
    export class ScrolledWindow extends Bin {
        constructor(config?:any)
        constructor(hadjustment: Adjustment, vadjustment: Adjustment)
        add_with_viewport(child: Widget):void
        get_capture_button_press():boolean
        get_hadjustment():Adjustment
        get_hscrollbar():Widget
        get_kinetic_scrolling():boolean
        get_min_content_height():number
        get_min_content_width():number
        get_overlay_scrolling():boolean
        get_placement():CornerType
        get_policy(hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType):void
        get_shadow_type():ShadowType
        get_vadjustment():Adjustment
        get_vscrollbar():Widget
        set_capture_button_press(capture_button_press: boolean):void
        set_hadjustment(hadjustment: Adjustment):void
        set_kinetic_scrolling(kinetic_scrolling: boolean):void
        set_min_content_height(height: number):void
        set_min_content_width(width: number):void
        set_overlay_scrolling(overlay_scrolling: boolean):void
        set_placement(window_placement: CornerType):void
        set_policy(hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType):void
        set_shadow_type(type: ShadowType):void
        set_vadjustment(vadjustment: Adjustment):void
        unset_placement():void
    }
    export class ToggleButton extends Button {
        constructor(config?:any)
        constructor(label: string)
        get_active():boolean
        get_inconsistent():boolean
        get_mode():boolean
        set_active(is_active: boolean):void
        set_inconsistent(setting: boolean):void
        set_mode(draw_indicator: boolean):void
        toggled():void
    }
    // export class TreeView extends Widget {

    // }
    export class Tooltip extends GObject.Object {
        set_custom(custom_widget: Widget):void
        set_icon(pixbuf: any):void
        set_icon_from_gicon(gicon: any, size: number):void
        set_icon_from_icon_name(icon_name: string, size: number):void
        set_icon_from_stock(stock_id: string, size: number):void
        set_markup(markup: string):void
        set_text(text: string):void
        set_tip_area(rect: any):void
    }
    export class TreeSelection extends GObject.Object {
        count_selected_rows():number
        get_mode():SelectionMode
        get_select_function():any
        get_selected(model: any, iter: any):boolean
        get_selected_rows(model: any):any
        get_tree_view():TreeView
        get_user_data():any
        iter_is_selected(iter: any):boolean
        path_is_selected(path: any):boolean
        select_all():void
        select_iter(iter: any):void
        select_path(path: any):void
        select_range(start_path: any, end_path: any):void
        selected_foreach(func: any, data: any):void
        set_mode(type: SelectionMode):void
        set_select_function(func: any, data: any, destroy: any):void
        unselect_all():void
        unselect_iter(iter: any):void
        unselect_path(path: any):void
        unselect_range(start_path: any, end_path: any):void
    }
    export class TreeView extends Container {
        constructor(model: any)
        append_column(column: TreeViewColumn):number
        collapse_all():void
        collapse_row(path: any):boolean
        columns_autosize():void
        convert_bin_window_to_tree_coords(bx: number, by: number, tx: number, ty: number):void
        convert_bin_window_to_widget_coords(bx: number, by: number, wx: number, wy: number):void
        convert_tree_to_bin_window_coords(tx: number, ty: number, bx: number, by: number):void
        convert_tree_to_widget_coords(tx: number, ty: number, wx: number, wy: number):void
        convert_widget_to_bin_window_coords(wx: number, wy: number, bx: number, by: number):void
        convert_widget_to_tree_coords(wx: number, wy: number, tx: number, ty: number):void
        create_row_drag_icon(path: any):any
        enable_model_drag_dest(targets: any[], n_targets: number, actions: number):void
        enable_model_drag_source(start_button_mask: number, targets: any[], n_targets: number, actions: number):void
        expand_all():void
        expand_row(path: any, open_all: boolean):boolean
        expand_to_path(path: any):void
        get_activate_on_single_click():boolean
        get_background_area(path: any, column: TreeViewColumn, rect: any):void
        get_bin_window():any
        get_cell_area(path: any, column: TreeViewColumn, rect: any):void
        get_column(n: number):TreeViewColumn
        get_columns():any
        get_cursor(path: any, focus_column: TreeViewColumn):void
        get_dest_row_at_pos(drag_x: number, drag_y: number, path: any, pos: TreeViewDropPosition):boolean
        get_drag_dest_row(path: any, pos: TreeViewDropPosition):void
        get_enable_search():boolean
        get_enable_tree_lines():boolean
        get_expander_column():TreeViewColumn
        get_fixed_height_mode():boolean
        get_grid_lines():TreeViewGridLines
        get_hadjustment():Adjustment
        get_headers_clickable():boolean
        get_headers_visible():boolean
        get_hover_expand():boolean
        get_hover_selection():boolean
        get_level_indentation():number
        get_model():any
        get_n_columns():number
        get_path_at_pos(x: number, y: number, path: any, column: TreeViewColumn, cell_x: number, cell_y: number):boolean
        get_reorderable():boolean
        get_row_separator_func():any
        get_rubber_banding():boolean
        get_rules_hint():boolean
        get_search_column():number
        get_search_entry():Entry
        get_search_equal_func():any
        get_search_position_func():any
        get_selection():TreeSelection
        get_show_expanders():boolean
        get_tooltip_column():number
        get_tooltip_context(x: number, y: number, keyboard_tip: boolean, model: any, path: any, iter: any):boolean
        get_vadjustment():Adjustment
        get_visible_range(start_path: any, end_path: any):boolean
        get_visible_rect(visible_rect: any):void
        insert_column(column: TreeViewColumn, position: number):number
        insert_column_with_attributes(position: number, title: string, cell: CellRenderer, ...args: any[]):number
        insert_column_with_data_func(position: number, title: string, cell: CellRenderer, func: any, data: any, dnotify: any):number
        is_blank_at_pos(x: number, y: number, path: any, column: TreeViewColumn, cell_x: number, cell_y: number):boolean
        is_rubber_banding_active():boolean
        map_expanded_rows(func: any, data: any):void
        move_column_after(column: TreeViewColumn, base_column: TreeViewColumn):void
        remove_column(column: TreeViewColumn):number
        row_activated(path: any, column: TreeViewColumn):void
        row_expanded(path: any):boolean
        scroll_to_cell(path: any, column: TreeViewColumn, use_align: boolean, row_align: number, col_align: number):void
        scroll_to_point(tree_x: number, tree_y: number):void
        set_activate_on_single_click(single: boolean):void
        set_column_drag_function(func: any, user_data: any, destroy: any):void
        set_cursor(path: any, focus_column: TreeViewColumn, start_editing: boolean):void
        set_cursor_on_cell(path: any, focus_column: TreeViewColumn, focus_cell: CellRenderer, start_editing: boolean):void
        set_destroy_count_func(func: any, data: any, destroy: any):void
        set_drag_dest_row(path: any, pos: TreeViewDropPosition):void
        set_enable_search(enable_search: boolean):void
        set_enable_tree_lines(enabled: boolean):void
        set_expander_column(column: TreeViewColumn):void
        set_fixed_height_mode(enable: boolean):void
        set_grid_lines(grid_lines: TreeViewGridLines):void
        set_hadjustment(adjustment: Adjustment):void
        set_headers_clickable(setting: boolean):void
        set_headers_visible(headers_visible: boolean):void
        set_hover_expand(expand: boolean):void
        set_hover_selection(hover: boolean):void
        set_level_indentation(indentation: number):void
        set_model(model: any):void
        set_reorderable(reorderable: boolean):void
        set_row_separator_func(func: any, data: any, destroy: any):void
        set_rubber_banding(enable: boolean):void
        set_rules_hint(setting: boolean):void
        set_search_column(column: number):void
        set_search_entry(entry: Entry):void
        set_search_equal_func(search_equal_func: any, search_user_data: any, search_destroy: any):void
        set_search_position_func(func: any, data: any, destroy: any):void
        set_show_expanders(enabled: boolean):void
        set_tooltip_cell(tooltip: Tooltip, path: any, column: TreeViewColumn, cell: CellRenderer):void
        set_tooltip_column(column: number):void
        set_tooltip_row(tooltip: Tooltip, path: any):void
        set_vadjustment(adjustment: Adjustment):void
        unset_rows_drag_dest():void
        unset_rows_drag_source():void
    }
    // export class TreeViewColumn extends Widget {
        
    // }
    export class TreeViewColumn extends GObject.InitiallyUnowned {
        constructor(area: any)
        constructor(title: string, cell: CellRenderer, ...args: any[])
        add_attribute(cell_renderer: CellRenderer, attribute: string, column: number):void
        cell_get_position(cell_renderer: CellRenderer, x_offset: number, width: number):boolean
        cell_get_size(cell_area: any, x_offset: number, y_offset: number, width: number, height: number):void
        cell_is_visible():boolean
        cell_set_cell_data(tree_model: any, iter: any, is_expander: boolean, is_expanded: boolean):void
        clear():void
        clear_attributes(cell_renderer: CellRenderer):void
        clicked():void
        focus_cell(cell: CellRenderer):void
        get_alignment():number
        get_button():Widget
        get_clickable():boolean
        get_expand():boolean
        get_fixed_width():number
        get_max_width():number
        get_min_width():number
        get_reorderable():boolean
        get_resizable():boolean
        get_sizing():TreeViewColumnSizing
        get_sort_column_id():number
        get_sort_indicator():boolean
        get_sort_order():SortType
        get_spacing():number
        get_title():string
        get_tree_view():Widget
        get_visible():boolean
        get_widget():Widget
        get_width():number
        get_x_offset():number
        pack_end(cell: CellRenderer, expand: boolean):void
        pack_start(cell: CellRenderer, expand: boolean):void
        queue_resize():void
        set_alignment(xalign: number):void
        set_attributes(cell_renderer: CellRenderer, ...args: any[]):void
        set_cell_data_func(cell_renderer: CellRenderer, func: any, func_data: any, destroy: any):void
        set_clickable(clickable: boolean):void
        set_expand(expand: boolean):void
        set_fixed_width(fixed_width: number):void
        set_max_width(max_width: number):void
        set_min_width(min_width: number):void
        set_reorderable(reorderable: boolean):void
        set_resizable(resizable: boolean):void
        set_sizing(type: TreeViewColumnSizing):void
        set_sort_column_id(sort_column_id: number):void
        set_sort_indicator(setting: boolean):void
        set_sort_order(order: SortType):void
        set_spacing(spacing: number):void
        set_title(title: string):void
        set_visible(visible: boolean):void
        set_widget(widget: Widget):void
    }
    
    export abstract class Widget extends GObject.InitiallyUnowned {
        constructor(config?: any)
        constructor(type: number, first_property_name: string, ...args: any[])
        activate():boolean
        add_accelerator(accel_signal: string, accel_group: AccelGroup, accel_key: number, accel_mods: number, accel_flags: AccelFlags):void
        add_device_events(device: any, events: any):void
        add_events(events: number):void
        add_mnemonic_label(label: Widget):void
        add_tick_callback(callback: any, user_data: any, notify: Function):number
        can_activate_accel(signal_id: number):boolean
        child_focus(direction: DirectionType):boolean
        child_notify(...args: any[]):void
        class_path(path_length: number, path: string, path_reversed: string):void
        compute_expand(orientation: Orientation):boolean
        create_pango_context():any
        create_pango_layout(text: string):any
        destroy():void
        destroyed(widget_pointer: Widget):void
        device_is_shadowed(device: any):boolean
        drag_begin(targets: any, actions: number, button: number, event: any):any
        drag_begin_with_coordinates(targets: any, actions: number, button: number, event: any, x: number, y: number):any
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number):boolean
        drag_dest_add_image_targets():void
        drag_dest_add_text_targets():void
        drag_dest_add_uri_targets():void
        drag_dest_find_target(context: any, target_list: any):any
        drag_dest_get_target_list():any
        drag_dest_get_track_motion():boolean
        drag_dest_set(flags: DestDefaults, targets: any[], n_targets: number, actions: number):void
        drag_dest_set_proxy(proxy_window: any, protocol: any, use_coordinates: boolean):void
        drag_dest_set_target_list(target_list: any):void
        drag_dest_set_track_motion(track_motion: boolean):void
        drag_dest_unset():void
        drag_get_data(context: any, target: any, time_: number):void
        drag_highlight():void
        drag_source_add_image_targets():void
        drag_source_add_text_targets():void
        drag_source_add_uri_targets():void
        drag_source_get_target_list():any
        drag_source_set(start_button_mask: number, targets: any[], n_targets: number, actions: number):void
        // drag_source_set_icon_gicon(icon: any):void
        drag_source_set_icon_name(icon_name: string):void
        drag_source_set_icon_pixbuf(pixbuf: any):void
        drag_source_set_icon_stock(stock_id: string):void
        drag_source_set_target_list(target_list: any):void
        drag_source_unset():void
        drag_unhighlight():void
        draw(cr: any):void
        ensure_style():void
        error_bell():void
        event(event: any):boolean
        freeze_child_notify():void
        get_accessible():any
        // get_action_group(prefix: string):Gio.ActionGroup
        get_allocated_baseline():number
        get_allocated_height():number
        get_allocated_width():number
        get_allocation(allocation: any):void
        get_ancestor(widget_type: number):Widget
        get_app_paintable():boolean
        get_can_default():boolean
        get_can_focus():boolean
        get_child_requisition(requisition: any):void
        get_child_visible():boolean
        get_clip(clip: any):void
        get_clipboard(selection: any):any
        get_composite_name():string
        get_device_enabled(device: any):boolean
        get_device_events(device: any):number
        get_direction():TextDirection
        get_display():any
        get_double_buffered():boolean
        get_events():number
        get_font_map():any//any
        get_font_options():any//any
        get_frame_clock():any//Gdk.FrameClock
        get_halign():Align
        get_has_tooltip():boolean
        get_has_window():boolean
        get_hexpand():boolean
        get_hexpand_set():boolean
        get_mapped():boolean
        get_margin_bottom():number
        get_margin_end():number
        get_margin_left():number
        get_margin_right():number
        get_margin_start():number
        get_margin_top():number
        get_modifier_mask(intent: number):number
        get_modifier_style():any //RcStyle
        get_name():string
        get_no_show_all():boolean
        get_opacity():number
        get_pango_context():any //any
        get_parent():Widget
        get_parent_window():any //any
        get_path():any //WidgetPath
        get_pointer(x: number, y: number):void
        get_preferred_height(minimum_height: number, natural_height: number):void
        get_preferred_height_and_baseline_for_width(width: number, minimum_height: number, natural_height: number, minimum_baseline: number, natural_baseline: number):void
        get_preferred_height_for_width(width: number, minimum_height: number, natural_height: number):void
        get_preferred_size(minimum_size: any, natural_size: any):void
        get_preferred_width(minimum_width: number, natural_width: number):void
        get_preferred_width_for_height(height: number, minimum_width: number, natural_width: number):void
        get_realized():boolean
        get_receives_default():boolean
        get_request_mode():SizeRequestMode
        get_requisition(requisition: any):void
        get_root_window():any
        get_scale_factor():number
        get_screen():any
        get_sensitive():boolean
        get_settings():any
        get_size_request(width: number, height: number):void
        get_state():StateType
        get_state_flags():StateFlags
        get_style():any
        get_style_context():any
        get_support_multidevice():boolean
        get_template_child(widget_type: number, name: string):GObject.Object
        get_tooltip_markup():string
        get_tooltip_text():string
        get_tooltip_window():Window
        get_toplevel():Widget
        get_valign():Align
        get_valign_with_baseline():Align
        get_vexpand():boolean
        get_vexpand_set():boolean
        get_visible():boolean
        get_visual():any//Gdk.Visual
        get_window():any
        grab_add():void
        grab_default():void
        grab_focus():void
        grab_remove():void
        has_default():boolean
        has_focus():boolean
        has_grab():boolean
        has_rc_style():boolean
        has_screen():boolean
        has_visible_focus():boolean
        hide():void
        hide_on_delete():boolean
        in_destruction():boolean
        init_template():void
        input_shape_combine_region(region: any):void
        // insert_action_group(name: string, group: Gio.ActionGroup):void
        intersect(area: any, intersection: any):boolean
        is_ancestor(ancestor: Widget):boolean
        is_composited():boolean
        is_drawable():boolean
        is_focus():boolean
        is_sensitive():boolean
        is_toplevel():boolean
        is_visible():boolean
        keynav_failed(direction: DirectionType):boolean
        list_accel_closures():any
        list_action_prefixes():string[]
        list_mnemonic_labels():any
        map():void
        // mnemonic_activate(group_cycling: boolean):boolean
        modify_base(state: StateType, color: any):void
        modify_bg(state: StateType, color: any):void
        modify_cursor(primary: any, secondary: any):void
        modify_fg(state: StateType, color: any):void
        modify_font(font_desc: any):void
        modify_style(style: any):void
        modify_text(state: StateType, color: any):void
        override_background_color(state: StateFlags, color: any):void
        override_color(state: StateFlags, color: any):void
        override_cursor(cursor: any, secondary_cursor: any):void
        override_font(font_desc: any):void
        override_symbolic_color(name: string, color: any):void
        path(path_length: number, path: string, path_reversed: string):void
        queue_compute_expand():void
        queue_draw():void
        queue_draw_area(x: number, y: number, width: number, height: number):void
        queue_draw_region(region: any):void
        queue_resize():void
        queue_resize_no_redraw():void
        realize():void
        region_intersect(region: any):any//any
        register_window(window: any):void
        remove_accelerator(accel_group: AccelGroup, accel_key: number, accel_mods: number):boolean
        remove_mnemonic_label(label: Widget):void
        remove_tick_callback(id: number):void
        render_icon(stock_id: string, size: number, detail: string):any
        render_icon_pixbuf(stock_id: string, size: number):any
        reparent(new_parent: Widget):void
        reset_rc_styles():void
        reset_style():void
        send_expose(event: any):number
        send_focus_change(event: any):boolean
        set_accel_path(accel_path: string, accel_group: AccelGroup):void
        set_allocation(allocation: any):void
        set_app_paintable(app_paintable: boolean):void
        set_can_default(can_default: boolean):void
        set_can_focus(can_focus: boolean):void
        set_child_visible(is_visible: boolean):void
        set_clip(clip: any):void
        set_composite_name(name: string):void
        set_device_enabled(device: any, enabled: boolean):void
        set_device_events(device: any, events: number):void
        set_direction(dir: TextDirection):void
        set_double_buffered(double_buffered: boolean):void
        set_events(events: number):void
        set_font_map(font_map: any):void
        set_font_options(options: any):void
        set_halign(align: Align):void
        set_has_tooltip(has_tooltip: boolean):void
        set_has_window(has_window: boolean):void
        set_hexpand(expand: boolean):void
        set_hexpand_set(set: boolean):void
        set_mapped(mapped: boolean):void
        set_margin_bottom(margin: number):void
        set_margin_end(margin: number):void
        set_margin_left(margin: number):void
        set_margin_right(margin: number):void
        set_margin_start(margin: number):void
        set_margin_top(margin: number):void
        set_name(name: string):void
        set_no_show_all(no_show_all: boolean):void
        set_opacity(opacity: number):void
        set_parent(parent: Widget):void
        set_parent_window(parent_window: any):void
        set_realized(realized: boolean):void
        set_receives_default(receives_default: boolean):void
        set_redraw_on_allocate(redraw_on_allocate: boolean):void
        set_sensitive(sensitive: boolean):void
        set_size_request(width: number, height: number):void
        set_state(state: StateType):void
        set_state_flags(flags: StateFlags, clear: boolean):void
        set_style(style: any):void
        set_support_multidevice(support_multidevice: boolean):void
        set_tooltip_markup(markup: string):void
        set_tooltip_text(text: string):void
        set_tooltip_window(custom_window: Window):void
        set_valign(align: Align):void
        set_vexpand(expand: boolean):void
        set_vexpand_set(set: boolean):void
        set_visible(visible: boolean):void
        set_visual(visual: any):void
        set_window(window: any):void
        shape_combine_region(region: any):void
        show():void
        show_all():void
        show_now():void
        size_allocate(allocation: any):void
        size_allocate_with_baseline(allocation: any, baseline: number):void
        size_request(requisition: any):void
        style_attach():void
        style_get(first_property_name: string, ...args: any[]):void
        style_get_property(property_name: string, value: any):void
        style_get_valist(first_property_name: string, var_args: any):void
        thaw_child_notify():void
        translate_coordinates(dest_widget: Widget, src_x: number, src_y: number, dest_x: number, dest_y: number):boolean
        trigger_tooltip_query():void
        unmap():void
        unparent():void
        unrealize():void
        unregister_window(window: any):void
        unset_state_flags(flags: StateFlags):void
    }

    export class Window extends Bin {
        constructor(type: WindowType)
        activate_default():boolean
        activate_focus():boolean
        activate_key(event: any):boolean
        add_accel_group(accel_group: AccelGroup):void
        add_mnemonic(keyval: number, target: Widget):void
        begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number):void
        begin_resize_drag(edge: number, button: number, root_x: number, root_y: number, timestamp: number):void
        close():void
        deiconify():void
        fullscreen():void
        fullscreen_on_monitor(screen: any, monitor: number):void
        get_accept_focus():boolean
        get_application():Application
        get_attached_to():Widget
        get_decorated():boolean
        get_default_size(width: number, height: number):void
        get_default_widget():Widget
        get_deletable():boolean
        get_destroy_with_parent():boolean
        get_focus():Widget
        get_focus_on_map():boolean
        get_focus_visible():boolean
        get_gravity():number
        get_group():WindowGroup
        get_has_resize_grip():boolean
        get_hide_titlebar_when_maximized():boolean
        get_icon():any
        get_icon_list():any
        get_icon_name():string
        get_mnemonic_modifier():number
        get_mnemonics_visible():boolean
        get_modal():boolean
        get_opacity():number
        get_position(root_x: number, root_y: number):void
        get_resizable():boolean
        get_resize_grip_area(rect: any):boolean
        get_role():string
        get_screen():any
        get_size(width: number, height: number):void
        get_skip_pager_hint():boolean
        get_skip_taskbar_hint():boolean
        get_title():string
        get_titlebar():Widget
        get_transient_for():Window
        get_type_hint():number
        get_urgency_hint():boolean
        get_window_type():WindowType
        has_group():boolean
        has_toplevel_focus():boolean
        iconify():void
        is_active():boolean
        is_maximized():boolean
        maximize():void
        //mnemonic_activate(keyval: number, modifier: number):boolean
        move(x: number, y: number):void
        parse_geometry(geometry: string):boolean
        present():void
        present_with_time(timestamp: number):void
        propagate_key_event(event: any):boolean
        remove_accel_group(accel_group: AccelGroup):void
        remove_mnemonic(keyval: number, target: Widget):void
        reshow_with_initial_size():void
        resize(width: number, height: number):void
        resize_grip_is_visible():boolean
        resize_to_geometry(width: number, height: number):void
        set_accept_focus(setting: boolean):void
        set_application(application: Application):void
        set_attached_to(attach_widget: Widget):void
        set_decorated(setting: boolean):void
        set_default(default_widget: Widget):void
        set_default_geometry(width: number, height: number):void
        set_default_size(width: number, height: number):void
        set_deletable(setting: boolean):void
        set_destroy_with_parent(setting: boolean):void
        set_focus(focus: Widget):void
        set_focus_on_map(setting: boolean):void
        set_focus_visible(setting: boolean):void
        set_geometry_hints(geometry_widget: Widget, geometry: any, geom_mask: any):void
        set_gravity(gravity: number):void
        set_has_resize_grip(value: boolean):void
        set_has_user_ref_count(setting: boolean):void
        set_hide_titlebar_when_maximized(setting: boolean):void
        set_icon(icon: any):void
        set_icon_from_file(filename: string):boolean
        set_icon_list(list: any):void
        set_icon_name(name: string):void
        set_keep_above(setting: boolean):void
        set_keep_below(setting: boolean):void
        set_mnemonic_modifier(modifier: number):void
        set_mnemonics_visible(setting: boolean):void
        set_modal(modal: boolean):void
        set_opacity(opacity: number):void
        set_position(position: WindowPosition):void
        set_resizable(resizable: boolean):void
        set_role(role: string):void
        set_screen(screen: any):void
        set_skip_pager_hint(setting: boolean):void
        set_skip_taskbar_hint(setting: boolean):void
        set_startup_id(startup_id: string):void
        set_title(title: string):void
        set_titlebar(titlebar: Widget):void
        set_transient_for(parent: Window):void
        set_type_hint(hint: number):void
        set_urgency_hint(setting: boolean):void
        set_wmclass(wmclass_name: string, wmclass_class: string):void
        stick():void
        unfullscreen():void
        unmaximize():void
        unstick():void
    }
    export class WindowGroup extends GObject.Object {
        add_window(window: Window):void
        get_current_device_grab(device: any):Widget
        get_current_grab():Widget
        list_windows():any
        remove_window(window: Window):void
    }
    
  export enum Align{
    FILL,
    START,
    END,
    CENTER,
    BASELINE,
  }
  export enum ArrowPlacement{
    BOTH,
    START,
    END,
  }
  export enum ArrowType{
    UP,
    DOWN,
    LEFT,
    RIGHT,
    NONE,
  }
  export enum AssistantPageType{
    CONTENT,
    INTRO,
    CONFIRM,
    SUMMARY,
    PROGRESS,
    CUSTOM,
  }
  export enum BaselinePosition{
    TOP,
    CENTER,
    BOTTOM,
  }
  export enum BorderStyle{
    NONE,
    SOLID,
    INSET,
    OUTSET,
    HIDDEN,
    DOTTED,
    DASHED,
    DOUBLE,
    GROOVE,
    RIDGE,
  }
  export enum BuilderError{
    INVALID_TYPE_FUNCTION,
    UNHANDLED_TAG,
    MISSING_ATTRIBUTE,
    INVALID_ATTRIBUTE,
    INVALID_TAG,
    MISSING_PROPERTY_VALUE,
    INVALID_VALUE,
    VERSION_MISMATCH,
    DUPLICATE_ID,
    OBJECT_TYPE_REFUSED,
    TEMPLATE_MISMATCH,
    INVALID_PROPERTY,
    INVALID_SIGNAL,
    INVALID_ID,
  }
  export enum ButtonBoxStyle{
    SPREAD,
    EDGE,
    START,
    END,
    CENTER,
    EXPAND,
  }
  export enum ButtonRole{
    NORMAL,
    CHECK,
    RADIO,
  }
  export enum ButtonsType{
    NONE,
    OK,
    CLOSE,
    CANCEL,
    YES_NO,
    OK_CANCEL,
  }
  export enum CellRendererAccelMode{
    GTK,
    OTHER,
    MODIFIER_TAP,
  }
  export enum CellRendererMode{
    INERT,
    ACTIVATABLE,
    EDITABLE,
  }
  export enum CornerType{
    TOP_LEFT,
    BOTTOM_LEFT,
    TOP_RIGHT,
    BOTTOM_RIGHT,
  }
  export enum CssProviderError{
    FAILED,
    SYNTAX,
    IMPORT,
    NAME,
    DEPRECATED,
    UNKNOWN_VALUE,
  }
  export enum CssSectionType{
    DOCUMENT,
    IMPORT,
    COLOR_DEFINITION,
    BINDING_SET,
    RULESET,
    SELECTOR,
    DECLARATION,
    VALUE,
    KEYFRAMES,
  }
  export enum DeleteType{
    CHARS,
    WORD_ENDS,
    WORDS,
    DISPLAY_LINES,
    DISPLAY_LINE_ENDS,
    PARAGRAPH_ENDS,
    PARAGRAPHS,
    WHITESPACE,
  }
  export enum DirectionType{
    TAB_FORWARD,
    TAB_BACKWARD,
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }
  export enum DragResult{
    SUCCESS,
    NO_TARGET,
    USER_CANCELLED,
    TIMEOUT_EXPIRED,
    GRAB_BROKEN,
    ERROR,
  }
  export enum EntryIconPosition{
    PRIMARY,
    SECONDARY,
  }
  export enum EventSequenceState{
    NONE,
    CLAIMED,
    DENIED,
  }
  export enum ExpanderStyle{
    COLLAPSED,
    SEMI_COLLAPSED,
    SEMI_EXPANDED,
    EXPANDED,
  }
  export enum FileChooserAction{
    OPEN,
    SAVE,
    SELECT_FOLDER,
    CREATE_FOLDER,
  }
  export enum FileChooserConfirmation{
    CONFIRM,
    ACCEPT_FILENAME,
    SELECT_AGAIN,
  }
  export enum FileChooserError{
    NONEXISTENT,
    BAD_FILENAME,
    ALREADY_EXISTS,
    INCOMPLETE_HOSTNAME,
  }
  export enum IMPreeditStyle{
    NOTHING,
    CALLBACK,
    NONE,
  }
  export enum IMStatusStyle{
    NOTHING,
    CALLBACK,
    NONE,
  }
  export enum IconSize{
    INVALID,
    MENU,
    SMALL_TOOLBAR,
    LARGE_TOOLBAR,
    BUTTON,
    DND,
    DIALOG,
  }
  export enum IconThemeError{
    NOT_FOUND,
    FAILED,
  }
  export enum IconViewDropPosition{
    NO_DROP,
    DROP_INTO,
    DROP_LEFT,
    DROP_RIGHT,
    DROP_ABOVE,
    DROP_BELOW,
  }
  export enum ImageType{
    EMPTY,
    PIXBUF,
    STOCK,
    ICON_SET,
    ANIMATION,
    ICON_NAME,
    GICON,
    SURFACE,
  }
  export enum InputPurpose{
    FREE_FORM,
    ALPHA,
    DIGITS,
    NUMBER,
    PHONE,
    URL,
    EMAIL,
    NAME,
    PASSWORD,
    PIN,
  }
  export enum Justification{
    LEFT,
    RIGHT,
    CENTER,
    FILL,
  }
  export enum LevelBarMode{
    CONTINUOUS,
    DISCRETE,
  }
  export enum License{
    UNKNOWN,
    CUSTOM,
    GPL_2_0,
    GPL_3_0,
    LGPL_2_1,
    LGPL_3_0,
    BSD,
    MIT_X11,
    ARTISTIC,
    GPL_2_0_ONLY,
    GPL_3_0_ONLY,
    LGPL_2_1_ONLY,
    LGPL_3_0_ONLY,
  }
  export enum MenuDirectionType{
    PARENT,
    CHILD,
    NEXT,
    PREV,
  }
  export enum MessageType{
    INFO,
    WARNING,
    QUESTION,
    ERROR,
    OTHER,
  }
  export enum MovementStep{
    LOGICAL_POSITIONS,
    VISUAL_POSITIONS,
    WORDS,
    DISPLAY_LINES,
    DISPLAY_LINE_ENDS,
    PARAGRAPHS,
    PARAGRAPH_ENDS,
    PAGES,
    BUFFER_ENDS,
    HORIZONTAL_PAGES,
  }
  export enum NotebookTab{
    FIRST,
    LAST,
  }
  export enum NumberUpLayout{
    LRTB,
    LRBT,
    RLTB,
    RLBT,
    TBLR,
    TBRL,
    BTLR,
    BTRL,
  }
  export enum Orientation{
    HORIZONTAL,
    VERTICAL,
  }
  export enum PackDirection{
    LTR,
    RTL,
    TTB,
    BTT,
  }
  export enum PackType{
    START,
    END,
  }
  export enum PageOrientation{
    PORTRAIT,
    LANDSCAPE,
    REVERSE_PORTRAIT,
    REVERSE_LANDSCAPE,
  }
  export enum PageSet{
    ALL,
    EVEN,
    ODD,
  }
  export enum PanDirection{
    LEFT,
    RIGHT,
    UP,
    DOWN,
  }
  export enum PathPriorityType{
    LOWEST,
    GTK,
    APPLICATION,
    THEME,
    RC,
    HIGHEST,
  }
  export enum PathType{
    WIDGET,
    WIDGET_CLASS,
    CLASS,
  }
  export enum PolicyType{
    ALWAYS,
    AUTOMATIC,
    NEVER,
    EXTERNAL,
  }
  export enum PositionType{
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
  }
  export enum PrintDuplex{
    SIMPLEX,
    HORIZONTAL,
    VERTICAL,
  }
  export enum PrintError{
    GENERAL,
    INTERNAL_ERROR,
    NOMEM,
    INVALID_FILE,
  }
  export enum PrintOperationAction{
    PRINT_DIALOG,
    PRINT,
    PREVIEW,
    EXPORT,
  }
  export enum PrintOperationResult{
    ERROR,
    APPLY,
    CANCEL,
    IN_PROGRESS,
  }
  export enum PrintPages{
    ALL,
    CURRENT,
    RANGES,
    SELECTION,
  }
  export enum PrintQuality{
    LOW,
    NORMAL,
    HIGH,
    DRAFT,
  }
  export enum PrintStatus{
    INITIAL,
    PREPARING,
    GENERATING_DATA,
    SENDING_DATA,
    PENDING,
    PENDING_ISSUE,
    PRINTING,
    FINISHED,
    FINISHED_ABORTED,
  }
  export enum PropagationPhase{
    NONE,
    CAPTURE,
    BUBBLE,
    TARGET,
  }
  export enum RcTokenType{
    INVALID,
    INCLUDE,
    NORMAL,
    ACTIVE,
    PRELIGHT,
    SELECTED,
    INSENSITIVE,
    FG,
    BG,
    TEXT,
    BASE,
    XTHICKNESS,
    YTHICKNESS,
    FONT,
    FONTSET,
    FONT_NAME,
    BG_PIXMAP,
    PIXMAP_PATH,
    STYLE,
    BINDING,
    BIND,
    WIDGET,
    WIDGET_CLASS,
    CLASS,
    LOWEST,
    GTK,
    APPLICATION,
    THEME,
    RC,
    HIGHEST,
    ENGINE,
    MODULE_PATH,
    IM_MODULE_PATH,
    IM_MODULE_FILE,
    STOCK,
    LTR,
    RTL,
    COLOR,
    UNBIND,
    LAST,
  }
  export enum RecentChooserError{
    NOT_FOUND,
    INVALID_URI,
  }
  export enum RecentManagerError{
    NOT_FOUND,
    INVALID_URI,
    INVALID_ENCODING,
    NOT_REGISTERED,
    READ,
    WRITE,
    UNKNOWN,
  }
  export enum RecentSortType{
    NONE,
    MRU,
    LRU,
    CUSTOM,
  }
  export enum ReliefStyle{
    NORMAL,
    HALF,
    NONE,
  }
  export enum ResizeMode{
    PARENT,
    QUEUE,
    IMMEDIATE,
  }
  export enum ResponseType{
    NONE,
    REJECT,
    ACCEPT,
    DELETE_EVENT,
    OK,
    CANCEL,
    CLOSE,
    YES,
    NO,
    APPLY,
    HELP,
  }
  export enum RevealerTransitionType{
    NONE,
    CROSSFADE,
    SLIDE_RIGHT,
    SLIDE_LEFT,
    SLIDE_UP,
    SLIDE_DOWN,
  }
  export enum ScrollStep{
    STEPS,
    PAGES,
    ENDS,
    HORIZONTAL_STEPS,
    HORIZONTAL_PAGES,
    HORIZONTAL_ENDS,
  }
  export enum ScrollType{
    NONE,
    JUMP,
    STEP_BACKWARD,
    STEP_FORWARD,
    PAGE_BACKWARD,
    PAGE_FORWARD,
    STEP_UP,
    STEP_DOWN,
    PAGE_UP,
    PAGE_DOWN,
    STEP_LEFT,
    STEP_RIGHT,
    PAGE_LEFT,
    PAGE_RIGHT,
    START,
    END,
  }
  export enum ScrollablePolicy{
    MINIMUM,
    NATURAL,
  }
  export enum SelectionMode{
    NONE,
    SINGLE,
    BROWSE,
    MULTIPLE,
  }
  export enum SensitivityType{
    AUTO,
    ON,
    OFF,
  }
  export enum ShadowType{
    NONE,
    IN,
    OUT,
    ETCHED_IN,
    ETCHED_OUT,
  }
  export enum SizeGroupMode{
    NONE,
    HORIZONTAL,
    VERTICAL,
    BOTH,
  }
  export enum SizeRequestMode{
    HEIGHT_FOR_WIDTH,
    WIDTH_FOR_HEIGHT,
    CONSTANT_SIZE,
  }
  export enum SortType{
    ASCENDING,
    DESCENDING,
  }
  export enum SpinButtonUpdatePolicy{
    ALWAYS,
    IF_VALID,
  }
  export enum SpinType{
    STEP_FORWARD,
    STEP_BACKWARD,
    PAGE_FORWARD,
    PAGE_BACKWARD,
    HOME,
    END,
    USER_DEFINED,
  }
  export enum StackTransitionType{
    NONE,
    CROSSFADE,
    SLIDE_RIGHT,
    SLIDE_LEFT,
    SLIDE_UP,
    SLIDE_DOWN,
    SLIDE_LEFT_RIGHT,
    SLIDE_UP_DOWN,
    OVER_UP,
    OVER_DOWN,
    OVER_LEFT,
    OVER_RIGHT,
    UNDER_UP,
    UNDER_DOWN,
    UNDER_LEFT,
    UNDER_RIGHT,
    OVER_UP_DOWN,
    OVER_DOWN_UP,
    OVER_LEFT_RIGHT,
    OVER_RIGHT_LEFT,
  }
  export enum StateType{
    NORMAL,
    ACTIVE,
    PRELIGHT,
    SELECTED,
    INSENSITIVE,
    INCONSISTENT,
    FOCUSED,
  }
  export enum TextBufferTargetInfo{
    BUFFER_CONTENTS,
    RICH_TEXT,
    TEXT,
  }
  export enum TextDirection{
    NONE,
    LTR,
    RTL,
  }
  export enum TextExtendSelection{
    WORD,
    LINE,
  }
  export enum TextViewLayer{
    BELOW,
    ABOVE,
  }
  export enum TextWindowType{
    PRIVATE,
    WIDGET,
    TEXT,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
  }
  export enum ToolbarSpaceStyle{
    EMPTY,
    LINE,
  }
  export enum ToolbarStyle{
    ICONS,
    TEXT,
    BOTH,
    BOTH_HORIZ,
  }
  export enum TreeViewColumnSizing{
    GROW_ONLY,
    AUTOSIZE,
    FIXED,
  }
  export enum TreeViewDropPosition{
    BEFORE,
    AFTER,
    INTO_OR_BEFORE,
    INTO_OR_AFTER,
  }
  export enum TreeViewGridLines{
    NONE,
    HORIZONTAL,
    VERTICAL,
    BOTH,
  }
  export enum Unit{
    NONE,
    POINTS,
    INCH,
    MM,
  }
  export enum WidgetHelpType{
    TOOLTIP,
    WHATS_THIS,
  }
  export enum WindowPosition{
    NONE,
    CENTER,
    MOUSE,
    CENTER_ALWAYS,
    CENTER_ON_PARENT,
  }
  export enum WindowType{
    TOPLEVEL,
    POPUP,
  }
  export enum WrapMode{
    NONE,
    CHAR,
    WORD,
    WORD_CHAR,
  }
  export enum AccelFlags{
    VISIBLE,
    LOCKED,
    MASK,
  }
  export enum ApplicationInhibitFlags{
    LOGOUT,
    SWITCH,
    SUSPEND,
    IDLE,
  }
  export enum AttachOptions{
    EXPAND,
    SHRINK,
    FILL,
  }
  export enum CalendarDisplayOptions{
    SHOW_HEADING,
    SHOW_DAY_NAMES,
    NO_MONTH_CHANGE,
    SHOW_WEEK_NUMBERS,
    SHOW_DETAILS,
  }
  export enum CellRendererState{
    SELECTED,
    PRELIT,
    INSENSITIVE,
    SORTED,
    FOCUSED,
    EXPANDABLE,
    EXPANDED,
  }
  export enum DebugFlag{
    MISC,
    PLUGSOCKET,
    TEXT,
    TREE,
    UPDATES,
    KEYBINDINGS,
    MULTIHEAD,
    MODULES,
    GEOMETRY,
    ICONTHEME,
    PRINTING,
    BUILDER,
    SIZE_REQUEST,
    NO_CSS_CACHE,
    BASELINES,
    PIXEL_CACHE,
    NO_PIXEL_CACHE,
    INTERACTIVE,
    TOUCHSCREEN,
    ACTIONS,
  }
  export enum DestDefaults{
    MOTION,
    HIGHLIGHT,
    DROP,
    ALL,
  }
  export enum DialogFlags{
    MODAL,
    DESTROY_WITH_PARENT,
    USE_HEADER_BAR,
  }
  export enum FileFilterFlags{
    FILENAME,
    URI,
    DISPLAY_NAME,
    MIME_TYPE,
  }
  export enum IconLookupFlags{
    NO_SVG,
    FORCE_SVG,
    USE_BUILTIN,
    GENERIC_FALLBACK,
    FORCE_SIZE,
    FORCE_REGULAR,
    FORCE_SYMBOLIC,
    DIR_LTR,
    DIR_RTL,
  }
  export enum InputHints{
    NONE,
    SPELLCHECK,
    NO_SPELLCHECK,
    WORD_COMPLETION,
    LOWERCASE,
    UPPERCASE_CHARS,
    UPPERCASE_WORDS,
    UPPERCASE_SENTENCES,
    INHIBIT_OSK,
    VERTICAL_WRITING,
  }
  export enum JunctionSides{
    NONE,
    CORNER_TOPLEFT,
    CORNER_TOPRIGHT,
    CORNER_BOTTOMLEFT,
    CORNER_BOTTOMRIGHT,
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
  }
  export enum PlacesOpenFlags{
    NORMAL,
    NEW_TAB,
    NEW_WINDOW,
  }
  export enum RcFlags{
    FG,
    BG,
    TEXT,
    BASE,
  }
  export enum RecentFilterFlags{
    URI,
    DISPLAY_NAME,
    MIME_TYPE,
    APPLICATION,
    GROUP,
    AGE,
  }
  export enum RegionFlags{
    EVEN,
    ODD,
    FIRST,
    LAST,
    ONLY,
    SORTED,
  }
  export enum StateFlags{
    NORMAL,
    ACTIVE,
    PRELIGHT,
    SELECTED,
    INSENSITIVE,
    INCONSISTENT,
    FOCUSED,
    BACKDROP,
    DIR_LTR,
    DIR_RTL,
    LINK,
    VISITED,
    CHECKED,
  }
  export enum TargetFlags{
    SAME_APP,
    SAME_WIDGET,
    OTHER_APP,
    OTHER_WIDGET,
  }
  export enum TextSearchFlags{
    VISIBLE_ONLY,
    TEXT_ONLY,
    CASE_INSENSITIVE,
  }
  export enum ToolPaletteDragTargets{
    ITEMS,
    GROUPS,
  }
  export enum TreeModelFlags{
    ITERS_PERSIST,
    LIST_ONLY,
  }
  export enum UIManagerItemType{
    AUTO,
    MENUBAR,
    MENU,
    TOOLBAR,
    PLACEHOLDER,
    POPUP,
    MENUITEM,
    TOOLITEM,
    SEPARATOR,
    ACCELERATOR,
    POPUP_WITH_ACCELS,
  }

}

