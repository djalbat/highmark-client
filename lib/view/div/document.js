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
var _customEventTypes = require("../../customEventTypes");
var _selectors = require("../../selectors");
var _element = require("../../utilities/element");
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
(0, _element.removeDOMElement)(_selectors.DOCUMENT_DIV_SELECTOR);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyByZXNldEZyYWdtZW50IH0gZnJvbSBcImZyYWdtZW50ZWRcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBEaXZpc2lvbkRpdiBmcm9tIFwiLi4vZGl2L2RpdmlzaW9uXCI7XG5cbmltcG9ydCB7IFBSRVZJRVdfSU1BR0VfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgRE9DVU1FTlRfRElWX1NFTEVDVE9SLCBESVZJU0lPTl9ESVZTX1NFTEVDVE9SIH0gZnJvbSBcIi4uLy4uL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgcmVtb3ZlRE9NRWxlbWVudCwgcmVtb3ZlRE9NRWxlbWVudHMsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBnZXREaXZpc2lvbnNab29tLCBhcmVDb2xvdXJzSW52ZXJ0ZWQsIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IHNjcm9sbFRvQW5jaG9yLCBmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkLCBpc0FuY2hvcklkSW5kZXhBbmNob3JJZCwgcGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hbmNob3JcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgU0NST0xMX0RFTEFZLCBVUF9ESVJFQ1RJT04sIERFQ0VMRVJBVElPTiwgRE9XTl9ESVJFQ1RJT04sIE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGRpdmlzaW9uRGl2RE9NRWxlbWVudHMgPSByZW1vdmVET01FbGVtZW50cyhESVZJU0lPTl9ESVZTX1NFTEVDVE9SKSxcbiAgICAgIGRpdmlzaW9uRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRpdmlzaW9uRGl2RE9NRWxlbWVudHMsIERpdmlzaW9uRGl2KTtcblxucmVtb3ZlRE9NRWxlbWVudChET0NVTUVOVF9ESVZfU0VMRUNUT1IpO1xuXG5jbGFzcyBEb2N1bWVudERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy51cGRhdGVEaXZpc2lvbnNab29tKCk7XG4gIH1cblxuICBzaW5nbGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmICghZnVsbFNjcmVlbikge1xuICAgICAgY29uc3Qgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgICBpbWFnZSA9IHNob3dpbmdEaXZpc2lvbkRpdi5maW5kSW1hZ2VCeVRvcEFuZExlZnQodG9wLCBsZWZ0KTtcblxuICAgICAgaWYgKGltYWdlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlKGV2ZW50LCBlbGVtZW50LCBpbWFnZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYm90dG9tID0gaGVpZ2h0IC0gdG9wO1xuXG4gICAgaWYgKGJvdHRvbSA8IE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQpIHtcbiAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICBjb250cm9sbGVyLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSA6XG4gICAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRpdmlzaW9uc1pvb20gPSBnZXREaXZpc2lvbnNab29tKCksXG4gICAgICAgICAgc3RhcnRab29tID0gZGl2aXNpb25zWm9vbTsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFpvb20gPSB0aGlzLmdldFN0YXJ0Wm9vbSgpLFxuICAgICAgICAgIGRpdmlzaW9uc1pvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pOyAgLy8vXG5cbiAgICBjb250cm9sbGVyLnpvb21EaXZpc2lvbnMoZGl2aXNpb25zWm9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuICB9XG5cbiAgc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlld0ltYWdlKGV2ZW50LCBlbGVtZW50LCBpbWFnZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVZJRVdfSU1BR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBpbWFnZSk7XG4gIH1cblxuICBzdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNwZWVkID0gc3BlZWQgLSBkaXJlY3Rpb24gKiBERUNFTEVSQVRJT047XG5cbiAgICAgIGlmICgoc3BlZWQgKiBkaXJlY3Rpb24pIDwgMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfSwgU0NST0xMX0RFTEFZKTtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgZW50ZXJGdWxsU2NyZWVuKCkge1xuICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIHVwZGF0ZURpdmlzaW9uc1pvb20oKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXYgPSB0aGlzLmZpbmREaXZpc2lvbkRpdigpO1xuXG4gICAgaWYgKGRpdmlzaW9uRGl2ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbnNab29tID0gZ2V0RGl2aXNpb25zWm9vbSgpLFxuICAgICAgICAgICAgem9vbSA9IGRpdmlzaW9uc1pvb207IC8vL1xuXG4gICAgICBkaXZpc2lvbkRpdi56b29tKHpvb20pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpdmlzaW9uc0NvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gYXJlQ29sb3Vyc0ludmVydGVkKCk7XG5cbiAgICBjb2xvdXJzSW52ZXJ0ZWQgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImludmVydGVkLWNvbG91cnNcIikgOlxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKTtcbiAgfVxuXG4gIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCk7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIikgOlxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICB0aGlzLmRpc2FibGVDdXN0b21HZXN0dXJlcygpIDpcbiAgICAgICAgdGhpcy5lbmFibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gICAgbGV0IG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAobmF0aXZlR2VzdHVyZWRFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpO1xuICB9XG5cbiAgZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICAgIGxldCBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKCFuYXRpdmVHZXN0dXJlZEVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZWRFbmFibGVkKTtcbiAgfVxuXG4gIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IHRoaXMuaGFzQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICByZXR1cm4gbmF0aXZlR2VzdHVyZXNSZXN0b3JlZDtcbiAgfVxuXG4gIGdvVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgICBpZiAoYW5jaG9ySWQgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5jaG9ySWRJbmRleEFuY2hvcklkID0gaXNBbmNob3JJZEluZGV4QW5jaG9ySWQoYW5jaG9ySWQpO1xuXG4gICAgaWYgKGFuY2hvcklkSW5kZXhBbmNob3JJZCkge1xuICAgICAgY29uc3QgaW5kZXhBbmNob3JJZCA9IGFuY2hvcklkOyAvLy9cblxuICAgICAgdGhpcy5zaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpO1xuICB9XG5cbiAgc2hvd0xlZnREaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKGRpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xhc3REaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IChkaXZpc2lvbkRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2aXNpb25EaXZzLmluZGV4T2YoZGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCksXG4gICAgICAgICAgaW5kZXggPSAoZGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKGRpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd1JpZ2h0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihkaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCkge1xuICAgIGxldCBkaXZpc2lvbkRpdjtcblxuICAgIGRpdmlzaW9uRGl2ID0gZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7ICAvLy9cblxuICAgIGlmIChkaXZpc2lvbkRpdiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHREaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2OyAgLy8vXG5cbiAgICBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCk7XG5cbiAgICBjb25zdCBwcmV2aW91c0RpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXYsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKG5leHREaXZpc2lvbkRpdiksICAvLy9cbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YocHJldmlvdXNEaXZpc2lvbkRpdik7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgsICgpID0+IHtcbiAgICAgIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKSxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKGRpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBwYWdlTnVtYmVyIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4LCBkb25lID0gKCkgPT4ge30pIHtcbiAgICByZXNldEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpO1xuXG4gICAgaWYgKHByZXZpb3VzSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgICBwcmV2aW91c0RpdmlzaW9uRGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnNbbmV4dEluZGV4XSxcbiAgICAgICAgICBkaXZpc2lvbnNab29tID0gZ2V0RGl2aXNpb25zWm9vbSgpLFxuICAgICAgICAgIHpvb20gPSBkaXZpc2lvbnNab29tOyAvLy9cblxuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgbmV4dERpdmlzaW9uRGl2Lnpvb20oem9vbSk7XG5cbiAgICBuZXh0RGl2aXNpb25EaXYuc2hvdygpO1xuXG4gICAgZGVmZXIoKCkgPT4ge1xuICAgICAgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IG5leHREaXZpc2lvbkRpdi5nZXRCYWNrZ3JvdW5kQ29sb3VyKCk7XG5cbiAgICAgIHRoaXMuc2V0QmFja2dyb3VuZENvbG91cihiYWNrZ3JvdW5kQ29sb3VyKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFNob3dpbmdEaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2cy5maW5kKChkaXZpc2lvbkRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2U2hvd2luZyA9IGRpdmlzaW9uRGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoZGl2U2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHNob3dpbmdEaXZpc2lvbkRpdjtcbiAgfVxuXG4gIHNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cikge1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvdXIsIC8vL1xuICAgICAgICAgIGNzcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxuICAgICAgICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgZmluZERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnMuZmluZCgoZGl2aXNpb25EaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBkaXZpc2lvbkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkRpdjtcbiAgfVxuXG4gIGdldERpdmlzaW9uRGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gW1xuICAgICAgICAgICAgLi4uY2hpbGRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZGl2aXNpb25EaXZzO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCkge1xuICAgIGNvbnN0IHsgbmF0aXZlR2VzdHVyZXNFbmFibGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbmF0aXZlR2VzdHVyZXNFbmFibGVkO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFpvb21cbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHN0YXJ0Wm9vbSxcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wLFxuICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZGlzYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBkaXZpc2lvbkRpdnM7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdvVG9BbmNob3IgPSB0aGlzLmdvVG9BbmNob3IuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGV4aXRGdWxsU2NyZWVuID0gdGhpcy5leGl0RnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVudGVyRnVsbFNjcmVlbiA9IHRoaXMuZW50ZXJGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0xlZnREaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dMYXN0RGl2aXNpb25EaXYgPSB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93Rmlyc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93UmlnaHREaXZpc2lvbkRpdiA9IHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVEaXZpc2lvbnNab29tID0gdGhpcy51cGRhdGVEaXZpc2lvbnNab29tLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXMgPSB0aGlzLnVwZGF0ZU5hdGl2ZUdlc3R1cmVzLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlRGl2aXNpb25zQ29sb3VycyA9IHRoaXMudXBkYXRlRGl2aXNpb25zQ29sb3Vycy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnb1RvQW5jaG9yLFxuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgICBzaG93TGVmdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdixcbiAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd1JpZ2h0RGl2aXNpb25EaXYsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNab29tLFxuICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXMsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRvY3VtZW50XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudERpdi5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnREaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERvY3VtZW50RGl2KWBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIFxuICAubmF0aXZlLWdlc3R1cmVzIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbiAgLmludmVydGVkLWNvbG91cnMge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB9XG4gICAgXG5gO1xuXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XG59XG4iXSwibmFtZXMiOlsiZGl2aXNpb25EaXZET01FbGVtZW50cyIsInJlbW92ZURPTUVsZW1lbnRzIiwiRElWSVNJT05fRElWU19TRUxFQ1RPUiIsImRpdmlzaW9uRGl2cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiRGl2aXNpb25EaXYiLCJyZW1vdmVET01FbGVtZW50IiwiRE9DVU1FTlRfRElWX1NFTEVDVE9SIiwiRG9jdW1lbnREaXYiLCJmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJ1cGRhdGVGdWxsU2NyZWVuIiwidXBkYXRlRGl2aXNpb25zWm9vbSIsInNpbmdsZVRhcEN1c3RvbUhhbmRsZXIiLCJ0b3AiLCJsZWZ0IiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsInNob3dpbmdEaXZpc2lvbkRpdiIsImZpbmRTaG93aW5nRGl2aXNpb25EaXYiLCJpbWFnZSIsImZpbmRJbWFnZUJ5VG9wQW5kTGVmdCIsInByZXZpZXdJbWFnZSIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQiLCJvcGVuTWVudSIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJleGl0RnVsbFNjcmVlbiIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiZGl2aXNpb25zWm9vbSIsImdldERpdmlzaW9uc1pvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJNYXRoIiwic3FydCIsInpvb21EaXZpc2lvbnMiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNwcGVkIiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsImRpcmVjdGlvbiIsIkRPV05fRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9Ub3AiLCJzdG9wU2Nyb2xsaW5nIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImN1c3RvbUV2ZW50VHlwZSIsIlBSRVZJRVdfSU1BR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJTQ1JPTExfREVMQVkiLCJERUNFTEVSQVRJT04iLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImRpdmlzaW9uRGl2IiwiZmluZERpdmlzaW9uRGl2Iiwiem9vbSIsInVwZGF0ZURpdmlzaW9uc0NvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidXBkYXRlTmF0aXZlR2VzdHVyZXMiLCJkaXNhYmxlQ3VzdG9tR2VzdHVyZXMiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsIm5hdGl2ZUdlc3R1cmVkRW5hYmxlZCIsImFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJzZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImhhc0NsYXNzIiwiZ29Ub0FuY2hvciIsImFuY2hvcklkIiwiRU1QVFlfU1RSSU5HIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJhbmNob3JJZEluZGV4QW5jaG9ySWQiLCJpc0FuY2hvcklkSW5kZXhBbmNob3JJZCIsImluZGV4QW5jaG9ySWQiLCJzaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQiLCJzaG93RGl2aXNpb25EaXZCeUFuY2hvcklkIiwiZ2V0RGl2aXNpb25EaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwiZGl2c0xlbmd0aCIsImxlbmd0aCIsImZpbmREaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJuZXh0RGl2aXNpb25EaXYiLCJwcmV2aW91c0RpdmlzaW9uRGl2Iiwic2Nyb2xsVG9BbmNob3IiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIiwiZG9uZSIsInJlc2V0RnJhZ21lbnQiLCJoaWRlIiwic2hvdyIsImRlZmVyIiwiYmFja2dyb3VuZENvbG91ciIsImdldEJhY2tncm91bmRDb2xvdXIiLCJzZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZmluZCIsImRpdlNob3dpbmciLCJpc1Nob3dpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjc3MiLCJzaG93aW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJnZXRTdGF0ZSIsIm5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwiZW5hYmxlRnVsbFNjcmVlbiIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwiZnVuYyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdtQkE7OztlQUFBOzs7b0VBOWxCc0I7b0JBRUU7MEJBQ007MEJBQ2dCOytEQUV0QjtnQ0FFd0I7eUJBQ2M7dUJBQ2U7cUJBQ0c7c0JBQ2dDO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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