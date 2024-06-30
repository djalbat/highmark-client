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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIE1FTlVfWk9PTV9SQVRJTyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0TWVudVpvb20sIHNldE1lbnVab29tLCBzZXREaXZpc2lvbnNab29tLCBzZXRDb2xvdXJzSW52ZXJ0ZWQsIHNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudUluKCkge1xuICAgIGxldCBtZW51Wm9vbSA9IGdldE1lbnVab29tKCk7XG5cbiAgICBtZW51Wm9vbSAqPSBNRU5VX1pPT01fUkFUSU87XG5cbiAgICBzZXRNZW51Wm9vbShtZW51Wm9vbSk7XG5cbiAgICB2aWV3LnVwZGF0ZU1lbnVab29tKCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudU91dCgpIHtcbiAgICBsZXQgbWVudVpvb20gPSBnZXRNZW51Wm9vbSgpO1xuXG4gICAgbWVudVpvb20gLz0gTUVOVV9aT09NX1JBVElPO1xuXG4gICAgc2V0TWVudVpvb20obWVudVpvb20pO1xuXG4gICAgdmlldy51cGRhdGVNZW51Wm9vbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKSB7XG4gICAgdmlldy5oaWRlT3ZlcmxheURpdigpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0RpdmlzaW9ucygpIHtcbiAgICBjb25zdCBhbmNob3JJZCA9IGAke2ZyYWdtZW50fWA7XG5cbiAgICB2aWV3LnNob3dEaXZpc2lvbnNEaXYoKTtcblxuICAgIHZpZXcuc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xuXG4gICAgdmlldy51cGRhdGVab29tKCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tRGl2aXNpb25zKGRpdmlzaW9uc1pvb20pIHtcbiAgICBzZXREaXZpc2lvbnNab29tKGRpdmlzaW9uc1pvb20pO1xuXG4gICAgdmlldy51cGRhdGVEaXZpc2lvbnNab29tKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IHRydWU7XG5cbiAgICBzZXRDb2xvdXJzSW52ZXJ0ZWQoY29sb3Vyc0ludmVydGVkKTtcblxuICAgIHZpZXcudXBkYXRlRGl2aXNpb25zQ29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0Q29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBmYWxzZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBleGl0RnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmV4aXRGdWxsU2NyZWVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5lbnRlckZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5jbG9zZU1lbnUoKTtcblxuICAgIHZpZXcudXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2KCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IHRydWU7XG5cbiAgICBzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQpO1xuXG4gICAgdmlldy51cGRhdGVOYXRpdmVHZXN0dXJlcygpO1xuXG4gICAgdmlldy51cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBmYWxzZTtcblxuICAgIHNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQobmF0aXZlR2VzdHVyZXNSZXN0b3JlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB2aWV3LnVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYoKTtcbiAgfVxuXG4gIHJldHVybiAoe1xuICAgIG9wZW5NZW51LFxuICAgIGNsb3NlTWVudSxcbiAgICB6b29tTWVudUluLFxuICAgIHpvb21NZW51T3V0LFxuICAgIGhpZGVPdmVybGF5LFxuICAgIHNob3dEaXZpc2lvbnMsXG4gICAgem9vbURpdmlzaW9ucyxcbiAgICBpbnZlcnRDb2xvdXJzLFxuICAgIHJldmVydENvbG91cnMsXG4gICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgIHVwZGF0ZUZ1bGxTY3JlZW4sXG4gICAgcmVzdG9yZU5hdGl2ZUdlc3R1cmVzLFxuICAgIHN1cHByZXNzTmF0aXZlR2VzdHVyZXNcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsIm9wZW5NZW51IiwiY2xvc2VNZW51Iiwiem9vbU1lbnVJbiIsIm1lbnVab29tIiwiZ2V0TWVudVpvb20iLCJNRU5VX1pPT01fUkFUSU8iLCJzZXRNZW51Wm9vbSIsInVwZGF0ZU1lbnVab29tIiwiem9vbU1lbnVPdXQiLCJoaWRlT3ZlcmxheSIsImhpZGVPdmVybGF5RGl2Iiwic2hvd0RpdmlzaW9ucyIsImFuY2hvcklkIiwiZnJhZ21lbnQiLCJzaG93RGl2aXNpb25zRGl2Iiwic2Nyb2xsVG9BbmNob3IiLCJ1cGRhdGVab29tIiwiem9vbURpdmlzaW9ucyIsImRpdmlzaW9uc1pvb20iLCJzZXREaXZpc2lvbnNab29tIiwidXBkYXRlRGl2aXNpb25zWm9vbSIsImludmVydENvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJzZXRDb2xvdXJzSW52ZXJ0ZWQiLCJ1cGRhdGVEaXZpc2lvbnNDb2xvdXJzIiwicmV2ZXJ0Q29sb3VycyIsImV4aXRGdWxsU2NyZWVuIiwiZW50ZXJGdWxsU2NyZWVuIiwidXBkYXRlRnVsbFNjcmVlbiIsInVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdiIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwidXBkYXRlTmF0aXZlR2VzdHVyZXMiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2Iiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozt5QkFIc0I7cUJBQzREO0FBRTNGLFNBQVNBLGNBQWNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzFELFNBQVNDO1FBQ1BELEtBQUtDLFFBQVE7SUFDZjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLFNBQVM7SUFDaEI7SUFFQSxTQUFTQztRQUNQLElBQUlDLFdBQVdDLElBQUFBLGtCQUFXO1FBRTFCRCxZQUFZRSwwQkFBZTtRQUUzQkMsSUFBQUEsa0JBQVcsRUFBQ0g7UUFFWkosS0FBS1EsY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1AsSUFBSUwsV0FBV0MsSUFBQUEsa0JBQVc7UUFFMUJELFlBQVlFLDBCQUFlO1FBRTNCQyxJQUFBQSxrQkFBVyxFQUFDSDtRQUVaSixLQUFLUSxjQUFjO0lBQ3JCO0lBRUEsU0FBU0U7UUFDUFYsS0FBS1csY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUMsV0FBVyxBQUFDLEdBQVcsT0FBVEM7UUFFcEJkLEtBQUtlLGdCQUFnQjtRQUVyQmYsS0FBS2dCLGNBQWMsQ0FBQ0g7UUFFcEJiLEtBQUtpQixVQUFVO0lBQ2pCO0lBRUEsU0FBU0MsY0FBY0MsYUFBYTtRQUNsQ0MsSUFBQUEsdUJBQWdCLEVBQUNEO1FBRWpCbkIsS0FBS3FCLG1CQUFtQjtJQUMxQjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUMsa0JBQWtCO1FBRXhCQyxJQUFBQSx5QkFBa0IsRUFBQ0Q7UUFFbkJ2QixLQUFLeUIsc0JBQXNCO0lBQzdCO0lBRUEsU0FBU0M7UUFDUCxJQUFNSCxrQkFBa0I7UUFFeEJDLElBQUFBLHlCQUFrQixFQUFDRDtRQUVuQnZCLEtBQUt5QixzQkFBc0I7SUFDN0I7SUFFQSxTQUFTRTtRQUNQM0IsS0FBSzJCLGNBQWM7SUFDckI7SUFFQSxTQUFTQztRQUNQNUIsS0FBSzRCLGVBQWU7SUFDdEI7SUFFQSxTQUFTQztRQUNQN0IsS0FBS0UsU0FBUztRQUVkRixLQUFLOEIsMkJBQTJCO0lBQ2xDO0lBRUEsU0FBU0M7UUFDUCxJQUFNQyx5QkFBeUI7UUFFL0JDLElBQUFBLGdDQUF5QixFQUFDRDtRQUUxQmhDLEtBQUtrQyxvQkFBb0I7UUFFekJsQyxLQUFLbUMsK0JBQStCO0lBQ3RDO0lBRUEsU0FBU0M7UUFDUCxJQUFNSix5QkFBeUI7UUFFL0JDLElBQUFBLGdDQUF5QixFQUFDRDtRQUUxQmhDLEtBQUtrQyxvQkFBb0I7UUFFekJsQyxLQUFLbUMsK0JBQStCO0lBQ3RDO0lBRUEsT0FBUTtRQUNObEMsVUFBQUE7UUFDQUMsV0FBQUE7UUFDQUMsWUFBQUE7UUFDQU0sYUFBQUE7UUFDQUMsYUFBQUE7UUFDQUUsZUFBQUE7UUFDQU0sZUFBQUE7UUFDQUksZUFBQUE7UUFDQUksZUFBQUE7UUFDQUMsZ0JBQUFBO1FBQ0FDLGlCQUFBQTtRQUNBQyxrQkFBQUE7UUFDQUUsdUJBQUFBO1FBQ0FLLHdCQUFBQTtJQUNGO0FBQ0YifQ==