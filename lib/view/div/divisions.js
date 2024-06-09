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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kaXZpc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgcmVzZXRGcmFnbWVudCB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMsIGZ1bGxTY3JlZW5NaXhpbnMsIGZ1bGxTY3JlZW5VdGlsaXRpZXMgfSBmcm9tIFwiZWFzeS1tb2JpbGVcIjtcblxuaW1wb3J0IERpdiBmcm9tIFwiLi4vZGl2XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBQUkVWSUVXX0lNQUdFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHNjcm9sbFRvQW5jaG9yLCBmaW5kRGl2QnlBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0RGl2aXNpb25zWm9vbSBhcyBnZXRab29tLCBhcmVDb2xvdXJzSW52ZXJ0ZWQsIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IFNDUk9MTF9ERUxBWSwgVVBfRElSRUNUSU9OLCBERUNFTEVSQVRJT04sIERPV05fRElSRUNUSU9OLCBPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGlzRnVsbFNjcmVlbiB9ID0gZnVsbFNjcmVlblV0aWxpdGllcyxcbiAgICAgIHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBEaXZpc2lvbnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb250cm9sbGVyLnVwZGF0ZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMudXBkYXRlRGl2aXNpb25zWm9vbSgpO1xuICB9XG5cbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKCFmdWxsU2NyZWVuKSB7XG4gICAgICBjb25zdCBzaG93aW5nRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdigpLFxuICAgICAgICAgICAgaW1hZ2UgPSBzaG93aW5nRGl2LmZpbmRJbWFnZUJ5VG9wQW5kTGVmdCh0b3AsIGxlZnQpO1xuXG4gICAgICBpZiAoaW1hZ2UgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2UoZXZlbnQsIGVsZW1lbnQsIGltYWdlKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBib3R0b20gPSBoZWlnaHQgLSB0b3A7XG5cbiAgICBpZiAoYm90dG9tIDwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCkge1xuICAgICAgY29udHJvbGxlci5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICBjb250cm9sbGVyLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKSA6XG4gICAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFpvb20gPSB0aGlzLmdldFN0YXJ0Wm9vbSgpLFxuICAgICAgICAgIGRpdmlzaW9uc1pvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pOyAgLy8vXG5cbiAgICBjb250cm9sbGVyLnpvb21EaXZpc2lvbnMoZGl2aXNpb25zWm9vbSk7XG4gIH1cblxuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dSaWdodERpdigpO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udHJvbGxlci5jbG9zZU1lbnUoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKSB7XG4gICAgbGV0IGRpdjtcblxuICAgIGRpdiA9IGZpbmREaXZCeUFuY2hvcklkKGFuY2hvcklkKTtcblxuICAgIGNvbnN0IG5leHREaXYgPSBkaXY7ICAvLy9cblxuICAgIGRpdiA9IHRoaXMuZmluZERpdigpO1xuXG4gICAgY29uc3QgcHJldmlvdXNEaXYgPSBkaXY7ICAvLy9cblxuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzLmluZGV4T2YobmV4dERpdiksICAvLy9cbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gZGl2cy5pbmRleE9mKHByZXZpb3VzRGl2KTsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgsICgpID0+IHtcbiAgICAgIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByZXZpZXdJbWFnZShldmVudCwgZWxlbWVudCwgaW1hZ2UpIHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBQUkVWSUVXX0lNQUdFX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgaW1hZ2UpO1xuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbikge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuXG4gICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICAgIH0sIFNDUk9MTF9ERUxBWSk7XG5cbiAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgfVxuXG4gIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gIH1cblxuICB1cGRhdGVEaXZpc2lvbnNab29tKCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpO1xuXG4gICAgaWYgKGRpdiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgem9vbSA9IGdldFpvb20oKTtcblxuICAgICAgZGl2Lnpvb20oem9vbSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRGl2aXNpb25zQ29sb3VycygpIHtcbiAgICBjb25zdCBjb2xvdXJzSW52ZXJ0ZWQgPSBhcmVDb2xvdXJzSW52ZXJ0ZWQoKTtcblxuICAgIGNvbG91cnNJbnZlcnRlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpO1xuICB9XG5cbiAgdXBkYXRlTmF0aXZlR2VzdHVyZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKSA6XG4gICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIHRoaXMuZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZUN1c3RvbUdlc3R1cmVzKCk7XG4gIH1cblxuICBlbmFibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgICBsZXQgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmIChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCk7XG4gIH1cblxuICBkaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gICAgbGV0IG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAoIW5hdGl2ZUdlc3R1cmVkRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpO1xuICB9XG5cbiAgYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gdGhpcy5oYXNDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIHJldHVybiBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkO1xuICB9XG5cbiAgc2hvd1JpZ2h0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xlZnREaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gKGRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IChkaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4LCBkb25lID0gKCkgPT4ge30pIHtcbiAgICByZXNldEZyYWdtZW50KCk7XG5cbiAgICBjb25zdCBkaXZzID0gdGhpcy5nZXREaXZzKCk7XG5cbiAgICBpZiAocHJldmlvdXNJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2ID0gZGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgICAgcHJldmlvdXNEaXYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgbmV4dERpdiA9IGRpdnNbbmV4dEluZGV4XTtcblxuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgbmV4dERpdi56b29tKHpvb20pO1xuXG4gICAgbmV4dERpdi5zaG93KCk7XG5cbiAgICBkZWZlcigoKSA9PiB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gbmV4dERpdi5nZXRCYWNrZ3JvdW5kQ29sb3VyKCk7XG5cbiAgICAgIHRoaXMuc2V0QmFja2dyb3VuZENvbG91cihiYWNrZ3JvdW5kQ29sb3VyKTtcblxuICAgICAgZG9uZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFNob3dpbmdEaXYoKSB7XG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXYgPSBkaXZzLmZpbmQoKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGl2U2hvd2luZyA9IGRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKGRpdlNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc2hvd2luZ0RpdjtcbiAgfVxuXG4gIHNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cikge1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvdXIsIC8vL1xuICAgICAgICAgIGNzcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclxuICAgICAgICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgZmluZERpdigpIHtcbiAgICBjb25zdCBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgZGl2ID0gZGl2cy5maW5kKChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBkaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChzaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2O1xuICB9XG5cbiAgZ2V0RGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2cyA9IGNoaWxkRWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIGRpdnM7XG4gIH1cblxuICBnZXRJbnRlcnZhbCgpIHtcbiAgICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW50ZXJ2YWw7XG4gIH1cblxuICBzZXRJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW50ZXJ2YWxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0Wm9vbSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbiAgfVxuXG4gIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgeyBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBuYXRpdmVHZXN0dXJlc0VuYWJsZWQ7XG4gIH1cblxuICBzZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZXNFbmFibGVkKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRab29tID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludGVydmFsLFxuICAgICAgc3RhcnRab29tLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZGlzYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBkaXZET01FbGVtZW50cyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkaXZET01FbGVtZW50cywgRGl2KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uZGl2c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0ZpcnN0RGl2ID0gdGhpcy5zaG93Rmlyc3REaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxUb0FuY2hvciA9IHRoaXMuc2Nyb2xsVG9BbmNob3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBleGl0RnVsbFNjcmVlbiA9IHRoaXMuZXhpdEZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBlbnRlckZ1bGxTY3JlZW4gPSB0aGlzLmVudGVyRnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dEaXZpc2lvbnNEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlRGl2aXNpb25zWm9vbSA9IHRoaXMudXBkYXRlRGl2aXNpb25zWm9vbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzID0gdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZURpdmlzaW9uc0NvbG91cnMgPSB0aGlzLnVwZGF0ZURpdmlzaW9uc0NvbG91cnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0ZpcnN0RGl2LFxuICAgICAgc2Nyb2xsVG9BbmNob3IsXG4gICAgICBleGl0RnVsbFNjcmVlbixcbiAgICAgIGVudGVyRnVsbFNjcmVlbixcbiAgICAgIHNob3dEaXZpc2lvbnNEaXYsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNab29tLFxuICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXMsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImRpdkRPTUVsZW1lbnRzXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpdmlzaW9uc1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2aXNpb25zRGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEaXZpc2lvbnNEaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERpdmlzaW9uc0RpdilgXG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBcbiAgLm5hdGl2ZS1nZXN0dXJlcyB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gIH1cbiAgXG4gIC5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuICAgIFxuYDtcblxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xufVxuIl0sIm5hbWVzIjpbImlzRnVsbFNjcmVlbiIsImZ1bGxTY3JlZW5VdGlsaXRpZXMiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiRGl2aXNpb25zRGl2IiwiZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwidXBkYXRlRnVsbFNjcmVlbiIsInVwZGF0ZURpdmlzaW9uc1pvb20iLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsImZ1bGxTY3JlZW4iLCJzaG93aW5nRGl2IiwiZmluZFNob3dpbmdEaXYiLCJpbWFnZSIsImZpbmRJbWFnZUJ5VG9wQW5kTGVmdCIsInByZXZpZXdJbWFnZSIsImhlaWdodCIsImdldEhlaWdodCIsImJvdHRvbSIsIk9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQiLCJvcGVuTWVudSIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJleGl0RnVsbFNjcmVlbiIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsInJlc3RvcmVOYXRpdmVHZXN0dXJlcyIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiem9vbSIsImdldFpvb20iLCJzdGFydFpvb20iLCJzZXRTdGFydFpvb20iLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFpvb20iLCJkaXZpc2lvbnNab29tIiwiTWF0aCIsInNxcnQiLCJ6b29tRGl2aXNpb25zIiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzcHBlZCIsInNob3dMZWZ0RGl2Iiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodERpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsImRpcmVjdGlvbiIsIkRPV05fRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiY2xvc2VNZW51Iiwic2hvd0ZpcnN0RGl2Iiwic2hvd0xhc3REaXYiLCJzY3JvbGxUb1RvcCIsInN0b3BTY3JvbGxpbmciLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2Nyb2xsVG9BbmNob3IiLCJhbmNob3JJZCIsImRpdiIsImZpbmREaXZCeUFuY2hvcklkIiwibmV4dERpdiIsImZpbmREaXYiLCJwcmV2aW91c0RpdiIsImRpdnMiLCJnZXREaXZzIiwibmV4dEluZGV4IiwiaW5kZXhPZiIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dERpdiIsImN1c3RvbUV2ZW50VHlwZSIsIlBSRVZJRVdfSU1BR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJTQ1JPTExfREVMQVkiLCJERUNFTEVSQVRJT04iLCJlbnRlckZ1bGxTY3JlZW4iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsInVwZGF0ZURpdmlzaW9uc0NvbG91cnMiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidXBkYXRlTmF0aXZlR2VzdHVyZXMiLCJkaXNhYmxlQ3VzdG9tR2VzdHVyZXMiLCJlbmFibGVDdXN0b21HZXN0dXJlcyIsIm5hdGl2ZUdlc3R1cmVkRW5hYmxlZCIsImFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Eb3VibGVUYXAiLCJzZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbURvdWJsZVRhcCIsImhhc0NsYXNzIiwiZGl2c0xlbmd0aCIsImxlbmd0aCIsImluZGV4IiwiZG9uZSIsInJlc2V0RnJhZ21lbnQiLCJoaWRlIiwic2hvdyIsImRlZmVyIiwiYmFja2dyb3VuZENvbG91ciIsImdldEJhY2tncm91bmRDb2xvdXIiLCJzZXRCYWNrZ3JvdW5kQ29sb3VyIiwiZmluZCIsImRpdlNob3dpbmciLCJpc1Nob3dpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjc3MiLCJzaG93aW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwibmF0aXZlR2VzdHVyZXNFbmFibGVkIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbmRvdyIsIm9uS2V5RG93biIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwiZW5hYmxlRnVsbFNjcmVlbiIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZLZXlEb3duIiwiZGl2RE9NRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXYiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNob3dEaXZpc2lvbnNEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozsi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