/**
 *  Copyright 2017 darkoverlordofdata 
 * 
 * AMD loader for gjs
 * 
 * ties together:
 * * builtin gir modules
 * * node modules (via browserify)
 * * local project modules
 * 
 */
const define = (function (modules) {
    return (name, deps, callback) => {
        if (typeof name !== 'string') { // browserify bundle
            const bundle = deps()
            for (name in bundle) 
                modules[name] = { id: name, exports: bundle[name] }
        } else {
            modules[name] = { id: name, exports: {} }
            let args = [(name) => modules[name].exports, modules[name].exports]
            for (let i = 2; i < deps.length; i++)
                args.push(modules[deps[i]].exports)
            callback.apply(modules[name].exports, args)
        }
    }
}({          /* builtin modules */
    Gio:     { id: 'Gio',     exports: imports.gi.Gio },
    Gtk:     { id: 'Gtk',     exports: imports.gi.Gtk },
    GLib:    { id: 'GLib',    exports: imports.gi.GLib },
    Lang:    { id: 'Lang',    exports: imports.lang },
    Pango:   { id: 'Pango',   exports: imports.gi.Pango },
    Notify:  { id: 'Notify',  exports: imports.gi.Notify },
    GObject: { id: 'GObject', exports: imports.gi.GObject }
}))
define.amd = true
define.version = '0.0.1'
Object.freeze(define)

