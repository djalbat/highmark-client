"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _sufficient = require("sufficient");
var _view = /*#__PURE__*/ _interop_require_default(require("./view"));
var _loading = /*#__PURE__*/ _interop_require_default(require("./view/div/loading"));
var _createMethods = /*#__PURE__*/ _interop_require_default(require("./createMethods"));
var _orientation = require("./utilities/orientation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easywithstyle.default.renderStyles;
renderStyles();
var scheduler = null, model = null, view = /*#__PURE__*/ React.createElement(_view.default, null), body = new _easy.Body();
_sufficient.controller.assignMethods(_createMethods.default, scheduler, model, view);
(0, _orientation.onOrientationChange)(function(orientation) {
    view.zoom();
});
_loading.default.hide();
body.mount(view);
view.zoom();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwic3VmZmljaWVudFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgbG9hZGluZ0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9sb2FkaW5nXCI7XG5pbXBvcnQgY3JlYXRlTWV0aG9kcyBmcm9tIFwiLi9jcmVhdGVNZXRob2RzXCI7XG5cbmltcG9ydCB7IG9uT3JpZW50YXRpb25DaGFuZ2UgfSBmcm9tIFwiLi91dGlsaXRpZXMvb3JpZW50YXRpb25cIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbmNvbnN0IHNjaGVkdWxlciA9IG51bGwsXG4gICAgICBtb2RlbCA9IG51bGwsXG4gICAgICB2aWV3ID1cblxuICAgICAgICA8Vmlldy8+XG5cbiAgICAgICxcbiAgICAgIGJvZHkgPSBuZXcgQm9keSgpO1xuXG5jb250cm9sbGVyLmFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgc2NoZWR1bGVyLCBtb2RlbCwgdmlldyk7XG5cbm9uT3JpZW50YXRpb25DaGFuZ2UoKG9yaWVudGF0aW9uKSA9PiB7XG4gIHZpZXcuem9vbSgpO1xufSk7XG5cbmxvYWRpbmdEaXYuaGlkZSgpO1xuXG5ib2R5Lm1vdW50KHZpZXcpO1xuXG52aWV3Lnpvb20oKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJWaWV3IiwiYm9keSIsIkJvZHkiLCJjb250cm9sbGVyIiwiYXNzaWduTWV0aG9kcyIsImNyZWF0ZU1ldGhvZHMiLCJvbk9yaWVudGF0aW9uQ2hhbmdlIiwib3JpZW50YXRpb24iLCJ6b29tIiwibG9hZGluZ0RpdiIsImhpZGUiLCJtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7UUFFTztvRUFFZTtvQkFFRDswQkFDTTsyREFFVjs4REFDTTtvRUFDRzsyQkFFVTs7Ozs7O0FBRXBDLElBQU0sQUFBRUEsZUFBaUJDLHNCQUFTLENBQTFCRDtBQUVSQTtBQUVBLElBQU1FLFlBQVksTUFDWkMsUUFBUSxNQUNSQyxxQkFFRSxvQkFBQ0MsYUFBSSxTQUdQQyxPQUFPLElBQUlDLFVBQUk7QUFFckJDLHNCQUFVLENBQUNDLGFBQWEsQ0FBQ0Msc0JBQWEsRUFBRVIsV0FBV0MsT0FBT0M7QUFFMURPLElBQUFBLGdDQUFtQixFQUFDLFNBQUNDO0lBQ25CUixLQUFLUyxJQUFJO0FBQ1g7QUFFQUMsZ0JBQVUsQ0FBQ0MsSUFBSTtBQUVmVCxLQUFLVSxLQUFLLENBQUNaO0FBRVhBLEtBQUtTLElBQUkifQ==