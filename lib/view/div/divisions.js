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
var _necessary = require("necessary");
var _fragmented = require("fragmented");
var _easy = require("easy");
var _easymobile = require("easy-mobile");
var _div = /*#__PURE__*/ _interop_require_default(require("../div"));
var _element = require("../../utilities/element");
var _customEventTypes = require("../../customEventTypes");
var _state = require("../../state");
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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen, ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
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
                var showingDiv = _this.findShowingDiv(), image = showingDiv.findImageByTopAndLeft(top, left);
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
            var zoom = (0, _state.getDivisionsZoom)(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        });
        _define_property(_assert_this_initialized(_this), "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), divisionsZoom = startZoom * Math.sqrt(ratio); ///
            controller.zoomDivisions(divisionsZoom);
        });
        _define_property(_assert_this_initialized(_this), "swipeRightCustomHandler", function(event, element, top, left, spped) {
            _this.showLeftDiv();
        });
        _define_property(_assert_this_initialized(_this), "swipeLeftCustomHandler", function(event, element, top, left, spped) {
            _this.showRightDiv();
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
        _define_property(_assert_this_initialized(_this), "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            switch(keyCode){
                case ENTER_KEY_CODE:
                case ARROW_RIGHT_KEY_CODE:
                    {
                        _this.showRightDiv();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftDiv();
                        break;
                    }
                case ESCAPE_KEY_CODE:
                    {
                        var fullScreen = isFullScreen();
                        if (fullScreen) {
                            controller.exitFullScreen();
                        }
                        controller.closeMenu();
                        break;
                    }
                case ARROW_UP_KEY_CODE:
                    {
                        _this.showFirstDiv();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastDiv();
                        break;
                    }
            }
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
            key: "scrollToAnchor",
            value: function scrollToAnchor(anchorId) {
                var div;
                div = (0, _element.findDivByAnchorId)(anchorId);
                var nextDiv = div; ///
                div = this.findDiv();
                var previousDiv = div; ///
                var divs = this.getDivs(), nextIndex = divs.indexOf(nextDiv), previousIndex = divs.indexOf(previousDiv); ///
                this.showNextDiv(nextIndex, previousIndex, function() {
                    (0, _element.scrollToAnchor)(anchorId);
                });
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
                var div = this.findDiv();
                if (div !== null) {
                    var zoom = (0, _state.getDivisionsZoom)();
                    div.zoom(zoom);
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
            key: "showRightDiv",
            value: function showRightDiv() {
                var div = this.findDiv(), divs = this.getDivs(), divsLength = divs.length, index = divs.indexOf(div), nextIndex = index + 1, previousIndex = index; ///
                if (nextIndex === divsLength) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLeftDiv",
            value: function showLeftDiv() {
                var div = this.findDiv(), divs = this.getDivs(), index = divs.indexOf(div), nextIndex = index - 1, previousIndex = index; ///
                if (nextIndex === -1) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLastDiv",
            value: function showLastDiv() {
                var div = this.findDiv(), divs = this.getDivs(), divsLength = divs.length, index = div === null ? -1 : divs.indexOf(div), nextIndex = divsLength - 1, previousIndex = index; ///
                if (nextIndex === previousIndex) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showFirstDiv",
            value: function showFirstDiv() {
                var div = this.findDiv(), divs = this.getDivs(), index = div === null ? -1 : divs.indexOf(div), nextIndex = 0, previousIndex = index; ///
                if (nextIndex === previousIndex) {
                    return;
                }
                this.showNextDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextDiv",
            value: function showNextDiv(nextIndex, previousIndex) {
                var _this = this;
                var done = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {};
                (0, _fragmented.resetFragment)();
                var divs = this.getDivs();
                if (previousIndex !== -1) {
                    var previousDiv = divs[previousIndex];
                    previousDiv.hide();
                }
                var zoom = (0, _state.getDivisionsZoom)(), nextDiv = divs[nextIndex];
                this.stopScrolling();
                this.scrollToTop();
                nextDiv.zoom(zoom);
                nextDiv.show();
                defer(function() {
                    var backgroundColour = nextDiv.getBackgroundColour();
                    _this.setBackgroundColour(backgroundColour);
                    done();
                });
            }
        },
        {
            key: "findShowingDiv",
            value: function findShowingDiv() {
                var divs = this.getDivs(), showingDiv = divs.find(function(div) {
                    var divShowing = div.isShowing();
                    if (divShowing) {
                        return true;
                    }
                });
                return showingDiv;
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
            key: "findDiv",
            value: function findDiv() {
                var divs = this.getDivs(), div = divs.find(function(div) {
                    var showing = div.isShowing();
                    if (showing) {
                        return true;
                    }
                }) || null;
                return div;
            }
        },
        {
            key: "getDivs",
            value: function getDivs() {
                var childElements = this.getChildElements(), divs = childElements; ///
                return divs;
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
            key: "setInterval",
            value: function setInterval1(interval) {
                this.updateState({
                    interval: interval
                });
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
            key: "setStartZoom",
            value: function setStartZoom(startZoom) {
                this.updateState({
                    startZoom: startZoom
                });
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
            key: "setStartScrollTop",
            value: function setStartScrollTop(startScrollTop) {
                this.updateState({
                    startScrollTop: startScrollTop
                });
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
                _easy.window.onKeyDown(this.keyDownHandler);
                this.onCustomSingleTap(this.singleTapCustomHandler);
                this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                this.enableFullScreen();
                this.enableTouch();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableTouch();
                this.disableFullScreen();
                this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                this.offCustomSingleTap(this.singleTapCustomHandler);
                _easy.window.offKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var divDOMElements = this.properties.divDOMElements, divs = (0, _element.elementsFromDOMElements)(divDOMElements, _div.default), childElements = _to_consumable_array(divs);
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showFirstDiv = this.showFirstDiv.bind(this), scrollToAnchor = this.scrollToAnchor.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), showDivisionsDiv = this.show.bind(this), updateDivisionsZoom = this.updateDivisionsZoom.bind(this), updateNativeGestures = this.updateNativeGestures.bind(this), updateDivisionsColours = this.updateDivisionsColours.bind(this);
                return {
                    showFirstDiv: showFirstDiv,
                    scrollToAnchor: scrollToAnchor,
                    exitFullScreen: exitFullScreen,
                    enterFullScreen: enterFullScreen,
                    showDivisionsDiv: showDivisionsDiv,
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
_define_property(DivisionsDiv, "ignoredProperties", [
    "divDOMElements"
]);
_define_property(DivisionsDiv, "defaultProperties", {
    className: "divisions"
});
Object.assign(DivisionsDiv.prototype, _easymobile.touchMixins);
Object.assign(DivisionsDiv.prototype, _easymobile.fullScreenMixins);
var _default = (0, _easywithstyle.default)(DivisionsDiv)(_templateObject());
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kaXZpc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgcmVzZXRGcmFnbWVudCB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMsIGZ1bGxTY3JlZW5NaXhpbnMsIGZ1bGxTY3JlZW5VdGlsaXRpZXMgfSBmcm9tIFwiZWFzeS1tb2JpbGVcIjtcblxuaW1wb3J0IERpdiBmcm9tIFwiLi4vZGl2XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBQUkVWSUVXX0lNQUdFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHNjcm9sbFRvQW5jaG9yLCBmaW5kRGl2QnlBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0RGl2aXNpb25zWm9vbSBhcyBnZXRab29tLCBhcmVDb2xvdXJzSW52ZXJ0ZWQsIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IFNDUk9MTF9ERUxBWSwgVVBfRElSRUNUSU9OLCBERUNFTEVSQVRJT04sIERPV05fRElSRUNUSU9OLCBPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGlzRnVsbFNjcmVlbiB9ID0gZnVsbFNjcmVlblV0aWxpdGllcyxcbiAgICAgIHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBEaXZpc2lvbnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb250cm9sbGVyLnVwZGF0ZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMudXBkYXRlRGl2aXNpb25zWm9vbSgpO1xuICB9XG5cbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKCFmdWxsU2NyZWVuKSB7XG4gICAgICBjb25zdCBzaG93aW5nRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdigpLFxuICAgICAgICAgICAgaW1hZ2UgPSBzaG93aW5nRGl2LmZpbmRJbWFnZUJ5VG9wQW5kTGVmdCh0b3AsIGxlZnQpO1xuXG4gICAgICBpZiAoaW1hZ2UgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2UoZXZlbnQsIGVsZW1lbnQsIGltYWdlKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICBpZiAoYm90dG9tIDwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCkge1xuICAgICAgY29udHJvbGxlci5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICBjb250cm9sbGVyLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSA6XG4gICAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFpvb20gPSB0aGlzLmdldFN0YXJ0Wm9vbSgpLFxuICAgICAgICAgIGRpdmlzaW9uc1pvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pOyAgLy8vXG5cbiAgICBjb250cm9sbGVyLnpvb21EaXZpc2lvbnMoZGl2aXNpb25zWm9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udHJvbGxlci5jbG9zZU1lbnUoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKSB7XG4gICAgbGV0IGRpdjtcblxuICAgIGRpdiA9IGZpbmREaXZCeUFuY2hvcklkKGFuY2hvcklkKTtcblxuICAgIGNvbnN0IG5leHREaXYgPSBkaXY7ICAvLy9cblxuICAgIGRpdiA9IHRoaXMuZmluZERpdigpO1xuXG4gICAgY29uc3QgcHJldmlvdXNEaXYgPSBkaXY7ICAvLy9cblxuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzLmluZGV4T2YobmV4dERpdiksICAvLy9cbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gZGl2cy5pbmRleE9mKHByZXZpb3VzRGl2KTsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgsICgpID0+IHtcbiAgICAgIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByZXZpZXdJbWFnZShldmVudCwgZWxlbWVudCwgaW1hZ2UpIHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVWSUVXX0lNQUdFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgaW1hZ2UpO1xuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbikge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuXG4gICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sIFNDUk9MTF9ERUxBWSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH1cblxuICB1cGRhdGVEaXZpc2lvbnNab29tKCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpO1xuXG4gICAgaWYgKGRpdiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgem9vbSA9IGdldFpvb20oKTtcblxuICAgICAgZGl2Lnpvb20oem9vbSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGl2aXNpb25zQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuICB9XG5cbiAgdXBkYXRlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIHRoaXMuZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBlbmFibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgICBsZXQgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmIChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCk7XG4gIH1cblxuICBkaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gICAgbGV0IG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAoIW5hdGl2ZUdlc3R1cmVkRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpO1xuICB9XG5cbiAgYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gdGhpcy5oYXNDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHJldHVybiBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkO1xuICB9XG5cbiAgc2hvd1JpZ2h0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xlZnREaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gKGRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IChkaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4LCBkb25lID0gKCkgPT4ge30pIHtcbiAgICByZXNldEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBkaXZzID0gdGhpcy5nZXREaXZzKCk7XG5cbiAgICBpZiAocHJldmlvdXNJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2ID0gZGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgICAgcHJldmlvdXNEaXYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgbmV4dERpdiA9IGRpdnNbbmV4dEluZGV4XTtcblxuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgbmV4dERpdi56b29tKHpvb20pO1xuXG4gICAgbmV4dERpdi5zaG93KCk7XG5cbiAgICBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gbmV4dERpdi5nZXRCYWNrZ3JvdW5kQ29sb3VyKCk7XG5cbiAgICAgIHRoaXMuc2V0QmFja2dyb3VuZENvbG91cihiYWNrZ3JvdW5kQ29sb3VyKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFNob3dpbmdEaXYoKSB7XG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXYgPSBkaXZzLmZpbmQoKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2U2hvd2luZyA9IGRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRpdlNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2hvd2luZ0RpdjtcbiAgfVxuXG4gIHNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cikge1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvdXIsIC8vL1xuICAgICAgICAgIGNzcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxuICAgICAgICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgZmluZERpdigpIHtcbiAgICBjb25zdCBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgZGl2ID0gZGl2cy5maW5kKChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBkaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChzaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgZ2V0RGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2cyA9IGNoaWxkRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpdnM7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbiAgfVxuXG4gIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgeyBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBuYXRpdmVHZXN0dXJlc0VuYWJsZWQ7XG4gIH1cblxuICBzZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRab29tID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZGlzYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBkaXZET01FbGVtZW50cyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkaXZET01FbGVtZW50cywgRGl2KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uZGl2c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0ZpcnN0RGl2ID0gdGhpcy5zaG93Rmlyc3REaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxUb0FuY2hvciA9IHRoaXMuc2Nyb2xsVG9BbmNob3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBleGl0RnVsbFNjcmVlbiA9IHRoaXMuZXhpdEZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBlbnRlckZ1bGxTY3JlZW4gPSB0aGlzLmVudGVyRnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dEaXZpc2lvbnNEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlRGl2aXNpb25zWm9vbSA9IHRoaXMudXBkYXRlRGl2aXNpb25zWm9vbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzID0gdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZURpdmlzaW9uc0NvbG91cnMgPSB0aGlzLnVwZGF0ZURpdmlzaW9uc0NvbG91cnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0ZpcnN0RGl2LFxuICAgICAgc2Nyb2xsVG9BbmNob3IsXG4gICAgICBleGl0RnVsbFNjcmVlbixcbiAgICAgIGVudGVyRnVsbFNjcmVlbixcbiAgICAgIHNob3dEaXZpc2lvbnNEaXYsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNab29tLFxuICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXMsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImRpdkRPTUVsZW1lbnRzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpdmlzaW9uc1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2aXNpb25zRGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEaXZpc2lvbnNEaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERpdmlzaW9uc0RpdilgXG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBcbiAgLm5hdGl2ZS1nZXN0dXJlcyB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gIH1cbiAgXG4gIC5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuICAgIFxuYDtcblxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xufVxuIl0sIm5hbWVzIjpbImlzRnVsbFNjcmVlbiIsImZ1bGxTY3JlZW5VdGlsaXRpZXMiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiRGl2aXNpb25zRGl2IiwiZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXBkYXRlRnVsbFNjcmVlbiIsInVwZGF0ZURpdmlzaW9uc1pvb20iLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsImZ1bGxTY3JlZW4iLCJzaG93aW5nRGl2IiwiZmluZFNob3dpbmdEaXYiLCJpbWFnZSIsImZpbmRJbWFnZUJ5VG9wQW5kTGVmdCIsInByZXZpZXdJbWFnZSIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQiLCJvcGVuTWVudSIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJleGl0RnVsbFNjcmVlbiIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiem9vbSIsImdldFpvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJkaXZpc2lvbnNab29tIiwiTWF0aCIsInNxcnQiLCJ6b29tRGl2aXNpb25zIiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzcHBlZCIsInNob3dMZWZ0RGl2Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodERpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsImRpcmVjdGlvbiIsIkRPV05fRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiY2xvc2VNZW51Iiwic2hvd0ZpcnN0RGl2Iiwic2hvd0xhc3REaXYiLCJzY3JvbGxUb1RvcCIsInN0b3BTY3JvbGxpbmciLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2Nyb2xsVG9BbmNob3IiLCJhbmNob3JJZCIsImRpdiIsImZpbmREaXZCeUFuY2hvcklkIiwibmV4dERpdiIsImZpbmREaXYiLCJwcmV2aW91c0RpdiIsImRpdnMiLCJnZXREaXZzIiwibmV4dEluZGV4IiwiaW5kZXhPZiIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dERpdiIsImN1c3RvbUV2ZW50VHlwZSIsIlBSRVZJRVdfSU1BR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJTQ1JPTExfREVMQVkiLCJERUNFTEVSQVRJT04iLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsInVwZGF0ZURpdmlzaW9uc0NvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidXBkYXRlTmF0aXZlR2VzdHVyZXMiLCJkaXNhYmxlQ3VzdG9tR2VzdHVyZXMiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsIm5hdGl2ZUdlc3R1cmVkRW5hYmxlZCIsImFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJzZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImhhc0NsYXNzIiwiZGl2c0xlbmd0aCIsImxlbmd0aCIsImluZGV4IiwiZG9uZSIsInJlc2V0RnJhZ21lbnQiLCJoaWRlIiwic2hvdyIsImRlZmVyIiwiYmFja2dyb3VuZENvbG91ciIsImdldEJhY2tncm91bmRDb2xvdXIiLCJzZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZmluZCIsImRpdlNob3dpbmciLCJpc1Nob3dpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjc3MiLCJzaG93aW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwibmF0aXZlR2VzdHVyZXNFbmFibGVkIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbmRvdyIsIm9uS2V5RG93biIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwiZW5hYmxlRnVsbFNjcmVlbiIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZLZXlEb3duIiwiZGl2RE9NRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXYiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNob3dEaXZpc2lvbnNEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEybUJBOzs7ZUFBQTs7O29FQXptQnNCO3lCQUVHOzBCQUNLO29CQUNFOzBCQUNtQzswREFFbkQ7dUJBRXdCO2dDQUNRO3FCQUUyQzt5QkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEcsSUFBTSxBQUFFQSxlQUFpQkMsK0JBQW1CLENBQXBDRCxjQUNBRSxpQkFNeUJDLG1CQUFRLENBTmpDRCxnQkFDQUUsa0JBS3lCRCxtQkFBUSxDQUxqQ0MsaUJBQ0FDLHFCQUl5QkYsbUJBQVEsQ0FKakNFLG9CQUNBQyxvQkFHeUJILG1CQUFRLENBSGpDRyxtQkFDQUMsc0JBRXlCSixtQkFBUSxDQUZqQ0kscUJBQ0FDLHNCQUN5QkwsbUJBQVEsQ0FEakNLLHFCQUNBQyx1QkFBeUJOLG1CQUFRLENBQWpDTTtBQUVSLElBQUEsQUFBTUMsNkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGlDQUFnQyxTQUFDQyxPQUFPQztZQUN0Q0MsV0FBV0MsZ0JBQWdCO1lBRTNCLE1BQUtDLG1CQUFtQjtRQUMxQjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUNMLE9BQU9DLFNBQVNLLEtBQUtDO1lBQzdDLElBQU1DLGFBQWFwQjtZQUVuQixJQUFJLENBQUNvQixZQUFZO2dCQUNmLElBQU1DLGFBQWEsTUFBS0MsY0FBYyxJQUNoQ0MsUUFBUUYsV0FBV0cscUJBQXFCLENBQUNOLEtBQUtDO2dCQUVwRCxJQUFJSSxVQUFVLE1BQU07b0JBQ2xCLE1BQUtFLFlBQVksQ0FBQ2IsT0FBT0MsU0FBU1U7b0JBRWxDO2dCQUNGO1lBQ0Y7WUFFQSxJQUFNRyxTQUFTLE1BQUtDLFNBQVMsSUFDdkJDLFNBQVNGLFNBQVNSO1lBRXhCLElBQUlVLFNBQVNDLG9DQUF5QixFQUFFO2dCQUN0Q2YsV0FBV2dCLFFBQVE7WUFDckI7UUFDRjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUNuQixPQUFPQyxTQUFTSyxLQUFLQztZQUM3QyxJQUFNQyxhQUFhcEI7WUFFbkIsSUFBSW9CLFlBQVk7Z0JBQ2ROLFdBQVdrQixjQUFjO2dCQUV6QjtZQUNGO1lBRUEsSUFBTUMseUJBQXlCQyxJQUFBQSxnQ0FBeUI7WUFFeERELHlCQUNFbkIsV0FBV3FCLHNCQUFzQixLQUMvQnJCLFdBQVdzQixxQkFBcUI7UUFDdEM7UUFFQUMsa0RBQUFBLDJCQUEwQixTQUFDekIsT0FBT0M7WUFDaEMsSUFBTXlCLE9BQU9DLElBQUFBLHVCQUFPLEtBQ2RDLFlBQVlGLE1BQU0sR0FBRztZQUUzQixNQUFLRyxZQUFZLENBQUNEO1FBQ3BCO1FBRUFFLGtEQUFBQSwwQkFBeUIsU0FBQzlCLE9BQU9DLFNBQVM4QjtZQUN4QyxJQUFNSCxZQUFZLE1BQUtJLFlBQVksSUFDN0JDLGdCQUFnQkwsWUFBWU0sS0FBS0MsSUFBSSxDQUFDSixRQUFTLEdBQUc7WUFFeEQ3QixXQUFXa0MsYUFBYSxDQUFDSDtRQUMzQjtRQUVBSSxrREFBQUEsMkJBQTBCLFNBQUNyQyxPQUFPQyxTQUFTSyxLQUFLQyxNQUFNK0I7WUFDcEQsTUFBS0MsV0FBVztRQUNsQjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUN4QyxPQUFPQyxTQUFTSyxLQUFLQyxNQUFNK0I7WUFDbkQsTUFBS0csWUFBWTtRQUNuQjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUMxQyxPQUFPQyxTQUFTSyxLQUFLQyxNQUFNb0M7WUFDbkQsSUFBTUMsWUFBWUMseUJBQWM7WUFFaEMsTUFBS0MsY0FBYyxDQUFDSCxPQUFPQztRQUM3QjtRQUVBRyxrREFBQUEsd0JBQXVCLFNBQUMvQyxPQUFPQyxTQUFTSyxLQUFLQyxNQUFNb0M7WUFDakQsSUFBTUMsWUFBWUksdUJBQVk7WUFFOUIsTUFBS0YsY0FBYyxDQUFDSCxPQUFPQztRQUM3QjtRQUVBSyxrREFBQUEsMEJBQXlCLFNBQUNqRCxPQUFPQyxTQUFTSyxLQUFLQztZQUM3QyxJQUFNMkMsWUFBWSxNQUFLQyxZQUFZLElBQzdCQyxpQkFBaUJGLFdBQVcsR0FBRztZQUVyQyxNQUFLRyxpQkFBaUIsQ0FBQ0Q7UUFDekI7UUFFQUUsa0RBQUFBLHlCQUF3QixTQUFDdEQsT0FBT0MsU0FBU0ssS0FBS0M7WUFDNUMsSUFBTTZDLGlCQUFpQixNQUFLRyxpQkFBaUI7WUFFN0MsSUFBSUgsbUJBQW1CLE1BQU07Z0JBQzNCO1lBQ0Y7WUFFQSxJQUFNRixZQUFZRSxpQkFBaUI5QztZQUVuQyxNQUFLa0QsWUFBWSxDQUFDTjtRQUNwQjtRQUVBTyxrREFBQUEsdUJBQXNCLFNBQUN6RCxPQUFPQyxTQUFTSyxLQUFLQztZQUMxQyxJQUFNNkMsaUJBQWlCLE1BQUtHLGlCQUFpQjtZQUU3QyxJQUFJSCxtQkFBbUIsTUFBTTtnQkFDM0I7WUFDRjtZQUVBLElBQU1GLFlBQVlFLGlCQUFpQjlDO1lBRW5DLE1BQUtrRCxZQUFZLENBQUNOO1FBQ3BCO1FBRUFRLGtEQUFBQSxrQkFBaUIsU0FBQzFELE9BQU9DO1lBQ3ZCLElBQU0sQUFBRTBELFVBQVkzRCxNQUFaMkQ7WUFFUixPQUFRQTtnQkFDTixLQUFLckU7Z0JBQ0wsS0FBS087b0JBQXNCO3dCQUN6QixNQUFLNEMsWUFBWTt3QkFFakI7b0JBQ0Y7Z0JBRUEsS0FBS2hEO2dCQUNMLEtBQUtHO29CQUFxQjt3QkFDeEIsTUFBSzJDLFdBQVc7d0JBRWhCO29CQUNGO2dCQUVBLEtBQUsvQztvQkFBaUI7d0JBQ3BCLElBQU1nQixhQUFhcEI7d0JBRW5CLElBQUlvQixZQUFZOzRCQUNkTixXQUFXa0IsY0FBYzt3QkFDM0I7d0JBRUFsQixXQUFXMEQsU0FBUzt3QkFFcEI7b0JBQ0Y7Z0JBRUEsS0FBS2xFO29CQUFtQjt3QkFDdEIsTUFBS21FLFlBQVk7d0JBRWpCO29CQUNGO2dCQUVBLEtBQUtsRTtvQkFBcUI7d0JBQ3hCLE1BQUttRSxXQUFXO3dCQUVoQjtvQkFDRjtZQUNGO1FBQ0Y7OztrQkF4SkloRTs7WUEwSkppRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWIsWUFBWTtnQkFFbEIsSUFBSSxDQUFDTSxZQUFZLENBQUNOO1lBQ3BCOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVcsSUFBSSxDQUFDQyxXQUFXO2dCQUUvQixJQUFJRCxhQUFhLE1BQU07b0JBQ3JCRSxjQUFjRjtvQkFFZEEsV0FBVztvQkFFWCxJQUFJLENBQUNHLFdBQVcsQ0FBQ0g7Z0JBQ25CO1lBQ0Y7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsUUFBUTtnQkFDckIsSUFBSUM7Z0JBRUpBLE1BQU1DLElBQUFBLDBCQUFpQixFQUFDRjtnQkFFeEIsSUFBTUcsVUFBVUYsS0FBTSxHQUFHO2dCQUV6QkEsTUFBTSxJQUFJLENBQUNHLE9BQU87Z0JBRWxCLElBQU1DLGNBQWNKLEtBQU0sR0FBRztnQkFFN0IsSUFBTUssT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLEtBQUtHLE9BQU8sQ0FBQ04sVUFDekJPLGdCQUFnQkosS0FBS0csT0FBTyxDQUFDSixjQUFlLEdBQUc7Z0JBRXJELElBQUksQ0FBQ00sV0FBVyxDQUFDSCxXQUFXRSxlQUFlO29CQUN6Q1gsSUFBQUEsdUJBQWMsRUFBQ0M7Z0JBQ2pCO1lBQ0Y7OztZQUVBekQsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFiLEtBQUssRUFBRUMsT0FBTyxFQUFFVSxLQUFLO2dCQUNoQyxJQUFNdUUsa0JBQWtCQyxpREFBK0I7Z0JBRXZELElBQUksQ0FBQ0Msa0JBQWtCLENBQUNGLGlCQUFpQmxGLE9BQU9DLFNBQVNVO1lBQzNEOzs7WUFFQW1DLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSCxLQUFLLEVBQUVDLFNBQVM7O2dCQUM3QixJQUFJTSxZQUFZLElBQUksQ0FBQ0MsWUFBWTtnQkFFakNELGFBQWFQLFFBQVEwQyx1QkFBWTtnQkFFakMsSUFBSSxDQUFDN0IsWUFBWSxDQUFDTjtnQkFFbEIsSUFBSWUsV0FBVyxJQUFJLENBQUNDLFdBQVc7Z0JBRS9CLElBQUlELGFBQWEsTUFBTTtvQkFDckJFLGNBQWNGO2dCQUNoQjtnQkFFQUEsV0FBV0csWUFBWTtvQkFDckJ6QixRQUFRQSxRQUFRQyxZQUFZMEMsdUJBQVk7b0JBRXhDLElBQUksQUFBQzNDLFFBQVFDLFlBQWEsR0FBRzt3QkFDM0J1QixjQUFjRjt3QkFFZEEsV0FBVzt3QkFFWCxNQUFLRyxXQUFXLENBQUNIO29CQUNuQjtvQkFFQSxJQUFJZixZQUFZLE1BQUtDLFlBQVk7b0JBRWpDRCxhQUFhUCxRQUFRMEMsdUJBQVk7b0JBRWpDLE1BQUs3QixZQUFZLENBQUNOO2dCQUNwQixHQUFHbUMsdUJBQVk7Z0JBRWYsSUFBSSxDQUFDakIsV0FBVyxDQUFDSDtZQUNuQjs7O1lBRUFzQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxpQkFBaUI7WUFDeEI7OztZQUVBcEYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1tRSxNQUFNLElBQUksQ0FBQ0csT0FBTztnQkFFeEIsSUFBSUgsUUFBUSxNQUFNO29CQUNoQixJQUFNN0MsT0FBT0MsSUFBQUEsdUJBQU87b0JBRXBCNEMsSUFBSTdDLElBQUksQ0FBQ0E7Z0JBQ1g7WUFDRjs7O1lBRUErRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCQyxJQUFBQSx5QkFBa0I7Z0JBRTFDRCxrQkFDRSxJQUFJLENBQUNFLFFBQVEsQ0FBQyxzQkFDWixJQUFJLENBQUNDLFdBQVcsQ0FBQztZQUN2Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNekUseUJBQXlCQyxJQUFBQSxnQ0FBeUI7Z0JBRXhERCx5QkFDRSxJQUFJLENBQUN1RSxRQUFRLENBQUMscUJBQ1osSUFBSSxDQUFDQyxXQUFXLENBQUM7Z0JBRXJCeEUseUJBQ0UsSUFBSSxDQUFDMEUscUJBQXFCLEtBQ3hCLElBQUksQ0FBQ0Msb0JBQW9CO1lBQy9COzs7WUFFQUEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLHdCQUF3QixJQUFJLENBQUNDLHdCQUF3QjtnQkFFekQsSUFBSUQsdUJBQXVCO29CQUN6QjtnQkFDRjtnQkFFQSxJQUFJLENBQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMxQyxtQkFBbUI7Z0JBQzVDLElBQUksQ0FBQzJDLGdCQUFnQixDQUFDLElBQUksQ0FBQzlDLHFCQUFxQjtnQkFDaEQsSUFBSSxDQUFDK0MsaUJBQWlCLENBQUMsSUFBSSxDQUFDcEQsc0JBQXNCO2dCQUNsRCxJQUFJLENBQUNxRCxlQUFlLENBQUMsSUFBSSxDQUFDdkQsb0JBQW9CO2dCQUM5QyxJQUFJLENBQUN3RCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM3RCxzQkFBc0I7Z0JBQ2xELElBQUksQ0FBQzhELGlCQUFpQixDQUFDLElBQUksQ0FBQ2hFLHNCQUFzQjtnQkFDbEQsSUFBSSxDQUFDaUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDcEUsdUJBQXVCO2dCQUNwRCxJQUFJLENBQUNxRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUM1RSxzQkFBc0I7Z0JBQ2xELElBQUksQ0FBQzZFLGtCQUFrQixDQUFDLElBQUksQ0FBQ2xGLHVCQUF1QjtnQkFDcEQsSUFBSSxDQUFDbUYsaUJBQWlCLENBQUMsSUFBSSxDQUFDekYsc0JBQXNCO2dCQUVsRDhFLHdCQUF3QjtnQkFFeEIsSUFBSSxDQUFDWSx3QkFBd0IsQ0FBQ1o7WUFDaEM7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUUsd0JBQXdCLElBQUksQ0FBQ0Msd0JBQXdCO2dCQUV6RCxJQUFJLENBQUNELHVCQUF1QjtvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDYSxlQUFlLENBQUMsSUFBSSxDQUFDckQsbUJBQW1CO2dCQUM3QyxJQUFJLENBQUNzRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUN6RCxxQkFBcUI7Z0JBQ2pELElBQUksQ0FBQzBELGtCQUFrQixDQUFDLElBQUksQ0FBQy9ELHNCQUFzQjtnQkFDbkQsSUFBSSxDQUFDZ0UsZ0JBQWdCLENBQUMsSUFBSSxDQUFDbEUsb0JBQW9CO2dCQUMvQyxJQUFJLENBQUNtRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUN4RSxzQkFBc0I7Z0JBQ25ELElBQUksQ0FBQ3lFLGtCQUFrQixDQUFDLElBQUksQ0FBQzNFLHNCQUFzQjtnQkFDbkQsSUFBSSxDQUFDNEUsbUJBQW1CLENBQUMsSUFBSSxDQUFDL0UsdUJBQXVCO2dCQUNyRCxJQUFJLENBQUNnRixrQkFBa0IsQ0FBQyxJQUFJLENBQUN2RixzQkFBc0I7Z0JBQ25ELElBQUksQ0FBQ3dGLG1CQUFtQixDQUFDLElBQUksQ0FBQzdGLHVCQUF1QjtnQkFDckQsSUFBSSxDQUFDOEYsa0JBQWtCLENBQUMsSUFBSSxDQUFDcEcsc0JBQXNCO2dCQUVuRDhFLHdCQUF3QjtnQkFFeEIsSUFBSSxDQUFDWSx3QkFBd0IsQ0FBQ1o7WUFDaEM7OztZQUVBM0UsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ELHlCQUF5QixJQUFJLENBQUNtRyxRQUFRLENBQUM7Z0JBRTdDLE9BQU9uRztZQUNUOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNOEIsTUFBTSxJQUFJLENBQUNHLE9BQU8sSUFDbEJFLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CNEMsYUFBYTdDLEtBQUs4QyxNQUFNLEVBQ3hCQyxRQUFRL0MsS0FBS0csT0FBTyxDQUFDUixNQUNyQk8sWUFBWTZDLFFBQVEsR0FDcEIzQyxnQkFBZ0IyQyxPQUFRLEdBQUc7Z0JBRWpDLElBQUk3QyxjQUFjMkMsWUFBWTtvQkFDNUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDeEMsV0FBVyxDQUFDSCxXQUFXRTtZQUM5Qjs7O1lBRUF6QyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWdDLE1BQU0sSUFBSSxDQUFDRyxPQUFPLElBQ2xCRSxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQjhDLFFBQVEvQyxLQUFLRyxPQUFPLENBQUNSLE1BQ3JCTyxZQUFZNkMsUUFBUSxHQUNwQjNDLGdCQUFnQjJDLE9BQVEsR0FBRztnQkFFakMsSUFBSTdDLGNBQWMsQ0FBQyxHQUFHO29CQUNwQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNHLFdBQVcsQ0FBQ0gsV0FBV0U7WUFDOUI7OztZQUVBbEIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1TLE1BQU0sSUFBSSxDQUFDRyxPQUFPLElBQ2xCRSxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQjRDLGFBQWE3QyxLQUFLOEMsTUFBTSxFQUN4QkMsUUFBUSxBQUFDcEQsUUFBUSxPQUNQLENBQUMsSUFDQ0ssS0FBS0csT0FBTyxDQUFDUixNQUN6Qk8sWUFBWTJDLGFBQWEsR0FDekJ6QyxnQkFBZ0IyQyxPQUFRLEdBQUc7Z0JBRWpDLElBQUk3QyxjQUFjRSxlQUFlO29CQUMvQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0gsV0FBV0U7WUFDOUI7OztZQUVBbkIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1VLE1BQU0sSUFBSSxDQUFDRyxPQUFPLElBQ2xCRSxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQjhDLFFBQVEsQUFBQ3BELFFBQVEsT0FDUCxDQUFDLElBQ0NLLEtBQUtHLE9BQU8sQ0FBQ1IsTUFDekJPLFlBQVksR0FDWkUsZ0JBQWdCMkMsT0FBUSxHQUFHO2dCQUVqQyxJQUFJN0MsY0FBY0UsZUFBZTtvQkFDL0I7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDQyxXQUFXLENBQUNILFdBQVdFO1lBQzlCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlILFNBQVMsRUFBRUUsYUFBYTs7b0JBQUU0QyxPQUFBQSxpRUFBTyxZQUFPO2dCQUNsREMsSUFBQUEseUJBQWE7Z0JBRWIsSUFBTWpELE9BQU8sSUFBSSxDQUFDQyxPQUFPO2dCQUV6QixJQUFJRyxrQkFBa0IsQ0FBQyxHQUFHO29CQUN4QixJQUFNTCxjQUFjQyxJQUFJLENBQUNJLGNBQWM7b0JBRXZDTCxZQUFZbUQsSUFBSTtnQkFDbEI7Z0JBRUEsSUFBTXBHLE9BQU9DLElBQUFBLHVCQUFPLEtBQ2Q4QyxVQUFVRyxJQUFJLENBQUNFLFVBQVU7Z0JBRS9CLElBQUksQ0FBQ2QsYUFBYTtnQkFFbEIsSUFBSSxDQUFDRCxXQUFXO2dCQUVoQlUsUUFBUS9DLElBQUksQ0FBQ0E7Z0JBRWIrQyxRQUFRc0QsSUFBSTtnQkFFWkMsTUFBTTtvQkFDSixJQUFNQyxtQkFBbUJ4RCxRQUFReUQsbUJBQW1CO29CQUVwRCxNQUFLQyxtQkFBbUIsQ0FBQ0Y7b0JBRXpCTDtnQkFDRjtZQUNGOzs7WUFFQWxILEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNa0UsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJwRSxhQUFhbUUsS0FBS3dELElBQUksQ0FBQyxTQUFDN0Q7b0JBQ3RCLElBQU04RCxhQUFhOUQsSUFBSStELFNBQVM7b0JBRWhDLElBQUlELFlBQVk7d0JBQ2QsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixPQUFPNUg7WUFDVDs7O1lBRUEwSCxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CRixnQkFBZ0I7Z0JBQ2xDLElBQU1NLGtCQUFrQk4sa0JBQ2xCTyxNQUFNO29CQUNKRCxpQkFBQUE7Z0JBQ0Y7Z0JBRU4sSUFBSSxDQUFDQyxHQUFHLENBQUNBO1lBQ1g7OztZQUVBOUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1FLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CTixNQUFNSyxLQUFLd0QsSUFBSSxDQUFDLFNBQUM3RDtvQkFDZixJQUFNa0UsVUFBVWxFLElBQUkrRCxTQUFTO29CQUU3QixJQUFJRyxTQUFTO3dCQUNYLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPbEU7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNkQsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDL0QsT0FBTzhELGVBQWUsR0FBRztnQkFFL0IsT0FBTzlEO1lBQ1Q7OztZQUVBVixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFRCxXQUFhLElBQUksQ0FBQzJFLFFBQVEsR0FBMUIzRTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQVlILFFBQVE7Z0JBQ2xCLElBQUksQ0FBQzRFLFdBQVcsQ0FBQztvQkFDZjVFLFVBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBakMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUosWUFBYyxJQUFJLENBQUNnSCxRQUFRLEdBQTNCaEg7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRCxTQUFTO2dCQUNwQixJQUFJLENBQUNpSCxXQUFXLENBQUM7b0JBQ2ZqSCxXQUFBQTtnQkFDRjtZQUNGOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVILGlCQUFtQixJQUFJLENBQUN3RixRQUFRLEdBQWhDeEY7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JELGNBQWM7Z0JBQzlCLElBQUksQ0FBQ3lGLFdBQVcsQ0FBQztvQkFDZnpGLGdCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQThDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUU0Qyx3QkFBMEIsSUFBSSxDQUFDRixRQUFRLEdBQXZDRTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQWpDLEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUJpQyxxQkFBcUI7Z0JBQzVDLElBQUksQ0FBQ0QsV0FBVyxDQUFDO29CQUNmQyx1QkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNOUUsV0FBVyxNQUNYckMsWUFBWSxNQUNad0IsaUJBQWlCLE1BQ2pCMEYsd0JBQXdCO2dCQUU5QixJQUFJLENBQUNFLFFBQVEsQ0FBQztvQkFDWi9FLFVBQUFBO29CQUNBckMsV0FBQUE7b0JBQ0F3QixnQkFBQUE7b0JBQ0EwRix1QkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRUMsWUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDekYsY0FBYztnQkFFcEMsSUFBSSxDQUFDMEYsaUJBQWlCLENBQUMsSUFBSSxDQUFDL0ksc0JBQXNCO2dCQUVsRCxJQUFJLENBQUNnSix3QkFBd0IsQ0FBQyxJQUFJLENBQUN0Siw2QkFBNkI7Z0JBRWhFLElBQUksQ0FBQ3VKLGdCQUFnQjtnQkFFckIsSUFBSSxDQUFDQyxXQUFXO1lBQ2xCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsWUFBWTtnQkFFakIsSUFBSSxDQUFDQyxpQkFBaUI7Z0JBRXRCLElBQUksQ0FBQ0MseUJBQXlCLENBQUMsSUFBSSxDQUFDNUosNkJBQTZCO2dCQUVqRSxJQUFJLENBQUM2SixrQkFBa0IsQ0FBQyxJQUFJLENBQUN2SixzQkFBc0I7Z0JBRW5ENkksWUFBTSxDQUFDVyxVQUFVLENBQUMsSUFBSSxDQUFDbkcsY0FBYztZQUN2Qzs7O1lBRUFnRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFb0IsaUJBQW1CLElBQUksQ0FBQ0MsVUFBVSxDQUFsQ0QsZ0JBQ0ZsRixPQUFPb0YsSUFBQUEsZ0NBQXVCLEVBQUNGLGdCQUFnQkcsWUFBRyxHQUNsRHZCLGdCQUNFLHFCQUFHOUQ7Z0JBR1gsT0FBTzhEO1lBQ1Q7OztZQUVBd0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1yRyxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDc0csSUFBSSxDQUFDLElBQUksR0FDMUM5RixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUM4RixJQUFJLENBQUMsSUFBSSxHQUM5Qy9JLGlCQUFpQixJQUFJLENBQUNBLGNBQWMsQ0FBQytJLElBQUksQ0FBQyxJQUFJLEdBQzlDNUUsa0JBQWtCLElBQUksQ0FBQ0EsZUFBZSxDQUFDNEUsSUFBSSxDQUFDLElBQUksR0FDaERDLG1CQUFtQixJQUFJLENBQUNyQyxJQUFJLENBQUNvQyxJQUFJLENBQUMsSUFBSSxHQUN0Qy9KLHNCQUFzQixJQUFJLENBQUNBLG1CQUFtQixDQUFDK0osSUFBSSxDQUFDLElBQUksR0FDeERyRSx1QkFBdUIsSUFBSSxDQUFDQSxvQkFBb0IsQ0FBQ3FFLElBQUksQ0FBQyxJQUFJLEdBQzFEMUUseUJBQXlCLElBQUksQ0FBQ0Esc0JBQXNCLENBQUMwRSxJQUFJLENBQUMsSUFBSTtnQkFFcEUsT0FBUTtvQkFDTnRHLGNBQUFBO29CQUNBUSxnQkFBQUE7b0JBQ0FqRCxnQkFBQUE7b0JBQ0FtRSxpQkFBQUE7b0JBQ0E2RSxrQkFBQUE7b0JBQ0FoSyxxQkFBQUE7b0JBQ0EwRixzQkFBQUE7b0JBQ0FMLHdCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQTRFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUN2QyxJQUFJO2dCQUVULElBQUksQ0FBQ3dDLGFBQWE7Z0JBRWxCLElBQUksQ0FBQ3ZCLGVBQWU7WUFDdEI7OztXQWprQklqSjtxQkFBcUJ5SyxhQUFPO0FBbWtCaEMsaUJBbmtCSXpLLGNBbWtCRzBLLFdBQVU7QUFFakIsaUJBcmtCSTFLLGNBcWtCRzJLLHFCQUFvQjtJQUN6QjtDQUNEO0FBRUQsaUJBemtCSTNLLGNBeWtCRzRLLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBR0ZDLE9BQU9DLE1BQU0sQ0FBQy9LLGFBQWFnTCxTQUFTLEVBQUVDLHVCQUFXO0FBQ2pESCxPQUFPQyxNQUFNLENBQUMvSyxhQUFhZ0wsU0FBUyxFQUFFRSw0QkFBZ0I7SUFFdEQsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25MO0FBbUJ6QixTQUFTa0ksTUFBTWtELElBQUk7SUFDakJDLFdBQVdELE1BQU07QUFDbkIifQ==