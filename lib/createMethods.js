"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createMethods;
    }
});
var _constants = require("./constants");
var _state = require("./state");
function createMethods(scheduler, model, view) {
    function openMenu() {
        view.openMenu();
    }
    function closeMenu() {
        view.closeMenu();
    }
    function zoomMenuIn() {
        var menuZoom = (0, _state.getMenuZoom)();
        menuZoom *= _constants.MENU_ZOOM_RATIO;
        (0, _state.setMenuZoom)(menuZoom);
        view.updateMenuZoom();
    }
    function zoomMenuOut() {
        var menuZoom = (0, _state.getMenuZoom)();
        menuZoom /= _constants.MENU_ZOOM_RATIO;
        (0, _state.setMenuZoom)(menuZoom);
        view.updateMenuZoom();
    }
    function hideOverlay() {
        view.hideOverlayDiv();
    }
    function showDivisions() {
        var anchorId = "".concat(fragment);
        view.showDivisionsDiv();
        view.goToAnchor(anchorId);
        view.updateZoom();
    }
    function zoomDivisions(divisionsZoom) {
        (0, _state.setDivisionsZoom)(divisionsZoom);
        view.updateDivisionsZoom();
    }
    function invertColours() {
        var coloursInverted = true;
        (0, _state.setColoursInverted)(coloursInverted);
        view.updateDivisionsColours();
    }
    function revertColours() {
        var coloursInverted = false;
        (0, _state.setColoursInverted)(coloursInverted);
        view.updateDivisionsColours();
    }
    function exitFullScreen() {
        view.exitFullScreen();
    }
    function enterFullScreen() {
        view.enterFullScreen();
    }
    function updateFullScreen() {
        view.closeMenu();
        view.updateFullScreenCheckboxDiv();
    }
    function restoreNativeGestures() {
        var nativeGesturesRestored = true;
        (0, _state.setNativeGesturesRestored)(nativeGesturesRestored);
        view.updateNativeGestures();
        view.updateNativeGesturesCheckboxDiv();
    }
    function suppressNativeGestures() {
        var nativeGesturesRestored = false;
        (0, _state.setNativeGesturesRestored)(nativeGesturesRestored);
        view.updateNativeGestures();
        view.updateNativeGesturesCheckboxDiv();
    }
    return {
        openMenu: openMenu,
        closeMenu: closeMenu,
        zoomMenuIn: zoomMenuIn,
        zoomMenuOut: zoomMenuOut,
        hideOverlay: hideOverlay,
        showDivisions: showDivisions,
        zoomDivisions: zoomDivisions,
        invertColours: invertColours,
        revertColours: revertColours,
        exitFullScreen: exitFullScreen,
        enterFullScreen: enterFullScreen,
        updateFullScreen: updateFullScreen,
        restoreNativeGestures: restoreNativeGestures,
        suppressNativeGestures: suppressNativeGestures
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRU5VX1pPT01fUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldE1lbnVab29tLCBzZXRNZW51Wm9vbSwgc2V0RGl2aXNpb25zWm9vbSwgc2V0Q29sb3Vyc0ludmVydGVkLCBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3KSB7XG4gIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgIHZpZXcub3Blbk1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgICB2aWV3LmNsb3NlTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVJbigpIHtcbiAgICBsZXQgbWVudVpvb20gPSBnZXRNZW51Wm9vbSgpO1xuXG4gICAgbWVudVpvb20gKj0gTUVOVV9aT09NX1JBVElPO1xuXG4gICAgc2V0TWVudVpvb20obWVudVpvb20pO1xuXG4gICAgdmlldy51cGRhdGVNZW51Wm9vbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVPdXQoKSB7XG4gICAgbGV0IG1lbnVab29tID0gZ2V0TWVudVpvb20oKTtcblxuICAgIG1lbnVab29tIC89IE1FTlVfWk9PTV9SQVRJTztcblxuICAgIHNldE1lbnVab29tKG1lbnVab29tKTtcblxuICAgIHZpZXcudXBkYXRlTWVudVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVPdmVybGF5KCkge1xuICAgIHZpZXcuaGlkZU92ZXJsYXlEaXYoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dEaXZpc2lvbnMoKSB7XG4gICAgY29uc3QgYW5jaG9ySWQgPSBgJHtmcmFnbWVudH1gO1xuXG4gICAgdmlldy5zaG93RGl2aXNpb25zRGl2KCk7XG5cbiAgICB2aWV3LmdvVG9BbmNob3IoYW5jaG9ySWQpO1xuXG4gICAgdmlldy51cGRhdGVab29tKCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tRGl2aXNpb25zKGRpdmlzaW9uc1pvb20pIHtcbiAgICBzZXREaXZpc2lvbnNab29tKGRpdmlzaW9uc1pvb20pO1xuXG4gICAgdmlldy51cGRhdGVEaXZpc2lvbnNab29tKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IHRydWU7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHZpZXcudXBkYXRlRGl2aXNpb25zQ29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBleGl0RnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmV4aXRGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5lbnRlckZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5jbG9zZU1lbnUoKTtcblxuICAgIHZpZXcudXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2KCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IHRydWU7XG5cbiAgICBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQpO1xuXG4gICAgdmlldy51cGRhdGVOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdmlldy51cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBmYWxzZTtcblxuICAgIHNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQobmF0aXZlR2VzdHVyZXNSZXN0b3JlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB2aWV3LnVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYoKTtcbiAgfVxuXG4gIHJldHVybiAoe1xuICAgIG9wZW5NZW51LFxuICAgIGNsb3NlTWVudSxcbiAgICB6b29tTWVudUluLFxuICAgIHpvb21NZW51T3V0LFxuICAgIGhpZGVPdmVybGF5LFxuICAgIHNob3dEaXZpc2lvbnMsXG4gICAgem9vbURpdmlzaW9ucyxcbiAgICBpbnZlcnRDb2xvdXJzLFxuICAgIHJldmVydENvbG91cnMsXG4gICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgIHVwZGF0ZUZ1bGxTY3JlZW4sXG4gICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzLFxuICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXNcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwiem9vbU1lbnVJbiIsIm1lbnVab29tIiwiZ2V0TWVudVpvb20iLCJNRU5VX1pPT01fUkFUSU8iLCJzZXRNZW51Wm9vbSIsInVwZGF0ZU1lbnVab29tIiwiem9vbU1lbnVPdXQiLCJoaWRlT3ZlcmxheSIsImhpZGVPdmVybGF5RGl2Iiwic2hvd0RpdmlzaW9ucyIsImFuY2hvcklkIiwiZnJhZ21lbnQiLCJzaG93RGl2aXNpb25zRGl2IiwiZ29Ub0FuY2hvciIsInVwZGF0ZVpvb20iLCJ6b29tRGl2aXNpb25zIiwiZGl2aXNpb25zWm9vbSIsInNldERpdmlzaW9uc1pvb20iLCJ1cGRhdGVEaXZpc2lvbnNab29tIiwiaW52ZXJ0Q29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsInNldENvbG91cnNJbnZlcnRlZCIsInVwZGF0ZURpdmlzaW9uc0NvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwiZXhpdEZ1bGxTY3JlZW4iLCJlbnRlckZ1bGxTY3JlZW4iLCJ1cGRhdGVGdWxsU2NyZWVuIiwidXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2IiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlcyIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXdCQTs7O3lCQUhRO3FCQUMwRTtBQUUzRixTQUFTQSxjQUFjQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsSUFBSTtJQUMxRCxTQUFTQztRQUNQRCxLQUFLQyxRQUFRO0lBQ2Y7SUFFQSxTQUFTQztRQUNQRixLQUFLRSxTQUFTO0lBQ2hCO0lBRUEsU0FBU0M7UUFDUCxJQUFJQyxXQUFXQyxJQUFBQSxrQkFBVztRQUUxQkQsWUFBWUUsMEJBQWU7UUFFM0JDLElBQUFBLGtCQUFXLEVBQUNIO1FBRVpKLEtBQUtRLGNBQWM7SUFDckI7SUFFQSxTQUFTQztRQUNQLElBQUlMLFdBQVdDLElBQUFBLGtCQUFXO1FBRTFCRCxZQUFZRSwwQkFBZTtRQUUzQkMsSUFBQUEsa0JBQVcsRUFBQ0g7UUFFWkosS0FBS1EsY0FBYztJQUNyQjtJQUVBLFNBQVNFO1FBQ1BWLEtBQUtXLGNBQWM7SUFDckI7SUFFQSxTQUFTQztRQUNQLElBQU1DLFdBQVcsQUFBQyxHQUFXLE9BQVRDO1FBRXBCZCxLQUFLZSxnQkFBZ0I7UUFFckJmLEtBQUtnQixVQUFVLENBQUNIO1FBRWhCYixLQUFLaUIsVUFBVTtJQUNqQjtJQUVBLFNBQVNDLGNBQWNDLGFBQWE7UUFDbENDLElBQUFBLHVCQUFnQixFQUFDRDtRQUVqQm5CLEtBQUtxQixtQkFBbUI7SUFDMUI7SUFFQSxTQUFTQztRQUNQLElBQU1DLGtCQUFrQjtRQUV4QkMsSUFBQUEseUJBQWtCLEVBQUNEO1FBRW5CdkIsS0FBS3lCLHNCQUFzQjtJQUM3QjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUgsa0JBQWtCO1FBRXhCQyxJQUFBQSx5QkFBa0IsRUFBQ0Q7UUFFbkJ2QixLQUFLeUIsc0JBQXNCO0lBQzdCO0lBRUEsU0FBU0U7UUFDUDNCLEtBQUsyQixjQUFjO0lBQ3JCO0lBRUEsU0FBU0M7UUFDUDVCLEtBQUs0QixlQUFlO0lBQ3RCO0lBRUEsU0FBU0M7UUFDUDdCLEtBQUtFLFNBQVM7UUFFZEYsS0FBSzhCLDJCQUEyQjtJQUNsQztJQUVBLFNBQVNDO1FBQ1AsSUFBTUMseUJBQXlCO1FBRS9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Q7UUFFMUJoQyxLQUFLa0Msb0JBQW9CO1FBRXpCbEMsS0FBS21DLCtCQUErQjtJQUN0QztJQUVBLFNBQVNDO1FBQ1AsSUFBTUoseUJBQXlCO1FBRS9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Q7UUFFMUJoQyxLQUFLa0Msb0JBQW9CO1FBRXpCbEMsS0FBS21DLCtCQUErQjtJQUN0QztJQUVBLE9BQVE7UUFDTmxDLFVBQUFBO1FBQ0FDLFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FNLGFBQUFBO1FBQ0FDLGFBQUFBO1FBQ0FFLGVBQUFBO1FBQ0FNLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBQyxpQkFBQUE7UUFDQUMsa0JBQUFBO1FBQ0FFLHVCQUFBQTtRQUNBSyx3QkFBQUE7SUFDRjtBQUNGIn0=