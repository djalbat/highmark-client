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
var _selectors = require("../../selectors");
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
var divDOMElements = _to_consumable_array(document.querySelectorAll(_selectors.DIVS_SELECTOR)); ///
divDOMElements.forEach(function(divDOMElement) {
    divDOMElement.remove();
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
                if (anchorId === _constants.EMPTY_STRING) {
                    this.showFirstDiv();
                    return;
                }
                var div;
                div = (0, _element.findDivByAnchorId)(anchorId);
                if (div === null) {
                    return;
                }
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
                var divs = (0, _element.elementsFromDOMElements)(divDOMElements, _div.default), childElements = _to_consumable_array(divs);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kaXZpc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgcmVzZXRGcmFnbWVudCB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdG91Y2hNaXhpbnMsIGZ1bGxTY3JlZW5NaXhpbnMsIGZ1bGxTY3JlZW5VdGlsaXRpZXMgfSBmcm9tIFwiZWFzeS1tb2JpbGVcIjtcblxuaW1wb3J0IERpdiBmcm9tIFwiLi4vZGl2XCI7XG5cbmltcG9ydCB7IERJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgUFJFVklFV19JTUFHRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi8uLi9jdXN0b21FdmVudFR5cGVzXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdkJ5QW5jaG9ySWQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGdldERpdmlzaW9uc1pvb20gYXMgZ2V0Wm9vbSwgYXJlQ29sb3Vyc0ludmVydGVkLCBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTQ1JPTExfREVMQVksXG4gICAgICAgICBVUF9ESVJFQ1RJT04sXG4gICAgICAgICBERUNFTEVSQVRJT04sXG4gICAgICAgICBET1dOX0RJUkVDVElPTixcbiAgICAgICAgIE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgaXNGdWxsU2NyZWVuIH0gPSBmdWxsU2NyZWVuVXRpbGl0aWVzLFxuICAgICAgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNvbnN0IGRpdkRPTUVsZW1lbnRzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKERJVlNfU0VMRUNUT1IpIF07IC8vL1xuXG5kaXZET01FbGVtZW50cy5mb3JFYWNoKChkaXZET01FbGVtZW50KSA9PiB7XG4gIGRpdkRPTUVsZW1lbnQucmVtb3ZlKCk7XG59KTtcblxuY2xhc3MgRGl2aXNpb25zRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci51cGRhdGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLnVwZGF0ZURpdmlzaW9uc1pvb20oKTtcbiAgfVxuXG4gIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmICghZnVsbFNjcmVlbikge1xuICAgICAgY29uc3Qgc2hvd2luZ0RpdiA9IHRoaXMuZmluZFNob3dpbmdEaXYoKSxcbiAgICAgICAgICAgIGltYWdlID0gc2hvd2luZ0Rpdi5maW5kSW1hZ2VCeVRvcEFuZExlZnQodG9wLCBsZWZ0KTtcblxuICAgICAgaWYgKGltYWdlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlKGV2ZW50LCBlbGVtZW50LCBpbWFnZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYm90dG9tID0gaGVpZ2h0IC0gdG9wO1xuXG4gICAgaWYgKGJvdHRvbSA8IE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQpIHtcbiAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgY29udHJvbGxlci5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkgOlxuICAgICAgICBjb250cm9sbGVyLnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICBkaXZpc2lvbnNab29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTsgIC8vL1xuXG4gICAgY29udHJvbGxlci56b29tRGl2aXNpb25zKGRpdmlzaW9uc1pvb20pO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgICAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRyb2xsZXIuY2xvc2VNZW51KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3REaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb0FuY2hvcihhbmNob3JJZCkge1xuICAgIGlmIChhbmNob3JJZCA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICB0aGlzLnNob3dGaXJzdERpdigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRpdjtcblxuICAgIGRpdiA9IGZpbmREaXZCeUFuY2hvcklkKGFuY2hvcklkKTtcblxuICAgIGlmIChkaXYgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RGl2ID0gZGl2OyAgLy8vXG5cbiAgICBkaXYgPSB0aGlzLmZpbmREaXYoKTtcblxuICAgIGNvbnN0IHByZXZpb3VzRGl2ID0gZGl2OyAgLy8vXG5cbiAgICBjb25zdCBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2cy5pbmRleE9mKG5leHREaXYpLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGRpdnMuaW5kZXhPZihwcmV2aW91c0Rpdik7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4LCAoKSA9PiB7XG4gICAgICBzY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG4gICAgfSk7XG4gIH1cblxuICBwcmV2aWV3SW1hZ2UoZXZlbnQsIGVsZW1lbnQsIGltYWdlKSB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gUFJFVklFV19JTUFHRV9DVVNUT01fRVZFTlRfVFlQRTtcblxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGltYWdlKTtcbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG5cbiAgICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc3BlZWQgPSBzcGVlZCAtIGRpcmVjdGlvbiAqIERFQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKChzcGVlZCAqIGRpcmVjdGlvbikgPCAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgICB9LCBTQ1JPTExfREVMQVkpO1xuXG4gICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH1cblxuICBlbnRlckZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgdXBkYXRlRGl2aXNpb25zWm9vbSgpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKTtcblxuICAgIGlmIChkaXYgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCk7XG5cbiAgICAgIGRpdi56b29tKHpvb20pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURpdmlzaW9uc0NvbG91cnMoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gYXJlQ29sb3Vyc0ludmVydGVkKCk7XG5cbiAgICBjb2xvdXJzSW52ZXJ0ZWQgP1xuICAgICAgdGhpcy5hZGRDbGFzcyhcImludmVydGVkLWNvbG91cnNcIikgOlxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwiaW52ZXJ0ZWQtY29sb3Vyc1wiKTtcbiAgfVxuXG4gIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCk7XG5cbiAgICBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIikgOlxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICB0aGlzLmRpc2FibGVDdXN0b21HZXN0dXJlcygpIDpcbiAgICAgICAgdGhpcy5lbmFibGVDdXN0b21HZXN0dXJlcygpO1xuICB9XG5cbiAgZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4gICAgbGV0IG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRoaXMuYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCk7XG5cbiAgICBpZiAobmF0aXZlR2VzdHVyZWRFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZChuYXRpdmVHZXN0dXJlZEVuYWJsZWQpO1xuICB9XG5cbiAgZGlzYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICAgIGxldCBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKCFuYXRpdmVHZXN0dXJlZEVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZWRFbmFibGVkKTtcbiAgfVxuXG4gIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKSB7XG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IHRoaXMuaGFzQ2xhc3MoXCJuYXRpdmUtZ2VzdHVyZXNcIik7XG5cbiAgICByZXR1cm4gbmF0aXZlR2VzdHVyZXNSZXN0b3JlZDtcbiAgfVxuXG4gIHNob3dSaWdodERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMZWZ0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xhc3REaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IChkaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dGaXJzdERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgaW5kZXggPSAoZGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCwgZG9uZSA9ICgpID0+IHt9KSB7XG4gICAgcmVzZXRGcmFnbWVudCgpO1xuXG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpO1xuXG4gICAgaWYgKHByZXZpb3VzSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdiA9IGRpdnNbcHJldmlvdXNJbmRleF07XG5cbiAgICAgIHByZXZpb3VzRGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIG5leHREaXYgPSBkaXZzW25leHRJbmRleF07XG5cbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgIG5leHREaXYuem9vbSh6b29tKTtcblxuICAgIG5leHREaXYuc2hvdygpO1xuXG4gICAgZGVmZXIoKCkgPT4ge1xuICAgICAgY29uc3QgYmFja2dyb3VuZENvbG91ciA9IG5leHREaXYuZ2V0QmFja2dyb3VuZENvbG91cigpO1xuXG4gICAgICB0aGlzLnNldEJhY2tncm91bmRDb2xvdXIoYmFja2dyb3VuZENvbG91cik7XG5cbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRTaG93aW5nRGl2KCkge1xuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2ID0gZGl2cy5maW5kKChkaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpdlNob3dpbmcgPSBkaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChkaXZTaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNob3dpbmdEaXY7XG4gIH1cblxuICBzZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3VyLCAvLy9cbiAgICAgICAgICBjc3MgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICB9O1xuXG4gICAgdGhpcy5jc3MoY3NzKTtcbiAgfVxuXG4gIGZpbmREaXYoKSB7XG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdiA9IGRpdnMuZmluZCgoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gZGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpdjtcbiAgfVxuXG4gIGdldERpdnMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGRpdnMgPSBjaGlsZEVsZW1lbnRzOyAvLy9cblxuICAgIHJldHVybiBkaXZzO1xuICB9XG5cbiAgZ2V0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgeyBpbnRlcnZhbCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGludGVydmFsO1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGludGVydmFsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFpvb20oKSB7XG4gICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFpvb207XG4gIH1cblxuICBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFpvb21cbiAgICB9KTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkKCkge1xuICAgIGNvbnN0IHsgbmF0aXZlR2VzdHVyZXNFbmFibGVkIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbmF0aXZlR2VzdHVyZXNFbmFibGVkO1xuICB9XG5cbiAgc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnRlcnZhbCxcbiAgICAgIHN0YXJ0Wm9vbSxcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wLFxuICAgICAgbmF0aXZlR2VzdHVyZXNFbmFibGVkXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGRpdnMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkaXZET01FbGVtZW50cywgRGl2KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gW1xuICAgICAgICAgICAgLi4uZGl2c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0ZpcnN0RGl2ID0gdGhpcy5zaG93Rmlyc3REaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxUb0FuY2hvciA9IHRoaXMuc2Nyb2xsVG9BbmNob3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBleGl0RnVsbFNjcmVlbiA9IHRoaXMuZXhpdEZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBlbnRlckZ1bGxTY3JlZW4gPSB0aGlzLmVudGVyRnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dEaXZpc2lvbnNEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlRGl2aXNpb25zWm9vbSA9IHRoaXMudXBkYXRlRGl2aXNpb25zWm9vbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzID0gdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZURpdmlzaW9uc0NvbG91cnMgPSB0aGlzLnVwZGF0ZURpdmlzaW9uc0NvbG91cnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0ZpcnN0RGl2LFxuICAgICAgc2Nyb2xsVG9BbmNob3IsXG4gICAgICBleGl0RnVsbFNjcmVlbixcbiAgICAgIGVudGVyRnVsbFNjcmVlbixcbiAgICAgIHNob3dEaXZpc2lvbnNEaXYsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNab29tLFxuICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXMsXG4gICAgICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzXG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuaGlkZSgpO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZGl2aXNpb25zXCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihEaXZpc2lvbnNEaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKERpdmlzaW9uc0Rpdi5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGl2aXNpb25zRGl2KWBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIFxuICAubmF0aXZlLWdlc3R1cmVzIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgfVxuICBcbiAgLmludmVydGVkLWNvbG91cnMge1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB9XG4gICAgXG5gO1xuXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XG59XG4iXSwibmFtZXMiOlsiaXNGdWxsU2NyZWVuIiwiZnVsbFNjcmVlblV0aWxpdGllcyIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJkaXZET01FbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkRJVlNfU0VMRUNUT1IiLCJmb3JFYWNoIiwiZGl2RE9NRWxlbWVudCIsInJlbW92ZSIsIkRpdmlzaW9uc0RpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInVwZGF0ZUZ1bGxTY3JlZW4iLCJ1cGRhdGVEaXZpc2lvbnNab29tIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJmdWxsU2NyZWVuIiwic2hvd2luZ0RpdiIsImZpbmRTaG93aW5nRGl2IiwiaW1hZ2UiLCJmaW5kSW1hZ2VCeVRvcEFuZExlZnQiLCJwcmV2aWV3SW1hZ2UiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIiwib3Blbk1lbnUiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsInpvb20iLCJnZXRab29tIiwic3RhcnRab29tIiwic2V0U3RhcnRab29tIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRab29tIiwiZGl2aXNpb25zWm9vbSIsIk1hdGgiLCJzcXJ0Iiwiem9vbURpdmlzaW9ucyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic3BwZWQiLCJzaG93TGVmdERpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsImNsb3NlTWVudSIsInNob3dGaXJzdERpdiIsInNob3dMYXN0RGl2Iiwic2Nyb2xsVG9Ub3AiLCJzdG9wU2Nyb2xsaW5nIiwiaW50ZXJ2YWwiLCJnZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNjcm9sbFRvQW5jaG9yIiwiYW5jaG9ySWQiLCJFTVBUWV9TVFJJTkciLCJkaXYiLCJmaW5kRGl2QnlBbmNob3JJZCIsIm5leHREaXYiLCJmaW5kRGl2IiwicHJldmlvdXNEaXYiLCJkaXZzIiwiZ2V0RGl2cyIsIm5leHRJbmRleCIsImluZGV4T2YiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHREaXYiLCJjdXN0b21FdmVudFR5cGUiLCJQUkVWSUVXX0lNQUdFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwiU0NST0xMX0RFTEFZIiwiREVDRUxFUkFUSU9OIiwiZW50ZXJGdWxsU2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJ1cGRhdGVEaXZpc2lvbnNDb2xvdXJzIiwiY29sb3Vyc0ludmVydGVkIiwiYXJlQ29sb3Vyc0ludmVydGVkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwiZGlzYWJsZUN1c3RvbUdlc3R1cmVzIiwiZW5hYmxlQ3VzdG9tR2VzdHVyZXMiLCJuYXRpdmVHZXN0dXJlZEVuYWJsZWQiLCJhcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwic2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJoYXNDbGFzcyIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJpbmRleCIsImRvbmUiLCJyZXNldEZyYWdtZW50IiwiaGlkZSIsInNob3ciLCJkZWZlciIsImJhY2tncm91bmRDb2xvdXIiLCJnZXRCYWNrZ3JvdW5kQ29sb3VyIiwic2V0QmFja2dyb3VuZENvbG91ciIsImZpbmQiLCJkaXZTaG93aW5nIiwiaXNTaG93aW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY3NzIiwic2hvd2luZyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aW5kb3ciLCJvbktleURvd24iLCJvbkN1c3RvbVNpbmdsZVRhcCIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsImVuYWJsZUZ1bGxTY3JlZW4iLCJlbmFibGVUb3VjaCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwib2ZmQ3VzdG9tU2luZ2xlVGFwIiwib2ZmS2V5RG93biIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiRGl2IiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJzaG93RGl2aXNpb25zRGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJ3aXRoU3R5bGUiLCJmdW5jIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOG5CQTs7O2VBQUE7OztvRUE1bkJzQjt5QkFFRzswQkFDSztvQkFDRTswQkFDbUM7MERBRW5EO3lCQUVjO3VCQUNVO2dDQUNRO3FCQUUyQzt5QkFNakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElB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