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
    get migrateToVersion4 () {
        return migrateToVersion4;
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
    var _obj;
    var version = _versions.VERSION_4, zoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), state = {
        version: version,
        zoom: zoom
    };
    return state;
}
function migrateToVersion4(json) {
    var version = _versions.VERSION_4;
    json = Object.assign({}, json, {
        version: version
    });
    return json.menuZoom;
    delete json.divisionsZoom;
    delete json.coloursInverted;
    delete json.nativeGesturesRestored;
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uNC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl80IH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGUoKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzQsXG4gICAgICAgIHpvb20gPSB7XG4gICAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgICBbTEFORFNDQVBFX09SSUVOVEFUSU9OXTogMVxuICAgICAgICB9LFxuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIHpvb21cbiAgICAgICAgfTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlVG9WZXJzaW9uNChqc29uKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzQ7XG5cbiAganNvbiA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24sIHtcbiAgICB2ZXJzaW9uXG4gIH0pO1xuXG4gIHJldHVybiBqc29uLm1lbnVab29tXG4gIGRlbGV0ZSBqc29uLmRpdmlzaW9uc1pvb207XG4gIGRlbGV0ZSBqc29uLmNvbG91cnNJbnZlcnRlZDtcbiAgZGVsZXRlIGpzb24ubmF0aXZlR2VzdHVyZXNSZXN0b3JlZDtcblxuICByZXR1cm4ganNvbjtcbn0iXSwibmFtZXMiOlsiY3JlYXRlU3RhdGUiLCJtaWdyYXRlVG9WZXJzaW9uNCIsInZlcnNpb24iLCJWRVJTSU9OXzQiLCJ6b29tIiwiUE9SVFJBSVRfT1JJRU5UQVRJT04iLCJMQU5EU0NBUEVfT1JJRU5UQVRJT04iLCJzdGF0ZSIsImpzb24iLCJPYmplY3QiLCJhc3NpZ24iLCJtZW51Wm9vbSIsImRpdmlzaW9uc1pvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFLZ0JBO2VBQUFBOztRQWNBQztlQUFBQTs7O3dCQWpCVTt5QkFDa0M7Ozs7Ozs7Ozs7Ozs7O0FBRXJELFNBQVNEO1FBRUQ7SUFEYixJQUFNRSxVQUFVQyxtQkFBUyxFQUNuQkMsUUFBTyxXQUNMLGlCQURLLE1BQ0pDLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZLLE1BRUpDLGdDQUFxQixFQUFHLElBRnBCLE9BSVBDLFFBQVE7UUFDTkwsU0FBQUE7UUFDQUUsTUFBQUE7SUFDRjtJQUVOLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTTixrQkFBa0JPLElBQUk7SUFDcEMsSUFBTU4sVUFBVUMsbUJBQVM7SUFFekJLLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdGLE1BQU07UUFDN0JOLFNBQUFBO0lBQ0Y7SUFFQSxPQUFPTSxLQUFLRyxRQUFRO0lBQ3BCLE9BQU9ILEtBQUtJLGFBQWE7SUFDekIsT0FBT0osS0FBS0ssZUFBZTtJQUMzQixPQUFPTCxLQUFLTSxzQkFBc0I7SUFFbEMsT0FBT047QUFDVCJ9