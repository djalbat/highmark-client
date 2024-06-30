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
    },
    findDivByAnchorId: function() {
        return findDivByAnchorId;
    },
    scrollToAnchor: function() {
        return scrollToAnchor;
    }
});
var _selectors = require("../selectors");
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
function findDivByAnchorId(anchorId) {
    var div = null;
    var anchorDOMElement = findAnchorDOMElement(anchorId);
    if (anchorDOMElement !== null) {
        var divDOMElement;
        var anchorIdIndexAnchorId = isAnchorIdIndexAnchorId(anchorId);
        if (anchorIdIndexAnchorId) {
            var nextDOMElement = findNextDOMElement(anchorDOMElement);
            divDOMElement = nextDOMElement; ///
        } else {
            var selector = _selectors.DIV_SELECTOR, ancestorDOMElement = findAncestorDOMElement(anchorDOMElement, selector);
            divDOMElement = ancestorDOMElement; ///
        }
        if (divDOMElement !== null) {
            var ref, ref1;
            ref = divDOMElement, ref1 = ref.__element__, div = ref1 === void 0 ? null : ref1, ref;
        }
    }
    return div;
}
function scrollToAnchor(anchorId) {
    var anchorDOMElement = findAnchorDOMElement(anchorId);
    anchorDOMElement.scrollIntoView();
}
function findAnchorDOMElement(anchorId) {
    var selector = "a#".concat(anchorId), anchorDOMElement = document.querySelector(selector);
    return anchorDOMElement;
}
function findNextDOMElement(domElement) {
    var nextDOMElement = null;
    var nextSibling = domElement.nextSibling;
    if (nextSibling !== null) {
        var nodeType = nextSibling.nodeType;
        if (nodeType === Node.ELEMENT_NODE) {
            nextDOMElement = nextSibling; ///
        } else {
            domElement = nextSibling; ///
            nextDOMElement = findNextDOMElement(domElement);
        }
    }
    return nextDOMElement;
}
function classNameFromElement(element) {
    var domElement = element.getDOMElement(), className = domElement.className;
    return className;
}
function findAncestorDOMElement(domElement, selector) {
    var ancestorDOMElement = domElement.closest(selector);
    return ancestorDOMElement;
}
function isAnchorIdIndexAnchorId(anchorId) {
    var anchorIdIncludesIndexPrepend = anchorId.includes(_constants.INDEX_PREPEND), anchorIdIndexAnchorId = anchorIdIncludesIndexPrepend; ///
    return anchorIdIndexAnchorId;
}
function addClassNameToDOMElement(domElement, className) {
    if (className === _constants.EMPTY_STRING) {
        return;
    }
    var classList = domElement.classList;
    classList.add(className);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4uL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBJTkRFWF9QUkVQRU5EIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMsIEVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb21FbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudEZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBFbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnQgPVxuXG4gICAgICAgICAgPEVsZW1lbnQvPlxuXG4gICAgICAgICxcbiAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgYWRkQ2xhc3NOYW1lVG9ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsYXNzTmFtZSlcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50OyAgLy8vXG5cbiAgZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IGVsZW1lbnQ7IC8vL1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZERpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpIHtcbiAgbGV0IGRpdiA9IG51bGw7XG5cbiAgY29uc3QgYW5jaG9yRE9NRWxlbWVudCA9IGZpbmRBbmNob3JET01FbGVtZW50KGFuY2hvcklkKTtcblxuICBpZiAoYW5jaG9yRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGxldCBkaXZET01FbGVtZW50O1xuXG4gICAgY29uc3QgYW5jaG9ySWRJbmRleEFuY2hvcklkID0gaXNBbmNob3JJZEluZGV4QW5jaG9ySWQoYW5jaG9ySWQpO1xuXG4gICAgaWYgKGFuY2hvcklkSW5kZXhBbmNob3JJZCkge1xuICAgICAgY29uc3QgbmV4dERPTUVsZW1lbnQgPSBmaW5kTmV4dERPTUVsZW1lbnQoYW5jaG9yRE9NRWxlbWVudCk7XG5cbiAgICAgIGRpdkRPTUVsZW1lbnQgPSBuZXh0RE9NRWxlbWVudDsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gRElWX1NFTEVDVE9SLFxuICAgICAgICAgICAgYW5jZXN0b3JET01FbGVtZW50ID0gZmluZEFuY2VzdG9yRE9NRWxlbWVudChhbmNob3JET01FbGVtZW50LCBzZWxlY3Rvcik7XG5cbiAgICAgIGRpdkRPTUVsZW1lbnQgPSBhbmNlc3RvckRPTUVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChkaXZET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAoeyBfX2VsZW1lbnRfXzogZGl2ID0gbnVsbCB9ID0gZGl2RE9NRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKSB7XG4gIGNvbnN0IGFuY2hvckRPTUVsZW1lbnQgPSBmaW5kQW5jaG9yRE9NRWxlbWVudChhbmNob3JJZCk7XG5cbiAgYW5jaG9yRE9NRWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xufVxuXG5mdW5jdGlvbiBmaW5kQW5jaG9yRE9NRWxlbWVudChhbmNob3JJZCkge1xuICBjb25zdCBzZWxlY3RvciA9IGBhIyR7YW5jaG9ySWR9YCxcbiAgICAgICAgYW5jaG9yRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gIHJldHVybiBhbmNob3JET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBmaW5kTmV4dERPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICBsZXQgbmV4dERPTUVsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHsgbmV4dFNpYmxpbmcgfSA9IGRvbUVsZW1lbnQ7XG5cbiAgaWYgKG5leHRTaWJsaW5nICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBub2RlVHlwZSB9ID0gbmV4dFNpYmxpbmc7XG5cbiAgICBpZiAobm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBuZXh0RE9NRWxlbWVudCA9IG5leHRTaWJsaW5nOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudCA9IG5leHRTaWJsaW5nOyAvLy9cblxuICAgICAgbmV4dERPTUVsZW1lbnQgPSBmaW5kTmV4dERPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5leHRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjbGFzc05hbWVGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgeyBjbGFzc05hbWUgfSA9IGRvbUVsZW1lbnQ7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuZnVuY3Rpb24gZmluZEFuY2VzdG9yRE9NRWxlbWVudChkb21FbGVtZW50LCBzZWxlY3Rvcikge1xuICBjb25zdCBhbmNlc3RvckRPTUVsZW1lbnQgPSBkb21FbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuXG4gIHJldHVybiBhbmNlc3RvckRPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzQW5jaG9ySWRJbmRleEFuY2hvcklkKGFuY2hvcklkKSB7XG4gIGNvbnN0IGFuY2hvcklkSW5jbHVkZXNJbmRleFByZXBlbmQgPSBhbmNob3JJZC5pbmNsdWRlcyhJTkRFWF9QUkVQRU5EKSxcbiAgICAgICAgYW5jaG9ySWRJbmRleEFuY2hvcklkID0gYW5jaG9ySWRJbmNsdWRlc0luZGV4UHJlcGVuZDsgLy8vXG5cbiAgcmV0dXJuIGFuY2hvcklkSW5kZXhBbmNob3JJZDtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3NOYW1lVG9ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoY2xhc3NOYW1lID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gZG9tRWxlbWVudDtcblxuICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG59XG4iXSwibmFtZXMiOlsiZWxlbWVudEZyb21ET01FbGVtZW50IiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJmaW5kRGl2QnlBbmNob3JJZCIsInNjcm9sbFRvQW5jaG9yIiwiZG9tRWxlbWVudHMiLCJFbGVtZW50IiwiZWxlbWVudHMiLCJtYXAiLCJkb21FbGVtZW50IiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTmFtZUZyb21FbGVtZW50IiwiYWRkQ2xhc3NOYW1lVG9ET01FbGVtZW50IiwiX19lbGVtZW50X18iLCJhbmNob3JJZCIsImRpdiIsImFuY2hvckRPTUVsZW1lbnQiLCJmaW5kQW5jaG9yRE9NRWxlbWVudCIsImRpdkRPTUVsZW1lbnQiLCJhbmNob3JJZEluZGV4QW5jaG9ySWQiLCJpc0FuY2hvcklkSW5kZXhBbmNob3JJZCIsIm5leHRET01FbGVtZW50IiwiZmluZE5leHRET01FbGVtZW50Iiwic2VsZWN0b3IiLCJESVZfU0VMRUNUT1IiLCJhbmNlc3RvckRPTUVsZW1lbnQiLCJmaW5kQW5jZXN0b3JET01FbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0U2libGluZyIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImdldERPTUVsZW1lbnQiLCJjbG9zZXN0IiwiYW5jaG9ySWRJbmNsdWRlc0luZGV4UHJlcGVuZCIsImluY2x1ZGVzIiwiSU5ERVhfUFJFUEVORCIsIkVNUFRZX1NUUklORyIsImNsYXNzTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZWdCQSxxQkFBcUI7ZUFBckJBOztJQVZBQyx1QkFBdUI7ZUFBdkJBOztJQTJCQUMsaUJBQWlCO2VBQWpCQTs7SUE2QkFDLGNBQWM7ZUFBZEE7Ozt5QkEzRGE7eUJBQ2U7QUFFckMsU0FBU0Ysd0JBQXdCRyxXQUFXLEVBQUVDLE9BQU87SUFDMUQsSUFBTUMsV0FBV0YsWUFBWUcsR0FBRyxDQUFDLFNBQUNDO1FBQ2hDLElBQU1DLFVBQVVULHNCQUFzQlEsWUFBWUg7UUFFbEQsT0FBT0k7SUFDVDtJQUVBLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTTixzQkFBc0JRLFVBQVUsRUFBRUgsT0FBTztJQUN2RCxJQUFNSSx3QkFFRSxvQkFBQ0osZ0JBR0hLLFlBQVlDLHFCQUFxQkY7SUFFdkNHLHlCQUF5QkosWUFBWUU7SUFFckNELFFBQVFELFVBQVUsR0FBR0EsWUFBYSxHQUFHO0lBRXJDQSxXQUFXSyxXQUFXLEdBQUdKLFNBQVMsR0FBRztJQUVyQyxPQUFPQTtBQUNUO0FBRU8sU0FBU1Asa0JBQWtCWSxRQUFRO0lBQ3hDLElBQUlDLE1BQU07SUFFVixJQUFNQyxtQkFBbUJDLHFCQUFxQkg7SUFFOUMsSUFBSUUscUJBQXFCLE1BQU07UUFDN0IsSUFBSUU7UUFFSixJQUFNQyx3QkFBd0JDLHdCQUF3Qk47UUFFdEQsSUFBSUssdUJBQXVCO1lBQ3pCLElBQU1FLGlCQUFpQkMsbUJBQW1CTjtZQUUxQ0UsZ0JBQWdCRyxnQkFBZ0IsR0FBRztRQUNyQyxPQUFPO1lBQ0wsSUFBTUUsV0FBV0MsdUJBQVksRUFDdkJDLHFCQUFxQkMsdUJBQXVCVixrQkFBa0JPO1lBRXBFTCxnQkFBZ0JPLG9CQUFvQixHQUFHO1FBQ3pDO1FBRUEsSUFBSVAsa0JBQWtCLE1BQU07O2tCQUNLQSwwQkFBNUJMLGFBQWFFLHdCQUFNO1FBQ3hCO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU1osZUFBZVcsUUFBUTtJQUNyQyxJQUFNRSxtQkFBbUJDLHFCQUFxQkg7SUFFOUNFLGlCQUFpQlcsY0FBYztBQUNqQztBQUVBLFNBQVNWLHFCQUFxQkgsUUFBUTtJQUNwQyxJQUFNUyxXQUFXLEFBQUMsS0FBYSxPQUFUVCxXQUNoQkUsbUJBQW1CWSxTQUFTQyxhQUFhLENBQUNOO0lBRWhELE9BQU9QO0FBQ1Q7QUFFQSxTQUFTTSxtQkFBbUJkLFVBQVU7SUFDcEMsSUFBSWEsaUJBQWlCO0lBRXJCLElBQU0sQUFBRVMsY0FBZ0J0QixXQUFoQnNCO0lBRVIsSUFBSUEsZ0JBQWdCLE1BQU07UUFDeEIsSUFBTSxBQUFFQyxXQUFhRCxZQUFiQztRQUVSLElBQUlBLGFBQWFDLEtBQUtDLFlBQVksRUFBRTtZQUNsQ1osaUJBQWlCUyxhQUFhLEdBQUc7UUFDbkMsT0FBTztZQUNMdEIsYUFBYXNCLGFBQWEsR0FBRztZQUU3QlQsaUJBQWlCQyxtQkFBbUJkO1FBQ3RDO0lBQ0Y7SUFFQSxPQUFPYTtBQUNUO0FBRUEsU0FBU1YscUJBQXFCRixPQUFPO0lBQ25DLElBQU1ELGFBQWFDLFFBQVF5QixhQUFhLElBQ2xDLEFBQUV4QixZQUFjRixXQUFkRTtJQUVSLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTZ0IsdUJBQXVCbEIsVUFBVSxFQUFFZSxRQUFRO0lBQ2xELElBQU1FLHFCQUFxQmpCLFdBQVcyQixPQUFPLENBQUNaO0lBRTlDLE9BQU9FO0FBQ1Q7QUFFQSxTQUFTTCx3QkFBd0JOLFFBQVE7SUFDdkMsSUFBTXNCLCtCQUErQnRCLFNBQVN1QixRQUFRLENBQUNDLHdCQUFhLEdBQzlEbkIsd0JBQXdCaUIsOEJBQThCLEdBQUc7SUFFL0QsT0FBT2pCO0FBQ1Q7QUFFQSxTQUFTUCx5QkFBeUJKLFVBQVUsRUFBRUUsU0FBUztJQUNyRCxJQUFJQSxjQUFjNkIsdUJBQVksRUFBRTtRQUM5QjtJQUNGO0lBRUEsSUFBTSxBQUFFQyxZQUFjaEMsV0FBZGdDO0lBRVJBLFVBQVVDLEdBQUcsQ0FBQy9CO0FBQ2hCIn0=