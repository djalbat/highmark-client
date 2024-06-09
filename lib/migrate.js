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
    var migrationMap = (_obj = {}, _define_property(_obj, _versions.VERSION_1, _version2.migrateToVersion2), _define_property(_obj, _versions.VERSION_2, _version3.migrateToVersion3), _define_property(_obj, _versions.VERSION_3, _version4.migrateToVersion4), _obj), latestVersion = _versions.VERSION_4;
    state = migrate(state, migrationMap, latestVersion);
    return state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWdyYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJzaW9uVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uMiB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb24yXCI7XG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uMyB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb24zXCI7XG5pbXBvcnQgeyBtaWdyYXRlVG9WZXJzaW9uNCB9IGZyb20gXCIuL3N0YXRlL3ZlcnNpb240XCI7XG5pbXBvcnQgeyBWRVJTSU9OXzEsIFZFUlNJT05fMiwgVkVSU0lPTl8zLCBWRVJTSU9OXzQgfSBmcm9tIFwiLi92ZXJzaW9uc1wiO1xuXG5jb25zdCB7IG1pZ3JhdGUgfSA9IHZlcnNpb25VdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlU3RhdGUoc3RhdGUpIHtcbiAgY29uc3QgbWlncmF0aW9uTWFwID0ge1xuICAgICAgICAgIFtWRVJTSU9OXzFdOiBtaWdyYXRlVG9WZXJzaW9uMixcbiAgICAgICAgICBbVkVSU0lPTl8yXTogbWlncmF0ZVRvVmVyc2lvbjMsXG4gICAgICAgICAgW1ZFUlNJT05fM106IG1pZ3JhdGVUb1ZlcnNpb240XG4gICAgICAgIH0sXG4gICAgICAgIGxhdGVzdFZlcnNpb24gPSBWRVJTSU9OXzQ7XG5cbiAgc3RhdGUgPSBtaWdyYXRlKHN0YXRlLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdLCJuYW1lcyI6WyJtaWdyYXRlU3RhdGUiLCJtaWdyYXRlIiwidmVyc2lvblV0aWxpdGllcyIsInN0YXRlIiwibWlncmF0aW9uTWFwIiwiVkVSU0lPTl8xIiwibWlncmF0ZVRvVmVyc2lvbjIiLCJWRVJTSU9OXzIiLCJtaWdyYXRlVG9WZXJzaW9uMyIsIlZFUlNJT05fMyIsIm1pZ3JhdGVUb1ZlcnNpb240IiwibGF0ZXN0VmVyc2lvbiIsIlZFUlNJT05fNCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXZ0JBOzs7ZUFBQUE7Ozt5QkFUaUI7d0JBRUM7d0JBQ0E7d0JBQ0E7d0JBQ3lCOzs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFNLEFBQUVDLFVBQVlDLDJCQUFnQixDQUE1QkQ7QUFFRCxTQUFTRCxhQUFhRyxLQUFLO1FBQ1g7SUFBckIsSUFBTUMsZ0JBQWUsV0FDYixpQkFEYSxNQUNaQyxtQkFBUyxFQUFHQywyQkFBaUIsR0FDOUIsaUJBRmEsTUFFWkMsbUJBQVMsRUFBR0MsMkJBQWlCLEdBQzlCLGlCQUhhLE1BR1pDLG1CQUFTLEVBQUdDLDJCQUFpQixHQUhqQixPQUtmQyxnQkFBZ0JDLG1CQUFTO0lBRS9CVCxRQUFRRixRQUFRRSxPQUFPQyxjQUFjTztJQUVyQyxPQUFPUjtBQUNUIn0=