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
        view.scrollToAnchor(anchorId);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNRU5VX1pPT01fUkFUSU8gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdldE1lbnVab29tLCBzZXRNZW51Wm9vbSwgc2V0RGl2aXNpb25zWm9vbSwgc2V0Q29sb3Vyc0ludmVydGVkLCBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3KSB7XG4gIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgIHZpZXcub3Blbk1lbnUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgICB2aWV3LmNsb3NlTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVJbigpIHtcbiAgICBsZXQgbWVudVpvb20gPSBnZXRNZW51Wm9vbSgpO1xuXG4gICAgbWVudVpvb20gKj0gTUVOVV9aT09NX1JBVElPO1xuXG4gICAgc2V0TWVudVpvb20obWVudVpvb20pO1xuXG4gICAgdmlldy51cGRhdGVNZW51Wm9vbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbU1lbnVPdXQoKSB7XG4gICAgbGV0IG1lbnVab29tID0gZ2V0TWVudVpvb20oKTtcblxuICAgIG1lbnVab29tIC89IE1FTlVfWk9PTV9SQVRJTztcblxuICAgIHNldE1lbnVab29tKG1lbnVab29tKTtcblxuICAgIHZpZXcudXBkYXRlTWVudVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVPdmVybGF5KCkge1xuICAgIHZpZXcuaGlkZU92ZXJsYXlEaXYoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dEaXZpc2lvbnMoKSB7XG4gICAgY29uc3QgYW5jaG9ySWQgPSBgJHtmcmFnbWVudH1gO1xuXG4gICAgdmlldy5zaG93RGl2aXNpb25zRGl2KCk7XG5cbiAgICB2aWV3LnNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcblxuICAgIHZpZXcudXBkYXRlWm9vbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gem9vbURpdmlzaW9ucyhkaXZpc2lvbnNab29tKSB7XG4gICAgc2V0RGl2aXNpb25zWm9vbShkaXZpc2lvbnNab29tKTtcblxuICAgIHZpZXcudXBkYXRlRGl2aXNpb25zWm9vbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSB0cnVlO1xuXG4gICAgc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZURpdmlzaW9uc0NvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gZmFsc2U7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHZpZXcudXBkYXRlRGl2aXNpb25zQ29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5leGl0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW50ZXJGdWxsU2NyZWVuKCkge1xuICAgIHZpZXcuZW50ZXJGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVGdWxsU2NyZWVuKCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG5cbiAgICB2aWV3LnVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdigpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSB0cnVlO1xuXG4gICAgc2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZChuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKTtcblxuICAgIHZpZXcudXBkYXRlTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIHZpZXcudXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdigpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gZmFsc2U7XG5cbiAgICBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQpO1xuXG4gICAgdmlldy51cGRhdGVOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdmlldy51cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2KCk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBvcGVuTWVudSxcbiAgICBjbG9zZU1lbnUsXG4gICAgem9vbU1lbnVJbixcbiAgICB6b29tTWVudU91dCxcbiAgICBoaWRlT3ZlcmxheSxcbiAgICBzaG93RGl2aXNpb25zLFxuICAgIHpvb21EaXZpc2lvbnMsXG4gICAgaW52ZXJ0Q29sb3VycyxcbiAgICByZXZlcnRDb2xvdXJzLFxuICAgIGV4aXRGdWxsU2NyZWVuLFxuICAgIGVudGVyRnVsbFNjcmVlbixcbiAgICB1cGRhdGVGdWxsU2NyZWVuLFxuICAgIHJlc3RvcmVOYXRpdmVHZXN0dXJlcyxcbiAgICBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZU1ldGhvZHMiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJvcGVuTWVudSIsImNsb3NlTWVudSIsInpvb21NZW51SW4iLCJtZW51Wm9vbSIsImdldE1lbnVab29tIiwiTUVOVV9aT09NX1JBVElPIiwic2V0TWVudVpvb20iLCJ1cGRhdGVNZW51Wm9vbSIsInpvb21NZW51T3V0IiwiaGlkZU92ZXJsYXkiLCJoaWRlT3ZlcmxheURpdiIsInNob3dEaXZpc2lvbnMiLCJhbmNob3JJZCIsImZyYWdtZW50Iiwic2hvd0RpdmlzaW9uc0RpdiIsInNjcm9sbFRvQW5jaG9yIiwidXBkYXRlWm9vbSIsInpvb21EaXZpc2lvbnMiLCJkaXZpc2lvbnNab29tIiwic2V0RGl2aXNpb25zWm9vbSIsInVwZGF0ZURpdmlzaW9uc1pvb20iLCJpbnZlcnRDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwic2V0Q29sb3Vyc0ludmVydGVkIiwidXBkYXRlRGl2aXNpb25zQ29sb3VycyIsInJldmVydENvbG91cnMiLCJleGl0RnVsbFNjcmVlbiIsImVudGVyRnVsbFNjcmVlbiIsInVwZGF0ZUZ1bGxTY3JlZW4iLCJ1cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwidXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBd0JBOzs7eUJBSFE7cUJBQzBFO0FBRTNGLFNBQVNBLGNBQWNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzFELFNBQVNDO1FBQ1BELEtBQUtDLFFBQVE7SUFDZjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLFNBQVM7SUFDaEI7SUFFQSxTQUFTQztRQUNQLElBQUlDLFdBQVdDLElBQUFBLGtCQUFXO1FBRTFCRCxZQUFZRSwwQkFBZTtRQUUzQkMsSUFBQUEsa0JBQVcsRUFBQ0g7UUFFWkosS0FBS1EsY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1AsSUFBSUwsV0FBV0MsSUFBQUEsa0JBQVc7UUFFMUJELFlBQVlFLDBCQUFlO1FBRTNCQyxJQUFBQSxrQkFBVyxFQUFDSDtRQUVaSixLQUFLUSxjQUFjO0lBQ3JCO0lBRUEsU0FBU0U7UUFDUFYsS0FBS1csY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUMsV0FBVyxBQUFDLEdBQVcsT0FBVEM7UUFFcEJkLEtBQUtlLGdCQUFnQjtRQUVyQmYsS0FBS2dCLGNBQWMsQ0FBQ0g7UUFFcEJiLEtBQUtpQixVQUFVO0lBQ2pCO0lBRUEsU0FBU0MsY0FBY0MsYUFBYTtRQUNsQ0MsSUFBQUEsdUJBQWdCLEVBQUNEO1FBRWpCbkIsS0FBS3FCLG1CQUFtQjtJQUMxQjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUMsa0JBQWtCO1FBRXhCQyxJQUFBQSx5QkFBa0IsRUFBQ0Q7UUFFbkJ2QixLQUFLeUIsc0JBQXNCO0lBQzdCO0lBRUEsU0FBU0M7UUFDUCxJQUFNSCxrQkFBa0I7UUFFeEJDLElBQUFBLHlCQUFrQixFQUFDRDtRQUVuQnZCLEtBQUt5QixzQkFBc0I7SUFDN0I7SUFFQSxTQUFTRTtRQUNQM0IsS0FBSzJCLGNBQWM7SUFDckI7SUFFQSxTQUFTQztRQUNQNUIsS0FBSzRCLGVBQWU7SUFDdEI7SUFFQSxTQUFTQztRQUNQN0IsS0FBS0UsU0FBUztRQUVkRixLQUFLOEIsMkJBQTJCO0lBQ2xDO0lBRUEsU0FBU0M7UUFDUCxJQUFNQyx5QkFBeUI7UUFFL0JDLElBQUFBLGdDQUF5QixFQUFDRDtRQUUxQmhDLEtBQUtrQyxvQkFBb0I7UUFFekJsQyxLQUFLbUMsK0JBQStCO0lBQ3RDO0lBRUEsU0FBU0M7UUFDUCxJQUFNSix5QkFBeUI7UUFFL0JDLElBQUFBLGdDQUF5QixFQUFDRDtRQUUxQmhDLEtBQUtrQyxvQkFBb0I7UUFFekJsQyxLQUFLbUMsK0JBQStCO0lBQ3RDO0lBRUEsT0FBUTtRQUNObEMsVUFBQUE7UUFDQUMsV0FBQUE7UUFDQUMsWUFBQUE7UUFDQU0sYUFBQUE7UUFDQUMsYUFBQUE7UUFDQUUsZUFBQUE7UUFDQU0sZUFBQUE7UUFDQUksZUFBQUE7UUFDQUksZUFBQUE7UUFDQUMsZ0JBQUFBO1FBQ0FDLGlCQUFBQTtRQUNBQyxrQkFBQUE7UUFDQUUsdUJBQUFBO1FBQ0FLLHdCQUFBQTtJQUNGO0FBQ0YifQ==