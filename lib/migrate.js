"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateState", {
    enumerable: true,
    get: function() {
        return migrateState;
    }
});
var _necessary = require("necessary");
var _version2 = require("./state/version2");
var _version3 = require("./state/version3");
var _versions = require("./versions");
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
var migrate = _necessary.versionUtilities.migrate;
function migrateState(state) {
    var _obj;
    var migrationMap = (_obj = {}, _define_property(_obj, _versions.VERSION_1, _version2.migrateToVersion2), _define_property(_obj, _versions.VERSION_2, _version3.migrateToVersion3), _obj), latestVersion = _versions.VERSION_3;
    state = migrate(state, migrationMap, latestVersion);
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWdyYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uMiB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb24yXCI7XG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uMyB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb24zXCI7XG5pbXBvcnQgeyBWRVJTSU9OXzEsIFZFUlNJT05fMiwgVkVSU0lPTl8zIH0gZnJvbSBcIi4vdmVyc2lvbnNcIjtcblxuY29uc3QgeyBtaWdyYXRlIH0gPSB2ZXJzaW9uVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZVN0YXRlKHN0YXRlKSB7XG4gIGNvbnN0IG1pZ3JhdGlvbk1hcCA9IHtcbiAgICAgICAgICBbVkVSU0lPTl8xXTogbWlncmF0ZVRvVmVyc2lvbjIsXG4gICAgICAgICAgW1ZFUlNJT05fMl06IG1pZ3JhdGVUb1ZlcnNpb24zXG4gICAgICAgIH0sXG4gICAgICAgIGxhdGVzdFZlcnNpb24gPSBWRVJTSU9OXzM7XG5cbiAgc3RhdGUgPSBtaWdyYXRlKHN0YXRlLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJtaWdyYXRlU3RhdGUiLCJtaWdyYXRlIiwidmVyc2lvblV0aWxpdGllcyIsInN0YXRlIiwibWlncmF0aW9uTWFwIiwiVkVSU0lPTl8xIiwibWlncmF0ZVRvVmVyc2lvbjIiLCJWRVJTSU9OXzIiLCJtaWdyYXRlVG9WZXJzaW9uMyIsImxhdGVzdFZlcnNpb24iLCJWRVJTSU9OXzMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVnQkE7OztlQUFBQTs7O3lCQVJpQjt3QkFFQzt3QkFDQTt3QkFDYzs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsSUFBTSxBQUFFQyxVQUFZQywyQkFBZ0IsQ0FBNUJEO0FBRUQsU0FBU0QsYUFBYUcsS0FBSztRQUNYO0lBQXJCLElBQU1DLGdCQUFlLFdBQ2IsaUJBRGEsTUFDWkMsbUJBQVMsRUFBR0MsMkJBQWlCLEdBQzlCLGlCQUZhLE1BRVpDLG1CQUFTLEVBQUdDLDJCQUFpQixHQUZqQixPQUlmQyxnQkFBZ0JDLG1CQUFTO0lBRS9CUCxRQUFRRixRQUFRRSxPQUFPQyxjQUFjSztJQUVyQyxPQUFPTjtBQUNUIn0=