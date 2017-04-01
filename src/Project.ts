/**
 *
 * Project class - 
 *
 *  parse autovala project data
 *
 */
export class Project  {

  data: any
  path: string
  name: string
  
  constructor(path, data) {
    this.name = path.substring(path.lastIndexOf("/")+1)
    this.path = path.substring(0, path.lastIndexOf("/"))
    this.data = {}
    let lines = data.split('\n')
    for (let j = 0, len = lines.length; j < len; j++) {
      let line = lines[j]
      if (line === "") continue
      if (line[0] === "#") continue
      
      let [key0, value] = line.split(/\s*\:\s*/)
      let [readonly, key] = [false, key0]
      if (key[0] === '*') {
        [readonly, key] = [true, key.substring(1)]
      }
      if (this.data[key] != null) {
        if (!Array.isArray(this.data[key])) {
          this.data[key] = [this.data[key]]
        }
        this.data[key].push({
          value: value,
          readonly: readonly
        })
      } else {
        this.data[key] = {
          value: value,
          readonly: readonly
        }
      }
    }
  }

  isArray(key) {
    return Array.isArray(this.data[key])
  }

  isNull(key) {
    return this.data[key] ==  null
  }

  count(key) {
    return this.data[key].length
  }

  get(key: string, i:number=null) {
    if (i == null) {
      return Array.isArray(this.data[key]) ? this.data[key] : this.data[key].value
    } else {
      return this.data[key][i].value
    }
  }

  readonly(key:string, i:number=null) {
    if (i == null) {
      return this.data[key].readonly
    } else {
      return this.data[key][i].readonly
    }
  }

}
