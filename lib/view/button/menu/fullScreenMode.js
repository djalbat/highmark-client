"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FullScreenModeMenuButton;
    }
});
const _occamstyles = require("occam-styles");
const _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class FullScreenModeMenuButton extends _menu.default {
    clickHandler = (event, element)=>{
        controller.fullScreenMode();
        event.preventDefault();
    };
    parentContext() {
        const showFullScreenModeMenuButton = this.show.bind(this), hideFullScreenModeMenuButton = this.hide.bind(this); ///
        return {
            showFullScreenModeMenuButton,
            hideFullScreenModeMenuButton
        };
    }
    static MenuSVG = _occamstyles.FullScreenModeMenuSVG;
    static defaultProperties = {
        className: "full-screen-mode"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2Z1bGxTY3JlZW5Nb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGdWxsU2NyZWVuTW9kZU1lbnVTVkcgfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5cbmltcG9ydCBNZW51QnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5mdWxsU2NyZWVuTW9kZSgpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24sXG4gICAgICBoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgTWVudVNWRyA9IEZ1bGxTY3JlZW5Nb2RlTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuLW1vZGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiIsIk1lbnVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiZnVsbFNjcmVlbk1vZGUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudENvbnRleHQiLCJzaG93RnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwic2hvdyIsImJpbmQiLCJoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwiaGlkZSIsIk1lbnVTVkciLCJGdWxsU2NyZWVuTW9kZU1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2QkFKaUI7NkRBRWY7Ozs7OztBQUVSLE1BQU1BLGlDQUFpQ0MsYUFBVTtJQUM5REMsZUFBZSxDQUFDQyxPQUFPQztRQUNyQkMsV0FBV0MsY0FBYztRQUV6QkgsTUFBTUksY0FBYztJQUN0QixFQUFDO0lBRURDLGdCQUFnQjtRQUNkLE1BQU1DLCtCQUErQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDbERDLCtCQUErQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO1FBRS9ELE9BQVE7WUFDTkY7WUFDQUc7UUFDRjtJQUNGO0lBRUEsT0FBT0UsVUFBVUMsa0NBQXFCLENBQUM7SUFFdkMsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=