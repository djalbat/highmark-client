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
        }), _define_property(_this, "dragStartCustomHandler", function(event, element, top, left) {
            var scrollTop = _this.getScrollTop(), scrollLeft = _this.getScrollLeft(), startScrollTop = scrollTop, startScrollLeft = scrollLeft; ///
            _this.setStartScrollTop(startScrollTop);
            _this.setStartScrollLeft(startScrollLeft);
        }), _define_property(_this, "dragCustomHandler", function(event, element, top, left) {
            var startScrollLeft = _this.getStartScrollLeft(), startScrollTop = _this.getStartScrollTop(), scrollLeft = startScrollLeft - left, scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
            _this.setScrollLeft(scrollLeft);
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
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
                this.onCustomDrag(this.dragCustomHandler);
                this.onCustomDragStart(this.dragStartCustomHandler);
            }
        },
        {
            key: "disableGestures",
            value: function disableGestures() {
                this.offCustomSwipeUp(this.swipeUpCustomHandler);
                this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.offCustomSwipeDown(this.swipeDownCustomHandler);
                this.offCustomSwipeRight(this.swipeRightCustomHandler);
                this.offCustomDrag(this.dragCustomHandler);
                this.offCustomDragStart(this.dragStartCustomHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0Wm9vbSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBVUF9ESVJFQ1RJT04sIERPV05fRElSRUNUSU9OLCBTQ1JPTExfVE9QX0RFTFRBLCBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWUsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcCwgLy8vXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBub051ZGdlID0gdHJ1ZTtcblxuICAgIHRoaXMuem9vbShub051ZGdlKTtcbiAgfVxuXG4gIHpvb20obm9OdWRnZSA9IGZhbHNlKSB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnRTY2FsZSA9IHpvb20sIC8vL1xuICAgICAgICAgIHByZXZpZXdQYW5lSW5uZXJXaWR0aCA9IGlubmVyV2lkdGgsIC8vL1xuICAgICAgICAgIHByZXZpZXdQYW5lSW5uZXJIZWlnaHQgPSBpbm5lckhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnNjYWxlRG9jdW1lbnREaXYoZG9jdW1lbnRTY2FsZSwgcHJldmlld1BhbmVJbm5lcldpZHRoLCBwcmV2aWV3UGFuZUlubmVySGVpZ2h0KTtcblxuICAgIGlmIChub051ZGdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5udWRnZSgpO1xuICB9XG5cbiAgbnVkZ2UoKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQsXG4gICAgICAgICAgZGVsdGEgPSAoc2Nyb2xsVG9wIDwgbWF4aW11bVNjcm9sbFRvcCkgP1xuICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgLTE7XG5cbiAgICBzY3JvbGxUb3AgKz0gZGVsdGE7XG5cbiAgICB0aGlzLnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc2Nyb2xsVG9wIC09IGRlbHRhO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gICAgfSk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lID0gdGhpcy5nZXRBbmltYXRpb25GcmFtZSgpO1xuXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG5cbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHRoZW4gPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGNvbnN0IHN0ZXAgPSAobm93KSA9PiB7XG4gICAgICBjb25zdCB0aW1lRGVsdGEgPSBub3cgLSB0aGVuO1xuXG4gICAgICBzY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkIC0gU0NST0xMX1NQRUVEX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBpZiAoc2Nyb2xsU3BlZWQgPCAwKSB7XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIGRpcmVjdGlvbiAqIHNjcm9sbFNwZWVkICogU0NST0xMX1RPUF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGVuYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWcodGhpcy5kcmFnQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZGlzYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZyh0aGlzLmRyYWdDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgY29uc3QgeyBhbmltYXRpb25GcmFtZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbkZyYW1lO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxMZWZ0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxMZWZ0O1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWUsXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5lbmFibGVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5vZmZSZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8RG9jdW1lbnREaXYgcmVzaXplSGFuZGxlcj17cmVzaXplSGFuZGxlcn0gLz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG4gIFxuICAke3Njcm9sbGJhck1peGlufVxuICBcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICAgIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIH1cbiAgICBcbmA7XG5cbi8vIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIHRoaXMub25DdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcbi8vXG4vLyB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbi8vICAgdGhpcy51cGRhdGVab29tKCk7XG4vLyB9XG4vL1xuLy8gc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4vLyAgIC8vL1xuLy8gfVxuLy9cbi8vIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcbi8vXG4vLyAgIGlmIChmdWxsU2NyZWVuKSB7XG4vLyAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuLy9cbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuLy8gICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuLy8gICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cbi8vXG4vLyAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4vLyB9XG4vL1xuLy8gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbi8vICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbi8vICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7ICAvLy9cbi8vXG4vLyAgIGNvbnRyb2xsZXIuem9vbSh6b29tKTtcbi8vIH1cbi8vXG4vLyBlbnRlckZ1bGxTY3JlZW4oKSB7XG4vLyAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbi8vIH1cbi8vXG4vLyBlbmFibGVHZXN0dXJlcygpIHtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy8gfVxuLy9cbi8vIGRpc2FibGVHZXN0dXJlcygpIHtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnKHRoaXMuZHJhZ0N1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy8gfVxuLy9cbi8vIGdldFN0YXJ0Wm9vbSgpIHtcbi8vICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbi8vXG4vLyAgIHJldHVybiBzdGFydFpvb207XG4vLyB9XG4vL1xuLy8gc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuLy8gICB0aGlzLnVwZGF0ZVN0YXRlKHtcbi8vICAgICBzdGFydFpvb21cbi8vICAgfSk7XG4vLyB9XG4vL1xuIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvdXIiLCJwcmV2aWV3UGFuZVNjaGVtZSIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsInNwcGVkIiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInN0b3BTY3JvbGxpbmciLCJzY3JvbGxUb1RvcCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsInNjcm9sbFNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic3RhcnRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbExlZnQiLCJzZXRTdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsTGVmdCIsImRyYWdDdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxMZWZ0IiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJzZXRTY3JvbGxMZWZ0Iiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInJlc2l6ZUhhbmRsZXIiLCJub051ZGdlIiwiem9vbSIsImdldFpvb20iLCJpbm5lcldpZHRoIiwiZ2V0SW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJkb2N1bWVudFNjYWxlIiwicHJldmlld1BhbmVJbm5lcldpZHRoIiwicHJldmlld1BhbmVJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJudWRnZSIsInNjcm9sbEhlaWdodCIsImdldFNjcm9sbEhlaWdodCIsIm1heGltdW1TY3JvbGxUb3AiLCJkZWx0YSIsInNjcm9sbFRvIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWUiLCJnZXRBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0QW5pbWF0aW9uRnJhbWUiLCJ0aGVuIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGVwIiwidGltZURlbHRhIiwiU0NST0xMX1NQRUVEX0RFTFRBIiwiU0NST0xMX1RPUF9ERUxUQSIsImVuYWJsZUdlc3R1cmVzIiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tRHJhZyIsIm9uQ3VzdG9tRHJhZ1N0YXJ0IiwiZGlzYWJsZUdlc3R1cmVzIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJvZmZDdXN0b21EcmFnIiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uUmVzaXplIiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJvZmZSZXNpemUiLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJEb2N1bWVudERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwic2Nyb2xsYmFyTWl4aW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdWQSxVQWlDQSxxRUFBcUU7Q0FDckUsRUFBRTtDQUNGLHVEQUF1RDtDQUN2RCxFQUFFO0NBQ0YsMkJBQTJCO0NBQzNCLEVBQUU7Q0FDRiw0QkFBNEI7Q0FDNUIsRUFBRTtDQUNGLHdEQUF3RDtDQUN4RCxFQUFFO0NBQ0Ysc0VBQXNFO0NBQ3RFLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsdUJBQXVCO0NBQ3ZCLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELFFBQVE7Q0FDUixJQUFJO0NBQ0osRUFBRTtDQUNGLDREQUE0RDtDQUM1RCw0Q0FBNEM7Q0FDNUMs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