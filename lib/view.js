"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" // this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
 //
 // this.onCustomSingleTap(this.singleTapCustomHandler);
 //
 // this.enableFullScreen();
 //
 // this.disableFullScreen();
 //
 // this.offCustomSingleTap(this.singleTapCustomHandler);
 //
 // this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
 //
 // fullScreenChangeCustomHandler = (event, element) => {
 //   this.updateZoom();
 // }
 //
 // singleTapCustomHandler = (event, element, top, left) => {
 //   ///
 // }
 //
 // doubleTapCustomHandler = (event, element, top, left) => {
 //   const fullScreen = this.isFullScreen();
 //
 //   if (fullScreen) {
 //     controller.exitFullScreen();
 //
 //     return;
 //   }
 // }
 //
 // pinchStartCustomHandler = (event, element) => {
 //   const zoom = getZoom(),
 //         startZoom = zoom; ///
 //
 //   this.setStartZoom(startZoom);
 // }
 //
 // pinchMoveCustomHandler = (event, element, ratio) => {
 //   const startZoom = this.getStartZoom(),
 //         zoom = startZoom * Math.sqrt(ratio);  ///
 //
 //   controller.zoom(zoom);
 // }
 //
 // enterFullScreen() {
 //   this.requestFullScreen();
 // }
 //
 // enableGestures() {
 //   this.onCustomSwipeUp(this.swipeUpCustomHandler);
 //   this.onCustomSwipeDown(this.swipeDownCustomHandler);
 //   this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
 //   this.onCustomSwipeRight(this.swipeRightCustomHandler);
 //   this.onCustomPinchMove(this.pinchMoveCustomHandler);
 //   this.onCustomPinchStart(this.pinchStartCustomHandler);
 //   this.onCustomDoubleTap(this.doubleTapCustomHandler);
 // }
 //
 // disableGestures() {
 //   this.offCustomDragUp(this.dragUpCustomHandler);
 //   this.offCustomDrag(this.dragCustomHandler);
 //   this.offCustomDragStart(this.dragStartCustomHandler);
 //   this.offCustomSwipeUp(this.swipeUpCustomHandler);
 //   this.offCustomSwipeDown(this.swipeDownCustomHandler);
 //   this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
 //   this.offCustomSwipeRight(this.swipeRightCustomHandler);
 //   this.offCustomPinchMove(this.pinchMoveCustomHandler);
 //   this.offCustomPinchStart(this.pinchStartCustomHandler);
 //   this.offCustomDoubleTap(this.doubleTapCustomHandler);
 // }
 //
 // getStartZoom() {
 //   const { startZoom } = this.getState();
 //
 //   return startZoom;
 // }
 //
 // setStartZoom(startZoom) {
 //   this.updateState({
 //     startZoom
 //   });
 // }
 //
, {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _necessary = require("necessary");
var _easy = require("easy");
var _easymobile = require("easy-mobile");
var _occamstyles = require("occam-styles");
var _document = /*#__PURE__*/ _interop_require_default(require("./view/div/document"));
var _state = require("./state");
var _constants = require("./constants");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
        "\n\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: scroll;\n  position: absolute;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  touch-action: none;\n\n  background-color: ",
        ";\n  \n  ",
        "\n  \n  @media (pointer: fine) {\n    ::-webkit-scrollbar-thumb {\n      background-color: ",
        ";\n    }\n    \n    ::-webkit-scrollbar-track {\n      background-color: ",
        ";\n    }\n  \n    ::-webkit-scrollbar-corner {\n      background-color: ",
        ";\n    }\n  }\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var backgroundColour = _occamstyles.previewPaneScheme.backgroundColour, scrollbarThumbBackgroundColour = _occamstyles.previewPaneScheme.scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour = _occamstyles.previewPaneScheme.scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour = _occamstyles.previewPaneScheme.scrollbarCornerBackgroundColour, ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "swipeRightCustomHandler", function(event, element, top, left, speed) {
            var scrollLeft = _this.getScrollLeft();
            if (scrollLeft <= 1) {
                _this.showLeftDivisionDiv();
                _this.resetScrolling();
                return;
            }
            var scrollSpeed = speed, direction = _constants.RIGHT_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "swipeLeftCustomHandler", function(event, element, top, left, speed) {
            var scrollLeft = _this.getScrollLeft(), maximumScrollLeft = _this.getMaximumScrollLeft();
            if (scrollLeft >= maximumScrollLeft - 1) {
                _this.showRightDivisionDiv();
                _this.resetScrolling();
                return;
            }
            var scrollSpeed = speed, direction = _constants.LEFT_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "swipeDownCustomHandler", function(event, element, top, left, speed) {
            var scrollSpeed = speed, direction = _constants.DOWN_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var scrollSpeed = speed, direction = _constants.UP_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "dragStartCustomHandler", function(event, element, top, left) {
            var scrollTop = _this.getScrollTop(), scrollLeft = _this.getScrollLeft(), startScrollTop = scrollTop, startScrollLeft = scrollLeft; ///
            _this.setStartScrollTop(startScrollTop);
            _this.setStartScrollLeft(startScrollLeft);
        }), _define_property(_this, "dragUpCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
            var startScrollLeft = null;
            _this.setStartScrollLeft(startScrollLeft);
        }), _define_property(_this, "dragLeftCustomHandler", function(event, element, top, left) {
            var startScrollLeft = _this.getStartScrollLeft();
            if (startScrollLeft === null) {
                return;
            }
            var scrollLeft = startScrollLeft - left;
            _this.setScrollLeft(scrollLeft);
            var startScrollTop = null;
            _this.setStartScrollTop(startScrollTop);
        }), _define_property(_this, "dragDownCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
            var startScrollLeft = null;
            _this.setStartScrollLeft(startScrollLeft);
        }), _define_property(_this, "dragRightCustomHandler", function(event, element, top, left) {
            var startScrollLeft = _this.getStartScrollLeft();
            if (startScrollLeft === null) {
                return;
            }
            var scrollLeft = startScrollLeft - left;
            _this.setScrollLeft(scrollLeft);
            var startScrollTop = null;
            _this.setStartScrollTop(startScrollTop);
        }), _define_property(_this, "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            switch(keyCode){
                case ESCAPE_KEY_CODE:
                    {
                        var fullScreen = _this.isFullScreen();
                        if (fullScreen) {
                            controller.exitFullScreen();
                        }
                        break;
                    }
                case ARROW_UP_KEY_CODE:
                    {
                        _this.showFirstDivisionDiv();
                        _this.resetScrolling();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastDivisionDiv();
                        _this.resetScrolling();
                        break;
                    }
                case ENTER_KEY_CODE:
                case ARROW_RIGHT_KEY_CODE:
                    {
                        _this.showRightDivisionDiv();
                        _this.resetScrolling();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftDivisionDiv();
                        _this.resetScrolling();
                        break;
                    }
            }
        }), _define_property(_this, "resizeHandler", function(event, element) {
            var noNudge = true;
            _this.zoom(noNudge);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "zoom",
            value: function zoom() {
                var noNudge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var zoom = (0, _state.getZoom)(), innerWidth = this.getInnerWidth(), innerHeight = this.getInnerHeight(), documentScale = zoom, previewPaneInnerWidth = innerWidth, previewPaneInnerHeight = innerHeight; ///
                this.scaleDocumentDiv(documentScale, previewPaneInnerWidth, previewPaneInnerHeight);
                if (noNudge) {
                    return;
                }
                this.nudge();
            }
        },
        {
            key: "nudge",
            value: function nudge() {
                var _this = this;
                var scrollTop = this.getScrollTop();
                var scrollLeft = this.getScrollLeft(), innerHeight = this.getInnerHeight(), scrollHeight = this.getScrollHeight(), maximumScrollTop = scrollHeight - innerHeight, delta = scrollTop < maximumScrollTop ? +1 : -1;
                scrollTop += delta;
                this.scrollTo(scrollTop, scrollLeft);
                requestAnimationFrame(function() {
                    scrollTop -= delta;
                    _this.scrollTo(scrollTop, scrollLeft);
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
            key: "scrollToLeft",
            value: function scrollToLeft() {
                var scrollLeft = 0;
                this.setScrollLeft(scrollLeft);
            }
        },
        {
            key: "stopScrolling",
            value: function stopScrolling() {
                var animationFrame = this.getAnimationFrame();
                if (animationFrame !== null) {
                    cancelAnimationFrame(animationFrame);
                    animationFrame = null;
                    this.setAnimationFrame(animationFrame);
                }
            }
        },
        {
            key: "startScrolling",
            value: function startScrolling(scrollSpeed, direction) {
                var _this = this;
                this.stopScrolling();
                var now = performance.now(), then;
                then = now; ///
                var step = function(now) {
                    var timeDelta = now - then, scrollSpeedDelta = _constants.SCROLL_SPEED_DELTA * timeDelta;
                    scrollSpeed = scrollSpeed - scrollSpeedDelta;
                    if (scrollSpeed < 0) {
                        _this.stopScrolling();
                        return;
                    }
                    var scrollDelta = scrollSpeed * _constants.SCROLL_TOP_DELTA * timeDelta;
                    var scrollTop = _this.getScrollTop(), scrollLeft = _this.getScrollLeft();
                    switch(direction){
                        case _constants.UP_DIRECTION:
                            {
                                scrollTop = scrollTop + scrollDelta;
                                break;
                            }
                        case _constants.LEFT_DIRECTION:
                            {
                                scrollLeft = scrollLeft + scrollDelta;
                                break;
                            }
                        case _constants.DOWN_DIRECTION:
                            {
                                scrollTop = scrollTop - scrollDelta;
                                break;
                            }
                        case _constants.RIGHT_DIRECTION:
                            {
                                scrollLeft = scrollLeft - scrollDelta;
                                break;
                            }
                    }
                    then = now; ///
                    _this.setScrollTop(scrollTop);
                    _this.setScrollLeft(scrollLeft);
                    var animationFrame = requestAnimationFrame(step);
                    _this.setAnimationFrame(animationFrame);
                };
                var animationFrame = requestAnimationFrame(step);
                this.setAnimationFrame(animationFrame);
            }
        },
        {
            key: "resetScrolling",
            value: function resetScrolling() {
                this.scrollToTop();
                this.scrollToLeft();
                this.stopScrolling();
            }
        },
        {
            key: "enableGestures",
            value: function enableGestures() {
                this.onCustomDragUp(this.dragUpCustomHandler);
                this.onCustomDragLeft(this.dragLeftCustomHandler);
                this.onCustomDragDown(this.dragDownCustomHandler);
                this.onCustomDragRight(this.dragRightCustomHandler);
                this.onCustomDragStart(this.dragStartCustomHandler);
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
            }
        },
        {
            key: "getMaximumScrollTop",
            value: function getMaximumScrollTop() {
                var innerHeight = this.getInnerHeight(), scrollHeight = this.getScrollHeight(), maximumScrollTop = Math.max(0, scrollHeight - innerHeight);
                return maximumScrollTop;
            }
        },
        {
            key: "getMaximumScrollLeft",
            value: function getMaximumScrollLeft() {
                var innerWidth = this.getInnerWidth(), scrollWidth = this.getScrollWidth(), maximumScrollLeft = Math.max(0, scrollWidth - innerWidth);
                return maximumScrollLeft;
            }
        },
        {
            key: "disableGestures",
            value: function disableGestures() {
                this.offCustomDragUp(this.dragUpCustomHandler);
                this.offCustomDragLeft(this.dragLeftCustomHandler);
                this.offCustomDragDown(this.dragDownCustomHandler);
                this.offCustomDragRight(this.dragRightCustomHandler);
                this.offCustomDragStart(this.dragStartCustomHandler);
                this.offCustomSwipeUp(this.swipeUpCustomHandler);
                this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.offCustomSwipeDown(this.swipeDownCustomHandler);
                this.offCustomSwipeRight(this.swipeRightCustomHandler);
            }
        },
        {
            key: "getAnimationFrame",
            value: function getAnimationFrame() {
                var animationFrame = this.getState().animationFrame;
                return animationFrame;
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
            key: "getStartScrollLeft",
            value: function getStartScrollLeft() {
                var startScrollLeft = this.getState().startScrollLeft;
                return startScrollLeft;
            }
        },
        {
            key: "setAnimationFrame",
            value: function setAnimationFrame(animationFrame) {
                this.updateState({
                    animationFrame: animationFrame
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
            key: "setStartScrollLeft",
            value: function setStartScrollLeft(startScrollLeft) {
                this.updateState({
                    startScrollLeft: startScrollLeft
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var animationFrame = null, startScrollTop = null, startScrollLeft = null;
                this.setState({
                    animationFrame: animationFrame,
                    startScrollTop: startScrollTop,
                    startScrollLeft: startScrollLeft
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.enableTouch();
                this.enableGestures();
                this.onResize(this.resizeHandler, this);
                _easy.window.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.disableTouch();
                this.disableGestures();
                this.offResize(this.resizeHandler, this);
                _easy.window.offKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var resizeHandler = this.resizeHandler.bind(this);
                return /*#__PURE__*/ React.createElement(_document.default, {
                    resizeHandler: resizeHandler
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", []);
_define_property(View, "defaultProperties", {
    className: "view"
});
Object.assign(View.prototype, _easymobile.touchMixins);
Object.assign(View.prototype, _easymobile.fullScreenMixins);
var _default = (0, _easywithstyle.default)(View)(_templateObject(), backgroundColour, _occamstyles.scrollbarMixin, scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0Wm9vbSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBVUF9ESVJFQ1RJT04sIExFRlRfRElSRUNUSU9OLCBET1dOX0RJUkVDVElPTiwgUklHSFRfRElSRUNUSU9OLCBTQ1JPTExfVE9QX0RFTFRBLCBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWUsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzY3JvbGxMZWZ0IDw9IDEpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gUklHSFRfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbExlZnQgPSB0aGlzLmdldE1heGltdW1TY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEpIHtcbiAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IExFRlRfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wLCAvLy9cbiAgICAgICAgICBzdGFydFNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzaXplSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5vTnVkZ2UgPSB0cnVlO1xuXG4gICAgdGhpcy56b29tKG5vTnVkZ2UpO1xuICB9XG5cbiAgem9vbShub051ZGdlID0gZmFsc2UpIHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudFNjYWxlID0gem9vbSwgLy8vXG4gICAgICAgICAgcHJldmlld1BhbmVJbm5lcldpZHRoID0gaW5uZXJXaWR0aCwgLy8vXG4gICAgICAgICAgcHJldmlld1BhbmVJbm5lckhlaWdodCA9IGlubmVySGVpZ2h0OyAvLy9cblxuICAgIHRoaXMuc2NhbGVEb2N1bWVudERpdihkb2N1bWVudFNjYWxlLCBwcmV2aWV3UGFuZUlubmVyV2lkdGgsIHByZXZpZXdQYW5lSW5uZXJIZWlnaHQpO1xuXG4gICAgaWYgKG5vTnVkZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm51ZGdlKCk7XG4gIH1cblxuICBudWRnZSgpIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQgLSBpbm5lckhlaWdodCxcbiAgICAgICAgICBkZWx0YSA9IChzY3JvbGxUb3AgPCBtYXhpbXVtU2Nyb2xsVG9wKSA/XG4gICAgICAgICAgICAgICAgICAgICsxIDpcbiAgICAgICAgICAgICAgICAgICAgICAtMTtcblxuICAgIHNjcm9sbFRvcCArPSBkZWx0YTtcblxuICAgIHRoaXMuc2Nyb2xsVG8oc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzY3JvbGxUb3AgLT0gZGVsdGE7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG8oc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc2Nyb2xsVG9MZWZ0KCkge1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWUgPSB0aGlzLmdldEFuaW1hdGlvbkZyYW1lKCk7XG5cbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcblxuICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCksXG4gICAgICAgIHRoZW47XG5cbiAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICBjb25zdCBzdGVwID0gKG5vdykgPT4ge1xuICAgICAgY29uc3QgdGltZURlbHRhID0gbm93IC0gdGhlbixcbiAgICAgICAgICAgIHNjcm9sbFNwZWVkRGVsdGEgPSBTQ1JPTExfU1BFRURfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIHNjcm9sbFNwZWVkID0gc2Nyb2xsU3BlZWQgLSBzY3JvbGxTcGVlZERlbHRhO1xuXG4gICAgICBpZiAoc2Nyb2xsU3BlZWQgPCAwKSB7XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBzY3JvbGxTcGVlZCAqIFNDUk9MTF9UT1BfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBVUF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBMRUZUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0ICsgc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRE9XTl9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSSUdIVF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgcmVzZXRTY3JvbGxpbmcoKSB7XG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgIHRoaXMuc2Nyb2xsVG9MZWZ0KCk7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gIH1cblxuICBlbmFibGVHZXN0dXJlcygpIHtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdMZWZ0KHRoaXMuZHJhZ0xlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxUb3A7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsV2lkdGggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxXaWR0aCAtIGlubmVyV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxMZWZ0O1xuICB9XG5cbiAgZGlzYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgY29uc3QgeyBhbmltYXRpb25GcmFtZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbkZyYW1lO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxMZWZ0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxMZWZ0O1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWUsXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5lbmFibGVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5vZmZSZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8RG9jdW1lbnREaXYgcmVzaXplSGFuZGxlcj17cmVzaXplSGFuZGxlcn0gLz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG4gIFxuICAke3Njcm9sbGJhck1peGlufVxuICBcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICAgIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIH1cbiAgICBcbmA7XG5cbi8vIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIHRoaXMub25DdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcbi8vXG4vLyB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbi8vICAgdGhpcy51cGRhdGVab29tKCk7XG4vLyB9XG4vL1xuLy8gc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4vLyAgIC8vL1xuLy8gfVxuLy9cbi8vIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcbi8vXG4vLyAgIGlmIChmdWxsU2NyZWVuKSB7XG4vLyAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuLy9cbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuLy8gICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuLy8gICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cbi8vXG4vLyAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4vLyB9XG4vL1xuLy8gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbi8vICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbi8vICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7ICAvLy9cbi8vXG4vLyAgIGNvbnRyb2xsZXIuem9vbSh6b29tKTtcbi8vIH1cbi8vXG4vLyBlbnRlckZ1bGxTY3JlZW4oKSB7XG4vLyAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbi8vIH1cbi8vXG4vLyBlbmFibGVHZXN0dXJlcygpIHtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy8gfVxuLy9cbi8vIGRpc2FibGVHZXN0dXJlcygpIHtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnKHRoaXMuZHJhZ0N1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy8gfVxuLy9cbi8vIGdldFN0YXJ0Wm9vbSgpIHtcbi8vICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbi8vXG4vLyAgIHJldHVybiBzdGFydFpvb207XG4vLyB9XG4vL1xuLy8gc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuLy8gICB0aGlzLnVwZGF0ZVN0YXRlKHtcbi8vICAgICBzdGFydFpvb21cbi8vICAgfSk7XG4vLyB9XG4vL1xuIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvdXIiLCJwcmV2aWV3UGFuZVNjaGVtZSIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsInNwZWVkIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzaG93TGVmdERpdmlzaW9uRGl2IiwicmVzZXRTY3JvbGxpbmciLCJzY3JvbGxTcGVlZCIsImRpcmVjdGlvbiIsIlJJR0hUX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsIm1heGltdW1TY3JvbGxMZWZ0IiwiZ2V0TWF4aW11bVNjcm9sbExlZnQiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsIkxFRlRfRElSRUNUSU9OIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsIkRPV05fRElSRUNUSU9OIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbExlZnQiLCJzZXRTdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsTGVmdCIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInJlc2l6ZUhhbmRsZXIiLCJub051ZGdlIiwiem9vbSIsImdldFpvb20iLCJpbm5lcldpZHRoIiwiZ2V0SW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJkb2N1bWVudFNjYWxlIiwicHJldmlld1BhbmVJbm5lcldpZHRoIiwicHJldmlld1BhbmVJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJudWRnZSIsInNjcm9sbEhlaWdodCIsImdldFNjcm9sbEhlaWdodCIsIm1heGltdW1TY3JvbGxUb3AiLCJkZWx0YSIsInNjcm9sbFRvIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUb0xlZnQiLCJzdG9wU2Nyb2xsaW5nIiwiYW5pbWF0aW9uRnJhbWUiLCJnZXRBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0QW5pbWF0aW9uRnJhbWUiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRoZW4iLCJzdGVwIiwidGltZURlbHRhIiwic2Nyb2xsU3BlZWREZWx0YSIsIlNDUk9MTF9TUEVFRF9ERUxUQSIsInNjcm9sbERlbHRhIiwiU0NST0xMX1RPUF9ERUxUQSIsImVuYWJsZUdlc3R1cmVzIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21Td2lwZVJpZ2h0IiwiZ2V0TWF4aW11bVNjcm9sbFRvcCIsIk1hdGgiLCJtYXgiLCJzY3JvbGxXaWR0aCIsImdldFNjcm9sbFdpZHRoIiwiZGlzYWJsZUdlc3R1cmVzIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0xlZnQiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZVJpZ2h0IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uUmVzaXplIiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJvZmZSZXNpemUiLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJEb2N1bWVudERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwic2Nyb2xsYmFyTWl4aW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJkQSxVQWlDQSxxRUFBcUU7Q0FDckUsRUFBRTtDQUNGLHVEQUF1RDtDQUN2RCxFQUFFO0NBQ0YsMkJBQTJCO0NBQzNCLEVBQUU7Q0FDRiw0QkFBNEI7Q0FDNUIsRUFBRTtDQUNGLHdEQUF3RDtDQUN4RCxFQUFFO0NBQ0Ysc0VBQXNFO0NBQ3RFLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsdUJBQXVCO0NBQ3ZCLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELFFBQVE7Q0FDUixJQUFJO0NBQ0osRUFBRTtDQUNGLDREQUE0RDtDQUM1RCw0Q0FBNEM7Q0FDNUMsRUFBRTtDQUNGLHNCQUFzQjtDQUN0QixtQ0FBbUM7Q0FDbkMsRUFBRTtDQUNGLGNBQWM7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