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
var _occamstyles = require("occam-styles");
var _easy = require("easy");
var _easymobile = require("easy-mobile");
var _menu = /*#__PURE__*/ _interop_require_default(require("./view/div/menu"));
var _document = /*#__PURE__*/ _interop_require_default(require("./view/div/document"));
var _state = require("./state");
var _selectors = require("./selectors");
var _styles = require("./styles");
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
var ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
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
var _default = (0, _easywithstyle.default)(View)(_templateObject(), _styles.viewBackgroundColour, _occamstyles.scrollbarMixin, _styles.viewScrollbarThumbBackgroundColour, _styles.viewScrollbarTrackBackgroundColour, _styles.viewScrollbarCornerBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuXG5pbXBvcnQgeyBnZXRTY2FsZSwgc2V0U2NhbGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHZpZXdCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgSFJFRixcbiAgICAgICAgIEhBU0gsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBCTEFOS19UQVJHRVQsXG4gICAgICAgICBVUF9ESVJFQ1RJT04sXG4gICAgICAgICBMRUZUX0RJUkVDVElPTixcbiAgICAgICAgIERPV05fRElSRUNUSU9OLFxuICAgICAgICAgUklHSFRfRElSRUNUSU9OLFxuICAgICAgICAgU0NST0xMX1RPUF9ERUxUQSxcbiAgICAgICAgIFNDUk9MTF9TUEVFRF9ERUxUQSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzaW5nbGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5nb1RvTGluayhldmVudCwgZWxlbWVudCk7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlTWVudURpdigpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSAxO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBzdGFydFNjYWxlID0gc2NhbGU7IC8vL1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSk7XG4gIH1cblxuICBwaW5jaFN0b3BDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG5cbiAgICBzZXRTY2FsZShzY2FsZSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NhbGUgPSB0aGlzLmdldFN0YXJ0U2NhbGUoKSxcbiAgICAgICAgICBzY2FsZSA9IHN0YXJ0U2NhbGUgKiBNYXRoLnNxcnQocmF0aW8pO1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnpvb20oc2NhbGUpO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbGVkTGVmdCA9IHNjcm9sbExlZnQgPD0gMSxcbiAgICAgICAgICBub1Njcm9sbExlZnQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkTGVmdCB8fCBub1Njcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gTEVGVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpO1xuXG4gICAgaWYgKHNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSG9yaXpvbnRhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vL1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzaXplSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgZ29Ub0xpbmsoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgbGluayA9IHRhcmdldC5jbG9zZXN0KEFOQ0hPUl9IUkVGX1NFTEVDVE9SKTtcblxuICAgIGlmIChsaW5rICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoSFJFRik7XG5cbiAgICAgIGlmIChocmVmID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBocmVmU3RhcnRzV2l0aEhhc2ggPSBocmVmLnN0YXJ0c1dpdGgoSEFTSCksXG4gICAgICAgICAgICBsaW5rRXh0ZXJuYWwgPSAhaHJlZlN0YXJ0c1dpdGhIYXNoO1xuXG4gICAgICBpZiAobGlua0V4dGVybmFsKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IEJMQU5LX1RBUkdFVDtcblxuICAgICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYW5jaG9ySWQgPSBocmVmLnN1YnN0cmluZygxKTsgLy8vXG5cbiAgICAgICAgdGhpcy5nb1RvQW5jaG9yKGFuY2hvcklkKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbms7XG4gIH1cblxuICB6b29tKHNjYWxlID0gbnVsbCkge1xuICAgIGlmIChzY2FsZSA9PT0gbnVsbCkge1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudFNjYWxlID0gc2NhbGUsIC8vL1xuICAgICAgICAgIHZpZXdJbm5lcldpZHRoID0gaW5uZXJXaWR0aCwgLy8vXG4gICAgICAgICAgdmlld0lubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5zY2FsZURvY3VtZW50RGl2KGRvY3VtZW50U2NhbGUsIHZpZXdJbm5lcldpZHRoLCB2aWV3SW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzY3JvbGxUb0xlZnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBhbmltYXRpb25GcmFtZSA9IHRoaXMuZ2V0QW5pbWF0aW9uRnJhbWUoKTtcblxuICAgIGlmIChhbmltYXRpb25GcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgdGhlbjtcblxuICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgIGNvbnN0IHN0ZXAgPSAobm93KSA9PiB7XG4gICAgICBjb25zdCB0aW1lRGVsdGEgPSBub3cgLSB0aGVuLFxuICAgICAgICAgICAgc2Nyb2xsU3BlZWREZWx0YSA9IFNDUk9MTF9TUEVFRF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgc2Nyb2xsU3BlZWQgPSBzY3JvbGxTcGVlZCAtIHNjcm9sbFNwZWVkRGVsdGE7XG5cbiAgICAgIGlmIChzY3JvbGxTcGVlZCA8IDApIHtcbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNjcm9sbFNwZWVkICogU0NST0xMX1RPUF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFVQX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIExFRlRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBET1dOX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJJR0hUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICByZXNldFNjcm9sbGluZygpIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5zY3JvbGxUb0xlZnQoKTtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxUb3A7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsV2lkdGggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxXaWR0aCAtIGlubmVyV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxMZWZ0O1xuICB9XG5cbiAgY2FuU2Nyb2xsVmVydGljYWxseSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnREaXZIZWlnaHQgPSB0aGlzLmdldERvY3VtZW50RGl2SGVpZ2h0KCksXG4gICAgICAgICAgc2NhbGVkRG9jdW1lbnREaXZIZWlnaHQgPSBkb2N1bWVudERpdkhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgIHNjcm9sbFZlcnRpY2FsbHkgPSBzY2FsZWREb2N1bWVudERpdkhlaWdodCA+IGlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbFZlcnRpY2FsbHk7XG4gIH1cblxuICBjYW5TY3JvbGxIb3Jpem9udGFsbHkoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZSgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBkb2N1bWVudERpdldpZHRoID0gdGhpcy5nZXREb2N1bWVudERpdldpZHRoKCksXG4gICAgICAgICAgc2NhbGVkRG9jdW1lbnREaXZXaWR0aCA9IGRvY3VtZW50RGl2V2lkdGggKiBzY2FsZSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSBzY2FsZWREb2N1bWVudERpdldpZHRoID4gaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiBzY3JvbGxIb3Jpem9udGFsbHk7XG4gIH1cblxuICBnZXRTY2FsZSgpIHtcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBnZXRTdGFydFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY2FsZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2NhbGU7XG4gIH1cblxuICBnZXRBbmltYXRpb25GcmFtZSgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGlvbkZyYW1lIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uRnJhbWU7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbExlZnQoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbExlZnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbExlZnQ7XG4gIH1cblxuICBzZXRTY2FsZShzY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2NhbGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHNjYWxlID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjYWxlID0gbnVsbCxcbiAgICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjYWxlLFxuICAgICAgc3RhcnRTY2FsZSxcbiAgICAgIGFuaW1hdGlvbkZyYW1lLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdMZWZ0KHRoaXMuZHJhZ0xlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdG9wKHRoaXMucGluY2hTdG9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vZmZSZXNpemUodGhpcy5yZXNpemVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1JpZ2h0KHRoaXMuZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RvcCh0aGlzLnBpbmNoU3RvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSB0aGlzLnJlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8TWVudURpdi8+LFxuICAgICAgPERvY3VtZW50RGl2IHJlc2l6ZUhhbmRsZXI9e3Jlc2l6ZUhhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dmlld0JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gICAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICB9XG4gICAgXG5gO1xuXG4vLyB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbi8vXG4vLyB0aGlzLmVuYWJsZUZ1bGxTY3JlZW4oKTtcbi8vXG4vLyB0aGlzLmRpc2FibGVGdWxsU2NyZWVuKCk7XG4vL1xuLy8gdGhpcy5vZmZDdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuLy9cbi8vIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIHRoaXMuem9vbSgpO1xuLy8gfVxuLy9cbi8vIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcbi8vXG4vLyAgIGlmIChmdWxsU2NyZWVuKSB7XG4vLyAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuLy9cbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBlbnRlckZ1bGxTY3JlZW4oKSB7XG4vLyAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInNpbmdsZVRhcEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0b3AiLCJsZWZ0IiwibGluayIsImdvVG9MaW5rIiwidG9nZ2xlTWVudURpdiIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJzY2FsZSIsInNldFNjYWxlIiwiem9vbSIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiZ2V0U2NhbGUiLCJzdGFydFNjYWxlIiwic2V0U3RhcnRTY2FsZSIsInBpbmNoU3RvcEN1c3RvbUhhbmRsZXIiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFNjYWxlIiwiTWF0aCIsInNxcnQiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNwZWVkIiwic3RvcFNjcm9sbGluZyIsInNjcm9sbEhvcml6b250YWxseSIsImNhblNjcm9sbEhvcml6b250YWxseSIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsZWRMZWZ0Iiwibm9TY3JvbGxMZWZ0Iiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInJlc2V0U2Nyb2xsaW5nIiwic2Nyb2xsU3BlZWQiLCJkaXJlY3Rpb24iLCJSSUdIVF9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJtYXhpbXVtU2Nyb2xsTGVmdCIsImdldE1heGltdW1TY3JvbGxMZWZ0Iiwic2Nyb2xsZWRSaWdodCIsIm5vU2Nyb2xsUmlnaHQiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsIkxFRlRfRElSRUNUSU9OIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNjcm9sbFZlcnRpY2FsbHkiLCJjYW5TY3JvbGxWZXJ0aWNhbGx5IiwiRE9XTl9ESVJFQ1RJT04iLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzdGFydFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxMZWZ0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwicmVzaXplSGFuZGxlciIsInRhcmdldCIsImNsb3Nlc3QiLCJBTkNIT1JfSFJFRl9TRUxFQ1RPUiIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJIUkVGIiwiRU1QVFlfU1RSSU5HIiwiaHJlZlN0YXJ0c1dpdGhIYXNoIiwic3RhcnRzV2l0aCIsIkhBU0giLCJsaW5rRXh0ZXJuYWwiLCJCTEFOS19UQVJHRVQiLCJ3aW5kb3ciLCJvcGVuIiwiYW5jaG9ySWQiLCJzdWJzdHJpbmciLCJnb1RvQW5jaG9yIiwiaW5uZXJXaWR0aCIsImdldElubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldElubmVySGVpZ2h0IiwiZG9jdW1lbnRTY2FsZSIsInZpZXdJbm5lcldpZHRoIiwidmlld0lubmVySGVpZ2h0Iiwic2NhbGVEb2N1bWVudERpdiIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG9MZWZ0IiwiYW5pbWF0aW9uRnJhbWUiLCJnZXRBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0QW5pbWF0aW9uRnJhbWUiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRoZW4iLCJzdGVwIiwidGltZURlbHRhIiwic2Nyb2xsU3BlZWREZWx0YSIsIlNDUk9MTF9TUEVFRF9ERUxUQSIsInNjcm9sbERlbHRhIiwiU0NST0xMX1RPUF9ERUxUQSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldE1heGltdW1TY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJnZXRTY3JvbGxIZWlnaHQiLCJtYXhpbXVtU2Nyb2xsVG9wIiwibWF4Iiwic2Nyb2xsV2lkdGgiLCJnZXRTY3JvbGxXaWR0aCIsImRvY3VtZW50RGl2SGVpZ2h0IiwiZ2V0RG9jdW1lbnREaXZIZWlnaHQiLCJzY2FsZWREb2N1bWVudERpdkhlaWdodCIsImRvY3VtZW50RGl2V2lkdGgiLCJnZXREb2N1bWVudERpdldpZHRoIiwic2NhbGVkRG9jdW1lbnREaXZXaWR0aCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJvblJlc2l6ZSIsIm9uS2V5RG93biIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbVNpbmdsZVRhcCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwib25DdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdG9wIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJvZmZSZXNpemUiLCJvZmZLZXlEb3duIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0b3AiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiTWVudURpdiIsIkRvY3VtZW50RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJ3aXRoU3R5bGUiLCJ2aWV3QmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhck1peGluIiwidmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInZpZXdTY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJ2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNG5CQSxVQWlDQSxxRUFBcUU7Q0FDckUsRUFBRTtDQUNGLDJCQUEyQjtDQUMzQixFQUFFO0NBQ0YsNEJBQTRCO0NBQzVCLEVBQUU7Q0FDRixzRUFBc0U7Q0FDdEUsRUFBRTtDQUNGLHdEQUF3RDtDQUN4RCxpQkFBaUI7Q0FDakIsSUFBSTtDQUNKLEVBQUU7Q0FDRiw0REFBNEQ7Q0FDNUQsNENBQTRDO0NBQzVDLEVBQUU7Q0FDRixzQkFBc0I7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