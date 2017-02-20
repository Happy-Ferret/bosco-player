# GLib = imports.gi.GLib
# Gio = imports.gi.Gio
# Gdk = imports.gi.Gdk
# Gtk = imports.gi.Gtk
# Notify = imports.gi.Notify

###
 *
 * Project class - 
 *
 *
###
export default class Project

    constructor: (data) ->
        @data = {}
        lines = data.split('\n')

        for line in lines
            if line is "" then continue
            if line[0] is "#" then continue

            [key, value] = line.split(/\s*\:\s*/)
            if key[0] is '*'
                [readonly, key] = [true, key.substring(1)]
            else
                [readonly, key] = [false, key]

            if @data[key]? 
                if not Array.isArray(@data[key])
                    @data[key] = [@data[key]]
                @data[key].push { value: value, readonly: readonly }
            else
                @data[key] = { value: value, readonly: readonly }


    isArray: (key) ->
        Array.isArray(@data[key])

    count: (key) ->
        @data[key].length

    get: (key, i=-1) ->
        if i is -1
            @data[key].value
        else
            @data[key][i].value

    readonly: (key, i=-1) ->
        if i is -1
            @data[key].readonly
        else
            @data[key][i].readonly

