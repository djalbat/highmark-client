"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PresentationModeMenuButton;
    }
});
const _occamstyles = require("occam-styles");
const _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PresentationModeMenuButton extends _menu.default {
    clickHandler = (event, element)=>{
        controller.presentationMode();
        event.preventDefault();
    };
    parentContext() {
        const activatePresentationModeMenuButton = this.activate.bind(this), deactivatePresentationModeMenuButton = this.deactivate.bind(this); ///
        return {
            activatePresentationModeMenuButton,
            deactivatePresentationModeMenuButton
        };
    }
    static MenuSVG = _occamstyles.PresentationModeMenuSVG;
    static defaultProperties = {
        className: "presentation-mode"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L3ByZXNlbnRhdGlvbk1vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFByZXNlbnRhdGlvbk1vZGVNZW51U1ZHIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5wcmVzZW50YXRpb25Nb2RlKCk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uID0gdGhpcy5hY3RpdmF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZGVhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uID0gdGhpcy5kZWFjdGl2YXRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbixcbiAgICAgIGRlYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIE1lbnVTVkcgPSBQcmVzZW50YXRpb25Nb2RlTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXNlbnRhdGlvbi1tb2RlXCIsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJNZW51QnV0dG9uIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInByZXNlbnRhdGlvbk1vZGUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudENvbnRleHQiLCJhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uIiwiYWN0aXZhdGUiLCJiaW5kIiwiZGVhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uIiwiZGVhY3RpdmF0ZSIsIk1lbnVTVkciLCJQcmVzZW50YXRpb25Nb2RlTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZCQUptQjs2REFFakI7Ozs7OztBQUVSLE1BQU1BLG1DQUFtQ0MsYUFBVTtJQUNoRUMsZUFBZSxDQUFDQyxPQUFPQztRQUNyQkMsV0FBV0MsZ0JBQWdCO1FBRTNCSCxNQUFNSSxjQUFjO0lBQ3RCLEVBQUM7SUFFREMsZ0JBQWdCO1FBQ2QsTUFBTUMscUNBQXFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUM1REMsdUNBQXVDLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7UUFFN0UsT0FBUTtZQUNORjtZQUNBRztRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxVQUFVQyxvQ0FBdUIsQ0FBQztJQUV6QyxPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==