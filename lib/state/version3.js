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
    var version = _versions.VERSION_3;
    json = Object.assign({}, json, {
        version: version
    });
    delete json.fullScreenDivisionsZoom;
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl8zIH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlVG9WZXJzaW9uMyhqc29uKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzM7XG5cbiAganNvbiA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24sIHtcbiAgICB2ZXJzaW9uXG4gIH0pO1xuXG4gIGRlbGV0ZSBqc29uLmZ1bGxTY3JlZW5EaXZpc2lvbnNab29tO1xuXG4gIHJldHVybiBqc29uO1xufSJdLCJuYW1lcyI6WyJtaWdyYXRlVG9WZXJzaW9uMyIsImpzb24iLCJ2ZXJzaW9uIiwiVkVSU0lPTl8zIiwiT2JqZWN0IiwiYXNzaWduIiwiZnVsbFNjcmVlbkRpdmlzaW9uc1pvb20iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O3dCQUZVO0FBRW5CLFNBQVNBLGtCQUFrQkMsSUFBSTtJQUNwQyxJQUFNQyxVQUFVQyxtQkFBUztJQUV6QkYsT0FBT0csT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR0osTUFBTTtRQUM3QkMsU0FBQUE7SUFDRjtJQUVBLE9BQU9ELEtBQUtLLHVCQUF1QjtJQUVuQyxPQUFPTDtBQUNUIn0=