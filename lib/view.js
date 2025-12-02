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
            var scale = (0, _state.getScale)(), startScale = scale; ///
            _this.setScale(scale);
            _this.setStartScale(startScale);
        }), _define_property(_this, "pinchStopCustomHandler", function(event, element) {
            var scale = _this.getScale();
            (0, _state.setScale)(scale);
        }), _define_property(_this, "pinchMoveCustomHandler", function(event, element, ratio) {
            var startScale = _this.getStartScale(), scale = startScale * Math.sqrt(ratio);
            _this.setScale(scale);
            _this.zoom(scale);
        }), _define_property(_this, "doubleTapCustomHandler", function(event, element, ratio) {
            var scale = 1;
            (0, _state.setScale)(scale);
            _this.zoom();
        }), _define_property(_this, "swipeRightCustomHandler", function(event, element, top, left, speed) {
            _this.stopScrolling();
            var scrollHorizontally = _this.canScrollHorizontally(), scrollLeft = _this.getScrollLeft(), scrolledLeft = scrollLeft <= 1, noScrollLeft = !scrollHorizontally;
            if (scrolledLeft || noScrollLeft) {
                _this.showLeftDivisionDiv();
                _this.resetScrolling();
                _this.zoom();
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
                _this.zoom();
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
                        _this.zoom();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastDivisionDiv();
                        _this.resetScrolling();
                        _this.zoom();
                        break;
                    }
                case ENTER_KEY_CODE:
                case ARROW_RIGHT_KEY_CODE:
                    {
                        _this.showRightDivisionDiv();
                        _this.resetScrolling();
                        _this.zoom();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftDivisionDiv();
                        _this.resetScrolling();
                        _this.zoom();
                        break;
                    }
            }
        }), _define_property(_this, "resizeHandler", function(event, element) {
            _this.zoom();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "zoom",
            value: function zoom() {
                var scale = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                if (scale === null) {
                    scale = (0, _state.getScale)();
                }
                var innerWidth = this.getInnerWidth(), innerHeight = this.getInnerHeight(), documentScale = scale, viewInnerWidth = innerWidth, viewInnerHeight = innerHeight; ///
                this.scaleDocumentDiv(documentScale, viewInnerWidth, viewInnerHeight);
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
                var scale = (0, _state.getScale)(), innerHeight = this.getInnerHeight(), documentDivHeight = this.getDocumentDivHeight(), scaledDocumentDivHeight = documentDivHeight * scale, scrollVertically = scaledDocumentDivHeight > innerHeight;
                return scrollVertically;
            }
        },
        {
            key: "canScrollHorizontally",
            value: function canScrollHorizontally() {
                var scale = (0, _state.getScale)(), innerWidth = this.getInnerWidth(), documentDivWidth = this.getDocumentDivWidth(), scaledDocumentDivWidth = documentDivWidth * scale, scrollHorizontally = scaledDocumentDivWidth > innerWidth;
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
            key: "getScale",
            value: function getScale() {
                var scale = this.getState().scale;
                return scale;
            }
        },
        {
            key: "getStartScale",
            value: function getStartScale() {
                var startScale = this.getState().startScale;
                return startScale;
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
            key: "setScale",
            value: function setScale(scale) {
                this.updateState({
                    scale: scale
                });
            }
        },
        {
            key: "setStartScale",
            value: function setStartScale(startScale) {
                this.updateState({
                    startScale: startScale
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
                var scale = null, startScale = null, animationFrame = null, startScrollTop = null, startScrollLeft = null;
                this.setState({
                    scale: scale,
                    startScale: startScale,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0U2NhbGUsIHNldFNjYWxlIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IFVQX0RJUkVDVElPTiwgTEVGVF9ESVJFQ1RJT04sIERPV05fRElSRUNUSU9OLCBSSUdIVF9ESVJFQ1RJT04sIFNDUk9MTF9UT1BfREVMVEEsIFNDUk9MTF9TUEVFRF9ERUxUQSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIH0gPSBwcmV2aWV3UGFuZVNjaGVtZSxcbiAgICAgIHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZSgpLFxuICAgICAgICAgIHN0YXJ0U2NhbGUgPSBzY2FsZTsgLy8vXG5cbiAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcblxuICAgIHRoaXMuc2V0U3RhcnRTY2FsZShzdGFydFNjYWxlKTtcbiAgfVxuXG4gIHBpbmNoU3RvcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzY2FsZSA9IHRoaXMuZ2V0U2NhbGUoKTtcblxuICAgIHNldFNjYWxlKHNjYWxlKTtcbiAgfVxuXG4gIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY2FsZSA9IHRoaXMuZ2V0U3RhcnRTY2FsZSgpLFxuICAgICAgICAgIHNjYWxlID0gc3RhcnRTY2FsZSAqIE1hdGguc3FydChyYXRpbyk7XG5cbiAgICB0aGlzLnNldFNjYWxlKHNjYWxlKTtcblxuICAgIHRoaXMuem9vbShzY2FsZSk7XG4gIH1cblxuICBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gMTtcblxuICAgIHNldFNjYWxlKHNjYWxlKTtcblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbGVkTGVmdCA9IHNjcm9sbExlZnQgPD0gMSxcbiAgICAgICAgICBub1Njcm9sbExlZnQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkTGVmdCB8fCBub1Njcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gTEVGVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpO1xuXG4gICAgaWYgKHNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSG9yaXpvbnRhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vL1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzaXplSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgem9vbShzY2FsZSA9IG51bGwpIHtcbiAgICBpZiAoc2NhbGUgPT09IG51bGwpIHtcbiAgICAgIHNjYWxlID0gZ2V0U2NhbGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnRTY2FsZSA9IHNjYWxlLCAvLy9cbiAgICAgICAgICB2aWV3SW5uZXJXaWR0aCA9IGlubmVyV2lkdGgsIC8vL1xuICAgICAgICAgIHZpZXdJbm5lckhlaWdodCA9IGlubmVySGVpZ2h0OyAvLy9cblxuICAgIHRoaXMuc2NhbGVEb2N1bWVudERpdihkb2N1bWVudFNjYWxlLCB2aWV3SW5uZXJXaWR0aCwgdmlld0lubmVySGVpZ2h0KTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc2Nyb2xsVG9MZWZ0KCkge1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWUgPSB0aGlzLmdldEFuaW1hdGlvbkZyYW1lKCk7XG5cbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcblxuICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCksXG4gICAgICAgIHRoZW47XG5cbiAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICBjb25zdCBzdGVwID0gKG5vdykgPT4ge1xuICAgICAgY29uc3QgdGltZURlbHRhID0gbm93IC0gdGhlbixcbiAgICAgICAgICAgIHNjcm9sbFNwZWVkRGVsdGEgPSBTQ1JPTExfU1BFRURfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIHNjcm9sbFNwZWVkID0gc2Nyb2xsU3BlZWQgLSBzY3JvbGxTcGVlZERlbHRhO1xuXG4gICAgICBpZiAoc2Nyb2xsU3BlZWQgPCAwKSB7XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBzY3JvbGxTcGVlZCAqIFNDUk9MTF9UT1BfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBVUF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBMRUZUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0ICsgc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRE9XTl9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSSUdIVF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgcmVzZXRTY3JvbGxpbmcoKSB7XG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgIHRoaXMuc2Nyb2xsVG9MZWZ0KCk7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtU2Nyb2xsVG9wO1xuICB9XG5cbiAgZ2V0TWF4aW11bVNjcm9sbExlZnQoKSB7XG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIHNjcm9sbFdpZHRoID0gdGhpcy5nZXRTY3JvbGxXaWR0aCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gTWF0aC5tYXgoMCwgc2Nyb2xsV2lkdGggLSBpbm5lcldpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtU2Nyb2xsTGVmdDtcbiAgfVxuXG4gIGNhblNjcm9sbFZlcnRpY2FsbHkoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZSgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50RGl2SGVpZ2h0ID0gdGhpcy5nZXREb2N1bWVudERpdkhlaWdodCgpLFxuICAgICAgICAgIHNjYWxlZERvY3VtZW50RGl2SGVpZ2h0ID0gZG9jdW1lbnREaXZIZWlnaHQgKiBzY2FsZSxcbiAgICAgICAgICBzY3JvbGxWZXJ0aWNhbGx5ID0gc2NhbGVkRG9jdW1lbnREaXZIZWlnaHQgPiBpbm5lckhlaWdodDtcblxuICAgIHJldHVybiBzY3JvbGxWZXJ0aWNhbGx5O1xuICB9XG5cbiAgY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCkge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgZG9jdW1lbnREaXZXaWR0aCA9IHRoaXMuZ2V0RG9jdW1lbnREaXZXaWR0aCgpLFxuICAgICAgICAgIHNjYWxlZERvY3VtZW50RGl2V2lkdGggPSBkb2N1bWVudERpdldpZHRoICogc2NhbGUsXG4gICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gc2NhbGVkRG9jdW1lbnREaXZXaWR0aCA+IGlubmVyV2lkdGg7XG5cbiAgICByZXR1cm4gc2Nyb2xsSG9yaXpvbnRhbGx5OztcbiAgfVxuXG4gIGVuYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RvcCh0aGlzLnBpbmNoU3RvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZGlzYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdG9wKHRoaXMucGluY2hTdG9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGdldFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2NhbGUoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjYWxlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY2FsZTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uRnJhbWUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBhbmltYXRpb25GcmFtZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsTGVmdCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY2FsZShzdGFydFNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjYWxlXG4gICAgfSk7XG4gIH1cblxuICBzZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2NhbGUgPSBudWxsLFxuICAgICAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2NhbGUsXG4gICAgICBzdGFydFNjYWxlLFxuICAgICAgYW5pbWF0aW9uRnJhbWUsXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5lbmFibGVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5vZmZSZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8RG9jdW1lbnREaXYgcmVzaXplSGFuZGxlcj17cmVzaXplSGFuZGxlcn0gLz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICB9XG4gICAgXG5gO1xuXG4vLyB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuLy9cbi8vIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIHRoaXMudXBkYXRlWm9vbSgpO1xuLy8gfVxuLy9cbi8vIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICAvLy9cbi8vIH1cbi8vXG4vLyBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG4vL1xuLy8gICBpZiAoZnVsbFNjcmVlbikge1xuLy8gICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbi8vXG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gZW50ZXJGdWxsU2NyZWVuKCkge1xuLy8gICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4vLyB9XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsInByZXZpZXdQYW5lU2NoZW1lIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3IiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzY2FsZSIsImdldFNjYWxlIiwic3RhcnRTY2FsZSIsInNldFNjYWxlIiwic2V0U3RhcnRTY2FsZSIsInBpbmNoU3RvcEN1c3RvbUhhbmRsZXIiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFNjYWxlIiwiTWF0aCIsInNxcnQiLCJ6b29tIiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwidG9wIiwibGVmdCIsInNwZWVkIiwic3RvcFNjcm9sbGluZyIsInNjcm9sbEhvcml6b250YWxseSIsImNhblNjcm9sbEhvcml6b250YWxseSIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsZWRMZWZ0Iiwibm9TY3JvbGxMZWZ0Iiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInJlc2V0U2Nyb2xsaW5nIiwic2Nyb2xsU3BlZWQiLCJkaXJlY3Rpb24iLCJSSUdIVF9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJtYXhpbXVtU2Nyb2xsTGVmdCIsImdldE1heGltdW1TY3JvbGxMZWZ0Iiwic2Nyb2xsZWRSaWdodCIsIm5vU2Nyb2xsUmlnaHQiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsIkxFRlRfRElSRUNUSU9OIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNjcm9sbFZlcnRpY2FsbHkiLCJjYW5TY3JvbGxWZXJ0aWNhbGx5IiwiRE9XTl9ESVJFQ1RJT04iLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzdGFydFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxMZWZ0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwicmVzaXplSGFuZGxlciIsImlubmVyV2lkdGgiLCJnZXRJbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRJbm5lckhlaWdodCIsImRvY3VtZW50U2NhbGUiLCJ2aWV3SW5uZXJXaWR0aCIsInZpZXdJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvTGVmdCIsImFuaW1hdGlvbkZyYW1lIiwiZ2V0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEFuaW1hdGlvbkZyYW1lIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aGVuIiwic3RlcCIsInRpbWVEZWx0YSIsInNjcm9sbFNwZWVkRGVsdGEiLCJTQ1JPTExfU1BFRURfREVMVEEiLCJzY3JvbGxEZWx0YSIsIlNDUk9MTF9UT1BfREVMVEEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRNYXhpbXVtU2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4aW11bVNjcm9sbFRvcCIsIm1heCIsInNjcm9sbFdpZHRoIiwiZ2V0U2Nyb2xsV2lkdGgiLCJkb2N1bWVudERpdkhlaWdodCIsImdldERvY3VtZW50RGl2SGVpZ2h0Iiwic2NhbGVkRG9jdW1lbnREaXZIZWlnaHQiLCJkb2N1bWVudERpdldpZHRoIiwiZ2V0RG9jdW1lbnREaXZXaWR0aCIsInNjYWxlZERvY3VtZW50RGl2V2lkdGgiLCJlbmFibGVHZXN0dXJlcyIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RvcCIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsImRpc2FibGVHZXN0dXJlcyIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwib2ZmQ3VzdG9tRHJhZ1JpZ2h0Iiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdG9wIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25SZXNpemUiLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsIm9mZlJlc2l6ZSIsIm9mZktleURvd24iLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkRvY3VtZW50RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJ3aXRoU3R5bGUiLCJzY3JvbGxiYXJNaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNGtCQSxVQWlDQSxxRUFBcUU7Q0FDckUsRUFBRTtDQUNGLHVEQUF1RDtDQUN2RCxFQUFFO0NBQ0YsMkJBQTJCO0NBQzNCLEVBQUU7Q0FDRiw0QkFBNEI7Q0FDNUIsRUFBRTtDQUNGLHdEQUF3RDtDQUN4RCxFQUFFO0NBQ0Ysc0VBQXNFO0NBQ3RFLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsdUJBQXVCO0NBQ3ZCLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELFFBQVE7Q0FDUixJQUFJO0NBQ0osRUFBRTtDQUNGLDREQUE0RDtDQUM1RCw0Q0FBNEM7Q0FDNUMsRUFBRTtDQUNGLHNCQUFzQjtDQUN0QixtQ0FBbUM7Q0FDbkMsRUFBRTtDQUNGLGNBQWM7Q0FDZCxNQUFNO0NBQ04sSUFBSTtDQUNKLEVBQUU7Q0FDRixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLElBQUk7Ozs7ZUFqRUo7OztvRUExa0JzQjt5QkFFRztvQkFDTzswQkFDYzsyQkFDSTsrREFFMUI7cUJBRVc7eUJBQ2lGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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