"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    areColoursInverted: function() {
        return areColoursInverted;
    },
    areNativeGesturesRestored: function() {
        return areNativeGesturesRestored;
    },
    getDivisionsZoom: function() {
        return getDivisionsZoom;
    },
    getMenuZoom: function() {
        return getMenuZoom;
    },
    getOrientation: function() {
        return getOrientation;
    },
    isOverlayHidden: function() {
        return isOverlayHidden;
    },
    setColoursInverted: function() {
        return setColoursInverted;
    },
    setDivisionsZoom: function() {
        return setDivisionsZoom;
    },
    setMenuZoom: function() {
        return setMenuZoom;
    },
    setNativeGesturesRestored: function() {
        return setNativeGesturesRestored;
    },
    setOrientation: function() {
        return setOrientation;
    },
    setOverlayHidden: function() {
        return setOverlayHidden;
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
function getMenuZoom() {
    stateFromPersistentState();
    var menuZoom;
    menuZoom = state.menuZoom;
    var orientation = state.orientation, orientedMenuZoom = menuZoom[orientation]; ///
    menuZoom = orientedMenuZoom; ///
    return menuZoom;
}
function setMenuZoom(menuZoom) {
    stateFromPersistentState();
    var orientation = state.orientation, orientedMenuZoom = menuZoom; ///
    menuZoom = state.menuZoom;
    Object.assign(menuZoom, _define_property({}, orientation, orientedMenuZoom));
    stateToPersistentState();
}
function isOverlayHidden() {
    stateFromPersistentState();
    var overlayHidden = state.overlayHidden;
    return overlayHidden;
}
function setOverlayHidden(overlayHidden) {
    stateFromPersistentState();
    Object.assign(state, {
        overlayHidden: overlayHidden
    });
    stateToPersistentState();
}
function getDivisionsZoom() {
    stateFromPersistentState();
    var orientation = getOrientation();
    var divisionsZoom;
    divisionsZoom = state.divisionsZoom;
    var orientedDivisionsZoom = divisionsZoom[orientation]; ///
    divisionsZoom = orientedDivisionsZoom; ///
    return divisionsZoom;
}
function setDivisionsZoom(divisionsZoom) {
    stateFromPersistentState();
    var orientation = getOrientation(), orientedDivisionsZoom = divisionsZoom; ///
    divisionsZoom = state.divisionsZoom;
    Object.assign(divisionsZoom, _define_property({}, orientation, orientedDivisionsZoom));
    stateToPersistentState();
}
function areNativeGesturesRestored() {
    stateFromPersistentState();
    var nativeGesturesRestored = state.nativeGesturesRestored;
    return nativeGesturesRestored;
}
function setNativeGesturesRestored(nativeGesturesRestored) {
    stateFromPersistentState();
    Object.assign(state, {
        nativeGesturesRestored: nativeGesturesRestored
    });
    stateToPersistentState();
}
function areColoursInverted() {
    stateFromPersistentState();
    var coloursInverted = state.coloursInverted;
    return coloursInverted;
}
function setColoursInverted(coloursInverted) {
    stateFromPersistentState();
    Object.assign(state, {
        coloursInverted: coloursInverted
    });
    stateToPersistentState();
}
function stateToPersistentState() {
    var version = state.version, menuZoom = state.menuZoom, overlayHidden = state.overlayHidden, divisionsZoom = state.divisionsZoom, coloursInverted = state.coloursInverted, nativeGesturesRestored = state.nativeGesturesRestored, persistentState = {
        version: version,
        menuZoom: menuZoom,
        overlayHidden: overlayHidden,
        divisionsZoom: divisionsZoom,
        coloursInverted: coloursInverted,
        nativeGesturesRestored: nativeGesturesRestored
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ2V0UGVyc2lzdGVudFN0YXRlLCBzZXRQZXJzaXN0ZW50U3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudVpvb207XG5cbiAgKHsgbWVudVpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51Wm9vbSA9IG1lbnVab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudVpvb20gPSBvcmllbnRlZE1lbnVab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudVpvb20obWVudVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudVpvb20gPSBtZW51Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudVpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPdmVybGF5SGlkZGVuKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IG92ZXJsYXlIaWRkZW4gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvdmVybGF5SGlkZGVuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T3ZlcmxheUhpZGRlbihvdmVybGF5SGlkZGVuKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvdmVybGF5SGlkZGVuXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdmlzaW9uc1pvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKTtcblxuICBsZXQgZGl2aXNpb25zWm9vbTtcblxuICAoeyBkaXZpc2lvbnNab29tIH0gPSBzdGF0ZSk7XG5cbiAgY29uc3Qgb3JpZW50ZWREaXZpc2lvbnNab29tID0gZGl2aXNpb25zWm9vbVtvcmllbnRhdGlvbl07IC8vL1xuXG4gIGRpdmlzaW9uc1pvb20gPSBvcmllbnRlZERpdmlzaW9uc1pvb207ICAvLy9cblxuICByZXR1cm4gZGl2aXNpb25zWm9vbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERpdmlzaW9uc1pvb20oZGl2aXNpb25zWm9vbSkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCksXG4gICAgICAgIG9yaWVudGVkRGl2aXNpb25zWm9vbSA9IGRpdmlzaW9uc1pvb207ICAvLy9cblxuICAoeyBkaXZpc2lvbnNab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihkaXZpc2lvbnNab29tLCB7XG4gICAgW29yaWVudGF0aW9uXTogb3JpZW50ZWREaXZpc2lvbnNab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWRcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29sb3Vyc0ludmVydGVkKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IGNvbG91cnNJbnZlcnRlZCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIGNvbG91cnNJbnZlcnRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgIGNvbG91cnNJbnZlcnRlZFxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHsgdmVyc2lvbiwgbWVudVpvb20sIG92ZXJsYXlIaWRkZW4sIGRpdmlzaW9uc1pvb20sIGNvbG91cnNJbnZlcnRlZCwgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCB9ID0gc3RhdGUsXG4gICAgICAgIHBlcnNpc3RlbnRTdGF0ZSA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIG1lbnVab29tLFxuICAgICAgICAgIG92ZXJsYXlIaWRkZW4sXG4gICAgICAgICAgZGl2aXNpb25zWm9vbSxcbiAgICAgICAgICBjb2xvdXJzSW52ZXJ0ZWQsXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZFxuICAgICAgICB9O1xuXG4gIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZSA9IGdldFBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBlcnNpc3RlbnRTdGF0ZSk7XG59XG4iXSwibmFtZXMiOlsiYXJlQ29sb3Vyc0ludmVydGVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImdldERpdmlzaW9uc1pvb20iLCJnZXRNZW51Wm9vbSIsImdldE9yaWVudGF0aW9uIiwiaXNPdmVybGF5SGlkZGVuIiwic2V0Q29sb3Vyc0ludmVydGVkIiwic2V0RGl2aXNpb25zWm9vbSIsInNldE1lbnVab29tIiwic2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInNldE9yaWVudGF0aW9uIiwic2V0T3ZlcmxheUhpZGRlbiIsIm9yaWVudGF0aW9uIiwic3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUiLCJtZW51Wm9vbSIsIm9yaWVudGVkTWVudVpvb20iLCJzdGF0ZVRvUGVyc2lzdGVudFN0YXRlIiwib3ZlcmxheUhpZGRlbiIsImRpdmlzaW9uc1pvb20iLCJvcmllbnRlZERpdmlzaW9uc1pvb20iLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiY29sb3Vyc0ludmVydGVkIiwidmVyc2lvbiIsInBlcnNpc3RlbnRTdGF0ZSIsInNldFBlcnNpc3RlbnRTdGF0ZSIsImdldFBlcnNpc3RlbnRTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBc0hnQkEsa0JBQWtCO2VBQWxCQTs7SUFsQkFDLHlCQUF5QjtlQUF6QkE7O0lBL0JBQyxnQkFBZ0I7ZUFBaEJBOztJQWhEQUMsV0FBVztlQUFYQTs7SUFaQUMsY0FBYztlQUFkQTs7SUEwQ0FDLGVBQWU7ZUFBZkE7O0lBMkVBQyxrQkFBa0I7ZUFBbEJBOztJQXpDQUMsZ0JBQWdCO2VBQWhCQTs7SUFqREFDLFdBQVc7ZUFBWEE7O0lBd0VBQyx5QkFBeUI7ZUFBekJBOztJQTdGQUMsY0FBYztlQUFkQTs7SUE0Q0FDLGdCQUFnQjtlQUFoQkE7Ozs0QkF6RHVDOzs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNQyxjQUFjLE1BQ2RDLFFBQVE7SUFDTkQsYUFBQUE7QUFDRjtBQUVDLFNBQVNSO0lBQ2QsSUFBTSxBQUFFUSxjQUFnQkMsTUFBaEJEO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNGLGVBQWVFLFdBQVc7SUFDeENFLE9BQU9DLE1BQU0sQ0FBQ0YsT0FBTztRQUNuQkQsYUFBQUE7SUFDRjtBQUNGO0FBRU8sU0FBU1Q7SUFDZGE7SUFFQSxJQUFJQztJQUVEQSxXQUFhSixNQUFiSTtJQUVILElBQU0sQUFBRUwsY0FBZ0JDLE1BQWhCRCxhQUNGTSxtQkFBbUJELFFBQVEsQ0FBQ0wsWUFBWSxFQUFFLEdBQUc7SUFFbkRLLFdBQVdDLGtCQUFtQixHQUFHO0lBRWpDLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTVCxZQUFZUyxRQUFRO0lBQ2xDRDtJQUVBLElBQU0sQUFBRUosY0FBZ0JDLE1BQWhCRCxhQUNGTSxtQkFBbUJELFVBQVcsR0FBRztJQUVwQ0EsV0FBYUosTUFBYkk7SUFFSEgsT0FBT0MsTUFBTSxDQUFDRSxVQUNaLHFCQUFDTCxhQUFjTTtJQUdqQkM7QUFDRjtBQUVPLFNBQVNkO0lBQ2RXO0lBRUEsSUFBTSxBQUFFSSxnQkFBa0JQLE1BQWxCTztJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTVCxpQkFBaUJTLGFBQWE7SUFDNUNKO0lBRUFGLE9BQU9DLE1BQU0sQ0FBQ0YsT0FBTztRQUNuQk8sZUFBQUE7SUFDRjtJQUVBRDtBQUNGO0FBRU8sU0FBU2pCO0lBQ2RjO0lBRUEsSUFBTUosY0FBY1I7SUFFcEIsSUFBSWlCO0lBRURBLGdCQUFrQlIsTUFBbEJRO0lBRUgsSUFBTUMsd0JBQXdCRCxhQUFhLENBQUNULFlBQVksRUFBRSxHQUFHO0lBRTdEUyxnQkFBZ0JDLHVCQUF3QixHQUFHO0lBRTNDLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTZCxpQkFBaUJjLGFBQWE7SUFDNUNMO0lBRUEsSUFBTUosY0FBY1Isa0JBQ2RrQix3QkFBd0JELGVBQWdCLEdBQUc7SUFFOUNBLGdCQUFrQlIsTUFBbEJRO0lBRUhQLE9BQU9DLE1BQU0sQ0FBQ00sZUFDWixxQkFBQ1QsYUFBY1U7SUFHakJIO0FBQ0Y7QUFFTyxTQUFTbEI7SUFDZGU7SUFFQSxJQUFNLEFBQUVPLHlCQUEyQlYsTUFBM0JVO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNkLDBCQUEwQmMsc0JBQXNCO0lBQzlEUDtJQUVBRixPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJVLHdCQUFBQTtJQUNGO0lBRUFKO0FBQ0Y7QUFFTyxTQUFTbkI7SUFDZGdCO0lBRUEsSUFBTSxBQUFFUSxrQkFBb0JYLE1BQXBCVztJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTbEIsbUJBQW1Ca0IsZUFBZTtJQUNoRFI7SUFFQUYsT0FBT0MsTUFBTSxDQUFDRixPQUFPO1FBQ25CVyxpQkFBQUE7SUFDRjtJQUVBTDtBQUNGO0FBRUEsU0FBU0E7SUFDUCxJQUFRTSxVQUE2RlosTUFBN0ZZLFNBQVNSLFdBQW9GSixNQUFwRkksVUFBVUcsZ0JBQTBFUCxNQUExRU8sZUFBZUMsZ0JBQTJEUixNQUEzRFEsZUFBZUcsa0JBQTRDWCxNQUE1Q1csaUJBQWlCRCx5QkFBMkJWLE1BQTNCVSx3QkFDcEVHLGtCQUFrQjtRQUNoQkQsU0FBQUE7UUFDQVIsVUFBQUE7UUFDQUcsZUFBQUE7UUFDQUMsZUFBQUE7UUFDQUcsaUJBQUFBO1FBQ0FELHdCQUFBQTtJQUNGO0lBRU5JLElBQUFBLGdDQUFrQixFQUFDRDtBQUNyQjtBQUVBLFNBQVNWO0lBQ1AsSUFBTVUsa0JBQWtCRSxJQUFBQSxnQ0FBa0I7SUFFMUNkLE9BQU9DLE1BQU0sQ0FBQ0YsT0FBT2E7QUFDdkIifQ==