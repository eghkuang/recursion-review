// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodes = [];
  var firstChildren = document.body;

  var searchForClass = function(firstChildren) {
    if (firstChildren.classList && firstChildren.classList.contains(className)) {
      nodes.push(firstChildren);
    }

    if (firstChildren.childNodes) {
      firstChildren.childNodes.forEach(function(node) {
        searchForClass(node);
      });

    }
  };
  searchForClass(firstChildren);
  return nodes;
};
