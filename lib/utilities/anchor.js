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
    get findDivisionDivByAnchorId () {
        return findDivisionDivByAnchorId;
    },
    get isAnchorIdIndexAnchorId () {
        return isAnchorIdIndexAnchorId;
    },
    get pageNumberFromIndexAnchorId () {
        return pageNumberFromIndexAnchorId;
    },
    get scrollToAnchor () {
        return scrollToAnchor;
    }
});
var _necessary = require("necessary");
var _selectors = require("../selectors");
var _constants = require("../constants");
var second = _necessary.arrayUtilities.second;
function scrollToAnchor(anchorId) {
    var anchorDOMElement = findAnchorDOMElement(anchorId);
    anchorDOMElement.scrollIntoView();
}
function isAnchorIdIndexAnchorId(anchorId) {
    var anchorIdIncludesIndexPrepend = anchorId.includes(_constants.INDEX_PREPEND), anchorIdIndexAnchorId = anchorIdIncludesIndexPrepend; ///
    return anchorIdIndexAnchorId;
}
function findDivisionDivByAnchorId(anchorId) {
    var divisionDiv = null;
    var anchorDOMElement = findAnchorDOMElement(anchorId);
    if (anchorDOMElement !== null) {
        var selector = _selectors.DIV_SELECTOR, ancestorDOMElement = findAncestorDOMElement(anchorDOMElement, selector);
        if (ancestorDOMElement !== null) {
            var divDOMElement = ancestorDOMElement; ///
            var ref, ref1;
            ref = divDOMElement, ref1 = ref.__element__, divisionDiv = ref1 === void 0 ? null : ref1, ref;
        }
    }
    return divisionDiv;
}
function pageNumberFromIndexAnchorId(anchorId) {
    var matches = anchorId.match(/^index-(\d+)$/), secondMatch = second(matches), pageNumber = Number(secondMatch);
    return pageNumber;
}
function findAnchorDOMElement(anchorId) {
    var selector = "a#".concat(anchorId), anchorDOMElement = document.querySelector(selector);
    return anchorDOMElement;
}
function findAncestorDOMElement(domElement, selector) {
    var ancestorDOMElement = domElement.closest(selector);
    return ancestorDOMElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYW5jaG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4uL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgSU5ERVhfUFJFUEVORCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgY29uc3QgYW5jaG9yRE9NRWxlbWVudCA9IGZpbmRBbmNob3JET01FbGVtZW50KGFuY2hvcklkKTtcblxuICBhbmNob3JET01FbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FuY2hvcklkSW5kZXhBbmNob3JJZChhbmNob3JJZCkge1xuICBjb25zdCBhbmNob3JJZEluY2x1ZGVzSW5kZXhQcmVwZW5kID0gYW5jaG9ySWQuaW5jbHVkZXMoSU5ERVhfUFJFUEVORCksXG4gICAgICAgIGFuY2hvcklkSW5kZXhBbmNob3JJZCA9IGFuY2hvcklkSW5jbHVkZXNJbmRleFByZXBlbmQ7IC8vL1xuXG4gIHJldHVybiBhbmNob3JJZEluZGV4QW5jaG9ySWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKSB7XG4gIGxldCBkaXZpc2lvbkRpdiA9IG51bGw7XG5cbiAgY29uc3QgYW5jaG9yRE9NRWxlbWVudCA9IGZpbmRBbmNob3JET01FbGVtZW50KGFuY2hvcklkKTtcblxuICBpZiAoYW5jaG9yRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gRElWX1NFTEVDVE9SLFxuICAgICAgICAgIGFuY2VzdG9yRE9NRWxlbWVudCA9IGZpbmRBbmNlc3RvckRPTUVsZW1lbnQoYW5jaG9yRE9NRWxlbWVudCwgc2VsZWN0b3IpO1xuXG4gICAgaWYgKGFuY2VzdG9yRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2RE9NRWxlbWVudCA9IGFuY2VzdG9yRE9NRWxlbWVudDsgLy8vXG5cbiAgICAgICh7IF9fZWxlbWVudF9fOiBkaXZpc2lvbkRpdiA9IG51bGwgfSA9IGRpdkRPTUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZpc2lvbkRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZChhbmNob3JJZCkge1xuICBjb25zdCBtYXRjaGVzID0gYW5jaG9ySWQubWF0Y2goL15pbmRleC0oXFxkKykkLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBwYWdlTnVtYmVyID0gTnVtYmVyKHNlY29uZE1hdGNoKTtcblxuICByZXR1cm4gcGFnZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gZmluZEFuY2hvckRPTUVsZW1lbnQoYW5jaG9ySWQpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBgYSMke2FuY2hvcklkfWAsXG4gICAgICAgIGFuY2hvckRPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICByZXR1cm4gYW5jaG9yRE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZmluZEFuY2VzdG9yRE9NRWxlbWVudChkb21FbGVtZW50LCBzZWxlY3Rvcikge1xuICBjb25zdCBhbmNlc3RvckRPTUVsZW1lbnQgPSBkb21FbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuXG4gIHJldHVybiBhbmNlc3RvckRPTUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCIsImlzQW5jaG9ySWRJbmRleEFuY2hvcklkIiwicGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIiwic2Nyb2xsVG9BbmNob3IiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImFuY2hvcklkIiwiYW5jaG9yRE9NRWxlbWVudCIsImZpbmRBbmNob3JET01FbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJhbmNob3JJZEluY2x1ZGVzSW5kZXhQcmVwZW5kIiwiaW5jbHVkZXMiLCJJTkRFWF9QUkVQRU5EIiwiYW5jaG9ySWRJbmRleEFuY2hvcklkIiwiZGl2aXNpb25EaXYiLCJzZWxlY3RvciIsIkRJVl9TRUxFQ1RPUiIsImFuY2VzdG9yRE9NRWxlbWVudCIsImZpbmRBbmNlc3RvckRPTUVsZW1lbnQiLCJkaXZET01FbGVtZW50IiwiX19lbGVtZW50X18iLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInBhZ2VOdW1iZXIiLCJOdW1iZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkb21FbGVtZW50IiwiY2xvc2VzdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc0JnQkE7ZUFBQUE7O1FBUEFDO2VBQUFBOztRQTBCQUM7ZUFBQUE7O1FBaENBQztlQUFBQTs7O3lCQVBlO3lCQUVGO3lCQUNDO0FBRTlCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRUQsU0FBU0QsZUFBZUcsUUFBUTtJQUNyQyxJQUFNQyxtQkFBbUJDLHFCQUFxQkY7SUFFOUNDLGlCQUFpQkUsY0FBYztBQUNqQztBQUVPLFNBQVNSLHdCQUF3QkssUUFBUTtJQUM5QyxJQUFNSSwrQkFBK0JKLFNBQVNLLFFBQVEsQ0FBQ0Msd0JBQWEsR0FDOURDLHdCQUF3QkgsOEJBQThCLEdBQUc7SUFFL0QsT0FBT0c7QUFDVDtBQUVPLFNBQVNiLDBCQUEwQk0sUUFBUTtJQUNoRCxJQUFJUSxjQUFjO0lBRWxCLElBQU1QLG1CQUFtQkMscUJBQXFCRjtJQUU5QyxJQUFJQyxxQkFBcUIsTUFBTTtRQUM3QixJQUFNUSxXQUFXQyx1QkFBWSxFQUN2QkMscUJBQXFCQyx1QkFBdUJYLGtCQUFrQlE7UUFFcEUsSUFBSUUsdUJBQXVCLE1BQU07WUFDL0IsSUFBTUUsZ0JBQWdCRixvQkFBb0IsR0FBRzs7a0JBRU5FLDBCQUFwQ0MsYUFBYU4sZ0NBQWM7UUFDaEM7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTWiw0QkFBNEJJLFFBQVE7SUFDbEQsSUFBTWUsVUFBVWYsU0FBU2dCLEtBQUssQ0FBQyxrQkFDekJDLGNBQWNuQixPQUFPaUIsVUFDckJHLGFBQWFDLE9BQU9GO0lBRTFCLE9BQU9DO0FBQ1Q7QUFFQSxTQUFTaEIscUJBQXFCRixRQUFRO0lBQ3BDLElBQU1TLFdBQVcsQUFBQyxLQUFhLE9BQVRULFdBQ2hCQyxtQkFBbUJtQixTQUFTQyxhQUFhLENBQUNaO0lBRWhELE9BQU9SO0FBQ1Q7QUFFQSxTQUFTVyx1QkFBdUJVLFVBQVUsRUFBRWIsUUFBUTtJQUNsRCxJQUFNRSxxQkFBcUJXLFdBQVdDLE9BQU8sQ0FBQ2Q7SUFFOUMsT0FBT0U7QUFDVCJ9