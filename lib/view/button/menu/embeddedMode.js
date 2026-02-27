"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbeddedModeMenuButton;
    }
});
const _occamstyles = require("occam-styles");
const _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EmbeddedModeMenuButton extends _menu.default {
    clickHandler = (event, element)=>{
        controller.embeddedMode();
        event.preventDefault();
    };
    parentContext() {
        const showEmbeddedModeMenuButton = this.show.bind(this), hideEmbeddedModeMenuButton = this.hide.bind(this); ///
        return {
            showEmbeddedModeMenuButton,
            hideEmbeddedModeMenuButton
        };
    }
    static MenuSVG = _occamstyles.EmbeddedModeMenuSVG;
    static defaultProperties = {
        className: "embedded-mode"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2VtYmVkZGVkTW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRW1iZWRkZWRNb2RlTWVudVNWRyB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkZGVkTW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5lbWJlZGRlZE1vZGUoKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFbWJlZGRlZE1vZGVNZW51QnV0dG9uID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dFbWJlZGRlZE1vZGVNZW51QnV0dG9uLFxuICAgICAgaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBNZW51U1ZHID0gRW1iZWRkZWRNb2RlTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVtYmVkZGVkLW1vZGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJNZW51QnV0dG9uIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsImVtYmVkZGVkTW9kZSIsInByZXZlbnREZWZhdWx0IiwicGFyZW50Q29udGV4dCIsInNob3dFbWJlZGRlZE1vZGVNZW51QnV0dG9uIiwic2hvdyIsImJpbmQiLCJoaWRlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiIsImhpZGUiLCJNZW51U1ZHIiwiRW1iZWRkZWRNb2RlTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZCQUplOzZEQUViOzs7Ozs7QUFFUixNQUFNQSwrQkFBK0JDLGFBQVU7SUFDNURDLGVBQWUsQ0FBQ0MsT0FBT0M7UUFDckJDLFdBQVdDLFlBQVk7UUFFdkJILE1BQU1JLGNBQWM7SUFDdEIsRUFBQztJQUVEQyxnQkFBZ0I7UUFDZCxNQUFNQyw2QkFBNkIsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ2hEQyw2QkFBNkIsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztRQUU3RCxPQUFRO1lBQ05GO1lBQ0FHO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLFVBQVVDLGdDQUFtQixDQUFDO0lBRXJDLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9