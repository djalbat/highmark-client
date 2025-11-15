"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get elementFromDOMElement () {
        return elementFromDOMElement;
    },
    get elementsFromDOMElements () {
        return elementsFromDOMElements;
    },
    get removeDOMElements () {
        return removeDOMElements;
    }
});
var _constants = require("../constants");
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
function removeDOMElements(selector) {
    var domElements = _to_consumable_array(document.querySelectorAll(selector)); ///
    domElements.forEach(function(domElements) {
        domElements.remove();
    });
    return domElements;
}
function elementFromDOMElement(domElement, Element) {
    var element = /*#__PURE__*/ React.createElement(Element, null), className = classNameFromElement(element);
    addClassNameToDOMElement(domElement, className);
    element.domElement = domElement; ///
    domElement.__element__ = element; ///
    return element;
}
function elementsFromDOMElements(domElements, Element) {
    var elements = domElements.map(function(domElement) {
        var element = elementFromDOMElement(domElement, Element);
        return element;
    });
    return elements;
}
function addClassNameToDOMElement(domElement, className) {
    if (className === _constants.EMPTY_STRING) {
        return;
    }
    var classList = domElement.classList;
    classList.add(className);
}
function classNameFromElement(element) {
    var domElement = element.getDOMElement(), className = domElement.className;
    return className;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRE9NRWxlbWVudHMoc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tRWxlbWVudHMgPSBbIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIF07IC8vL1xuXG4gIGRvbUVsZW1lbnRzLmZvckVhY2goKGRvbUVsZW1lbnRzKSA9PiB7XG4gICAgZG9tRWxlbWVudHMucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBkb21FbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBFbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPVxuXG4gICAgICAgICAgPEVsZW1lbnQvPlxuXG4gICAgICAgICxcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgYWRkQ2xhc3NOYW1lVG9ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsYXNzTmFtZSlcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IGVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMsIEVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb21FbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3NOYW1lVG9ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoY2xhc3NOYW1lID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gZG9tRWxlbWVudDtcblxuICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZUZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICB7IGNsYXNzTmFtZSB9ID0gZG9tRWxlbWVudDtcblxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuIl0sIm5hbWVzIjpbImVsZW1lbnRGcm9tRE9NRWxlbWVudCIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwicmVtb3ZlRE9NRWxlbWVudHMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImRvbUVsZW1lbnQiLCJFbGVtZW50IiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTmFtZUZyb21FbGVtZW50IiwiYWRkQ2xhc3NOYW1lVG9ET01FbGVtZW50IiwiX19lbGVtZW50X18iLCJlbGVtZW50cyIsIm1hcCIsIkVNUFRZX1NUUklORyIsImNsYXNzTGlzdCIsImFkZCIsImdldERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWNnQkE7ZUFBQUE7O1FBaUJBQztlQUFBQTs7UUEzQkFDO2VBQUFBOzs7eUJBRmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLFNBQVNBLGtCQUFrQkMsUUFBUTtJQUN4QyxJQUFNQyxjQUFnQixxQkFBR0MsU0FBU0MsZ0JBQWdCLENBQUNILFlBQWEsR0FBRztJQUVuRUMsWUFBWUcsT0FBTyxDQUFDLFNBQUNIO1FBQ25CQSxZQUFZSSxNQUFNO0lBQ3BCO0lBRUEsT0FBT0o7QUFDVDtBQUVPLFNBQVNKLHNCQUFzQlMsVUFBVSxFQUFFQyxPQUFPO0lBQ3ZELElBQU1DLHdCQUVFLG9CQUFDRCxnQkFHSEUsWUFBWUMscUJBQXFCRjtJQUV2Q0cseUJBQXlCTCxZQUFZRztJQUVyQ0QsUUFBUUYsVUFBVSxHQUFHQSxZQUFhLEdBQUc7SUFFckNBLFdBQVdNLFdBQVcsR0FBR0osU0FBUyxHQUFHO0lBRXJDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTVix3QkFBd0JHLFdBQVcsRUFBRU0sT0FBTztJQUMxRCxJQUFNTSxXQUFXWixZQUFZYSxHQUFHLENBQUMsU0FBQ1I7UUFDaEMsSUFBTUUsVUFBVVgsc0JBQXNCUyxZQUFZQztRQUVsRCxPQUFPQztJQUNUO0lBRUEsT0FBT0s7QUFDVDtBQUVBLFNBQVNGLHlCQUF5QkwsVUFBVSxFQUFFRyxTQUFTO0lBQ3JELElBQUlBLGNBQWNNLHVCQUFZLEVBQUU7UUFDOUI7SUFDRjtJQUVBLElBQU0sQUFBRUMsWUFBY1YsV0FBZFU7SUFFUkEsVUFBVUMsR0FBRyxDQUFDUjtBQUNoQjtBQUVBLFNBQVNDLHFCQUFxQkYsT0FBTztJQUNuQyxJQUFNRixhQUFhRSxRQUFRVSxhQUFhLElBQ2xDLEFBQUVULFlBQWNILFdBQWRHO0lBRVIsT0FBT0E7QUFDVCJ9