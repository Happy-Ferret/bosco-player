    export class File extends GObject {
        query_exists(obj:any): boolean
        load_contents(obj:any): any
        static new_for_path(path: string): File
    }
