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
    var anchorIdStartsWithIndexPrepend = anchorId.startsWith(_constants.INDEX_PREPEND), anchorIdIndexAnchorId = anchorIdStartsWithIndexPrepend; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYW5jaG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHsgRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4uL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgSU5ERVhfUFJFUEVORCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgY29uc3QgYW5jaG9yRE9NRWxlbWVudCA9IGZpbmRBbmNob3JET01FbGVtZW50KGFuY2hvcklkKTtcblxuICBhbmNob3JET01FbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FuY2hvcklkSW5kZXhBbmNob3JJZChhbmNob3JJZCkge1xuICBjb25zdCBhbmNob3JJZFN0YXJ0c1dpdGhJbmRleFByZXBlbmQgPSBhbmNob3JJZC5zdGFydHNXaXRoKElOREVYX1BSRVBFTkQpLFxuICAgICAgICBhbmNob3JJZEluZGV4QW5jaG9ySWQgPSBhbmNob3JJZFN0YXJ0c1dpdGhJbmRleFByZXBlbmQ7IC8vL1xuXG4gIHJldHVybiBhbmNob3JJZEluZGV4QW5jaG9ySWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKSB7XG4gIGxldCBkaXZpc2lvbkRpdiA9IG51bGw7XG5cbiAgY29uc3QgYW5jaG9yRE9NRWxlbWVudCA9IGZpbmRBbmNob3JET01FbGVtZW50KGFuY2hvcklkKTtcblxuICBpZiAoYW5jaG9yRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gRElWX1NFTEVDVE9SLFxuICAgICAgICAgIGFuY2VzdG9yRE9NRWxlbWVudCA9IGZpbmRBbmNlc3RvckRPTUVsZW1lbnQoYW5jaG9yRE9NRWxlbWVudCwgc2VsZWN0b3IpO1xuXG4gICAgaWYgKGFuY2VzdG9yRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2RE9NRWxlbWVudCA9IGFuY2VzdG9yRE9NRWxlbWVudDsgLy8vXG5cbiAgICAgICh7IF9fZWxlbWVudF9fOiBkaXZpc2lvbkRpdiA9IG51bGwgfSA9IGRpdkRPTUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZpc2lvbkRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZChhbmNob3JJZCkge1xuICBjb25zdCBtYXRjaGVzID0gYW5jaG9ySWQubWF0Y2goL15pbmRleC0oXFxkKykkLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBwYWdlTnVtYmVyID0gTnVtYmVyKHNlY29uZE1hdGNoKTtcblxuICByZXR1cm4gcGFnZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gZmluZEFuY2hvckRPTUVsZW1lbnQoYW5jaG9ySWQpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBgYSMke2FuY2hvcklkfWAsXG4gICAgICAgIGFuY2hvckRPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICByZXR1cm4gYW5jaG9yRE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZmluZEFuY2VzdG9yRE9NRWxlbWVudChkb21FbGVtZW50LCBzZWxlY3Rvcikge1xuICBjb25zdCBhbmNlc3RvckRPTUVsZW1lbnQgPSBkb21FbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuXG4gIHJldHVybiBhbmNlc3RvckRPTUVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCIsImlzQW5jaG9ySWRJbmRleEFuY2hvcklkIiwicGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIiwic2Nyb2xsVG9BbmNob3IiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImFuY2hvcklkIiwiYW5jaG9yRE9NRWxlbWVudCIsImZpbmRBbmNob3JET01FbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJhbmNob3JJZFN0YXJ0c1dpdGhJbmRleFByZXBlbmQiLCJzdGFydHNXaXRoIiwiSU5ERVhfUFJFUEVORCIsImFuY2hvcklkSW5kZXhBbmNob3JJZCIsImRpdmlzaW9uRGl2Iiwic2VsZWN0b3IiLCJESVZfU0VMRUNUT1IiLCJhbmNlc3RvckRPTUVsZW1lbnQiLCJmaW5kQW5jZXN0b3JET01FbGVtZW50IiwiZGl2RE9NRWxlbWVudCIsIl9fZWxlbWVudF9fIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJwYWdlTnVtYmVyIiwiTnVtYmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZG9tRWxlbWVudCIsImNsb3Nlc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXNCZ0JBO2VBQUFBOztRQVBBQztlQUFBQTs7UUEwQkFDO2VBQUFBOztRQWhDQUM7ZUFBQUE7Ozt5QkFQZTt5QkFFRjt5QkFDQztBQUU5QixJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVELFNBQVNELGVBQWVHLFFBQVE7SUFDckMsSUFBTUMsbUJBQW1CQyxxQkFBcUJGO0lBRTlDQyxpQkFBaUJFLGNBQWM7QUFDakM7QUFFTyxTQUFTUix3QkFBd0JLLFFBQVE7SUFDOUMsSUFBTUksaUNBQWlDSixTQUFTSyxVQUFVLENBQUNDLHdCQUFhLEdBQ2xFQyx3QkFBd0JILGdDQUFnQyxHQUFHO0lBRWpFLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTYiwwQkFBMEJNLFFBQVE7SUFDaEQsSUFBSVEsY0FBYztJQUVsQixJQUFNUCxtQkFBbUJDLHFCQUFxQkY7SUFFOUMsSUFBSUMscUJBQXFCLE1BQU07UUFDN0IsSUFBTVEsV0FBV0MsdUJBQVksRUFDdkJDLHFCQUFxQkMsdUJBQXVCWCxrQkFBa0JRO1FBRXBFLElBQUlFLHVCQUF1QixNQUFNO1lBQy9CLElBQU1FLGdCQUFnQkYsb0JBQW9CLEdBQUc7O2tCQUVORSwwQkFBcENDLGFBQWFOLGdDQUFjO1FBQ2hDO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU1osNEJBQTRCSSxRQUFRO0lBQ2xELElBQU1lLFVBQVVmLFNBQVNnQixLQUFLLENBQUMsa0JBQ3pCQyxjQUFjbkIsT0FBT2lCLFVBQ3JCRyxhQUFhQyxPQUFPRjtJQUUxQixPQUFPQztBQUNUO0FBRUEsU0FBU2hCLHFCQUFxQkYsUUFBUTtJQUNwQyxJQUFNUyxXQUFXLEFBQUMsS0FBYSxPQUFUVCxXQUNoQkMsbUJBQW1CbUIsU0FBU0MsYUFBYSxDQUFDWjtJQUVoRCxPQUFPUjtBQUNUO0FBRUEsU0FBU1csdUJBQXVCVSxVQUFVLEVBQUViLFFBQVE7SUFDbEQsSUFBTUUscUJBQXFCVyxXQUFXQyxPQUFPLENBQUNkO0lBRTlDLE9BQU9FO0FBQ1QifQ==