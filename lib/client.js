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
var _state = require("./state");
var _localStorage = require("./localStorage");
var _orientation = require("./utilities/orientation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _easywithstyle.default.renderStyles;
renderStyles();
(0, _localStorage.migratePersistentState)();
var scheduler = null, model = null, view = /*#__PURE__*/ React.createElement(_view.default, null), body = new _easy.Body();
_sufficient.controller.assignMethods(_createMethods.default, scheduler, model, view);
(0, _orientation.onOrientationChange)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    view.updateZoom();
});
(0, _orientation.getOrientation)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    _loading.default.hide();
    body.mount(view);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwic3VmZmljaWVudFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgbG9hZGluZ0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9sb2FkaW5nXCI7XG5pbXBvcnQgY3JlYXRlTWV0aG9kcyBmcm9tIFwiLi9jcmVhdGVNZXRob2RzXCI7XG5cbmltcG9ydCB7IHNldE9yaWVudGF0aW9uIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IG1pZ3JhdGVQZXJzaXN0ZW50U3RhdGUgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGdldE9yaWVudGF0aW9uLCBvbk9yaWVudGF0aW9uQ2hhbmdlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL29yaWVudGF0aW9uXCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5taWdyYXRlUGVyc2lzdGVudFN0YXRlKCk7XG5cbmNvbnN0IHNjaGVkdWxlciA9IG51bGwsXG4gICAgICBtb2RlbCA9IG51bGwsXG4gICAgICB2aWV3ID1cblxuICAgICAgICA8Vmlldy8+XG5cbiAgICAgICxcbiAgICAgIGJvZHkgPSBuZXcgQm9keSgpO1xuXG5jb250cm9sbGVyLmFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgc2NoZWR1bGVyLCBtb2RlbCwgdmlldyk7XG5cbm9uT3JpZW50YXRpb25DaGFuZ2UoKG9yaWVudGF0aW9uKSA9PiB7XG4gIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcblxuICB2aWV3LnVwZGF0ZVpvb20oKTtcbn0pO1xuXG5nZXRPcmllbnRhdGlvbigob3JpZW50YXRpb24pID0+IHtcbiAgc2V0T3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuXG4gIGxvYWRpbmdEaXYuaGlkZSgpO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG59KTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJtaWdyYXRlUGVyc2lzdGVudFN0YXRlIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwiVmlldyIsImJvZHkiLCJCb2R5IiwiY29udHJvbGxlciIsImFzc2lnbk1ldGhvZHMiLCJjcmVhdGVNZXRob2RzIiwib25PcmllbnRhdGlvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwic2V0T3JpZW50YXRpb24iLCJ1cGRhdGVab29tIiwiZ2V0T3JpZW50YXRpb24iLCJsb2FkaW5nRGl2IiwiaGlkZSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlO29CQUVEOzBCQUNNOzJEQUVWOzhEQUNNO29FQUNHO3FCQUVLOzRCQUNROzJCQUNhOzs7Ozs7QUFFcEQsSUFBTSxBQUFFQSxlQUFpQkMsc0JBQVMsQ0FBMUJEO0FBRVJBO0FBRUFFLElBQUFBLG9DQUFzQjtBQUV0QixJQUFNQyxZQUFZLE1BQ1pDLFFBQVEsTUFDUkMscUJBRUUsb0JBQUNDLGFBQUksU0FHUEMsT0FBTyxJQUFJQyxVQUFJO0FBRXJCQyxzQkFBVSxDQUFDQyxhQUFhLENBQUNDLHNCQUFhLEVBQUVSLFdBQVdDLE9BQU9DO0FBRTFETyxJQUFBQSxnQ0FBbUIsRUFBQyxTQUFDQztJQUNuQkMsSUFBQUEscUJBQWMsRUFBQ0Q7SUFFZlIsS0FBS1UsVUFBVTtBQUNqQjtBQUVBQyxJQUFBQSwyQkFBYyxFQUFDLFNBQUNIO0lBQ2RDLElBQUFBLHFCQUFjLEVBQUNEO0lBRWZJLGdCQUFVLENBQUNDLElBQUk7SUFFZlgsS0FBS1ksS0FBSyxDQUFDZDtBQUNiIn0=