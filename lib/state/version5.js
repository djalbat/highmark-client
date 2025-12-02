"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createState () {
        return createState;
    },
    get migrateToVersion5 () {
        return migrateToVersion5;
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
    var _obj;
    var version = _versions.VERSION_5, scale = (_obj = {}, _define_property(_obj, _constants.PORTRAIT_ORIENTATION, 1), _define_property(_obj, _constants.LANDSCAPE_ORIENTATION, 1), _obj), state = {
        version: version,
        scale: scale
    };
    return state;
}
function migrateToVersion5(json) {
    var version = _versions.VERSION_5, zoom = json.zoom, scale = zoom;
    json = Object.assign({}, json, {
        version: version,
        scale: scale
    });
    delete json.zoom;
    return json;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0ZS92ZXJzaW9uNS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVkVSU0lPTl81IH0gZnJvbSBcIi4uL3ZlcnNpb25zXCI7XG5pbXBvcnQgeyBQT1JUUkFJVF9PUklFTlRBVElPTiwgTEFORFNDQVBFX09SSUVOVEFUSU9OIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RhdGUoKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBWRVJTSU9OXzUsXG4gICAgICAgIHNjYWxlID0ge1xuICAgICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IDEsXG4gICAgICAgICAgW0xBTkRTQ0FQRV9PUklFTlRBVElPTl06IDFcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICBzY2FsZVxuICAgICAgICB9O1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pZ3JhdGVUb1ZlcnNpb241KGpzb24pIHtcbiAgY29uc3QgdmVyc2lvbiA9IFZFUlNJT05fNSxcbiAgICAgICAgeyB6b29tIH0gPSBqc29uLFxuICAgICAgICBzY2FsZSA9IHpvb207XG5cbiAganNvbiA9IE9iamVjdC5hc3NpZ24oe30sIGpzb24sIHtcbiAgICB2ZXJzaW9uLFxuICAgIHNjYWxlXG4gIH0pO1xuXG4gIGRlbGV0ZSBqc29uLnpvb21cblxuICByZXR1cm4ganNvbjtcbn0iXSwibmFtZXMiOlsiY3JlYXRlU3RhdGUiLCJtaWdyYXRlVG9WZXJzaW9uNSIsInZlcnNpb24iLCJWRVJTSU9OXzUiLCJzY2FsZSIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwiTEFORFNDQVBFX09SSUVOVEFUSU9OIiwic3RhdGUiLCJqc29uIiwiem9vbSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBS2dCQTtlQUFBQTs7UUFjQUM7ZUFBQUE7Ozt3QkFqQlU7eUJBQ2tDOzs7Ozs7Ozs7Ozs7OztBQUVyRCxTQUFTRDtRQUVBO0lBRGQsSUFBTUUsVUFBVUMsbUJBQVMsRUFDbkJDLFNBQVEsV0FDTixpQkFETSxNQUNMQywrQkFBb0IsRUFBRyxJQUN4QixpQkFGTSxNQUVMQyxnQ0FBcUIsRUFBRyxJQUZuQixPQUlSQyxRQUFRO1FBQ05MLFNBQUFBO1FBQ0FFLE9BQUFBO0lBQ0Y7SUFFTixPQUFPRztBQUNUO0FBRU8sU0FBU04sa0JBQWtCTyxJQUFJO0lBQ3BDLElBQU1OLFVBQVVDLG1CQUFTLEVBQ25CLEFBQUVNLE9BQVNELEtBQVRDLE1BQ0ZMLFFBQVFLO0lBRWRELE9BQU9FLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdILE1BQU07UUFDN0JOLFNBQUFBO1FBQ0FFLE9BQUFBO0lBQ0Y7SUFFQSxPQUFPSSxLQUFLQyxJQUFJO0lBRWhCLE9BQU9EO0FBQ1QifQ==