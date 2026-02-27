"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InvertColoursMenuButton;
    }
});
const _occamstyles = require("occam-styles");
const _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class InvertColoursMenuButton extends _menu.default {
    clickHandler = (event, element)=>{
        const active = this.isActive();
        if (active) {
            this.deactivate();
            controller.revertColours();
        } else {
            this.activate();
            controller.invertColours();
        }
        event.preventDefault();
    };
    static MenuSVG = _occamstyles.InvertColoursMenuSVG;
    static defaultProperties = {
        className: "invert-colours"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2ludmVydENvbG91cnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEludmVydENvbG91cnNNZW51U1ZHIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZXJ0Q29sb3Vyc01lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG5cbiAgICAgIGNvbnRyb2xsZXIucmV2ZXJ0Q29sb3VycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XG5cbiAgICAgIGNvbnRyb2xsZXIuaW52ZXJ0Q29sb3VycygpO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzdGF0aWMgTWVudVNWRyA9IEludmVydENvbG91cnNNZW51U1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW52ZXJ0LWNvbG91cnNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkludmVydENvbG91cnNNZW51QnV0dG9uIiwiTWVudUJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImFjdGl2ZSIsImlzQWN0aXZlIiwiZGVhY3RpdmF0ZSIsImNvbnRyb2xsZXIiLCJyZXZlcnRDb2xvdXJzIiwiYWN0aXZhdGUiLCJpbnZlcnRDb2xvdXJzIiwicHJldmVudERlZmF1bHQiLCJNZW51U1ZHIiwiSW52ZXJ0Q29sb3Vyc01lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2QkFKZ0I7NkRBRWQ7Ozs7OztBQUVSLE1BQU1BLGdDQUFnQ0MsYUFBVTtJQUM3REMsZUFBZSxDQUFDQyxPQUFPQztRQUNyQixNQUFNQyxTQUFTLElBQUksQ0FBQ0MsUUFBUTtRQUU1QixJQUFJRCxRQUFRO1lBQ1YsSUFBSSxDQUFDRSxVQUFVO1lBRWZDLFdBQVdDLGFBQWE7UUFDMUIsT0FBTztZQUNMLElBQUksQ0FBQ0MsUUFBUTtZQUViRixXQUFXRyxhQUFhO1FBQzFCO1FBRUFSLE1BQU1TLGNBQWM7SUFDdEIsRUFBQztJQUVELE9BQU9DLFVBQVVDLGlDQUFvQixDQUFDO0lBRXRDLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9