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
 // enterFullScreen() {
 //   this.requestFullScreen();
 // }
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
        _this = _call_super(this, View, arguments), _define_property(_this, "pinchStartCustomHandler", function(event, element) {
            var zoom = (0, _state.getZoom)(), startZoom = zoom; ///
            _this.setStartZoom(startZoom);
        }), _define_property(_this, "pinchStopCustomHandler", function(event, element) {
            var noNudge = false;
            _this.zoom(noNudge);
        }), _define_property(_this, "pinchMoveCustomHandler", function(event, element, ratio) {
            var startZoom = _this.getStartZoom(), zoom = startZoom * Math.sqrt(ratio); ///
            (0, _state.setZoom)(zoom);
            var noNudge = true;
            _this.zoom(noNudge);
        }), _define_property(_this, "doubleTapCustomHandler", function(event, element, ratio) {
            var zoom = 1;
            (0, _state.setZoom)(zoom);
            var noNudge = false;
            _this.zoom(noNudge);
        }), _define_property(_this, "swipeRightCustomHandler", function(event, element, top, left, speed) {
            _this.stopScrolling();
            var scrollHorizontally = _this.canScrollHorizontally(), scrollLeft = _this.getScrollLeft(), scrolledLeft = scrollLeft <= 1, noScrollLeft = !scrollHorizontally;
            if (scrolledLeft || noScrollLeft) {
                _this.showLeftDivisionDiv();
                _this.resetScrolling();
                return;
            }
            var scrollSpeed = speed, direction = _constants.RIGHT_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "swipeLeftCustomHandler", function(event, element, top, left, speed) {
            _this.stopScrolling();
            var scrollHorizontally = _this.canScrollHorizontally(), maximumScrollLeft = _this.getMaximumScrollLeft(), scrollLeft = _this.getScrollLeft(), scrolledRight = scrollLeft >= maximumScrollLeft - 1, noScrollRight = !scrollHorizontally;
            if (scrolledRight || noScrollRight) {
                _this.showRightDivisionDiv();
                _this.resetScrolling();
                return;
            }
            var scrollSpeed = speed, direction = _constants.LEFT_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "swipeDownCustomHandler", function(event, element, top, left, speed) {
            _this.stopScrolling();
            var scrollVertically = _this.canScrollVertically();
            if (!scrollVertically) {
                return;
            }
            var scrollSpeed = speed, direction = _constants.DOWN_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "swipeUpCustomHandler", function(event, element, top, left, speed) {
            _this.stopScrolling();
            var scrollVertically = _this.canScrollVertically();
            if (!scrollVertically) {
                return;
            }
            var scrollSpeed = speed, direction = _constants.UP_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "dragStartCustomHandler", function(event, element, top, left) {
            _this.stopScrolling();
            var startScrollTop = null, startScrollLeft = null;
            var scrollVertically = _this.canScrollVertically(), scrollHorizontally = _this.canScrollHorizontally();
            if (scrollVertically) {
                var scrollTop = _this.getScrollTop();
                startScrollTop = scrollTop; ///
            }
            if (scrollHorizontally) {
                var scrollLeft = _this.getScrollLeft();
                startScrollLeft = scrollLeft; ///
            }
            _this.setStartScrollTop(startScrollTop);
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
        }), _define_property(_this, "dragDownCustomHandler", function(event, element, top, left) {
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
        }), _define_property(_this, "dragUpCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
            var startScrollLeft = null;
            _this.setStartScrollLeft(startScrollLeft);
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
            key: "canScrollVertically",
            value: function canScrollVertically() {
                var zoom = (0, _state.getZoom)(), innerHeight = this.getInnerHeight(), documentDivHeight = this.getDocumentDivHeight(), scaledDocumentDivHeight = documentDivHeight * zoom, scrollVertically = scaledDocumentDivHeight > innerHeight;
                return scrollVertically;
            }
        },
        {
            key: "canScrollHorizontally",
            value: function canScrollHorizontally() {
                var zoom = (0, _state.getZoom)(), innerWidth = this.getInnerWidth(), documentDivWidth = this.getDocumentDivWidth(), scaledDocumentDivWidth = documentDivWidth * zoom, scrollHorizontally = scaledDocumentDivWidth > innerWidth;
                return scrollHorizontally;
                ;
            }
        },
        {
            key: "enableGestures",
            value: function enableGestures() {
                this.onCustomDragUp(this.dragUpCustomHandler);
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomDragLeft(this.dragLeftCustomHandler);
                this.onCustomDragDown(this.dragDownCustomHandler);
                this.onCustomDoubleTap(this.doubleTapCustomHandler);
                this.onCustomDragRight(this.dragRightCustomHandler);
                this.onCustomDragStart(this.dragStartCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
                this.onCustomPinchMove(this.pinchMoveCustomHandler);
                this.onCustomPinchStop(this.pinchStopCustomHandler);
                this.onCustomPinchStart(this.pinchStartCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
            }
        },
        {
            key: "disableGestures",
            value: function disableGestures() {
                this.offCustomDragUp(this.dragUpCustomHandler);
                this.offCustomSwipeUp(this.swipeUpCustomHandler);
                this.offCustomDragLeft(this.dragLeftCustomHandler);
                this.offCustomDragDown(this.dragDownCustomHandler);
                this.offCustomDoubleTap(this.doubleTapCustomHandler);
                this.offCustomDragRight(this.dragRightCustomHandler);
                this.offCustomDragStart(this.dragStartCustomHandler);
                this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.offCustomSwipeDown(this.swipeDownCustomHandler);
                this.offCustomPinchMove(this.pinchMoveCustomHandler);
                this.offCustomPinchStop(this.pinchStopCustomHandler);
                this.offCustomPinchStart(this.pinchStartCustomHandler);
                this.offCustomSwipeRight(this.swipeRightCustomHandler);
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
            key: "setStartZoom",
            value: function setStartZoom(startZoom) {
                this.updateState({
                    startZoom: startZoom
                });
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
                var startZoom = null, animationFrame = null, startScrollTop = null, startScrollLeft = null;
                this.setState({
                    startZoom: startZoom,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0Wm9vbSwgc2V0Wm9vbSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBVUF9ESVJFQ1RJT04sIExFRlRfRElSRUNUSU9OLCBET1dOX0RJUkVDVElPTiwgUklHSFRfRElSRUNUSU9OLCBTQ1JPTExfVE9QX0RFTFRBLCBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWUsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cblxuICAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4gIH1cblxuICBwaW5jaFN0b3BDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgbm9OdWRnZSA9IGZhbHNlO1xuXG4gICAgdGhpcy56b29tKG5vTnVkZ2UpO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFpvb20gPSB0aGlzLmdldFN0YXJ0Wm9vbSgpLFxuICAgICAgICAgIHpvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pOyAgLy8vXG5cbiAgICBzZXRab29tKHpvb20pO1xuXG4gICAgY29uc3Qgbm9OdWRnZSA9IHRydWU7XG5cbiAgICB0aGlzLnpvb20obm9OdWRnZSk7XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHpvb20gPSAxO1xuXG4gICAgc2V0Wm9vbSh6b29tKTtcblxuICAgIGNvbnN0IG5vTnVkZ2UgPSBmYWxzZTtcblxuICAgIHRoaXMuem9vbShub051ZGdlKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZExlZnQgPSBzY3JvbGxMZWZ0IDw9IDEsXG4gICAgICAgICAgbm9TY3JvbGxMZWZ0ID0gIXNjcm9sbEhvcml6b250YWxseTtcblxuICAgIGlmIChzY3JvbGxlZExlZnQgfHwgbm9TY3JvbGxMZWZ0KSB7XG4gICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gc3BlZWQsICAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBMRUZUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gRE9XTl9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKTtcblxuICAgIGlmICghc2Nyb2xsVmVydGljYWxseSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gc3BlZWQsICAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBsZXQgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpLFxuICAgICAgICAgIHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCk7XG5cbiAgICBpZiAoc2Nyb2xsVmVydGljYWxseSkge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuICAgIH1cblxuICAgIGlmIChzY3JvbGxIb3Jpem9udGFsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgLy8vXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpO1xuICB9XG5cbiAgZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpO1xuICB9XG5cbiAgZHJhZ0xlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsTGVmdCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsTGVmdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBzdGFydFNjcm9sbExlZnQgLSBsZWZ0O1xuXG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgICAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgbm9OdWRnZSA9IHRydWU7XG5cbiAgICB0aGlzLnpvb20obm9OdWRnZSk7XG4gIH1cblxuICB6b29tKG5vTnVkZ2UgPSBmYWxzZSkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50U2NhbGUgPSB6b29tLCAvLy9cbiAgICAgICAgICBwcmV2aWV3UGFuZUlubmVyV2lkdGggPSBpbm5lcldpZHRoLCAvLy9cbiAgICAgICAgICBwcmV2aWV3UGFuZUlubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5zY2FsZURvY3VtZW50RGl2KGRvY3VtZW50U2NhbGUsIHByZXZpZXdQYW5lSW5uZXJXaWR0aCwgcHJldmlld1BhbmVJbm5lckhlaWdodCk7XG5cbiAgICBpZiAobm9OdWRnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubnVkZ2UoKTtcbiAgfVxuXG4gIG51ZGdlKCkge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0LFxuICAgICAgICAgIGRlbHRhID0gKHNjcm9sbFRvcCA8IG1heGltdW1TY3JvbGxUb3ApID9cbiAgICAgICAgICAgICAgICAgICAgKzEgOlxuICAgICAgICAgICAgICAgICAgICAgIC0xO1xuXG4gICAgc2Nyb2xsVG9wICs9IGRlbHRhO1xuXG4gICAgdGhpcy5zY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHNjcm9sbFRvcCAtPSBkZWx0YTtcblxuICAgICAgdGhpcy5zY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzY3JvbGxUb0xlZnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBhbmltYXRpb25GcmFtZSA9IHRoaXMuZ2V0QW5pbWF0aW9uRnJhbWUoKTtcblxuICAgIGlmIChhbmltYXRpb25GcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgdGhlbjtcblxuICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgIGNvbnN0IHN0ZXAgPSAobm93KSA9PiB7XG4gICAgICBjb25zdCB0aW1lRGVsdGEgPSBub3cgLSB0aGVuLFxuICAgICAgICAgICAgc2Nyb2xsU3BlZWREZWx0YSA9IFNDUk9MTF9TUEVFRF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgc2Nyb2xsU3BlZWQgPSBzY3JvbGxTcGVlZCAtIHNjcm9sbFNwZWVkRGVsdGE7XG5cbiAgICAgIGlmIChzY3JvbGxTcGVlZCA8IDApIHtcbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNjcm9sbFNwZWVkICogU0NST0xMX1RPUF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFVQX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIExFRlRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBET1dOX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJJR0hUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICByZXNldFNjcm9sbGluZygpIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5zY3JvbGxUb0xlZnQoKTtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxUb3A7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsV2lkdGggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxXaWR0aCAtIGlubmVyV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxMZWZ0O1xuICB9XG5cbiAgY2FuU2Nyb2xsVmVydGljYWxseSgpIHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50RGl2SGVpZ2h0ID0gdGhpcy5nZXREb2N1bWVudERpdkhlaWdodCgpLFxuICAgICAgICAgIHNjYWxlZERvY3VtZW50RGl2SGVpZ2h0ID0gZG9jdW1lbnREaXZIZWlnaHQgKiB6b29tLFxuICAgICAgICAgIHNjcm9sbFZlcnRpY2FsbHkgPSBzY2FsZWREb2N1bWVudERpdkhlaWdodCA+IGlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbFZlcnRpY2FsbHk7XG4gIH1cblxuICBjYW5TY3JvbGxIb3Jpem9udGFsbHkoKSB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgZG9jdW1lbnREaXZXaWR0aCA9IHRoaXMuZ2V0RG9jdW1lbnREaXZXaWR0aCgpLFxuICAgICAgICAgIHNjYWxlZERvY3VtZW50RGl2V2lkdGggPSBkb2N1bWVudERpdldpZHRoICogem9vbSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSBzY2FsZWREb2N1bWVudERpdldpZHRoID4gaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiBzY3JvbGxIb3Jpem9udGFsbHk7O1xuICB9XG5cbiAgZW5hYmxlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdG9wKHRoaXMucGluY2hTdG9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBkaXNhYmxlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0U3RhcnRab29tKCkge1xuICAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRab29tO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgY29uc3QgeyBhbmltYXRpb25GcmFtZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbkZyYW1lO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxMZWZ0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxMZWZ0O1xuICB9XG5cbiAgc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRab29tXG4gICAgfSk7XG4gIH1cblxuICBzZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qgc3RhcnRab29tID0gbnVsbCxcbiAgICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0YXJ0Wm9vbSxcbiAgICAgIGFuaW1hdGlvbkZyYW1lLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZW5hYmxlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5kaXNhYmxlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPERvY3VtZW50RGl2IHJlc2l6ZUhhbmRsZXI9e3Jlc2l6ZUhhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICB9XG4gICAgXG5gO1xuXG4vLyB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuLy9cbi8vIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIHRoaXMudXBkYXRlWm9vbSgpO1xuLy8gfVxuLy9cbi8vIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICAvLy9cbi8vIH1cbi8vXG4vLyBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG4vL1xuLy8gICBpZiAoZnVsbFNjcmVlbikge1xuLy8gICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbi8vXG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gZW50ZXJGdWxsU2NyZWVuKCkge1xuLy8gICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4vLyB9XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsInByZXZpZXdQYW5lU2NoZW1lIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ6b29tIiwiZ2V0Wm9vbSIsInN0YXJ0Wm9vbSIsInNldFN0YXJ0Wm9vbSIsInBpbmNoU3RvcEN1c3RvbUhhbmRsZXIiLCJub051ZGdlIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRab29tIiwiTWF0aCIsInNxcnQiLCJzZXRab29tIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsInNwZWVkIiwic3RvcFNjcm9sbGluZyIsInNjcm9sbEhvcml6b250YWxseSIsImNhblNjcm9sbEhvcml6b250YWxseSIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsZWRMZWZ0Iiwibm9TY3JvbGxMZWZ0Iiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInJlc2V0U2Nyb2xsaW5nIiwic2Nyb2xsU3BlZWQiLCJkaXJlY3Rpb24iLCJSSUdIVF9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJtYXhpbXVtU2Nyb2xsTGVmdCIsImdldE1heGltdW1TY3JvbGxMZWZ0Iiwic2Nyb2xsZWRSaWdodCIsIm5vU2Nyb2xsUmlnaHQiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsIkxFRlRfRElSRUNUSU9OIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNjcm9sbFZlcnRpY2FsbHkiLCJjYW5TY3JvbGxWZXJ0aWNhbGx5IiwiRE9XTl9ESVJFQ1RJT04iLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzdGFydFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxMZWZ0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwicmVzaXplSGFuZGxlciIsImlubmVyV2lkdGgiLCJnZXRJbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRJbm5lckhlaWdodCIsImRvY3VtZW50U2NhbGUiLCJwcmV2aWV3UGFuZUlubmVyV2lkdGgiLCJwcmV2aWV3UGFuZUlubmVySGVpZ2h0Iiwic2NhbGVEb2N1bWVudERpdiIsIm51ZGdlIiwic2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4aW11bVNjcm9sbFRvcCIsImRlbHRhIiwic2Nyb2xsVG8iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvTGVmdCIsImFuaW1hdGlvbkZyYW1lIiwiZ2V0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEFuaW1hdGlvbkZyYW1lIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aGVuIiwic3RlcCIsInRpbWVEZWx0YSIsInNjcm9sbFNwZWVkRGVsdGEiLCJTQ1JPTExfU1BFRURfREVMVEEiLCJzY3JvbGxEZWx0YSIsIlNDUk9MTF9UT1BfREVMVEEiLCJnZXRNYXhpbXVtU2Nyb2xsVG9wIiwibWF4Iiwic2Nyb2xsV2lkdGgiLCJnZXRTY3JvbGxXaWR0aCIsImRvY3VtZW50RGl2SGVpZ2h0IiwiZ2V0RG9jdW1lbnREaXZIZWlnaHQiLCJzY2FsZWREb2N1bWVudERpdkhlaWdodCIsImRvY3VtZW50RGl2V2lkdGgiLCJnZXREb2N1bWVudERpdldpZHRoIiwic2NhbGVkRG9jdW1lbnREaXZXaWR0aCIsImVuYWJsZUdlc3R1cmVzIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tRG91YmxlVGFwIiwib25DdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdG9wIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Td2lwZVJpZ2h0IiwiZGlzYWJsZUdlc3R1cmVzIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0b3AiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJvblJlc2l6ZSIsIndpbmRvdyIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwib2ZmUmVzaXplIiwib2ZmS2V5RG93biIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiRG9jdW1lbnREaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsInNjcm9sbGJhck1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnbEJBLFVBaUNBLHFFQUFxRTtDQUNyRSxFQUFFO0NBQ0YsdURBQXVEO0NBQ3ZELEVBQUU7Q0FDRiwyQkFBMkI7Q0FDM0IsRUFBRTtDQUNGLDRCQUE0QjtDQUM1QixFQUFFO0NBQ0Ysd0RBQXdE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