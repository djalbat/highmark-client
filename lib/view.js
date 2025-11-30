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
        }), _define_property(_this, "dragStartCustomHandler", function(event, element, top, left) {
            var scrollTop = _this.getScrollTop(), scrollLeft = _this.getScrollLeft(), startScrollTop = scrollTop, startScrollLeft = scrollLeft; ///
            _this.setStartScrollTop(startScrollTop);
            _this.setStartScrollLeft(startScrollLeft);
        }), _define_property(_this, "dragDownCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
        }), _define_property(_this, "dragUpCustomHandler", function(event, element, top, left) {
            var startScrollTop = _this.getStartScrollTop();
            if (startScrollTop === null) {
                return;
            }
            var scrollTop = startScrollTop - top;
            _this.setScrollTop(scrollTop);
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
                this.onCustomDragUp(this.dragUpCustomHandler);
                this.onCustomDragDown(this.dragDownCustomHandler);
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
                this.offCustomDragUp(this.dragUpCustomHandler);
                this.offCustomDragDown(this.dragDownCustomHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0Wm9vbSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBVUF9ESVJFQ1RJT04sIERPV05fRElSRUNUSU9OLCBTQ1JPTExfVE9QX0RFTFRBLCBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWUsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcCwgLy8vXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgLy8vXG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBub051ZGdlID0gdHJ1ZTtcblxuICAgIHRoaXMuem9vbShub051ZGdlKTtcbiAgfVxuXG4gIHpvb20obm9OdWRnZSA9IGZhbHNlKSB7XG4gICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbiAgICAgICAgICBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnRTY2FsZSA9IHpvb20sIC8vL1xuICAgICAgICAgIHByZXZpZXdQYW5lSW5uZXJXaWR0aCA9IGlubmVyV2lkdGgsIC8vL1xuICAgICAgICAgIHByZXZpZXdQYW5lSW5uZXJIZWlnaHQgPSBpbm5lckhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnNjYWxlRG9jdW1lbnREaXYoZG9jdW1lbnRTY2FsZSwgcHJldmlld1BhbmVJbm5lcldpZHRoLCBwcmV2aWV3UGFuZUlubmVySGVpZ2h0KTtcblxuICAgIGlmIChub051ZGdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5udWRnZSgpO1xuICB9XG5cbiAgbnVkZ2UoKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQsXG4gICAgICAgICAgZGVsdGEgPSAoc2Nyb2xsVG9wIDwgbWF4aW11bVNjcm9sbFRvcCkgP1xuICAgICAgICAgICAgICAgICAgICArMSA6XG4gICAgICAgICAgICAgICAgICAgICAgLTE7XG5cbiAgICBzY3JvbGxUb3AgKz0gZGVsdGE7XG5cbiAgICB0aGlzLnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc2Nyb2xsVG9wIC09IGRlbHRhO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG4gICAgfSk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lID0gdGhpcy5nZXRBbmltYXRpb25GcmFtZSgpO1xuXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG5cbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHRoZW4gPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIGNvbnN0IHN0ZXAgPSAobm93KSA9PiB7XG4gICAgICBjb25zdCB0aW1lRGVsdGEgPSBub3cgLSB0aGVuO1xuXG4gICAgICBzY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkIC0gU0NST0xMX1NQRUVEX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBpZiAoc2Nyb2xsU3BlZWQgPCAwKSB7XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIGRpcmVjdGlvbiAqIHNjcm9sbFNwZWVkICogU0NST0xMX1RPUF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGVuYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZGlzYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uRnJhbWUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBhbmltYXRpb25GcmFtZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsTGVmdCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBhbmltYXRpb25GcmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZW5hYmxlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5kaXNhYmxlR2VzdHVyZXMoKTtcblxuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPERvY3VtZW50RGl2IHJlc2l6ZUhhbmRsZXI9e3Jlc2l6ZUhhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICB9XG4gICAgXG5gO1xuXG4vLyB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuLy9cbi8vIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIHRoaXMudXBkYXRlWm9vbSgpO1xuLy8gfVxuLy9cbi8vIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICAvLy9cbi8vIH1cbi8vXG4vLyBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG4vL1xuLy8gICBpZiAoZnVsbFNjcmVlbikge1xuLy8gICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbi8vXG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbi8vICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbi8vICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG4vL1xuLy8gICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuLy8gfVxuLy9cbi8vIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4vLyAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4vLyAgICAgICAgIHpvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pOyAgLy8vXG4vL1xuLy8gICBjb250cm9sbGVyLnpvb20oem9vbSk7XG4vLyB9XG4vL1xuLy8gZW50ZXJGdWxsU2NyZWVuKCkge1xuLy8gICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKCk7XG4vLyB9XG4vL1xuLy8gZW5hYmxlR2VzdHVyZXMoKSB7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vIH1cbi8vXG4vLyBkaXNhYmxlR2VzdHVyZXMoKSB7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy8gfVxuLy9cbi8vIGdldFN0YXJ0Wm9vbSgpIHtcbi8vICAgY29uc3QgeyBzdGFydFpvb20gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbi8vXG4vLyAgIHJldHVybiBzdGFydFpvb207XG4vLyB9XG4vL1xuLy8gc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuLy8gICB0aGlzLnVwZGF0ZVN0YXRlKHtcbi8vICAgICBzdGFydFpvb21cbi8vICAgfSk7XG4vLyB9XG4vL1xuIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvdXIiLCJwcmV2aWV3UGFuZVNjaGVtZSIsInNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsInNwcGVkIiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInN0b3BTY3JvbGxpbmciLCJzY3JvbGxUb1RvcCIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsInNjcm9sbFNwZWVkIiwiZGlyZWN0aW9uIiwiRE9XTl9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic3RhcnRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbExlZnQiLCJzZXRTdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsTGVmdCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJjb250cm9sbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dMYXN0RGl2aXNpb25EaXYiLCJyZXNpemVIYW5kbGVyIiwibm9OdWRnZSIsInpvb20iLCJnZXRab29tIiwiaW5uZXJXaWR0aCIsImdldElubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldElubmVySGVpZ2h0IiwiZG9jdW1lbnRTY2FsZSIsInByZXZpZXdQYW5lSW5uZXJXaWR0aCIsInByZXZpZXdQYW5lSW5uZXJIZWlnaHQiLCJzY2FsZURvY3VtZW50RGl2IiwibnVkZ2UiLCJzY3JvbGxIZWlnaHQiLCJnZXRTY3JvbGxIZWlnaHQiLCJtYXhpbXVtU2Nyb2xsVG9wIiwiZGVsdGEiLCJzY3JvbGxUbyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGlvbkZyYW1lIiwiZ2V0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEFuaW1hdGlvbkZyYW1lIiwidGhlbiIsInBlcmZvcm1hbmNlIiwibm93Iiwic3RlcCIsInRpbWVEZWx0YSIsIlNDUk9MTF9TUEVFRF9ERUxUQSIsIlNDUk9MTF9UT1BfREVMVEEiLCJlbmFibGVHZXN0dXJlcyIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbURyYWdTdGFydCIsImRpc2FibGVHZXN0dXJlcyIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21Td2lwZVJpZ2h0Iiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJnZXRTdGF0ZSIsImdldFN0YXJ0U2Nyb2xsTGVmdCIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25SZXNpemUiLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsIm9mZlJlc2l6ZSIsIm9mZktleURvd24iLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkRvY3VtZW50RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJ3aXRoU3R5bGUiLCJzY3JvbGxiYXJNaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdVdBLFVBaUNBLHFFQUFxRTtDQUNyRSxFQUFFO0NBQ0YsdURBQXVEO0NBQ3ZELEVBQUU7Q0FDRiwyQkFBMkI7Q0FDM0IsRUFBRTtDQUNGLDRCQUE0QjtDQUM1QixFQUFFO0NBQ0Ysd0RBQXdEO0NBQ3hELEVBQUU7Q0FDRixzRUFBc0U7Q0FDdEUsRUFBRTtDQUNGLHdEQUF3RDtDQUN4RCx1QkFBdUI7Q0FDdkIsSUFBSTtDQUNKLEVBQUU7Q0FDRiw0REFBNEQ7Q0FDNUQsUUFBUTtDQUNSLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELDRDQUE0QztDQUM1QyxFQUFFO0NBQ0Ysc0JBQXNCO0NBQ3RCLG1DQUFtQztDQUNuQyxFQUFFO0NBQ0YsY0FBYztDQUNkLE1BQU07Q0FDTixJQUFJO0NBQ0osRUFBRTtDQUNGLGtEQUFrRDtDQUNsRCw0QkFBNEI7Q0FDNUIsZ0NBQWdDO0NBQ2hDLEVBQUU7Q0FDRixrQ0FBa0M7Q0FDbEMsSUFBSTtDQUNKLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsMkNBQTJDO0NBQzNDLG9EQUFvRDtDQUNwRCxFQUFFO0NBQ0YsMkJBQTJCO0NBQzNCLElBQUk7Q0FDSixFQUFFO0NBQ0Ysc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixJQUFJO0NBQ0osRUFBRTtDQUNGLHFCQUFxQjtDQUNyQixxREFBcUQ7Q0FDckQseURBQXlEO0NBQ3pELHlEQUF5RDtDQUN6RCwyREFBMkQ7Q0FDM0QseURBQXlEO0NBQ3pELDJEQUEyRDtDQUMzRCx5REFBeUQ7Q0FDekQsSUFBSTtDQUNKLEVBQUU7Q0FDRixzQkFBc0I7Q0FDdEIsb0RBQW9EO0NBQ3BELHdEQUF3RDtDQUN4RCwwREFBMEQ7Q0FDMUQsc0RBQXNEO0NBQ3RELDBEQUEwRDtDQUMxRCwwREFBMEQ7Q0FDMUQsNERBQTREO0NBQzVELDBEQUEwRDtD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