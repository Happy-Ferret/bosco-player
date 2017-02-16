GLib = imports.gi.GLib
Gio = imports.gi.Gio
Gdk = imports.gi.Gdk
Gtk = imports.gi.Gtk
Notify = imports.gi.Notify


export default class GResource
    _name: res_name
    _prefix: res_prefix


    constructor: () ->
        @_files = []

    set_name: (name) ->
        @_name = name

    set_prefix: (prefix) ->
        @_prefix = prefix

    add: (dir) ->
        @_base = @_base || dir.get_parent()

        if dir.query_info("standard::*",
                            Gio.FileQueryInfoFlags.NONE,
                            null).get_file_type() != Gio.FileType.DIRECTORY

            @_files.push(dir)

            return
        

        fileEnum = null

        try 
            fileEnum = dir.enumerate_children("standard::name,standard::type",
                                            Gio.FileQueryInfoFlags.NONE, null)
        catch e
            fileEnum = null
        

        if fileEnum != null
            info = null

            while info = fileEnum.next_file(null) != null
                file = dir.resolve_relative_path(info.get_name())

                if info.get_file_type() == Gio.FileType.DIRECTORY
                    @add(file)
                else 
                    @_files.push(file)

    build: () ->
        xml = "<?xml version='1.0' encoding='UTF-8'?>\n"

        xml += "<gresources>\n\t<gresource prefix='" + @_prefix + "'>\n"

        for file in @_files
            info = file.query_info("standard::*", Gio.FileQueryInfoFlags.NONE, null)

            xml += "\t\t"

            path = @_base.get_relative_path(file)
                            .replace(/&/g, "&amp")
                            .replace(/</g, "&lt")
                            .replace(/>/g, "&gt")
                            .replace(/"/g, "&quot")
                            .replace(/'/g, "&apos")

            if /image\//.test(info.get_content_type())
                xml += "<file preprocess='to-pixdata'>" + path + "</file>\n"
            else
                xml += "<file>" + path + "</file>\n"


        xml += "\t</gresource>\n</gresources>\n"

        xmlfile = @_base.resolve_relative_path(@_name + ".xml")

        if xmlfile.query_exists(null)
            xmlfile.delete(null)

        outputstream = xmlfile.create(Gio.FileCreateFlags.REPLACE_DESTINATION, null)

        outputstream.write_all(xml, null)

        outputstream.close(null)

    compile: (cb = () => {}) ->
        # ok = false 
        # pid = 0

        try 
            [ ok, pid ] = GLib.spawn_async(@_base.get_path(),
                                            [ "glib-compile-resources", @_name + ".xml" ],
                                            GLib.get_environ(),
                                            GLib.SpawnFlags.SEARCH_PATH_FROM_ENVP | GLib.SpawnFlags.DO_NOT_REAP_CHILD,
                                            null)
        catch e
            printerr(e)
        

        if ok == false
            return
        

        if typeof pid == "number"
            GLib.child_watch_add GLib.PRIORITY_DEFAULT, pid, () => 
                GLib.spawn_close_pid(pid)

                try 
                    notification = new Notify.Notification
                        summary: "Gresource file generated!"
                        body: @_name + " generated at " + @_base.get_path()
                        icon_name: "dialog-information"
            

                    notification.set_timeout(1000)

                    notification.show()
                catch e 
                    printerr(e)
                

                cb()
            


