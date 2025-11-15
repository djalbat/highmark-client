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
    get areColoursInverted () {
        return areColoursInverted;
    },
    get areNativeGesturesRestored () {
        return areNativeGesturesRestored;
    },
    get getDivisionsZoom () {
        return getDivisionsZoom;
    },
    get getMenuZoom () {
        return getMenuZoom;
    },
    get getOrientation () {
        return getOrientation;
    },
    get setColoursInverted () {
        return setColoursInverted;
    },
    get setDivisionsZoom () {
        return setDivisionsZoom;
    },
    get setMenuZoom () {
        return setMenuZoom;
    },
    get setNativeGesturesRestored () {
        return setNativeGesturesRestored;
    },
    get setOrientation () {
        return setOrientation;
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
    var version = state.version, menuZoom = state.menuZoom, divisionsZoom = state.divisionsZoom, coloursInverted = state.coloursInverted, nativeGesturesRestored = state.nativeGesturesRestored, persistentState = {
        version: version,
        menuZoom: menuZoom,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ2V0UGVyc2lzdGVudFN0YXRlLCBzZXRQZXJzaXN0ZW50U3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudVpvb207XG5cbiAgKHsgbWVudVpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51Wm9vbSA9IG1lbnVab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudVpvb20gPSBvcmllbnRlZE1lbnVab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudVpvb20obWVudVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudVpvb20gPSBtZW51Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudVpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGl2aXNpb25zWm9vbSgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3Qgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGxldCBkaXZpc2lvbnNab29tO1xuXG4gICh7IGRpdmlzaW9uc1pvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCBvcmllbnRlZERpdmlzaW9uc1pvb20gPSBkaXZpc2lvbnNab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgZGl2aXNpb25zWm9vbSA9IG9yaWVudGVkRGl2aXNpb25zWm9vbTsgIC8vL1xuXG4gIHJldHVybiBkaXZpc2lvbnNab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGl2aXNpb25zWm9vbShkaXZpc2lvbnNab29tKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oKSxcbiAgICAgICAgb3JpZW50ZWREaXZpc2lvbnNab29tID0gZGl2aXNpb25zWm9vbTsgIC8vL1xuXG4gICh7IGRpdmlzaW9uc1pvb20gfSA9IHN0YXRlKTtcblxuICBPYmplY3QuYXNzaWduKGRpdmlzaW9uc1pvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZERpdmlzaW9uc1pvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gbmF0aXZlR2VzdHVyZXNSZXN0b3JlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQobmF0aXZlR2VzdHVyZXNSZXN0b3JlZCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZFxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb2xvdXJzSW52ZXJ0ZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgY29sb3Vyc0ludmVydGVkIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gY29sb3Vyc0ludmVydGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgY29sb3Vyc0ludmVydGVkXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgeyB2ZXJzaW9uLCBtZW51Wm9vbSwgZGl2aXNpb25zWm9vbSwgY29sb3Vyc0ludmVydGVkLCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gPSBzdGF0ZSxcbiAgICAgICAgcGVyc2lzdGVudFN0YXRlID0ge1xuICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgbWVudVpvb20sXG4gICAgICAgICAgZGl2aXNpb25zWm9vbSxcbiAgICAgICAgICBjb2xvdXJzSW52ZXJ0ZWQsXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZFxuICAgICAgICB9O1xuXG4gIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpO1xufVxuXG5mdW5jdGlvbiBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHBlcnNpc3RlbnRTdGF0ZSA9IGdldFBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHBlcnNpc3RlbnRTdGF0ZSk7XG59XG4iXSwibmFtZXMiOlsiYXJlQ29sb3Vyc0ludmVydGVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImdldERpdmlzaW9uc1pvb20iLCJnZXRNZW51Wm9vbSIsImdldE9yaWVudGF0aW9uIiwic2V0Q29sb3Vyc0ludmVydGVkIiwic2V0RGl2aXNpb25zWm9vbSIsInNldE1lbnVab29tIiwic2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInNldE9yaWVudGF0aW9uIiwib3JpZW50YXRpb24iLCJzdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSIsIm1lbnVab29tIiwib3JpZW50ZWRNZW51Wm9vbSIsInN0YXRlVG9QZXJzaXN0ZW50U3RhdGUiLCJkaXZpc2lvbnNab29tIiwib3JpZW50ZWREaXZpc2lvbnNab29tIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImNvbG91cnNJbnZlcnRlZCIsInZlcnNpb24iLCJwZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJnZXRQZXJzaXN0ZW50U3RhdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW9HZ0JBO2VBQUFBOztRQWxCQUM7ZUFBQUE7O1FBL0JBQztlQUFBQTs7UUE5QkFDO2VBQUFBOztRQVpBQztlQUFBQTs7UUFtR0FDO2VBQUFBOztRQXpDQUM7ZUFBQUE7O1FBL0JBQztlQUFBQTs7UUFzREFDO2VBQUFBOztRQTNFQUM7ZUFBQUE7Ozs0QkFidUM7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU1DLGNBQWMsTUFDZEMsUUFBUTtJQUNORCxhQUFBQTtBQUNGO0FBRUMsU0FBU047SUFDZCxJQUFNLEFBQUVNLGNBQWdCQyxNQUFoQkQ7SUFFUixPQUFPQTtBQUNUO0FBRU8sU0FBU0QsZUFBZUMsV0FBVztJQUN4Q0UsT0FBT0MsTUFBTSxDQUFDRixPQUFPO1FBQ25CRCxhQUFBQTtJQUNGO0FBQ0Y7QUFFTyxTQUFTUDtJQUNkVztJQUVBLElBQUlDO0lBRURBLFdBQWFKLE1BQWJJO0lBRUgsSUFBTSxBQUFFTCxjQUFnQkMsTUFBaEJELGFBQ0ZNLG1CQUFtQkQsUUFBUSxDQUFDTCxZQUFZLEVBQUUsR0FBRztJQUVuREssV0FBV0Msa0JBQW1CLEdBQUc7SUFFakMsT0FBT0Q7QUFDVDtBQUVPLFNBQVNSLFlBQVlRLFFBQVE7SUFDbENEO0lBRUEsSUFBTSxBQUFFSixjQUFnQkMsTUFBaEJELGFBQ0ZNLG1CQUFtQkQsVUFBVyxHQUFHO0lBRXBDQSxXQUFhSixNQUFiSTtJQUVISCxPQUFPQyxNQUFNLENBQUNFLFVBQ1oscUJBQUNMLGFBQWNNO0lBR2pCQztBQUNGO0FBRU8sU0FBU2Y7SUFDZFk7SUFFQSxJQUFNSixjQUFjTjtJQUVwQixJQUFJYztJQUVEQSxnQkFBa0JQLE1BQWxCTztJQUVILElBQU1DLHdCQUF3QkQsYUFBYSxDQUFDUixZQUFZLEVBQUUsR0FBRztJQUU3RFEsZ0JBQWdCQyx1QkFBd0IsR0FBRztJQUUzQyxPQUFPRDtBQUNUO0FBRU8sU0FBU1osaUJBQWlCWSxhQUFhO0lBQzVDSjtJQUVBLElBQU1KLGNBQWNOLGtCQUNkZSx3QkFBd0JELGVBQWdCLEdBQUc7SUFFOUNBLGdCQUFrQlAsTUFBbEJPO0lBRUhOLE9BQU9DLE1BQU0sQ0FBQ0ssZUFDWixxQkFBQ1IsYUFBY1M7SUFHakJGO0FBQ0Y7QUFFTyxTQUFTaEI7SUFDZGE7SUFFQSxJQUFNLEFBQUVNLHlCQUEyQlQsTUFBM0JTO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNaLDBCQUEwQlksc0JBQXNCO0lBQzlETjtJQUVBRixPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJTLHdCQUFBQTtJQUNGO0lBRUFIO0FBQ0Y7QUFFTyxTQUFTakI7SUFDZGM7SUFFQSxJQUFNLEFBQUVPLGtCQUFvQlYsTUFBcEJVO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNoQixtQkFBbUJnQixlQUFlO0lBQ2hEUDtJQUVBRixPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJVLGlCQUFBQTtJQUNGO0lBRUFKO0FBQ0Y7QUFFQSxTQUFTQTtJQUNQLElBQVFLLFVBQThFWCxNQUE5RVcsU0FBU1AsV0FBcUVKLE1BQXJFSSxVQUFVRyxnQkFBMkRQLE1BQTNETyxlQUFlRyxrQkFBNENWLE1BQTVDVSxpQkFBaUJELHlCQUEyQlQsTUFBM0JTLHdCQUNyREcsa0JBQWtCO1FBQ2hCRCxTQUFBQTtRQUNBUCxVQUFBQTtRQUNBRyxlQUFBQTtRQUNBRyxpQkFBQUE7UUFDQUQsd0JBQUFBO0lBQ0Y7SUFFTkksSUFBQUEsZ0NBQWtCLEVBQUNEO0FBQ3JCO0FBRUEsU0FBU1Q7SUFDUCxJQUFNUyxrQkFBa0JFLElBQUFBLGdDQUFrQjtJQUUxQ2IsT0FBT0MsTUFBTSxDQUFDRixPQUFPWTtBQUN2QiJ9