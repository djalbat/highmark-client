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
    function showDivisions() {
        view.hideOverlayDiv();
        view.showDivisionsDiv();
        var anchorId = "".concat(fragment);
        anchorId === _constants.EMPTY_STRING ? view.showFirstDiv() : view.scrollToAnchor(anchorId);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIE1FTlVfWk9PTV9SQVRJTyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0TWVudVpvb20sIHNldE1lbnVab29tLCBzZXREaXZpc2lvbnNab29tLCBzZXRDb2xvdXJzSW52ZXJ0ZWQsIHNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgdmlldy5vcGVuTWVudSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIHZpZXcuY2xvc2VNZW51KCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudUluKCkge1xuICAgIGxldCBtZW51Wm9vbSA9IGdldE1lbnVab29tKCk7XG5cbiAgICBtZW51Wm9vbSAqPSBNRU5VX1pPT01fUkFUSU87XG5cbiAgICBzZXRNZW51Wm9vbShtZW51Wm9vbSk7XG5cbiAgICB2aWV3LnVwZGF0ZU1lbnVab29tKCk7XG4gIH1cblxuICBmdW5jdGlvbiB6b29tTWVudU91dCgpIHtcbiAgICBsZXQgbWVudVpvb20gPSBnZXRNZW51Wm9vbSgpO1xuXG4gICAgbWVudVpvb20gLz0gTUVOVV9aT09NX1JBVElPO1xuXG4gICAgc2V0TWVudVpvb20obWVudVpvb20pO1xuXG4gICAgdmlldy51cGRhdGVNZW51Wm9vbSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0RpdmlzaW9ucygpIHtcbiAgICB2aWV3LmhpZGVPdmVybGF5RGl2KCk7XG5cbiAgICB2aWV3LnNob3dEaXZpc2lvbnNEaXYoKTtcblxuICAgIGNvbnN0IGFuY2hvcklkID0gYCR7ZnJhZ21lbnR9YDtcblxuICAgIChhbmNob3JJZCA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICB2aWV3LnNob3dGaXJzdERpdigpIDpcbiAgICAgICAgdmlldy5zY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG5cbiAgICB2aWV3LnVwZGF0ZVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21EaXZpc2lvbnMoZGl2aXNpb25zWm9vbSkge1xuICAgIHNldERpdmlzaW9uc1pvb20oZGl2aXNpb25zWm9vbSk7XG5cbiAgICB2aWV3LnVwZGF0ZURpdmlzaW9uc1pvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmVydENvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gdHJ1ZTtcblxuICAgIHNldENvbG91cnNJbnZlcnRlZChjb2xvdXJzSW52ZXJ0ZWQpO1xuXG4gICAgdmlldy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IGZhbHNlO1xuXG4gICAgc2V0Q29sb3Vyc0ludmVydGVkKGNvbG91cnNJbnZlcnRlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZURpdmlzaW9uc0NvbG91cnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsU2NyZWVuKCkge1xuICAgIHZpZXcuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmVudGVyRnVsbFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmNsb3NlTWVudSgpO1xuXG4gICAgdmlldy51cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gdHJ1ZTtcblxuICAgIHNldE5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQobmF0aXZlR2VzdHVyZXNSZXN0b3JlZCk7XG5cbiAgICB2aWV3LnVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCk7XG5cbiAgICB2aWV3LnVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGZhbHNlO1xuXG4gICAgc2V0TmF0aXZlR2VzdHVyZXNSZXN0b3JlZChuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKTtcblxuICAgIHZpZXcudXBkYXRlTmF0aXZlR2VzdHVyZXMoKTtcblxuICAgIHZpZXcudXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdigpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgb3Blbk1lbnUsXG4gICAgY2xvc2VNZW51LFxuICAgIHpvb21NZW51SW4sXG4gICAgem9vbU1lbnVPdXQsXG4gICAgc2hvd0RpdmlzaW9ucyxcbiAgICB6b29tRGl2aXNpb25zLFxuICAgIGludmVydENvbG91cnMsXG4gICAgcmV2ZXJ0Q29sb3VycyxcbiAgICBleGl0RnVsbFNjcmVlbixcbiAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgdXBkYXRlRnVsbFNjcmVlbixcbiAgICByZXN0b3JlTmF0aXZlR2VzdHVyZXMsXG4gICAgc3VwcHJlc3NOYXRpdmVHZXN0dXJlc1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3Iiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJ6b29tTWVudUluIiwibWVudVpvb20iLCJnZXRNZW51Wm9vbSIsIk1FTlVfWk9PTV9SQVRJTyIsInNldE1lbnVab29tIiwidXBkYXRlTWVudVpvb20iLCJ6b29tTWVudU91dCIsInNob3dEaXZpc2lvbnMiLCJoaWRlT3ZlcmxheURpdiIsInNob3dEaXZpc2lvbnNEaXYiLCJhbmNob3JJZCIsImZyYWdtZW50IiwiRU1QVFlfU1RSSU5HIiwic2hvd0ZpcnN0RGl2Iiwic2Nyb2xsVG9BbmNob3IiLCJ1cGRhdGVab29tIiwiem9vbURpdmlzaW9ucyIsImRpdmlzaW9uc1pvb20iLCJzZXREaXZpc2lvbnNab29tIiwidXBkYXRlRGl2aXNpb25zWm9vbSIsImludmVydENvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJzZXRDb2xvdXJzSW52ZXJ0ZWQiLCJ1cGRhdGVEaXZpc2lvbnNDb2xvdXJzIiwicmV2ZXJ0Q29sb3VycyIsImV4aXRGdWxsU2NyZWVuIiwiZW50ZXJGdWxsU2NyZWVuIiwidXBkYXRlRnVsbFNjcmVlbiIsInVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdiIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzZXROYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwidXBkYXRlTmF0aXZlR2VzdHVyZXMiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2Iiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUF3QkE7Ozt5QkFIc0I7cUJBQzREO0FBRTNGLFNBQVNBLGNBQWNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzFELFNBQVNDO1FBQ1BELEtBQUtDLFFBQVE7SUFDZjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLFNBQVM7SUFDaEI7SUFFQSxTQUFTQztRQUNQLElBQUlDLFdBQVdDLElBQUFBLGtCQUFXO1FBRTFCRCxZQUFZRSwwQkFBZTtRQUUzQkMsSUFBQUEsa0JBQVcsRUFBQ0g7UUFFWkosS0FBS1EsY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1AsSUFBSUwsV0FBV0MsSUFBQUEsa0JBQVc7UUFFMUJELFlBQVlFLDBCQUFlO1FBRTNCQyxJQUFBQSxrQkFBVyxFQUFDSDtRQUVaSixLQUFLUSxjQUFjO0lBQ3JCO0lBRUEsU0FBU0U7UUFDUFYsS0FBS1csY0FBYztRQUVuQlgsS0FBS1ksZ0JBQWdCO1FBRXJCLElBQU1DLFdBQVcsQUFBQyxHQUFXLE9BQVRDO1FBRW5CRCxhQUFhRSx1QkFBWSxHQUN4QmYsS0FBS2dCLFlBQVksS0FDZmhCLEtBQUtpQixjQUFjLENBQUNKO1FBRXhCYixLQUFLa0IsVUFBVTtJQUNqQjtJQUVBLFNBQVNDLGNBQWNDLGFBQWE7UUFDbENDLElBQUFBLHVCQUFnQixFQUFDRDtRQUVqQnBCLEtBQUtzQixtQkFBbUI7SUFDMUI7SUFFQSxTQUFTQztRQUNQLElBQU1DLGtCQUFrQjtRQUV4QkMsSUFBQUEseUJBQWtCLEVBQUNEO1FBRW5CeEIsS0FBSzBCLHNCQUFzQjtJQUM3QjtJQUVBLFNBQVNDO1FBQ1AsSUFBTUgsa0JBQWtCO1FBRXhCQyxJQUFBQSx5QkFBa0IsRUFBQ0Q7UUFFbkJ4QixLQUFLMEIsc0JBQXNCO0lBQzdCO0lBRUEsU0FBU0U7UUFDUDVCLEtBQUs0QixjQUFjO0lBQ3JCO0lBRUEsU0FBU0M7UUFDUDdCLEtBQUs2QixlQUFlO0lBQ3RCO0lBRUEsU0FBU0M7UUFDUDlCLEtBQUtFLFNBQVM7UUFFZEYsS0FBSytCLDJCQUEyQjtJQUNsQztJQUVBLFNBQVNDO1FBQ1AsSUFBTUMseUJBQXlCO1FBRS9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Q7UUFFMUJqQyxLQUFLbUMsb0JBQW9CO1FBRXpCbkMsS0FBS29DLCtCQUErQjtJQUN0QztJQUVBLFNBQVNDO1FBQ1AsSUFBTUoseUJBQXlCO1FBRS9CQyxJQUFBQSxnQ0FBeUIsRUFBQ0Q7UUFFMUJqQyxLQUFLbUMsb0JBQW9CO1FBRXpCbkMsS0FBS29DLCtCQUErQjtJQUN0QztJQUVBLE9BQVE7UUFDTm5DLFVBQUFBO1FBQ0FDLFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FNLGFBQUFBO1FBQ0FDLGVBQUFBO1FBQ0FTLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FJLGVBQUFBO1FBQ0FDLGdCQUFBQTtRQUNBQyxpQkFBQUE7UUFDQUMsa0JBQUFBO1FBQ0FFLHVCQUFBQTtRQUNBSyx3QkFBQUE7SUFDRjtBQUNGIn0=