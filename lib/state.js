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
    get getOrientation () {
        return getOrientation;
    },
    get getZoom () {
        return getZoom;
    },
    get setOrientation () {
        return setOrientation;
    },
    get setZoom () {
        return setZoom;
    }
});
var _localStorage = require("./localStorage");
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
var orientation = null, state = {
    orientation: orientation
};
function getOrientation() {
    var orientation = state.orientation;
    return orientation;
}
function setOrientation(orientation) {
    Object.assign(state, {
        orientation: orientation
    });
}
function getZoom() {
    stateFromPersistentState();
    var orientation = getOrientation();
    var zoom;
    zoom = state.zoom;
    var orientedZoom = zoom[orientation]; ///
    zoom = orientedZoom; ///
    return zoom;
}
function setZoom(zoom) {
    stateFromPersistentState();
    var orientation = getOrientation(), orientedZoom = zoom; ///
    zoom = state.zoom;
    Object.assign(zoom, _define_property({}, orientation, orientedZoom));
    stateToPersistentState();
}
function stateToPersistentState() {
    var version = state.version, zoom = state.zoom, persistentState = {
        version: version,
        zoom: zoom
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ2V0UGVyc2lzdGVudFN0YXRlLCBzZXRQZXJzaXN0ZW50U3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKTtcblxuICBsZXQgem9vbTtcblxuICAoeyB6b29tIH0gPSBzdGF0ZSk7XG5cbiAgY29uc3Qgb3JpZW50ZWRab29tID0gem9vbVtvcmllbnRhdGlvbl07IC8vL1xuXG4gIHpvb20gPSBvcmllbnRlZFpvb207ICAvLy9cblxuICByZXR1cm4gem9vbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFpvb20oem9vbSkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCksXG4gICAgICAgIG9yaWVudGVkWm9vbSA9IHpvb207ICAvLy9cblxuICAoeyB6b29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbih6b29tLCB7XG4gICAgW29yaWVudGF0aW9uXTogb3JpZW50ZWRab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgeyB2ZXJzaW9uLCB6b29tIH0gPSBzdGF0ZSxcbiAgICAgICAgcGVyc2lzdGVudFN0YXRlID0ge1xuICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgem9vbVxuICAgICAgICB9O1xuXG4gIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZSA9IGdldFBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBlcnNpc3RlbnRTdGF0ZSk7XG59XG4iXSwibmFtZXMiOlsiZ2V0T3JpZW50YXRpb24iLCJnZXRab29tIiwic2V0T3JpZW50YXRpb24iLCJzZXRab29tIiwib3JpZW50YXRpb24iLCJzdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSIsInpvb20iLCJvcmllbnRlZFpvb20iLCJzdGF0ZVRvUGVyc2lzdGVudFN0YXRlIiwidmVyc2lvbiIsInBlcnNpc3RlbnRTdGF0ZSIsInNldFBlcnNpc3RlbnRTdGF0ZSIsImdldFBlcnNpc3RlbnRTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBU2dCQTtlQUFBQTs7UUFZQUM7ZUFBQUE7O1FBTkFDO2VBQUFBOztRQXNCQUM7ZUFBQUE7Ozs0QkFuQ3VDOzs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNQyxjQUFjLE1BQ2RDLFFBQVE7SUFDTkQsYUFBQUE7QUFDRjtBQUVDLFNBQVNKO0lBQ2QsSUFBTSxBQUFFSSxjQUFnQkMsTUFBaEJEO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNGLGVBQWVFLFdBQVc7SUFDeENFLE9BQU9DLE1BQU0sQ0FBQ0YsT0FBTztRQUNuQkQsYUFBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU0g7SUFDZE87SUFFQSxJQUFNSixjQUFjSjtJQUVwQixJQUFJUztJQUVEQSxPQUFTSixNQUFUSTtJQUVILElBQU1DLGVBQWVELElBQUksQ0FBQ0wsWUFBWSxFQUFFLEdBQUc7SUFFM0NLLE9BQU9DLGNBQWUsR0FBRztJQUV6QixPQUFPRDtBQUNUO0FBRU8sU0FBU04sUUFBUU0sSUFBSTtJQUMxQkQ7SUFFQSxJQUFNSixjQUFjSixrQkFDZFUsZUFBZUQsTUFBTyxHQUFHO0lBRTVCQSxPQUFTSixNQUFUSTtJQUVISCxPQUFPQyxNQUFNLENBQUNFLE1BQ1oscUJBQUNMLGFBQWNNO0lBR2pCQztBQUNGO0FBRUEsU0FBU0E7SUFDUCxJQUFRQyxVQUFrQlAsTUFBbEJPLFNBQVNILE9BQVNKLE1BQVRJLE1BQ1hJLGtCQUFrQjtRQUNoQkQsU0FBQUE7UUFDQUgsTUFBQUE7SUFDRjtJQUVOSyxJQUFBQSxnQ0FBa0IsRUFBQ0Q7QUFDckI7QUFFQSxTQUFTTDtJQUNQLElBQU1LLGtCQUFrQkUsSUFBQUEsZ0NBQWtCO0lBRTFDVCxPQUFPQyxNQUFNLENBQUNGLE9BQU9RO0FBQ3ZCIn0=