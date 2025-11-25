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
var _selectors = require("../../selectors");
var _element = require("../../utilities/element");
var _customEventTypes = require("../../customEventTypes");
var _state = require("../../state");
var _anchor = require("../../utilities/anchor");
var _constants = require("../../constants");
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
        "\n  \n  width: 100%;\n  height: 100%;\n\n  overflow: hidden;\n  touch-action: none;\n    \n  .native-gestures {\n    overflow: scroll;\n    touch-action: auto;\n  }\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var divisionDivDOMElements = (0, _element.removeDOMElements)(_selectors.DIVISION_DIVS_SELECTOR), divisionDivs = (0, _element.elementsFromDOMElements)(divisionDivDOMElements, _division.default);
var DocumentDiv = /*#__PURE__*/ function(Element) {
    _inherits(DocumentDiv, Element);
    function DocumentDiv() {
        _class_call_check(this, DocumentDiv);
        var _this;
        _this = _call_super(this, DocumentDiv, arguments), _define_property(_this, "fullScreenChangeCustomHandler", function(event, element) {
            controller.updateFullScreen();
            _this.updateDivisionsZoom();
        }), _define_property(_this, "singleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = _this.isFullScreen();
            if (!fullScreen) {
                var showingDivisionDiv = _this.findShowingDivisionDiv(), image = showingDivisionDiv.findImageByTopAndLeft(top, left);
                if (image !== null) {
                    _this.previewImage(event, element, image);
                    return;
                }
            }
            var height = _this.getHeight(), bottom = height - top;
            if (bottom < _constants.OPEN_MENU_TAP_AREA_HEIGHT) {
                controller.openMenu();
            }
        }), _define_property(_this, "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = _this.isFullScreen();
            if (fullScreen) {
                controller.exitFullScreen();
                return;
            }
            var nativeGesturesRestored = (0, _state.areNativeGesturesRestored)();
            nativeGesturesRestored ? controller.suppressNativeGestures() : controller.restoreNativeGestures();
        }), _define_property(_this, "pinchStartCustomHandler", function(event, element) {
            var divisionsZoom = (0, _state.getDivisionsZoom)(), startZoom = divisionsZoom; ///
            _this.setStartZoom(startZoom);
        }), _define_property(_this, "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), divisionsZoom = startZoom * Math.sqrt(ratio); ///
            controller.zoomDivisions(divisionsZoom);
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
            key: "previewImage",
            value: function previewImage(event, element, image) {
                var customEventType = _customEventTypes.PREVIEW_IMAGE_CUSTOM_EVENT_TYPE;
                this.callCustomHandlers(customEventType, event, element, image);
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
            key: "updateDivisionsZoom",
            value: function updateDivisionsZoom() {
                var divisionDiv = this.findDivisionDiv();
                if (divisionDiv !== null) {
                    var divisionsZoom = (0, _state.getDivisionsZoom)(), zoom = divisionsZoom; ///
                    divisionDiv.zoom(zoom);
                }
            }
        },
        {
            key: "updateDivisionsColours",
            value: function updateDivisionsColours() {
                var coloursInverted = (0, _state.areColoursInverted)();
                coloursInverted ? this.addClass("inverted-colours") : this.removeClass("inverted-colours");
            }
        },
        {
            key: "updateNativeGestures",
            value: function updateNativeGestures() {
                var nativeGesturesRestored = (0, _state.areNativeGesturesRestored)();
                nativeGesturesRestored ? this.addClass("native-gestures") : this.removeClass("native-gestures");
                nativeGesturesRestored ? this.disableCustomGestures() : this.enableCustomGestures();
            }
        },
        {
            key: "enableCustomGestures",
            value: function enableCustomGestures() {
                var nativeGesturedEnabled = this.areNativeGesturesEnabled();
                if (nativeGesturedEnabled) {
                    return;
                }
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
                nativeGesturedEnabled = true;
                this.setNativeGesturesEnabled(nativeGesturedEnabled);
            }
        },
        {
            key: "disableCustomGestures",
            value: function disableCustomGestures() {
                var nativeGesturedEnabled = this.areNativeGesturesEnabled();
                if (!nativeGesturedEnabled) {
                    return;
                }
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
                nativeGesturedEnabled = false;
                this.setNativeGesturesEnabled(nativeGesturedEnabled);
            }
        },
        {
            key: "areNativeGesturesRestored",
            value: function areNativeGesturesRestored() {
                var nativeGesturesRestored = this.hasClass("native-gestures");
                return nativeGesturesRestored;
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
                this.showNextDivisionDiv(nextIndex, previousIndex, function() {
                    (0, _anchor.scrollToAnchor)(anchorId);
                });
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
                var _this = this;
                var done = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {};
                (0, _fragmented.resetFragment)();
                var divisionDivs = this.getDivisionDivs();
                if (previousIndex !== -1) {
                    var previousDivisionDiv = divisionDivs[previousIndex];
                    previousDivisionDiv.hide();
                }
                var nextDivisionDiv = divisionDivs[nextIndex], divisionsZoom = (0, _state.getDivisionsZoom)(), zoom = divisionsZoom; ///
                this.stopScrolling();
                this.scrollToTop();
                nextDivisionDiv.zoom(zoom);
                nextDivisionDiv.show();
                defer(function() {
                    var backgroundColour = nextDivisionDiv.getBackgroundColour();
                    _this.setBackgroundColour(backgroundColour);
                    done();
                });
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
            key: "setBackgroundColour",
            value: function setBackgroundColour(backgroundColour) {
                var backgroundColor = backgroundColour, css = {
                    backgroundColor: backgroundColor
                };
                this.css(css);
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
            key: "areNativeGesturesEnabled",
            value: function areNativeGesturesEnabled() {
                var nativeGesturesEnabled = this.getState().nativeGesturesEnabled;
                return nativeGesturesEnabled;
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
            key: "setNativeGesturesEnabled",
            value: function setNativeGesturesEnabled(nativeGesturesEnabled) {
                this.updateState({
                    nativeGesturesEnabled: nativeGesturesEnabled
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var interval = null, startZoom = null, startScrollTop = null, nativeGesturesEnabled = false;
                this.setState({
                    interval: interval,
                    startZoom: startZoom,
                    startScrollTop: startScrollTop,
                    nativeGesturesEnabled: nativeGesturesEnabled
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
                var goToAnchor = this.goToAnchor.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this), updateDivisionsZoom = this.updateDivisionsZoom.bind(this), updateNativeGestures = this.updateNativeGestures.bind(this), updateDivisionsColours = this.updateDivisionsColours.bind(this);
                return {
                    goToAnchor: goToAnchor,
                    exitFullScreen: exitFullScreen,
                    enterFullScreen: enterFullScreen,
                    showLeftDivisionDiv: showLeftDivisionDiv,
                    showLastDivisionDiv: showLastDivisionDiv,
                    showFirstDivisionDiv: showFirstDivisionDiv,
                    showRightDivisionDiv: showRightDivisionDiv,
                    updateDivisionsZoom: updateDivisionsZoom,
                    updateNativeGestures: updateNativeGestures,
                    updateDivisionsColours: updateDivisionsColours
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyByZXNldEZyYWdtZW50IH0gZnJvbSBcImZyYWdtZW50ZWRcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBEaXZpc2lvbkRpdiBmcm9tIFwiLi4vZGl2L2RpdmlzaW9uXCI7XG5cbmltcG9ydCB7IERJVklTSU9OX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyByZW1vdmVET01FbGVtZW50cywgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IFBSRVZJRVdfSU1BR0VfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgZ2V0RGl2aXNpb25zWm9vbSwgYXJlQ29sb3Vyc0ludmVydGVkLCBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCwgaXNBbmNob3JJZEluZGV4QW5jaG9ySWQsIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYW5jaG9yXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFNDUk9MTF9ERUxBWSwgVVBfRElSRUNUSU9OLCBERUNFTEVSQVRJT04sIERPV05fRElSRUNUSU9OLCBPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkaXZpc2lvbkRpdkRPTUVsZW1lbnRzID0gcmVtb3ZlRE9NRWxlbWVudHMoRElWSVNJT05fRElWU19TRUxFQ1RPUiksXG4gICAgICBkaXZpc2lvbkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkaXZpc2lvbkRpdkRPTUVsZW1lbnRzLCBEaXZpc2lvbkRpdik7XG5cbmNsYXNzIERvY3VtZW50RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci51cGRhdGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLnVwZGF0ZURpdmlzaW9uc1pvb20oKTtcbiAgfVxuXG4gIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKCFmdWxsU2NyZWVuKSB7XG4gICAgICBjb25zdCBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICAgIGltYWdlID0gc2hvd2luZ0RpdmlzaW9uRGl2LmZpbmRJbWFnZUJ5VG9wQW5kTGVmdCh0b3AsIGxlZnQpO1xuXG4gICAgICBpZiAoaW1hZ2UgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2UoZXZlbnQsIGVsZW1lbnQsIGltYWdlKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICBpZiAoYm90dG9tIDwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCkge1xuICAgICAgY29udHJvbGxlci5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCk7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIGNvbnRyb2xsZXIuc3VwcHJlc3NOYXRpdmVHZXN0dXJlcygpIDpcbiAgICAgICAgY29udHJvbGxlci5yZXN0b3JlTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZGl2aXNpb25zWm9vbSA9IGdldERpdmlzaW9uc1pvb20oKSxcbiAgICAgICAgICBzdGFydFpvb20gPSBkaXZpc2lvbnNab29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4gICAgICAgICAgZGl2aXNpb25zWm9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7ICAvLy9cblxuICAgIGNvbnRyb2xsZXIuem9vbURpdmlzaW9ucyhkaXZpc2lvbnNab29tKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aWV3SW1hZ2UoZXZlbnQsIGVsZW1lbnQsIGltYWdlKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUFJFVklFV19JTUFHRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGltYWdlKTtcbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgdXBkYXRlRGl2aXNpb25zWm9vbSgpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCk7XG5cbiAgICBpZiAoZGl2aXNpb25EaXYgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uc1pvb20gPSBnZXREaXZpc2lvbnNab29tKCksXG4gICAgICAgICAgICB6b29tID0gZGl2aXNpb25zWm9vbTsgLy8vXG5cbiAgICAgIGRpdmlzaW9uRGl2Lnpvb20oem9vbSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGl2aXNpb25zQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuICB9XG5cbiAgdXBkYXRlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIHRoaXMuZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBlbmFibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgICBsZXQgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmIChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCk7XG4gIH1cblxuICBkaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gICAgbGV0IG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAoIW5hdGl2ZUdlc3R1cmVkRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpO1xuICB9XG5cbiAgYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gdGhpcy5oYXNDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHJldHVybiBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkO1xuICB9XG5cbiAgZ29Ub0FuY2hvcihhbmNob3JJZCkge1xuICAgIGlmIChhbmNob3JJZCA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhbmNob3JJZEluZGV4QW5jaG9ySWQgPSBpc0FuY2hvcklkSW5kZXhBbmNob3JJZChhbmNob3JJZCk7XG5cbiAgICBpZiAoYW5jaG9ySWRJbmRleEFuY2hvcklkKSB7XG4gICAgICBjb25zdCBpbmRleEFuY2hvcklkID0gYW5jaG9ySWQ7IC8vL1xuXG4gICAgICB0aGlzLnNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7XG4gIH1cblxuICBzaG93TGVmdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YoZGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSB0aGlzLmZpbmREaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZpc2lvbkRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gKGRpdmlzaW9uRGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbkRpdnMuaW5kZXhPZihkaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93Rmlyc3REaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBpbmRleCA9IChkaXZpc2lvbkRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2aXNpb25EaXZzLmluZGV4T2YoZGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHREaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKGRpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93RGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKSB7XG4gICAgbGV0IGRpdmlzaW9uRGl2O1xuXG4gICAgZGl2aXNpb25EaXYgPSBmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKTsgIC8vL1xuXG4gICAgaWYgKGRpdmlzaW9uRGl2ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXY7ICAvLy9cblxuICAgIGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKTtcblxuICAgIGNvbnN0IHByZXZpb3VzRGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdiwgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YobmV4dERpdmlzaW9uRGl2KSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihwcmV2aW91c0RpdmlzaW9uRGl2KTsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCwgKCkgPT4ge1xuICAgICAgc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpLFxuICAgICAgICAgIGluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YoZGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IHBhZ2VOdW1iZXIgLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgsIGRvbmUgPSAoKSA9PiB7fSkge1xuICAgIHJlc2V0RnJhZ21lbnQoKTtcblxuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCk7XG5cbiAgICBpZiAocHJldmlvdXNJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnNbcHJldmlvdXNJbmRleF07XG5cbiAgICAgIHByZXZpb3VzRGl2aXNpb25EaXYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHREaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2c1tuZXh0SW5kZXhdLFxuICAgICAgICAgIGRpdmlzaW9uc1pvb20gPSBnZXREaXZpc2lvbnNab29tKCksXG4gICAgICAgICAgem9vbSA9IGRpdmlzaW9uc1pvb207IC8vL1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICBuZXh0RGl2aXNpb25EaXYuem9vbSh6b29tKTtcblxuICAgIG5leHREaXZpc2lvbkRpdi5zaG93KCk7XG5cbiAgICBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gbmV4dERpdmlzaW9uRGl2LmdldEJhY2tncm91bmRDb2xvdXIoKTtcblxuICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0RpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzLmZpbmQoKGRpdmlzaW9uRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXZTaG93aW5nID0gZGl2aXNpb25EaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXZTaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc2hvd2luZ0RpdmlzaW9uRGl2O1xuICB9XG5cbiAgc2V0QmFja2dyb3VuZENvbG91cihiYWNrZ3JvdW5kQ29sb3VyKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG91ciwgLy8vXG4gICAgICAgICAgY3NzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBmaW5kRGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2cy5maW5kKChkaXZpc2lvbkRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd2luZyA9IGRpdmlzaW9uRGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uRGl2O1xuICB9XG5cbiAgZ2V0RGl2aXNpb25EaXZzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdnMgPSBbXG4gICAgICAgICAgICAuLi5jaGlsZEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBkaXZpc2lvbkRpdnM7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBnZXRTdGFydFpvb20oKSB7XG4gICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFpvb207XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgeyBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBuYXRpdmVHZXN0dXJlc0VuYWJsZWQ7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRab29tID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLmVuYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGRpdmlzaW9uRGl2czsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ29Ub0FuY2hvciA9IHRoaXMuZ29Ub0FuY2hvci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93TGVmdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2ID0gdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZURpdmlzaW9uc1pvb20gPSB0aGlzLnVwZGF0ZURpdmlzaW9uc1pvb20uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVOYXRpdmVHZXN0dXJlcyA9IHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzID0gdGhpcy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdvVG9BbmNob3IsXG4gICAgICBleGl0RnVsbFNjcmVlbixcbiAgICAgIGVudGVyRnVsbFNjcmVlbixcbiAgICAgIHNob3dMZWZ0RGl2aXNpb25EaXYsXG4gICAgICBzaG93TGFzdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd0ZpcnN0RGl2aXNpb25EaXYsXG4gICAgICBzaG93UmlnaHREaXZpc2lvbkRpdixcbiAgICAgIHVwZGF0ZURpdmlzaW9uc1pvb20sXG4gICAgICB1cGRhdGVOYXRpdmVHZXN0dXJlcyxcbiAgICAgIHVwZGF0ZURpdmlzaW9uc0NvbG91cnNcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZG9jdW1lbnRcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERvY3VtZW50RGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudERpdi5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRG9jdW1lbnREaXYpYFxuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgXG4gIC5uYXRpdmUtZ2VzdHVyZXMge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgdG91Y2gtYWN0aW9uOiBhdXRvO1xuICB9XG4gIFxuICAuaW52ZXJ0ZWQtY29sb3VycyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIH1cbiAgICBcbmA7XG5cbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcbiAgc2V0VGltZW91dChmdW5jLCAwKTtcbn1cbiJdLCJuYW1lcyI6WyJkaXZpc2lvbkRpdkRPTUVsZW1lbnRzIiwicmVtb3ZlRE9NRWxlbWVudHMiLCJESVZJU0lPTl9ESVZTX1NFTEVDVE9SIiwiZGl2aXNpb25EaXZzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXZpc2lvbkRpdiIsIkRvY3VtZW50RGl2IiwiZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXBkYXRlRnVsbFNjcmVlbiIsInVwZGF0ZURpdmlzaW9uc1pvb20iLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJzaG93aW5nRGl2aXNpb25EaXYiLCJmaW5kU2hvd2luZ0RpdmlzaW9uRGl2IiwiaW1hZ2UiLCJmaW5kSW1hZ2VCeVRvcEFuZExlZnQiLCJwcmV2aWV3SW1hZ2UiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIiwib3Blbk1lbnUiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsImRpdmlzaW9uc1pvb20iLCJnZXREaXZpc2lvbnNab29tIiwic3RhcnRab29tIiwic2V0U3RhcnRab29tIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRab29tIiwiTWF0aCIsInNxcnQiLCJ6b29tRGl2aXNpb25zIiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzcHBlZCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsInNjcm9sbFRvVG9wIiwic3RvcFNjcm9sbGluZyIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjdXN0b21FdmVudFR5cGUiLCJQUkVWSUVXX0lNQUdFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwiU0NST0xMX0RFTEFZIiwiREVDRUxFUkFUSU9OIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJkaXZpc2lvbkRpdiIsImZpbmREaXZpc2lvbkRpdiIsInpvb20iLCJ1cGRhdGVEaXZpc2lvbnNDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwiYXJlQ29sb3Vyc0ludmVydGVkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJuYXRpdmVHZXN0dXJlZEVuYWJsZWQiLCJhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwic2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJoYXNDbGFzcyIsImdvVG9BbmNob3IiLCJhbmNob3JJZCIsIkVNUFRZX1NUUklORyIsInNob3dGaXJzdERpdmlzaW9uRGl2IiwiYW5jaG9ySWRJbmRleEFuY2hvcklkIiwiaXNBbmNob3JJZEluZGV4QW5jaG9ySWQiLCJpbmRleEFuY2hvcklkIiwic2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkIiwic2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZCIsImdldERpdmlzaW9uRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkIiwibmV4dERpdmlzaW9uRGl2IiwicHJldmlvdXNEaXZpc2lvbkRpdiIsInNjcm9sbFRvQW5jaG9yIiwicGFnZU51bWJlciIsInBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCIsImRvbmUiLCJyZXNldEZyYWdtZW50IiwiaGlkZSIsInNob3ciLCJkZWZlciIsImJhY2tncm91bmRDb2xvdXIiLCJnZXRCYWNrZ3JvdW5kQ29sb3VyIiwic2V0QmFja2dyb3VuZENvbG91ciIsImZpbmQiLCJkaXZTaG93aW5nIiwiaXNTaG93aW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY3NzIiwic2hvd2luZyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0U3RhdGUiLCJuYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJvbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJvbkN1c3RvbVNpbmdsZVRhcCIsImVuYWJsZUZ1bGxTY3JlZW4iLCJlbmFibGVUb3VjaCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4bEJBOzs7ZUFBQTs7O29FQTVsQnNCO29CQUVFOzBCQUNNOzBCQUNnQjsrREFFdEI7eUJBRWU7dUJBQ29CO2dDQUNYO3FCQUNnQztzQkFDZ0M7eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxILElBQU1BLHlCQUF5QkMsSUFBQUEsMEJBQWlCLEVBQUNDLGlDQUFzQixHQUNqRUMsZUFBZUMsSUFBQUEsZ0NBQXVCLEVBQUNKLHdCQUF3QkssaUJBQVc7QUFFaEYsSUFBQSxBQUFNQyw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSx5QkFDSkMsd0JBQUFBLGlDQUFnQyxTQUFDQyxPQUFPQztZQUN0Q0MsV0FBV0MsZ0JBQWdCO1lBRTNCLE1BQUtDLG1CQUFtQjtRQUMxQixJQUVBQyx3QkFBQUEsMEJBQXlCLFNBQUNMLE9BQU9DLFNBQVNLLEtBQUtDO1lBQzdDLElBQU1DLGFBQWEsTUFBS0MsWUFBWTtZQUVwQyxJQUFJLENBQUNELFlBQVk7Z0JBQ2YsSUFBTUUscUJBQXFCLE1BQUtDLHNCQUFzQixJQUNoREMsUUFBUUYsbUJBQW1CRyxxQkFBcUIsQ0FBQ1AsS0FBS0M7Z0JBRTVELElBQUlLLFVBQVUsTUFBTTtvQkFDbEIsTUFBS0UsWUFBWSxDQUFDZCxPQUFPQyxTQUFTVztvQkFFbEM7Z0JBQ0Y7WUFDRjtZQUVBLElBQU1HLFNBQVMsTUFBS0MsU0FBUyxJQUN2QkMsU0FBU0YsU0FBU1Q7WUFFeEIsSUFBSVcsU0FBU0Msb0NBQXlCLEVBQUU7Z0JBQ3RDaEIsV0FBV2lCLFFBQVE7WUFDckI7UUFDRixJQUVBQyx3QkFBQUEsMEJBQXlCLFNBQUNwQixPQUFPQyxTQUFTSyxLQUFLQztZQUM3QyxJQUFNQyxhQUFhLE1BQUtDLFlBQVk7WUFFcEMsSUFBSUQsWUFBWTtnQkFDZE4sV0FBV21CLGNBQWM7Z0JBRXpCO1lBQ0Y7WUFFQSxJQUFNQyx5QkFBeUJDLElBQUFBLGdDQUF5QjtZQUV4REQseUJBQ0VwQixXQUFXc0Isc0JBQXNCLEtBQy9CdEIsV0FBV3VCLHFCQUFxQjtRQUN0QyxJQUVBQyx3QkFBQUEsMkJBQTBCLFNBQUMxQixPQUFPQztZQUNoQyxJQUFNMEIsZ0JBQWdCQyxJQUFBQSx1QkFBZ0IsS0FDaENDLFlBQVlGLGVBQWUsR0FBRztZQUVwQyxNQUFLRyxZQUFZLENBQUNEO1FBQ3BCLElBRUFFLHdCQUFBQSwwQkFBeUIsU0FBQy9CLE9BQU9DLFNBQVMrQjtZQUN4QyxJQUFNSCxZQUFZLE1BQUtJLFlBQVksSUFDN0JOLGdCQUFnQkUsWUFBWUssS0FBS0MsSUFBSSxDQUFDSCxRQUFTLEdBQUc7WUFFeEQ5QixXQUFXa0MsYUFBYSxDQUFDVDtRQUMzQixJQUVBVSx3QkFBQUEsMkJBQTBCLFNBQUNyQyxPQUFPQyxTQUFTSyxLQUFLQyxNQUFNK0I7WUFDcEQsTUFBS0MsbUJBQW1CO1FBQzFCLElBRUFDLHdCQUFBQSwwQkFBeUIsU0FBQ3hDLE9BQU9DLFNBQVNLLEtBQUtDLE1BQU0rQjtZQUNuRCxNQUFLRyxvQkFBb0I7UUFDM0IsSUFFQUMsd0JBQUFBLDBCQUF5QixTQUFDMUMsT0FBT0MsU0FBU0ssS0FBS0MsTUFBTW9DO1lBQ25ELElBQU1DLFlBQVlDLHlCQUFjO1lBRWhDLE1BQUtDLGNBQWMsQ0FBQ0gsT0FBT0M7UUFDN0IsSUFFQUcsd0JBQUFBLHdCQUF1QixTQUFDL0MsT0FBT0MsU0FBU0ssS0FBS0MsTUFBTW9DO1lBQ2pELElBQU1DLFlBQVlJLHVCQUFZO1lBRTlCLE1BQUtGLGNBQWMsQ0FBQ0gsT0FBT0M7UUFDN0IsSUFFQUssd0JBQUFBLDBCQUF5QixTQUFDakQsT0FBT0MsU0FBU0ssS0FBS0M7WUFDN0MsSUFBTTJDLFlBQVksTUFBS0MsWUFBWSxJQUM3QkMsaUJBQWlCRixXQUFXLEdBQUc7WUFFckMsTUFBS0csaUJBQWlCLENBQUNEO1FBQ3pCLElBRUFFLHdCQUFBQSx5QkFBd0IsU0FBQ3RELE9BQU9DLFNBQVNLLEtBQUtDO1lBQzVDLElBQU02QyxpQkFBaUIsTUFBS0csaUJBQWlCO1lBRTdDLElBQUlILG1CQUFtQixNQUFNO2dCQUMzQjtZQUNGO1lBRUEsSUFBTUYsWUFBWUUsaUJBQWlCOUM7WUFFbkMsTUFBS2tELFlBQVksQ0FBQ047UUFDcEIsSUFFQU8sd0JBQUFBLHVCQUFzQixTQUFDekQsT0FBT0MsU0FBU0ssS0FBS0M7WUFDMUMsSUFBTTZDLGlCQUFpQixNQUFLRyxpQkFBaUI7WUFFN0MsSUFBSUgsbUJBQW1CLE1BQU07Z0JBQzNCO1lBQ0Y7WUFFQSxJQUFNRixZQUFZRSxpQkFBaUI5QztZQUVuQyxNQUFLa0QsWUFBWSxDQUFDTjtRQUNwQjs7O2tCQTVHSXBEOztZQThHSjRELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixZQUFZO2dCQUVsQixJQUFJLENBQUNNLFlBQVksQ0FBQ047WUFDcEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVyxJQUFJLENBQUNDLFdBQVc7Z0JBRS9CLElBQUlELGFBQWEsTUFBTTtvQkFDckJFLGNBQWNGO29CQUVkQSxXQUFXO29CQUVYLElBQUksQ0FBQ0csV0FBVyxDQUFDSDtnQkFDbkI7WUFDRjs7O1lBRUE5QyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYWQsS0FBSyxFQUFFQyxPQUFPLEVBQUVXLEtBQUs7Z0JBQ2hDLElBQU1vRCxrQkFBa0JDLGlEQUErQjtnQkFFdkQsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0YsaUJBQWlCaEUsT0FBT0MsU0FBU1c7WUFDM0Q7OztZQUVBa0MsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVILEtBQUssRUFBRUMsU0FBUzs7Z0JBQzdCLElBQUlNLFlBQVksSUFBSSxDQUFDQyxZQUFZO2dCQUVqQ0QsYUFBYVAsUUFBUXdCLHVCQUFZO2dCQUVqQyxJQUFJLENBQUNYLFlBQVksQ0FBQ047Z0JBRWxCLElBQUlVLFdBQVcsSUFBSSxDQUFDQyxXQUFXO2dCQUUvQixJQUFJRCxhQUFhLE1BQU07b0JBQ3JCRSxjQUFjRjtnQkFDaEI7Z0JBRUFBLFdBQVdHLFlBQVk7b0JBQ3JCcEIsUUFBUUEsUUFBUUMsWUFBWXdCLHVCQUFZO29CQUV4QyxJQUFJLEFBQUN6QixRQUFRQyxZQUFhLEdBQUc7d0JBQzNCa0IsY0FBY0Y7d0JBRWRBLFdBQVc7d0JBRVgsTUFBS0csV0FBVyxDQUFDSDtvQkFDbkI7b0JBRUEsSUFBSVYsWUFBWSxNQUFLQyxZQUFZO29CQUVqQ0QsYUFBYVAsUUFBUXdCLHVCQUFZO29CQUVqQyxNQUFLWCxZQUFZLENBQUNOO2dCQUNwQixHQUFHaUIsdUJBQVk7Z0JBRWYsSUFBSSxDQUFDSixXQUFXLENBQUNIO1lBQ25COzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsaUJBQWlCO1lBQ3hCOzs7WUFFQWxFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbUUsY0FBYyxJQUFJLENBQUNDLGVBQWU7Z0JBRXhDLElBQUlELGdCQUFnQixNQUFNO29CQUN4QixJQUFNNUMsZ0JBQWdCQyxJQUFBQSx1QkFBZ0IsS0FDaEM2QyxPQUFPOUMsZUFBZSxHQUFHO29CQUUvQjRDLFlBQVlFLElBQUksQ0FBQ0E7Z0JBQ25CO1lBQ0Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCQyxJQUFBQSx5QkFBa0I7Z0JBRTFDRCxrQkFDRSxJQUFJLENBQUNFLFFBQVEsQ0FBQyxzQkFDWixJQUFJLENBQUNDLFdBQVcsQ0FBQztZQUN2Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNekQseUJBQXlCQyxJQUFBQSxnQ0FBeUI7Z0JBRXhERCx5QkFDRSxJQUFJLENBQUN1RCxRQUFRLENBQUMscUJBQ1osSUFBSSxDQUFDQyxXQUFXLENBQUM7Z0JBRXJCeEQseUJBQ0UsSUFBSSxDQUFDMEQscUJBQXFCLEtBQ3hCLElBQUksQ0FBQ0Msb0JBQW9CO1lBQy9COzs7WUFFQUEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHdCQUF3QixJQUFJLENBQUNDLHdCQUF3QjtnQkFFekQsSUFBSUQsdUJBQXVCO29CQUN6QjtnQkFDRjtnQkFFQSxJQUFJLENBQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMzQixtQkFBbUI7Z0JBQzVDLElBQUksQ0FBQzRCLGdCQUFnQixDQUFDLElBQUksQ0FBQy9CLHFCQUFxQjtnQkFDaEQsSUFBSSxDQUFDZ0MsaUJBQWlCLENBQUMsSUFBSSxDQUFDckMsc0JBQXNCO2dCQUNsRCxJQUFJLENBQUNzQyxlQUFlLENBQUMsSUFBSSxDQUFDeEMsb0JBQW9CO2dCQUM5QyxJQUFJLENBQUN5QyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM5QyxzQkFBc0I7Z0JBQ2xELElBQUksQ0FBQytDLGlCQUFpQixDQUFDLElBQUksQ0FBQ2pELHNCQUFzQjtnQkFDbEQsSUFBSSxDQUFDa0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDckQsdUJBQXVCO2dCQUNwRCxJQUFJLENBQUNzRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM1RCxzQkFBc0I7Z0JBQ2xELElBQUksQ0FBQzZELGtCQUFrQixDQUFDLElBQUksQ0FBQ2xFLHVCQUF1QjtnQkFDcEQsSUFBSSxDQUFDbUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDekUsc0JBQXNCO2dCQUVsRDhELHdCQUF3QjtnQkFFeEIsSUFBSSxDQUFDWSx3QkFBd0IsQ0FBQ1o7WUFDaEM7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUUsd0JBQXdCLElBQUksQ0FBQ0Msd0JBQXdCO2dCQUV6RCxJQUFJLENBQUNELHVCQUF1QjtvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDYSxlQUFlLENBQUMsSUFBSSxDQUFDdEMsbUJBQW1CO2dCQUM3QyxJQUFJLENBQUN1QyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMxQyxxQkFBcUI7Z0JBQ2pELElBQUksQ0FBQzJDLGtCQUFrQixDQUFDLElBQUksQ0FBQ2hELHNCQUFzQjtnQkFDbkQsSUFBSSxDQUFDaUQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDbkQsb0JBQW9CO2dCQUMvQyxJQUFJLENBQUNvRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUN6RCxzQkFBc0I7Z0JBQ25ELElBQUksQ0FBQzBELGtCQUFrQixDQUFDLElBQUksQ0FBQzVELHNCQUFzQjtnQkFDbkQsSUFBSSxDQUFDNkQsbUJBQW1CLENBQUMsSUFBSSxDQUFDaEUsdUJBQXVCO2dCQUNyRCxJQUFJLENBQUNpRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUN2RSxzQkFBc0I7Z0JBQ25ELElBQUksQ0FBQ3dFLG1CQUFtQixDQUFDLElBQUksQ0FBQzdFLHVCQUF1QjtnQkFDckQsSUFBSSxDQUFDOEUsa0JBQWtCLENBQUMsSUFBSSxDQUFDcEYsc0JBQXNCO2dCQUVuRDhELHdCQUF3QjtnQkFFeEIsSUFBSSxDQUFDWSx3QkFBd0IsQ0FBQ1o7WUFDaEM7OztZQUVBM0QsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELHlCQUF5QixJQUFJLENBQUNtRixRQUFRLENBQUM7Z0JBRTdDLE9BQU9uRjtZQUNUOzs7WUFFQW9GLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxRQUFRO2dCQUNqQixJQUFJQSxhQUFhQyx1QkFBWSxFQUFFO29CQUM3QixJQUFJLENBQUNDLG9CQUFvQjtvQkFFekI7Z0JBQ0Y7Z0JBRUEsSUFBTUMsd0JBQXdCQyxJQUFBQSwrQkFBdUIsRUFBQ0o7Z0JBRXRELElBQUlHLHVCQUF1QjtvQkFDekIsSUFBTUUsZ0JBQWdCTCxVQUFVLEdBQUc7b0JBRW5DLElBQUksQ0FBQ00sOEJBQThCLENBQUNEO29CQUVwQztnQkFDRjtnQkFFQSxJQUFJLENBQUNFLHlCQUF5QixDQUFDUDtZQUNqQzs7O1lBRUFwRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWdDLGNBQWMsSUFBSSxDQUFDQyxlQUFlLElBQ2xDN0UsZUFBZSxJQUFJLENBQUN3SCxlQUFlLElBQ25DQyxRQUFRekgsYUFBYTBILE9BQU8sQ0FBQzlDLGNBQzdCK0MsWUFBWUYsUUFBUSxHQUNwQkcsZ0JBQWdCSCxPQUFRLEdBQUc7Z0JBRWpDLElBQUlFLGNBQWMsQ0FBQyxHQUFHO29CQUNwQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNFLG1CQUFtQixDQUFDRixXQUFXQztZQUN0Qzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNOUgsZUFBZSxJQUFJLENBQUN3SCxlQUFlLElBQ25DNUMsY0FBYyxJQUFJLENBQUNDLGVBQWUsSUFDbENrRCxhQUFhL0gsYUFBYWdJLE1BQU0sRUFDaENQLFFBQVEsQUFBQzdDLGdCQUFnQixPQUNmLENBQUMsSUFDQzVFLGFBQWEwSCxPQUFPLENBQUM5QyxjQUNqQytDLFlBQVlJLGFBQWEsR0FDekJILGdCQUFnQkgsT0FBUSxHQUFHO2dCQUVqQyxJQUFJRSxjQUFjQyxlQUFlO29CQUMvQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLG1CQUFtQixDQUFDRixXQUFXQztZQUN0Qzs7O1lBRUFWLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbEgsZUFBZSxJQUFJLENBQUN3SCxlQUFlLElBQ25DNUMsY0FBYyxJQUFJLENBQUNDLGVBQWUsSUFDbEM0QyxRQUFRLEFBQUM3QyxnQkFBZ0IsT0FDZixDQUFDLElBQ0M1RSxhQUFhMEgsT0FBTyxDQUFDOUMsY0FDakMrQyxZQUFZLEdBQ1pDLGdCQUFnQkgsT0FBUSxHQUFHO2dCQUVqQyxJQUFJRSxjQUFjQyxlQUFlO29CQUMvQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLG1CQUFtQixDQUFDRixXQUFXQztZQUN0Qzs7O1lBRUE5RSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTlDLGVBQWUsSUFBSSxDQUFDd0gsZUFBZSxJQUNuQzVDLGNBQWMsSUFBSSxDQUFDQyxlQUFlLElBQ2xDa0QsYUFBYS9ILGFBQWFnSSxNQUFNLEVBQ2hDUCxRQUFRekgsYUFBYTBILE9BQU8sQ0FBQzlDLGNBQzdCK0MsWUFBWUYsUUFBUSxHQUNwQkcsZ0JBQWdCSCxPQUFRLEdBQUc7Z0JBRWpDLElBQUlFLGNBQWNJLFlBQVk7b0JBQzVCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0YsbUJBQW1CLENBQUNGLFdBQVdDO1lBQ3RDOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQlAsUUFBUTtnQkFDaEMsSUFBSXBDO2dCQUVKQSxjQUFjcUQsSUFBQUEsaUNBQXlCLEVBQUNqQixXQUFZLEdBQUc7Z0JBRXZELElBQUlwQyxnQkFBZ0IsTUFBTTtvQkFDeEI7Z0JBQ0Y7Z0JBRUEsSUFBTXNELGtCQUFrQnRELGFBQWMsR0FBRztnQkFFekNBLGNBQWMsSUFBSSxDQUFDQyxlQUFlO2dCQUVsQyxJQUFNc0Qsc0JBQXNCdkQsYUFDdEI1RSxlQUFlLElBQUksQ0FBQ3dILGVBQWUsSUFDbkNHLFlBQVkzSCxhQUFhMEgsT0FBTyxDQUFDUSxrQkFDakNOLGdCQUFnQjVILGFBQWEwSCxPQUFPLENBQUNTLHNCQUF1QixHQUFHO2dCQUVyRSxJQUFJLENBQUNOLG1CQUFtQixDQUFDRixXQUFXQyxlQUFlO29CQUNqRFEsSUFBQUEsc0JBQWMsRUFBQ3BCO2dCQUNqQjtZQUNGOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQkQsYUFBYTtnQkFDMUMsSUFBTXJILGVBQWUsSUFBSSxDQUFDd0gsZUFBZSxJQUNuQzVDLGNBQWMsSUFBSSxDQUFDQyxlQUFlLElBQ2xDa0QsYUFBYS9ILGFBQWFnSSxNQUFNLEVBQ2hDSyxhQUFhQyxJQUFBQSxtQ0FBMkIsRUFBQ2pCLGdCQUN6Q0ksUUFBUXpILGFBQWEwSCxPQUFPLENBQUM5QyxjQUM3QitDLFlBQVlVLGFBQWEsR0FDekJULGdCQUFnQkgsT0FBUSxHQUFHO2dCQUVqQyxJQUFJRSxjQUFjSSxZQUFZO29CQUM1QjtnQkFDRjtnQkFFQSxJQUFJLENBQUNGLG1CQUFtQixDQUFDRixXQUFXQztZQUN0Qzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JGLFNBQVMsRUFBRUMsYUFBYTs7b0JBQUVXLE9BQUFBLGlFQUFPLFlBQU87Z0JBQzFEQyxJQUFBQSx5QkFBYTtnQkFFYixJQUFNeEksZUFBZSxJQUFJLENBQUN3SCxlQUFlO2dCQUV6QyxJQUFJSSxrQkFBa0IsQ0FBQyxHQUFHO29CQUN4QixJQUFNTyxzQkFBc0JuSSxZQUFZLENBQUM0SCxjQUFjO29CQUV2RE8sb0JBQW9CTSxJQUFJO2dCQUMxQjtnQkFFQSxJQUFNUCxrQkFBa0JsSSxZQUFZLENBQUMySCxVQUFVLEVBQ3pDM0YsZ0JBQWdCQyxJQUFBQSx1QkFBZ0IsS0FDaEM2QyxPQUFPOUMsZUFBZSxHQUFHO2dCQUUvQixJQUFJLENBQUNnQyxhQUFhO2dCQUVsQixJQUFJLENBQUNELFdBQVc7Z0JBRWhCbUUsZ0JBQWdCcEQsSUFBSSxDQUFDQTtnQkFFckJvRCxnQkFBZ0JRLElBQUk7Z0JBRXBCQyxNQUFNO29CQUNKLElBQU1DLG1CQUFtQlYsZ0JBQWdCVyxtQkFBbUI7b0JBRTVELE1BQUtDLG1CQUFtQixDQUFDRjtvQkFFekJMO2dCQUNGO1lBQ0Y7OztZQUVBdkgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1oQixlQUFlLElBQUksQ0FBQ3dILGVBQWUsSUFDbkN6RyxxQkFBcUJmLGFBQWErSSxJQUFJLENBQUMsU0FBQ25FO29CQUN0QyxJQUFNb0UsYUFBYXBFLFlBQVlxRSxTQUFTO29CQUV4QyxJQUFJRCxZQUFZO3dCQUNkLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPakk7WUFDVDs7O1lBRUErSCxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CRixnQkFBZ0I7Z0JBQ2xDLElBQU1NLGtCQUFrQk4sa0JBQ2xCTyxNQUFNO29CQUNKRCxpQkFBQUE7Z0JBQ0Y7Z0JBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO1lBQ1g7OztZQUVBdEUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU03RSxlQUFlLElBQUksQ0FBQ3dILGVBQWUsSUFDbkM1QyxjQUFjNUUsYUFBYStJLElBQUksQ0FBQyxTQUFDbkU7b0JBQy9CLElBQU13RSxVQUFVeEUsWUFBWXFFLFNBQVM7b0JBRXJDLElBQUlHLFNBQVM7d0JBQ1gsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU94RTtZQUNUOzs7WUFFQTRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNkIsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDdEosZUFDRSxxQkFBR3FKO2dCQUdYLE9BQU9ySjtZQUNUOzs7WUFFQWtFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVELFdBQWEsSUFBSSxDQUFDc0YsUUFBUSxHQUExQnRGO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBM0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUosWUFBYyxJQUFJLENBQUNxSCxRQUFRLEdBQTNCckg7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUEwQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFSCxpQkFBbUIsSUFBSSxDQUFDOEYsUUFBUSxHQUFoQzlGO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBK0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRWdFLHdCQUEwQixJQUFJLENBQUNELFFBQVEsR0FBdkNDO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBcEYsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQVlILFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ3dGLFdBQVcsQ0FBQztvQkFDZnhGLFVBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBOUIsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFELFNBQVM7Z0JBQ3BCLElBQUksQ0FBQ3VILFdBQVcsQ0FBQztvQkFDZnZILFdBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBd0IsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkQsY0FBYztnQkFDOUIsSUFBSSxDQUFDZ0csV0FBVyxDQUFDO29CQUNmaEcsZ0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBMEMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QnFELHFCQUFxQjtnQkFDNUMsSUFBSSxDQUFDQyxXQUFXLENBQUM7b0JBQ2ZELHVCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU16RixXQUFXLE1BQ1gvQixZQUFZLE1BQ1p1QixpQkFBaUIsTUFDakIrRix3QkFBd0I7Z0JBRTlCLElBQUksQ0FBQ0csUUFBUSxDQUFDO29CQUNaMUYsVUFBQUE7b0JBQ0EvQixXQUFBQTtvQkFDQXVCLGdCQUFBQTtvQkFDQStGLHVCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0Msd0JBQXdCLENBQUMsSUFBSSxDQUFDekosNkJBQTZCO2dCQUVoRSxJQUFJLENBQUMwSixpQkFBaUIsQ0FBQyxJQUFJLENBQUNwSixzQkFBc0I7Z0JBRWxELElBQUksQ0FBQ3FKLGdCQUFnQjtnQkFFckIsSUFBSSxDQUFDQyxXQUFXO2dCQUVoQixJQUFJLENBQUM5QyxvQkFBb0I7WUFDM0I7OztZQUVBK0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsWUFBWTtnQkFFakIsSUFBSSxDQUFDQyxpQkFBaUI7Z0JBRXRCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDMUosc0JBQXNCO2dCQUVuRCxJQUFJLENBQUMySix5QkFBeUIsQ0FBQyxJQUFJLENBQUNqSyw2QkFBNkI7WUFDbkU7OztZQUVBaUosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1BLGdCQUFnQnJKLGNBQWMsR0FBRztnQkFFdkMsT0FBT3FKO1lBQ1Q7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU12RCxhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDd0QsSUFBSSxDQUFDLElBQUksR0FDdEM3SSxpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUM2SSxJQUFJLENBQUMsSUFBSSxHQUM5QzdGLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQzZGLElBQUksQ0FBQyxJQUFJLEdBQ2hEM0gsc0JBQXNCLElBQUksQ0FBQ0EsbUJBQW1CLENBQUMySCxJQUFJLENBQUMsSUFBSSxHQUN4RHpDLHNCQUFzQixJQUFJLENBQUNBLG1CQUFtQixDQUFDeUMsSUFBSSxDQUFDLElBQUksR0FDeERyRCx1QkFBdUIsSUFBSSxDQUFDQSxvQkFBb0IsQ0FBQ3FELElBQUksQ0FBQyxJQUFJLEdBQzFEekgsdUJBQXVCLElBQUksQ0FBQ0Esb0JBQW9CLENBQUN5SCxJQUFJLENBQUMsSUFBSSxHQUMxRDlKLHNCQUFzQixJQUFJLENBQUNBLG1CQUFtQixDQUFDOEosSUFBSSxDQUFDLElBQUksR0FDeERuRix1QkFBdUIsSUFBSSxDQUFDQSxvQkFBb0IsQ0FBQ21GLElBQUksQ0FBQyxJQUFJLEdBQzFEeEYseUJBQXlCLElBQUksQ0FBQ0Esc0JBQXNCLENBQUN3RixJQUFJLENBQUMsSUFBSTtnQkFFcEUsT0FBUTtvQkFDTnhELFlBQUFBO29CQUNBckYsZ0JBQUFBO29CQUNBZ0QsaUJBQUFBO29CQUNBOUIscUJBQUFBO29CQUNBa0YscUJBQUFBO29CQUNBWixzQkFBQUE7b0JBQ0FwRSxzQkFBQUE7b0JBQ0FyQyxxQkFBQUE7b0JBQ0EyRSxzQkFBQUE7b0JBQ0FMLHdCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXlGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQUksQ0FBQ2YsZUFBZTtZQUN0Qjs7O1dBNWpCSXZKO3FCQUFvQnVLLGFBQU87QUE4akIvQixpQkE5akJJdkssYUE4akJHd0ssV0FBVTtBQUVqQixpQkFoa0JJeEssYUFna0JHeUsscUJBQW9CLEVBQUU7QUFFN0IsaUJBbGtCSXpLLGFBa2tCRzBLLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBR0ZDLE9BQU9DLE1BQU0sQ0FBQzdLLFlBQVk4SyxTQUFTLEVBQUVDLHVCQUFXO0FBQ2hESCxPQUFPQyxNQUFNLENBQUM3SyxZQUFZOEssU0FBUyxFQUFFRSw0QkFBZ0I7SUFFckQsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2pMO0FBbUJ6QixTQUFTd0ksTUFBTTBDLElBQUk7SUFDakJDLFdBQVdELE1BQU07QUFDbkIifQ==