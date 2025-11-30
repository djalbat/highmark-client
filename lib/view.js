"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" // getStartScrollTop() {
 //   const { startScrollTop } = this.getState();
 //
 //   return startScrollTop;
 // }
 //
 // setStartScrollTop(startScrollTop) {
 //   this.updateState({
 //     startScrollTop
 //   });
 // }
 //
 // ,
 // startScrollTop = null
 //
 //   ,
 //   startScrollTop
 //
 // this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
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
 // dragStartCustomHandler = (event, element, top, left) => {
 //   const scrollTop = this.getScrollTop(),
 //         startScrollTop = scrollTop; ///
 //
 //   this.setStartScrollTop(startScrollTop);
 // }
 //
 // dragDownCustomHandler = (event, element, top, left) => {
 //   const startScrollTop = this.getStartScrollTop();
 //
 //   if (startScrollTop === null) {
 //     return;
 //   }
 //
 //   const scrollTop = startScrollTop - top;
 //
 //   this.setScrollTop(scrollTop);
 // }
 //
 // dragUpCustomHandler = (event, element, top, left) => {
 //   const startScrollTop = this.getStartScrollTop();
 //
 //   if (startScrollTop === null) {
 //     return;
 //   }
 //
 //   const scrollTop = startScrollTop - top;
 //
 //   this.setScrollTop(scrollTop);
 // }
 //
 // enterFullScreen() {
 //   this.requestFullScreen();
 // }
 //
 // enableGestures() {
 //   this.onCustomDragUp(this.dragUpCustomHandler);
 //   this.onCustomDragDown(this.dragDownCustomHandler);
 //   this.onCustomDragStart(this.dragStartCustomHandler);
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
 //   this.offCustomDragDown(this.dragDownCustomHandler);
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
        _this = _call_super(this, View, arguments), _define_property(_this, "swipeRightCustomHandler", function(event, element, top, left, spped) {
            _this.showLeftDivisionDiv();
            _this.stopScrolling();
            _this.scrollToTop();
        }), _define_property(_this, "swipeLeftCustomHandler", function(event, element, top, left, spped) {
            _this.showRightDivisionDiv();
            _this.stopScrolling();
            _this.scrollToTop();
        }), _define_property(_this, "swipeDownCustomHandler", function(event, element, top, left, speed) {
            var scrollSpeed = speed, direction = _constants.DOWN_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var scrollSpeed = speed, direction = _constants.UP_DIRECTION;
            _this.startScrolling(scrollSpeed, direction);
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
                        _this.stopScrolling();
                        _this.scrollToTop();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastDivisionDiv();
                        _this.stopScrolling();
                        _this.scrollToTop();
                        break;
                    }
                case ENTER_KEY_CODE:
                case ARROW_RIGHT_KEY_CODE:
                    {
                        _this.showRightDivisionDiv();
                        _this.stopScrolling();
                        _this.scrollToTop();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftDivisionDiv();
                        _this.stopScrolling();
                        _this.scrollToTop();
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
                var then = performance.now();
                var step = function(now) {
                    var timeDelta = now - then;
                    scrollSpeed = scrollSpeed - _constants.SCROLL_SPEED_DELTA * timeDelta;
                    if (scrollSpeed < 0) {
                        _this.stopScrolling();
                        return;
                    }
                    var scrollTop = _this.getScrollTop();
                    scrollTop = scrollTop + direction * scrollSpeed * _constants.SCROLL_TOP_DELTA * timeDelta;
                    then = now; ///
                    _this.setScrollTop(scrollTop);
                    var animationFrame = requestAnimationFrame(step);
                    _this.setAnimationFrame(animationFrame);
                };
                var animationFrame = requestAnimationFrame(step);
                this.setAnimationFrame(animationFrame);
            }
        },
        {
            key: "enableGestures",
            value: function enableGestures() {
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
            }
        },
        {
            key: "disableGestures",
            value: function disableGestures() {
                this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.offCustomSwipeRight(this.swipeRightCustomHandler);
                this.offCustomSwipeUp(this.swipeUpCustomHandler);
                this.offCustomSwipeDown(this.swipeDownCustomHandler);
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
            key: "setAnimationFrame",
            value: function setAnimationFrame(animationFrame) {
                this.updateState({
                    animationFrame: animationFrame
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var animationFrame = null;
                this.setState({
                    animationFrame: animationFrame
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0Wm9vbSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBVUF9ESVJFQ1RJT04sIERPV05fRElSRUNUSU9OLCBTQ1JPTExfVE9QX0RFTFRBLCBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWUsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBub051ZGdlID0gdHJ1ZTtcblxuICAgIHRoaXMuem9vbShub051ZGdlKTtcbiAgfVxuXG4gIHpvb20obm9OdWRnZSA9IGZhbHNlKSB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnRTY2FsZSA9IHpvb20sIC8vL1xuICAgICAgICAgIHByZXZpZXdQYW5lSW5uZXJXaWR0aCA9IGlubmVyV2lkdGgsIC8vL1xuICAgICAgICAgIHByZXZpZXdQYW5lSW5uZXJIZWlnaHQgPSBpbm5lckhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnNjYWxlRG9jdW1lbnREaXYoZG9jdW1lbnRTY2FsZSwgcHJldmlld1BhbmVJbm5lcldpZHRoLCBwcmV2aWV3UGFuZUlubmVySGVpZ2h0KTtcblxuICAgIGlmIChub051ZGdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5udWRnZSgpO1xuICB9XG5cbiAgbnVkZ2UoKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQsXG4gICAgICAgICAgZGVsdGEgPSAoc2Nyb2xsVG9wIDwgbWF4aW11bVNjcm9sbFRvcCkgP1xuICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgLTE7XG5cbiAgICBzY3JvbGxUb3AgKz0gZGVsdGE7XG5cbiAgICB0aGlzLnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc2Nyb2xsVG9wIC09IGRlbHRhO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gICAgfSk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lID0gdGhpcy5nZXRBbmltYXRpb25GcmFtZSgpO1xuXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG5cbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHRoZW4gPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGNvbnN0IHN0ZXAgPSAobm93KSA9PiB7XG4gICAgICBjb25zdCB0aW1lRGVsdGEgPSBub3cgLSB0aGVuO1xuXG4gICAgICBzY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkIC0gU0NST0xMX1NQRUVEX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBpZiAoc2Nyb2xsU3BlZWQgPCAwKSB7XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIGRpcmVjdGlvbiAqIHNjcm9sbFNwZWVkICogU0NST0xMX1RPUF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGVuYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBkaXNhYmxlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBnZXRBbmltYXRpb25GcmFtZSgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGlvbkZyYW1lIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uRnJhbWU7XG4gIH1cblxuICBzZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmVuYWJsZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZGlzYWJsZUdlc3R1cmVzKCk7XG5cbiAgICB0aGlzLm9mZlJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSB0aGlzLnJlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxEb2N1bWVudERpdiByZXNpemVIYW5kbGVyPXtyZXNpemVIYW5kbGVyfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuXG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICB0b3VjaC1hY3Rpb246IG5vbmU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3VyfTtcbiAgXG4gICR7c2Nyb2xsYmFyTWl4aW59XG4gIFxuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gICAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgfVxuICAgIFxuYDtcblxuLy8gZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4vLyAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbi8vXG4vLyAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbi8vIH1cbi8vXG4vLyBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuLy8gICB0aGlzLnVwZGF0ZVN0YXRlKHtcbi8vICAgICBzdGFydFNjcm9sbFRvcFxuLy8gICB9KTtcbi8vIH1cbi8vXG4vLyAsXG4vLyBzdGFydFNjcm9sbFRvcCA9IG51bGxcbi8vXG4vLyAgICxcbi8vICAgc3RhcnRTY3JvbGxUb3Bcbi8vXG4vLyB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuLy9cbi8vIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIHRoaXMudXBkYXRlWm9vbSgpO1xuLy8gfVxuLy9cbi8vIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICAvLy9cbi8vIH1cbi8vXG4vLyBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG4vL1xuLy8gICBpZiAoZnVsbFNjcmVlbikge1xuLy8gICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbi8vXG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbi8vICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbi8vICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG4vL1xuLy8gICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuLy8gfVxuLy9cbi8vIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4vLyAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4vLyAgICAgICAgIHpvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pOyAgLy8vXG4vL1xuLy8gICBjb250cm9sbGVyLnpvb20oem9vbSk7XG4vLyB9XG4vL1xuLy8gZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4vLyAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4vLyAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbi8vXG4vLyAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuLy8gfVxuLy9cbi8vIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4vLyAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuLy9cbi8vICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vL1xuLy8gICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcbi8vXG4vLyAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4vLyB9XG4vL1xuLy8gZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4vLyAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuLy9cbi8vICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vL1xuLy8gICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcbi8vXG4vLyAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4vLyB9XG4vL1xuLy8gZW50ZXJGdWxsU2NyZWVuKCkge1xuLy8gICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4vLyB9XG4vL1xuLy8gZW5hYmxlR2VzdHVyZXMoKSB7XG4vLyAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4vLyB9XG4vL1xuLy8gZGlzYWJsZUdlc3R1cmVzKCkge1xuLy8gICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vIH1cbi8vXG4vLyBnZXRTdGFydFpvb20oKSB7XG4vLyAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG4vL1xuLy8gICByZXR1cm4gc3RhcnRab29tO1xuLy8gfVxuLy9cbi8vIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbi8vICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4vLyAgICAgc3RhcnRab29tXG4vLyAgIH0pO1xuLy8gfVxuLy9cbiJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kQ29sb3VyIiwicHJldmlld1BhbmVTY2hlbWUiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIiwiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRvcCIsImxlZnQiLCJzcHBlZCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJzdG9wU2Nyb2xsaW5nIiwic2Nyb2xsVG9Ub3AiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJzY3JvbGxTcGVlZCIsImRpcmVjdGlvbiIsIkRPV05fRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJjb250cm9sbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dMYXN0RGl2aXNpb25EaXYiLCJyZXNpemVIYW5kbGVyIiwibm9OdWRnZSIsInpvb20iLCJnZXRab29tIiwiaW5uZXJXaWR0aCIsImdldElubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldElubmVySGVpZ2h0IiwiZG9jdW1lbnRTY2FsZSIsInByZXZpZXdQYW5lSW5uZXJXaWR0aCIsInByZXZpZXdQYW5lSW5uZXJIZWlnaHQiLCJzY2FsZURvY3VtZW50RGl2IiwibnVkZ2UiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbEhlaWdodCIsImdldFNjcm9sbEhlaWdodCIsIm1heGltdW1TY3JvbGxUb3AiLCJkZWx0YSIsInNjcm9sbFRvIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0U2Nyb2xsVG9wIiwiYW5pbWF0aW9uRnJhbWUiLCJnZXRBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0QW5pbWF0aW9uRnJhbWUiLCJ0aGVuIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGVwIiwidGltZURlbHRhIiwiU0NST0xMX1NQRUVEX0RFTFRBIiwiU0NST0xMX1RPUF9ERUxUQSIsImVuYWJsZUdlc3R1cmVzIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbVN3aXBlRG93biIsImRpc2FibGVHZXN0dXJlcyIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uUmVzaXplIiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJvZmZSZXNpemUiLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJEb2N1bWVudERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwic2Nyb2xsYmFyTWl4aW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtTQSxVQWlDQSx3QkFBd0I7Q0FDeEIsZ0RBQWdEO0NBQ2hELEVBQUU7Q0FDRiwyQkFBMkI7Q0FDM0IsSUFBSTtDQUNKLEVBQUU7Q0FDRixzQ0FBc0M7Q0FDdEMsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixRQUFRO0NBQ1IsSUFBSTtDQUNKLEVBQUU7Q0FDRixJQUFJO0NBQ0osd0JBQXdCO0NBQ3hCLEVBQUU7Q0FDRixNQUFNO0NBQ04sbUJBQW1CO0NBQ25CLEVBQUU7Q0FDRixxRUFBcUU7Q0FDckUsRUFBRTtDQUNGLHVEQUF1RDtDQUN2RCxFQUFFO0NBQ0YsMkJBQTJCO0NBQzNCLEVBQUU7Q0FDRiw0QkFBNEI7Q0FDNUIsRUFBRTtDQUNGLHdEQUF3RDtDQUN4RCxFQUFFO0NBQ0Ysc0VBQXNFO0NBQ3RFLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsdUJBQXVCO0NBQ3ZCLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELFFBQVE7Q0FDUixJQUFJO0NBQ0osRUFBRTtDQUNGLDREQUE0RDtDQUM1RCw0Q0FBNEM7Q0FDNUMsRUFBRTtDQUNGLHNCQUFzQjtDQUN0QixtQ0FBbUM7Q0FDbkMsRUFBRTtDQUNGLGNBQWM7Q0FDZCxNQUFNO0NBQ04sSUFBSTtDQUNKLEVBQUU7Q0FDRixrREFBa0Q7Q0FDbEQsNEJBQTRCO0NBQzVCLGdDQUFnQztDQUNoQyxFQUFFO0NBQ0Ysa0NBQWtDO0NBQ2xDLElBQUk7Q0FDSixFQUFFO0NBQ0Ysd0RBQXdEO0NBQ3hELDJDQUEyQztDQUMzQyxvREFBb0Q7Q0FDcEQsRUFBRTtDQUNGLDJCQUEyQjtDQUMzQixJQUFJO0NBQ0osRUFBRTtDQUNGLDREQUE0RDtDQUM1RCwyQ0FBMkM7Q0FDM0MsMENBQTBDO0NBQzFDLEVBQUU7Q0FDRiw0Q0FBNEM7Q0FDNUMsSUFBSTtDQUNKLEVBQUU7Q0FDRiwyREFBMkQ7Q0FDM0QscURBQXFEO0NBQ3JELEVBQUU7Q0FDRixtQ0FBbUM7Q0FDbkMsY0FBYztDQUNkLE1BQU07Q0FDTixFQUFFO0NBQ0YsNENBQTRDO0NBQzVDLEVBQUU7Q0FDRixrQ0FBa0M7Q0FDbEMsSUFBSTtDQUNKLEVBQUU7Q0FDRix5REFBeUQ7Q0FDekQscURBQXFEO0NBQ3JELEVBQUU7Q0FDRixtQ0FBbUM7Q0FDbkMsY0FBYztDQUNkLE1BQU07Q0FDTixFQUFFO0NBQ0YsNENBQTRDO0NBQzVDLEVBQUU7Q0FDRixrQ0FBa0M7Q0FDbEMsSUFBSTtDQUNKLEVBQUU7Q0FDRixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLElBQUk7Q0FDSixFQUFFO0NBQ0YscUJBQXFCO0NBQ3JCLG1EQUFtRDtDQUNuRCx1REFBdUQ7Q0FDdkQseURBQXlEO0NBQ3pELHFEQUFxRDtDQUNyRCx5REFBeUQ7Q0FDekQseURBQXlEO0NBQ3pELDJEQUEyRDtDQUMzRCx5REFBeUQ7Q0FDekQsMkRBQTJEO0NBQzNELHlEQUF5RDtDQUN6RCxJQUFJO0NBQ0osRUFBRTtDQUNGLHNCQUFzQjtDQUN0QixvREFBb0Q7Q0FDcEQsd0RBQXdEO0NBQ3hELDBEQUEwRDtDQUMxRCxzREFBc0Q7Q0FDdEQsMERBQTBEO0NBQzFELDBEQUEwRDtDQUMxRCw0REFBNEQ7Q0FDNUQsMERBQTBEO0NBQzFELDREQUE0RDtDQUM1RCwwREFBMEQ7Q0FDMUQsSUFBSTtDQUNKLEVBQUU7Q0FDRixtQkFBbUI7Q0FDbkIsMkNBQTJDO0NBQzNDLEVBQUU7Q0FDRixzQkFBc0I7Q0FDdEIsSUFBSTtDQUNKLEVBQUU7Q0FDRiw0QkFBNEI7Q0FDNUIsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtDQUNoQixRQUFRO0NBQ1IsSUFBSTtDQUNKLEVBQUU7Ozs7ZUF2S0Y7OztvRUFoU3NCO3lCQUVHO29CQUNPOzBCQUNjOzJCQUNJOytEQUUxQjtxQkFFQTt5QkFDMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFRQSxtQkFBc0hDLDhCQUFpQixDQUF2SUQsa0JBQWtCRSxpQ0FBb0dELDhCQUFpQixDQUFySEMsZ0NBQWdDQyxpQ0FBb0VGLDhCQUFpQixDQUFyRkUsZ0NBQWdDQyxrQ0FBb0NILDhCQUFpQixDQUFyREcsaUNBQ2xGQyxpQkFNeUJDLG1CQUFRLENBTmpDRCxnQkFDQUUsa0JBS3lCRCxtQkFBUSxDQUxqQ0MsaUJBQ0FDLG9CQUl5QkYsbUJBQVEsQ0FKakNFLG1CQUNBQyxxQkFHeUJILG1CQUFRLENBSGpDRyxvQkFDQUMsc0JBRXlCSixtQkFBUSxDQUZqQ0kscUJBQ0FDLHNCQUN5QkwsbUJBQVEsQ0FEakNLLHFCQUNBQyx1QkFBeUJOLG1CQUFRLENBQWpDTTtBQUVSLElBQUEsQUFBTUMscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSwyQkFBMEIsU0FBQ0MsT0FBT0MsU0FBU0MsS0FBS0MsTUFBTUM7WUFDcEQsTUFBS0MsbUJBQW1CO1lBRXhCLE1BQUtDLGFBQWE7WUFFbEIsTUFBS0MsV0FBVztRQUNsQixJQUVBQyx3QkFBQUEsMEJBQXlCLFNBQUNSLE9BQU9DLFNBQVNDLEtBQUtDLE1BQU1DO1lBQ25ELE1BQUtLLG9CQUFvQjtZQUV6QixNQUFLSCxhQUFhO1lBRWxCLE1BQUtDLFdBQVc7UUFDbEIsSUFFQUcsd0JBQUFBLDBCQUF5QixTQUFDVixPQUFPQyxTQUFTQyxLQUFLQyxNQUFNUTtZQUNuRCxJQUFNQyxjQUFjRCxPQUNkRSxZQUFZQyx5QkFBYztZQUVoQyxNQUFLQyxjQUFjLENBQUNILGFBQWFDO1FBQ25DLElBRUFHLHdCQUFBQSx3QkFBdUIsU0FBQ2hCLE9BQU9DLFNBQVNDLEtBQUtDLE1BQU1RO1lBQ2pELElBQU1DLGNBQWNELE9BQ2RFLFlBQVlJLHVCQUFZO1lBRTlCLE1BQUtGLGNBQWMsQ0FBQ0gsYUFBYUM7UUFDbkMsSUFFQUssd0JBQUFBLGtCQUFpQixTQUFDbEIsT0FBT0M7WUFDdkIsSUFBTSxBQUFFa0IsVUFBWW5CLE1BQVptQjtZQUVSLE9BQVFBO2dCQUNOLEtBQUszQjtvQkFBaUI7d0JBQ3BCLElBQU00QixhQUFhLE1BQUtDLFlBQVk7d0JBRXBDLElBQUlELFlBQVk7NEJBQ2RFLFdBQVdDLGNBQWM7d0JBQzNCO3dCQUVBO29CQUNGO2dCQUVBLEtBQUs5QjtvQkFBbUI7d0JBQ3RCLE1BQUsrQixvQkFBb0I7d0JBRXpCLE1BQUtsQixhQUFhO3dCQUVsQixNQUFLQyxXQUFXO3dCQUVoQjtvQkFDRjtnQkFFQSxLQUFLWjtvQkFBcUI7d0JBQ3hCLE1BQUs4QixtQkFBbUI7d0JBRXhCLE1BQUtuQixhQUFhO3dCQUVsQixNQUFLQyxXQUFXO3dCQUVoQjtvQkFDRjtnQkFFQSxLQUFLakI7Z0JBQ0wsS0FBS087b0JBQXNCO3dCQUN6QixNQUFLWSxvQkFBb0I7d0JBRXpCLE1BQUtILGFBQWE7d0JBRWxCLE1BQUtDLFdBQVc7d0JBRWhCO29CQUNGO2dCQUVBLEtBQUtiO2dCQUNMLEtBQUtFO29CQUFxQjt3QkFDeEIsTUFBS1MsbUJBQW1CO3dCQUV4QixNQUFLQyxhQUFhO3dCQUVsQixNQUFLQyxXQUFXO3dCQUVoQjtvQkFDRjtZQUNGO1FBQ0YsSUFFQW1CLHdCQUFBQSxpQkFBZ0IsU0FBQzFCLE9BQU9DO1lBQ3RCLElBQU0wQixVQUFVO1lBRWhCLE1BQUtDLElBQUksQ0FBQ0Q7UUFDWjs7O2tCQTdGSTdCOztZQStGSjhCLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBS0QsVUFBQUEsaUVBQVU7Z0JBQ2IsSUFBTUMsT0FBT0MsSUFBQUEsY0FBTyxLQUNkQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNDLGdCQUFnQk4sTUFDaEJPLHdCQUF3QkwsWUFDeEJNLHlCQUF5QkosYUFBYSxHQUFHO2dCQUUvQyxJQUFJLENBQUNLLGdCQUFnQixDQUFDSCxlQUFlQyx1QkFBdUJDO2dCQUU1RCxJQUFJVCxTQUFTO29CQUNYO2dCQUNGO2dCQUVBLElBQUksQ0FBQ1csS0FBSztZQUNaOzs7WUFFQUEsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJQyxZQUFZLElBQUksQ0FBQ0MsWUFBWTtnQkFFakMsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JWLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDVSxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsbUJBQW1CRixlQUFlWCxhQUNsQ2MsUUFBUSxBQUFDUCxZQUFZTSxtQkFDWCxDQUFDLElBQ0MsQ0FBQztnQkFFbkJOLGFBQWFPO2dCQUViLElBQUksQ0FBQ0MsUUFBUSxDQUFDUixXQUFXRTtnQkFFekJPLHNCQUFzQjtvQkFDcEJULGFBQWFPO29CQUViLE1BQUtDLFFBQVEsQ0FBQ1IsV0FBV0U7Z0JBQzNCO1lBQ0Y7OztZQUVBbEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1nQyxZQUFZO2dCQUVsQixJQUFJLENBQUNVLFlBQVksQ0FBQ1Y7WUFDcEI7OztZQUVBakMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUk0QyxpQkFBaUIsSUFBSSxDQUFDQyxpQkFBaUI7Z0JBRTNDLElBQUlELG1CQUFtQixNQUFNO29CQUMzQkUscUJBQXFCRjtvQkFFckJBLGlCQUFpQjtvQkFFakIsSUFBSSxDQUFDRyxpQkFBaUIsQ0FBQ0g7Z0JBQ3pCO1lBQ0Y7OztZQUVBbkMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVILFdBQVcsRUFBRUMsU0FBUzs7Z0JBQ25DLElBQUksQ0FBQ1AsYUFBYTtnQkFFbEIsSUFBSWdELE9BQU9DLFlBQVlDLEdBQUc7Z0JBRTFCLElBQU1DLE9BQU8sU0FBQ0Q7b0JBQ1osSUFBTUUsWUFBWUYsTUFBTUY7b0JBRXhCMUMsY0FBY0EsY0FBYytDLDZCQUFrQixHQUFHRDtvQkFFakQsSUFBSTlDLGNBQWMsR0FBRzt3QkFDbkIsTUFBS04sYUFBYTt3QkFFbEI7b0JBQ0Y7b0JBRUEsSUFBSWlDLFlBQVksTUFBS0MsWUFBWTtvQkFFakNELFlBQVlBLFlBQVkxQixZQUFZRCxjQUFjZ0QsMkJBQWdCLEdBQUdGO29CQUVyRUosT0FBT0UsS0FBTSxHQUFHO29CQUVoQixNQUFLUCxZQUFZLENBQUNWO29CQUVsQixJQUFNVyxpQkFBaUJGLHNCQUFzQlM7b0JBRTdDLE1BQUtKLGlCQUFpQixDQUFDSDtnQkFDekI7Z0JBRUEsSUFBTUEsaUJBQWlCRixzQkFBc0JTO2dCQUU3QyxJQUFJLENBQUNKLGlCQUFpQixDQUFDSDtZQUN6Qjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGlCQUFpQixDQUFDLElBQUksQ0FBQ3RELHNCQUFzQjtnQkFDbEQsSUFBSSxDQUFDdUQsa0JBQWtCLENBQUMsSUFBSSxDQUFDaEUsdUJBQXVCO2dCQUNwRCxJQUFJLENBQUNpRSxlQUFlLENBQUMsSUFBSSxDQUFDaEQsb0JBQW9CO2dCQUM5QyxJQUFJLENBQUNpRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUN2RCxzQkFBc0I7WUFDcEQ7OztZQUVBd0QsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUFDM0Qsc0JBQXNCO2dCQUNuRCxJQUFJLENBQUM0RCxtQkFBbUIsQ0FBQyxJQUFJLENBQUNyRSx1QkFBdUI7Z0JBQ3JELElBQUksQ0FBQ3NFLGdCQUFnQixDQUFDLElBQUksQ0FBQ3JELG9CQUFvQjtnQkFDL0MsSUFBSSxDQUFDc0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDNUQsc0JBQXNCO1lBQ3JEOzs7WUFFQXlDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVELGlCQUFtQixJQUFJLENBQUNxQixRQUFRLEdBQWhDckI7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JILGNBQWM7Z0JBQzlCLElBQUksQ0FBQ3NCLFdBQVcsQ0FBQztvQkFDZnRCLGdCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdkIsaUJBQWlCO2dCQUV2QixJQUFJLENBQUN3QixRQUFRLENBQUM7b0JBQ1p4QixnQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUF5QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxXQUFXO2dCQUVoQixJQUFJLENBQUNmLGNBQWM7Z0JBRW5CLElBQUksQ0FBQ2dCLFFBQVEsQ0FBQyxJQUFJLENBQUNuRCxhQUFhLEVBQUUsSUFBSTtnQkFFdENvRCxZQUFNLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUM3RCxjQUFjO1lBQ3RDOzs7WUFFQThELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFlBQVk7Z0JBRWpCLElBQUksQ0FBQ2YsZUFBZTtnQkFFcEIsSUFBSSxDQUFDZ0IsU0FBUyxDQUFDLElBQUksQ0FBQ3hELGFBQWEsRUFBRSxJQUFJO2dCQUV2Q29ELFlBQU0sQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQ2pFLGNBQWM7WUFDdkM7OztZQUVBa0UsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0xRCxnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhLENBQUMyRCxJQUFJLENBQUMsSUFBSTtnQkFFbEQscUJBRUUsb0JBQUNDLGlCQUFXO29CQUFDNUQsZUFBZUE7O1lBR2hDOzs7WUFFQTZELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7WUFDcEI7OztXQTVQSTFGO3FCQUFhMkYsYUFBTztBQThQeEIsaUJBOVBJM0YsTUE4UEc0RixXQUFVO0FBRWpCLGlCQWhRSTVGLE1BZ1FHNkYscUJBQW9CLEVBQUU7QUFFN0IsaUJBbFFJN0YsTUFrUUc4RixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtBQUlGQyxPQUFPQyxNQUFNLENBQUNqRyxLQUFLa0csU0FBUyxFQUFFQyx1QkFBVztBQUN6Q0gsT0FBT0MsTUFBTSxDQUFDakcsS0FBS2tHLFNBQVMsRUFBRUUsNEJBQWdCO0lBRTlDLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNyRyx5QkFhSGIsa0JBRWxCbUgsMkJBQWMsRUFJUWpILGdDQUlBQyxnQ0FJQUMifQ==