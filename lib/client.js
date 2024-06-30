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
var divDOMElements = _to_consumable_array(document.querySelectorAll(_selectors.DIVS_SELECTOR)), anchorDOMElements = _to_consumable_array(document.querySelectorAll(_selectors.ANCHORS_SELECTOR)); ///
divDOMElements.forEach(function(divDOMElement) {
    divDOMElement.remove();
});
anchorDOMElements.forEach(function(anchorDOMElement) {
    anchorDOMElement.remove();
});
var scheduler = null, model = null, view = /*#__PURE__*/ React.createElement(_view.default, {
    divDOMElements: divDOMElements,
    anchorDOMElements: anchorDOMElements
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
    body.mount(view);
    loadingDiv.hide();
    var overlayHidden = (0, _state.isOverlayHidden)();
    if (overlayHidden) {
        _sufficient.controller.showDivisions();
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcImp1eHRhcG9zZVwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEJvZHksIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgb25GcmFnbWVudENoYW5nZSB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCBjcmVhdGVNZXRob2RzIGZyb20gXCIuL2NyZWF0ZU1ldGhvZHNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtaWdyYXRlUGVyc2lzdGVudFN0YXRlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBzZXRPcmllbnRhdGlvbiwgaXNPdmVybGF5SGlkZGVuIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IERJVlNfU0VMRUNUT1IsIEFOQ0hPUlNfU0VMRUNUT1IsIExPQURJTkdfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBnZXRPcmllbnRhdGlvbiwgb25PcmllbnRhdGlvbkNoYW5nZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vcmllbnRhdGlvblwiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxubWlncmF0ZVBlcnNpc3RlbnRTdGF0ZSgpO1xuXG5jb25zdCBkaXZET01FbGVtZW50cyA9IFsgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChESVZTX1NFTEVDVE9SKSBdLCAgLy8vXG4gICAgICBhbmNob3JET01FbGVtZW50cyA9IFsgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChBTkNIT1JTX1NFTEVDVE9SKSBdOyAvLy9cblxuZGl2RE9NRWxlbWVudHMuZm9yRWFjaCgoZGl2RE9NRWxlbWVudCkgPT4ge1xuICBkaXZET01FbGVtZW50LnJlbW92ZSgpO1xufSk7XG5cbmFuY2hvckRPTUVsZW1lbnRzLmZvckVhY2goKGFuY2hvckRPTUVsZW1lbnQpID0+IHtcbiAgYW5jaG9yRE9NRWxlbWVudC5yZW1vdmUoKTtcbn0pO1xuXG5jb25zdCBzY2hlZHVsZXIgPSBudWxsLFxuICAgICAgbW9kZWwgPSBudWxsLFxuICAgICAgdmlldyA9XG5cbiAgICAgICAgPFZpZXcgZGl2RE9NRWxlbWVudHM9e2RpdkRPTUVsZW1lbnRzfSBhbmNob3JET01FbGVtZW50cz17YW5jaG9yRE9NRWxlbWVudHN9IC8+XG5cbiAgICAgIDtcblxuY29udHJvbGxlci5hc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGxvYWRpbmdEaXYgPSBuZXcgRWxlbWVudChMT0FESU5HX0RJVl9TRUxFQ1RPUik7XG5cbm9uT3JpZW50YXRpb25DaGFuZ2UoKG9yaWVudGF0aW9uKSA9PiB7XG4gIHNldE9yaWVudGF0aW9uKG9yaWVudGF0aW9uKTtcblxuICB2aWV3LnVwZGF0ZVpvb20oKTtcbn0pO1xuXG5vbkZyYWdtZW50Q2hhbmdlKChldmVudCwgZWxlbWVudCwgZnJhZ21lbnQpID0+IHtcbiAgY29uc3QgYW5jaG9ySWQgPSBgJHtmcmFnbWVudH1gO1xuXG4gIChhbmNob3JJZCA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgdmlldy5zaG93Rmlyc3REaXYoKSA6XG4gICAgICB2aWV3LnNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcbn0pO1xuXG5nZXRPcmllbnRhdGlvbigob3JpZW50YXRpb24pID0+IHtcbiAgc2V0T3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG5cbiAgbG9hZGluZ0Rpdi5oaWRlKCk7XG5cbiAgY29uc3Qgb3ZlcmxheUhpZGRlbiA9IGlzT3ZlcmxheUhpZGRlbigpO1xuXG4gIGlmIChvdmVybGF5SGlkZGVuKSB7XG4gICAgY29udHJvbGxlci5zaG93RGl2aXNpb25zKCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInJlbmRlclN0eWxlcyIsIndpdGhTdHlsZSIsIm1pZ3JhdGVQZXJzaXN0ZW50U3RhdGUiLCJkaXZET01FbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkRJVlNfU0VMRUNUT1IiLCJhbmNob3JET01FbGVtZW50cyIsIkFOQ0hPUlNfU0VMRUNUT1IiLCJmb3JFYWNoIiwiZGl2RE9NRWxlbWVudCIsInJlbW92ZSIsImFuY2hvckRPTUVsZW1lbnQiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJWaWV3IiwiY29udHJvbGxlciIsImFzc2lnbk1ldGhvZHMiLCJjcmVhdGVNZXRob2RzIiwiYm9keSIsIkJvZHkiLCJsb2FkaW5nRGl2IiwiRWxlbWVudCIsIkxPQURJTkdfRElWX1NFTEVDVE9SIiwib25PcmllbnRhdGlvbkNoYW5nZSIsIm9yaWVudGF0aW9uIiwic2V0T3JpZW50YXRpb24iLCJ1cGRhdGVab29tIiwib25GcmFnbWVudENoYW5nZSIsImV2ZW50IiwiZWxlbWVudCIsImZyYWdtZW50IiwiYW5jaG9ySWQiLCJFTVBUWV9TVFJJTkciLCJzaG93Rmlyc3REaXYiLCJzY3JvbGxUb0FuY2hvciIsImdldE9yaWVudGF0aW9uIiwibW91bnQiLCJoaWRlIiwib3ZlcmxheUhpZGRlbiIsImlzT3ZlcmxheUhpZGRlbiIsInNob3dEaXZpc2lvbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O1FBRU87b0VBRWU7MEJBRUs7b0JBQ0c7MEJBQ0c7MkRBRWhCO29FQUNTO3lCQUVHOzRCQUNVO3FCQUNTO3lCQUNzQjsyQkFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTSxBQUFFQSxlQUFpQkMsc0JBQVMsQ0FBMUJEO0FBRVJBO0FBRUFFLElBQUFBLG9DQUFzQjtBQUV0QixJQUFNQyxpQkFBbUIscUJBQUdDLFNBQVNDLGdCQUFnQixDQUFDQyx3QkFBYSxJQUM3REMsb0JBQXNCLHFCQUFHSCxTQUFTQyxnQkFBZ0IsQ0FBQ0csMkJBQWdCLElBQUssR0FBRztBQUVqRkwsZUFBZU0sT0FBTyxDQUFDLFNBQUNDO0lBQ3RCQSxjQUFjQyxNQUFNO0FBQ3RCO0FBRUFKLGtCQUFrQkUsT0FBTyxDQUFDLFNBQUNHO0lBQ3pCQSxpQkFBaUJELE1BQU07QUFDekI7QUFFQSxJQUFNRSxZQUFZLE1BQ1pDLFFBQVEsTUFDUkMscUJBRUUsb0JBQUNDLGFBQUk7SUFBQ2IsZ0JBQWdCQTtJQUFnQkksbUJBQW1CQTs7QUFJakVVLHNCQUFVLENBQUNDLGFBQWEsQ0FBQ0Msc0JBQWEsRUFBRU4sV0FBV0MsT0FBT0M7QUFFMUQsSUFBTUssT0FBTyxJQUFJQyxVQUFJLElBQ2ZDLGFBQWEsSUFBSUMsYUFBTyxDQUFDQywrQkFBb0I7QUFFbkRDLElBQUFBLGdDQUFtQixFQUFDLFNBQUNDO0lBQ25CQyxJQUFBQSxxQkFBYyxFQUFDRDtJQUVmWCxLQUFLYSxVQUFVO0FBQ2pCO0FBRUFDLElBQUFBLDRCQUFnQixFQUFDLFNBQUNDLE9BQU9DLFNBQVNDO0lBQ2hDLElBQU1DLFdBQVcsQUFBQyxHQUFXLE9BQVREO0lBRW5CQyxhQUFhQyx1QkFBWSxHQUN4Qm5CLEtBQUtvQixZQUFZLEtBQ2ZwQixLQUFLcUIsY0FBYyxDQUFDSDtBQUMxQjtBQUVBSSxJQUFBQSwyQkFBYyxFQUFDLFNBQUNYO0lBQ2RDLElBQUFBLHFCQUFjLEVBQUNEO0lBRWZOLEtBQUtrQixLQUFLLENBQUN2QjtJQUVYTyxXQUFXaUIsSUFBSTtJQUVmLElBQU1DLGdCQUFnQkMsSUFBQUEsc0JBQWU7SUFFckMsSUFBSUQsZUFBZTtRQUNqQnZCLHNCQUFVLENBQUN5QixhQUFhO0lBQzFCO0FBQ0YifQ==