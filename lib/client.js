"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("juxtapose");
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _sufficient = require("sufficient");
var _easy = require("easy");
var _fragmented = require("fragmented");
var _view = /*#__PURE__*/ _interop_require_default(require("./view"));
var _createMethods = /*#__PURE__*/ _interop_require_default(require("./createMethods"));
var _constants = require("./constants");
var _localStorage = require("./localStorage");
var _state = require("./state");
var _selectors = require("./selectors");
var _orientation = require("./utilities/orientation");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var renderStyles = _easywithstyle.default.renderStyles;
renderStyles();
(0, _localStorage.migratePersistentState)();
var divDOMElements = _to_consumable_array(document.querySelectorAll(_selectors.DIVS_SELECTOR)); ///
divDOMElements.forEach(function(divDOMElement) {
    divDOMElement.remove();
});
var scheduler = null, model = null, view = /*#__PURE__*/ React.createElement(_view.default, {
    divDOMElements: divDOMElements
});
_sufficient.controller.assignMethods(_createMethods.default, scheduler, model, view);
var body = new _easy.Body(), loadingDiv = new _easy.Element(_selectors.LOADING_DIV_SELECTOR);
(0, _orientation.onOrientationChange)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    view.updateZoom();
});
(0, _fragmented.onFragmentChange)(function(event, element, fragment) {
    var anchorId = "".concat(fragment);
    anchorId === _constants.EMPTY_STRING ? view.showFirstDiv() : view.scrollToAnchor(anchorId);
});
(0, _orientation.getOrientation)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    loadingDiv.hide();
    body.mount(view);
    view.show();
    var overlayHidden = (0, _state.isOverlayHidden)();
    if (!overlayHidden) {}
// const anchorId = `${fragment}`;
//
// (anchorId === EMPTY_STRING) ?
//   view.showFirstDiv() :
//     view.scrollToAnchor(anchorId);
//
// view.updateZoom();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEJvZHksIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgb25GcmFnbWVudENoYW5nZSB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCBjcmVhdGVNZXRob2RzIGZyb20gXCIuL2NyZWF0ZU1ldGhvZHNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtaWdyYXRlUGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBzZXRPcmllbnRhdGlvbiwgaXNPdmVybGF5SGlkZGVuIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IsIExPQURJTkdfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBnZXRPcmllbnRhdGlvbiwgb25PcmllbnRhdGlvbkNoYW5nZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vcmllbnRhdGlvblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxubWlncmF0ZVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG5jb25zdCBkaXZET01FbGVtZW50cyA9IFsgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChESVZTX1NFTEVDVE9SKSBdOyAgLy8vXG5cbmRpdkRPTUVsZW1lbnRzLmZvckVhY2goKGRpdkRPTUVsZW1lbnQpID0+IHtcbiAgZGl2RE9NRWxlbWVudC5yZW1vdmUoKTtcbn0pO1xuXG5jb25zdCBzY2hlZHVsZXIgPSBudWxsLFxuICAgICAgbW9kZWwgPSBudWxsLFxuICAgICAgdmlldyA9XG5cbiAgICAgICAgPFZpZXcgZGl2RE9NRWxlbWVudHM9e2RpdkRPTUVsZW1lbnRzfSAvPlxuXG4gICAgICA7XG5cbmNvbnRyb2xsZXIuYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBzY2hlZHVsZXIsIG1vZGVsLCB2aWV3KTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBsb2FkaW5nRGl2ID0gbmV3IEVsZW1lbnQoTE9BRElOR19ESVZfU0VMRUNUT1IpO1xuXG5vbk9yaWVudGF0aW9uQ2hhbmdlKChvcmllbnRhdGlvbikgPT4ge1xuICBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG5cbiAgdmlldy51cGRhdGVab29tKCk7XG59KTtcblxub25GcmFnbWVudENoYW5nZSgoZXZlbnQsIGVsZW1lbnQsIGZyYWdtZW50KSA9PiB7XG4gIGNvbnN0IGFuY2hvcklkID0gYCR7ZnJhZ21lbnR9YDtcblxuICAoYW5jaG9ySWQgPT09IEVNUFRZX1NUUklORykgP1xuICAgIHZpZXcuc2hvd0ZpcnN0RGl2KCkgOlxuICAgICAgdmlldy5zY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG59KTtcblxuZ2V0T3JpZW50YXRpb24oKG9yaWVudGF0aW9uKSA9PiB7XG4gIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcblxuICBsb2FkaW5nRGl2LmhpZGUoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIHZpZXcuc2hvdygpO1xuXG4gIGNvbnN0IG92ZXJsYXlIaWRkZW4gPSBpc092ZXJsYXlIaWRkZW4oKTtcblxuICBpZiAoIW92ZXJsYXlIaWRkZW4pIHtcblxuICB9XG5cbiAgLy8gY29uc3QgYW5jaG9ySWQgPSBgJHtmcmFnbWVudH1gO1xuICAvL1xuICAvLyAoYW5jaG9ySWQgPT09IEVNUFRZX1NUUklORykgP1xuICAvLyAgIHZpZXcuc2hvd0ZpcnN0RGl2KCkgOlxuICAvLyAgICAgdmlldy5zY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG4gIC8vXG4gIC8vIHZpZXcudXBkYXRlWm9vbSgpO1xufSk7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwibWlncmF0ZVBlcnNpc3RlbnRTdGF0ZSIsImRpdkRPTUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiRElWU19TRUxFQ1RPUiIsImZvckVhY2giLCJkaXZET01FbGVtZW50IiwicmVtb3ZlIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwiVmlldyIsImNvbnRyb2xsZXIiLCJhc3NpZ25NZXRob2RzIiwiY3JlYXRlTWV0aG9kcyIsImJvZHkiLCJCb2R5IiwibG9hZGluZ0RpdiIsIkVsZW1lbnQiLCJMT0FESU5HX0RJVl9TRUxFQ1RPUiIsIm9uT3JpZW50YXRpb25DaGFuZ2UiLCJvcmllbnRhdGlvbiIsInNldE9yaWVudGF0aW9uIiwidXBkYXRlWm9vbSIsIm9uRnJhZ21lbnRDaGFuZ2UiLCJldmVudCIsImVsZW1lbnQiLCJmcmFnbWVudCIsImFuY2hvcklkIiwiRU1QVFlfU1RSSU5HIiwic2hvd0ZpcnN0RGl2Iiwic2Nyb2xsVG9BbmNob3IiLCJnZXRPcmllbnRhdGlvbiIsImhpZGUiLCJtb3VudCIsInNob3ciLCJvdmVybGF5SGlkZGVuIiwiaXNPdmVybGF5SGlkZGVuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlOzBCQUVLO29CQUNHOzBCQUNHOzJEQUVoQjtvRUFDUzt5QkFFRzs0QkFDVTtxQkFDUzt5QkFDSTsyQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVBLGVBQWlCQyxzQkFBUyxDQUExQkQ7QUFFUkE7QUFFQUUsSUFBQUEsb0NBQXNCO0FBRXRCLElBQU1DLGlCQUFtQixxQkFBR0MsU0FBU0MsZ0JBQWdCLENBQUNDLHdCQUFhLElBQU0sR0FBRztBQUU1RUgsZUFBZUksT0FBTyxDQUFDLFNBQUNDO0lBQ3RCQSxjQUFjQyxNQUFNO0FBQ3RCO0FBRUEsSUFBTUMsWUFBWSxNQUNaQyxRQUFRLE1BQ1JDLHFCQUVFLG9CQUFDQyxhQUFJO0lBQUNWLGdCQUFnQkE7O0FBSTlCVyxzQkFBVSxDQUFDQyxhQUFhLENBQUNDLHNCQUFhLEVBQUVOLFdBQVdDLE9BQU9DO0FBRTFELElBQU1LLE9BQU8sSUFBSUMsVUFBSSxJQUNmQyxhQUFhLElBQUlDLGFBQU8sQ0FBQ0MsK0JBQW9CO0FBRW5EQyxJQUFBQSxnQ0FBbUIsRUFBQyxTQUFDQztJQUNuQkMsSUFBQUEscUJBQWMsRUFBQ0Q7SUFFZlgsS0FBS2EsVUFBVTtBQUNqQjtBQUVBQyxJQUFBQSw0QkFBZ0IsRUFBQyxTQUFDQyxPQUFPQyxTQUFTQztJQUNoQyxJQUFNQyxXQUFXLEFBQUMsR0FBVyxPQUFURDtJQUVuQkMsYUFBYUMsdUJBQVksR0FDeEJuQixLQUFLb0IsWUFBWSxLQUNmcEIsS0FBS3FCLGNBQWMsQ0FBQ0g7QUFDMUI7QUFFQUksSUFBQUEsMkJBQWMsRUFBQyxTQUFDWDtJQUNkQyxJQUFBQSxxQkFBYyxFQUFDRDtJQUVmSixXQUFXZ0IsSUFBSTtJQUVmbEIsS0FBS21CLEtBQUssQ0FBQ3hCO0lBRVhBLEtBQUt5QixJQUFJO0lBRVQsSUFBTUMsZ0JBQWdCQyxJQUFBQSxzQkFBZTtJQUVyQyxJQUFJLENBQUNELGVBQWUsQ0FFcEI7QUFFQSxrQ0FBa0M7QUFDbEMsRUFBRTtBQUNGLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIscUNBQXFDO0FBQ3JDLEVBQUU7QUFDRixxQkFBcUI7QUFDdkIifQ==