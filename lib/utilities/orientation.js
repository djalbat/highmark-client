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
    get getOrientation () {
        return getOrientation;
    },
    get onOrientationChange () {
        return onOrientationChange;
    }
});
var _easy = require("easy");
var _constants = require("../constants");
var CHANGE_EVENT_TYPE = _easy.eventTypes.CHANGE_EVENT_TYPE;
var mediaQueryList = matchMedia(_constants.ORIENTATION_PORTRAIT_QUERY);
function getOrientation(callback) {
    var orientation = orientationFromMediaQueryList(mediaQueryList);
    callback(orientation);
}
function onOrientationChange(handler) {
    var eventType = CHANGE_EVENT_TYPE;
    mediaQueryList.addEventListener(eventType, function(mediaQueryList) {
        var orientation = orientationFromMediaQueryList(mediaQueryList);
        handler(orientation);
    });
}
function orientationFromMediaQueryList(mediaQueryList) {
    var _mediaQueryList_matches = mediaQueryList.matches, matches = _mediaQueryList_matches === void 0 ? false : _mediaQueryList_matches, orientation = matches ? _constants.PORTRAIT_ORIENTATION : _constants.LANDSCAPE_ORIENTATION;
    return orientation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb3JpZW50YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OLCBPUklFTlRBVElPTl9QT1JUUkFJVF9RVUVSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDSEFOR0VfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxudmFyIG1lZGlhUXVlcnlMaXN0ID0gbWF0Y2hNZWRpYShPUklFTlRBVElPTl9QT1JUUkFJVF9RVUVSWSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmllbnRhdGlvbihjYWxsYmFjaykge1xuICBjb25zdCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uRnJvbU1lZGlhUXVlcnlMaXN0KG1lZGlhUXVlcnlMaXN0KTtcblxuICBjYWxsYmFjayhvcmllbnRhdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk9yaWVudGF0aW9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEU7XG5cbiAgbWVkaWFRdWVyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChtZWRpYVF1ZXJ5TGlzdCkgPT4ge1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25Gcm9tTWVkaWFRdWVyeUxpc3QobWVkaWFRdWVyeUxpc3QpO1xuXG4gICAgaGFuZGxlcihvcmllbnRhdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcmllbnRhdGlvbkZyb21NZWRpYVF1ZXJ5TGlzdChtZWRpYVF1ZXJ5TGlzdCkge1xuICBjb25zdCB7IG1hdGNoZXMgPSBmYWxzZSB9ID0gbWVkaWFRdWVyeUxpc3QsXG4gICAgICAgIG9yaWVudGF0aW9uID0gbWF0Y2hlcyA/XG4gICAgICAgICAgUE9SVFJBSVRfT1JJRU5UQVRJT04gOlxuICAgICAgICAgICAgTEFORFNDQVBFX09SSUVOVEFUSU9OO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn0iXSwibmFtZXMiOlsiZ2V0T3JpZW50YXRpb24iLCJvbk9yaWVudGF0aW9uQ2hhbmdlIiwiQ0hBTkdFX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwibWVkaWFRdWVyeUxpc3QiLCJtYXRjaE1lZGlhIiwiT1JJRU5UQVRJT05fUE9SVFJBSVRfUVVFUlkiLCJjYWxsYmFjayIsIm9yaWVudGF0aW9uIiwib3JpZW50YXRpb25Gcm9tTWVkaWFRdWVyeUxpc3QiLCJoYW5kbGVyIiwiZXZlbnRUeXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hdGNoZXMiLCJQT1JUUkFJVF9PUklFTlRBVElPTiIsIkxBTkRTQ0FQRV9PUklFTlRBVElPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBVWdCQTtlQUFBQTs7UUFNQUM7ZUFBQUE7OztvQkFkVzt5QkFFNkQ7QUFFeEYsSUFBTSxBQUFFQyxvQkFBc0JDLGdCQUFVLENBQWhDRDtBQUVSLElBQUlFLGlCQUFpQkMsV0FBV0MscUNBQTBCO0FBRW5ELFNBQVNOLGVBQWVPLFFBQVE7SUFDckMsSUFBTUMsY0FBY0MsOEJBQThCTDtJQUVsREcsU0FBU0M7QUFDWDtBQUVPLFNBQVNQLG9CQUFvQlMsT0FBTztJQUN6QyxJQUFNQyxZQUFZVDtJQUVsQkUsZUFBZVEsZ0JBQWdCLENBQUNELFdBQVcsU0FBQ1A7UUFDMUMsSUFBTUksY0FBY0MsOEJBQThCTDtRQUVsRE0sUUFBUUY7SUFDVjtBQUNGO0FBRUEsU0FBU0MsOEJBQThCTCxjQUFjO0lBQ25ELDhCQUE0QkEsZUFBcEJTLFNBQUFBLCtDQUFVLGlDQUNaTCxjQUFjSyxVQUNaQywrQkFBb0IsR0FDbEJDLGdDQUFxQjtJQUUvQixPQUFPUDtBQUNUIn0=