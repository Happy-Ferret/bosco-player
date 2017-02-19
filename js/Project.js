
/*
 *
 * Project class - 
 *
 *
 */
var Project;

export default Project = (function() {
  function Project(data) {
    var j, key, len, line, lines, readonly, ref, ref1, ref2, value;
    this.data = {};
    lines = data.split('\n');
    for (j = 0, len = lines.length; j < len; j++) {
      line = lines[j];
      if (line === "") {
        continue;
      }
      if (line[0] === "#") {
        continue;
      }
      ref = line.split(/\s*\:\s*/), key = ref[0], value = ref[1];
      if (key[0] === '*') {
        ref1 = [true, key.substring(1)], readonly = ref1[0], key = ref1[1];
      } else {
        ref2 = [false, key], readonly = ref2[0], key = ref2[1];
      }
      if (this.data[key] != null) {
        if (!Array.isArray(this.data[key])) {
          this.data[key] = [this.data[key]];
        }
        this.data[key].push({
          value: value,
          readonly: readonly
        });
      } else {
        this.data[key] = {
          value: value,
          readonly: readonly
        };
      }
    }
  }

  Project.prototype.isArray = function(key) {
    return Array.isArray(this.data[key]);
  };

  Project.prototype.count = function(key) {
    return this.data[key].length;
  };

  Project.prototype.get = function(key, i) {
    if (i == null) {
      i = -1;
    }
    if (i === -1) {
      return this.data[key].value;
    } else {
      return this.data[key][i].value;
    }
  };

  Project.prototype.readonly = function(key, i) {
    if (i == null) {
      i = -1;
    }
    if (i === -1) {
      return this.data[key].readonly;
    } else {
      return this.data[key][i].readonly;
    }
  };

  return Project;

})();
