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
    migrateToVersion4: function() {
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
    var _obj, _obj1;
    var version = _versions.VERSION_4, menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), divisionsZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), overlayHidden = false, coloursInverted = false, nativeGesturesRestored = false, state = {
        version: version,
        menuZoom: menuZoom,
        overlayHidden: overlayHidden,
        divisionsZoom: divisionsZoom,
        coloursInverted: coloursInverted,
        nativeGesturesRestored: nativeGesturesRestored
    };
    return state;
}
function migrateToVersion4(json) {
    var version = _versions.VERSION_4;
    json = Object.assign({}, json, {
        version: version
    });
    delete json.fullScreenDivisionsZoom;
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uNC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl80IH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGUoKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzQsXG4gICAgICAgIG1lbnVab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfSxcbiAgICAgICAgZGl2aXNpb25zWm9vbSA9IHtcbiAgICAgICAgICBbUE9SVFJBSVRfT1JJRU5UQVRJT05dOiAxLFxuICAgICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiAxXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXlIaWRkZW4gPSBmYWxzZSxcbiAgICAgICAgY29sb3Vyc0ludmVydGVkID0gZmFsc2UsXG4gICAgICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBmYWxzZSxcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICBtZW51Wm9vbSxcbiAgICAgICAgICBvdmVybGF5SGlkZGVuLFxuICAgICAgICAgIGRpdmlzaW9uc1pvb20sXG4gICAgICAgICAgY29sb3Vyc0ludmVydGVkLFxuICAgICAgICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWRcbiAgICAgICAgfTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlVG9WZXJzaW9uNChqc29uKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzQ7XG5cbiAganNvbiA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24sIHtcbiAgICB2ZXJzaW9uXG4gIH0pO1xuXG4gIGRlbGV0ZSBqc29uLmZ1bGxTY3JlZW5EaXZpc2lvbnNab29tO1xuXG4gIHJldHVybiBqc29uO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVTdGF0ZSIsIm1pZ3JhdGVUb1ZlcnNpb240IiwidmVyc2lvbiIsIlZFUlNJT05fNCIsIm1lbnVab29tIiwiUE9SVFJBSVRfT1JJRU5UQVRJT04iLCJMQU5EU0NBUEVfT1JJRU5UQVRJT04iLCJkaXZpc2lvbnNab29tIiwib3ZlcmxheUhpZGRlbiIsImNvbG91cnNJbnZlcnRlZCIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzdGF0ZSIsImpzb24iLCJPYmplY3QiLCJhc3NpZ24iLCJmdWxsU2NyZWVuRGl2aXNpb25zWm9vbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBS2dCQSxXQUFXO2VBQVhBOztJQXlCQUMsaUJBQWlCO2VBQWpCQTs7O3dCQTVCVTt5QkFDa0M7Ozs7Ozs7Ozs7Ozs7O0FBRXJELFNBQVNEO1FBRUcsTUFJSztJQUx0QixJQUFNRSxVQUFVQyxtQkFBUyxFQUNuQkMsWUFBVyxXQUNULGlCQURTLE1BQ1JDLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZTLE1BRVJDLGdDQUFxQixFQUFHLElBRmhCLE9BSVhDLGlCQUFnQixZQUNkLGlCQURjLE9BQ2JGLCtCQUFvQixFQUFHLElBQ3hCLGlCQUZjLE9BRWJDLGdDQUFxQixFQUFHLElBRlgsUUFJaEJFLGdCQUFnQixPQUNoQkMsa0JBQWtCLE9BQ2xCQyx5QkFBeUIsT0FDekJDLFFBQVE7UUFDTlQsU0FBQUE7UUFDQUUsVUFBQUE7UUFDQUksZUFBQUE7UUFDQUQsZUFBQUE7UUFDQUUsaUJBQUFBO1FBQ0FDLHdCQUFBQTtJQUNGO0lBRU4sT0FBT0M7QUFDVDtBQUVPLFNBQVNWLGtCQUFrQlcsSUFBSTtJQUNwQyxJQUFNVixVQUFVQyxtQkFBUztJQUV6QlMsT0FBT0MsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR0YsTUFBTTtRQUM3QlYsU0FBQUE7SUFDRjtJQUVBLE9BQU9VLEtBQUtHLHVCQUF1QjtJQUVuQyxPQUFPSDtBQUNUIn0=