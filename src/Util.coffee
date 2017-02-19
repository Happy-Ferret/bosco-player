Gio = imports.gi.Gio


export default class Util

    @readFile = (filename) ->
        file = Gio.file_new_for_path(filename)
        if file.query_exists(null)
            [success, data, length] = file.load_contents(null)
            data
        else null

    @toBytes = (str) ->
        buf = new ArrayBuffer(str.length*2) # 2 bytes for each char
        bufView = new Uint16Array(buf)
        for i in [0...strLen=str.length]
            bufView[i] = str.charCodeAt(i)
        
        return buf
