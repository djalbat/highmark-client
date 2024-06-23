"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateToVersion3", {
    enumerable: true,
    get: function() {
        return migrateToVersion3;
    }
});
var _versions = require("../versions");
function migrateToVersion3(json) {
    var version = _versions.VERSION_3, overlayHidden = false;
    json = Object.assign({}, json, {
        version: version,
        overlayHidden: overlayHidden
    });
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl8zIH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlVG9WZXJzaW9uMyhqc29uKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzMsXG4gICAgICAgIG92ZXJsYXlIaWRkZW4gPSBmYWxzZTtcblxuICBqc29uID0gT2JqZWN0LmFzc2lnbih7fSwganNvbiwge1xuICAgIHZlcnNpb24sXG4gICAgb3ZlcmxheUhpZGRlblxuICB9KTtcblxuICByZXR1cm4ganNvbjtcbn0iXSwibmFtZXMiOlsibWlncmF0ZVRvVmVyc2lvbjMiLCJqc29uIiwidmVyc2lvbiIsIlZFUlNJT05fMyIsIm92ZXJsYXlIaWRkZW4iLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O3dCQUZVO0FBRW5CLFNBQVNBLGtCQUFrQkMsSUFBSTtJQUNwQyxJQUFNQyxVQUFVQyxtQkFBUyxFQUNuQkMsZ0JBQWdCO0lBRXRCSCxPQUFPSSxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFHTCxNQUFNO1FBQzdCQyxTQUFBQTtRQUNBRSxlQUFBQTtJQUNGO0lBRUEsT0FBT0g7QUFDVCJ9