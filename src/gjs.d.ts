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
    add_toggle_ref(notify: ToggleNotify, data: any):void
    add_weak_pointer(weak_pointer_location: any):void
    bind_property(source_property: string, target: any, target_property: string, flags: BindingFlags):Binding
    bind_property_full(source_property: string, target: any, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc, transform_from: BindingTransformFunc, user_data: any, notify: GLib.DestroyNotify):Binding
    bind_property_with_closures(source_property: string, target: any, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure):Binding
    dup_data(key: string, dup_func: GLib.DuplicateFunc, user_data: any):object
    dup_qdata(quark: GLib.Quark, dup_func: GLib.DuplicateFunc, user_data: any):object
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
    remove_toggle_ref(notify: ToggleNotify, data: any):void
    remove_weak_pointer(weak_pointer_location: any):void
    replace_data(key: string, oldval: any, newval: any, destroy: GLib.DestroyNotify, old_destroy: GLib.DestroyNotify):boolean
    replace_qdata(quark: GLib.Quark, oldval: any, newval: any, destroy: GLib.DestroyNotify, old_destroy: GLib.DestroyNotify):boolean
    run_dispose():void
    set_data(key: string, data: any):void
    set_data_full(key: string, data: any, destroy: GLib.DestroyNotify):void
    set_property(property_name: string, value: Value):void
    set_qdata(quark: GLib.Quark, data: any):void
    set_qdata_full(quark: GLib.Quark, data: any, destroy: GLib.DestroyNotify):void
    set_valist(first_property_name: string, var_args: any):void
    steal_data(key: string):object
    steal_qdata(quark: GLib.Quark):object
    thaw_notify():void
    unref():void
    watch_closure(closure: Closure):void
    weak_ref(notify: WeakNotify, data: any):void
    weak_unref(notify: WeakNotify, data: any):void
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