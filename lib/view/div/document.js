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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _fragmented = require("fragmented");
var _easymobile = require("easy-mobile");
var _division = /*#__PURE__*/ _interop_require_default(require("../div/division"));
var _state = require("../../state");
var _selectors = require("../../selectors");
var _element = require("../../utilities/element");
var _constants = require("../../constants");
var _anchor = require("../../utilities/anchor");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  \n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n  touch-action: none;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var divisionDivDOMElements = (0, _element.removeDOMElements)(_selectors.DIVISION_DIVS_SELECTOR), divisionDivs = (0, _element.elementsFromDOMElements)(divisionDivDOMElements, _division.default);
(0, _element.removeDOMElement)(_selectors.DOCUMENT_DIV_SELECTOR);
var DocumentDiv = /*#__PURE__*/ function(Element) {
    _inherits(DocumentDiv, Element);
    function DocumentDiv() {
        _class_call_check(this, DocumentDiv);
        var _this;
        _this = _call_super(this, DocumentDiv, arguments), _define_property(_this, "fullScreenChangeCustomHandler", function(event, element) {
            controller.updateFullScreen();
            _this.updateZoom();
        }), _define_property(_this, "singleTapCustomHandler", function(event, element, top, left) {
        ///
        }), _define_property(_this, "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = _this.isFullScreen();
            if (fullScreen) {
                controller.exitFullScreen();
                return;
            }
        }), _define_property(_this, "pinchStartCustomHandler", function(event, element) {
            var zoom = (0, _state.getZoom)(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        }), _define_property(_this, "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), zoom = startZoom * Math.sqrt(ratio); ///
            controller.zoom(zoom);
        }), _define_property(_this, "swipeRightCustomHandler", function(event, element, top, left, spped) {
            _this.showLeftDivisionDiv();
        }), _define_property(_this, "swipeLeftCustomHandler", function(event, element, top, left, spped) {
            _this.showRightDivisionDiv();
        }), _define_property(_this, "swipeDownCustomHandler", function(event, element, top, left, speed) {
            var direction = _constants.DOWN_DIRECTION;
            _this.startScrolling(speed, direction);
        }), _define_property(_this, "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var direction = _constants.UP_DIRECTION;
            _this.startScrolling(speed, direction);
        }), _define_property(_this, "dragStartCustomHandler", function(event, element, top, left) {
            var scrollTop = _this.getScrollTop(), startScrollTop = scrollTop; ///
            _this.setStartScrollTop(startScrollTop);
        }), _define_property(_this, "dragDownCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        }), _define_property(_this, "dragUpCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        return _this;
    }
    _create_class(DocumentDiv, [
        {
            key: "scrollToTop",
            value: function scrollToTop() {
                var scrollTop = 0;
                this.setScrollTop(scrollTop);
            }
        },
        {
            key: "stopScrolling",
            value: function stopScrolling() {
                var interval = this.getInterval();
                if (interval !== null) {
                    clearInterval(interval);
                    interval = null;
                    this.setInterval(interval);
                }
            }
        },
        {
            key: "startScrolling",
            value: function startScrolling(speed, direction) {
                var _this = this;
                var scrollTop = this.getScrollTop();
                scrollTop += speed * _constants.SCROLL_DELAY;
                this.setScrollTop(scrollTop);
                var interval = this.getInterval();
                if (interval !== null) {
                    clearInterval(interval);
                }
                interval = setInterval(function() {
                    speed = speed - direction * _constants.DECELERATION;
                    if (speed * direction < 0) {
                        clearInterval(interval);
                        interval = null;
                        _this.setInterval(interval);
                    }
                    var scrollTop = _this.getScrollTop();
                    scrollTop += speed * _constants.SCROLL_DELAY;
                    _this.setScrollTop(scrollTop);
                }, _constants.SCROLL_DELAY);
                this.setInterval(interval);
            }
        },
        {
            key: "enterFullScreen",
            value: function enterFullScreen() {
                this.requestFullScreen();
            }
        },
        {
            key: "updateZoom",
            value: function updateZoom() {
                var divisionDiv = this.findDivisionDiv();
                if (divisionDiv !== null) {
                    var zoom = (0, _state.getZoom)(), zoom = zoom; ///
                    divisionDiv.zoom(zoom);
                }
            }
        },
        {
            key: "enableCustomGestures",
            value: function enableCustomGestures() {
                this.onCustomDragUp(this.dragUpCustomHandler);
                this.onCustomDragDown(this.dragDownCustomHandler);
                this.onCustomDragStart(this.dragStartCustomHandler);
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
                this.onCustomPinchMove(this.pinchMoveCustomHandler);
                this.onCustomPinchStart(this.pinchStartCustomHandler);
                this.onCustomDoubleTap(this.doubleTapCustomHandler);
            }
        },
        {
            key: "disableCustomGestures",
            value: function disableCustomGestures() {
                this.offCustomDragUp(this.dragUpCustomHandler);
                this.offCustomDragDown(this.dragDownCustomHandler);
                this.offCustomDragStart(this.dragStartCustomHandler);
                this.offCustomSwipeUp(this.swipeUpCustomHandler);
                this.offCustomSwipeDown(this.swipeDownCustomHandler);
                this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.offCustomSwipeRight(this.swipeRightCustomHandler);
                this.offCustomPinchMove(this.pinchMoveCustomHandler);
                this.offCustomPinchStart(this.pinchStartCustomHandler);
                this.offCustomDoubleTap(this.doubleTapCustomHandler);
            }
        },
        {
            key: "goToAnchor",
            value: function goToAnchor(anchorId) {
                if (anchorId === _constants.EMPTY_STRING) {
                    this.showFirstDivisionDiv();
                    return;
                }
                var anchorIdIndexAnchorId = (0, _anchor.isAnchorIdIndexAnchorId)(anchorId);
                if (anchorIdIndexAnchorId) {
                    var indexAnchorId = anchorId; ///
                    this.showDivisionDivByIndexAnchorId(indexAnchorId);
                    return;
                }
                this.showDivisionDivByAnchorId(anchorId);
            }
        },
        {
            key: "showLeftDivisionDiv",
            value: function showLeftDivisionDiv() {
                var divisionDiv = this.findDivisionDiv(), divisionDivs = this.getDivisionDivs(), index = divisionDivs.indexOf(divisionDiv), nextIndex = index - 1, previousIndex = index; ///
                if (nextIndex === -1) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLastDivisionDiv",
            value: function showLastDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), divisionDiv = this.findDivisionDiv(), divsLength = divisionDivs.length, index = divisionDiv === null ? -1 : divisionDivs.indexOf(divisionDiv), nextIndex = divsLength - 1, previousIndex = index; ///
                if (nextIndex === previousIndex) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showFirstDivisionDiv",
            value: function showFirstDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), divisionDiv = this.findDivisionDiv(), index = divisionDiv === null ? -1 : divisionDivs.indexOf(divisionDiv), nextIndex = 0, previousIndex = index; ///
                if (nextIndex === previousIndex) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showRightDivisionDiv",
            value: function showRightDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), divisionDiv = this.findDivisionDiv(), divsLength = divisionDivs.length, index = divisionDivs.indexOf(divisionDiv), nextIndex = index + 1, previousIndex = index; ///
                if (nextIndex === divsLength) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showDivisionDivByAnchorId",
            value: function showDivisionDivByAnchorId(anchorId) {
                var divisionDiv;
                divisionDiv = (0, _anchor.findDivisionDivByAnchorId)(anchorId); ///
                if (divisionDiv === null) {
                    return;
                }
                var nextDivisionDiv = divisionDiv; ///
                divisionDiv = this.findDivisionDiv();
                var previousDivisionDiv = divisionDiv, divisionDivs = this.getDivisionDivs(), nextIndex = divisionDivs.indexOf(nextDivisionDiv), previousIndex = divisionDivs.indexOf(previousDivisionDiv); ///
                this.showNextDivisionDiv(nextIndex, previousIndex);
                (0, _anchor.scrollToAnchor)(anchorId);
            }
        },
        {
            key: "showDivisionDivByIndexAnchorId",
            value: function showDivisionDivByIndexAnchorId(indexAnchorId) {
                var divisionDivs = this.getDivisionDivs(), divisionDiv = this.findDivisionDiv(), divsLength = divisionDivs.length, pageNumber = (0, _anchor.pageNumberFromIndexAnchorId)(indexAnchorId), index = divisionDivs.indexOf(divisionDiv), nextIndex = pageNumber - 1, previousIndex = index; ///
                if (nextIndex === divsLength) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextDivisionDiv",
            value: function showNextDivisionDiv(nextIndex, previousIndex) {
                (0, _fragmented.resetFragment)();
                var divisionDivs = this.getDivisionDivs();
                if (previousIndex !== -1) {
                    var previousDivisionDiv = divisionDivs[previousIndex];
                    previousDivisionDiv.hide();
                }
                var nextDivisionDiv = divisionDivs[nextIndex], zoom = (0, _state.getZoom)();
                this.stopScrolling();
                this.scrollToTop();
                nextDivisionDiv.zoom(zoom);
                nextDivisionDiv.show();
            }
        },
        {
            key: "findShowingDivisionDiv",
            value: function findShowingDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), showingDivisionDiv = divisionDivs.find(function(divisionDiv) {
                    var divShowing = divisionDiv.isShowing();
                    if (divShowing) {
                        return true;
                    }
                }) || null;
                return showingDivisionDiv;
            }
        },
        {
            key: "findDivisionDiv",
            value: function findDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), divisionDiv = divisionDivs.find(function(divisionDiv) {
                    var showing = divisionDiv.isShowing();
                    if (showing) {
                        return true;
                    }
                }) || null;
                return divisionDiv;
            }
        },
        {
            key: "getDivisionDivs",
            value: function getDivisionDivs() {
                var childElements = this.getChildElements(), divisionDivs = _to_consumable_array(childElements);
                return divisionDivs;
            }
        },
        {
            key: "getInterval",
            value: function getInterval() {
                var interval = this.getState().interval;
                return interval;
            }
        },
        {
            key: "getStartZoom",
            value: function getStartZoom() {
                var startZoom = this.getState().startZoom;
                return startZoom;
            }
        },
        {
            key: "getStartScrollTop",
            value: function getStartScrollTop() {
                var startScrollTop = this.getState().startScrollTop;
                return startScrollTop;
            }
        },
        {
            key: "setInterval",
            value: function setInterval1(interval) {
                this.updateState({
                    interval: interval
                });
            }
        },
        {
            key: "setStartZoom",
            value: function setStartZoom(startZoom) {
                this.updateState({
                    startZoom: startZoom
                });
            }
        },
        {
            key: "setStartScrollTop",
            value: function setStartScrollTop(startScrollTop) {
                this.updateState({
                    startScrollTop: startScrollTop
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var interval = null, startZoom = null, startScrollTop = null;
                this.setState({
                    interval: interval,
                    startZoom: startZoom,
                    startScrollTop: startScrollTop
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                this.onCustomSingleTap(this.singleTapCustomHandler);
                this.enableFullScreen();
                this.enableTouch();
                this.showFirstDivisionDiv();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableTouch();
                this.disableFullScreen();
                this.offCustomSingleTap(this.singleTapCustomHandler);
                this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var childElements = divisionDivs; ///
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var goToAnchor = this.goToAnchor.bind(this), updateZoom = this.updateZoom.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this);
                return {
                    goToAnchor: goToAnchor,
                    updateZoom: updateZoom,
                    exitFullScreen: exitFullScreen,
                    enterFullScreen: enterFullScreen,
                    showLeftDivisionDiv: showLeftDivisionDiv,
                    showLastDivisionDiv: showLastDivisionDiv,
                    showFirstDivisionDiv: showFirstDivisionDiv,
                    showRightDivisionDiv: showRightDivisionDiv
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
            }
        }
    ]);
    return DocumentDiv;
}(_wrap_native_super(_easy.Element));
_define_property(DocumentDiv, "tagName", "div");
_define_property(DocumentDiv, "ignoredProperties", []);
_define_property(DocumentDiv, "defaultProperties", {
    className: "document"
});
Object.assign(DocumentDiv.prototype, _easymobile.touchMixins);
Object.assign(DocumentDiv.prototype, _easymobile.fullScreenMixins);
var _default = (0, _easywithstyle.default)(DocumentDiv)(_templateObject());
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyByZXNldEZyYWdtZW50IH0gZnJvbSBcImZyYWdtZW50ZWRcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBEaXZpc2lvbkRpdiBmcm9tIFwiLi4vZGl2L2RpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGdldFpvb20gfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IERPQ1VNRU5UX0RJVl9TRUxFQ1RPUiwgRElWSVNJT05fRElWU19TRUxFQ1RPUiB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHJlbW92ZURPTUVsZW1lbnQsIHJlbW92ZURPTUVsZW1lbnRzLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNjcm9sbFRvQW5jaG9yLCBmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkLCBpc0FuY2hvcklkSW5kZXhBbmNob3JJZCwgcGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hbmNob3JcIjtcblxuY29uc3QgZGl2aXNpb25EaXZET01FbGVtZW50cyA9IHJlbW92ZURPTUVsZW1lbnRzKERJVklTSU9OX0RJVlNfU0VMRUNUT1IpLFxuICAgICAgZGl2aXNpb25EaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGl2aXNpb25EaXZET01FbGVtZW50cywgRGl2aXNpb25EaXYpO1xuXG5yZW1vdmVET01FbGVtZW50KERPQ1VNRU5UX0RJVl9TRUxFQ1RPUik7XG5cbmNsYXNzIERvY3VtZW50RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci51cGRhdGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLnVwZGF0ZVpvb20oKTtcbiAgfVxuXG4gIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIC8vL1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICB6b29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTsgIC8vL1xuXG4gICAgY29udHJvbGxlci56b29tKHpvb20pO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgdXBkYXRlWm9vbSgpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCk7XG5cbiAgICBpZiAoZGl2aXNpb25EaXYgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgICB6b29tID0gem9vbTsgLy8vXG5cbiAgICAgIGRpdmlzaW9uRGl2Lnpvb20oem9vbSk7XG4gICAgfVxuICB9XG5cbiAgZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGRpc2FibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGdvVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgICBpZiAoYW5jaG9ySWQgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5jaG9ySWRJbmRleEFuY2hvcklkID0gaXNBbmNob3JJZEluZGV4QW5jaG9ySWQoYW5jaG9ySWQpO1xuXG4gICAgaWYgKGFuY2hvcklkSW5kZXhBbmNob3JJZCkge1xuICAgICAgY29uc3QgaW5kZXhBbmNob3JJZCA9IGFuY2hvcklkOyAvLy9cblxuICAgICAgdGhpcy5zaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpO1xuICB9XG5cbiAgc2hvd0xlZnREaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKGRpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xhc3REaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IChkaXZpc2lvbkRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2aXNpb25EaXZzLmluZGV4T2YoZGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCksXG4gICAgICAgICAgaW5kZXggPSAoZGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKGRpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd1JpZ2h0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihkaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCkge1xuICAgIGxldCBkaXZpc2lvbkRpdjtcblxuICAgIGRpdmlzaW9uRGl2ID0gZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7ICAvLy9cblxuICAgIGlmIChkaXZpc2lvbkRpdiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHREaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2OyAgLy8vXG5cbiAgICBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCk7XG5cbiAgICBjb25zdCBwcmV2aW91c0RpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXYsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKG5leHREaXZpc2lvbkRpdiksICAvLy9cbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YocHJldmlvdXNEaXZpc2lvbkRpdik7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuXG4gICAgc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpLFxuICAgICAgICAgIGluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YoZGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IHBhZ2VOdW1iZXIgLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICByZXNldEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpO1xuXG4gICAgaWYgKHByZXZpb3VzSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgICBwcmV2aW91c0RpdmlzaW9uRGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnNbbmV4dEluZGV4XSxcbiAgICAgICAgICB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICBuZXh0RGl2aXNpb25EaXYuem9vbSh6b29tKTtcblxuICAgIG5leHREaXZpc2lvbkRpdi5zaG93KCk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0RpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzLmZpbmQoKGRpdmlzaW9uRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXZTaG93aW5nID0gZGl2aXNpb25EaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXZTaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2hvd2luZ0RpdmlzaW9uRGl2O1xuICB9XG5cbiAgZmluZERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnMuZmluZCgoZGl2aXNpb25EaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBkaXZpc2lvbkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkRpdjtcbiAgfVxuXG4gIGdldERpdmlzaW9uRGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gW1xuICAgICAgICAgICAgLi4uY2hpbGRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZGl2aXNpb25EaXZzO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFpvb21cbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZGl2aXNpb25EaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnb1RvQW5jaG9yID0gdGhpcy5nb1RvQW5jaG9yLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICB1cGRhdGVab29tID0gdGhpcy51cGRhdGVab29tLmJpbmQodGhpcyksXG4gICAgICAgICAgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93TGVmdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2ID0gdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnb1RvQW5jaG9yLFxuICAgICAgdXBkYXRlWm9vbSxcbiAgICAgIGV4aXRGdWxsU2NyZWVuLFxuICAgICAgZW50ZXJGdWxsU2NyZWVuLFxuICAgICAgc2hvd0xlZnREaXZpc2lvbkRpdixcbiAgICAgIHNob3dMYXN0RGl2aXNpb25EaXYsXG4gICAgICBzaG93Rmlyc3REaXZpc2lvbkRpdixcbiAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRvY3VtZW50XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudERpdi5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnREaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERvY3VtZW50RGl2KWBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcbiAgc2V0VGltZW91dChmdW5jLCAwKTtcbn1cbiJdLCJuYW1lcyI6WyJkaXZpc2lvbkRpdkRPTUVsZW1lbnRzIiwicmVtb3ZlRE9NRWxlbWVudHMiLCJESVZJU0lPTl9ESVZTX1NFTEVDVE9SIiwiZGl2aXNpb25EaXZzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXZpc2lvbkRpdiIsInJlbW92ZURPTUVsZW1lbnQiLCJET0NVTUVOVF9ESVZfU0VMRUNUT1IiLCJEb2N1bWVudERpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInVwZGF0ZUZ1bGxTY3JlZW4iLCJ1cGRhdGVab29tIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJ6b29tIiwiZ2V0Wm9vbSIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0Wm9vbSIsIk1hdGgiLCJzcXJ0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzcHBlZCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsInNjcm9sbFRvVG9wIiwic3RvcFNjcm9sbGluZyIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJTQ1JPTExfREVMQVkiLCJERUNFTEVSQVRJT04iLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImRpdmlzaW9uRGl2IiwiZmluZERpdmlzaW9uRGl2IiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJnb1RvQW5jaG9yIiwiYW5jaG9ySWQiLCJFTVBUWV9TVFJJTkciLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsImFuY2hvcklkSW5kZXhBbmNob3JJZCIsImlzQW5jaG9ySWRJbmRleEFuY2hvcklkIiwiaW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJnZXREaXZpc2lvbkRpdnMiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHREaXZpc2lvbkRpdiIsInNob3dMYXN0RGl2aXNpb25EaXYiLCJkaXZzTGVuZ3RoIiwibGVuZ3RoIiwiZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCIsIm5leHREaXZpc2lvbkRpdiIsInByZXZpb3VzRGl2aXNpb25EaXYiLCJzY3JvbGxUb0FuY2hvciIsInBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyRnJvbUluZGV4QW5jaG9ySWQiLCJyZXNldEZyYWdtZW50IiwiaGlkZSIsInNob3ciLCJmaW5kU2hvd2luZ0RpdmlzaW9uRGl2Iiwic2hvd2luZ0RpdmlzaW9uRGl2IiwiZmluZCIsImRpdlNob3dpbmciLCJpc1Nob3dpbmciLCJzaG93aW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwiZW5hYmxlRnVsbFNjcmVlbiIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwiZGVmZXIiLCJmdW5jIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK2VBOzs7ZUFBQTs7O29FQTdlc0I7b0JBRUU7MEJBQ007MEJBQ2dCOytEQUV0QjtxQkFFQTt5QkFDc0M7dUJBQ2U7eUJBQ1U7c0JBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoSCxJQUFNQSx5QkFBeUJDLElBQUFBLDBCQUFpQixFQUFDQyxpQ0FBc0IsR0FDakVDLGVBQWVDLElBQUFBLGdDQUF1QixFQUFDSix3QkFBd0JLLGlCQUFXO0FBRWhGQyxJQUFBQSx5QkFBZ0IsRUFBQ0MsZ0NBQXFCO0FBRXRDLElBQUEsQUFBTUMsNEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEseUJBQ0pDLHdCQUFBQSxpQ0FBZ0MsU0FBQ0MsT0FBT0M7WUFDdENDLFdBQVdDLGdCQUFnQjtZQUUzQixNQUFLQyxVQUFVO1FBQ2pCLElBRUFDLHdCQUFBQSwwQkFBeUIsU0FBQ0wsT0FBT0MsU0FBU0ssS0FBS0M7UUFDN0MsR0FBRztRQUNMLElBRUFDLHdCQUFBQSwwQkFBeUIsU0FBQ1IsT0FBT0MsU0FBU0ssS0FBS0M7WUFDN0MsSUFBTUUsYUFBYSxNQUFLQyxZQUFZO1lBRXBDLElBQUlELFlBQVk7Z0JBQ2RQLFdBQVdTLGNBQWM7Z0JBRXpCO1lBQ0Y7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