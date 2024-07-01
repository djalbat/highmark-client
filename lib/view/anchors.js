"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _selectors = require("../selectors");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var anchorDOMElements = _to_consumable_array(document.querySelectorAll(_selectors.ANCHORS_SELECTOR)); ///
anchorDOMElements.forEach(function(anchorDOMElement) {
    anchorDOMElement.remove();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2FuY2hvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFOQ0hPUlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vc2VsZWN0b3JzXCI7XG5cbmNvbnN0IGFuY2hvckRPTUVsZW1lbnRzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEFOQ0hPUlNfU0VMRUNUT1IpIF07IC8vL1xuXG5hbmNob3JET01FbGVtZW50cy5mb3JFYWNoKChhbmNob3JET01FbGVtZW50KSA9PiB7XG4gIGFuY2hvckRPTUVsZW1lbnQucmVtb3ZlKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJhbmNob3JET01FbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFOQ0hPUlNfU0VMRUNUT1IiLCJmb3JFYWNoIiwiYW5jaG9yRE9NRWxlbWVudCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7eUJBRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFNQSxvQkFBc0IscUJBQUdDLFNBQVNDLGdCQUFnQixDQUFDQywyQkFBZ0IsSUFBSyxHQUFHO0FBRWpGSCxrQkFBa0JJLE9BQU8sQ0FBQyxTQUFDQztJQUN6QkEsaUJBQWlCQyxNQUFNO0FBQ3pCIn0=