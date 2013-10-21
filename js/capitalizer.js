function Capitalizer(type, options) {
  this.type = type;
  var defaults = {}
  this.options = options || defaults;
  this.capitalizations = {
    words: function(input) {
      return input.toLowerCase().replace(/(^|[ .;])(\w)/g, function(l) { return l.toUpperCase(); } );
    },
    sentence: function(input) {
      return input.toLowerCase().replace(/(^|[.;] *)(\w)/g, function(l) { return l.toUpperCase(); } );
    },
    all: function(input) {
      return input.toUpperCase();
    },
    none: function(input) {
      return input.toLowerCase();
    },
    title: function(input) {
      var output = input.toLowerCase().replace(/(^|[ .;])(\w)/g, function(l) { return l.toUpperCase(); } );
      output = output[0] + output.substr(1).replace(/\b(of|the|at|in|a|to|for)\b/gi, function(w) { return w.toLowerCase(); });
      return output;
    },
    random: function(input) {
      output_array = [];
      for (var i = 0; i < input.length; i++) {
        var yes = Math.random() * 10 > 5;
        if (yes) {
          output_array.push(input[i].toUpperCase());
        } else {
          output_array.push(input[i].toLowerCase());
        }
      }
      return output_array.join('');
    }
  }
}

Capitalizer.prototype.capitalize = function(input) {
  if (input.replace(/^\s+|\s+$/g, '').length) {
    if (this.capitalizations.hasOwnProperty(this.type)) {
      return this.capitalizations[this.type](input);
    } else {
      if (this.type === '') {
        alert('Please pick a capitalization type');
      } else {
        alert("Can't capitalize that type!");
      }
    }
  } else {
    alert("Please enter a value!");
  }
}

