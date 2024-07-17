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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen;
var divisionDivDOMElements = _to_consumable_array(document.querySelectorAll(_selectors.DIVISION_DIVS_SELECTOR)); ///
divisionDivDOMElements.forEach(function(divisionDivDOMElement) {
    divisionDivDOMElement.remove();
});
var DivisionsDiv = /*#__PURE__*/ function(Element) {
    _inherits(DivisionsDiv, Element);
    var _super = _create_super(DivisionsDiv);
    function DivisionsDiv() {
        _class_call_check(this, DivisionsDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "fullScreenChangeCustomHandler", function(event, element) {
            controller.updateFullScreen();
            _this.updateDivisionsZoom();
        });
        _define_property(_assert_this_initialized(_this), "singleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = isFullScreen();
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
        });
        _define_property(_assert_this_initialized(_this), "doubleTapCustomHandler", function(event, element, top, left) {
            var fullScreen = isFullScreen();
            if (fullScreen) {
                controller.exitFullScreen();
                return;
            }
            var nativeGesturesRestored = (0, _state.areNativeGesturesRestored)();
            nativeGesturesRestored ? controller.suppressNativeGestures() : controller.restoreNativeGestures();
        });
        _define_property(_assert_this_initialized(_this), "pinchStartCustomHandler", function(event, element) {
            var divisionsZoom = getDivisionsZoon(), startZoom = divisionsZoom; ///
            _this.setStartZoom(startZoom);
        });
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), divisionsZoom = startZoom * Math.sqrt(ratio); ///
            controller.zoomDivisions(divisionsZoom);
        });
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element, top, left, spped) {
            _this.showLeftDivisionDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element, top, left, spped) {
            _this.showRightDivisionDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeDownCustomHandler", function(event, element, top, left, speed) {
            var direction = _constants.DOWN_DIRECTION;
            _this.startScrolling(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var direction = _constants.UP_DIRECTION;
            _this.startScrolling(speed, direction);
        });
        _define_property(_assert_this_initialized(_this), "dragStartCustomHandler", function(event, element, top, left) {
            var scrollTop = _this.getScrollTop(), startScrollTop = scrollTop; ///
            _this.setStartScrollTop(startScrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragDownCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        _define_property(_assert_this_initialized(_this), "dragUpCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        });
        return _this;
    }
    _create_class(DivisionsDiv, [
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
                var divisionDivs = (0, _element.elementsFromDOMElements)(divisionDivDOMElements, _division.default), childElements = _to_consumable_array(divisionDivs);
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showDivisionsDiv = this.show.bind(this), goToAnchor = this.goToAnchor.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this), updateDivisionsZoom = this.updateDivisionsZoom.bind(this), updateNativeGestures = this.updateNativeGestures.bind(this), updateDivisionsColours = this.updateDivisionsColours.bind(this);
                return {
                    showDivisionsDiv: showDivisionsDiv,
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
                this.hide();
                this.assignContext();
                this.setInitialState();
            }
        }
    ]);
    return DivisionsDiv;
}(_wrap_native_super(_easy.Element));
_define_property(DivisionsDiv, "tagName", "div");
_define_property(DivisionsDiv, "ignoredProperties", []);
_define_property(DivisionsDiv, "defaultProperties", {
    className: "divisions"
});
Object.assign(DivisionsDiv.prototype, _easymobile.touchMixins);
Object.assign(DivisionsDiv.prototype, _easymobile.fullScreenMixins);
var _default = (0, _easywithstyle.default)(DivisionsDiv)(_templateObject());
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kaXZpc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcmVzZXRGcmFnbWVudCB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucywgZnVsbFNjcmVlblV0aWxpdGllcyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuXG5pbXBvcnQgRGl2aXNpb25EaXYgZnJvbSBcIi4uL2Rpdi9kaXZpc2lvblwiO1xuXG5pbXBvcnQgeyBESVZJU0lPTl9ESVZTX1NFTEVDVE9SIH0gZnJvbSBcIi4uLy4uL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IFBSRVZJRVdfSU1BR0VfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgZ2V0RGl2aXNpb25zWm9vbSwgYXJlQ29sb3Vyc0ludmVydGVkLCBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCwgaXNBbmNob3JJZEluZGV4QW5jaG9ySWQsIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYW5jaG9yXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTQ1JPTExfREVMQVksXG4gICAgICAgICBVUF9ESVJFQ1RJT04sXG4gICAgICAgICBERUNFTEVSQVRJT04sXG4gICAgICAgICBET1dOX0RJUkVDVElPTixcbiAgICAgICAgIE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgaXNGdWxsU2NyZWVuIH0gPSBmdWxsU2NyZWVuVXRpbGl0aWVzO1xuXG5jb25zdCBkaXZpc2lvbkRpdkRPTUVsZW1lbnRzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKERJVklTSU9OX0RJVlNfU0VMRUNUT1IpIF07IC8vL1xuXG5kaXZpc2lvbkRpdkRPTUVsZW1lbnRzLmZvckVhY2goKGRpdmlzaW9uRGl2RE9NRWxlbWVudCkgPT4ge1xuICBkaXZpc2lvbkRpdkRPTUVsZW1lbnQucmVtb3ZlKCk7XG59KTtcblxuY2xhc3MgRGl2aXNpb25zRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci51cGRhdGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLnVwZGF0ZURpdmlzaW9uc1pvb20oKTtcbiAgfVxuXG4gIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmICghZnVsbFNjcmVlbikge1xuICAgICAgY29uc3Qgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgICBpbWFnZSA9IHNob3dpbmdEaXZpc2lvbkRpdi5maW5kSW1hZ2VCeVRvcEFuZExlZnQodG9wLCBsZWZ0KTtcblxuICAgICAgaWYgKGltYWdlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlKGV2ZW50LCBlbGVtZW50LCBpbWFnZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYm90dG9tID0gaGVpZ2h0IC0gdG9wO1xuXG4gICAgaWYgKGJvdHRvbSA8IE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQpIHtcbiAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgY29udHJvbGxlci5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkgOlxuICAgICAgICBjb250cm9sbGVyLnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkaXZpc2lvbnNab29tID0gZ2V0RGl2aXNpb25zWm9vbigpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IGRpdmlzaW9uc1pvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICBkaXZpc2lvbnNab29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTsgIC8vL1xuXG4gICAgY29udHJvbGxlci56b29tRGl2aXNpb25zKGRpdmlzaW9uc1pvb20pO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpZXdJbWFnZShldmVudCwgZWxlbWVudCwgaW1hZ2UpIHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVWSUVXX0lNQUdFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgaW1hZ2UpO1xuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbikge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuXG4gICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sIFNDUk9MTF9ERUxBWSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH1cblxuICB1cGRhdGVEaXZpc2lvbnNab29tKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2ID0gdGhpcy5maW5kRGl2aXNpb25EaXYoKTtcblxuICAgIGlmIChkaXZpc2lvbkRpdiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25zWm9vbSA9IGdldERpdmlzaW9uc1pvb20oKSxcbiAgICAgICAgICAgIHpvb20gPSBkaXZpc2lvbnNab29tOyAvLy9cblxuICAgICAgZGl2aXNpb25EaXYuem9vbSh6b29tKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IGFyZUNvbG91cnNJbnZlcnRlZCgpO1xuXG4gICAgY29sb3Vyc0ludmVydGVkID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImludmVydGVkLWNvbG91cnNcIik7XG4gIH1cblxuICB1cGRhdGVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgdGhpcy5kaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGVuYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICAgIGxldCBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZWRFbmFibGVkKTtcbiAgfVxuXG4gIGRpc2FibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgICBsZXQgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmICghbmF0aXZlR2VzdHVyZWRFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCk7XG4gIH1cblxuICBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSB0aGlzLmhhc0NsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG4gIH1cblxuICBnb1RvQW5jaG9yKGFuY2hvcklkKSB7XG4gICAgaWYgKGFuY2hvcklkID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFuY2hvcklkSW5kZXhBbmNob3JJZCA9IGlzQW5jaG9ySWRJbmRleEFuY2hvcklkKGFuY2hvcklkKTtcblxuICAgIGlmIChhbmNob3JJZEluZGV4QW5jaG9ySWQpIHtcbiAgICAgIGNvbnN0IGluZGV4QW5jaG9ySWQgPSBhbmNob3JJZDsgLy8vXG5cbiAgICAgIHRoaXMuc2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93RGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKTtcbiAgfVxuXG4gIHNob3dMZWZ0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXYgPSB0aGlzLmZpbmREaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihkaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IHRoaXMuZmluZERpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSAoZGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKGRpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dGaXJzdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSB0aGlzLmZpbmREaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGluZGV4ID0gKGRpdmlzaW9uRGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbkRpdnMuaW5kZXhPZihkaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSB0aGlzLmZpbmREaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZpc2lvbkRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YoZGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpIHtcbiAgICBsZXQgZGl2aXNpb25EaXY7XG5cbiAgICBkaXZpc2lvbkRpdiA9IGZpbmREaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpOyAgLy8vXG5cbiAgICBpZiAoZGl2aXNpb25EaXYgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdjsgIC8vL1xuXG4gICAgZGl2aXNpb25EaXYgPSB0aGlzLmZpbmREaXZpc2lvbkRpdigpO1xuXG4gICAgY29uc3QgcHJldmlvdXNEaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2LCAgLy8vXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihuZXh0RGl2aXNpb25EaXYpLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHByZXZpb3VzRGl2aXNpb25EaXYpOyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4LCAoKSA9PiB7XG4gICAgICBzY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG4gICAgfSk7XG4gIH1cblxuICBzaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSB0aGlzLmZpbmREaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZpc2lvbkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyRnJvbUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCksXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihkaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gcGFnZU51bWJlciAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCwgZG9uZSA9ICgpID0+IHt9KSB7XG4gICAgcmVzZXRGcmFnbWVudCgpO1xuXG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgICAgcHJldmlvdXNEaXZpc2lvbkRpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW25leHRJbmRleF0sXG4gICAgICAgICAgZGl2aXNpb25zWm9vbSA9IGdldERpdmlzaW9uc1pvb20oKSxcbiAgICAgICAgICB6b29tID0gZGl2aXNpb25zWm9vbTsgLy8vXG5cbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgIG5leHREaXZpc2lvbkRpdi56b29tKHpvb20pO1xuXG4gICAgbmV4dERpdmlzaW9uRGl2LnNob3coKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSBuZXh0RGl2aXNpb25EaXYuZ2V0QmFja2dyb3VuZENvbG91cigpO1xuXG4gICAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cik7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnMuZmluZCgoZGl2aXNpb25EaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdlNob3dpbmcgPSBkaXZpc2lvbkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRpdlNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzaG93aW5nRGl2aXNpb25EaXY7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3VyLCAvLy9cbiAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGZpbmREaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzLmZpbmQoKGRpdmlzaW9uRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gZGl2aXNpb25EaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChzaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2aXNpb25EaXY7XG4gIH1cblxuICBnZXREaXZpc2lvbkRpdnMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IFtcbiAgICAgICAgICAgIC4uLmNoaWxkRWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uRGl2cztcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIGdldFN0YXJ0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIGFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpIHtcbiAgICBjb25zdCB7IG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZChuYXRpdmVHZXN0dXJlc0VuYWJsZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkaXZpc2lvbkRpdkRPTUVsZW1lbnRzLCBEaXZpc2lvbkRpdiksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLmRpdmlzaW9uRGl2c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0RpdmlzaW9uc0RpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZ29Ub0FuY2hvciA9IHRoaXMuZ29Ub0FuY2hvci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93TGVmdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2ID0gdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZURpdmlzaW9uc1pvb20gPSB0aGlzLnVwZGF0ZURpdmlzaW9uc1pvb20uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVOYXRpdmVHZXN0dXJlcyA9IHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzID0gdGhpcy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dEaXZpc2lvbnNEaXYsXG4gICAgICBnb1RvQW5jaG9yLFxuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgICBzaG93TGVmdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdixcbiAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd1JpZ2h0RGl2aXNpb25EaXYsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNab29tLFxuICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXMsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGl2aXNpb25zXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXZpc2lvbnNEaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKERpdmlzaW9uc0Rpdi5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGl2aXNpb25zRGl2KWBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIFxuICAubmF0aXZlLWdlc3R1cmVzIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbiAgLmludmVydGVkLWNvbG91cnMge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB9XG4gICAgXG5gO1xuXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XG59XG4iXSwibmFtZXMiOlsiaXNGdWxsU2NyZWVuIiwiZnVsbFNjcmVlblV0aWxpdGllcyIsImRpdmlzaW9uRGl2RE9NRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJESVZJU0lPTl9ESVZTX1NFTEVDVE9SIiwiZm9yRWFjaCIsImRpdmlzaW9uRGl2RE9NRWxlbWVudCIsInJlbW92ZSIsIkRpdmlzaW9uc0RpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInVwZGF0ZUZ1bGxTY3JlZW4iLCJ1cGRhdGVEaXZpc2lvbnNab29tIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJmdWxsU2NyZWVuIiwic2hvd2luZ0RpdmlzaW9uRGl2IiwiZmluZFNob3dpbmdEaXZpc2lvbkRpdiIsImltYWdlIiwiZmluZEltYWdlQnlUb3BBbmRMZWZ0IiwicHJldmlld0ltYWdlIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiYm90dG9tIiwiT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCIsIm9wZW5NZW51IiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsImV4aXRGdWxsU2NyZWVuIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJkaXZpc2lvbnNab29tIiwiZ2V0RGl2aXNpb25zWm9vbiIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0Wm9vbSIsIk1hdGgiLCJzcXJ0Iiwiem9vbURpdmlzaW9ucyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic3BwZWQiLCJzaG93TGVmdERpdmlzaW9uRGl2Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodERpdmlzaW9uRGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb1RvcCIsInN0b3BTY3JvbGxpbmciLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiY3VzdG9tRXZlbnRUeXBlIiwiUFJFVklFV19JTUFHRV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsIlNDUk9MTF9ERUxBWSIsIkRFQ0VMRVJBVElPTiIsImVudGVyRnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZGl2aXNpb25EaXYiLCJmaW5kRGl2aXNpb25EaXYiLCJnZXREaXZpc2lvbnNab29tIiwiem9vbSIsInVwZGF0ZURpdmlzaW9uc0NvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidXBkYXRlTmF0aXZlR2VzdHVyZXMiLCJkaXNhYmxlQ3VzdG9tR2VzdHVyZXMiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsIm5hdGl2ZUdlc3R1cmVkRW5hYmxlZCIsImFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJzZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImhhc0NsYXNzIiwiZ29Ub0FuY2hvciIsImFuY2hvcklkIiwiRU1QVFlfU1RSSU5HIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJhbmNob3JJZEluZGV4QW5jaG9ySWQiLCJpc0FuY2hvcklkSW5kZXhBbmNob3JJZCIsImluZGV4QW5jaG9ySWQiLCJzaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQiLCJzaG93RGl2aXNpb25EaXZCeUFuY2hvcklkIiwiZGl2aXNpb25EaXZzIiwiZ2V0RGl2aXNpb25EaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwiZGl2c0xlbmd0aCIsImxlbmd0aCIsImZpbmREaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJuZXh0RGl2aXNpb25EaXYiLCJwcmV2aW91c0RpdmlzaW9uRGl2Iiwic2Nyb2xsVG9BbmNob3IiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIiwiZG9uZSIsInJlc2V0RnJhZ21lbnQiLCJoaWRlIiwic2hvdyIsImRlZmVyIiwiYmFja2dyb3VuZENvbG91ciIsImdldEJhY2tncm91bmRDb2xvdXIiLCJzZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZmluZCIsImRpdlNob3dpbmciLCJpc1Nob3dpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjc3MiLCJzaG93aW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJnZXRTdGF0ZSIsIm5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwiZW5hYmxlRnVsbFNjcmVlbiIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJlbGVtZW50c0Zyb21ET01FbGVtZW50cyIsIkRpdmlzaW9uRGl2IiwicGFyZW50Q29udGV4dCIsInNob3dEaXZpc2lvbnNEaXYiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMi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