/**
 *  Copyright 2017 darkoverlordofdata 
 * 
 * UMD loader for gjs 
 * allows mixture of amd & commonjs modules
 * 
 * ties together:
 * * builtin gir modules
 * * node modules (via browserify)
 * * local project modules
 * 
 */
const define = (function (modules) {
    return (name, deps, callback) => {
        if (typeof name !== 'string') { /* then it's a browserify bundle */
            const bundle = deps()
            for (name in bundle) 
                modules[name] = { id: name, exports: bundle[name] }

        } else { /* it's a local amd module */
            modules[name] = { id: name, exports: {} }
            let args = [(name) => modules[name].exports, modules[name].exports]
            for (let i = 2; i < deps.length; i++)
                args.push(modules[deps[i]].exports)
            callback.apply(modules[name].exports, args)
        }
    }
}({          /* builtin modules */
    Gio:     { id: 'Gio',     exports: imports.gi.Gio },
    Atk:     { id: 'Atk',     exports: imports.gi.Atk },
    Gdk:     { id: 'Gdk',     exports: imports.gi.Gdk },
    Gtk:     { id: 'Gtk',     exports: imports.gi.Gtk },
    GLib:    { id: 'GLib',    exports: imports.gi.GLib },
    Lang:    { id: 'Lang',    exports: imports.lang },
    Pango:   { id: 'Pango',   exports: imports.gi.Pango },
    GObject: { id: 'GObject', exports: imports.gi.GObject }
}))
define.amd = true
define.version = '0.0.1'
Object.freeze(define)

