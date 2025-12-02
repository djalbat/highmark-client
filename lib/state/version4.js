"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateToVersion4", {
    enumerable: true,
    get: function() {
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
function migrateToVersion4(json) {
    var _obj;
    var version = _versions.VERSION_4, zoom = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj);
    json = Object.assign({}, json, {
        version: version,
        zoom: zoom
    });
    delete json.menuZoom;
    delete json.divisionsZoom;
    delete json.coloursInverted;
    delete json.nativeGesturesRestored;
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uNC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl80IH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZVRvVmVyc2lvbjQoanNvbikge1xuICBjb25zdCB2ZXJzaW9uID0gVkVSU0lPTl80LFxuICAgICAgICB6b29tID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfTtcblxuICBqc29uID0gT2JqZWN0LmFzc2lnbih7fSwganNvbiwge1xuICAgIHZlcnNpb24sXG4gICAgem9vbVxuICB9KTtcblxuICBkZWxldGUganNvbi5tZW51Wm9vbVxuICBkZWxldGUganNvbi5kaXZpc2lvbnNab29tO1xuICBkZWxldGUganNvbi5jb2xvdXJzSW52ZXJ0ZWQ7XG4gIGRlbGV0ZSBqc29uLm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG5cbiAgcmV0dXJuIGpzb247XG59Il0sIm5hbWVzIjpbIm1pZ3JhdGVUb1ZlcnNpb240IiwianNvbiIsInZlcnNpb24iLCJWRVJTSU9OXzQiLCJ6b29tIiwiUE9SVFJBSVRfT1JJRU5UQVRJT04iLCJMQU5EU0NBUEVfT1JJRU5UQVRJT04iLCJPYmplY3QiLCJhc3NpZ24iLCJtZW51Wm9vbSIsImRpdmlzaW9uc1pvb20iLCJjb2xvdXJzSW52ZXJ0ZWQiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLZ0JBOzs7ZUFBQUE7Ozt3QkFIVTt5QkFDa0M7Ozs7Ozs7Ozs7Ozs7O0FBRXJELFNBQVNBLGtCQUFrQkMsSUFBSTtRQUV2QjtJQURiLElBQU1DLFVBQVVDLG1CQUFTLEVBQ25CQyxRQUFPLFdBQ0wsaUJBREssTUFDSkMsK0JBQW9CLEVBQUcsSUFDeEIsaUJBRkssTUFFSkMsZ0NBQXFCLEVBQUcsSUFGcEI7SUFLYkwsT0FBT00sT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR1AsTUFBTTtRQUM3QkMsU0FBQUE7UUFDQUUsTUFBQUE7SUFDRjtJQUVBLE9BQU9ILEtBQUtRLFFBQVE7SUFDcEIsT0FBT1IsS0FBS1MsYUFBYTtJQUN6QixPQUFPVCxLQUFLVSxlQUFlO0lBQzNCLE9BQU9WLEtBQUtXLHNCQUFzQjtJQUVsQyxPQUFPWDtBQUNUIn0=