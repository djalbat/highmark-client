"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    elementFromDOMElement: function() {
        return elementFromDOMElement;
    },
    elementsFromDOMElements: function() {
        return elementsFromDOMElements;
    }
});
var _constants = require("../constants");
function elementsFromDOMElements(domElements, Element) {
    var elements = domElements.map(function(domElement) {
        var element = elementFromDOMElement(domElement, Element);
        return element;
    });
    return elements;
}
function elementFromDOMElement(domElement, Element) {
    var element = /*#__PURE__*/ React.createElement(Element, null), className = classNameFromElement(element);
    addClassNameToDOMElement(domElement, className);
    element.domElement = domElement; ///
    domElement.__element__ = element; ///
    return element;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMsIEVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb21FbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBFbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPVxuXG4gICAgICAgICAgPEVsZW1lbnQvPlxuXG4gICAgICAgICxcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgYWRkQ2xhc3NOYW1lVG9ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsYXNzTmFtZSlcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IGVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzc05hbWVUb0RPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChjbGFzc05hbWUgPT09IEVNUFRZX1NUUklORykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBkb21FbGVtZW50O1xuXG4gIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NOYW1lRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHsgY2xhc3NOYW1lIH0gPSBkb21FbGVtZW50O1xuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudEZyb21ET01FbGVtZW50IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJkb21FbGVtZW50cyIsIkVsZW1lbnQiLCJlbGVtZW50cyIsIm1hcCIsImRvbUVsZW1lbnQiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lRnJvbUVsZW1lbnQiLCJhZGRDbGFzc05hbWVUb0RPTUVsZW1lbnQiLCJfX2VsZW1lbnRfXyIsIkVNUFRZX1NUUklORyIsImNsYXNzTGlzdCIsImFkZCIsImdldERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEscUJBQXFCO2VBQXJCQTs7SUFWQUMsdUJBQXVCO2VBQXZCQTs7O3lCQUZhO0FBRXRCLFNBQVNBLHdCQUF3QkMsV0FBVyxFQUFFQyxPQUFPO0lBQzFELElBQU1DLFdBQVdGLFlBQVlHLEdBQUcsQ0FBQyxTQUFDQztRQUNoQyxJQUFNQyxVQUFVUCxzQkFBc0JNLFlBQVlIO1FBRWxELE9BQU9JO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUO0FBRU8sU0FBU0osc0JBQXNCTSxVQUFVLEVBQUVILE9BQU87SUFDdkQsSUFBTUksd0JBRUUsb0JBQUNKLGdCQUdISyxZQUFZQyxxQkFBcUJGO0lBRXZDRyx5QkFBeUJKLFlBQVlFO0lBRXJDRCxRQUFRRCxVQUFVLEdBQUdBLFlBQWEsR0FBRztJQUVyQ0EsV0FBV0ssV0FBVyxHQUFHSixTQUFTLEdBQUc7SUFFckMsT0FBT0E7QUFDVDtBQUVBLFNBQVNHLHlCQUF5QkosVUFBVSxFQUFFRSxTQUFTO0lBQ3JELElBQUlBLGNBQWNJLHVCQUFZLEVBQUU7UUFDOUI7SUFDRjtJQUVBLElBQU0sQUFBRUMsWUFBY1AsV0FBZE87SUFFUkEsVUFBVUMsR0FBRyxDQUFDTjtBQUNoQjtBQUVBLFNBQVNDLHFCQUFxQkYsT0FBTztJQUNuQyxJQUFNRCxhQUFhQyxRQUFRUSxhQUFhLElBQ2xDLEFBQUVQLFlBQWNGLFdBQWRFO0lBRVIsT0FBT0E7QUFDVCJ9