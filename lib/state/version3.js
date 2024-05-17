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
    var version = _versions.VERSION_3, menuZoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 0.5), _obj), divisionsZoom = (_obj1 = {}, _define_property(_obj1, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj1, _constants.LANDSCAPE_ORIENTATION, 1), _obj1), fullScreenDivisionsZoom = (_obj2 = {}, _define_property(_obj2, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj2, _constants.LANDSCAPE_ORIENTATION, 1), _obj2), overlayHidden = false, coloursInverted = false, nativeGesturesRestored = false, state = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl8zIH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGUoKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzMsXG4gICAgICAgIG1lbnVab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDAuNVxuICAgICAgICB9LFxuICAgICAgICBkaXZpc2lvbnNab29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb20gPSB7XG4gICAgICAgICAgW1BPUlRSQUlUX09SSUVOVEFUSU9OXTogMSxcbiAgICAgICAgICBbTEFORFNDQVBFX09SSUVOVEFUSU9OXTogMVxuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5SGlkZGVuID0gZmFsc2UsXG4gICAgICAgIGNvbG91cnNJbnZlcnRlZCA9IGZhbHNlLFxuICAgICAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gZmFsc2UsXG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgbWVudVpvb20sXG4gICAgICAgICAgb3ZlcmxheUhpZGRlbixcbiAgICAgICAgICBkaXZpc2lvbnNab29tLFxuICAgICAgICAgIGNvbG91cnNJbnZlcnRlZCxcbiAgICAgICAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkLFxuICAgICAgICAgIGZ1bGxTY3JlZW5EaXZpc2lvbnNab29tXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZVRvVmVyc2lvbjMoanNvbikge1xuICBjb25zdCB2ZXJzaW9uID0gVkVSU0lPTl8zLFxuICAgICAgICBvdmVybGF5SGlkZGVuID0gZmFsc2U7XG5cbiAganNvbiA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24sIHtcbiAgICB2ZXJzaW9uLFxuICAgIG92ZXJsYXlIaWRkZW5cbiAgfSk7XG5cbiAgcmV0dXJuIGpzb247XG59Il0sIm5hbWVzIjpbImNyZWF0ZVN0YXRlIiwibWlncmF0ZVRvVmVyc2lvbjMiLCJ2ZXJzaW9uIiwiVkVSU0lPTl8zIiwibWVudVpvb20iLCJQT1JUUkFJVF9PUklFTlRBVElPTiIsIkxBTkRTQ0FQRV9PUklFTlRBVElPTiIsImRpdmlzaW9uc1pvb20iLCJmdWxsU2NyZWVuRGl2aXNpb25zWm9vbSIsIm92ZXJsYXlIaWRkZW4iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic3RhdGUiLCJqc29uIiwiT2JqZWN0IiwiYXNzaWduIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFLZ0JBLFdBQVc7ZUFBWEE7O0lBOEJBQyxpQkFBaUI7ZUFBakJBOzs7d0JBakNVO3lCQUNrQzs7Ozs7Ozs7Ozs7Ozs7QUFFckQsU0FBU0Q7UUFFRyxNQUlLLE9BSVU7SUFUaEMsSUFBTUUsVUFBVUMsbUJBQVMsRUFDbkJDLFlBQVcsV0FDVCxpQkFEUyxNQUNSQywrQkFBb0IsRUFBRyxJQUN4QixpQkFGUyxNQUVSQyxnQ0FBcUIsRUFBRyxNQUZoQixPQUlYQyxpQkFBZ0IsWUFDZCxpQkFEYyxPQUNiRiwrQkFBb0IsRUFBRyxJQUN4QixpQkFGYyxPQUViQyxnQ0FBcUIsRUFBRyxJQUZYLFFBSWhCRSwyQkFBMEIsWUFDeEIsaUJBRHdCLE9BQ3ZCSCwrQkFBb0IsRUFBRyxJQUN4QixpQkFGd0IsT0FFdkJDLGdDQUFxQixFQUFHLElBRkQsUUFJMUJHLGdCQUFnQixPQUNoQkMsa0JBQWtCLE9BQ2xCQyx5QkFBeUIsT0FDekJDLFFBQVE7UUFDTlYsU0FBQUE7UUFDQUUsVUFBQUE7UUFDQUssZUFBQUE7UUFDQUYsZUFBQUE7UUFDQUcsaUJBQUFBO1FBQ0FDLHdCQUFBQTtRQUNBSCx5QkFBQUE7SUFDRjtJQUVOLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTWCxrQkFBa0JZLElBQUk7SUFDcEMsSUFBTVgsVUFBVUMsbUJBQVMsRUFDbkJNLGdCQUFnQjtJQUV0QkksT0FBT0MsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR0YsTUFBTTtRQUM3QlgsU0FBQUE7UUFDQU8sZUFBQUE7SUFDRjtJQUVBLE9BQU9JO0FBQ1QifQ==