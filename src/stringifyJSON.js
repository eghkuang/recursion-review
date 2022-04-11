// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];

  // handles number, boolean, null
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj ;
  }

  // handles string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // handles arrays
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      obj.forEach(function(element) {
        // console.log(result + (stringifyJSON(element)))
        result.push(stringifyJSON(element));
      })
    }
    return "[" + result + "]";
  }

  // handles objects
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    for (key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return "{" + result.join(',') + "}";
  }
};