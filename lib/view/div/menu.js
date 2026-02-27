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
const _draftMode = /*#__PURE__*/ _interop_require_default(require("../button/menu/draftMode"));
const _embeddedMode = /*#__PURE__*/ _interop_require_default(require("../button/menu/embeddedMode"));
const _invertColours = /*#__PURE__*/ _interop_require_default(require("../button/menu/invertColours"));
const _fullScreenMode = /*#__PURE__*/ _interop_require_default(require("../button/menu/fullScreenMode"));
const _presentationMode = /*#__PURE__*/ _interop_require_default(require("../button/menu/presentationMode"));
const _constants = require("../../constants");
const _styles = require("../../styles");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class MenuDiv extends _easy.Element {
    toggle() {
        const showing = this.isShowing();
        showing ? this.hide() : this.show();
    }
    show() {
        const display = _constants.FLEX;
        this.display(display);
    }
    didMount() {
        this.hide();
    }
    willUnmount() {
    ///
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_invertColours.default, null),
            /*#__PURE__*/ React.createElement(_presentationMode.default, null),
            /*#__PURE__*/ React.createElement(_draftMode.default, null),
            /*#__PURE__*/ React.createElement(_embeddedMode.default, {
                hidden: true
            }),
            /*#__PURE__*/ React.createElement(_fullScreenMode.default, null)
        ];
    }
    parentContext() {
        const context = this.getContext(), toggleMenuDiv = this.toggle.bind(this);
        return {
            ...context,
            toggleMenuDiv
        };
    }
    static tagName = "div";
    static defaultProperties = {
        className: "menu"
    };
}
const _default = (0, _easywithstyle.default)(MenuDiv)`

  top: 0;
  left: 0;
  right: 0;
  padding: ${_styles.menuDivPadding};
  z-index: 1;
  display: flex;
  position: fixed;  
  column-gap: ${_styles.menuDivColumnGap};
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${_styles.menuDivBackgroundColour};
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IERyYWZ0TW9kZU1lbnVCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9tZW51L2RyYWZ0TW9kZVwiO1xuaW1wb3J0IEVtYmVkZGVkTW9kZU1lbnVCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9tZW51L2VtYmVkZGVkTW9kZVwiO1xuaW1wb3J0IEludmVydENvbG91cnNNZW51QnV0dG9uIGZyb20gXCIuLi9idXR0b24vbWVudS9pbnZlcnRDb2xvdXJzXCI7XG5pbXBvcnQgRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIGZyb20gXCIuLi9idXR0b24vbWVudS9mdWxsU2NyZWVuTW9kZVwiO1xuaW1wb3J0IFByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uIGZyb20gXCIuLi9idXR0b24vbWVudS9wcmVzZW50YXRpb25Nb2RlXCI7XG5cbmltcG9ydCB7IEZMRVggfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtZW51RGl2UGFkZGluZywgbWVudURpdkNvbHVtbkdhcCwgbWVudURpdkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1lbnVEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IHNob3dpbmcgPSB0aGlzLmlzU2hvd2luZygpO1xuXG4gICAgc2hvd2luZyA/XG4gICAgICB0aGlzLmhpZGUoKSA6XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gRkxFWDtcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW52ZXJ0Q29sb3Vyc01lbnVCdXR0b24vPixcbiAgICAgIDxQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbi8+LFxuICAgICAgPERyYWZ0TW9kZU1lbnVCdXR0b24vPixcbiAgICAgIDxFbWJlZGRlZE1vZGVNZW51QnV0dG9uIGhpZGRlbiAvPixcbiAgICAgIDxGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24vPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b2dnbGVNZW51RGl2ID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHRvZ2dsZU1lbnVEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWVudURpdilgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogJHttZW51RGl2UGFkZGluZ307XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDsgIFxuICBjb2x1bW4tZ2FwOiAke21lbnVEaXZDb2x1bW5HYXB9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHttZW51RGl2QmFja2dyb3VuZENvbG91cn07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJNZW51RGl2IiwiRWxlbWVudCIsInRvZ2dsZSIsInNob3dpbmciLCJpc1Nob3dpbmciLCJoaWRlIiwic2hvdyIsImRpc3BsYXkiLCJGTEVYIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJJbnZlcnRDb2xvdXJzTWVudUJ1dHRvbiIsIlByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uIiwiRHJhZnRNb2RlTWVudUJ1dHRvbiIsIkVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJoaWRkZW4iLCJGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJwYXJlbnRDb250ZXh0IiwiY29udGV4dCIsImdldENvbnRleHQiLCJ0b2dnbGVNZW51RGl2IiwiYmluZCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm1lbnVEaXZQYWRkaW5nIiwibWVudURpdkNvbHVtbkdhcCIsIm1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtRUE7OztlQUFBOzs7c0VBakVzQjtzQkFFRTtrRUFFUTtxRUFDRztzRUFDQzt1RUFDQzt5RUFDRTsyQkFFbEI7d0JBQ3FEOzs7Ozs7QUFFMUUsTUFBTUEsZ0JBQWdCQyxhQUFPO0lBQzNCQyxTQUFTO1FBQ1AsTUFBTUMsVUFBVSxJQUFJLENBQUNDLFNBQVM7UUFFOUJELFVBQ0UsSUFBSSxDQUFDRSxJQUFJLEtBQ1AsSUFBSSxDQUFDQyxJQUFJO0lBQ2Y7SUFFQUEsT0FBTztRQUNMLE1BQU1DLFVBQVVDLGVBQUk7UUFFcEIsSUFBSSxDQUFDRCxPQUFPLENBQUNBO0lBQ2Y7SUFFQUUsV0FBVztRQUNULElBQUksQ0FBQ0osSUFBSTtJQUNYO0lBRUFLLGNBQWM7SUFDWixHQUFHO0lBQ0w7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBUTswQkFFTixvQkFBQ0Msc0JBQXVCOzBCQUN4QixvQkFBQ0MseUJBQTBCOzBCQUMzQixvQkFBQ0Msa0JBQW1COzBCQUNwQixvQkFBQ0MscUJBQXNCO2dCQUFDQyxRQUFBQTs7MEJBQ3hCLG9CQUFDQyx1QkFBd0I7U0FFMUI7SUFDSDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZ0JBQWdCLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ29CLElBQUksQ0FBQyxJQUFJO1FBRTNDLE9BQVE7WUFDTixHQUFHSCxPQUFPO1lBQ1ZFO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLFVBQVUsTUFBTTtJQUV2QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDMUIsUUFBUSxDQUFDOzs7OztXQUt2QixFQUFFMkIsc0JBQWMsQ0FBQzs7OztjQUlkLEVBQUVDLHdCQUFnQixDQUFDOzs7O29CQUliLEVBQUVDLCtCQUF1QixDQUFDOztBQUU5QyxDQUFDIn0=