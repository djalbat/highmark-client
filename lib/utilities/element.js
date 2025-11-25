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
    get removeDOMElement () {
        return removeDOMElement;
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
function removeDOMElement(selector) {
    var domElement = document.querySelector(selector);
    domElement.remove();
    return domElement;
}
function removeDOMElements(selector) {
    var domElements = _to_consumable_array(document.querySelectorAll(selector)); ///
    domElements.forEach(function(domElement) {
        domElement.remove();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRE9NRWxlbWVudChzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgZG9tRWxlbWVudC5yZW1vdmUoKTtcblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURPTUVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSBdOyAvLy9cblxuICBkb21FbGVtZW50cy5mb3JFYWNoKChkb21FbGVtZW50KSA9PiB7XG4gICAgZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIEVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9XG5cbiAgICAgICAgICA8RWxlbWVudC8+XG5cbiAgICAgICAgLFxuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVGcm9tRWxlbWVudChlbGVtZW50KTtcblxuICBhZGRDbGFzc05hbWVUb0RPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xhc3NOYW1lKVxuXG4gIGVsZW1lbnQuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICBkb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cywgRWxlbWVudCkge1xuICBjb25zdCBlbGVtZW50cyA9IGRvbUVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzc05hbWVUb0RPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChjbGFzc05hbWUgPT09IEVNUFRZX1NUUklORykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBkb21FbGVtZW50O1xuXG4gIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NOYW1lRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHsgY2xhc3NOYW1lIH0gPSBkb21FbGVtZW50O1xuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudEZyb21ET01FbGVtZW50IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJyZW1vdmVET01FbGVtZW50IiwicmVtb3ZlRE9NRWxlbWVudHMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJkb21FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiRWxlbWVudCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVGcm9tRWxlbWVudCIsImFkZENsYXNzTmFtZVRvRE9NRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiZWxlbWVudHMiLCJtYXAiLCJFTVBUWV9TVFJJTkciLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRET01FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFzQmdCQTtlQUFBQTs7UUFpQkFDO2VBQUFBOztRQW5DQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOzs7eUJBVmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLFNBQVNELGlCQUFpQkUsUUFBUTtJQUN2QyxJQUFNQyxhQUFhQyxTQUFTQyxhQUFhLENBQUNIO0lBRTFDQyxXQUFXRyxNQUFNO0lBRWpCLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTRixrQkFBa0JDLFFBQVE7SUFDeEMsSUFBTUssY0FBZ0IscUJBQUdILFNBQVNJLGdCQUFnQixDQUFDTixZQUFhLEdBQUc7SUFFbkVLLFlBQVlFLE9BQU8sQ0FBQyxTQUFDTjtRQUNuQkEsV0FBV0csTUFBTTtJQUNuQjtJQUVBLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTVCxzQkFBc0JLLFVBQVUsRUFBRU8sT0FBTztJQUN2RCxJQUFNQyx3QkFFRSxvQkFBQ0QsZ0JBR0hFLFlBQVlDLHFCQUFxQkY7SUFFdkNHLHlCQUF5QlgsWUFBWVM7SUFFckNELFFBQVFSLFVBQVUsR0FBR0EsWUFBYSxHQUFHO0lBRXJDQSxXQUFXWSxXQUFXLEdBQUdKLFNBQVMsR0FBRztJQUVyQyxPQUFPQTtBQUNUO0FBRU8sU0FBU1osd0JBQXdCUSxXQUFXLEVBQUVHLE9BQU87SUFDMUQsSUFBTU0sV0FBV1QsWUFBWVUsR0FBRyxDQUFDLFNBQUNkO1FBQ2hDLElBQU1RLFVBQVViLHNCQUFzQkssWUFBWU87UUFFbEQsT0FBT0M7SUFDVDtJQUVBLE9BQU9LO0FBQ1Q7QUFFQSxTQUFTRix5QkFBeUJYLFVBQVUsRUFBRVMsU0FBUztJQUNyRCxJQUFJQSxjQUFjTSx1QkFBWSxFQUFFO1FBQzlCO0lBQ0Y7SUFFQSxJQUFNLEFBQUVDLFlBQWNoQixXQUFkZ0I7SUFFUkEsVUFBVUMsR0FBRyxDQUFDUjtBQUNoQjtBQUVBLFNBQVNDLHFCQUFxQkYsT0FBTztJQUNuQyxJQUFNUixhQUFhUSxRQUFRVSxhQUFhLElBQ2xDLEFBQUVULFlBQWNULFdBQWRTO0lBRVIsT0FBT0E7QUFDVCJ9