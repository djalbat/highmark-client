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
    createState: function() {
        return createState;
    },
    migrateToVersion3: function() {
        return migrateToVersion3;
    }
});
var _versions = require("../versions");
var _constants = require("../constants");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function createState() {
    var _obj, _obj1, _obj2;
    var version = _versions.VERSION_3, menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), divisionsZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), fullScreenDivisionsZoom = (_obj2 = {}, _define_property(_obj2, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj2, _constants.LANDSCAPE_ORIENTATION, 1), _obj2), overlayHidden = false, coloursInverted = false, nativeGesturesRestored = false, state = {
        version: version,
        menuZoom: menuZoom,
        overlayHidden: overlayHidden,
        divisionsZoom: divisionsZoom,
        coloursInverted: coloursInverted,
        nativeGesturesRestored: nativeGesturesRestored,
        fullScreenDivisionsZoom: fullScreenDivisionsZoom
    };
    return state;
}
function migrateToVersion3(json) {
    var version = _versions.VERSION_3, overlayHidden = false;
    json = Object.assign({}, json, {
        version: version,
        overlayHidden: overlayHidden
    });
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl8zIH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGUoKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzMsXG4gICAgICAgIG1lbnVab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfSxcbiAgICAgICAgZGl2aXNpb25zWm9vbSA9IHtcbiAgICAgICAgICBbUE9SVFJBSVRfT1JJRU5UQVRJT05dOiAxLFxuICAgICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxTY3JlZW5EaXZpc2lvbnNab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheUhpZGRlbiA9IGZhbHNlLFxuICAgICAgICBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZSxcbiAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGZhbHNlLFxuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIG1lbnVab29tLFxuICAgICAgICAgIG92ZXJsYXlIaWRkZW4sXG4gICAgICAgICAgZGl2aXNpb25zWm9vbSxcbiAgICAgICAgICBjb2xvdXJzSW52ZXJ0ZWQsXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCxcbiAgICAgICAgICBmdWxsU2NyZWVuRGl2aXNpb25zWm9vbVxuICAgICAgICB9O1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVUb1ZlcnNpb24zKGpzb24pIHtcbiAgY29uc3QgdmVyc2lvbiA9IFZFUlNJT05fMyxcbiAgICAgICAgb3ZlcmxheUhpZGRlbiA9IGZhbHNlO1xuXG4gIGpzb24gPSBPYmplY3QuYXNzaWduKHt9LCBqc29uLCB7XG4gICAgdmVyc2lvbixcbiAgICBvdmVybGF5SGlkZGVuXG4gIH0pO1xuXG4gIHJldHVybiBqc29uO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVTdGF0ZSIsIm1pZ3JhdGVUb1ZlcnNpb24zIiwidmVyc2lvbiIsIlZFUlNJT05fMyIsIm1lbnVab29tIiwiUE9SVFJBSVRfT1JJRU5UQVRJT04iLCJMQU5EU0NBUEVfT1JJRU5UQVRJT04iLCJkaXZpc2lvbnNab29tIiwiZnVsbFNjcmVlbkRpdmlzaW9uc1pvb20iLCJvdmVybGF5SGlkZGVuIiwiY29sb3Vyc0ludmVydGVkIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInN0YXRlIiwianNvbiIsIk9iamVjdCIsImFzc2lnbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBS2dCQSxXQUFXO2VBQVhBOztJQThCQUMsaUJBQWlCO2VBQWpCQTs7O3dCQWpDVTt5QkFDa0M7Ozs7Ozs7Ozs7Ozs7O0FBRXJELFNBQVNEO1FBRUcsTUFJSyxPQUlVO0lBVGhDLElBQU1FLFVBQVVDLG1CQUFTLEVBQ25CQyxZQUFXLFdBQ1QsaUJBRFMsTUFDUkMsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRlMsTUFFUkMsZ0NBQXFCLEVBQUcsSUFGaEIsT0FJWEMsaUJBQWdCLFlBQ2QsaUJBRGMsT0FDYkYsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRmMsT0FFYkMsZ0NBQXFCLEVBQUcsSUFGWCxRQUloQkUsMkJBQTBCLFlBQ3hCLGlCQUR3QixPQUN2QkgsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRndCLE9BRXZCQyxnQ0FBcUIsRUFBRyxJQUZELFFBSTFCRyxnQkFBZ0IsT0FDaEJDLGtCQUFrQixPQUNsQkMseUJBQXlCLE9BQ3pCQyxRQUFRO1FBQ05WLFNBQUFBO1FBQ0FFLFVBQUFBO1FBQ0FLLGVBQUFBO1FBQ0FGLGVBQUFBO1FBQ0FHLGlCQUFBQTtRQUNBQyx3QkFBQUE7UUFDQUgseUJBQUFBO0lBQ0Y7SUFFTixPQUFPSTtBQUNUO0FBRU8sU0FBU1gsa0JBQWtCWSxJQUFJO0lBQ3BDLElBQU1YLFVBQVVDLG1CQUFTLEVBQ25CTSxnQkFBZ0I7SUFFdEJJLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdGLE1BQU07UUFDN0JYLFNBQUFBO1FBQ0FPLGVBQUFBO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUIn0=