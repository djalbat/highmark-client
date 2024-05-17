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
    var version = state.version, menuZoom = state.menuZoom, overlayHidden = state.overlayHidden, divisionsZoom = state.divisionsZoom, coloursInverted = state.coloursInverted, nativeGesturesRestored = state.nativeGesturesRestored, fullScreenDivisionsZoom = state.fullScreenDivisionsZoom, persistentState = {
        version: version,
        menuZoom: menuZoom,
        overlayHidden: overlayHidden,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZnVsbFNjcmVlblV0aWxpdGllcyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuXG5pbXBvcnQgeyBnZXRQZXJzaXN0ZW50U3RhdGUsIHNldFBlcnNpc3RlbnRTdGF0ZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCB7IGlzRnVsbFNjcmVlbiB9ID0gZnVsbFNjcmVlblV0aWxpdGllcztcblxuY29uc3Qgb3JpZW50YXRpb24gPSBudWxsLFxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKSB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvcmllbnRhdGlvblxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVab29tKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBsZXQgbWVudVpvb207XG5cbiAgKHsgbWVudVpvb20gfSA9IHN0YXRlKTtcblxuICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBzdGF0ZSxcbiAgICAgICAgb3JpZW50ZWRNZW51Wm9vbSA9IG1lbnVab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgbWVudVpvb20gPSBvcmllbnRlZE1lbnVab29tOyAgLy8vXG5cbiAgcmV0dXJuIG1lbnVab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVudVpvb20obWVudVpvb20pIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc3RhdGUsXG4gICAgICAgIG9yaWVudGVkTWVudVpvb20gPSBtZW51Wm9vbTsgIC8vL1xuXG4gICh7IG1lbnVab29tIH0gPSBzdGF0ZSk7XG5cbiAgT2JqZWN0LmFzc2lnbihtZW51Wm9vbSwge1xuICAgIFtvcmllbnRhdGlvbl06IG9yaWVudGVkTWVudVpvb21cbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPdmVybGF5SGlkZGVuKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IG92ZXJsYXlIaWRkZW4gfSA9IHN0YXRlO1xuXG4gIHJldHVybiBvdmVybGF5SGlkZGVuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0T3ZlcmxheUhpZGRlbihvdmVybGF5SGlkZGVuKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICBvdmVybGF5SGlkZGVuXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdmlzaW9uc1pvb20oKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGxldCBkaXZpc2lvbnNab29tO1xuXG4gIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgKHsgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb206IGRpdmlzaW9uc1pvb20gfSA9IHN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICAoeyBkaXZpc2lvbnNab29tIH0gPSBzdGF0ZSk7XG4gIH1cblxuICBjb25zdCBvcmllbnRlZERpdmlzaW9uc1pvb20gPSBkaXZpc2lvbnNab29tW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgZGl2aXNpb25zWm9vbSA9IG9yaWVudGVkRGl2aXNpb25zWm9vbTsgIC8vL1xuXG4gIHJldHVybiBkaXZpc2lvbnNab29tO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGl2aXNpb25zWm9vbShkaXZpc2lvbnNab29tKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpO1xuXG4gIGNvbnN0IG9yaWVudGVkRGl2aXNpb25zWm9vbSA9IGRpdmlzaW9uc1pvb207ICAvLy9cblxuICBpZiAoZnVsbFNjcmVlbikge1xuICAgICh7IGZ1bGxTY3JlZW5EaXZpc2lvbnNab29tOiBkaXZpc2lvbnNab29tIH0gPSBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgKHsgZGl2aXNpb25zWm9vbSB9ID0gc3RhdGUpO1xuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihkaXZpc2lvbnNab29tLCB7XG4gICAgW29yaWVudGF0aW9uXTogb3JpZW50ZWREaXZpc2lvbnNab29tXG4gIH0pO1xuXG4gIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKSB7XG4gIHN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG4gIGNvbnN0IHsgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWRcbiAgfSk7XG5cbiAgc3RhdGVUb1BlcnNpc3RlbnRTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlQ29sb3Vyc0ludmVydGVkKCkge1xuICBzdGF0ZUZyb21QZXJzaXN0ZW50U3RhdGUoKTtcblxuICBjb25zdCB7IGNvbG91cnNJbnZlcnRlZCB9ID0gc3RhdGU7XG5cbiAgcmV0dXJuIGNvbG91cnNJbnZlcnRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpIHtcbiAgc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgIGNvbG91cnNJbnZlcnRlZFxuICB9KTtcblxuICBzdGF0ZVRvUGVyc2lzdGVudFN0YXRlKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXRlVG9QZXJzaXN0ZW50U3RhdGUoKSB7XG4gIGNvbnN0IHsgdmVyc2lvbiwgbWVudVpvb20sIG92ZXJsYXlIaWRkZW4sIGRpdmlzaW9uc1pvb20sIGNvbG91cnNJbnZlcnRlZCwgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCwgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb20gfSA9IHN0YXRlLFxuICAgICAgICBwZXJzaXN0ZW50U3RhdGUgPSB7XG4gICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICBtZW51Wm9vbSxcbiAgICAgICAgICBvdmVybGF5SGlkZGVuLFxuICAgICAgICAgIGRpdmlzaW9uc1pvb20sXG4gICAgICAgICAgY29sb3Vyc0ludmVydGVkLFxuICAgICAgICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQsXG4gICAgICAgICAgZnVsbFNjcmVlbkRpdmlzaW9uc1pvb21cbiAgICAgICAgfTtcblxuICBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKTtcbn1cblxuZnVuY3Rpb24gc3RhdGVGcm9tUGVyc2lzdGVudFN0YXRlKCkge1xuICBjb25zdCBwZXJzaXN0ZW50U3RhdGUgPSBnZXRQZXJzaXN0ZW50U3RhdGUoKTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLCBwZXJzaXN0ZW50U3RhdGUpO1xufVxuIl0sIm5hbWVzIjpbImFyZUNvbG91cnNJbnZlcnRlZCIsImFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJnZXREaXZpc2lvbnNab29tIiwiZ2V0TWVudVpvb20iLCJnZXRPcmllbnRhdGlvbiIsImlzT3ZlcmxheUhpZGRlbiIsInNldENvbG91cnNJbnZlcnRlZCIsInNldERpdmlzaW9uc1pvb20iLCJzZXRNZW51Wm9vbSIsInNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzZXRPcmllbnRhdGlvbiIsInNldE92ZXJsYXlIaWRkZW4iLCJpc0Z1bGxTY3JlZW4iLCJmdWxsU2NyZWVuVXRpbGl0aWVzIiwib3JpZW50YXRpb24iLCJzdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlRnJvbVBlcnNpc3RlbnRTdGF0ZSIsIm1lbnVab29tIiwib3JpZW50ZWRNZW51Wm9vbSIsInN0YXRlVG9QZXJzaXN0ZW50U3RhdGUiLCJvdmVybGF5SGlkZGVuIiwiZnVsbFNjcmVlbiIsImRpdmlzaW9uc1pvb20iLCJmdWxsU2NyZWVuRGl2aXNpb25zWm9vbSIsIm9yaWVudGVkRGl2aXNpb25zWm9vbSIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJ2ZXJzaW9uIiwicGVyc2lzdGVudFN0YXRlIiwic2V0UGVyc2lzdGVudFN0YXRlIiwiZ2V0UGVyc2lzdGVudFN0YXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXFJZ0JBLGtCQUFrQjtlQUFsQkE7O0lBbEJBQyx5QkFBeUI7ZUFBekJBOztJQTFDQUMsZ0JB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