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
var _state = require("./state");
var _localStorage = require("./localStorage");
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
(0, _fragmented.onFragmentChange)(function(event, element, fragment1) {
    var anchorId = "".concat(fragment1);
    anchorId === _constants.EMPTY_STRING ? view.showFirstDiv() : view.scrollToAnchor(anchorId);
});
(0, _orientation.getOrientation)(function(orientation) {
    (0, _state.setOrientation)(orientation);
    loadingDiv.hide();
    body.mount(view);
    var anchorId = "".concat(fragment);
    anchorId === _constants.EMPTY_STRING ? view.showFirstDiv() : view.scrollToAnchor(anchorId);
    view.updateZoom();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEJvZHksIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgb25GcmFnbWVudENoYW5nZSB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCBjcmVhdGVNZXRob2RzIGZyb20gXCIuL2NyZWF0ZU1ldGhvZHNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzZXRPcmllbnRhdGlvbiB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBtaWdyYXRlUGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBESVZTX1NFTEVDVE9SLCBMT0FESU5HX0RJVl9TRUxFQ1RPUiB9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgZ2V0T3JpZW50YXRpb24sIG9uT3JpZW50YXRpb25DaGFuZ2UgfSBmcm9tIFwiLi91dGlsaXRpZXMvb3JpZW50YXRpb25cIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbm1pZ3JhdGVQZXJzaXN0ZW50U3RhdGUoKTtcblxuY29uc3QgZGl2RE9NRWxlbWVudHMgPSBbIC4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoRElWU19TRUxFQ1RPUikgXTsgIC8vL1xuXG5kaXZET01FbGVtZW50cy5mb3JFYWNoKChkaXZET01FbGVtZW50KSA9PiB7XG4gIGRpdkRPTUVsZW1lbnQucmVtb3ZlKCk7XG59KTtcblxuY29uc3Qgc2NoZWR1bGVyID0gbnVsbCxcbiAgICAgIG1vZGVsID0gbnVsbCxcbiAgICAgIHZpZXcgPVxuXG4gICAgICAgIDxWaWV3IGRpdkRPTUVsZW1lbnRzPXtkaXZET01FbGVtZW50c30gLz5cblxuICAgICAgO1xuXG5jb250cm9sbGVyLmFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgc2NoZWR1bGVyLCBtb2RlbCwgdmlldyk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgbG9hZGluZ0RpdiA9IG5ldyBFbGVtZW50KExPQURJTkdfRElWX1NFTEVDVE9SKTtcblxub25PcmllbnRhdGlvbkNoYW5nZSgob3JpZW50YXRpb24pID0+IHtcbiAgc2V0T3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuXG4gIHZpZXcudXBkYXRlWm9vbSgpO1xufSk7XG5cbm9uRnJhZ21lbnRDaGFuZ2UoKGV2ZW50LCBlbGVtZW50LCBmcmFnbWVudCkgPT4ge1xuICBjb25zdCBhbmNob3JJZCA9IGAke2ZyYWdtZW50fWA7XG5cbiAgKGFuY2hvcklkID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICB2aWV3LnNob3dGaXJzdERpdigpIDpcbiAgICAgIHZpZXcuc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xufSk7XG5cbmdldE9yaWVudGF0aW9uKChvcmllbnRhdGlvbikgPT4ge1xuICBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG5cbiAgbG9hZGluZ0Rpdi5oaWRlKCk7XG5cbiAgYm9keS5tb3VudCh2aWV3KTtcblxuICBjb25zdCBhbmNob3JJZCA9IGAke2ZyYWdtZW50fWA7XG5cbiAgKGFuY2hvcklkID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICB2aWV3LnNob3dGaXJzdERpdigpIDpcbiAgICAgIHZpZXcuc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xuXG4gIHZpZXcudXBkYXRlWm9vbSgpO1xufSk7XG4iXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwibWlncmF0ZVBlcnNpc3RlbnRTdGF0ZSIsImRpdkRPTUVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiRElWU19TRUxFQ1RPUiIsImZvckVhY2giLCJkaXZET01FbGVtZW50IiwicmVtb3ZlIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3IiwiVmlldyIsImNvbnRyb2xsZXIiLCJhc3NpZ25NZXRob2RzIiwiY3JlYXRlTWV0aG9kcyIsImJvZHkiLCJCb2R5IiwibG9hZGluZ0RpdiIsIkVsZW1lbnQiLCJMT0FESU5HX0RJVl9TRUxFQ1RPUiIsIm9uT3JpZW50YXRpb25DaGFuZ2UiLCJvcmllbnRhdGlvbiIsInNldE9yaWVudGF0aW9uIiwidXBkYXRlWm9vbSIsIm9uRnJhZ21lbnRDaGFuZ2UiLCJldmVudCIsImVsZW1lbnQiLCJmcmFnbWVudCIsImFuY2hvcklkIiwiRU1QVFlfU1RSSU5HIiwic2hvd0ZpcnN0RGl2Iiwic2Nyb2xsVG9BbmNob3IiLCJnZXRPcmllbnRhdGlvbiIsImhpZGUiLCJtb3VudCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OztRQUVPO29FQUVlOzBCQUVLO29CQUNHOzBCQUNHOzJEQUVoQjtvRUFDUzt5QkFFRztxQkFDRTs0QkFDUTt5QkFDYTsyQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVBLGVBQWlCQyxzQkFBUyxDQUExQkQ7QUFFUkE7QUFFQUUsSUFBQUEsb0NBQXNCO0FBRXRCLElBQU1DLGlCQUFtQixxQkFBR0MsU0FBU0MsZ0JBQWdCLENBQUNDLHdCQUFhLElBQU0sR0FBRztBQUU1RUgsZUFBZUksT0FBTyxDQUFDLFNBQUNDO0lBQ3RCQSxjQUFjQyxNQUFNO0FBQ3RCO0FBRUEsSUFBTUMsWUFBWSxNQUNaQyxRQUFRLE1BQ1JDLHFCQUVFLG9CQUFDQyxhQUFJO0lBQUNWLGdCQUFnQkE7O0FBSTlCVyxzQkFBVSxDQUFDQyxhQUFhLENBQUNDLHNCQUFhLEVBQUVOLFdBQVdDLE9BQU9DO0FBRTFELElBQU1LLE9BQU8sSUFBSUMsVUFBSSxJQUNmQyxhQUFhLElBQUlDLGFBQU8sQ0FBQ0MsK0JBQW9CO0FBRW5EQyxJQUFBQSxnQ0FBbUIsRUFBQyxTQUFDQztJQUNuQkMsSUFBQUEscUJBQWMsRUFBQ0Q7SUFFZlgsS0FBS2EsVUFBVTtBQUNqQjtBQUVBQyxJQUFBQSw0QkFBZ0IsRUFBQyxTQUFDQyxPQUFPQyxTQUFTQztJQUNoQyxJQUFNQyxXQUFXLEFBQUMsR0FBVyxPQUFURDtJQUVuQkMsYUFBYUMsdUJBQVksR0FDeEJuQixLQUFLb0IsWUFBWSxLQUNmcEIsS0FBS3FCLGNBQWMsQ0FBQ0g7QUFDMUI7QUFFQUksSUFBQUEsMkJBQWMsRUFBQyxTQUFDWDtJQUNkQyxJQUFBQSxxQkFBYyxFQUFDRDtJQUVmSixXQUFXZ0IsSUFBSTtJQUVmbEIsS0FBS21CLEtBQUssQ0FBQ3hCO0lBRVgsSUFBTWtCLFdBQVcsQUFBQyxHQUFXLE9BQVREO0lBRW5CQyxhQUFhQyx1QkFBWSxHQUN4Qm5CLEtBQUtvQixZQUFZLEtBQ2ZwQixLQUFLcUIsY0FBYyxDQUFDSDtJQUV4QmxCLEtBQUthLFVBQVU7QUFDakIifQ==