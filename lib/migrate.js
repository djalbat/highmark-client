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
    var migrationMap = _define_property({}, _versions.VERSION_1, _version2.migrateToVersion2), latestVersion = _versions.VERSION_2;
    state = migrate(state, migrationMap, latestVersion);
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWdyYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uMiB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb24yXCI7XG5pbXBvcnQgeyBWRVJTSU9OXzEsIFZFUlNJT05fMiB9IGZyb20gXCIuL3ZlcnNpb25zXCI7XG5cbmNvbnN0IHsgbWlncmF0ZSB9ID0gdmVyc2lvblV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVTdGF0ZShzdGF0ZSkge1xuICBjb25zdCBtaWdyYXRpb25NYXAgPSB7XG4gICAgICAgICAgW1ZFUlNJT05fMV06IG1pZ3JhdGVUb1ZlcnNpb24yXG4gICAgICAgIH0sXG4gICAgICAgIGxhdGVzdFZlcnNpb24gPSBWRVJTSU9OXzI7XG5cbiAgc3RhdGUgPSBtaWdyYXRlKHN0YXRlLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJtaWdyYXRlU3RhdGUiLCJtaWdyYXRlIiwidmVyc2lvblV0aWxpdGllcyIsInN0YXRlIiwibWlncmF0aW9uTWFwIiwiVkVSU0lPTl8xIiwibWlncmF0ZVRvVmVyc2lvbjIiLCJsYXRlc3RWZXJzaW9uIiwiVkVSU0lPTl8yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNnQkE7OztlQUFBQTs7O3lCQVBpQjt3QkFFQzt3QkFDRzs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQyxVQUFZQywyQkFBZ0IsQ0FBNUJEO0FBRUQsU0FBU0QsYUFBYUcsS0FBSztJQUNoQyxJQUFNQyxlQUNFLHFCQUFDQyxtQkFBUyxFQUFHQywyQkFBaUIsR0FFaENDLGdCQUFnQkMsbUJBQVM7SUFFL0JMLFFBQVFGLFFBQVFFLE9BQU9DLGNBQWNHO0lBRXJDLE9BQU9KO0FBQ1QifQ==