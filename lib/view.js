"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" // this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
 //
 // this.enableFullScreen();
 //
 // this.disableFullScreen();
 //
 // this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
 //
 // fullScreenChangeCustomHandler = (event, element) => {
 //   this.zoom();
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
var _menu = /*#__PURE__*/ _interop_require_default(require("./view/div/menu"));
var _document = /*#__PURE__*/ _interop_require_default(require("./view/div/document"));
var _state = require("./state");
var _selectors = require("./selectors");
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
        _this = _call_super(this, View, arguments), _define_property(_this, "singleTapCustomHandler", function(event, element, top, left) {
            var link = _this.goToLink(event, element);
            if (link !== null) {
                return;
            }
            _this.toggleMenuDiv();
        }), _define_property(_this, "doubleTapCustomHandler", function(event, element, top, left) {
            var scale = 1;
            (0, _state.setScale)(scale);
            _this.zoom();
        }), _define_property(_this, "pinchStartCustomHandler", function(event, element) {
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
            key: "goToLink",
            value: function goToLink(event, element) {
                var target = event.target, link = target.closest(_selectors.ANCHOR_HREF_SELECTOR);
                if (link !== null) {
                    var href = link.getAttribute(_constants.HREF);
                    if (href === _constants.EMPTY_STRING) {
                        return;
                    }
                    var hrefStartsWithHash = href.startsWith(_constants.HASH), linkExternal = !hrefStartsWithHash;
                    if (linkExternal) {
                        var target1 = _constants.BLANK_TARGET;
                        _easy.window.open(href, target1);
                    } else {
                        var anchorId = href.substring(1); ///
                        this.goToAnchor(anchorId);
                        this.resetScrolling();
                        this.zoom();
                    }
                }
                return link;
            }
        },
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
                this.onResize(this.resizeHandler);
                _easy.window.onKeyDown(this.keyDownHandler);
                this.onCustomDragUp(this.dragUpCustomHandler);
                this.onCustomSwipeUp(this.swipeUpCustomHandler);
                this.onCustomDragLeft(this.dragLeftCustomHandler);
                this.onCustomDragDown(this.dragDownCustomHandler);
                this.onCustomSingleTap(this.singleTapCustomHandler);
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
            key: "willUnmount",
            value: function willUnmount() {
                this.disableTouch();
                this.offResize(this.resizeHandler);
                _easy.window.offKeyDown(this.keyDownHandler);
                this.offCustomDragUp(this.dragUpCustomHandler);
                this.offCustomSwipeUp(this.swipeUpCustomHandler);
                this.offCustomDragLeft(this.dragLeftCustomHandler);
                this.offCustomDragDown(this.dragDownCustomHandler);
                this.offCustomDoubleTap(this.doubleTapCustomHandler);
                this.offCustomSingleTap(this.singleTapCustomHandler);
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
            key: "childElements",
            value: function childElements() {
                var resizeHandler = this.resizeHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_menu.default, null),
                    /*#__PURE__*/ React.createElement(_document.default, {
                        resizeHandler: resizeHandler
                    })
                ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuaW1wb3J0IHsgc2Nyb2xsYmFyTWl4aW4sIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgTWVudURpdiBmcm9tIFwiLi92aWV3L2Rpdi9tZW51XCI7XG5pbXBvcnQgRG9jdW1lbnREaXYgZnJvbSBcIi4vdmlldy9kaXYvZG9jdW1lbnRcIjtcblxuaW1wb3J0IHsgZ2V0U2NhbGUsIHNldFNjYWxlIH0gZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCB7IEFOQ0hPUl9IUkVGX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBIUkVGLFxuICAgICAgICAgSEFTSCxcbiAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgIEJMQU5LX1RBUkdFVCxcbiAgICAgICAgIFVQX0RJUkVDVElPTixcbiAgICAgICAgIExFRlRfRElSRUNUSU9OLFxuICAgICAgICAgRE9XTl9ESVJFQ1RJT04sXG4gICAgICAgICBSSUdIVF9ESVJFQ1RJT04sXG4gICAgICAgICBTQ1JPTExfVE9QX0RFTFRBLFxuICAgICAgICAgU0NST0xMX1NQRUVEX0RFTFRBIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgYmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgfSA9IHByZXZpZXdQYW5lU2NoZW1lLFxuICAgICAgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgbGluayA9IHRoaXMuZ29Ub0xpbmsoZXZlbnQsIGVsZW1lbnQpO1xuXG4gICAgaWYgKGxpbmsgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZU1lbnVEaXYoKTtcbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gMTtcblxuICAgIHNldFNjYWxlKHNjYWxlKTtcblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgc3RhcnRTY2FsZSA9IHNjYWxlOyAvLy9cblxuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjYWxlKHN0YXJ0U2NhbGUpO1xuICB9XG5cbiAgcGluY2hTdG9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5nZXRTY2FsZSgpO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFNjYWxlID0gdGhpcy5nZXRTdGFydFNjYWxlKCksXG4gICAgICAgICAgc2NhbGUgPSBzdGFydFNjYWxlICogTWF0aC5zcXJ0KHJhdGlvKTtcblxuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKHNjYWxlKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZExlZnQgPSBzY3JvbGxMZWZ0IDw9IDEsXG4gICAgICAgICAgbm9TY3JvbGxMZWZ0ID0gIXNjcm9sbEhvcml6b250YWxseTtcblxuICAgIGlmIChzY3JvbGxlZExlZnQgfHwgbm9TY3JvbGxMZWZ0KSB7XG4gICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gc3BlZWQsICAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBSSUdIVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gdGhpcy5jYW5TY3JvbGxIb3Jpem9udGFsbHkoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsTGVmdCA9IHRoaXMuZ2V0TWF4aW11bVNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgICAgc2Nyb2xsZWRSaWdodCA9IHNjcm9sbExlZnQgPj0gbWF4aW11bVNjcm9sbExlZnQgLSAxLFxuICAgICAgICAgIG5vU2Nyb2xsUmlnaHQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkUmlnaHQgfHwgbm9TY3JvbGxSaWdodCkge1xuICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IExFRlRfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKTtcblxuICAgIGlmICghc2Nyb2xsVmVydGljYWxseSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gc3BlZWQsICAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gdGhpcy5jYW5TY3JvbGxIb3Jpem9udGFsbHkoKTtcblxuICAgIGlmIChzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbEhvcml6b250YWxseSkge1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBzdGFydFNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyAvLy9cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsTGVmdCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsTGVmdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBzdGFydFNjcm9sbExlZnQgLSBsZWZ0O1xuXG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnpvb20oKTtcbiAgfVxuXG4gIGdvVG9MaW5rKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LFxuICAgICAgICAgIGxpbmsgPSB0YXJnZXQuY2xvc2VzdChBTkNIT1JfSFJFRl9TRUxFQ1RPUik7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKEhSRUYpO1xuXG4gICAgICBpZiAoaHJlZiA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaHJlZlN0YXJ0c1dpdGhIYXNoID0gaHJlZi5zdGFydHNXaXRoKEhBU0gpLFxuICAgICAgICAgICAgbGlua0V4dGVybmFsID0gIWhyZWZTdGFydHNXaXRoSGFzaDtcblxuICAgICAgaWYgKGxpbmtFeHRlcm5hbCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBCTEFOS19UQVJHRVQ7XG5cbiAgICAgICAgd2luZG93Lm9wZW4oaHJlZiwgdGFyZ2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFuY2hvcklkID0gaHJlZi5zdWJzdHJpbmcoMSk7IC8vL1xuXG4gICAgICAgIHRoaXMuZ29Ub0FuY2hvcihhbmNob3JJZCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaW5rO1xuICB9XG5cbiAgem9vbShzY2FsZSA9IG51bGwpIHtcbiAgICBpZiAoc2NhbGUgPT09IG51bGwpIHtcbiAgICAgIHNjYWxlID0gZ2V0U2NhbGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnRTY2FsZSA9IHNjYWxlLCAvLy9cbiAgICAgICAgICB2aWV3SW5uZXJXaWR0aCA9IGlubmVyV2lkdGgsIC8vL1xuICAgICAgICAgIHZpZXdJbm5lckhlaWdodCA9IGlubmVySGVpZ2h0OyAvLy9cblxuICAgIHRoaXMuc2NhbGVEb2N1bWVudERpdihkb2N1bWVudFNjYWxlLCB2aWV3SW5uZXJXaWR0aCwgdmlld0lubmVySGVpZ2h0KTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc2Nyb2xsVG9MZWZ0KCkge1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWUgPSB0aGlzLmdldEFuaW1hdGlvbkZyYW1lKCk7XG5cbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcblxuICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCksXG4gICAgICAgIHRoZW47XG5cbiAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICBjb25zdCBzdGVwID0gKG5vdykgPT4ge1xuICAgICAgY29uc3QgdGltZURlbHRhID0gbm93IC0gdGhlbixcbiAgICAgICAgICAgIHNjcm9sbFNwZWVkRGVsdGEgPSBTQ1JPTExfU1BFRURfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIHNjcm9sbFNwZWVkID0gc2Nyb2xsU3BlZWQgLSBzY3JvbGxTcGVlZERlbHRhO1xuXG4gICAgICBpZiAoc2Nyb2xsU3BlZWQgPCAwKSB7XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBzY3JvbGxTcGVlZCAqIFNDUk9MTF9UT1BfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBVUF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBMRUZUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0ICsgc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRE9XTl9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSSUdIVF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgcmVzZXRTY3JvbGxpbmcoKSB7XG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgIHRoaXMuc2Nyb2xsVG9MZWZ0KCk7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtU2Nyb2xsVG9wO1xuICB9XG5cbiAgZ2V0TWF4aW11bVNjcm9sbExlZnQoKSB7XG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIHNjcm9sbFdpZHRoID0gdGhpcy5nZXRTY3JvbGxXaWR0aCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gTWF0aC5tYXgoMCwgc2Nyb2xsV2lkdGggLSBpbm5lcldpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtU2Nyb2xsTGVmdDtcbiAgfVxuXG4gIGNhblNjcm9sbFZlcnRpY2FsbHkoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZSgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50RGl2SGVpZ2h0ID0gdGhpcy5nZXREb2N1bWVudERpdkhlaWdodCgpLFxuICAgICAgICAgIHNjYWxlZERvY3VtZW50RGl2SGVpZ2h0ID0gZG9jdW1lbnREaXZIZWlnaHQgKiBzY2FsZSxcbiAgICAgICAgICBzY3JvbGxWZXJ0aWNhbGx5ID0gc2NhbGVkRG9jdW1lbnREaXZIZWlnaHQgPiBpbm5lckhlaWdodDtcblxuICAgIHJldHVybiBzY3JvbGxWZXJ0aWNhbGx5O1xuICB9XG5cbiAgY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCkge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgZG9jdW1lbnREaXZXaWR0aCA9IHRoaXMuZ2V0RG9jdW1lbnREaXZXaWR0aCgpLFxuICAgICAgICAgIHNjYWxlZERvY3VtZW50RGl2V2lkdGggPSBkb2N1bWVudERpdldpZHRoICogc2NhbGUsXG4gICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gc2NhbGVkRG9jdW1lbnREaXZXaWR0aCA+IGlubmVyV2lkdGg7XG5cbiAgICByZXR1cm4gc2Nyb2xsSG9yaXpvbnRhbGx5O1xuICB9XG5cbiAgZ2V0U2NhbGUoKSB7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZ2V0U3RhcnRTY2FsZSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2NhbGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjYWxlO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgY29uc3QgeyBhbmltYXRpb25GcmFtZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbkZyYW1lO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxMZWZ0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxMZWZ0O1xuICB9XG5cbiAgc2V0U2NhbGUoc2NhbGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHNjYWxlXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjYWxlKHN0YXJ0U2NhbGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2NhbGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBhbmltYXRpb25GcmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY2FsZSA9IG51bGwsXG4gICAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzY2FsZSxcbiAgICAgIHN0YXJ0U2NhbGUsXG4gICAgICBhbmltYXRpb25GcmFtZSxcbiAgICAgIHN0YXJ0U2Nyb2xsVG9wLFxuICAgICAgc3RhcnRTY3JvbGxMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLmVuYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKHRoaXMucmVzaXplSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RvcCh0aGlzLnBpbmNoU3RvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1lbnVEaXYvPixcbiAgICAgIDxEb2N1bWVudERpdiByZXNpemVIYW5kbGVyPXtyZXNpemVIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICB9XG4gICAgXG5gO1xuXG4vLyB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcbi8vXG4vLyB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIHRoaXMuem9vbSgpO1xuLy8gfVxuLy9cbi8vIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcbi8vXG4vLyAgIGlmIChmdWxsU2NyZWVuKSB7XG4vLyAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuLy9cbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBlbnRlckZ1bGxTY3JlZW4oKSB7XG4vLyAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kQ29sb3VyIiwicHJldmlld1BhbmVTY2hlbWUiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIiwiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsImxpbmsiLCJnb1RvTGluayIsInRvZ2dsZU1lbnVEaXYiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwic2NhbGUiLCJzZXRTY2FsZSIsInpvb20iLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsImdldFNjYWxlIiwic3RhcnRTY2FsZSIsInNldFN0YXJ0U2NhbGUiLCJwaW5jaFN0b3BDdXN0b21IYW5kbGVyIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRTY2FsZSIsIk1hdGgiLCJzcXJ0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsInN0b3BTY3JvbGxpbmciLCJzY3JvbGxIb3Jpem9udGFsbHkiLCJjYW5TY3JvbGxIb3Jpem9udGFsbHkiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbGVkTGVmdCIsIm5vU2Nyb2xsTGVmdCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJyZXNldFNjcm9sbGluZyIsInNjcm9sbFNwZWVkIiwiZGlyZWN0aW9uIiwiUklHSFRfRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwibWF4aW11bVNjcm9sbExlZnQiLCJnZXRNYXhpbXVtU2Nyb2xsTGVmdCIsInNjcm9sbGVkUmlnaHQiLCJub1Njcm9sbFJpZ2h0Iiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJMRUZUX0RJUkVDVElPTiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzY3JvbGxWZXJ0aWNhbGx5IiwiY2FuU2Nyb2xsVmVydGljYWxseSIsIkRPV05fRElSRUNUSU9OIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic3RhcnRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsTGVmdCIsImRyYWdSaWdodEN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbExlZnQiLCJzZXRTY3JvbGxMZWZ0IiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInJlc2l6ZUhhbmRsZXIiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiQU5DSE9SX0hSRUZfU0VMRUNUT1IiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiSFJFRiIsIkVNUFRZX1NUUklORyIsImhyZWZTdGFydHNXaXRoSGFzaCIsInN0YXJ0c1dpdGgiLCJIQVNIIiwibGlua0V4dGVybmFsIiwiQkxBTktfVEFSR0VUIiwid2luZG93Iiwib3BlbiIsImFuY2hvcklkIiwic3Vic3RyaW5nIiwiZ29Ub0FuY2hvciIsImlubmVyV2lkdGgiLCJnZXRJbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRJbm5lckhlaWdodCIsImRvY3VtZW50U2NhbGUiLCJ2aWV3SW5uZXJXaWR0aCIsInZpZXdJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvTGVmdCIsImFuaW1hdGlvbkZyYW1lIiwiZ2V0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEFuaW1hdGlvbkZyYW1lIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aGVuIiwic3RlcCIsInRpbWVEZWx0YSIsInNjcm9sbFNwZWVkRGVsdGEiLCJTQ1JPTExfU1BFRURfREVMVEEiLCJzY3JvbGxEZWx0YSIsIlNDUk9MTF9UT1BfREVMVEEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRNYXhpbXVtU2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4aW11bVNjcm9sbFRvcCIsIm1heCIsInNjcm9sbFdpZHRoIiwiZ2V0U2Nyb2xsV2lkdGgiLCJkb2N1bWVudERpdkhlaWdodCIsImdldERvY3VtZW50RGl2SGVpZ2h0Iiwic2NhbGVkRG9jdW1lbnREaXZIZWlnaHQiLCJkb2N1bWVudERpdldpZHRoIiwiZ2V0RG9jdW1lbnREaXZXaWR0aCIsInNjYWxlZERvY3VtZW50RGl2V2lkdGgiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25SZXNpemUiLCJvbktleURvd24iLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21TaW5nbGVUYXAiLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RvcCIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwib2ZmUmVzaXplIiwib2ZmS2V5RG93biIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwib2ZmQ3VzdG9tU2luZ2xlVGFwIiwib2ZmQ3VzdG9tRHJhZ1JpZ2h0Iiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdG9wIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIk1lbnVEaXYiLCJEb2N1bWVudERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwic2Nyb2xsYmFyTWl4aW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRuQkEsVUFpQ0EscUVBQXFFO0NBQ3JFLEVBQUU7Q0FDRiwyQkFBMkI7Q0FDM0IsRUFBRTtDQUNGLDRCQUE0QjtDQUM1QixFQUFFO0NBQ0Ysc0VBQXNFO0NBQ3RFLEVBQUU7Q0FDRix3REFBd0Q7Q0FDeEQsaUJBQWlCO0NBQ2pCLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELDRDQUE0QztDQUM1QyxFQUFFO0NBQ0Ysc0JBQXNCO0NBQ3RCLG1D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