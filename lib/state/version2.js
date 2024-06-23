"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateToVersion2", {
    enumerable: true,
    get: function() {
        return migrateToVersion2;
    }
});
var _versions = require("../versions");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl8yIH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlVG9WZXJzaW9uMihqc29uKSB7XG4gIGNvbnN0IHsgb3ZlcmxheVpvb20sIGZ1bGxTY3JlZW5PdmVybGF5Wm9vbSB9ID0ganNvbixcbiAgICAgICAgdmVyc2lvbiA9IFZFUlNJT05fMixcbiAgICAgICAgZGl2aXNpb25zWm9vbSA9IG92ZXJsYXlab29tLCAgLy8vXG4gICAgICAgIGZ1bGxTY3JlZW5EaXZpc2lvbnNab29tID0gZnVsbFNjcmVlbk92ZXJsYXlab29tOyAgLy8vXG5cbiAganNvbiA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24sIHtcbiAgICB2ZXJzaW9uLFxuICAgIGRpdmlzaW9uc1pvb20sXG4gICAgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb21cbiAgfSk7XG5cbiAgZGVsZXRlIGpzb24ub3ZlcmxheVpvb207XG4gIGRlbGV0ZSBqc29uLmZ1bGxTY3JlZW5PdmVybGF5Wm9vbTtcblxuICByZXR1cm4ganNvbjtcbn0iXSwibmFtZXMiOlsibWlncmF0ZVRvVmVyc2lvbjIiLCJqc29uIiwib3ZlcmxheVpvb20iLCJmdWxsU2NyZWVuT3ZlcmxheVpvb20iLCJ2ZXJzaW9uIiwiVkVSU0lPTl8yIiwiZGl2aXNpb25zWm9vbSIsImZ1bGxTY3JlZW5EaXZpc2lvbnNab29tIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJZ0JBOzs7ZUFBQUE7Ozt3QkFGVTtBQUVuQixTQUFTQSxrQkFBa0JDLElBQUk7SUFDcEMsSUFBUUMsY0FBdUNELEtBQXZDQyxhQUFhQyx3QkFBMEJGLEtBQTFCRSx1QkFDZkMsVUFBVUMsbUJBQVMsRUFDbkJDLGdCQUFnQkosYUFDaEJLLDBCQUEwQkosdUJBQXdCLEdBQUc7SUFFM0RGLE9BQU9PLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdSLE1BQU07UUFDN0JHLFNBQUFBO1FBQ0FFLGVBQUFBO1FBQ0FDLHlCQUFBQTtJQUNGO0lBRUEsT0FBT04sS0FBS0MsV0FBVztJQUN2QixPQUFPRCxLQUFLRSxxQkFBcUI7SUFFakMsT0FBT0Y7QUFDVCJ9