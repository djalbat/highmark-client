"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _styles = require("../../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MenuButton extends _easy.Button {
    didMount() {
        const { hidden = false } = this.properties;
        if (hidden) {
            this.hide();
        }
        this.onClick(this.clickHandler);
    }
    isActive() {
        const active = this.hasClass("active");
        return active;
    }
    activate() {
        this.addClass("active");
    }
    deactivate() {
        this.removeClass("active");
    }
    willUnmount() {
        this.offClick(this.clickHandler);
    }
    childElements() {
        const { MenuSVG } = this.constructor;
        return /*#__PURE__*/ React.createElement(MenuSVG, null);
    }
    static ignoredProperties = [
        "hidden"
    ];
    static defaultProperties = {
        className: "menu"
    };
}
const _default = (0, _easywithstyle.default)(MenuButton)`

  fill: ${_styles.menuButtonFill};
  width: ${_styles.menuButtonWidth};
  height: auto;
  cursor: pointer;
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  
  .active {
    fill: ${_styles.menuButtonDisabledFill};
    cursor: default;
    filter: drop-shadow(0 0 3px ${_styles.menuButtonDisabledColour});  
  }
   
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBtZW51QnV0dG9uRmlsbCwgbWVudUJ1dHRvbldpZHRoLCBtZW51QnV0dG9uRGlzYWJsZWRGaWxsLCBtZW51QnV0dG9uRGlzYWJsZWRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGhpZGRlbiA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgIHJldHVybiBhY3RpdmU7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgTWVudVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxNZW51U1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJoaWRkZW5cIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVudVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNZW51QnV0dG9uKWBcblxuICBmaWxsOiAke21lbnVCdXR0b25GaWxsfTtcbiAgd2lkdGg6ICR7bWVudUJ1dHRvbldpZHRofTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gIC5hY3RpdmUge1xuICAgIGZpbGw6ICR7bWVudUJ1dHRvbkRpc2FibGVkRmlsbH07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDNweCAke21lbnVCdXR0b25EaXNhYmxlZENvbG91cn0pOyAgXG4gIH1cbiAgIFxuYDtcbiJdLCJuYW1lcyI6WyJNZW51QnV0dG9uIiwiQnV0dG9uIiwiZGlkTW91bnQiLCJoaWRkZW4iLCJwcm9wZXJ0aWVzIiwiaGlkZSIsIm9uQ2xpY2siLCJjbGlja0hhbmRsZXIiLCJpc0FjdGl2ZSIsImFjdGl2ZSIsImhhc0NsYXNzIiwiYWN0aXZhdGUiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJyZW1vdmVDbGFzcyIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwiTWVudVNWRyIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJtZW51QnV0dG9uRmlsbCIsIm1lbnVCdXR0b25XaWR0aCIsIm1lbnVCdXR0b25EaXNhYmxlZEZpbGwiLCJtZW51QnV0dG9uRGlzYWJsZWRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdEQTs7O2VBQUE7OztzRUF0RHNCO3NCQUVDO3dCQUUyRTs7Ozs7O0FBRWxHLE1BQU1BLG1CQUFtQkMsWUFBTTtJQUM3QkMsV0FBVztRQUNULE1BQU0sRUFBRUMsU0FBUyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUNDLFVBQVU7UUFFMUMsSUFBSUQsUUFBUTtZQUNWLElBQUksQ0FBQ0UsSUFBSTtRQUNYO1FBRUEsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDQyxZQUFZO0lBQ2hDO0lBRUFDLFdBQVc7UUFDVCxNQUFNQyxTQUFTLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1FBRTdCLE9BQU9EO0lBQ1Q7SUFFQUUsV0FBVztRQUNULElBQUksQ0FBQ0MsUUFBUSxDQUFDO0lBQ2hCO0lBRUFDLGFBQWE7UUFDWCxJQUFJLENBQUNDLFdBQVcsQ0FBQztJQUNuQjtJQUVBQyxjQUFjO1FBQ1osSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDVCxZQUFZO0lBQ2pDO0lBRUFVLGdCQUFnQjtRQUNkLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFFcEMscUJBRUUsb0JBQUNBO0lBR0w7SUFFQSxPQUFPQyxvQkFBb0I7UUFDekI7S0FDRCxDQUFDO0lBRUYsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3RCLFdBQVcsQ0FBQzs7UUFFN0IsRUFBRXVCLHNCQUFjLENBQUM7U0FDaEIsRUFBRUMsdUJBQWUsQ0FBQzs7Ozs7Ozs7O1VBU2pCLEVBQUVDLDhCQUFzQixDQUFDOztnQ0FFSCxFQUFFQyxnQ0FBd0IsQ0FBQzs7O0FBRzNELENBQUMifQ==