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
            console.log(speed, direction);
            _this.startScrolling(scrollSpeed, direction);
        }), _define_property(_this, "swipeUpCustomHandler", function(event, element, top, left, speed) {
            var scrollSpeed = speed, direction = _constants.UP_DIRECTION;
            console.log(speed, direction);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0Wm9vbSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBVUF9ESVJFQ1RJT04sIERPV05fRElSRUNUSU9OLCBTQ1JPTExfVE9QX0RFTFRBLCBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWUsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4gICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgY29uc29sZS5sb2coc3BlZWQsIGRpcmVjdGlvbik7XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgY29uc29sZS5sb2coc3BlZWQsIGRpcmVjdGlvbik7XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgICAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgbm9OdWRnZSA9IHRydWU7XG5cbiAgICB0aGlzLnpvb20obm9OdWRnZSk7XG4gIH1cblxuICB6b29tKG5vTnVkZ2UgPSBmYWxzZSkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50U2NhbGUgPSB6b29tLCAvLy9cbiAgICAgICAgICBwcmV2aWV3UGFuZUlubmVyV2lkdGggPSBpbm5lcldpZHRoLCAvLy9cbiAgICAgICAgICBwcmV2aWV3UGFuZUlubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5zY2FsZURvY3VtZW50RGl2KGRvY3VtZW50U2NhbGUsIHByZXZpZXdQYW5lSW5uZXJXaWR0aCwgcHJldmlld1BhbmVJbm5lckhlaWdodCk7XG5cbiAgICBpZiAobm9OdWRnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubnVkZ2UoKTtcbiAgfVxuXG4gIG51ZGdlKCkge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0LFxuICAgICAgICAgIGRlbHRhID0gKHNjcm9sbFRvcCA8IG1heGltdW1TY3JvbGxUb3ApID9cbiAgICAgICAgICAgICAgICAgICAgKzEgOlxuICAgICAgICAgICAgICAgICAgICAgIC0xO1xuXG4gICAgc2Nyb2xsVG9wICs9IGRlbHRhO1xuXG4gICAgdGhpcy5zY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHNjcm9sbFRvcCAtPSBkZWx0YTtcblxuICAgICAgdGhpcy5zY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBhbmltYXRpb25GcmFtZSA9IHRoaXMuZ2V0QW5pbWF0aW9uRnJhbWUoKTtcblxuICAgIGlmIChhbmltYXRpb25GcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCB0aGVuID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICBjb25zdCBzdGVwID0gKG5vdykgPT4ge1xuICAgICAgY29uc3QgdGltZURlbHRhID0gbm93IC0gdGhlbjtcblxuICAgICAgc2Nyb2xsU3BlZWQgPSBzY3JvbGxTcGVlZCAtIFNDUk9MTF9TUEVFRF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgaWYgKHNjcm9sbFNwZWVkIDwgMCkge1xuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgKyBkaXJlY3Rpb24gKiBzY3JvbGxTcGVlZCAqIFNDUk9MTF9UT1BfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICBlbmFibGVHZXN0dXJlcygpIHtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZGlzYWJsZUdlc3R1cmVzKCkge1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgY29uc3QgeyBhbmltYXRpb25GcmFtZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbkZyYW1lO1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhbmltYXRpb25GcmFtZVxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5lbmFibGVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLmRpc2FibGVHZXN0dXJlcygpO1xuXG4gICAgdGhpcy5vZmZSZXNpemUodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8RG9jdW1lbnREaXYgcmVzaXplSGFuZGxlcj17cmVzaXplSGFuZGxlcn0gLz5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG91cn07XG4gIFxuICAke3Njcm9sbGJhck1peGlufVxuICBcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICAgIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIH1cbiAgICBcbmA7XG5cbi8vIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuLy8gICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG4vL1xuLy8gICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4vLyB9XG4vL1xuLy8gc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbi8vICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4vLyAgICAgc3RhcnRTY3JvbGxUb3Bcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gLFxuLy8gc3RhcnRTY3JvbGxUb3AgPSBudWxsXG4vL1xuLy8gICAsXG4vLyAgIHN0YXJ0U2Nyb2xsVG9wXG4vL1xuLy8gdGhpcy5vbkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG4vL1xuLy8gdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuLy9cbi8vIHRoaXMuZGlzYWJsZUZ1bGxTY3JlZW4oKTtcbi8vXG4vLyB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIHRoaXMub2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyBmdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuLy8gICB0aGlzLnVwZGF0ZVpvb20oKTtcbi8vIH1cbi8vXG4vLyBzaW5nbGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgLy8vXG4vLyB9XG4vL1xuLy8gZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4vLyAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuLy9cbi8vICAgaWYgKGZ1bGxTY3JlZW4pIHtcbi8vICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4vL1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIHBpbmNoU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4vLyAgICAgICAgIHN0YXJ0Wm9vbSA9IHpvb207IC8vL1xuLy9cbi8vICAgdGhpcy5zZXRTdGFydFpvb20oc3RhcnRab29tKTtcbi8vIH1cbi8vXG4vLyBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuLy8gICBjb25zdCBzdGFydFpvb20gPSB0aGlzLmdldFN0YXJ0Wm9vbSgpLFxuLy8gICAgICAgICB6b29tID0gc3RhcnRab29tICogTWF0aC5zcXJ0KHJhdGlvKTsgIC8vL1xuLy9cbi8vICAgY29udHJvbGxlci56b29tKHpvb20pO1xuLy8gfVxuLy9cbi8vIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuLy8gICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG4vL1xuLy8gICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbi8vIH1cbi8vXG4vLyBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcbi8vXG4vLyAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy9cbi8vICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG4vL1xuLy8gICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuLy8gfVxuLy9cbi8vIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcbi8vXG4vLyAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy9cbi8vICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG4vL1xuLy8gICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuLy8gfVxuLy9cbi8vIGVudGVyRnVsbFNjcmVlbigpIHtcbi8vICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuLy8gfVxuLy9cbi8vIGVuYWJsZUdlc3R1cmVzKCkge1xuLy8gICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy8gfVxuLy9cbi8vIGRpc2FibGVHZXN0dXJlcygpIHtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4vLyB9XG4vL1xuLy8gZ2V0U3RhcnRab29tKCkge1xuLy8gICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuLy9cbi8vICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbi8vIH1cbi8vXG4vLyBzZXRTdGFydFpvb20oc3RhcnRab29tKSB7XG4vLyAgIHRoaXMudXBkYXRlU3RhdGUoe1xuLy8gICAgIHN0YXJ0Wm9vbVxuLy8gICB9KTtcbi8vIH1cbi8vXG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsInByZXZpZXdQYW5lU2NoZW1lIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0b3AiLCJsZWZ0Iiwic3BwZWQiLCJzaG93TGVmdERpdmlzaW9uRGl2Iiwic3RvcFNjcm9sbGluZyIsInNjcm9sbFRvVG9wIiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsInNob3dSaWdodERpdmlzaW9uRGl2Iiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNwZWVkIiwic2Nyb2xsU3BlZWQiLCJkaXJlY3Rpb24iLCJET1dOX0RJUkVDVElPTiIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFNjcm9sbGluZyIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInJlc2l6ZUhhbmRsZXIiLCJub051ZGdlIiwiem9vbSIsImdldFpvb20iLCJpbm5lcldpZHRoIiwiZ2V0SW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJkb2N1bWVudFNjYWxlIiwicHJldmlld1BhbmVJbm5lcldpZHRoIiwicHJldmlld1BhbmVJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJudWRnZSIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4aW11bVNjcm9sbFRvcCIsImRlbHRhIiwic2Nyb2xsVG8iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRTY3JvbGxUb3AiLCJhbmltYXRpb25GcmFtZSIsImdldEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRBbmltYXRpb25GcmFtZSIsInRoZW4iLCJwZXJmb3JtYW5jZSIsIm5vdyIsInN0ZXAiLCJ0aW1lRGVsdGEiLCJTQ1JPTExfU1BFRURfREVMVEEiLCJTQ1JPTExfVE9QX0RFTFRBIiwiZW5hYmxlR2VzdHVyZXMiLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwiZGlzYWJsZUdlc3R1cmVzIiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21Td2lwZURvd24iLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25SZXNpemUiLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsIm9mZlJlc2l6ZSIsIm9mZktleURvd24iLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkRvY3VtZW50RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJ3aXRoU3R5bGUiLCJzY3JvbGxiYXJNaXhpbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc1NBLFVBaUNBLHdCQUF3QjtDQUN4QixnREFBZ0Q7Q0FDaEQsRUFBRTtDQUNGLDJCQUEyQjtDQUMzQixJQUFJO0NBQ0osRUFBRTtDQUNGLHNDQUFzQztDQUN0Qyx1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLFFBQVE7Q0FDUixJQUFJO0NBQ0osRUFBRTtDQUNGLElBQUk7Q0FDSix3QkFBd0I7Q0FDeEIsRUFBRTtDQUNGLE1BQU07Q0FDTixtQkFBbUI7Q0FDbkIsRUFBRTtDQUNGLHFFQUFxRTtDQUNyRSxFQUFFO0NBQ0YsdURBQXVEO0NBQ3ZELEVBQUU7Q0FDRiwyQkFBMkI7Q0FDM0IsRUFBRTtDQUNGLDRCQUE0QjtDQUM1QixFQUFFO0NBQ0Ysd0RBQXdEO0NBQ3hELEVBQUU7Q0FDRixzRUFBc0U7Q0FDdEUsRUFBRTtDQUNGLHdEQUF3RDtDQUN4RCx1QkFBdUI7Q0FDdkIsSUFBSTtDQUNKLEVBQUU7Q0FDRiw0REFBNEQ7Q0FDNUQsUUFBUTtDQUNSLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELDRDQUE0QztDQUM1QyxFQUFFO0NBQ0Ysc0JBQXNCO0NBQ3RCLG1DQUFtQztDQUNuQyxFQUFFO0NBQ0YsY0FBYztDQUNkLE1BQU07Q0FDTixJQUFJO0NBQ0osRUFBRTtDQUNGLGtEQUFrRDtDQUNsRCw0QkFBNEI7Q0FDNUIsZ0NBQWdDO0NBQ2hDLEVBQUU7Q0FDRixrQ0FBa0M7Q0FDbEMsSUFBSTtDQUNKLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsMkNBQTJDO0NBQzNDLG9EQUFvRDtDQUNwRCxFQUFFO0NBQ0YsMkJBQTJCO0NBQzNCLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELDJDQUEyQztDQUMzQywwQ0FBMEM7Q0FDMUMsRUFBRTtDQUNGLDRDQUE0QztDQUM1QyxJQUFJO0NBQ0osRUFBRTtDQUNGLDJEQUEyRDtDQUMzRCxxREFBcUQ7Q0FDckQsRUFBRTtDQUNGLG1DQUFtQztDQUNuQyxjQUFjO0NBQ2QsTUFBTTtDQUNOLEVBQUU7Q0FDRiw0Q0FBNEM7Q0FDNUMsRUFBRTtDQUNGLGtDQUFrQztDQUNsQyxJQUFJO0NBQ0osRUFBRTtDQUNGLHlEQUF5RDtDQUN6RCxxREFBcUQ7Q0FDckQsRUFBRTtDQUNGLG1DQUFtQztDQUNuQyxjQUFjO0NBQ2QsTUFBTTtDQUNOLEVBQUU7Q0FDRiw0Q0FBNEM7Q0FDNUMsRUFBRTtDQUNGLGtDQUFrQztDQUNsQyxJQUFJO0NBQ0osRUFBRTtDQUNGLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsSUFBSTtDQUNKLEVBQUU7Q0FDRixxQkFBcUI7Q0FDckIsbURBQW1EO0NBQ25ELHVEQUF1RDtDQUN2RCx5REFBeUQ7Q0FDekQscURBQXFEO0NBQ3JELHlEQUF5RDtDQUN6RCx5REFBeUQ7Q0FDekQsMkRBQTJEO0NBQzNELHlEQUF5RDtDQUN6RCwyREFBMkQ7Q0FDM0QseURBQXlEO0NBQ3pELElBQUk7Q0FDSixFQUFFO0NBQ0Ysc0JBQXNCO0NBQ3RCLG9EQUFvRDtDQUNwRCx3REFBd0Q7Q0FDeEQsMERBQTBEO0NBQzFELHNEQUFzRDtDQUN0RCwwREFBMEQ7Q0FDMUQsMERBQTBEO0NBQzFELDREQUE0RDtDQUM1RCwwREFBMEQ7Q0FDMUQsNERBQTREO0NBQzVELDBEQUEwRDtDQUMxRCxJQUFJO0NBQ0osRUFBRTtDQUNGLG1CQUFtQjtDQUNuQiwyQ0FBMkM7Q0FDM0MsRUFBRTtDQUNGLHNCQUFzQjtDQUN0QixJQUFJO0NBQ0osRUFBRTtDQUNGLDRCQUE0QjtDQUM1Qix1QkFBdUI7Q0FDdkIsZ0JBQWdCO0NBQ2hCLFFBQVE7Q0FDUixJQUFJO0NBQ0osRUFBRTs7OztlQXZLRjs7O29FQXBTc0I7eUJBRUc7b0JBQ087MEJBQ2M7MkJBQ0k7K0RBRTFCO3FCQUVBO3lCQUMyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQVFBLG1CQUFzSEMsOEJBQWlCLENBQXZJRCxrQkFBa0JFLGlDQUFvR0QsOEJBQWlCLENBQXJIQyxnQ0FBZ0NDLGlDQUFvRUYsOEJBQWlCLENBQXJGRSxnQ0FBZ0NDLGtDQUFvQ0gsOEJBQWlCLENBQXJERyxpQ0FDbEZDLGlCQU15QkMsbUJBQVEsQ0FOakNELGdCQUNBRSxrQkFLeUJELG1CQUFRLENBTGpDQyxpQkFDQUMsb0JBSXlCRixtQkFBUSxDQUpqQ0UsbUJBQ0FDLHFCQUd5QkgsbUJBQVEsQ0FIakNHLG9CQUNBQyxzQkFFeUJKLG1CQUFRLENBRmpDSSxxQkFDQUMsc0JBQ3lCTCxtQkFBUSxDQURqQ0sscUJBQ0FDLHVCQUF5Qk4sbUJBQVEsQ0FBakNNO0FBRVIsSUFBQSxBQUFNQyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDJCQUEwQixTQUFDQyxPQUFPQyxTQUFTQyxLQUFLQyxNQUFNQztZQUNwRCxNQUFLQyxtQkFBbUI7WUFFeEIsTUFBS0MsYUFBYTtZQUVsQixNQUFLQyxXQUFXO1FBQ2xCLElBRUFDLHdCQUFBQSwwQkFBeUIsU0FBQ1IsT0FBT0MsU0FBU0MsS0FBS0MsTUFBTUM7WUFDbkQsTUFBS0ssb0JBQW9CO1lBRXpCLE1BQUtILGFBQWE7WUFFbEIsTUFBS0MsV0FBVztRQUNsQixJQUVBRyx3QkFBQUEsMEJBQXlCLFNBQUNWLE9BQU9DLFNBQVNDLEtBQUtDLE1BQU1RO1lBQ25ELElBQU1DLGNBQWNELE9BQ2RFLFlBQVlDLHlCQUFjO1lBRWhDQyxRQUFRQyxHQUFHLENBQUNMLE9BQU9FO1lBRW5CLE1BQUtJLGNBQWMsQ0FBQ0wsYUFBYUM7UUFDbkMsSUFFQUssd0JBQUFBLHdCQUF1QixTQUFDbEIsT0FBT0MsU0FBU0MsS0FBS0MsTUFBTVE7WUFDakQsSUFBTUMsY0FBY0QsT0FDZEUsWUFBWU0sdUJBQVk7WUFFOUJKLFFBQVFDLEdBQUcsQ0FBQ0wsT0FBT0U7WUFFbkIsTUFBS0ksY0FBYyxDQUFDTCxhQUFhQztRQUNuQyxJQUVBTyx3QkFBQUEsa0JBQWlCLFNBQUNwQixPQUFPQztZQUN2QixJQUFNLEFBQUVvQixVQUFZckIsTUFBWnFCO1lBRVIsT0FBUUE7Z0JBQ04sS0FBSzdCO29CQUFpQjt3QkFDcEIsSUFBTThCLGFBQWEsTUFBS0MsWUFBWTt3QkFFcEMsSUFBSUQsWUFBWTs0QkFDZEUsV0FBV0MsY0FBYzt3QkFDM0I7d0JBRUE7b0JBQ0Y7Z0JBRUEsS0FBS2hDO29CQUFtQjt3QkFDdEIsTUFBS2lDLG9CQUFvQjt3QkFFekIsTUFBS3BCLGFBQWE7d0JBRWxCLE1BQUtDLFdBQVc7d0JBRWhCO29CQUNGO2dCQUVBLEtBQUtaO29CQUFxQjt3QkFDeEIsTUFBS2dDLG1CQUFtQjt3QkFFeEIsTUFBS3JCLGFBQWE7d0JBRWxCLE1BQUtDLFdBQVc7d0JBRWhCO29CQUNGO2dCQUVBLEtBQUtqQjtnQkFDTCxLQUFLTztvQkFBc0I7d0JBQ3pCLE1BQUtZLG9CQUFvQjt3QkFFekIsTUFBS0gsYUFBYTt3QkFFbEIsTUFBS0MsV0FBVzt3QkFFaEI7b0JBQ0Y7Z0JBRUEsS0FBS2I7Z0JBQ0wsS0FBS0U7b0JBQXFCO3dCQUN4QixNQUFLUyxtQkFBbUI7d0JBRXhCLE1BQUtDLGFBQWE7d0JBRWxCLE1BQUtDLFdBQVc7d0JBRWhCO29CQUNGO1lBQ0Y7UUFDRixJQUVBcUIsd0JBQUFBLGlCQUFnQixTQUFDNUIsT0FBT0M7WUFDdEIsSUFBTTRCLFVBQVU7WUFFaEIsTUFBS0MsSUFBSSxDQUFDRDtRQUNaOzs7a0JBakdJL0I7O1lBbUdKZ0MsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFLRCxVQUFBQSxpRUFBVTtnQkFDYixJQUFNQyxPQUFPQyxJQUFBQSxjQUFPLEtBQ2RDLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ0MsZ0JBQWdCTixNQUNoQk8sd0JBQXdCTCxZQUN4Qk0seUJBQXlCSixhQUFhLEdBQUc7Z0JBRS9DLElBQUksQ0FBQ0ssZ0JBQWdCLENBQUNILGVBQWVDLHVCQUF1QkM7Z0JBRTVELElBQUlULFNBQVM7b0JBQ1g7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDVyxLQUFLO1lBQ1o7OztZQUVBQSxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLElBQUlDLFlBQVksSUFBSSxDQUFDQyxZQUFZO2dCQUVqQyxJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQlYsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNVLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxtQkFBbUJGLGVBQWVYLGFBQ2xDYyxRQUFRLEFBQUNQLFlBQVlNLG1CQUNYLENBQUMsSUFDQyxDQUFDO2dCQUVuQk4sYUFBYU87Z0JBRWIsSUFBSSxDQUFDQyxRQUFRLENBQUNSLFdBQVdFO2dCQUV6Qk8sc0JBQXNCO29CQUNwQlQsYUFBYU87b0JBRWIsTUFBS0MsUUFBUSxDQUFDUixXQUFXRTtnQkFDM0I7WUFDRjs7O1lBRUFwQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWtDLFlBQVk7Z0JBRWxCLElBQUksQ0FBQ1UsWUFBWSxDQUFDVjtZQUNwQjs7O1lBRUFuQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSThDLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQjtnQkFFM0MsSUFBSUQsbUJBQW1CLE1BQU07b0JBQzNCRSxxQkFBcUJGO29CQUVyQkEsaUJBQWlCO29CQUVqQixJQUFJLENBQUNHLGlCQUFpQixDQUFDSDtnQkFDekI7WUFDRjs7O1lBRUFuQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUwsV0FBVyxFQUFFQyxTQUFTOztnQkFDbkMsSUFBSSxDQUFDUCxhQUFhO2dCQUVsQixJQUFJa0QsT0FBT0MsWUFBWUMsR0FBRztnQkFFMUIsSUFBTUMsT0FBTyxTQUFDRDtvQkFDWixJQUFNRSxZQUFZRixNQUFNRjtvQkFFeEI1QyxjQUFjQSxjQUFjaUQsNkJBQWtCLEdBQUdEO29CQUVqRCxJQUFJaEQsY0FBYyxHQUFHO3dCQUNuQixNQUFLTixhQUFhO3dCQUVsQjtvQkFDRjtvQkFFQSxJQUFJbUMsWUFBWSxNQUFLQyxZQUFZO29CQUVqQ0QsWUFBWUEsWUFBWTVCLFlBQVlELGNBQWNrRCwyQkFBZ0IsR0FBR0Y7b0JBRXJFSixPQUFPRSxLQUFNLEdBQUc7b0JBRWhCLE1BQUtQLFlBQVksQ0FBQ1Y7b0JBRWxCLElBQU1XLGlCQUFpQkYsc0JBQXNCUztvQkFFN0MsTUFBS0osaUJBQWlCLENBQUNIO2dCQUN6QjtnQkFFQSxJQUFNQSxpQkFBaUJGLHNCQUFzQlM7Z0JBRTdDLElBQUksQ0FBQ0osaUJBQWlCLENBQUNIO1lBQ3pCOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsSUFBSSxDQUFDeEQsc0JBQXNCO2dCQUNsRCxJQUFJLENBQUN5RCxrQkFBa0IsQ0FBQyxJQUFJLENBQUNsRSx1QkFBdUI7Z0JBQ3BELElBQUksQ0FBQ21FLGVBQWUsQ0FBQyxJQUFJLENBQUNoRCxvQkFBb0I7Z0JBQzlDLElBQUksQ0FBQ2lELGlCQUFpQixDQUFDLElBQUksQ0FBQ3pELHNCQUFzQjtZQUNwRDs7O1lBRUEwRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM3RCxzQkFBc0I7Z0JBQ25ELElBQUksQ0FBQzhELG1CQUFtQixDQUFDLElBQUksQ0FBQ3ZFLHVCQUF1QjtnQkFDckQsSUFBSSxDQUFDd0UsZ0JBQWdCLENBQUMsSUFBSSxDQUFDckQsb0JBQW9CO2dCQUMvQyxJQUFJLENBQUNzRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM5RCxzQkFBc0I7WUFDckQ7OztZQUVBMkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsaUJBQW1CLElBQUksQ0FBQ3FCLFFBQVEsR0FBaENyQjtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkgsY0FBYztnQkFDOUIsSUFBSSxDQUFDc0IsV0FBVyxDQUFDO29CQUNmdEIsZ0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBdUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU12QixpQkFBaUI7Z0JBRXZCLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQztvQkFDWnhCLGdCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQXlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFdBQVc7Z0JBRWhCLElBQUksQ0FBQ2YsY0FBYztnQkFFbkIsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDLElBQUksQ0FBQ25ELGFBQWEsRUFBRSxJQUFJO2dCQUV0Q29ELFlBQU0sQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQzdELGNBQWM7WUFDdEM7OztZQUVBOEQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsWUFBWTtnQkFFakIsSUFBSSxDQUFDZixlQUFlO2dCQUVwQixJQUFJLENBQUNnQixTQUFTLENBQUMsSUFBSSxDQUFDeEQsYUFBYSxFQUFFLElBQUk7Z0JBRXZDb0QsWUFBTSxDQUFDSyxVQUFVLENBQUMsSUFBSSxDQUFDakUsY0FBYztZQUN2Qzs7O1lBRUFrRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTFELGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQzJELElBQUksQ0FBQyxJQUFJO2dCQUVsRCxxQkFFRSxvQkFBQ0MsaUJBQVc7b0JBQUM1RCxlQUFlQTs7WUFHaEM7OztZQUVBNkQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtZQUNwQjs7O1dBaFFJNUY7cUJBQWE2RixhQUFPO0FBa1F4QixpQkFsUUk3RixNQWtRRzhGLFdBQVU7QUFFakIsaUJBcFFJOUYsTUFvUUcrRixxQkFBb0IsRUFBRTtBQUU3QixpQkF0UUkvRixNQXNRR2dHLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBSUZDLE9BQU9DLE1BQU0sQ0FBQ25HLEtBQUtvRyxTQUFTLEVBQUVDLHVCQUFXO0FBQ3pDSCxPQUFPQyxNQUFNLENBQUNuRyxLQUFLb0csU0FBUyxFQUFFRSw0QkFBZ0I7SUFFOUMsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3ZHLHlCQWFIYixrQkFFbEJxSCwyQkFBYyxFQUlRbkgsZ0NBSUFDLGdDQUlBQyJ9