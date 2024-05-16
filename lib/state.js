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
    }
});
var _easymobile = require("easy-mobile");
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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen;
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
    var fullScreen = isFullScreen(), orientation = getOrientation();
    var divisionsZoom;
    if (fullScreen) {
        var ref;
        ref = state, divisionsZoom = ref.fullScreenDivisionsZoom, ref;
    } else {
        divisionsZoom = state.divisionsZoom;
    }
    var orientedDivisionsZoom = divisionsZoom[orientation]; ///
    divisionsZoom = orientedDivisionsZoom; ///
    return divisionsZoom;
}
function setDivisionsZoom(divisionsZoom) {
    stateFromPersistentState();
    var fullScreen = isFullScreen(), orientation = getOrientation();
    var orientedDivisionsZoom = divisionsZoom; ///
    if (fullScreen) {
        var ref;
        ref = state, divisionsZoom = ref.fullScreenDivisionsZoom, ref;
    } else {
        divisionsZoom = state.divisionsZoom;
    }
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
    var version = state.version, menuZoom = state.menuZoom, divisionsZoom = state.divisionsZoom, coloursInverted = state.coloursInverted, nativeGesturesRestored = state.nativeGesturesRestored, fullScreenDivisionsZoom = state.fullScreenDivisionsZoom, persistentState = {
        version: version,
        menuZoom: menuZoom,
        divisionsZoom: divisionsZoom,
        coloursInverted: coloursInverted,
        nativeGesturesRestored: nativeGesturesRestored,
        fullScreenDivisionsZoom: fullScreenDivisionsZoom
    };
    (0, _localStorage.setPersistentState)(persistentState);
}
function stateFromPersistentState() {
    var persistentState = (0, _localStorage.getPersistentState)();
    Object.assign(state, persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZnVsbFNjcmVlblV0aWxpdGllcyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuXG5pbXBvcnQgeyBnZXRQZXJzaXN0ZW50U3RhdGUsIHNldFBlcnNpc3RlbnRTdGF0ZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCB7IGlzRnVsbFNjcmVlbiB9ID0gZnVsbFNjcmVlblV0aWxpdGllcztcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudVpvb207XG5cbiAgKHsgbWVudVpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51Wm9vbSA9IG1lbnVab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudVpvb20gPSBvcmllbnRlZE1lbnVab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudVpvb20obWVudVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudVpvb20gPSBtZW51Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudVpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGl2aXNpb25zWm9vbSgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XG5cbiAgbGV0IGRpdmlzaW9uc1pvb207XG5cbiAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAoeyBmdWxsU2NyZWVuRGl2aXNpb25zWm9vbTogZGl2aXNpb25zWm9vbSB9ID0gc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgICh7IGRpdmlzaW9uc1pvb20gfSA9IHN0YXRlKTtcbiAgfVxuXG4gIGNvbnN0IG9yaWVudGVkRGl2aXNpb25zWm9vbSA9IGRpdmlzaW9uc1pvb21bb3JpZW50YXRpb25dOyAvLy9cblxuICBkaXZpc2lvbnNab29tID0gb3JpZW50ZWREaXZpc2lvbnNab29tOyAgLy8vXG5cbiAgcmV0dXJuIGRpdmlzaW9uc1pvb207XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREaXZpc2lvbnNab29tKGRpdmlzaW9uc1pvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XG5cbiAgY29uc3Qgb3JpZW50ZWREaXZpc2lvbnNab29tID0gZGl2aXNpb25zWm9vbTsgIC8vL1xuXG4gIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgKHsgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb206IGRpdmlzaW9uc1pvb20gfSA9IHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICAoeyBkaXZpc2lvbnNab29tIH0gPSBzdGF0ZSk7XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGRpdmlzaW9uc1pvb20sIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZERpdmlzaW9uc1pvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gbmF0aXZlR2VzdHVyZXNSZXN0b3JlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQobmF0aXZlR2VzdHVyZXNSZXN0b3JlZCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZFxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb2xvdXJzSW52ZXJ0ZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgY29sb3Vyc0ludmVydGVkIH0gPSBzdGF0ZTtcblxuICByZXR1cm4gY29sb3Vyc0ludmVydGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgY29sb3Vyc0ludmVydGVkXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpIHtcbiAgY29uc3QgeyB2ZXJzaW9uLCBtZW51Wm9vbSwgZGl2aXNpb25zWm9vbSwgY29sb3Vyc0ludmVydGVkLCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkLCBmdWxsU2NyZWVuRGl2aXNpb25zWm9vbSB9ID0gc3RhdGUsXG4gICAgICAgIHBlcnNpc3RlbnRTdGF0ZSA9IHtcbiAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgIG1lbnVab29tLFxuICAgICAgICAgIGRpdmlzaW9uc1pvb20sXG4gICAgICAgICAgY29sb3Vyc0ludmVydGVkLFxuICAgICAgICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQsXG4gICAgICAgICAgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb21cbiAgICAgICAgfTtcblxuICBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGUgPSBnZXRQZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCBwZXJzaXN0ZW50U3RhdGUpO1xufVxuIl0sIm5hbWVzIjpbImFyZUNvbG91cnNJbnZlcnRlZCIsImFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJnZXREaXZpc2lvbnNab29tIiwiZ2V0TWVudVpvb20iLCJnZXRPcmllbnRhdGlvbiIsInNldENvbG91cnNJbnZlcnRlZCIsInNldERpdmlzaW9uc1pvb20iLCJzZXRNZW51Wm9vbSIsInNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzZXRPcmllbnRhdGlvbiIsImlzRnVsbFNjcmVlbiIsImZ1bGxTY3JlZW5VdGlsaXRpZXMiLCJvcmllbnRhdGlvbiIsInN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlIiwibWVudVpvb20iLCJvcmllbnRlZE1lbnVab29tIiwic3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSIsImZ1bGxTY3JlZW4iLCJkaXZpc2lvbnNab29tIiwiZnVsbFNjcmVlbkRpdmlzaW9uc1pvb20iLCJvcmllbnRlZERpdmlzaW9uc1pvb20iLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiY29sb3Vyc0ludmVydGVkIiwidmVyc2lvbiIsInBlcnNpc3RlbnRTdGF0ZSIsInNldFBlcnNpc3RlbnRTdGF0ZSIsImdldFBlcnNpc3RlbnRTdGF0ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1IZ0JBLGtCQUFrQjtlQUFsQkE7O0lBbEJBQyx5QkFBeUI7ZUFBekJBOztJQTFDQUMsZ0JBQWdCO2VBQWhCQTs7SUE5QkFDLFdBQVc7ZUFBWEE7O0lBWkFDLGNBQWM7ZUFBZEE7O0lBOEdBQyxrQkFBa0I7ZUFBbEJBOztJQS9DQUMsZ0JBQWdCO2VBQWhCQTs7SUFwQ0FDLFdBQVc7ZUFBWEE7O0lBaUVBQyx5QkFBeUI7ZUFBekJBOztJQXRGQUMsY0FBYztlQUFkQTs7OzBCQWpCb0I7NEJBRW1COzs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLGVBQWlCQywrQkFBbUIsQ0FBcENEO0FBRVIsSUFBTUUsY0FBYyxNQUNkQyxRQUFRO0lBQ05ELGFBQUFBO0FBQ0Y7QUFFQyxTQUFTUjtJQUNkLElBQU0sQUFBRVEsY0FBZ0JDLE1BQWhCRDtJQUVSLE9BQU9BO0FBQ1Q7QUFFTyxTQUFTSCxlQUFlRyxXQUFXO0lBQ3hDRSxPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJELGFBQUFBO0lBQ0Y7QUFDRjtBQUVPLFNBQVNUO0lBQ2RhO0lBRUEsSUFBSUM7SUFFREEsV0FBYUosTUFBYkk7SUFFSCxJQUFNLEFBQUVMLGNBQWdCQyxNQUFoQkQsYUFDRk0sbUJBQW1CRCxRQUFRLENBQUNMLFlBQVksRUFBRSxHQUFHO0lBRW5ESyxXQUFXQyxrQkFBbUIsR0FBRztJQUVqQyxPQUFPRDtBQUNUO0FBRU8sU0FBU1YsWUFBWVUsUUFBUTtJQUNsQ0Q7SUFFQSxJQUFNLEFBQUVKLGNBQWdCQyxNQUFoQkQsYUFDRk0sbUJBQW1CRCxVQUFXLEdBQUc7SUFFcENBLFdBQWFKLE1BQWJJO0lBRUhILE9BQU9DLE1BQU0sQ0FBQ0UsVUFDWixxQkFBQ0wsYUFBY007SUFHakJDO0FBQ0Y7QUFFTyxTQUFTakI7SUFDZGM7SUFFQSxJQUFNSSxhQUFhVixnQkFDYkUsY0FBY1I7SUFFcEIsSUFBSWlCO0lBRUosSUFBSUQsWUFBWTs7Y0FDZ0NQLE9BQWxCUSxvQkFBekJDO0lBQ0wsT0FBTztRQUNGRCxnQkFBa0JSLE1BQWxCUTtJQUNMO0lBRUEsSUFBTUUsd0JBQXdCRixhQUFhLENBQUNULFlBQVksRUFBRSxHQUFHO0lBRTdEUyxnQkFBZ0JFLHVCQUF3QixHQUFHO0lBRTNDLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTZixpQkFBaUJlLGFBQWE7SUFDNUNMO0lBRUEsSUFBTUksYUFBYVYsZ0JBQ2JFLGNBQWNSO0lBRXBCLElBQU1tQix3QkFBd0JGLGVBQWdCLEdBQUc7SUFFakQsSUFBSUQsWUFBWTs7Y0FDZ0NQLE9BQWxCUSxvQkFBekJDO0lBQ0wsT0FBTztRQUNGRCxnQkFBa0JSLE1BQWxCUTtJQUNMO0lBRUFQLE9BQU9DLE1BQU0sQ0FBQ00sZUFDWixxQkFBQ1QsYUFBY1c7SUFHakJKO0FBQ0Y7QUFFTyxTQUFTbEI7SUFDZGU7SUFFQSxJQUFNLEFBQUVRLHlCQUEyQlgsTUFBM0JXO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNoQiwwQkFBMEJnQixzQkFBc0I7SUFDOURSO0lBRUFGLE9BQU9DLE1BQU0sQ0FBQ0YsT0FBTztRQUNuQlcsd0JBQUFBO0lBQ0Y7SUFFQUw7QUFDRjtBQUVPLFNBQVNuQjtJQUNkZ0I7SUFFQSxJQUFNLEFBQUVTLGtCQUFvQlosTUFBcEJZO0lBRVIsT0FBT0E7QUFDVDtBQUVPLFNBQVNwQixtQkFBbUJvQixlQUFlO0lBQ2hEVDtJQUVBRixPQUFPQyxNQUFNLENBQUNGLE9BQU87UUFDbkJZLGlCQUFBQTtJQUNGO0lBRUFOO0FBQ0Y7QUFFQSxTQUFTQTtJQUNQLElBQVFPLFVBQXVHYixNQUF2R2EsU0FBU1QsV0FBOEZKLE1BQTlGSSxVQUFVSSxnQkFBb0ZSLE1BQXBGUSxlQUFlSSxrQkFBcUVaLE1BQXJFWSxpQkFBaUJELHlCQUFvRFgsTUFBcERXLHdCQUF3QkYsMEJBQTRCVCxNQUE1QlMseUJBQzdFSyxrQkFBa0I7UUFDaEJELFNBQUFBO1FBQ0FULFVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FJLGlCQUFBQTtRQUNBRCx3QkFBQUE7UUFDQUYseUJBQUFBO0lBQ0Y7SUFFTk0sSUFBQUEsZ0NBQWtCLEVBQUNEO0FBQ3JCO0FBRUEsU0FBU1g7SUFDUCxJQUFNVyxrQkFBa0JFLElBQUFBLGdDQUFrQjtJQUUxQ2YsT0FBT0MsTUFBTSxDQUFDRixPQUFPYztBQUN2QiJ9