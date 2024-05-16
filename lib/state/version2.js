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
    migrateToVersion2: function() {
        return migrateToVersion2;
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
    var version = _versions.VERSION_1, menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 0.5), _obj), divisionsZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), fullScreenDivisionsZoom = (_obj2 = {}, _define_property(_obj2, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj2, _constants.LANDSCAPE_ORIENTATION, 1), _obj2), coloursInverted = false, nativeGesturesRestored = false, state = {
        version: version,
        menuZoom: menuZoom,
        divisionsZoom: divisionsZoom,
        coloursInverted: coloursInverted,
        nativeGesturesRestored: nativeGesturesRestored,
        fullScreenDivisionsZoom: fullScreenDivisionsZoom
    };
    return state;
}
function migrateToVersion2(json) {
    var overlayZoom = json.overlayZoom, fullScreenOverlayZoom = json.fullScreenOverlayZoom, version = _versions.VERSION_2, divisionsZoom = overlayZoom, fullScreenDivisionsZoom = fullScreenOverlayZoom; ///
    json = Object.assign({}, json, {
        version: version,
        divisionsZoom: divisionsZoom,
        fullScreenDivisionsZoom: fullScreenDivisionsZoom
    });
    delete json.overlayZoom;
    delete json.fullScreenOverlayZoom;
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtWRVJTSU9OXzEsIFZFUlNJT05fMn0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGUoKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzEsXG4gICAgICAgIG1lbnVab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDAuNVxuICAgICAgICB9LFxuICAgICAgICBkaXZpc2lvbnNab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb20gPSB7XG4gICAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgICBbTEFORFNDQVBFX09SSUVOVEFUSU9OXTogMVxuICAgICAgICB9LFxuICAgICAgICBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZSxcbiAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGZhbHNlLFxuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIG1lbnVab29tLFxuICAgICAgICAgIGRpdmlzaW9uc1pvb20sXG4gICAgICAgICAgY29sb3Vyc0ludmVydGVkLFxuICAgICAgICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQsXG4gICAgICAgICAgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb21cbiAgICAgICAgfTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlVG9WZXJzaW9uMihqc29uKSB7XG4gIGNvbnN0IHsgb3ZlcmxheVpvb20sIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSB9ID0ganNvbixcbiAgICAgICAgdmVyc2lvbiA9IFZFUlNJT05fMixcbiAgICAgICAgZGl2aXNpb25zWm9vbSA9IG92ZXJsYXlab29tLCAgLy8vXG4gICAgICAgIGZ1bGxTY3JlZW5EaXZpc2lvbnNab29tID0gZnVsbFNjcmVlbk92ZXJsYXlab29tOyAgLy8vXG5cbiAganNvbiA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24sIHtcbiAgICB2ZXJzaW9uLFxuICAgIGRpdmlzaW9uc1pvb20sXG4gICAgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb21cbiAgfSk7XG5cbiAgZGVsZXRlIGpzb24ub3ZlcmxheVpvb207XG4gIGRlbGV0ZSBqc29uLmZ1bGxTY3JlZW5PdmVybGF5Wm9vbTtcblxuICByZXR1cm4ganNvbjtcbn0iXSwibmFtZXMiOlsiY3JlYXRlU3RhdGUiLCJtaWdyYXRlVG9WZXJzaW9uMiIsInZlcnNpb24iLCJWRVJTSU9OXzEiLCJtZW51Wm9vbSIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwiTEFORFNDQVBFX09SSUVOVEFUSU9OIiwiZGl2aXNpb25zWm9vbSIsImZ1bGxTY3JlZW5EaXZpc2lvbnNab29tIiwiY29sb3Vyc0ludmVydGVkIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInN0YXRlIiwianNvbiIsIm92ZXJsYXlab29tIiwiZnVsbFNjcmVlbk92ZXJsYXlab29tIiwiVkVSU0lPTl8yIiwiT2JqZWN0IiwiYXNzaWduIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUtnQkEsV0FBVztlQUFYQTs7SUE0QkFDLGlCQUFpQjtlQUFqQkE7Ozt3QkEvQm1CO3lCQUN5Qjs7Ozs7Ozs7Ozs7Ozs7QUFFckQsU0FBU0Q7UUFFRyxNQUlLLE9BSVU7SUFUaEMsSUFBTUUsVUFBVUMsbUJBQVMsRUFDbkJDLFlBQVcsV0FDVCxpQkFEUyxNQUNSQywrQkFBb0IsRUFBRyxJQUN4QixpQkFGUyxNQUVSQyxnQ0FBcUIsRUFBRyxNQUZoQixPQUlYQyxpQkFBZ0IsWUFDZCxpQkFEYyxPQUNiRiwrQkFBb0IsRUFBRyxJQUN4QixpQkFGYyxPQUViQyxnQ0FBcUIsRUFBRyxJQUZYLFFBSWhCRSwyQkFBMEIsWUFDeEIsaUJBRHdCLE9BQ3ZCSCwrQkFBb0IsRUFBRyxJQUN4QixpQkFGd0IsT0FFdkJDLGdDQUFxQixFQUFHLElBRkQsUUFJMUJHLGtCQUFrQixPQUNsQkMseUJBQXlCLE9BQ3pCQyxRQUFRO1FBQ05ULFNBQUFBO1FBQ0FFLFVBQUFBO1FBQ0FHLGVBQUFBO1FBQ0FFLGlCQUFBQTtRQUNBQyx3QkFBQUE7UUFDQUYseUJBQUFBO0lBQ0Y7SUFFTixPQUFPRztBQUNUO0FBRU8sU0FBU1Ysa0JBQWtCVyxJQUFJO0lBQ3BDLElBQVFDLGNBQXVDRCxLQUF2Q0MsYUFBYUMsd0JBQTBCRixLQUExQkUsdUJBQ2ZaLFVBQVVhLG1CQUFTLEVBQ25CUixnQkFBZ0JNLGFBQ2hCTCwwQkFBMEJNLHVCQUF3QixHQUFHO0lBRTNERixPQUFPSSxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFHTCxNQUFNO1FBQzdCVixTQUFBQTtRQUNBSyxlQUFBQTtRQUNBQyx5QkFBQUE7SUFDRjtJQUVBLE9BQU9JLEtBQUtDLFdBQVc7SUFDdkIsT0FBT0QsS0FBS0UscUJBQXFCO0lBRWpDLE9BQU9GO0FBQ1QifQ==