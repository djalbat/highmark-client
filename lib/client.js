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
    var overlayHidden = (0, _state.isOverlayHidden)();
    if (overlayHidden) {
        _sufficient.controller.showDivisions();
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEJvZHksIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgb25GcmFnbWVudENoYW5nZSB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCBjcmVhdGVNZXRob2RzIGZyb20gXCIuL2NyZWF0ZU1ldGhvZHNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtaWdyYXRlUGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBzZXRPcmllbnRhdGlvbiwgaXNPdmVybGF5SGlkZGVuIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IsIExPQURJTkdfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBnZXRPcmllbnRhdGlvbiwgb25PcmllbnRhdGlvbkNoYW5nZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vcmllbnRhdGlvblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxubWlncmF0ZVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG5jb25zdCBkaXZET01FbGVtZW50cyA9IFsgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChESVZTX1NFTEVDVE9SKSBdOyAgLy8vXG5cbmRpdkRPTUVsZW1lbnRzLmZvckVhY2goKGRpdkRPTUVsZW1lbnQpID0+IHtcbiAgZGl2RE9NRWxlbWVudC5yZW1vdmUoKTtcbn0pO1xuXG5jb25zdCBzY2hlZHVsZXIgPSBudWxsLFxuICAgICAgbW9kZWwgPSBudWxsLFxuICAgICAgdmlldyA9XG5cbiAgICAgICAgPFZpZXcgZGl2RE9NRWxlbWVudHM9e2RpdkRPTUVsZW1lbnRzfSAvPlxuXG4gICAgICA7XG5cbmNvbnRyb2xsZXIuYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBzY2hlZHVsZXIsIG1vZGVsLCB2aWV3KTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBsb2FkaW5nRGl2ID0gbmV3IEVsZW1lbnQoTE9BRElOR19ESVZfU0VMRUNUT1IpO1xuXG5vbk9yaWVudGF0aW9uQ2hhbmdlKChvcmllbnRhdGlvbikgPT4ge1xuICBzZXRPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG5cbiAgdmlldy51cGRhdGVab29tKCk7XG59KTtcblxub25GcmFnbWVudENoYW5nZSgoZXZlbnQsIGVsZW1lbnQsIGZyYWdtZW50KSA9PiB7XG4gIGNvbnN0IGFuY2hvcklkID0gYCR7ZnJhZ21lbnR9YDtcblxuICAoYW5jaG9ySWQgPT09IEVNUFRZX1NUUklORykgP1xuICAgIHZpZXcuc2hvd0ZpcnN0RGl2KCkgOlxuICAgICAgdmlldy5zY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG59KTtcblxuZ2V0T3JpZW50YXRpb24oKG9yaWVudGF0aW9uKSA9PiB7XG4gIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcblxuICBsb2FkaW5nRGl2LmhpZGUoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGNvbnN0IG92ZXJsYXlIaWRkZW4gPSBpc092ZXJsYXlIaWRkZW4oKTtcblxuICBpZiAob3ZlcmxheUhpZGRlbikge1xuICAgIGNvbnRyb2xsZXIuc2hvd0RpdmlzaW9ucygpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJtaWdyYXRlUGVyc2lzdGVudFN0YXRlIiwiZGl2RE9NRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJESVZTX1NFTEVDVE9SIiwiZm9yRWFjaCIsImRpdkRPTUVsZW1lbnQiLCJyZW1vdmUiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJWaWV3IiwiY29udHJvbGxlciIsImFzc2lnbk1ldGhvZHMiLCJjcmVhdGVNZXRob2RzIiwiYm9keSIsIkJvZHkiLCJsb2FkaW5nRGl2IiwiRWxlbWVudCIsIkxPQURJTkdfRElWX1NFTEVDVE9SIiwib25PcmllbnRhdGlvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwic2V0T3JpZW50YXRpb24iLCJ1cGRhdGVab29tIiwib25GcmFnbWVudENoYW5nZSIsImV2ZW50IiwiZWxlbWVudCIsImZyYWdtZW50IiwiYW5jaG9ySWQiLCJFTVBUWV9TVFJJTkciLCJzaG93Rmlyc3REaXYiLCJzY3JvbGxUb0FuY2hvciIsImdldE9yaWVudGF0aW9uIiwiaGlkZSIsIm1vdW50Iiwib3ZlcmxheUhpZGRlbiIsImlzT3ZlcmxheUhpZGRlbiIsInNob3dEaXZpc2lvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O1FBRU87b0VBRWU7MEJBRUs7b0JBQ0c7MEJBQ0c7MkRBRWhCO29FQUNTO3lCQUVHOzRCQUNVO3FCQUNTO3lCQUNJOzJCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUEsZUFBaUJDLHNCQUFTLENBQTFCRDtBQUVSQTtBQUVBRSxJQUFBQSxvQ0FBc0I7QUFFdEIsSUFBTUMsaUJBQW1CLHFCQUFHQyxTQUFTQyxnQkFBZ0IsQ0FBQ0Msd0JBQWEsSUFBTSxHQUFHO0FBRTVFSCxlQUFlSSxPQUFPLENBQUMsU0FBQ0M7SUFDdEJBLGNBQWNDLE1BQU07QUFDdEI7QUFFQSxJQUFNQyxZQUFZLE1BQ1pDLFFBQVEsTUFDUkMscUJBRUUsb0JBQUNDLGFBQUk7SUFBQ1YsZ0JBQWdCQTs7QUFJOUJXLHNCQUFVLENBQUNDLGFBQWEsQ0FBQ0Msc0JBQWEsRUFBRU4sV0FBV0MsT0FBT0M7QUFFMUQsSUFBTUssT0FBTyxJQUFJQyxVQUFJLElBQ2ZDLGFBQWEsSUFBSUMsYUFBTyxDQUFDQywrQkFBb0I7QUFFbkRDLElBQUFBLGdDQUFtQixFQUFDLFNBQUNDO0lBQ25CQyxJQUFBQSxxQkFBYyxFQUFDRDtJQUVmWCxLQUFLYSxVQUFVO0FBQ2pCO0FBRUFDLElBQUFBLDRCQUFnQixFQUFDLFNBQUNDLE9BQU9DLFNBQVNDO0lBQ2hDLElBQU1DLFdBQVcsQUFBQyxHQUFXLE9BQVREO0lBRW5CQyxhQUFhQyx1QkFBWSxHQUN4Qm5CLEtBQUtvQixZQUFZLEtBQ2ZwQixLQUFLcUIsY0FBYyxDQUFDSDtBQUMxQjtBQUVBSSxJQUFBQSwyQkFBYyxFQUFDLFNBQUNYO0lBQ2RDLElBQUFBLHFCQUFjLEVBQUNEO0lBRWZKLFdBQVdnQixJQUFJO0lBRWZsQixLQUFLbUIsS0FBSyxDQUFDeEI7SUFFWCxJQUFNeUIsZ0JBQWdCQyxJQUFBQSxzQkFBZTtJQUVyQyxJQUFJRCxlQUFlO1FBQ2pCdkIsc0JBQVUsQ0FBQ3lCLGFBQWE7SUFDMUI7QUFDRiJ9