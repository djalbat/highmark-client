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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kaXZpc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgcmVzZXRGcmFnbWVudCB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMsIGZ1bGxTY3JlZW5NaXhpbnMsIGZ1bGxTY3JlZW5VdGlsaXRpZXMgfSBmcm9tIFwiZWFzeS1tb2JpbGVcIjtcblxuaW1wb3J0IERpdiBmcm9tIFwiLi4vZGl2XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdkJ5QW5jaG9ySWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGdldERpdmlzaW9uc1pvb20gYXMgZ2V0Wm9vbSwgYXJlQ29sb3Vyc0ludmVydGVkLCBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5pbXBvcnQgeyBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiwgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBpc0Z1bGxTY3JlZW4gfSA9IGZ1bGxTY3JlZW5VdGlsaXRpZXMsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgRGl2aXNpb25zRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci51cGRhdGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLnVwZGF0ZURpdmlzaW9uc1pvb20oKTtcbiAgfVxuXG4gIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYm90dG9tID0gaGVpZ2h0IC0gdG9wO1xuXG4gICAgaWYgKGJvdHRvbSA8IE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQpIHtcbiAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgY29udHJvbGxlci5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkgOlxuICAgICAgICBjb250cm9sbGVyLnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICBkaXZpc2lvbnNab29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTsgIC8vL1xuXG4gICAgY29udHJvbGxlci56b29tRGl2aXNpb25zKGRpdmlzaW9uc1pvb20pO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgICAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNZW51KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3REaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb0FuY2hvcihhbmNob3JJZCkge1xuICAgIGxldCBkaXY7XG5cbiAgICBkaXYgPSBmaW5kRGl2QnlBbmNob3JJZChhbmNob3JJZCk7XG5cbiAgICBjb25zdCBuZXh0RGl2ID0gZGl2OyAgLy8vXG5cbiAgICBkaXYgPSB0aGlzLmZpbmREaXYoKTtcblxuICAgIGNvbnN0IHByZXZpb3VzRGl2ID0gZGl2OyAgLy8vXG5cbiAgICBjb25zdCBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2cy5pbmRleE9mKG5leHREaXYpLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGRpdnMuaW5kZXhPZihwcmV2aW91c0Rpdik7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4LCAoKSA9PiB7XG4gICAgICBzY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG4gICAgfSk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNwZWVkID0gc3BlZWQgLSBkaXJlY3Rpb24gKiBERUNFTEVSQVRJT047XG5cbiAgICAgIGlmICgoc3BlZWQgKiBkaXJlY3Rpb24pIDwgMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfSwgU0NST0xMX0RFTEFZKTtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgZW50ZXJGdWxsU2NyZWVuKCkge1xuICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIHVwZGF0ZURpdmlzaW9uc1pvb20oKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCk7XG5cbiAgICBpZiAoZGl2ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgICBkaXYuem9vbSh6b29tKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IGFyZUNvbG91cnNJbnZlcnRlZCgpO1xuXG4gICAgY29sb3Vyc0ludmVydGVkID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImludmVydGVkLWNvbG91cnNcIik7XG4gIH1cblxuICB1cGRhdGVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgdGhpcy5kaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGVuYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICAgIGxldCBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZWRFbmFibGVkKTtcbiAgfVxuXG4gIGRpc2FibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgICBsZXQgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmICghbmF0aXZlR2VzdHVyZWRFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCk7XG4gIH1cblxuICBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSB0aGlzLmhhc0NsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG4gIH1cblxuICBzaG93UmlnaHREaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSAoZGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93Rmlyc3REaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gKGRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgsIGRvbmUgPSAoKSA9PiB7fSkge1xuICAgIHJlc2V0RnJhZ21lbnQoKTtcblxuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXYgPSBkaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgICBwcmV2aW91c0Rpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBuZXh0RGl2ID0gZGl2c1tuZXh0SW5kZXhdO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICBuZXh0RGl2Lnpvb20oem9vbSk7XG5cbiAgICBuZXh0RGl2LnNob3coKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSBuZXh0RGl2LmdldEJhY2tncm91bmRDb2xvdXIoKTtcblxuICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3VyLCAvLy9cbiAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGZpbmREaXYoKSB7XG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdiA9IGRpdnMuZmluZCgoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gZGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGdldERpdnMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGRpdnMgPSBjaGlsZEVsZW1lbnRzOyAvLy9cblxuICAgIHJldHVybiBkaXZzO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFpvb20oKSB7XG4gICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFpvb207XG4gIH1cblxuICBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFpvb21cbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCkge1xuICAgIGNvbnN0IHsgbmF0aXZlR2VzdHVyZXNFbmFibGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbmF0aXZlR2VzdHVyZXNFbmFibGVkO1xuICB9XG5cbiAgc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHN0YXJ0Wm9vbSxcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wLFxuICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgZGl2RE9NRWxlbWVudHMgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGl2RE9NRWxlbWVudHMsIERpdiksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLmRpdnNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dGaXJzdERpdiA9IHRoaXMuc2hvd0ZpcnN0RGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2Nyb2xsVG9BbmNob3IgPSB0aGlzLnNjcm9sbFRvQW5jaG9yLmJpbmQodGhpcyksXG4gICAgICAgICAgZXhpdEZ1bGxTY3JlZW4gPSB0aGlzLmV4aXRGdWxsU2NyZWVuLmJpbmQodGhpcyksXG4gICAgICAgICAgZW50ZXJGdWxsU2NyZWVuID0gdGhpcy5lbnRlckZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93RGl2aXNpb25zRGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHVwZGF0ZURpdmlzaW9uc1pvb20gPSB0aGlzLnVwZGF0ZURpdmlzaW9uc1pvb20uYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVOYXRpdmVHZXN0dXJlcyA9IHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzID0gdGhpcy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dGaXJzdERpdixcbiAgICAgIHNjcm9sbFRvQW5jaG9yLFxuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgICBzaG93RGl2aXNpb25zRGl2LFxuICAgICAgdXBkYXRlRGl2aXNpb25zWm9vbSxcbiAgICAgIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzLFxuICAgICAgdXBkYXRlRGl2aXNpb25zQ29sb3Vyc1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJkaXZET01FbGVtZW50c1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkaXZpc2lvbnNcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKERpdmlzaW9uc0Rpdi5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRGl2aXNpb25zRGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEaXZpc2lvbnNEaXYpYFxuICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gICAgXG4gIC5uYXRpdmUtZ2VzdHVyZXMge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgdG91Y2gtYWN0aW9uOiBhdXRvO1xuICB9XG4gIFxuICAuaW52ZXJ0ZWQtY29sb3VycyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIH1cbiAgICBcbmA7XG5cbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcbiAgc2V0VGltZW91dChmdW5jLCAwKTtcbn1cbiJdLCJuYW1lcyI6WyJpc0Z1bGxTY3JlZW4iLCJmdWxsU2NyZWVuVXRpbGl0aWVzIiwiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIkRpdmlzaW9uc0RpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInVwZGF0ZUZ1bGxTY3JlZW4iLCJ1cGRhdGVEaXZpc2lvbnNab29tIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIiwib3Blbk1lbnUiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiZnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwibmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsImFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJzdXBwcmVzc05hdGl2ZUdlc3R1cmVzIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJ6b29tIiwiZ2V0Wm9vbSIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0Wm9vbSIsImRpdmlzaW9uc1pvb20iLCJNYXRoIiwic3FydCIsInpvb21EaXZpc2lvbnMiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNwcGVkIiwic2hvd0xlZnREaXYiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0RGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJjbG9zZU1lbnUiLCJzaG93Rmlyc3REaXYiLCJzaG93TGFzdERpdiIsInNjcm9sbFRvQW5jaG9yIiwiYW5jaG9ySWQiLCJkaXYiLCJmaW5kRGl2QnlBbmNob3JJZCIsIm5leHREaXYiLCJmaW5kRGl2IiwicHJldmlvdXNEaXYiLCJkaXZzIiwiZ2V0RGl2cyIsIm5leHRJbmRleCIsImluZGV4T2YiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHREaXYiLCJzY3JvbGxUb1RvcCIsInN0b3BTY3JvbGxpbmciLCJpbnRlcnZhbCIsImdldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiU0NST0xMX0RFTEFZIiwiREVDRUxFUkFUSU9OIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJ1cGRhdGVEaXZpc2lvbnNDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwiYXJlQ29sb3Vyc0ludmVydGVkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJuYXRpdmVHZXN0dXJlZEVuYWJsZWQiLCJhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwic2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJoYXNDbGFzcyIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsImRvbmUiLCJyZXNldEZyYWdtZW50IiwiaGlkZSIsInNob3ciLCJkZWZlciIsImJhY2tncm91bmRDb2xvdXIiLCJnZXRCYWNrZ3JvdW5kQ29sb3VyIiwic2V0QmFja2dyb3VuZENvbG91ciIsImJhY2tncm91bmRDb2xvciIsImNzcyIsImZpbmQiLCJzaG93aW5nIiwiaXNTaG93aW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwibmF0aXZlR2VzdHVyZXNFbmFibGVkIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIndpbmRvdyIsIm9uS2V5RG93biIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwiZW5hYmxlRnVsbFNjcmVlbiIsImVuYWJsZVRvdWNoIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJkaXNhYmxlRnVsbFNjcmVlbiIsIm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZLZXlEb3duIiwiZGl2RE9NRWxlbWVudHMiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXYiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNob3dEaXZpc2lvbnNEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwa0JBOzs7ZUFBQTs7O29FQXhrQnNCO3lCQUVHOzBCQUNLO29CQUNFOzBCQUNtQzswREFFbkQ7dUJBRXdCO3FCQUVtRDt5QkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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