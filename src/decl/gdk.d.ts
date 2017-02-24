/**
 * gdk.d.ts
 * 
 * Gdk declarations for typescript
 */
declare module "Gdk" {
    import * as GObject from "GObject"
    import * as Gio from "Gio"

    export class AppLaunchContext extends Gio.AppLaunchContext {
        set_desktop(desktop: number):void
        set_display(display: Display):void
        set_icon(icon: any):void
        set_icon_name(icon_name: string):void
        set_screen(screen: Screen):void
        set_timestamp(timestamp: number):void
    }
    export class Cursor extends GObject.Object {
        constructor(cursor_type: CursorType)
        constructor(display: Display, cursor_type: CursorType)
        constructor(display: Display, name: string)
        constructor(display: Display, pixbuf: any, x: number, y: number)
        constructor(display: Display, surface: any, x: number, y: number)
        get_cursor_type():CursorType
        get_display():Display
        get_image():any
        get_surface(x_hot: number, y_hot: number):any
        ref():Cursor
        unref():void
    }
    export class Device extends GObject.Object {
        get_associated_device():Device
        get_axis(axes: number[], use: AxisUse, value: number):boolean
        get_axis_use(index_: number):AxisUse
        get_axis_value(axes: number[], axis_label: any, value: number):boolean
        get_device_type():DeviceType
        get_display():Display
        get_has_cursor():boolean
        get_history(window: Window, start: number, stop: number, events: number[], n_events: number):boolean
        get_key(index_: number, keyval: number, modifiers: ModifierType):boolean
        get_last_event_window():Window
        get_mode():InputMode
        get_n_axes():number
        get_n_keys():number
        get_name():string
        get_position(screen: Screen, x: number, y: number):void
        get_position_double(screen: Screen, x: number, y: number):void
        get_product_id():string
        get_source():InputSource
        get_state(window: Window, axes: number[], mask: ModifierType):void
        get_vendor_id():string
        get_window_at_position(win_x: number, win_y: number):Window
        get_window_at_position_double(win_x: number, win_y: number):Window
        grab(window: Window, grab_ownership: GrabOwnership, owner_events: boolean, event_mask: EventMask, cursor: Cursor, time_: number):GrabStatus
        list_axes():any
        list_slave_devices():any
        set_axis_use(index_: number, use: AxisUse):void
        set_key(index_: number, keyval: number, modifiers: ModifierType):void
        set_mode(mode: InputMode):boolean
        ungrab(time_: number):void
        warp(screen: Screen, x: number, y: number):void
    }
    export class DeviceManager extends GObject.Object {
        get_client_pointer():Device
        get_display():Display
        list_devices(type: DeviceType):any
    }
    export class Display extends GObject.Object {
        beep():void
        close():void
        device_is_grabbed(device: Device):boolean
        flush():void
        get_app_launch_context():AppLaunchContext
        get_default_cursor_size():number
        get_default_group():Window
        get_default_screen():Screen
        get_device_manager():DeviceManager
        get_event():any
        get_maximal_cursor_size(width: number, height: number):void
        get_n_screens():number
        get_name():string
        get_pointer(screen: Screen, x: number, y: number, mask: ModifierType):void
        get_screen(screen_num: number):Screen
        get_window_at_pointer(win_x: number, win_y: number):Window
        has_pending():boolean
        is_closed():boolean
        keyboard_ungrab(time_: number):void
        list_devices():any
        notify_startup_complete(startup_id: string):void
        peek_event():any
        pointer_is_grabbed():boolean
        pointer_ungrab(time_: number):void
        put_event(event: any):void
        request_selection_notification(selection: any):boolean
        set_double_click_distance(distance: number):void
        set_double_click_time(msec: number):void
        store_clipboard(clipboard_window: Window, time_: number, targets: any[], n_targets: number):void
        supports_clipboard_persistence():boolean
        supports_composite():boolean
        supports_cursor_alpha():boolean
        supports_cursor_color():boolean
        supports_input_shapes():boolean
        supports_selection_notification():boolean
        supports_shapes():boolean
        sync():void
        warp_pointer(screen: Screen, x: number, y: number):void
    }
    export class DisplayManager extends GObject.Object {
        get_default_display():Display
        list_displays():any
        open_display(name: string):Display
        set_default_display(display: Display):void
    }
    export class DragContext extends GObject.Object {
        get_actions():DragAction
        get_dest_window():Window
        get_device():Device
        get_protocol():DragProtocol
        get_selected_action():DragAction
        get_source_window():Window
        get_suggested_action():DragAction
        list_targets():any
        set_device(device: Device):void
    }
    export class FrameClock extends GObject.Object {
        begin_updating():void
        end_updating():void
        get_current_timings():any
        get_frame_counter():number
        get_frame_time():number
        get_history_start():number
        get_refresh_info(base_time: number, refresh_interval_return: number, presentation_time_return: number):void
        get_timings(frame_counter: number):any
        request_phase(phase: FrameClockPhase):void
    }
    export class GLContext extends GObject.Object {
        get_debug_enabled():boolean
        get_display():Display
        get_forward_compatible():boolean
        get_required_version(major: number, minor: number):void
        get_shared_context():GLContext
        get_version(major: number, minor: number):void
        get_window():Window
        make_current():void
        realize():boolean
        set_debug_enabled(enabled: boolean):void
        set_forward_compatible(compatible: boolean):void
        set_required_version(major: number, minor: number):void
    }
    export class Keymap extends GObject.Object {
        add_virtual_modifiers(state: ModifierType):void
        get_caps_lock_state():boolean
        get_direction():any
        get_entries_for_keycode(hardware_keycode: number, keys: any[], keyvals: number[], n_entries: number):boolean
        get_entries_for_keyval(keyval: number, keys: any[], n_keys: number):boolean
        get_modifier_mask(intent: ModifierIntent):ModifierType
        get_modifier_state():number
        get_num_lock_state():boolean
        get_scroll_lock_state():boolean
        have_bidi_layouts():boolean
        lookup_key(key: any):number
        map_virtual_modifiers(state: ModifierType):boolean
        translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number, keyval: number, effective_group: number, level: number, consumed_modifiers: ModifierType):boolean
    }
    export class Screen extends GObject.Object {
        get_active_window():Window
        get_display():Display
        get_font_options():any
        get_height():number
        get_height_mm():number
        get_monitor_at_point(x: number, y: number):number
        get_monitor_at_window(window: Window):number
        get_monitor_geometry(monitor_num: number, dest: any):void
        get_monitor_height_mm(monitor_num: number):number
        get_monitor_plug_name(monitor_num: number):string
        get_monitor_scale_factor(monitor_num: number):number
        get_monitor_width_mm(monitor_num: number):number
        get_monitor_workarea(monitor_num: number, dest: any):void
        get_n_monitors():number
        get_number():number
        get_primary_monitor():number
        get_resolution():number
        get_rgba_visual():Visual
        get_root_window():Window
        get_setting(name: string, value: any):boolean
        get_system_visual():Visual
        get_toplevel_windows():any
        get_width():number
        get_width_mm():number
        get_window_stack():any
        is_composited():boolean
        list_visuals():any
        make_display_name():string
        set_font_options(options: any):void
        set_resolution(dpi: number):void
    }
    export class Visual extends GObject.Object {
        get_bits_per_rgb():number
        get_blue_pixel_details(mask: number, shift: number, precision: number):void
        get_byte_order():ByteOrder
        get_colormap_size():number
        get_depth():number
        get_green_pixel_details(mask: number, shift: number, precision: number):void
        get_red_pixel_details(mask: number, shift: number, precision: number):void
        get_screen():Screen
        get_visual_type():VisualType
    }
    export class Window extends GObject.Object {
        constructor(parent: Window, attributes: any, attributes_mask: WindowAttributesType)
        add_filter(func: any, data: any):void
        beep():void
        begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number):void
        begin_move_drag_for_device(device: Device, button: number, root_x: number, root_y: number, timestamp: number):void
        begin_paint_rect(rectangle: any):void
        begin_paint_region(region: any):void
        begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number):void
        begin_resize_drag_for_device(edge: WindowEdge, device: Device, button: number, root_x: number, root_y: number, timestamp: number):void
        configure_finished():void
        coords_from_parent(parent_x: number, parent_y: number, x: number, y: number):void
        coords_to_parent(x: number, y: number, parent_x: number, parent_y: number):void
        create_gl_context():GLContext
        create_similar_image_surface(format: number, width: number, height: number, scale: number):any
        create_similar_surface(content: any, width: number, height: number):any
        deiconify():void
        destroy():void
        destroy_notify():void
        enable_synchronized_configure():void
        end_paint():void
        ensure_native():boolean
        flush():void
        focus(timestamp: number):void
        freeze_toplevel_updates_libgtk_only():void
        freeze_updates():void
        fullscreen():void
        fullscreen_on_monitor(monitor: number):void
        geometry_changed():void
        get_accept_focus():boolean
        get_background_pattern():any
        get_children():any
        get_children_with_user_data(user_data: any):any
        get_clip_region():any
        get_composited():boolean
        get_cursor():Cursor
        get_decorations(decorations: WMDecoration):boolean
        get_device_cursor(device: Device):Cursor
        get_device_events(device: Device):EventMask
        get_device_position(device: Device, x: number, y: number, mask: ModifierType):Window
        get_device_position_double(device: Device, x: number, y: number, mask: ModifierType):Window
        get_display():Display
        get_drag_protocol(target: Window):DragProtocol
        get_effective_parent():Window
        get_effective_toplevel():Window
        get_event_compression():boolean
        get_events():EventMask
        get_focus_on_map():boolean
        get_frame_clock():FrameClock
        get_frame_extents(rect: any):void
        get_fullscreen_mode():FullscreenMode
        get_geometry(x: number, y: number, width: number, height: number):void
        get_group():Window
        get_height():number
        get_modal_hint():boolean
        get_origin(x: number, y: number):number
        get_parent():Window
        get_pass_through():boolean
        get_pointer(x: number, y: number, mask: ModifierType):Window
        get_position(x: number, y: number):void
        get_root_coords(x: number, y: number, root_x: number, root_y: number):void
        get_root_origin(x: number, y: number):void
        get_scale_factor():number
        get_screen():Screen
        get_source_events(source: InputSource):EventMask
        get_state():WindowState
        get_support_multidevice():boolean
        get_toplevel():Window
        get_type_hint():WindowTypeHint
        get_update_area():any
        get_user_data(data: any):void
        get_visible_region():any
        get_visual():Visual
        get_width():number
        get_window_type():WindowType
        has_native():boolean
        hide():void
        iconify():void
        input_shape_combine_region(shape_region: any, offset_x: number, offset_y: number):void
        invalidate_maybe_recurse(region: any, child_func: any, user_data: any):void
        invalidate_rect(rect: any, invalidate_children: boolean):void
        invalidate_region(region: any, invalidate_children: boolean):void
        is_destroyed():boolean
        is_input_only():boolean
        is_shaped():boolean
        is_viewable():boolean
        is_visible():boolean
        lower():void
        mark_paint_from_clip(cr: any):void
        maximize():void
        merge_child_input_shapes():void
        merge_child_shapes():void
        move(x: number, y: number):void
        move_region(region: any, dx: number, dy: number):void
        move_resize(x: number, y: number, width: number, height: number):void
        peek_children():any
        process_updates(update_children: boolean):void
        raise():void
        register_dnd():void
        remove_filter(func: any, data: any):void
        reparent(new_parent: Window, x: number, y: number):void
        resize(width: number, height: number):void
        restack(sibling: Window, above: boolean):void
        scroll(dx: number, dy: number):void
        set_accept_focus(accept_focus: boolean):void
        set_background(color: any):void
        set_background_pattern(pattern: any):void
        set_background_rgba(rgba: any):void
        set_child_input_shapes():void
        set_child_shapes():void
        set_composited(composited: boolean):void
        set_cursor(cursor: Cursor):void
        set_decorations(decorations: WMDecoration):void
        set_device_cursor(device: Device, cursor: Cursor):void
        set_device_events(device: Device, event_mask: EventMask):void
        set_event_compression(event_compression: boolean):void
        set_events(event_mask: EventMask):void
        set_focus_on_map(focus_on_map: boolean):void
        set_fullscreen_mode(mode: FullscreenMode):void
        set_functions(functions: WMFunction):void
        set_geometry_hints(geometry: any, geom_mask: WindowHints):void
        set_group(leader: Window):void
        set_icon_list(pixbufs: any):void
        set_icon_name(name: string):void
        set_invalidate_handler(handler: any):void
        set_keep_above(setting: boolean):void
        set_keep_below(setting: boolean):void
        set_modal_hint(modal: boolean):void
        set_opacity(opacity: number):void
        set_opaque_region(region: any):void
        set_override_redirect(override_redirect: boolean):void
        set_pass_through(pass_through: boolean):void
        set_role(role: string):void
        set_shadow_width(left: number, right: number, top: number, bottom: number):void
        set_skip_pager_hint(skips_pager: boolean):void
        set_skip_taskbar_hint(skips_taskbar: boolean):void
        set_source_events(source: InputSource, event_mask: EventMask):void
        set_startup_id(startup_id: string):void
        set_static_gravities(use_static: boolean):boolean
        set_support_multidevice(support_multidevice: boolean):void
        set_title(title: string):void
        set_transient_for(parent: Window):void
        set_type_hint(hint: WindowTypeHint):void
        set_urgency_hint(urgent: boolean):void
        set_user_data(user_data: GObject.Object):void
        shape_combine_region(shape_region: any, offset_x: number, offset_y: number):void
        show():void
        show_unraised():void
        show_window_menu(event: any):boolean
        stick():void
        thaw_toplevel_updates_libgtk_only():void
        thaw_updates():void
        unfullscreen():void
        unmaximize():void
        unstick():void
        withdraw():void
    }

    export enum AxisUse{
      IGNORE,
      X,
      Y,
      PRESSURE,
      XTILT,
      YTILT,
      WHEEL,
      LAST,
    }
    export enum ByteOrder{
      LSB_FIRST,
      MSB_FIRST,
    }
    export enum CrossingMode{
      NORMAL,
      GRAB,
      UNGRAB,
      GTK_GRAB,
      GTK_UNGRAB,
      STATE_CHANGED,
      TOUCH_BEGIN,
      TOUCH_END,
      DEVICE_SWITCH,
    }
    export enum CursorType{
      X_CURSOR,
      ARROW,
      BASED_ARROW_DOWN,
      BASED_ARROW_UP,
      BOAT,
      BOGOSITY,
      BOTTOM_LEFT_CORNER,
      BOTTOM_RIGHT_CORNER,
      BOTTOM_SIDE,
      BOTTOM_TEE,
      BOX_SPIRAL,
      CENTER_PTR,
      CIRCLE,
      CLOCK,
      COFFEE_MUG,
      CROSS,
      CROSS_REVERSE,
      CROSSHAIR,
      DIAMOND_CROSS,
      DOT,
      DOTBOX,
      DOUBLE_ARROW,
      DRAFT_LARGE,
      DRAFT_SMALL,
      DRAPED_BOX,
      EXCHANGE,
      FLEUR,
      GOBBLER,
      GUMBY,
      HAND1,
      HAND2,
      HEART,
      ICON,
      IRON_CROSS,
      LEFT_PTR,
      LEFT_SIDE,
      LEFT_TEE,
      LEFTBUTTON,
      LL_ANGLE,
      LR_ANGLE,
      MAN,
      MIDDLEBUTTON,
      MOUSE,
      PENCIL,
      PIRATE,
      PLUS,
      QUESTION_ARROW,
      RIGHT_PTR,
      RIGHT_SIDE,
      RIGHT_TEE,
      RIGHTBUTTON,
      RTL_LOGO,
      SAILBOAT,
      SB_DOWN_ARROW,
      SB_H_DOUBLE_ARROW,
      SB_LEFT_ARROW,
      SB_RIGHT_ARROW,
      SB_UP_ARROW,
      SB_V_DOUBLE_ARROW,
      SHUTTLE,
      SIZING,
      SPIDER,
      SPRAYCAN,
      STAR,
      TARGET,
      TCROSS,
      TOP_LEFT_ARROW,
      TOP_LEFT_CORNER,
      TOP_RIGHT_CORNER,
      TOP_SIDE,
      TOP_TEE,
      TREK,
      UL_ANGLE,
      UMBRELLA,
      UR_ANGLE,
      WATCH,
      XTERM,
      LAST_CURSOR,
      BLANK_CURSOR,
      CURSOR_IS_PIXMAP,
    }
    export enum DeviceType{
      MASTER,
      SLAVE,
      FLOATING,
    }
    export enum DragProtocol{
      NONE,
      MOTIF,
      XDND,
      ROOTWIN,
      WIN32_DROPFILES,
      OLE2,
      LOCAL,
      WAYLAND,
    }
    export enum EventType{
      NOTHING,
      DELETE,
      DESTROY,
      EXPOSE,
      MOTION_NOTIFY,
      BUTTON_PRESS,
      _2BUTTON_PRESS,
      DOUBLE_BUTTON_PRESS,
      _3BUTTON_PRESS,
      TRIPLE_BUTTON_PRESS,
      BUTTON_RELEASE,
      KEY_PRESS,
      KEY_RELEASE,
      ENTER_NOTIFY,
      LEAVE_NOTIFY,
      FOCUS_CHANGE,
      CONFIGURE,
      MAP,
      UNMAP,
      PROPERTY_NOTIFY,
      SELECTION_CLEAR,
      SELECTION_REQUEST,
      SELECTION_NOTIFY,
      PROXIMITY_IN,
      PROXIMITY_OUT,
      DRAG_ENTER,
      DRAG_LEAVE,
      DRAG_MOTION,
      DRAG_STATUS,
      DROP_START,
      DROP_FINISHED,
      CLIENT_EVENT,
      VISIBILITY_NOTIFY,
      SCROLL,
      WINDOW_STATE,
      SETTING,
      OWNER_CHANGE,
      GRAB_BROKEN,
      DAMAGE,
      TOUCH_BEGIN,
      TOUCH_UPDATE,
      TOUCH_END,
      TOUCH_CANCEL,
      TOUCHPAD_SWIPE,
      TOUCHPAD_PINCH,
      EVENT_LAST,
    }
    export enum FilterReturn{
      CONTINUE,
      TRANSLATE,
      REMOVE,
    }
    export enum FullscreenMode{
      CURRENT_MONITOR,
      ALL_MONITORS,
    }
    export enum GLError{
      NOT_AVAILABLE,
      UNSUPPORTED_FORMAT,
      UNSUPPORTED_PROFILE,
    }
    export enum GrabOwnership{
      NONE,
      WINDOW,
      APPLICATION,
    }
    export enum GrabStatus{
      SUCCESS,
      ALREADY_GRABBED,
      INVALID_TIME,
      NOT_VIEWABLE,
      FROZEN,
      FAILED,
    }
    export enum Gravity{
      NORTH_WEST,
      NORTH,
      NORTH_EAST,
      WEST,
      CENTER,
      EAST,
      SOUTH_WEST,
      SOUTH,
      SOUTH_EAST,
      STATIC,
    }
    export enum InputMode{
      DISABLED,
      SCREEN,
      WINDOW,
    }
    export enum InputSource{
      MOUSE,
      PEN,
      ERASER,
      CURSOR,
      KEYBOARD,
      TOUCHSCREEN,
      TOUCHPAD,
    }
    export enum ModifierIntent{
      PRIMARY_ACCELERATOR,
      CONTEXT_MENU,
      EXTEND_SELECTION,
      MODIFY_SELECTION,
      NO_TEXT_INPUT,
      SHIFT_GROUP,
      DEFAULT_MOD_MASK,
    }
    export enum NotifyType{
      ANCESTOR,
      VIRTUAL,
      INFERIOR,
      NONLINEAR,
      NONLINEAR_VIRTUAL,
      UNKNOWN,
    }
    export enum OwnerChange{
      NEW_OWNER,
      DESTROY,
      CLOSE,
    }
    export enum PropMode{
      REPLACE,
      PREPEND,
      APPEND,
    }
    export enum PropertyState{
      NEW_VALUE,
      DELETE,
    }
    export enum ScrollDirection{
      UP,
      DOWN,
      LEFT,
      RIGHT,
      SMOOTH,
    }
    export enum SettingAction{
      NEW,
      CHANGED,
      DELETED,
    }
    export enum Status{
      OK,
      ERROR,
      ERROR_PARAM,
      ERROR_FILE,
      ERROR_MEM,
    }
    export enum TouchpadGesturePhase{
      BEGIN,
      UPDATE,
      END,
      CANCEL,
    }
    export enum VisibilityState{
      UNOBSCURED,
      PARTIAL,
      FULLY_OBSCURED,
    }
    export enum VisualType{
      STATIC_GRAY,
      GRAYSCALE,
      STATIC_COLOR,
      PSEUDO_COLOR,
      TRUE_COLOR,
      DIRECT_COLOR,
    }
    export enum WindowEdge{
      NORTH_WEST,
      NORTH,
      NORTH_EAST,
      WEST,
      EAST,
      SOUTH_WEST,
      SOUTH,
      SOUTH_EAST,
    }
    export enum WindowType{
      ROOT,
      TOPLEVEL,
      CHILD,
      TEMP,
      FOREIGN,
      OFFSCREEN,
      SUBSURFACE,
    }
    export enum WindowTypeHint{
      NORMAL,
      DIALOG,
      MENU,
      TOOLBAR,
      SPLASHSCREEN,
      UTILITY,
      DOCK,
      DESKTOP,
      DROPDOWN_MENU,
      POPUP_MENU,
      TOOLTIP,
      NOTIFICATION,
      COMBO,
      DND,
    }
    export enum WindowWindowClass{
      INPUT_OUTPUT,
      INPUT_ONLY,
    }
    export enum DragAction{
      DEFAULT,
      COPY,
      MOVE,
      LINK,
      PRIVATE,
      ASK,
    }
    export enum EventMask{
      EXPOSURE_MASK,
      POINTER_MOTION_MASK,
      POINTER_MOTION_HINT_MASK,
      BUTTON_MOTION_MASK,
      BUTTON1_MOTION_MASK,
      BUTTON2_MOTION_MASK,
      BUTTON3_MOTION_MASK,
      BUTTON_PRESS_MASK,
      BUTTON_RELEASE_MASK,
      KEY_PRESS_MASK,
      KEY_RELEASE_MASK,
      ENTER_NOTIFY_MASK,
      LEAVE_NOTIFY_MASK,
      FOCUS_CHANGE_MASK,
      STRUCTURE_MASK,
      PROPERTY_CHANGE_MASK,
      VISIBILITY_NOTIFY_MASK,
      PROXIMITY_IN_MASK,
      PROXIMITY_OUT_MASK,
      SUBSTRUCTURE_MASK,
      SCROLL_MASK,
      TOUCH_MASK,
      SMOOTH_SCROLL_MASK,
      TOUCHPAD_GESTURE_MASK,
      ALL_EVENTS_MASK,
    }
    export enum FrameClockPhase{
      NONE,
      FLUSH_EVENTS,
      BEFORE_PAINT,
      UPDATE,
      LAYOUT,
      PAINT,
      RESUME_EVENTS,
      AFTER_PAINT,
    }
    export enum ModifierType{
      SHIFT_MASK,
      LOCK_MASK,
      CONTROL_MASK,
      MOD1_MASK,
      MOD2_MASK,
      MOD3_MASK,
      MOD4_MASK,
      MOD5_MASK,
      BUTTON1_MASK,
      BUTTON2_MASK,
      BUTTON3_MASK,
      BUTTON4_MASK,
      BUTTON5_MASK,
      MODIFIER_RESERVED_13_MASK,
      MODIFIER_RESERVED_14_MASK,
      MODIFIER_RESERVED_15_MASK,
      MODIFIER_RESERVED_16_MASK,
      MODIFIER_RESERVED_17_MASK,
      MODIFIER_RESERVED_18_MASK,
      MODIFIER_RESERVED_19_MASK,
      MODIFIER_RESERVED_20_MASK,
      MODIFIER_RESERVED_21_MASK,
      MODIFIER_RESERVED_22_MASK,
      MODIFIER_RESERVED_23_MASK,
      MODIFIER_RESERVED_24_MASK,
      MODIFIER_RESERVED_25_MASK,
      SUPER_MASK,
      HYPER_MASK,
      META_MASK,
      MODIFIER_RESERVED_29_MASK,
      RELEASE_MASK,
      MODIFIER_MASK,
    }
    export enum WMDecoration{
      ALL,
      BORDER,
      RESIZEH,
      TITLE,
      MENU,
      MINIMIZE,
      MAXIMIZE,
    }
    export enum WMFunction{
      ALL,
      RESIZE,
      MOVE,
      MINIMIZE,
      MAXIMIZE,
      CLOSE,
    }
    export enum WindowAttributesType{
      TITLE,
      X,
      Y,
      CURSOR,
      VISUAL,
      WMCLASS,
      NOREDIR,
      TYPE_HINT,
    }
    export enum WindowHints{
      POS,
      MIN_SIZE,
      MAX_SIZE,
      BASE_SIZE,
      ASPECT,
      RESIZE_INC,
      WIN_GRAVITY,
      USER_POS,
      USER_SIZE,
    }
    export enum WindowState{
      WITHDRAWN,
      ICONIFIED,
      MAXIMIZED,
      STICKY,
      FULLSCREEN,
      ABOVE,
      BELOW,
      FOCUSED,
      TILED,
    }

}