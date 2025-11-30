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
        }), _define_property(_this, "dragUpCustomHandler", function(event, element, top, left) {
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
                this.onCustomDragUp(this.dragUpCustomHandler);
                this.onCustomDragStart(this.dragStartCustomHandler);
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
                this.onCustomSwipeDown(this.swipeDownCustomHandler);
                this.onCustomSwipeRight(this.swipeRightCustomHandler);
            }
        },
        {
            key: "disableGestures",
            value: function disableGestures() {
                this.offCustomDragUp(this.dragUpCustomHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0Wm9vbSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBVUF9ESVJFQ1RJT04sIERPV05fRElSRUNUSU9OLCBTQ1JPTExfVE9QX0RFTFRBLCBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWUsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcCwgLy8vXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBzdGFydFNjcm9sbExlZnQgLSBsZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzaXplSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5vTnVkZ2UgPSB0cnVlO1xuXG4gICAgdGhpcy56b29tKG5vTnVkZ2UpO1xuICB9XG5cbiAgem9vbShub051ZGdlID0gZmFsc2UpIHtcbiAgICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudFNjYWxlID0gem9vbSwgLy8vXG4gICAgICAgICAgcHJldmlld1BhbmVJbm5lcldpZHRoID0gaW5uZXJXaWR0aCwgLy8vXG4gICAgICAgICAgcHJldmlld1BhbmVJbm5lckhlaWdodCA9IGlubmVySGVpZ2h0OyAvLy9cblxuICAgIHRoaXMuc2NhbGVEb2N1bWVudERpdihkb2N1bWVudFNjYWxlLCBwcmV2aWV3UGFuZUlubmVyV2lkdGgsIHByZXZpZXdQYW5lSW5uZXJIZWlnaHQpO1xuXG4gICAgaWYgKG5vTnVkZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm51ZGdlKCk7XG4gIH1cblxuICBudWRnZSgpIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQgLSBpbm5lckhlaWdodCxcbiAgICAgICAgICBkZWx0YSA9IChzY3JvbGxUb3AgPCBtYXhpbXVtU2Nyb2xsVG9wKSA/XG4gICAgICAgICAgICAgICAgICAgICsxIDpcbiAgICAgICAgICAgICAgICAgICAgICAtMTtcblxuICAgIHNjcm9sbFRvcCArPSBkZWx0YTtcblxuICAgIHRoaXMuc2Nyb2xsVG8oc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzY3JvbGxUb3AgLT0gZGVsdGE7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG8oc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWUgPSB0aGlzLmdldEFuaW1hdGlvbkZyYW1lKCk7XG5cbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcblxuICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBsZXQgdGhlbiA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgY29uc3Qgc3RlcCA9IChub3cpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IG5vdyAtIHRoZW47XG5cbiAgICAgIHNjcm9sbFNwZWVkID0gc2Nyb2xsU3BlZWQgLSBTQ1JPTExfU1BFRURfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIGlmIChzY3JvbGxTcGVlZCA8IDApIHtcbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKTtcblxuICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wICsgZGlyZWN0aW9uICogc2Nyb2xsU3BlZWQgKiBTQ1JPTExfVE9QX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgZW5hYmxlR2VzdHVyZXMoKSB7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZGlzYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uRnJhbWUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBhbmltYXRpb25GcmFtZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsTGVmdCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBhbmltYXRpb25GcmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZW5hYmxlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5kaXNhYmxlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPERvY3VtZW50RGl2IHJlc2l6ZUhhbmRsZXI9e3Jlc2l6ZUhhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICB9XG4gICAgXG5gO1xuXG4vLyB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuLy9cbi8vIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIHRoaXMudXBkYXRlWm9vbSgpO1xuLy8gfVxuLy9cbi8vIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICAvLy9cbi8vIH1cbi8vXG4vLyBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG4vL1xuLy8gICBpZiAoZnVsbFNjcmVlbikge1xuLy8gICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbi8vXG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbi8vICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbi8vICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG4vL1xuLy8gICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuLy8gfVxuLy9cbi8vIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4vLyAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4vLyAgICAgICAgIHpvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pOyAgLy8vXG4vL1xuLy8gICBjb250cm9sbGVyLnpvb20oem9vbSk7XG4vLyB9XG4vL1xuLy8gZW50ZXJGdWxsU2NyZWVuKCkge1xuLy8gICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4vLyB9XG4vL1xuLy8gZW5hYmxlR2VzdHVyZXMoKSB7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vIH1cbi8vXG4vLyBkaXNhYmxlR2VzdHVyZXMoKSB7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRHJhZyh0aGlzLmRyYWdDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vIH1cbi8vXG4vLyBnZXRTdGFydFpvb20oKSB7XG4vLyAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG4vL1xuLy8gICByZXR1cm4gc3RhcnRab29tO1xuLy8gfVxuLy9cbi8vIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbi8vICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4vLyAgICAgc3RhcnRab29tXG4vLyAgIH0pO1xuLy8gfVxuLy9cbiJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kQ29sb3VyIiwicHJldmlld1BhbmVTY2hlbWUiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIiwiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRvcCIsImxlZnQiLCJzcHBlZCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJzdG9wU2Nyb2xsaW5nIiwic2Nyb2xsVG9Ub3AiLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic3BlZWQiLCJzY3JvbGxTcGVlZCIsImRpcmVjdGlvbiIsIkRPV05fRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInN0YXJ0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxMZWZ0Iiwic2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbExlZnQiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxMZWZ0IiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJzZXRTY3JvbGxMZWZ0Iiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInJlc2l6ZUhhbmRsZXIiLCJub051ZGdlIiwiem9vbSIsImdldFpvb20iLCJpbm5lcldpZHRoIiwiZ2V0SW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJkb2N1bWVudFNjYWxlIiwicHJldmlld1BhbmVJbm5lcldpZHRoIiwicHJldmlld1BhbmVJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJudWRnZSIsInNjcm9sbEhlaWdodCIsImdldFNjcm9sbEhlaWdodCIsIm1heGltdW1TY3JvbGxUb3AiLCJkZWx0YSIsInNjcm9sbFRvIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRnJhbWUiLCJnZXRBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0QW5pbWF0aW9uRnJhbWUiLCJ0aGVuIiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGVwIiwidGltZURlbHRhIiwiU0NST0xMX1NQRUVEX0RFTFRBIiwiU0NST0xMX1RPUF9ERUxUQSIsImVuYWJsZUdlc3R1cmVzIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJkaXNhYmxlR2VzdHVyZXMiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJvblJlc2l6ZSIsIndpbmRvdyIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwib2ZmUmVzaXplIiwib2ZmS2V5RG93biIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiRG9jdW1lbnREaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsInNjcm9sbGJhck1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3VkEsVUFpQ0EscUVBQXFFO0NBQ3JFLEVBQUU7Q0FDRix1REFBdUQ7Q0FDdkQsRUFBRTtDQUNGLDJCQUEyQjtDQUMzQixFQUFFO0NBQ0YsNEJBQTRCO0NBQzVCLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsRUFBRTtDQUNGLHNFQUFzRTtDQUN0RSxFQUFFO0NBQ0Ysd0RBQXdEO0NBQ3hELHVCQUF1QjtDQUN2QixJQUFJO0NBQ0osRUFBRTtDQUNGLDREQUE0RDtDQUM1RCxRQUFRO0NBQ1IsSUFBSTtDQUNKLEVBQUU7Q0FDRiw0REFBNEQ7Q0FD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