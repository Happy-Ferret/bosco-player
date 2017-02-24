/**
 * pango.d.ts
 * 
 * Pango declarations for typescript
 */

declare module "Pango" {
    import * as GObject from "GObject"
    export class Context extends GObject.Object {
        changed():void
        get_base_dir():Direction
        get_base_gravity():Gravity
        get_font_description():any
        get_font_map():FontMap
        get_gravity():Gravity
        get_gravity_hint():GravityHint
        get_language():any
        get_matrix():any
        get_metrics(desc: any, language: any):any
        get_serial():number
        list_families(families: FontFamily[], n_families: number):void
        load_font(desc: any):Font
        load_fontset(desc: any, language: any):Fontset
        set_base_dir(direction: Direction):void
        set_base_gravity(gravity: Gravity):void
        set_font_description(desc: any):void
        set_font_map(font_map: FontMap):void
        set_gravity_hint(hint: GravityHint):void
        set_language(language: any):void
        set_matrix(matrix: any):void
    }
    export class Engine extends GObject.Object {
    }
    export class EngineLang extends Engine {
    }
    export class EngineShape extends Engine {
    }
    export class Font extends GObject.Object {
        describe():any
        describe_with_absolute_size():any
        find_shaper(language: any, ch: number):EngineShape
        get_coverage(language: any):any
        get_font_map():FontMap
        get_glyph_extents(glyph: any, ink_rect: any, logical_rect: any):void
        get_metrics(language: any):any
    }
    export class FontFace extends GObject.Object {
        describe():any
        get_face_name():string
        is_synthesized():boolean
        list_sizes(sizes: number[], n_sizes: number):void
    }
    export class FontFamily extends GObject.Object {
        get_name():string
        is_monospace():boolean
        list_faces(faces: FontFace[], n_faces: number):void
    }
    export class FontMap extends GObject.Object {
        changed():void
        create_context():Context
        get_serial():number
        get_shape_engine_type():string
        list_families(families: FontFamily[], n_families: number):void
        load_font(context: Context, desc: any):Font
        load_fontset(context: Context, desc: any, language: any):Fontset
    }
    export class Fontset extends GObject.Object {
        foreach(func: any, data: any):void
        get_font(wc: number):Font
        get_metrics():any
    }
    export class FontsetSimple extends Fontset {
        constructor(language: any)
        append(font: Font):void
        size():number
    }
    export class Layout extends GObject.Object {
        constructor(context: Context)
        context_changed():void
        copy():Layout
        get_alignment():Alignment
        get_attributes():any
        get_auto_dir():boolean
        get_baseline():number
        get_character_count():number
        get_context():Context
        get_cursor_pos(index_: number, strong_pos: any, weak_pos: any):void
        get_ellipsize():EllipsizeMode
        get_extents(ink_rect: any, logical_rect: any):void
        get_font_description():any
        get_height():number
        get_indent():number
        get_iter():any
        get_justify():boolean
        get_line(line: number):any
        get_line_count():number
        get_line_readonly(line: number):any
        get_lines():any
        get_lines_readonly():any
        get_log_attrs(attrs: any[], n_attrs: number):void
        get_log_attrs_readonly(n_attrs: number):any[]
        get_pixel_extents(ink_rect: any, logical_rect: any):void
        get_pixel_size(width: number, height: number):void
        get_serial():number
        get_single_paragraph_mode():boolean
        get_size(width: number, height: number):void
        get_spacing():number
        get_tabs():any
        get_text():string
        get_unknown_glyphs_count():number
        get_width():number
        get_wrap():WrapMode
        index_to_line_x(index_: number, trailing: boolean, line: number, x_pos: number):void
        index_to_pos(index_: number, pos: any):void
        is_ellipsized():boolean
        is_wrapped():boolean
        move_cursor_visually(strong: boolean, old_index: number, old_trailing: number, direction: number, new_index: number, new_trailing: number):void
        set_alignment(alignment: Alignment):void
        set_attributes(attrs: any):void
        set_auto_dir(auto_dir: boolean):void
        set_ellipsize(ellipsize: EllipsizeMode):void
        set_font_description(desc: any):void
        set_height(height: number):void
        set_indent(indent: number):void
        set_justify(justify: boolean):void
        set_markup(markup: string, length: number):void
        set_markup_with_accel(markup: string, length: number, accel_marker: number, accel_char: number):void
        set_single_paragraph_mode(setting: boolean):void
        set_spacing(spacing: number):void
        set_tabs(tabs: any):void
        set_text(text: string, length: number):void
        set_width(width: number):void
        set_wrap(wrap: WrapMode):void
        xy_to_index(x: number, y: number, index_: number, trailing: number):boolean
    }
    export class Renderer extends GObject.Object {
        activate():void
        deactivate():void
        draw_error_underline(x: number, y: number, width: number, height: number):void
        draw_glyph(font: Font, glyph: any, x: number, y: number):void
        draw_glyph_item(text: string, glyph_item: any, x: number, y: number):void
        draw_glyphs(font: Font, glyphs: any, x: number, y: number):void
        draw_layout(layout: Layout, x: number, y: number):void
        draw_layout_line(line: any, x: number, y: number):void
        draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number):void
        draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number):void
        get_alpha(part: RenderPart):number
        get_color(part: RenderPart):any
        get_layout():Layout
        get_layout_line():any
        get_matrix():any
        part_changed(part: RenderPart):void
        set_alpha(part: RenderPart, alpha: number):void
        set_color(part: RenderPart, color: any):void
        set_matrix(matrix: any):void
    }    
    export enum Alignment{
        LEFT,
        CENTER,
        RIGHT,
    }
    export enum AttrType{
        INVALID,
        LANGUAGE,
        FAMILY,
        STYLE,
        WEIGHT,
        VARIANT,
        STRETCH,
        SIZE,
        FONT_DESC,
        FOREGROUND,
        BACKGROUND,
        UNDERLINE,
        STRIKETHROUGH,
        RISE,
        SHAPE,
        SCALE,
        FALLBACK,
        LETTER_SPACING,
        UNDERLINE_COLOR,
        STRIKETHROUGH_COLOR,
        ABSOLUTE_SIZE,
        GRAVITY,
        GRAVITY_HINT,
        FONT_FEATURES,
        FOREGROUND_ALPHA,
        BACKGROUND_ALPHA,
    }
    export enum BidiType{
        L,
        LRE,
        LRO,
        R,
        AL,
        RLE,
        RLO,
        PDF,
        EN,
        ES,
        ET,
        AN,
        CS,
        NSM,
        BN,
        B,
        S,
        WS,
        ON,
    }
    export enum CoverageLevel{
        NONE,
        FALLBACK,
        APPROXIMATE,
        EXACT,
    }
    export enum Direction{
        LTR,
        RTL,
        TTB_LTR,
        TTB_RTL,
        WEAK_LTR,
        WEAK_RTL,
        NEUTRAL,
    }
    export enum EllipsizeMode{
        NONE,
        START,
        MIDDLE,
        END,
    }
    export enum Gravity{
        SOUTH,
        EAST,
        NORTH,
        WEST,
        AUTO,
    }
    export enum GravityHint{
        NATURAL,
        STRONG,
        LINE,
    }
    export enum RenderPart{
        FOREGROUND,
        BACKGROUND,
        UNDERLINE,
        STRIKETHROUGH,
    }
    export enum Script{
        INVALID_CODE,
        COMMON,
        INHERITED,
        ARABIC,
        ARMENIAN,
        BENGALI,
        BOPOMOFO,
        CHEROKEE,
        COPTIC,
        CYRILLIC,
        DESERET,
        DEVANAGARI,
        ETHIOPIC,
        GEORGIAN,
        GOTHIC,
        GREEK,
        GUJARATI,
        GURMUKHI,
        HAN,
        HANGUL,
        HEBREW,
        HIRAGANA,
        KANNADA,
        KATAKANA,
        KHMER,
        LAO,
        LATIN,
        MALAYALAM,
        MONGOLIAN,
        MYANMAR,
        OGHAM,
        OLD_ITALIC,
        ORIYA,
        RUNIC,
        SINHALA,
        SYRIAC,
        TAMIL,
        TELUGU,
        THAANA,
        THAI,
        TIBETAN,
        CANADIAN_ABORIGINAL,
        YI,
        TAGALOG,
        HANUNOO,
        BUHID,
        TAGBANWA,
        BRAILLE,
        CYPRIOT,
        LIMBU,
        OSMANYA,
        SHAVIAN,
        LINEAR_B,
        TAI_LE,
        UGARITIC,
        NEW_TAI_LUE,
        BUGINESE,
        GLAGOLITIC,
        TIFINAGH,
        SYLOTI_NAGRI,
        OLD_PERSIAN,
        KHAROSHTHI,
        UNKNOWN,
        BALINESE,
        CUNEIFORM,
        PHOENICIAN,
        PHAGS_PA,
        NKO,
        KAYAH_LI,
        LEPCHA,
        REJANG,
        SUNDANESE,
        SAURASHTRA,
        CHAM,
        OL_CHIKI,
        VAI,
        CARIAN,
        LYCIAN,
        LYDIAN,
        BATAK,
        BRAHMI,
        MANDAIC,
        CHAKMA,
        MEROITIC_CURSIVE,
        MEROITIC_HIEROGLYPHS,
        MIAO,
        SHARADA,
        SORA_SOMPENG,
        TAKRI,
    }
    export enum Stretch{
        ULTRA_CONDENSED,
        EXTRA_CONDENSED,
        CONDENSED,
        SEMI_CONDENSED,
        NORMAL,
        SEMI_EXPANDED,
        EXPANDED,
        EXTRA_EXPANDED,
        ULTRA_EXPANDED,
    }
    export enum Style{
        NORMAL,
        OBLIQUE,
        ITALIC,
    }
    export enum TabAlign{
        LEFT,
    }
    export enum Underline{
        NONE,
        SINGLE,
        DOUBLE,
        LOW,
        ERROR,
    }
    export enum Variant{
        NORMAL,
        SMALL_CAPS,
    }
    export enum Weight{
        THIN,
        ULTRALIGHT,
        LIGHT,
        SEMILIGHT,
        BOOK,
        NORMAL,
        MEDIUM,
        SEMIBOLD,
        BOLD,
        ULTRABOLD,
        HEAVY,
        ULTRAHEAVY,
    }
    export enum WrapMode{
        WORD,
        CHAR,
        WORD_CHAR,
    }
    export enum FontMask{
        FAMILY,
        STYLE,
        VARIANT,
        WEIGHT,
        STRETCH,
        SIZE,
        GRAVITY,
    }
}

