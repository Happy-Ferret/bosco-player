# GLib = imports.gi.GLib
# Gio = imports.gi.Gio
# Gdk = imports.gi.Gdk
# Gtk = imports.gi.Gtk
# Notify = imports.gi.Notify

###
 *
 * Project class - 
 *
 * parses autovala data
 *
 *
 * autovala_version (24)
 * project_name
 * vala_version
 * custom
 * vapidir
 * vala_binary 
 * compile_options
 * compile_c_options
 * c_library
 * po
 * data
 * doc
 * desktop
 * full_icon
 * gresource #
 * use_gresource #
 * vala_check_package #
 * vala_source #
 * translate #
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

