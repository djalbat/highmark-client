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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRU5VX1pPT01fUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldE1lbnVab29tLCBzZXRNZW51Wm9vbSwgc2V0RGl2aXNpb25zWm9vbSwgc2V0Q29sb3Vyc0ludmVydGVkLCBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3KSB7XG4gIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgIHZpZXcub3Blbk1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgICB2aWV3LmNsb3NlTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVJbigpIHtcbiAgICBsZXQgbWVudVpvb20gPSBnZXRNZW51Wm9vbSgpO1xuXG4gICAgbWVudVpvb20gKj0gTUVOVV9aT09NX1JBVElPO1xuXG4gICAgc2V0TWVudVpvb20obWVudVpvb20pO1xuXG4gICAgdmlldy51cGRhdGVNZW51Wm9vbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVPdXQoKSB7XG4gICAgbGV0IG1lbnVab29tID0gZ2V0TWVudVpvb20oKTtcblxuICAgIG1lbnVab29tIC89IE1FTlVfWk9PTV9SQVRJTztcblxuICAgIHNldE1lbnVab29tKG1lbnVab29tKTtcblxuICAgIHZpZXcudXBkYXRlTWVudVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21EaXZpc2lvbnMoZGl2aXNpb25zWm9vbSkge1xuICAgIHNldERpdmlzaW9uc1pvb20oZGl2aXNpb25zWm9vbSk7XG5cbiAgICB2aWV3LnVwZGF0ZURpdmlzaW9uc1pvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gdHJ1ZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IGZhbHNlO1xuXG4gICAgc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZURpdmlzaW9uc0NvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsU2NyZWVuKCkge1xuICAgIHZpZXcuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmVudGVyRnVsbFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmNsb3NlTWVudSgpO1xuXG4gICAgdmlldy51cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gdHJ1ZTtcblxuICAgIHNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQobmF0aXZlR2VzdHVyZXNSZXN0b3JlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB2aWV3LnVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGZhbHNlO1xuXG4gICAgc2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZChuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKTtcblxuICAgIHZpZXcudXBkYXRlTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIHZpZXcudXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdigpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgb3Blbk1lbnUsXG4gICAgY2xvc2VNZW51LFxuICAgIHpvb21NZW51SW4sXG4gICAgem9vbU1lbnVPdXQsXG4gICAgem9vbURpdmlzaW9ucyxcbiAgICBpbnZlcnRDb2xvdXJzLFxuICAgIHJldmVydENvbG91cnMsXG4gICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgIHVwZGF0ZUZ1bGxTY3JlZW4sXG4gICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzLFxuICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXNcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwiem9vbU1lbnVJbiIsIm1lbnVab29tIiwiZ2V0TWVudVpvb20iLCJNRU5VX1pPT01fUkFUSU8iLCJzZXRNZW51Wm9vbSIsInVwZGF0ZU1lbnVab29tIiwiem9vbU1lbnVPdXQiLCJ6b29tRGl2aXNpb25zIiwiZGl2aXNpb25zWm9vbSIsInNldERpdmlzaW9uc1pvb20iLCJ1cGRhdGVEaXZpc2lvbnNab29tIiwiaW52ZXJ0Q29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsInNldENvbG91cnNJbnZlcnRlZCIsInVwZGF0ZURpdmlzaW9uc0NvbG91cnMiLCJyZXZlcnRDb2xvdXJzIiwiZXhpdEZ1bGxTY3JlZW4iLCJlbnRlckZ1bGxTY3JlZW4iLCJ1cGRhdGVGdWxsU2NyZWVuIiwidXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2IiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlcyIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozt5QkFIUTtxQkFDMEU7QUFFM0YsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0M7UUFDUEQsS0FBS0MsUUFBUTtJQUNmO0lBRUEsU0FBU0M7UUFDUEYsS0FBS0UsU0FBUztJQUNoQjtJQUVBLFNBQVNDO1FBQ1AsSUFBSUMsV0FBV0MsSUFBQUEsa0JBQVc7UUFFMUJELFlBQVlFLDBCQUFlO1FBRTNCQyxJQUFBQSxrQkFBVyxFQUFDSDtRQUVaSixLQUFLUSxjQUFjO0lBQ3JCO0lBRUEsU0FBU0M7UUFDUCxJQUFJTCxXQUFXQyxJQUFBQSxrQkFBVztRQUUxQkQsWUFBWUUsMEJBQWU7UUFFM0JDLElBQUFBLGtCQUFXLEVBQUNIO1FBRVpKLEtBQUtRLGNBQWM7SUFDckI7SUFFQSxTQUFTRSxjQUFjQyxhQUFhO1FBQ2xDQyxJQUFBQSx1QkFBZ0IsRUFBQ0Q7UUFFakJYLEtBQUthLG1CQUFtQjtJQUMxQjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUMsa0JBQWtCO1FBRXhCQyxJQUFBQSx5QkFBa0IsRUFBQ0Q7UUFFbkJmLEtBQUtpQixzQkFBc0I7SUFDN0I7SUFFQSxTQUFTQztRQUNQLElBQU1ILGtCQUFrQjtRQUV4QkMsSUFBQUEseUJBQWtCLEVBQUNEO1FBRW5CZixLQUFLaUIsc0JBQXNCO0lBQzdCO0lBRUEsU0FBU0U7UUFDUG5CLEtBQUttQixjQUFjO0lBQ3JCO0lBRUEsU0FBU0M7UUFDUHBCLEtBQUtvQixlQUFlO0lBQ3RCO0lBRUEsU0FBU0M7UUFDUHJCLEtBQUtFLFNBQVM7UUFFZEYsS0FBS3NCLDJCQUEyQjtJQUNsQztJQUVBLFNBQVNDO1FBQ1AsSUFBTUMseUJBQXlCO1FBRS9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Q7UUFFMUJ4QixLQUFLMEIsb0JBQW9CO1FBRXpCMUIsS0FBSzJCLCtCQUErQjtJQUN0QztJQUVBLFNBQVNDO1FBQ1AsSUFBTUoseUJBQXlCO1FBRS9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Q7UUFFMUJ4QixLQUFLMEIsb0JBQW9CO1FBRXpCMUIsS0FBSzJCLCtCQUErQjtJQUN0QztJQUVBLE9BQVE7UUFDTjFCLFVBQUFBO1FBQ0FDLFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FNLGFBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBQyxpQkFBQUE7UUFDQUMsa0JBQUFBO1FBQ0FFLHVCQUFBQTtRQUNBSyx3QkFBQUE7SUFDRjtBQUNGIn0=