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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen;
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
                var showLastDiv = this.showLastDiv.bind(this), showLeftDiv = this.showLeftDiv.bind(this), showRightDiv = this.showRightDiv.bind(this), showFirstDiv = this.showFirstDiv.bind(this), scrollToAnchor = this.scrollToAnchor.bind(this), exitFullScreen = this.exitFullScreen.bind(this), enterFullScreen = this.enterFullScreen.bind(this), showDivisionsDiv = this.show.bind(this), updateDivisionsZoom = this.updateDivisionsZoom.bind(this), updateNativeGestures = this.updateNativeGestures.bind(this), updateDivisionsColours = this.updateDivisionsColours.bind(this);
                return {
                    showLastDiv: showLastDiv,
                    showLeftDiv: showLeftDiv,
                    showRightDiv: showRightDiv,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kaXZpc2lvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcmVzZXRGcmFnbWVudCB9IGZyb20gXCJmcmFnbWVudGVkXCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucywgZnVsbFNjcmVlblV0aWxpdGllcyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgRElWU19TRUxFQ1RPUiB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBQUkVWSUVXX0lNQUdFX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHNjcm9sbFRvQW5jaG9yLCBmaW5kRGl2QnlBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZ2V0RGl2aXNpb25zWm9vbSBhcyBnZXRab29tLCBhcmVDb2xvdXJzSW52ZXJ0ZWQsIGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyxcbiAgICAgICAgIFNDUk9MTF9ERUxBWSxcbiAgICAgICAgIFVQX0RJUkVDVElPTixcbiAgICAgICAgIERFQ0VMRVJBVElPTixcbiAgICAgICAgIERPV05fRElSRUNUSU9OLFxuICAgICAgICAgT1BFTl9NRU5VX1RBUF9BUkVBX0hFSUdIVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBpc0Z1bGxTY3JlZW4gfSA9IGZ1bGxTY3JlZW5VdGlsaXRpZXM7XG5cbmNvbnN0IGRpdkRPTUVsZW1lbnRzID0gWyAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKERJVlNfU0VMRUNUT1IpIF07IC8vL1xuXG5kaXZET01FbGVtZW50cy5mb3JFYWNoKChkaXZET01FbGVtZW50KSA9PiB7XG4gIGRpdkRPTUVsZW1lbnQucmVtb3ZlKCk7XG59KTtcblxuY2xhc3MgRGl2aXNpb25zRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci51cGRhdGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLnVwZGF0ZURpdmlzaW9uc1pvb20oKTtcbiAgfVxuXG4gIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSBpc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmICghZnVsbFNjcmVlbikge1xuICAgICAgY29uc3Qgc2hvd2luZ0RpdiA9IHRoaXMuZmluZFNob3dpbmdEaXYoKSxcbiAgICAgICAgICAgIGltYWdlID0gc2hvd2luZ0Rpdi5maW5kSW1hZ2VCeVRvcEFuZExlZnQodG9wLCBsZWZ0KTtcblxuICAgICAgaWYgKGltYWdlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlKGV2ZW50LCBlbGVtZW50LCBpbWFnZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYm90dG9tID0gaGVpZ2h0IC0gdG9wO1xuXG4gICAgaWYgKGJvdHRvbSA8IE9QRU5fTUVOVV9UQVBfQVJFQV9IRUlHSFQpIHtcbiAgICAgIGNvbnRyb2xsZXIub3Blbk1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA9IGFyZU5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQoKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgY29udHJvbGxlci5zdXBwcmVzc05hdGl2ZUdlc3R1cmVzKCkgOlxuICAgICAgICBjb250cm9sbGVyLnJlc3RvcmVOYXRpdmVHZXN0dXJlcygpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuXG4gICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbiAgICAgICAgICBkaXZpc2lvbnNab29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTsgIC8vL1xuXG4gICAgY29udHJvbGxlci56b29tRGl2aXNpb25zKGRpdmlzaW9uc1pvb20pO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbiAgICB0aGlzLnNob3dMZWZ0RGl2KCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXYoKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcblxuICAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgIGludGVydmFsID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgICBpZiAoYW5jaG9ySWQgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgdGhpcy5zaG93Rmlyc3REaXYoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkaXY7XG5cbiAgICBkaXYgPSBmaW5kRGl2QnlBbmNob3JJZChhbmNob3JJZCk7XG5cbiAgICBpZiAoZGl2ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dERpdiA9IGRpdjsgIC8vL1xuXG4gICAgZGl2ID0gdGhpcy5maW5kRGl2KCk7XG5cbiAgICBjb25zdCBwcmV2aW91c0RpdiA9IGRpdjsgIC8vL1xuXG4gICAgY29uc3QgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnMuaW5kZXhPZihuZXh0RGl2KSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBkaXZzLmluZGV4T2YocHJldmlvdXNEaXYpOyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCwgKCkgPT4ge1xuICAgICAgc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJldmlld0ltYWdlKGV2ZW50LCBlbGVtZW50LCBpbWFnZSkge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFBSRVZJRVdfSU1BR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBpbWFnZSk7XG4gIH1cblxuICBzdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuXG4gICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNwZWVkID0gc3BlZWQgLSBkaXJlY3Rpb24gKiBERUNFTEVSQVRJT047XG5cbiAgICAgIGlmICgoc3BlZWQgKiBkaXJlY3Rpb24pIDwgMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcblxuICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gICAgfSwgU0NST0xMX0RFTEFZKTtcblxuICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9XG5cbiAgZW50ZXJGdWxsU2NyZWVuKCkge1xuICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIHVwZGF0ZURpdmlzaW9uc1pvb20oKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCk7XG5cbiAgICBpZiAoZGl2ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpO1xuXG4gICAgICBkaXYuem9vbSh6b29tKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCkge1xuICAgIGNvbnN0IGNvbG91cnNJbnZlcnRlZCA9IGFyZUNvbG91cnNJbnZlcnRlZCgpO1xuXG4gICAgY29sb3Vyc0ludmVydGVkID9cbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcImludmVydGVkLWNvbG91cnNcIik7XG4gIH1cblxuICB1cGRhdGVOYXRpdmVHZXN0dXJlcygpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICB0aGlzLmFkZENsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpIDpcbiAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhcIm5hdGl2ZS1nZXN0dXJlc1wiKTtcblxuICAgIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgP1xuICAgICAgdGhpcy5kaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlQ3VzdG9tR2VzdHVyZXMoKTtcbiAgfVxuXG4gIGVuYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuICAgIGxldCBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0aGlzLmFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpO1xuXG4gICAgaWYgKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXROYXRpdmVHZXN0dXJlc0VuYWJsZWQobmF0aXZlR2VzdHVyZWRFbmFibGVkKTtcbiAgfVxuXG4gIGRpc2FibGVDdXN0b21HZXN0dXJlcygpIHtcbiAgICBsZXQgbmF0aXZlR2VzdHVyZWRFbmFibGVkID0gdGhpcy5hcmVOYXRpdmVHZXN0dXJlc0VuYWJsZWQoKTtcblxuICAgIGlmICghbmF0aXZlR2VzdHVyZWRFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG5cbiAgICBuYXRpdmVHZXN0dXJlZEVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0TmF0aXZlR2VzdHVyZXNFbmFibGVkKG5hdGl2ZUdlc3R1cmVkRW5hYmxlZCk7XG4gIH1cblxuICBhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkKCkge1xuICAgIGNvbnN0IG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQgPSB0aGlzLmhhc0NsYXNzKFwibmF0aXZlLWdlc3R1cmVzXCIpO1xuXG4gICAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQ7XG4gIH1cblxuICBzaG93UmlnaHREaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IGRpdnMuaW5kZXhPZihkaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGVmdERpdigpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmZpbmREaXYoKSxcbiAgICAgICAgICBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0RGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZmluZERpdigpLFxuICAgICAgICAgIGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSAoZGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZzLmluZGV4T2YoZGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93Rmlyc3REaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5maW5kRGl2KCksXG4gICAgICAgICAgZGl2cyA9IHRoaXMuZ2V0RGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gKGRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2cy5pbmRleE9mKGRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dERpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgsIGRvbmUgPSAoKSA9PiB7fSkge1xuICAgIHJlc2V0RnJhZ21lbnQoKTtcblxuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXYgPSBkaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgICBwcmV2aW91c0Rpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBuZXh0RGl2ID0gZGl2c1tuZXh0SW5kZXhdO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICBuZXh0RGl2Lnpvb20oem9vbSk7XG5cbiAgICBuZXh0RGl2LnNob3coKTtcblxuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvdXIgPSBuZXh0RGl2LmdldEJhY2tncm91bmRDb2xvdXIoKTtcblxuICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kQ29sb3VyKGJhY2tncm91bmRDb2xvdXIpO1xuXG4gICAgICBkb25lKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0RpdigpIHtcbiAgICBjb25zdCBkaXZzID0gdGhpcy5nZXREaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdiA9IGRpdnMuZmluZCgoZGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXZTaG93aW5nID0gZGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoZGl2U2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBzaG93aW5nRGl2O1xuICB9XG5cbiAgc2V0QmFja2dyb3VuZENvbG91cihiYWNrZ3JvdW5kQ29sb3VyKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG91ciwgLy8vXG4gICAgICAgICAgY3NzID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBmaW5kRGl2KCkge1xuICAgIGNvbnN0IGRpdnMgPSB0aGlzLmdldERpdnMoKSxcbiAgICAgICAgICBkaXYgPSBkaXZzLmZpbmQoKGRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd2luZyA9IGRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBnZXREaXZzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBkaXZzID0gY2hpbGRFbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gZGl2cztcbiAgfVxuXG4gIGdldEludGVydmFsKCkge1xuICAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNldEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpbnRlcnZhbFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIGFyZU5hdGl2ZUdlc3R1cmVzRW5hYmxlZCgpIHtcbiAgICBjb25zdCB7IG5hdGl2ZUdlc3R1cmVzRW5hYmxlZCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZDtcbiAgfVxuXG4gIHNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZChuYXRpdmVHZXN0dXJlc0VuYWJsZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGludGVydmFsID0gbnVsbCxcbiAgICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgICBuYXRpdmVHZXN0dXJlc0VuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW50ZXJ2YWwsXG4gICAgICBzdGFydFpvb20sXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIG5hdGl2ZUdlc3R1cmVzRW5hYmxlZFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBkaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGl2RE9NRWxlbWVudHMsIERpdiksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFtcbiAgICAgICAgICAgIC4uLmRpdnNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dMYXN0RGl2ID0gdGhpcy5zaG93TGFzdERpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dMZWZ0RGl2ID0gdGhpcy5zaG93TGVmdERpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dSaWdodERpdiA9IHRoaXMuc2hvd1JpZ2h0RGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0ZpcnN0RGl2ID0gdGhpcy5zaG93Rmlyc3REaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzY3JvbGxUb0FuY2hvciA9IHRoaXMuc2Nyb2xsVG9BbmNob3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBleGl0RnVsbFNjcmVlbiA9IHRoaXMuZXhpdEZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAgICAgICBlbnRlckZ1bGxTY3JlZW4gPSB0aGlzLmVudGVyRnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dEaXZpc2lvbnNEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgdXBkYXRlRGl2aXNpb25zWm9vbSA9IHRoaXMudXBkYXRlRGl2aXNpb25zWm9vbS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzID0gdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZURpdmlzaW9uc0NvbG91cnMgPSB0aGlzLnVwZGF0ZURpdmlzaW9uc0NvbG91cnMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0xhc3REaXYsXG4gICAgICBzaG93TGVmdERpdixcbiAgICAgIHNob3dSaWdodERpdixcbiAgICAgIHNob3dGaXJzdERpdixcbiAgICAgIHNjcm9sbFRvQW5jaG9yLFxuICAgICAgZXhpdEZ1bGxTY3JlZW4sXG4gICAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgICBzaG93RGl2aXNpb25zRGl2LFxuICAgICAgdXBkYXRlRGl2aXNpb25zWm9vbSxcbiAgICAgIHVwZGF0ZU5hdGl2ZUdlc3R1cmVzLFxuICAgICAgdXBkYXRlRGl2aXNpb25zQ29sb3Vyc1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRpdmlzaW9uc1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRGl2aXNpb25zRGl2LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEaXZpc2lvbnNEaXYucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERpdmlzaW9uc0RpdilgXG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgICBcbiAgLm5hdGl2ZS1nZXN0dXJlcyB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gIH1cbiAgXG4gIC5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuICAgIFxuYDtcblxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xufVxuIl0sIm5hbWVzIjpbImlzRnVsbFNjcmVlbiIsImZ1bGxTY3JlZW5VdGlsaXRpZXMiLCJkaXZET01FbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkRJVlNfU0VMRUNUT1IiLCJmb3JFYWNoIiwiZGl2RE9NRWxlbWVudCIsInJlbW92ZSIsIkRpdmlzaW9uc0RpdiIsImZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInVwZGF0ZUZ1bGxTY3JlZW4iLCJ1cGRhdGVEaXZpc2lvbnNab29tIiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsInRvcCIsImxlZnQiLCJmdWxsU2NyZWVuIiwic2hvd2luZ0RpdiIsImZpbmRTaG93aW5nRGl2IiwiaW1hZ2UiLCJmaW5kSW1hZ2VCeVRvcEFuZExlZnQiLCJwcmV2aWV3SW1hZ2UiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJib3R0b20iLCJPUEVOX01FTlVfVEFQX0FSRUFfSEVJR0hUIiwib3Blbk1lbnUiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCIsInN1cHByZXNzTmF0aXZlR2VzdHVyZXMiLCJyZXN0b3JlTmF0aXZlR2VzdHVyZXMiLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsInpvb20iLCJnZXRab29tIiwic3RhcnRab29tIiwic2V0U3RhcnRab29tIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRab29tIiwiZGl2aXNpb25zWm9vbSIsIk1hdGgiLCJzcXJ0Iiwiem9vbURpdmlzaW9ucyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic3BwZWQiLCJzaG93TGVmdERpdiIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHREaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsInNjcm9sbFRvVG9wIiwic3RvcFNjcm9sbGluZyIsImludGVydmFsIiwiZ2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzY3JvbGxUb0FuY2hvciIsImFuY2hvcklkIiwiRU1QVFlfU1RSSU5HIiwic2hvd0ZpcnN0RGl2IiwiZGl2IiwiZmluZERpdkJ5QW5jaG9ySWQiLCJuZXh0RGl2IiwiZmluZERpdiIsInByZXZpb3VzRGl2IiwiZGl2cyIsImdldERpdnMiLCJuZXh0SW5kZXgiLCJpbmRleE9mIiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0RGl2IiwiY3VzdG9tRXZlbnRUeXBlIiwiUFJFVklFV19JTUFHRV9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsIlNDUk9MTF9ERUxBWSIsIkRFQ0VMRVJBVElPTiIsImVudGVyRnVsbFNjcmVlbiIsInJlcXVlc3RGdWxsU2NyZWVuIiwidXBkYXRlRGl2aXNpb25zQ29sb3VycyIsImNvbG91cnNJbnZlcnRlZCIsImFyZUNvbG91cnNJbnZlcnRlZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlcyIsImRpc2FibGVDdXN0b21HZXN0dXJlcyIsImVuYWJsZUN1c3RvbUdlc3R1cmVzIiwibmF0aXZlR2VzdHVyZWRFbmFibGVkIiwiYXJlTmF0aXZlR2VzdHVyZXNFbmFibGVkIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbURvdWJsZVRhcCIsInNldE5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwiaGFzQ2xhc3MiLCJkaXZzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXgiLCJzaG93TGFzdERpdiIsImRvbmUiLCJyZXNldEZyYWdtZW50IiwiaGlkZSIsInNob3ciLCJkZWZlciIsImJhY2tncm91bmRDb2xvdXIiLCJnZXRCYWNrZ3JvdW5kQ29sb3VyIiwic2V0QmFja2dyb3VuZENvbG91ciIsImZpbmQiLCJkaXZTaG93aW5nIiwiaXNTaG93aW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY3NzIiwic2hvd2luZyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsIm5hdGl2ZUdlc3R1cmVzRW5hYmxlZCIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJvbkN1c3RvbVNpbmdsZVRhcCIsIm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSIsImVuYWJsZUZ1bGxTY3JlZW4iLCJlbmFibGVUb3VjaCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJvZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlIiwib2ZmQ3VzdG9tU2luZ2xlVGFwIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXYiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNob3dEaXZpc2lvbnNEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0a0JBOzs7ZUFBQTs7O29FQTFrQnNCO29CQUVFOzBCQUNNOzBCQUNxQzswREFFbkQ7eUJBRWM7dUJBQ1U7Z0NBQ1E7cUJBRTJDO3lCQU1qRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQSxlQUFpQkMsK0JBQW1CLENBQXBDRDtBQUVSLElBQU1FLGlCQUFtQixxQkFBR0MsU0FBU0MsZ0JBQWdCLENBQUNDLHdCQUFhLElBQUssR0FBRztBQUUzRUgsZUFBZUksT0FBTyxDQUFDLFNBQUNDO0lBQ3RCQSxjQUFjQyxNQUFNO0FBQ3RCO0FBRUEsSUFBQSxBQUFNQyw2QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsaUNBQWdDLFNBQUNDLE9B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