"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DraftModeMenuButton;
    }
});
const _occamstyles = require("occam-styles");
const _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class DraftModeMenuButton extends _menu.default {
    clickHandler = (event, element)=>{
        controller.draftMode();
        event.preventDefault();
    };
    parentContext() {
        const activateDraftModeMenuButton = this.activate.bind(this), deactivateDraftModeMenuButton = this.deactivate.bind(this); ///
        return {
            activateDraftModeMenuButton,
            deactivateDraftModeMenuButton
        };
    }
    static MenuSVG = _occamstyles.DraftModeMenuSVG;
    static defaultProperties = {
        className: "draft-mode"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2RyYWZ0TW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRHJhZnRNb2RlTWVudVNWRyB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0TW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5kcmFmdE1vZGUoKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbiA9IHRoaXMuYWN0aXZhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24gPSB0aGlzLmRlYWN0aXZhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbixcbiAgICAgIGRlYWN0aXZhdGVEcmFmdE1vZGVNZW51QnV0dG9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgTWVudVNWRyA9IERyYWZ0TW9kZU1lbnVTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkcmFmdC1tb2RlXCIsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRHJhZnRNb2RlTWVudUJ1dHRvbiIsIk1lbnVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiZHJhZnRNb2RlIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRDb250ZXh0IiwiYWN0aXZhdGVEcmFmdE1vZGVNZW51QnV0dG9uIiwiYWN0aXZhdGUiLCJiaW5kIiwiZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24iLCJkZWFjdGl2YXRlIiwiTWVudVNWRyIsIkRyYWZ0TW9kZU1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozs2QkFKWTs2REFFVjs7Ozs7O0FBRVIsTUFBTUEsNEJBQTRCQyxhQUFVO0lBQ3pEQyxlQUFlLENBQUNDLE9BQU9DO1FBQ3JCQyxXQUFXQyxTQUFTO1FBRXBCSCxNQUFNSSxjQUFjO0lBQ3RCLEVBQUM7SUFFREMsZ0JBQWdCO1FBQ2QsTUFBTUMsOEJBQThCLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNyREMsZ0NBQWdDLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7UUFFckUsT0FBUTtZQUNORjtZQUNBRztRQUNGO0lBQ0Y7SUFFQSxPQUFPRSxVQUFVQyw2QkFBZ0IsQ0FBQztJQUVsQyxPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==