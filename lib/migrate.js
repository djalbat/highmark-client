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
var _version4 = require("./state/version4");
var _version5 = require("./state/version5");
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
    var migrationMap = (_obj = {}, _define_property(_obj, _versions.VERSION_1, _version2.migrateToVersion2), _define_property(_obj, _versions.VERSION_2, _version3.migrateToVersion3), _define_property(_obj, _versions.VERSION_3, _version4.migrateToVersion4), _define_property(_obj, _versions.VERSION_4, _version5.migrateToVersion5), _obj), latestVersion = _versions.VERSION_5;
    state = migrate(state, migrationMap, latestVersion);
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWdyYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uMiB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb24yXCI7XG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uMyB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb24zXCI7XG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uNCB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb240XCI7XG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uNSB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb241XCI7XG5pbXBvcnQgeyBWRVJTSU9OXzEsIFZFUlNJT05fMiwgVkVSU0lPTl8zLCBWRVJTSU9OXzQsIFZFUlNJT05fNSB9IGZyb20gXCIuL3ZlcnNpb25zXCI7XG5cbmNvbnN0IHsgbWlncmF0ZSB9ID0gdmVyc2lvblV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVTdGF0ZShzdGF0ZSkge1xuICBjb25zdCBtaWdyYXRpb25NYXAgPSB7XG4gICAgICAgICAgW1ZFUlNJT05fMV06IG1pZ3JhdGVUb1ZlcnNpb24yLFxuICAgICAgICAgIFtWRVJTSU9OXzJdOiBtaWdyYXRlVG9WZXJzaW9uMyxcbiAgICAgICAgICBbVkVSU0lPTl8zXTogbWlncmF0ZVRvVmVyc2lvbjQsXG4gICAgICAgICAgW1ZFUlNJT05fNF06IG1pZ3JhdGVUb1ZlcnNpb241XG4gICAgICAgIH0sXG4gICAgICAgIGxhdGVzdFZlcnNpb24gPSBWRVJTSU9OXzU7XG5cbiAgc3RhdGUgPSBtaWdyYXRlKHN0YXRlLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJtaWdyYXRlU3RhdGUiLCJtaWdyYXRlIiwidmVyc2lvblV0aWxpdGllcyIsInN0YXRlIiwibWlncmF0aW9uTWFwIiwiVkVSU0lPTl8xIiwibWlncmF0ZVRvVmVyc2lvbjIiLCJWRVJTSU9OXzIiLCJtaWdyYXRlVG9WZXJzaW9uMyIsIlZFUlNJT05fMyIsIm1pZ3JhdGVUb1ZlcnNpb240IiwiVkVSU0lPTl80IiwibWlncmF0ZVRvVmVyc2lvbjUiLCJsYXRlc3RWZXJzaW9uIiwiVkVSU0lPTl81Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZZ0JBOzs7ZUFBQUE7Ozt5QkFWaUI7d0JBRUM7d0JBQ0E7d0JBQ0E7d0JBQ0E7d0JBQ29DOzs7Ozs7Ozs7Ozs7OztBQUV0RSxJQUFNLEFBQUVDLFVBQVlDLDJCQUFnQixDQUE1QkQ7QUFFRCxTQUFTRCxhQUFhRyxLQUFLO1FBQ1g7SUFBckIsSUFBTUMsZ0JBQWUsV0FDYixpQkFEYSxNQUNaQyxtQkFBUyxFQUFHQywyQkFBaUIsR0FDOUIsaUJBRmEsTUFFWkMsbUJBQVMsRUFBR0MsMkJBQWlCLEdBQzlCLGlCQUhhLE1BR1pDLG1CQUFTLEVBQUdDLDJCQUFpQixHQUM5QixpQkFKYSxNQUlaQyxtQkFBUyxFQUFHQywyQkFBaUIsR0FKakIsT0FNZkMsZ0JBQWdCQyxtQkFBUztJQUUvQlgsUUFBUUYsUUFBUUUsT0FBT0MsY0FBY1M7SUFFckMsT0FBT1Y7QUFDVCJ9