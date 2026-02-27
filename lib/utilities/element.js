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
const _constants = require("../constants");
function removeDOMElement(selector) {
    const domElement = document.querySelector(selector);
    domElement.remove();
    return domElement;
}
function removeDOMElements(selector) {
    const domElements = [
        ...document.querySelectorAll(selector)
    ]; ///
    domElements.forEach((domElement)=>{
        domElement.remove();
    });
    return domElements;
}
function elementFromDOMElement(domElement, Element) {
    const element = /*#__PURE__*/ React.createElement(Element, null), className = classNameFromElement(element);
    addClassNameToDOMElement(domElement, className);
    element.domElement = domElement; ///
    domElement.__element__ = element; ///
    return element;
}
function elementsFromDOMElements(domElements, Element) {
    const elements = domElements.map((domElement)=>{
        const element = elementFromDOMElement(domElement, Element);
        return element;
    });
    return elements;
}
function addClassNameToDOMElement(domElement, className) {
    if (className === _constants.EMPTY_STRING) {
        return;
    }
    const { classList } = domElement;
    classList.add(className);
}
function classNameFromElement(element) {
    const domElement = element.getDOMElement(), { className } = domElement;
    return className;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRE9NRWxlbWVudChzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgZG9tRWxlbWVudC5yZW1vdmUoKTtcblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURPTUVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSBdOyAvLy9cblxuICBkb21FbGVtZW50cy5mb3JFYWNoKChkb21FbGVtZW50KSA9PiB7XG4gICAgZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIEVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9XG5cbiAgICAgICAgICA8RWxlbWVudC8+XG5cbiAgICAgICAgLFxuICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVGcm9tRWxlbWVudChlbGVtZW50KTtcblxuICBhZGRDbGFzc05hbWVUb0RPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xhc3NOYW1lKVxuXG4gIGVsZW1lbnQuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7ICAvLy9cblxuICBkb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cywgRWxlbWVudCkge1xuICBjb25zdCBlbGVtZW50cyA9IGRvbUVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgRWxlbWVudCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzc05hbWVUb0RPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChjbGFzc05hbWUgPT09IEVNUFRZX1NUUklORykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBkb21FbGVtZW50O1xuXG4gIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NOYW1lRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHsgY2xhc3NOYW1lIH0gPSBkb21FbGVtZW50O1xuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudEZyb21ET01FbGVtZW50IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJyZW1vdmVET01FbGVtZW50IiwicmVtb3ZlRE9NRWxlbWVudHMiLCJzZWxlY3RvciIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJkb21FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiRWxlbWVudCIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVGcm9tRWxlbWVudCIsImFkZENsYXNzTmFtZVRvRE9NRWxlbWVudCIsIl9fZWxlbWVudF9fIiwiZWxlbWVudHMiLCJtYXAiLCJFTVBUWV9TVFJJTkciLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRET01FbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFzQmdCQTtlQUFBQTs7UUFpQkFDO2VBQUFBOztRQW5DQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOzs7MkJBVmE7QUFFdEIsU0FBU0QsaUJBQWlCRSxRQUFRO0lBQ3ZDLE1BQU1DLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQ0g7SUFFMUNDLFdBQVdHLE1BQU07SUFFakIsT0FBT0g7QUFDVDtBQUVPLFNBQVNGLGtCQUFrQkMsUUFBUTtJQUN4QyxNQUFNSyxjQUFjO1dBQUtILFNBQVNJLGdCQUFnQixDQUFDTjtLQUFXLEVBQUUsR0FBRztJQUVuRUssWUFBWUUsT0FBTyxDQUFDLENBQUNOO1FBQ25CQSxXQUFXRyxNQUFNO0lBQ25CO0lBRUEsT0FBT0M7QUFDVDtBQUVPLFNBQVNULHNCQUFzQkssVUFBVSxFQUFFTyxPQUFPO0lBQ3ZELE1BQU1DLHdCQUVFLG9CQUFDRCxnQkFHSEUsWUFBWUMscUJBQXFCRjtJQUV2Q0cseUJBQXlCWCxZQUFZUztJQUVyQ0QsUUFBUVIsVUFBVSxHQUFHQSxZQUFhLEdBQUc7SUFFckNBLFdBQVdZLFdBQVcsR0FBR0osU0FBUyxHQUFHO0lBRXJDLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTWix3QkFBd0JRLFdBQVcsRUFBRUcsT0FBTztJQUMxRCxNQUFNTSxXQUFXVCxZQUFZVSxHQUFHLENBQUMsQ0FBQ2Q7UUFDaEMsTUFBTVEsVUFBVWIsc0JBQXNCSyxZQUFZTztRQUVsRCxPQUFPQztJQUNUO0lBRUEsT0FBT0s7QUFDVDtBQUVBLFNBQVNGLHlCQUF5QlgsVUFBVSxFQUFFUyxTQUFTO0lBQ3JELElBQUlBLGNBQWNNLHVCQUFZLEVBQUU7UUFDOUI7SUFDRjtJQUVBLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdoQjtJQUV0QmdCLFVBQVVDLEdBQUcsQ0FBQ1I7QUFDaEI7QUFFQSxTQUFTQyxxQkFBcUJGLE9BQU87SUFDbkMsTUFBTVIsYUFBYVEsUUFBUVUsYUFBYSxJQUNsQyxFQUFFVCxTQUFTLEVBQUUsR0FBR1Q7SUFFdEIsT0FBT1M7QUFDVCJ9