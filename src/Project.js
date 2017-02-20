/**
 *
 * Project class - 
 *
 *
 */
export default class Project  {
  constructor(data) {
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

  count(key) {
    return this.data[key].length
  }

  get(key, i) {
    if (i == null) {
      return this.data[key].value
    } else {
      return this.data[key][i].value
    }
  }

  readonly(key, i) {
    if (i == null) {
      return this.data[key].readonly
    } else {
      return this.data[key][i].readonly
    }
  }

}
