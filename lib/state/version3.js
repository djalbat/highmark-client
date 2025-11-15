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
    get createState () {
        return createState;
    },
    get migrateToVersion3 () {
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
    var _obj, _obj1;
    var version = _versions.VERSION_3, menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), divisionsZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), coloursInverted = false, nativeGesturesRestored = false, state = {
        version: version,
        menuZoom: menuZoom,
        divisionsZoom: divisionsZoom,
        coloursInverted: coloursInverted,
        nativeGesturesRestored: nativeGesturesRestored
    };
    return state;
}
function migrateToVersion3(json) {
    var version = _versions.VERSION_3;
    json = Object.assign({}, json, {
        version: version
    });
    delete json.fullScreenDivisionsZoom;
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl8zIH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGUoKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzMsXG4gICAgICAgIG1lbnVab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfSxcbiAgICAgICAgZGl2aXNpb25zWm9vbSA9IHtcbiAgICAgICAgICBbUE9SVFJBSVRfT1JJRU5UQVRJT05dOiAxLFxuICAgICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG91cnNJbnZlcnRlZCA9IGZhbHNlLFxuICAgICAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gZmFsc2UsXG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgbWVudVpvb20sXG4gICAgICAgICAgZGl2aXNpb25zWm9vbSxcbiAgICAgICAgICBjb2xvdXJzSW52ZXJ0ZWQsXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZFxuICAgICAgICB9O1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVUb1ZlcnNpb24zKGpzb24pIHtcbiAgY29uc3QgdmVyc2lvbiA9IFZFUlNJT05fMztcblxuICBqc29uID0gT2JqZWN0LmFzc2lnbih7fSwganNvbiwge1xuICAgIHZlcnNpb25cbiAgfSk7XG5cbiAgZGVsZXRlIGpzb24uZnVsbFNjcmVlbkRpdmlzaW9uc1pvb207XG5cbiAgcmV0dXJuIGpzb247XG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0YXRlIiwibWlncmF0ZVRvVmVyc2lvbjMiLCJ2ZXJzaW9uIiwiVkVSU0lPTl8zIiwibWVudVpvb20iLCJQT1JUUkFJVF9PUklFTlRBVElPTiIsIkxBTkRTQ0FQRV9PUklFTlRBVElPTiIsImRpdmlzaW9uc1pvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic3RhdGUiLCJqc29uIiwiT2JqZWN0IiwiYXNzaWduIiwiZnVsbFNjcmVlbkRpdmlzaW9uc1pvb20iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUtnQkE7ZUFBQUE7O1FBdUJBQztlQUFBQTs7O3dCQTFCVTt5QkFDa0M7Ozs7Ozs7Ozs7Ozs7O0FBRXJELFNBQVNEO1FBRUcsTUFJSztJQUx0QixJQUFNRSxVQUFVQyxtQkFBUyxFQUNuQkMsWUFBVyxXQUNULGlCQURTLE1BQ1JDLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZTLE1BRVJDLGdDQUFxQixFQUFHLElBRmhCLE9BSVhDLGlCQUFnQixZQUNkLGlCQURjLE9BQ2JGLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZjLE9BRWJDLGdDQUFxQixFQUFHLElBRlgsUUFJaEJFLGtCQUFrQixPQUNsQkMseUJBQXlCLE9BQ3pCQyxRQUFRO1FBQ05SLFNBQUFBO1FBQ0FFLFVBQUFBO1FBQ0FHLGVBQUFBO1FBQ0FDLGlCQUFBQTtRQUNBQyx3QkFBQUE7SUFDRjtJQUVOLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTVCxrQkFBa0JVLElBQUk7SUFDcEMsSUFBTVQsVUFBVUMsbUJBQVM7SUFFekJRLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdGLE1BQU07UUFDN0JULFNBQUFBO0lBQ0Y7SUFFQSxPQUFPUyxLQUFLRyx1QkFBdUI7SUFFbkMsT0FBT0g7QUFDVCJ9