/**
 * Atk.d.ts
 *
 */
declare module 'Atk' {
  export enum CoordType{
    SCREEN,
    WINDOW,
  }
  export enum KeyEventType{
    PRESS,
    RELEASE,
    LAST_DEFINED,
  }
  export enum Layer{
    INVALID,
    BACKGROUND,
    CANVAS,
    WIDGET,
    MDI,
    POPUP,
    OVERLAY,
    WINDOW,
  }
  export enum RelationType{
    NULL,
    CONTROLLED_BY,
    CONTROLLER_FOR,
    LABEL_FOR,
    LABELLED_BY,
    MEMBER_OF,
    NODE_CHILD_OF,
    FLOWS_TO,
    FLOWS_FROM,
    SUBWINDOW_OF,
    EMBEDS,
    EMBEDDED_BY,
    POPUP_FOR,
    PARENT_WINDOW_OF,
    DESCRIBED_BY,
    DESCRIPTION_FOR,
    NODE_PARENT_OF,
    LAST_DEFINED,
  }
  export enum Role{
    INVALID,
    ACCELERATOR_LABEL,
    ALERT,
    ANIMATION,
    ARROW,
    CALENDAR,
    CANVAS,
    CHECK_BOX,
    CHECK_MENU_ITEM,
    COLOR_CHOOSER,
    COLUMN_HEADER,
    COMBO_BOX,
    DATE_EDITOR,
    DESKTOP_ICON,
    DESKTOP_FRAME,
    DIAL,
    DIALOG,
    DIRECTORY_PANE,
    DRAWING_AREA,
    FILE_CHOOSER,
    FILLER,
    FONT_CHOOSER,
    FRAME,
    GLASS_PANE,
    HTML_CONTAINER,
    ICON,
    IMAGE,
    INTERNAL_FRAME,
    LABEL,
    LAYERED_PANE,
    LIST,
    LIST_ITEM,
    MENU,
    MENU_BAR,
    MENU_ITEM,
    OPTION_PANE,
    PAGE_TAB,
    PAGE_TAB_LIST,
    PANEL,
    PASSWORD_TEXT,
    POPUP_MENU,
    PROGRESS_BAR,
    PUSH_BUTTON,
    RADIO_BUTTON,
    RADIO_MENU_ITEM,
    ROOT_PANE,
    ROW_HEADER,
    SCROLL_BAR,
    SCROLL_PANE,
    SEPARATOR,
    SLIDER,
    SPLIT_PANE,
    SPIN_BUTTON,
    STATUSBAR,
    TABLE,
    TABLE_CELL,
    TABLE_COLUMN_HEADER,
    TABLE_ROW_HEADER,
    TEAR_OFF_MENU_ITEM,
    TERMINAL,
    TEXT,
    TOGGLE_BUTTON,
    TOOL_BAR,
    TOOL_TIP,
    TREE,
    TREE_TABLE,
    UNKNOWN,
    VIEWPORT,
    WINDOW,
    HEADER,
    FOOTER,
    PARAGRAPH,
    RULER,
    APPLICATION,
    AUTOCOMPLETE,
    EDIT_BAR,
    EMBEDDED,
    ENTRY,
    CHART,
    CAPTION,
    DOCUMENT_FRAME,
    HEADING,
    PAGE,
    SECTION,
    REDUNDANT_OBJECT,
    FORM,
    LINK,
    INPUT_METHOD_WINDOW,
    TABLE_ROW,
    TREE_ITEM,
    DOCUMENT_SPREADSHEET,
    DOCUMENT_PRESENTATION,
    DOCUMENT_TEXT,
    DOCUMENT_WEB,
    DOCUMENT_EMAIL,
    COMMENT,
    LIST_BOX,
    GROUPING,
    IMAGE_MAP,
    NOTIFICATION,
    INFO_BAR,
    LEVEL_BAR,
    TITLE_BAR,
    BLOCK_QUOTE,
    AUDIO,
    VIDEO,
    DEFINITION,
    ARTICLE,
    LANDMARK,
    LOG,
    MARQUEE,
    MATH,
    RATING,
    TIMER,
    DESCRIPTION_LIST,
    DESCRIPTION_TERM,
    DESCRIPTION_VALUE,
    STATIC,
    MATH_FRACTION,
    MATH_ROOT,
    SUBSCRIPT,
    SUPERSCRIPT,
    LAST_DEFINED,
  }
  export enum StateType{
    INVALID,
    ACTIVE,
    ARMED,
    BUSY,
    CHECKED,
    DEFUNCT,
    EDITABLE,
    ENABLED,
    EXPANDABLE,
    EXPANDED,
    FOCUSABLE,
    FOCUSED,
    HORIZONTAL,
    ICONIFIED,
    MODAL,
    MULTI_LINE,
    MULTISELECTABLE,
    OPAQUE,
    PRESSED,
    RESIZABLE,
    SELECTABLE,
    SELECTED,
    SENSITIVE,
    SHOWING,
    SINGLE_LINE,
    STALE,
    TRANSIENT,
    VERTICAL,
    VISIBLE,
    MANAGES_DESCENDANTS,
    INDETERMINATE,
    TRUNCATED,
    REQUIRED,
    INVALID_ENTRY,
    SUPPORTS_AUTOCOMPLETION,
    SELECTABLE_TEXT,
    DEFAULT,
    ANIMATED,
    VISITED,
    CHECKABLE,
    HAS_POPUP,
    HAS_TOOLTIP,
    READ_ONLY,
    LAST_DEFINED,
  }
  export enum TextAttribute{
    INVALID,
    LEFT_MARGIN,
    RIGHT_MARGIN,
    INDENT,
    INVISIBLE,
    EDITABLE,
    PIXELS_ABOVE_LINES,
    PIXELS_BELOW_LINES,
    PIXELS_INSIDE_WRAP,
    BG_FULL_HEIGHT,
    RISE,
    UNDERLINE,
    STRIKETHROUGH,
    SIZE,
    SCALE,
    WEIGHT,
    LANGUAGE,
    FAMILY_NAME,
    BG_COLOR,
    FG_COLOR,
    BG_STIPPLE,
    FG_STIPPLE,
    WRAP_MODE,
    DIRECTION,
    JUSTIFICATION,
    STRETCH,
    VARIANT,
    STYLE,
    LAST_DEFINED,
  }
  export enum TextBoundary{
    CHAR,
    WORD_START,
    WORD_END,
    SENTENCE_START,
    SENTENCE_END,
    LINE_START,
    LINE_END,
  }
  export enum TextClipType{
    NONE,
    MIN,
    MAX,
    BOTH,
  }
  export enum TextGranularity{
    CHAR,
    WORD,
    SENTENCE,
    LINE,
    PARAGRAPH,
  }
  export enum ValueType{
    VERY_WEAK,
    WEAK,
    ACCEPTABLE,
    STRONG,
    VERY_STRONG,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    VERY_BAD,
    BAD,
    GOOD,
    VERY_GOOD,
    BEST,
    LAST_DEFINED,
  }
  export enum HyperlinkStateFlags{
    INLINE,
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

  export enum BusType{
    STARTER,
    NONE,
    SYSTEM,
    SESSION,
  }
  export enum ConverterResult{
    ERROR,
    CONVERTED,
    FINISHED,
    FLUSHED,
  }
  export enum CredentialsType{
    INVALID,
    LINUX_UCRED,
    FREEBSD_CMSGCRED,
    OPENBSD_SOCKPEERCRED,
    SOLARIS_UCRED,
    NETBSD_UNPCBID,
  }
  export enum DBusError{
    FAILED,
    NO_MEMORY,
    SERVICE_UNKNOWN,
    NAME_HAS_NO_OWNER,
    NO_REPLY,
    IO_ERROR,
    BAD_ADDRESS,
    NOT_SUPPORTED,
    LIMITS_EXCEEDED,
    ACCESS_DENIED,
    AUTH_FAILED,
    NO_SERVER,
    TIMEOUT,
    NO_NETWORK,
    ADDRESS_IN_USE,
    DISCONNECTED,
    INVALID_ARGS,
    FILE_NOT_FOUND,
    FILE_EXISTS,
    UNKNOWN_METHOD,
    TIMED_OUT,
    MATCH_RULE_NOT_FOUND,
    MATCH_RULE_INVALID,
    SPAWN_EXEC_FAILED,
    SPAWN_FORK_FAILED,
    SPAWN_CHILD_EXITED,
    SPAWN_CHILD_SIGNALED,
    SPAWN_FAILED,
    SPAWN_SETUP_FAILED,
    SPAWN_CONFIG_INVALID,
    SPAWN_SERVICE_INVALID,
    SPAWN_SERVICE_NOT_FOUND,
    SPAWN_PERMISSIONS_INVALID,
    SPAWN_FILE_INVALID,
    SPAWN_NO_MEMORY,
    UNIX_PROCESS_ID_UNKNOWN,
    INVALID_SIGNATURE,
    INVALID_FILE_CONTENT,
    SELINUX_SECURITY_CONTEXT_UNKNOWN,
    ADT_AUDIT_DATA_UNKNOWN,
    OBJECT_PATH_IN_USE,
    UNKNOWN_OBJECT,
    UNKNOWN_INTERFACE,
    UNKNOWN_PROPERTY,
    PROPERTY_READ_ONLY,
  }
  export enum DBusMessageByteOrder{
    BIG_ENDIAN,
    LITTLE_ENDIAN,
  }
  export enum DBusMessageHeaderField{
    INVALID,
    PATH,
    INTERFACE,
    MEMBER,
    ERROR_NAME,
    REPLY_SERIAL,
    DESTINATION,
    SENDER,
    SIGNATURE,
    NUM_UNIX_FDS,
  }
  export enum DBusMessageType{
    INVALID,
    METHOD_CALL,
    METHOD_RETURN,
    ERROR,
    SIGNAL,
  }
  export enum DataStreamByteOrder{
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    HOST_ENDIAN,
  }
  export enum DataStreamNewlineType{
    LF,
    CR,
    CR_LF,
    ANY,
  }
  export enum DriveStartStopType{
    UNKNOWN,
    SHUTDOWN,
    NETWORK,
    MULTIDISK,
    PASSWORD,
  }
  export enum EmblemOrigin{
    UNKNOWN,
    DEVICE,
    LIVEMETADATA,
    TAG,
  }
  export enum FileAttributeStatus{
    UNSET,
    SET,
    ERROR_SETTING,
  }
  export enum FileAttributeType{
    INVALID,
    STRING,
    BYTE_STRING,
    BOOLEAN,
    UINT32,
    INT32,
    UINT64,
    INT64,
    OBJECT,
    STRINGV,
  }
  export enum FileMonitorEvent{
    CHANGED,
    CHANGES_DONE_HINT,
    DELETED,
    CREATED,
    ATTRIBUTE_CHANGED,
    PRE_UNMOUNT,
    UNMOUNTED,
    MOVED,
    RENAMED,
    MOVED_IN,
    MOVED_OUT,
  }
  export enum FileType{
    UNKNOWN,
    REGULAR,
    DIRECTORY,
    SYMBOLIC_LINK,
    SPECIAL,
    SHORTCUT,
    MOUNTABLE,
  }
  export enum FilesystemPreviewType{
    IF_ALWAYS,
    IF_LOCAL,
    NEVER,
  }
  export enum IOErrorEnum{
    FAILED,
    NOT_FOUND,
    EXISTS,
    IS_DIRECTORY,
    NOT_DIRECTORY,
    NOT_EMPTY,
    NOT_REGULAR_FILE,
    NOT_SYMBOLIC_LINK,
    NOT_MOUNTABLE_FILE,
    FILENAME_TOO_LONG,
    INVALID_FILENAME,
    TOO_MANY_LINKS,
    NO_SPACE,
    INVALID_ARGUMENT,
    PERMISSION_DENIED,
    NOT_SUPPORTED,
    NOT_MOUNTED,
    ALREADY_MOUNTED,
    CLOSED,
    CANCELLED,
    PENDING,
    READ_ONLY,
    CANT_CREATE_BACKUP,
    WRONG_ETAG,
    TIMED_OUT,
    WOULD_RECURSE,
    BUSY,
    WOULD_BLOCK,
    HOST_NOT_FOUND,
    WOULD_MERGE,
    FAILED_HANDLED,
    TOO_MANY_OPEN_FILES,
    NOT_INITIALIZED,
    ADDRESS_IN_USE,
    PARTIAL_INPUT,
    INVALID_DATA,
    DBUS_ERROR,
    HOST_UNREACHABLE,
    NETWORK_UNREACHABLE,
    CONNECTION_REFUSED,
    PROXY_FAILED,
    PROXY_AUTH_FAILED,
    PROXY_NEED_AUTH,
    PROXY_NOT_ALLOWED,
    BROKEN_PIPE,
    CONNECTION_CLOSED,
    NOT_CONNECTED,
    MESSAGE_TOO_LARGE,
  }
  export enum IOModuleScopeFlags{
    NONE,
    BLOCK_DUPLICATES,
  }
  export enum MountOperationResult{
    HANDLED,
    ABORTED,
    UNHANDLED,
  }
  export enum NetworkConnectivity{
    LOCAL,
    LIMITED,
    PORTAL,
    FULL,
  }
  export enum NotificationPriority{
    NORMAL,
    LOW,
    HIGH,
    URGENT,
  }
  export enum PasswordSave{
    NEVER,
    FOR_SESSION,
    PERMANENTLY,
  }
  export enum ResolverError{
    NOT_FOUND,
    TEMPORARY_FAILURE,
    INTERNAL,
  }
  export enum ResolverRecordType{
    SRV,
    MX,
    TXT,
    SOA,
    NS,
  }
  export enum ResourceError{
    NOT_FOUND,
    INTERNAL,
  }
  export enum SocketClientEvent{
    RESOLVING,
    RESOLVED,
    CONNECTING,
    CONNECTED,
    PROXY_NEGOTIATING,
    PROXY_NEGOTIATED,
    TLS_HANDSHAKING,
    TLS_HANDSHAKED,
    COMPLETE,
  }
  export enum SocketFamily{
    INVALID,
    UNIX,
    IPV4,
    IPV6,
  }
  export enum SocketListenerEvent{
    BINDING,
    BOUND,
    LISTENING,
    LISTENED,
  }
  export enum SocketProtocol{
    UNKNOWN,
    DEFAULT,
    TCP,
    UDP,
    SCTP,
  }
  export enum SocketType{
    INVALID,
    STREAM,
    DATAGRAM,
    SEQPACKET,
  }
  export enum TlsAuthenticationMode{
    NONE,
    REQUESTED,
    REQUIRED,
  }
  export enum TlsCertificateRequestFlags{
    NONE,
  }
  export enum TlsDatabaseLookupFlags{
    NONE,
    KEYPAIR,
  }
  export enum TlsError{
    UNAVAILABLE,
    MISC,
    BAD_CERTIFICATE,
    NOT_TLS,
    HANDSHAKE,
    CERTIFICATE_REQUIRED,
    EOF,
  }
  export enum TlsInteractionResult{
    UNHANDLED,
    HANDLED,
    FAILED,
  }
  export enum TlsRehandshakeMode{
    NEVER,
    SAFELY,
    UNSAFELY,
  }
  export enum UnixSocketAddressType{
    INVALID,
    ANONYMOUS,
    PATH,
    ABSTRACT,
    ABSTRACT_PADDED,
  }
  export enum ZlibCompressorFormat{
    ZLIB,
    GZIP,
    RAW,
  }
  export enum AppInfoCreateFlags{
    NONE,
    NEEDS_TERMINAL,
    SUPPORTS_URIS,
    SUPPORTS_STARTUP_NOTIFICATION,
  }
  export enum ApplicationFlags{
    FLAGS_NONE,
    IS_SERVICE,
    IS_LAUNCHER,
    HANDLES_OPEN,
    HANDLES_COMMAND_LINE,
    SEND_ENVIRONMENT,
    NON_UNIQUE,
  }
  export enum AskPasswordFlags{
    NEED_PASSWORD,
    NEED_USERNAME,
    NEED_DOMAIN,
    SAVING_SUPPORTED,
    ANONYMOUS_SUPPORTED,
  }
  export enum BusNameOwnerFlags{
    NONE,
    ALLOW_REPLACEMENT,
    REPLACE,
  }
  export enum BusNameWatcherFlags{
    NONE,
    AUTO_START,
  }
  export enum ConverterFlags{
    NONE,
    INPUT_AT_END,
    FLUSH,
  }
  export enum DBusCallFlags{
    NONE,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
  }
  export enum DBusCapabilityFlags{
    NONE,
    UNIX_FD_PASSING,
  }
  export enum DBusConnectionFlags{
    NONE,
    AUTHENTICATION_CLIENT,
    AUTHENTICATION_SERVER,
    AUTHENTICATION_ALLOW_ANONYMOUS,
    MESSAGE_BUS_CONNECTION,
    DELAY_MESSAGE_PROCESSING,
  }
  export enum DBusInterfaceSkeletonFlags{
    NONE,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD,
  }
  export enum DBusMessageFlags{
    NONE,
    NO_REPLY_EXPECTED,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
  }
  export enum DBusObjectManagerClientFlags{
    NONE,
    DO_NOT_AUTO_START,
  }
  export enum DBusPropertyInfoFlags{
    NONE,
    READABLE,
    WRITABLE,
  }
  export enum DBusProxyFlags{
    NONE,
    DO_NOT_LOAD_PROPERTIES,
    DO_NOT_CONNECT_SIGNALS,
    DO_NOT_AUTO_START,
    GET_INVALIDATED_PROPERTIES,
    DO_NOT_AUTO_START_AT_CONSTRUCTION,
  }
  export enum DBusSendMessageFlags{
    NONE,
    PRESERVE_SERIAL,
  }
  export enum DBusServerFlags{
    NONE,
    RUN_IN_THREAD,
    AUTHENTICATION_ALLOW_ANONYMOUS,
  }
  export enum DBusSignalFlags{
    NONE,
    NO_MATCH_RULE,
    MATCH_ARG0_NAMESPACE,
    MATCH_ARG0_PATH,
  }
  export enum DBusSubtreeFlags{
    NONE,
    DISPATCH_TO_UNENUMERATED_NODES,
  }
  export enum DriveStartFlags{
    NONE,
  }
  export enum FileAttributeInfoFlags{
    NONE,
    COPY_WITH_FILE,
    COPY_WHEN_MOVED,
  }
  export enum FileCopyFlags{
    NONE,
    OVERWRITE,
    BACKUP,
    NOFOLLOW_SYMLINKS,
    ALL_METADATA,
    NO_FALLBACK_FOR_MOVE,
    TARGET_DEFAULT_PERMS,
  }
  export enum FileCreateFlags{
    NONE,
    PRIVATE,
    REPLACE_DESTINATION,
  }
  export enum FileMeasureFlags{
    NONE,
    REPORT_ANY_ERROR,
    APPARENT_SIZE,
    NO_XDEV,
  }
  export enum FileMonitorFlags{
    NONE,
    WATCH_MOUNTS,
    SEND_MOVED,
    WATCH_HARD_LINKS,
    WATCH_MOVES,
  }
  export enum FileQueryInfoFlags{
    NONE,
    NOFOLLOW_SYMLINKS,
  }
  export enum IOStreamSpliceFlags{
    NONE,
    CLOSE_STREAM1,
    CLOSE_STREAM2,
    WAIT_FOR_BOTH,
  }
  export enum MountMountFlags{
    NONE,
  }
  export enum MountUnmountFlags{
    NONE,
    FORCE,
  }
  export enum OutputStreamSpliceFlags{
    NONE,
    CLOSE_SOURCE,
    CLOSE_TARGET,
  }
  export enum ResourceFlags{
    NONE,
    COMPRESSED,
  }
  export enum ResourceLookupFlags{
    NONE,
  }
  export enum SettingsBindFlags{
    DEFAULT,
    GET,
    SET,
    NO_SENSITIVITY,
    GET_NO_CHANGES,
    INVERT_BOOLEAN,
  }
  export enum SocketMsgFlags{
    NONE,
    OOB,
    PEEK,
    DONTROUTE,
  }
  export enum SubprocessFlags{
    NONE,
    STDIN_PIPE,
    STDIN_INHERIT,
    STDOUT_PIPE,
    STDOUT_SILENCE,
    STDERR_PIPE,
    STDERR_SILENCE,
    STDERR_MERGE,
    INHERIT_FDS,
  }
  export enum TestDBusFlags{
    NONE,
  }
  export enum TlsCertificateFlags{
    UNKNOWN_CA,
    BAD_IDENTITY,
    NOT_ACTIVATED,
    EXPIRED,
    REVOKED,
    INSECURE,
    GENERIC_ERROR,
    VALIDATE_ALL,
  }
  export enum TlsDatabaseVerifyFlags{
    NONE,
  }
  export enum TlsPasswordFlags{
    NONE,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
  }
}
/**
 * GLib.d.ts
 *
 */
declare module 'GLib' {
  export enum BookmarkFileError{
    INVALID_URI,
    INVALID_VALUE,
    APP_NOT_REGISTERED,
    URI_NOT_FOUND,
    READ,
    UNKNOWN_ENCODING,
    WRITE,
    FILE_NOT_FOUND,
  }
  export enum ChecksumType{
    MD5,
    SHA1,
    SHA256,
    SHA512,
  }
  export enum ConvertError{
    NO_CONVERSION,
    ILLEGAL_SEQUENCE,
    FAILED,
    PARTIAL_INPUT,
    BAD_URI,
    NOT_ABSOLUTE_PATH,
    NO_MEMORY,
  }
  export enum DateDMY{
    DAY,
    MONTH,
    YEAR,
  }
  export enum DateMonth{
    BAD_MONTH,
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER,
  }
  export enum DateWeekday{
    BAD_WEEKDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }
  export enum ErrorType{
    UNKNOWN,
    UNEXP_EOF,
    UNEXP_EOF_IN_STRING,
    UNEXP_EOF_IN_COMMENT,
    NON_DIGIT_IN_CONST,
    DIGIT_RADIX,
    FLOAT_RADIX,
    FLOAT_MALFORMED,
  }
  export enum FileError{
    EXIST,
    ISDIR,
    ACCES,
    NAMETOOLONG,
    NOENT,
    NOTDIR,
    NXIO,
    NODEV,
    ROFS,
    TXTBSY,
    FAULT,
    LOOP,
    NOSPC,
    NOMEM,
    MFILE,
    NFILE,
    BADF,
    INVAL,
    PIPE,
    AGAIN,
    INTR,
    IO,
    PERM,
    NOSYS,
    FAILED,
  }
  export enum IOChannelError{
    FBIG,
    INVAL,
    IO,
    ISDIR,
    NOSPC,
    NXIO,
    OVERFLOW,
    PIPE,
    FAILED,
  }
  export enum IOError{
    NONE,
    AGAIN,
    INVAL,
    UNKNOWN,
  }
  export enum IOStatus{
    ERROR,
    NORMAL,
    EOF,
    AGAIN,
  }
  export enum KeyFileError{
    UNKNOWN_ENCODING,
    PARSE,
    NOT_FOUND,
    KEY_NOT_FOUND,
    GROUP_NOT_FOUND,
    INVALID_VALUE,
  }
  export enum MarkupError{
    BAD_UTF8,
    EMPTY,
    PARSE,
    UNKNOWN_ELEMENT,
    UNKNOWN_ATTRIBUTE,
    INVALID_CONTENT,
    MISSING_ATTRIBUTE,
  }
  export enum NormalizeMode{
    DEFAULT,
    NFD,
    DEFAULT_COMPOSE,
    NFC,
    ALL,
    NFKD,
    ALL_COMPOSE,
    NFKC,
  }
  export enum OnceStatus{
    NOTCALLED,
    PROGRESS,
    READY,
  }
  export enum OptionArg{
    NONE,
    STRING,
    INT,
    CALLBACK,
    FILENAME,
    STRING_ARRAY,
    FILENAME_ARRAY,
    DOUBLE,
    INT64,
  }
  export enum OptionError{
    UNKNOWN_OPTION,
    BAD_VALUE,
    FAILED,
  }
  export enum RegexError{
    COMPILE,
    OPTIMIZE,
    REPLACE,
    MATCH,
    INTERNAL,
    STRAY_BACKSLASH,
    MISSING_CONTROL_CHAR,
    UNRECOGNIZED_ESCAPE,
    QUANTIFIERS_OUT_OF_ORDER,
    QUANTIFIER_TOO_BIG,
    UNTERMINATED_CHARACTER_CLASS,
    INVALID_ESCAPE_IN_CHARACTER_CLASS,
    RANGE_OUT_OF_ORDER,
    NOTHING_TO_REPEAT,
    UNRECOGNIZED_CHARACTER,
    POSIX_NAMED_CLASS_OUTSIDE_CLASS,
    UNMATCHED_PARENTHESIS,
    INEXISTENT_SUBPATTERN_REFERENCE,
    UNTERMINATED_COMMENT,
    EXPRESSION_TOO_LARGE,
    MEMORY_ERROR,
    VARIABLE_LENGTH_LOOKBEHIND,
    MALFORMED_CONDITION,
    TOO_MANY_CONDITIONAL_BRANCHES,
    ASSERTION_EXPECTED,
    UNKNOWN_POSIX_CLASS_NAME,
    POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED,
    HEX_CODE_TOO_LARGE,
    INVALID_CONDITION,
    SINGLE_BYTE_MATCH_IN_LOOKBEHIND,
    INFINITE_LOOP,
    MISSING_SUBPATTERN_NAME_TERMINATOR,
    DUPLICATE_SUBPATTERN_NAME,
    MALFORMED_PROPERTY,
    UNKNOWN_PROPERTY,
    SUBPATTERN_NAME_TOO_LONG,
    TOO_MANY_SUBPATTERNS,
    INVALID_OCTAL_VALUE,
    TOO_MANY_BRANCHES_IN_DEFINE,
    DEFINE_REPETION,
    INCONSISTENT_NEWLINE_OPTIONS,
    MISSING_BACK_REFERENCE,
    INVALID_RELATIVE_REFERENCE,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN,
    UNKNOWN_BACKTRACKING_CONTROL_VERB,
    NUMBER_TOO_BIG,
    MISSING_SUBPATTERN_NAME,
    MISSING_DIGIT,
    INVALID_DATA_CHARACTER,
    EXTRA_SUBPATTERN_NAME,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED,
    INVALID_CONTROL_CHAR,
    MISSING_NAME,
    NOT_SUPPORTED_IN_CLASS,
    TOO_MANY_FORWARD_REFERENCES,
    NAME_TOO_LONG,
    CHARACTER_VALUE_TOO_LARGE,
  }
  export enum SeekType{
    CUR,
    SET,
    END,
  }
  export enum ShellError{
    BAD_QUOTING,
    EMPTY_STRING,
    FAILED,
  }
  export enum SliceConfig{
    ALWAYS_MALLOC,
    BYPASS_MAGAZINES,
    WORKING_SET_MSECS,
    COLOR_INCREMENT,
    CHUNK_SIZES,
    CONTENTION_COUNTER,
  }
  export enum SpawnError{
    FORK,
    READ,
    CHDIR,
    ACCES,
    PERM,
    TOO_BIG,
    _2BIG,
    NOEXEC,
    NAMETOOLONG,
    NOENT,
    NOMEM,
    NOTDIR,
    LOOP,
    TXTBUSY,
    IO,
    NFILE,
    MFILE,
    INVAL,
    ISDIR,
    LIBBAD,
    FAILED,
  }
  export enum TestFileType{
    DIST,
    BUILT,
  }
  export enum TestLogType{
    NONE,
    ERROR,
    START_BINARY,
    LIST_CASE,
    SKIP_CASE,
    START_CASE,
    STOP_CASE,
    MIN_RESULT,
    MAX_RESULT,
    MESSAGE,
    START_SUITE,
    STOP_SUITE,
  }
  export enum ThreadError{
    THREAD_ERROR_AGAIN,
  }
  export enum TimeType{
    STANDARD,
    DAYLIGHT,
    UNIVERSAL,
  }
  export enum TokenType{
    EOF,
    LEFT_PAREN,
    RIGHT_PAREN,
    LEFT_CURLY,
    RIGHT_CURLY,
    LEFT_BRACE,
    RIGHT_BRACE,
    EQUAL_SIGN,
    COMMA,
    NONE,
    ERROR,
    CHAR,
    BINARY,
    OCTAL,
    INT,
    HEX,
    FLOAT,
    STRING,
    SYMBOL,
    IDENTIFIER,
    IDENTIFIER_NULL,
    COMMENT_SINGLE,
    COMMENT_MULTI,
  }
  export enum TraverseType{
    IN_ORDER,
    PRE_ORDER,
    POST_ORDER,
    LEVEL_ORDER,
  }
  export enum UnicodeBreakType{
    MANDATORY,
    CARRIAGE_RETURN,
    LINE_FEED,
    COMBINING_MARK,
    SURROGATE,
    ZERO_WIDTH_SPACE,
    INSEPARABLE,
    NON_BREAKING_GLUE,
    CONTINGENT,
    SPACE,
    AFTER,
    BEFORE,
    BEFORE_AND_AFTER,
    HYPHEN,
    NON_STARTER,
    OPEN_PUNCTUATION,
    CLOSE_PUNCTUATION,
    QUOTATION,
    EXCLAMATION,
    IDEOGRAPHIC,
    NUMERIC,
    INFIX_SEPARATOR,
    SYMBOL,
    ALPHABETIC,
    PREFIX,
    POSTFIX,
    COMPLEX_CONTEXT,
    AMBIGUOUS,
    UNKNOWN,
    NEXT_LINE,
    WORD_JOINER,
    HANGUL_L_JAMO,
    HANGUL_V_JAMO,
    HANGUL_T_JAMO,
    HANGUL_LV_SYLLABLE,
    HANGUL_LVT_SYLLABLE,
    CLOSE_PARANTHESIS,
    CONDITIONAL_JAPANESE_STARTER,
    HEBREW_LETTER,
    REGIONAL_INDICATOR,
  }
  export enum UnicodeScript{
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
    AVESTAN,
    BAMUM,
    EGYPTIAN_HIEROGLYPHS,
    IMPERIAL_ARAMAIC,
    INSCRIPTIONAL_PAHLAVI,
    INSCRIPTIONAL_PARTHIAN,
    JAVANESE,
    KAITHI,
    LISU,
    MEETEI_MAYEK,
    OLD_SOUTH_ARABIAN,
    OLD_TURKIC,
    SAMARITAN,
    TAI_THAM,
    TAI_VIET,
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
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
  }
  export enum UnicodeType{
    CONTROL,
    FORMAT,
    UNASSIGNED,
    PRIVATE_USE,
    SURROGATE,
    LOWERCASE_LETTER,
    MODIFIER_LETTER,
    OTHER_LETTER,
    TITLECASE_LETTER,
    UPPERCASE_LETTER,
    SPACING_MARK,
    ENCLOSING_MARK,
    NON_SPACING_MARK,
    DECIMAL_NUMBER,
    LETTER_NUMBER,
    OTHER_NUMBER,
    CONNECT_PUNCTUATION,
    DASH_PUNCTUATION,
    CLOSE_PUNCTUATION,
    FINAL_PUNCTUATION,
    INITIAL_PUNCTUATION,
    OTHER_PUNCTUATION,
    OPEN_PUNCTUATION,
    CURRENCY_SYMBOL,
    MODIFIER_SYMBOL,
    MATH_SYMBOL,
    OTHER_SYMBOL,
    LINE_SEPARATOR,
    PARAGRAPH_SEPARATOR,
    SPACE_SEPARATOR,
  }
  export enum UserDirectory{
    DIRECTORY_DESKTOP,
    DIRECTORY_DOCUMENTS,
    DIRECTORY_DOWNLOAD,
    DIRECTORY_MUSIC,
    DIRECTORY_PICTURES,
    DIRECTORY_PUBLIC_SHARE,
    DIRECTORY_TEMPLATES,
    DIRECTORY_VIDEOS,
    N_DIRECTORIES,
  }
  export enum VariantClass{
    BOOLEAN,
    BYTE,
    INT16,
    UINT16,
    INT32,
    UINT32,
    INT64,
    UINT64,
    HANDLE,
    DOUBLE,
    STRING,
    OBJECT_PATH,
    SIGNATURE,
    VARIANT,
    MAYBE,
    ARRAY,
    TUPLE,
    DICT_ENTRY,
  }
  export enum VariantParseError{
    FAILED,
    BASIC_TYPE_EXPECTED,
    CANNOT_INFER_TYPE,
    DEFINITE_TYPE_EXPECTED,
    INPUT_NOT_AT_END,
    INVALID_CHARACTER,
    INVALID_FORMAT_STRING,
    INVALID_OBJECT_PATH,
    INVALID_SIGNATURE,
    INVALID_TYPE_STRING,
    NO_COMMON_TYPE,
    NUMBER_OUT_OF_RANGE,
    NUMBER_TOO_BIG,
    TYPE_ERROR,
    UNEXPECTED_TOKEN,
    UNKNOWN_KEYWORD,
    UNTERMINATED_STRING_CONSTANT,
    VALUE_EXPECTED,
  }
  export enum AsciiType{
    ALNUM,
    ALPHA,
    CNTRL,
    DIGIT,
    GRAPH,
    LOWER,
    PRINT,
    PUNCT,
    SPACE,
    UPPER,
    XDIGIT,
  }
  export enum FileTest{
    IS_REGULAR,
    IS_SYMLINK,
    IS_DIR,
    IS_EXECUTABLE,
    EXISTS,
  }
  export enum FormatSizeFlags{
    DEFAULT,
    LONG_FORMAT,
    IEC_UNITS,
  }
  export enum HookFlagMask{
    ACTIVE,
    IN_CALL,
    MASK,
  }
  export enum IOCondition{
    IN,
    OUT,
    PRI,
    ERR,
    HUP,
    NVAL,
  }
  export enum IOFlags{
    APPEND,
    NONBLOCK,
    IS_READABLE,
    IS_WRITABLE,
    IS_WRITEABLE,
    IS_SEEKABLE,
    MASK,
    GET_MASK,
    SET_MASK,
  }
  export enum KeyFileFlags{
    NONE,
    KEEP_COMMENTS,
    KEEP_TRANSLATIONS,
  }
  export enum LogLevelFlags{
    FLAG_RECURSION,
    FLAG_FATAL,
    LEVEL_ERROR,
    LEVEL_CRITICAL,
    LEVEL_WARNING,
    LEVEL_MESSAGE,
    LEVEL_INFO,
    LEVEL_DEBUG,
    LEVEL_MASK,
  }
  export enum MarkupCollectType{
    INVALID,
    STRING,
    STRDUP,
    BOOLEAN,
    TRISTATE,
    OPTIONAL,
  }
  export enum MarkupParseFlags{
    DO_NOT_USE_THIS_UNSUPPORTED_FLAG,
    TREAT_CDATA_AS_TEXT,
    PREFIX_ERROR_POSITION,
    IGNORE_QUALIFIED,
  }
  export enum OptionFlags{
    NONE,
    HIDDEN,
    IN_MAIN,
    REVERSE,
    NO_ARG,
    FILENAME,
    OPTIONAL_ARG,
    NOALIAS,
  }
  export enum RegexCompileFlags{
    CASELESS,
    MULTILINE,
    DOTALL,
    EXTENDED,
    ANCHORED,
    DOLLAR_ENDONLY,
    UNGREEDY,
    RAW,
    NO_AUTO_CAPTURE,
    OPTIMIZE,
    FIRSTLINE,
    DUPNAMES,
    NEWLINE_CR,
    NEWLINE_LF,
    NEWLINE_CRLF,
    NEWLINE_ANYCRLF,
    BSR_ANYCRLF,
    JAVASCRIPT_COMPAT,
  }
  export enum RegexMatchFlags{
    ANCHORED,
    NOTBOL,
    NOTEOL,
    NOTEMPTY,
    PARTIAL,
    NEWLINE_CR,
    NEWLINE_LF,
    NEWLINE_CRLF,
    NEWLINE_ANY,
    NEWLINE_ANYCRLF,
    BSR_ANYCRLF,
    BSR_ANY,
    PARTIAL_SOFT,
    PARTIAL_HARD,
    NOTEMPTY_ATSTART,
  }
  export enum SpawnFlags{
    DEFAULT,
    LEAVE_DESCRIPTORS_OPEN,
    DO_NOT_REAP_CHILD,
    SEARCH_PATH,
    STDOUT_TO_DEV_NULL,
    STDERR_TO_DEV_NULL,
    CHILD_INHERITS_STDIN,
    FILE_AND_ARGV_ZERO,
    SEARCH_PATH_FROM_ENVP,
    CLOEXEC_PIPES,
  }
  export enum TestSubprocessFlags{
    STDIN,
    STDOUT,
    STDERR,
  }
  export enum TestTrapFlags{
    SILENCE_STDOUT,
    SILENCE_STDERR,
    INHERIT_STDIN,
  }
  export enum TraverseFlags{
    LEAVES,
    NON_LEAVES,
    ALL,
    MASK,
    LEAFS,
    NON_LEAFS,
  }
}
/**
 * GObject.d.ts
 *
 */
declare module 'GObject' {
  export enum BindingFlags{
    DEFAULT,
    BIDIRECTIONAL,
    SYNC_CREATE,
    INVERT_BOOLEAN,
  }
  export enum ConnectFlags{
    AFTER,
    SWAPPED,
  }
  export enum ParamFlags{
    READABLE,
    WRITABLE,
    READWRITE,
    CONSTRUCT,
    CONSTRUCT_ONLY,
    LAX_VALIDATION,
    STATIC_NAME,
    PRIVATE,
    STATIC_NICK,
    STATIC_BLURB,
    EXPLICIT_NOTIFY,
    DEPRECATED,
  }
  export enum SignalFlags{
    RUN_FIRST,
    RUN_LAST,
    RUN_CLEANUP,
    NO_RECURSE,
    DETAILED,
    ACTION,
    NO_HOOKS,
    MUST_COLLECT,
    DEPRECATED,
  }
  export enum SignalMatchType{
    ID,
    DETAIL,
    CLOSURE,
    FUNC,
    DATA,
    UNBLOCKED,
  }
  export enum TypeDebugFlags{
    NONE,
    OBJECTS,
    SIGNALS,
    INSTANCE_COUNT,
    MASK,
  }
  export enum TypeFlags{
    ABSTRACT,
    VALUE_ABSTRACT,
  }
  export enum TypeFundamentalFlags{
    CLASSED,
    INSTANTIATABLE,
    DERIVABLE,
    DEEP_DERIVABLE,
  }
  export class Object {
    constructor(object_type: GType, first_property_name: string, var_args: any)
    constructor(object_type: GType, n_parameters: number, parameters: Parameter[])
    add_toggle_ref(notify: ToggleNotify, data: object):void
    add_weak_pointer(weak_pointer_location: object):void
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags):Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc, transform_from: BindingTransformFunc, user_data: object, notify: GLib.DestroyNotify):Binding
    bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure):Binding
    dup_data(key: string, dup_func: GLib.DuplicateFunc, user_data: object):object
    dup_qdata(quark: GLib.Quark, dup_func: GLib.DuplicateFunc, user_data: object):object
    force_floating():void
    freeze_notify():void
    get_data(key: string):object
    get_property(property_name: string, value: Value):void
    get_qdata(quark: GLib.Quark):object
    get_valist(first_property_name: string, var_args: any):void
    is_floating():boolean
    notify(property_name: string):void
    notify_by_pspec(pspec: ParamSpec):void
    ref():Object
    ref_sink():Object
    remove_toggle_ref(notify: ToggleNotify, data: object):void
    remove_weak_pointer(weak_pointer_location: object):void
    replace_data(key: string, oldval: object, newval: object, destroy: GLib.DestroyNotify, old_destroy: GLib.DestroyNotify):boolean
    replace_qdata(quark: GLib.Quark, oldval: object, newval: object, destroy: GLib.DestroyNotify, old_destroy: GLib.DestroyNotify):boolean
    run_dispose():void
    set_data(key: string, data: object):void
    set_data_full(key: string, data: object, destroy: GLib.DestroyNotify):void
    set_property(property_name: string, value: Value):void
    set_qdata(quark: GLib.Quark, data: object):void
    set_qdata_full(quark: GLib.Quark, data: object, destroy: GLib.DestroyNotify):void
    set_valist(first_property_name: string, var_args: any):void
    steal_data(key: string):object
    steal_qdata(quark: GLib.Quark):object
    thaw_notify():void
    unref():void
    watch_closure(closure: Closure):void
    weak_ref(notify: WeakNotify, data: object):void
    weak_unref(notify: WeakNotify, data: object):void
  }
}
/**
 * Gtk.d.ts
 *
 */
declare module 'Gtk' {
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
/**
 * Gdk.d.ts
 *
 */
declare module 'Gdk' {
  export function add_option_entries_libgtk_only(group: GLib.OptionGroup):void
  export function atom_intern(atom_name: string, only_if_exists: boolean):Atom
  export function atom_intern_static_string(atom_name: string):Atom
  export function beep():void
  export function cairo_create(window: Window):cairo.Context
  export function cairo_draw_from_gl(cr: cairo.Context, window: Window, source: number, source_type: number, buffer_scale: number, x: number, y: number, width: number, height: number):void
  export function cairo_get_clip_rectangle(cr: cairo.Context, rect: Rectangle):boolean
  export function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle):void
  export function cairo_region(cr: cairo.Context, region: cairo.Region):void
  export function cairo_region_create_from_surface(surface: cairo.Surface):cairo.Region
  export function cairo_set_source_color(cr: cairo.Context, color: Color):void
  export function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number):void
  export function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA):void
  export function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number):void
  export function cairo_surface_create_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf, scale: number, for_window: Window):cairo.Surface
  export function color_parse(spec: string, color: Color):boolean
  export function disable_multidevice():void
  export function drag_abort(context: DragContext, time_: guint32):void
  export function drag_begin(window: Window, targets: GLib.List):DragContext
  export function drag_begin_for_device(window: Window, device: Device, targets: GLib.List):DragContext
  export function drag_drop(context: DragContext, time_: guint32):void
  export function drag_drop_succeeded(context: DragContext):boolean
  export function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number, dest_window: Window, protocol: DragProtocol):void
  export function drag_get_selection(context: DragContext):Atom
  export function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: guint32):boolean
  export function drag_status(context: DragContext, action: DragAction, time_: guint32):void
  export function drop_finish(context: DragContext, success: boolean, time_: guint32):void
  export function drop_reply(context: DragContext, accepted: boolean, time_: guint32):void
  export function error_trap_pop():number
  export function error_trap_pop_ignored():void
  export function error_trap_push():void
  export function event_get():Event
  export function event_handler_set(func: EventFunc, data: object, notify: GLib.DestroyNotify):void
  export function event_peek():Event
  export function event_request_motions(event: EventMotion):void
  export function events_get_angle(event1: Event, event2: Event, angle: number):boolean
  export function events_get_center(event1: Event, event2: Event, x: number, y: number):boolean
  export function events_get_distance(event1: Event, event2: Event, distance: number):boolean
  export function events_pending():boolean
  export function flush():void
  export function get_default_root_window():Window
  export function get_display():string
  export function get_display_arg_name():string
  export function get_program_class():string
  export function get_show_events():boolean
  export function gl_error_quark():GLib.Quark
  export function init(argc: number, argv: string[]):void
  export function init_check(argc: number, argv: string[]):boolean
  export function keyboard_grab(window: Window, owner_events: boolean, time_: guint32):GrabStatus
  export function keyboard_ungrab(time_: guint32):void
  export function keyval_convert_case(symbol: number, lower: number, upper: number):void
  export function keyval_from_name(keyval_name: string):number
  export function keyval_is_lower(keyval: number):boolean
  export function keyval_is_upper(keyval: number):boolean
  export function keyval_name(keyval: number):string
  export function keyval_to_lower(keyval: number):number
  export function keyval_to_unicode(keyval: number):guint32
  export function keyval_to_upper(keyval: number):number
  export function list_visuals():GLib.List
  export function notify_startup_complete():void
  export function notify_startup_complete_with_id(startup_id: string):void
  export function offscreen_window_get_embedder(window: Window):Window
  export function offscreen_window_get_surface(window: Window):cairo.Surface
  export function offscreen_window_set_embedder(window: Window, embedder: Window):void
  export function pango_context_get():Pango.Context
  export function pango_context_get_for_screen(screen: Screen):Pango.Context
  export function pango_layout_get_clip_region(layout: Pango.Layout, x_origin: number, y_origin: number, index_ranges: number, n_ranges: number):cairo.Region
  export function pango_layout_line_get_clip_region(line: Pango.LayoutLine, x_origin: number, y_origin: number, index_ranges: number[], n_ranges: number):cairo.Region
  export function parse_args(argc: number, argv: string[]):void
  export function pixbuf_get_from_surface(surface: cairo.Surface, src_x: number, src_y: number, width: number, height: number):GdkPixbuf.Pixbuf
  export function pixbuf_get_from_window(window: Window, src_x: number, src_y: number, width: number, height: number):GdkPixbuf.Pixbuf
  export function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window, cursor: Cursor, time_: guint32):GrabStatus
  export function pointer_is_grabbed():boolean
  export function pointer_ungrab(time_: guint32):void
  export function pre_parse_libgtk_only():void
  export function property_change(window: Window, property: Atom, type: Atom, format: number, mode: PropMode, data: number, nelements: number):void
  export function property_delete(window: Window, property: Atom):void
  export function property_get(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number, actual_property_type: Atom, actual_format: number, actual_length: number, data: number[]):boolean
  export function query_depths(depths: number[], count: number):void
  export function query_visual_types(visual_types: VisualType[], count: number):void
  export function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: guint32):void
  export function selection_owner_get(selection: Atom):Window
  export function selection_owner_get_for_display(display: Display, selection: Atom):Window
  export function selection_owner_set(owner: Window, selection: Atom, time_: guint32, send_event: boolean):boolean
  export function selection_owner_set_for_display(display: Display, owner: Window, selection: Atom, time_: guint32, send_event: boolean):boolean
  export function selection_property_get(requestor: Window, data: number, prop_type: Atom, prop_format: number):number
  export function selection_send_notify(requestor: Window, selection: Atom, target: Atom, property: Atom, time_: guint32):void
  export function selection_send_notify_for_display(display: Display, requestor: Window, selection: Atom, target: Atom, property: Atom, time_: guint32):void
  export function set_allowed_backends(backends: string):void
  export function set_double_click_time(msec: number):void
  export function set_program_class(program_class: string):void
  export function set_show_events(show_events: boolean):void
  export function setting_get(name: string, value: GObject.Value):boolean
  export function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState):void
  export function test_render_sync(window: Window):void
  export function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType):boolean
  export function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType):boolean
  export function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: number[], length: number, list: string[]):number
  export function threads_add_idle(function_: GLib.SourceFunc, data: object):number
  export function threads_add_idle_full(priority: number, function_: GLib.SourceFunc, data: object, notify: GLib.DestroyNotify):number
  export function threads_add_timeout(interval: number, function_: GLib.SourceFunc, data: object):number
  export function threads_add_timeout_full(priority: number, interval: number, function_: GLib.SourceFunc, data: object, notify: GLib.DestroyNotify):number
  export function threads_add_timeout_seconds(interval: number, function_: GLib.SourceFunc, data: object):number
  export function threads_add_timeout_seconds_full(priority: number, interval: number, function_: GLib.SourceFunc, data: object, notify: GLib.DestroyNotify):number
  export function threads_enter():void
  export function threads_init():void
  export function threads_leave():void
  export function threads_set_lock_functions(enter_fn: GObject.Callback, leave_fn: GObject.Callback):void
  export function unicode_to_keyval(wc: guint32):number
  export function utf8_to_string_target(str: string):string

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
  export class AppLaunchContext extends Gio.AppLaunchContext {
    set_desktop(desktop: number):void
    set_display(display: Display):void
    set_icon(icon: Gio.Icon):void
    set_icon_name(icon_name: string):void
    set_screen(screen: Screen):void
    set_timestamp(timestamp: guint32):void
  }
  export class Cursor extends GObject.Object {
    constructor(cursor_type: CursorType)
    constructor(display: Display, cursor_type: CursorType)
    constructor(display: Display, name: string)
    constructor(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number)
    constructor(display: Display, surface: cairo.Surface, x: number, y: number)
    get_cursor_type():CursorType
    get_display():Display
    get_image():GdkPixbuf.Pixbuf
    get_surface(x_hot: number, y_hot: number):cairo.Surface
    ref():Cursor
    unref():void
  }
  export class Device extends GObject.Object {
    get_associated_device():Device
    get_axis(axes: number[], use: AxisUse, value: number):boolean
    get_axis_use(index_: number):AxisUse
    get_axis_value(axes: number[], axis_label: Atom, value: number):boolean
    get_device_type():DeviceType
    get_display():Display
    get_has_cursor():boolean
    get_history(window: Window, start: guint32, stop: guint32, events: TimeCoord[], n_events: number):boolean
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
    grab(window: Window, grab_ownership: GrabOwnership, owner_events: boolean, event_mask: EventMask, cursor: Cursor, time_: guint32):GrabStatus
    list_axes():GLib.List
    list_slave_devices():GLib.List
    set_axis_use(index_: number, use: AxisUse):void
    set_key(index_: number, keyval: number, modifiers: ModifierType):void
    set_mode(mode: InputMode):boolean
    ungrab(time_: guint32):void
    warp(screen: Screen, x: number, y: number):void
  }
  export class DeviceManager extends GObject.Object {
    get_client_pointer():Device
    get_display():Display
    list_devices(type: DeviceType):GLib.List
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
    get_event():Event
    get_maximal_cursor_size(width: number, height: number):void
    get_n_screens():number
    get_name():string
    get_pointer(screen: Screen, x: number, y: number, mask: ModifierType):void
    get_screen(screen_num: number):Screen
    get_window_at_pointer(win_x: number, win_y: number):Window
    has_pending():boolean
    is_closed():boolean
    keyboard_ungrab(time_: guint32):void
    list_devices():GLib.List
    notify_startup_complete(startup_id: string):void
    peek_event():Event
    pointer_is_grabbed():boolean
    pointer_ungrab(time_: guint32):void
    put_event(event: Event):void
    request_selection_notification(selection: Atom):boolean
    set_double_click_distance(distance: number):void
    set_double_click_time(msec: number):void
    store_clipboard(clipboard_window: Window, time_: guint32, targets: Atom[], n_targets: number):void
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
    list_displays():GLib.SList
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
    list_targets():GLib.List
    set_device(device: Device):void
  }
  export class FrameClock extends GObject.Object {
    begin_updating():void
    end_updating():void
    get_current_timings():FrameTimings
    get_frame_counter():number
    get_frame_time():number
    get_history_start():number
    get_refresh_info(base_time: number, refresh_interval_return: number, presentation_time_return: number):void
    get_timings(frame_counter: number):FrameTimings
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
    get_direction():Pango.Direction
    get_entries_for_keycode(hardware_keycode: number, keys: KeymapKey[], keyvals: number[], n_entries: number):boolean
    get_entries_for_keyval(keyval: number, keys: KeymapKey[], n_keys: number):boolean
    get_modifier_mask(intent: ModifierIntent):ModifierType
    get_modifier_state():number
    get_num_lock_state():boolean
    get_scroll_lock_state():boolean
    have_bidi_layouts():boolean
    lookup_key(key: KeymapKey):number
    map_virtual_modifiers(state: ModifierType):boolean
    translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number, keyval: number, effective_group: number, level: number, consumed_modifiers: ModifierType):boolean
  }
  export class Screen extends GObject.Object {
    get_active_window():Window
    get_display():Display
    get_font_options():cairo.FontOptions
    get_height():number
    get_height_mm():number
    get_monitor_at_point(x: number, y: number):number
    get_monitor_at_window(window: Window):number
    get_monitor_geometry(monitor_num: number, dest: Rectangle):void
    get_monitor_height_mm(monitor_num: number):number
    get_monitor_plug_name(monitor_num: number):string
    get_monitor_scale_factor(monitor_num: number):number
    get_monitor_width_mm(monitor_num: number):number
    get_monitor_workarea(monitor_num: number, dest: Rectangle):void
    get_n_monitors():number
    get_number():number
    get_primary_monitor():number
    get_resolution():number
    get_rgba_visual():Visual
    get_root_window():Window
    get_setting(name: string, value: GObject.Value):boolean
    get_system_visual():Visual
    get_toplevel_windows():GLib.List
    get_width():number
    get_width_mm():number
    get_window_stack():GLib.List
    is_composited():boolean
    list_visuals():GLib.List
    make_display_name():string
    set_font_options(options: cairo.FontOptions):void
    set_resolution(dpi: number):void
  }
  export class Visual extends GObject.Object {
    get_bits_per_rgb():number
    get_blue_pixel_details(mask: guint32, shift: number, precision: number):void
    get_byte_order():ByteOrder
    get_colormap_size():number
    get_depth():number
    get_green_pixel_details(mask: guint32, shift: number, precision: number):void
    get_red_pixel_details(mask: guint32, shift: number, precision: number):void
    get_screen():Screen
    get_visual_type():VisualType
  }
  export class Window extends GObject.Object {
    constructor(parent: Window, attributes: WindowAttr, attributes_mask: WindowAttributesType)
    add_filter(function_: FilterFunc, data: object):void
    beep():void
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: guint32):void
    begin_move_drag_for_device(device: Device, button: number, root_x: number, root_y: number, timestamp: guint32):void
    begin_paint_rect(rectangle: Rectangle):void
    begin_paint_region(region: cairo.Region):void
    begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: guint32):void
    begin_resize_drag_for_device(edge: WindowEdge, device: Device, button: number, root_x: number, root_y: number, timestamp: guint32):void
    configure_finished():void
    coords_from_parent(parent_x: number, parent_y: number, x: number, y: number):void
    coords_to_parent(x: number, y: number, parent_x: number, parent_y: number):void
    create_gl_context():GLContext
    create_similar_image_surface(format: number, width: number, height: number, scale: number):cairo.Surface
    create_similar_surface(content: cairo.Content, width: number, height: number):cairo.Surface
    deiconify():void
    destroy():void
    destroy_notify():void
    enable_synchronized_configure():void
    end_paint():void
    ensure_native():boolean
    flush():void
    focus(timestamp: guint32):void
    freeze_toplevel_updates_libgtk_only():void
    freeze_updates():void
    fullscreen():void
    fullscreen_on_monitor(monitor: number):void
    geometry_changed():void
    get_accept_focus():boolean
    get_background_pattern():cairo.Pattern
    get_children():GLib.List
    get_children_with_user_data(user_data: object):GLib.List
    get_clip_region():cairo.Region
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
    get_frame_extents(rect: Rectangle):void
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
    get_update_area():cairo.Region
    get_user_data(data: object):void
    get_visible_region():cairo.Region
    get_visual():Visual
    get_width():number
    get_window_type():WindowType
    has_native():boolean
    hide():void
    iconify():void
    input_shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number):void
    invalidate_maybe_recurse(region: cairo.Region, child_func: WindowChildFunc, user_data: object):void
    invalidate_rect(rect: Rectangle, invalidate_children: boolean):void
    invalidate_region(region: cairo.Region, invalidate_children: boolean):void
    is_destroyed():boolean
    is_input_only():boolean
    is_shaped():boolean
    is_viewable():boolean
    is_visible():boolean
    lower():void
    mark_paint_from_clip(cr: cairo.Context):void
    maximize():void
    merge_child_input_shapes():void
    merge_child_shapes():void
    move(x: number, y: number):void
    move_region(region: cairo.Region, dx: number, dy: number):void
    move_resize(x: number, y: number, width: number, height: number):void
    peek_children():GLib.List
    process_updates(update_children: boolean):void
    raise():void
    register_dnd():void
    remove_filter(function_: FilterFunc, data: object):void
    reparent(new_parent: Window, x: number, y: number):void
    resize(width: number, height: number):void
    restack(sibling: Window, above: boolean):void
    scroll(dx: number, dy: number):void
    set_accept_focus(accept_focus: boolean):void
    set_background(color: Color):void
    set_background_pattern(pattern: cairo.Pattern):void
    set_background_rgba(rgba: RGBA):void
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
    set_geometry_hints(geometry: Geometry, geom_mask: WindowHints):void
    set_group(leader: Window):void
    set_icon_list(pixbufs: GLib.List):void
    set_icon_name(name: string):void
    set_invalidate_handler(handler: WindowInvalidateHandlerFunc):void
    set_keep_above(setting: boolean):void
    set_keep_below(setting: boolean):void
    set_modal_hint(modal: boolean):void
    set_opacity(opacity: number):void
    set_opaque_region(region: cairo.Region):void
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
    shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number):void
    show():void
    show_unraised():void
    show_window_menu(event: Event):boolean
    stick():void
    thaw_toplevel_updates_libgtk_only():void
    thaw_updates():void
    unfullscreen():void
    unmaximize():void
    unstick():void
    withdraw():void
  }
}
/**
 * Pango.d.ts
 *
 */
declare module 'Pango' {
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
/**
 * xLib.d.ts
 *
 */
declare module 'xLib' {
}