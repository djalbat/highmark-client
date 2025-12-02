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
    get getScale () {
        return getScale;
    },
    get setOrientation () {
        return setOrientation;
    },
    get setScale () {
        return setScale;
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
function getScale() {
    stateFromPersistentState();
    var orientation = getOrientation();
    var scale;
    scale = state.scale;
    var orientedScale = scale[orientation]; ///
    scale = orientedScale; ///
    return scale;
}
function setScale(scale) {
    stateFromPersistentState();
    var orientation = getOrientation(), orientedScale = scale; ///
    scale = state.scale;
    Object.assign(scale, _define_property({}, orientation, orientedScale));
    stateToPersistentState();
}
function getOrientation() {
    var orientation = state.orientation;
    return orientation;
}
function setOrientation(orientation) {
    Object.assign(state, {
        orientation: orientation
    });
}
function stateToPersistentState() {
    var version = state.version, scale = state.scale, persistentState = {
        version: version,
        scale: scale
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ2V0UGVyc2lzdGVudFN0YXRlLCBzZXRQZXJzaXN0ZW50U3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGUoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKTtcblxuICBsZXQgc2NhbGU7XG5cbiAgKHsgc2NhbGUgfSA9IHN0YXRlKTtcblxuICBjb25zdCBvcmllbnRlZFNjYWxlID0gc2NhbGVbb3JpZW50YXRpb25dOyAvLy9cblxuICBzY2FsZSA9IG9yaWVudGVkU2NhbGU7ICAvLy9cblxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTY2FsZShzY2FsZSkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCksXG4gICAgICAgIG9yaWVudGVkU2NhbGUgPSBzY2FsZTsgIC8vL1xuXG4gICh7IHNjYWxlIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihzY2FsZSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkU2NhbGVcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgeyB2ZXJzaW9uLCBzY2FsZSB9ID0gc3RhdGUsXG4gICAgICAgIHBlcnNpc3RlbnRTdGF0ZSA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIHNjYWxlXG4gICAgICAgIH07XG5cbiAgc2V0UGVyc2lzdGVudFN0YXRlKHBlcnNpc3RlbnRTdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgcGVyc2lzdGVudFN0YXRlID0gZ2V0UGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwgcGVyc2lzdGVudFN0YXRlKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRPcmllbnRhdGlvbiIsImdldFNjYWxlIiwic2V0T3JpZW50YXRpb24iLCJzZXRTY2FsZSIsIm9yaWVudGF0aW9uIiwic3RhdGUiLCJzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUiLCJzY2FsZSIsIm9yaWVudGVkU2NhbGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZVRvUGVyc2lzdGVudFN0YXRlIiwidmVyc2lvbiIsInBlcnNpc3RlbnRTdGF0ZSIsInNldFBlcnNpc3RlbnRTdGF0ZSIsImdldFBlcnNpc3RlbnRTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0NnQkE7ZUFBQUE7O1FBL0JBQztlQUFBQTs7UUFxQ0FDO2VBQUFBOztRQXJCQUM7ZUFBQUE7Ozs0QkF2QnVDOzs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNQyxjQUFjLE1BQ2RDLFFBQVE7SUFDTkQsYUFBQUE7QUFDRjtBQUVDLFNBQVNIO0lBQ2RLO0lBRUEsSUFBTUYsY0FBY0o7SUFFcEIsSUFBSU87SUFFREEsUUFBVUYsTUFBVkU7SUFFSCxJQUFNQyxnQkFBZ0JELEtBQUssQ0FBQ0gsWUFBWSxFQUFFLEdBQUc7SUFFN0NHLFFBQVFDLGVBQWdCLEdBQUc7SUFFM0IsT0FBT0Q7QUFDVDtBQUVPLFNBQVNKLFNBQVNJLEtBQUs7SUFDNUJEO0lBRUEsSUFBTUYsY0FBY0osa0JBQ2RRLGdCQUFnQkQsT0FBUSxHQUFHO0lBRTlCQSxRQUFVRixNQUFWRTtJQUVIRSxPQUFPQyxNQUFNLENBQUNILE9BQ1oscUJBQUNILGFBQWNJO0lBR2pCRztBQUNGO0FBRU8sU0FBU1g7SUFDZCxJQUFNLEFBQUVJLGNBQWdCQyxNQUFoQkQ7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU0YsZUFBZUUsV0FBVztJQUN4Q0ssT0FBT0MsTUFBTSxDQUFDTCxPQUFPO1FBQ25CRCxhQUFBQTtJQUNGO0FBQ0Y7QUFFQSxTQUFTTztJQUNQLElBQVFDLFVBQW1CUCxNQUFuQk8sU0FBU0wsUUFBVUYsTUFBVkUsT0FDWE0sa0JBQWtCO1FBQ2hCRCxTQUFBQTtRQUNBTCxPQUFBQTtJQUNGO0lBRU5PLElBQUFBLGdDQUFrQixFQUFDRDtBQUNyQjtBQUVBLFNBQVNQO0lBQ1AsSUFBTU8sa0JBQWtCRSxJQUFBQSxnQ0FBa0I7SUFFMUNOLE9BQU9DLE1BQU0sQ0FBQ0wsT0FBT1E7QUFDdkIifQ==