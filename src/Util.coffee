Gio = imports.gi.Gio


export default class Util

    @readFile = (filename) ->
        file = Gio.file_new_for_path(filename)
        [success, data, length] = file.load_contents(null)
        data

