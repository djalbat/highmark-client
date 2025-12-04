"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
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
            var target = event.target, link = _this.goToLink(target);
            if (link !== null) {
                return;
            }
            var menuDiv = target.closest(_selectors.MENU_DIV_SELECTOR);
            if (menuDiv !== null) {
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
        }), _define_property(_this, "fullScreenChangeHandler", function(event, element) {
            var fullScreen = _this.isFullScreen();
            if (fullScreen) {
                _this.showEmbeddedModeMenuButton();
                _this.hideFullScreenModeMenuButton();
            } else {
                _this.hideEmbeddedModeMenuButton();
                _this.showFullScreenModeMenuButton();
            }
            _this.zoom();
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
            key: "fullScreenMode",
            value: function fullScreenMode() {
                var fullScreen = this.isFullScreen();
                if (fullScreen) {
                    return;
                }
                this.requestFullScreen(function(error) {
                ///
                });
            }
        },
        {
            key: "embeddedMode",
            value: function embeddedMode() {
                var fullScreen = this.isFullScreen();
                if (!fullScreen) {
                    return;
                }
                this.exitFullScreen(function(error) {
                ///
                });
            }
        },
        {
            key: "goToLink",
            value: function goToLink(target) {
                var link = target.closest(_selectors.ANCHOR_HREF_SELECTOR);
                if (link !== null) {
                    var href = link.getAttribute(_constants.HREF);
                    if (href === _constants.EMPTY_STRING) {
                        return;
                    }
                    var hrefStartsWithHash = href.startsWith(_constants.HASH), linkExternal = !hrefStartsWithHash;
                    if (linkExternal) {
                        var _$target = _constants.BLANK_TARGET;
                        _easy.window.open(href, _$target);
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
                this.onFullScreenChange(this.fullScreenChangeHandler);
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
                this.offFullScreenChange(this.fullScreenChangeHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuXG5pbXBvcnQgeyBnZXRTY2FsZSwgc2V0U2NhbGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IsIE1FTlVfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyB2aWV3QmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEhSRUYsXG4gICAgICAgICBIQVNILFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgQkxBTktfVEFSR0VULFxuICAgICAgICAgVVBfRElSRUNUSU9OLFxuICAgICAgICAgTEVGVF9ESVJFQ1RJT04sXG4gICAgICAgICBET1dOX0RJUkVDVElPTixcbiAgICAgICAgIFJJR0hUX0RJUkVDVElPTixcbiAgICAgICAgIFNDUk9MTF9UT1BfREVMVEEsXG4gICAgICAgICBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LFxuICAgICAgICAgIGxpbmsgPSB0aGlzLmdvVG9MaW5rKHRhcmdldCk7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVEaXYgPSB0YXJnZXQuY2xvc2VzdChNRU5VX0RJVl9TRUxFQ1RPUik7XG5cbiAgICBpZiAobWVudURpdiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlTWVudURpdigpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSAxO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBzdGFydFNjYWxlID0gc2NhbGU7IC8vL1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSk7XG4gIH1cblxuICBwaW5jaFN0b3BDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG5cbiAgICBzZXRTY2FsZShzY2FsZSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NhbGUgPSB0aGlzLmdldFN0YXJ0U2NhbGUoKSxcbiAgICAgICAgICBzY2FsZSA9IHN0YXJ0U2NhbGUgKiBNYXRoLnNxcnQocmF0aW8pO1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnpvb20oc2NhbGUpO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbGVkTGVmdCA9IHNjcm9sbExlZnQgPD0gMSxcbiAgICAgICAgICBub1Njcm9sbExlZnQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkTGVmdCB8fCBub1Njcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gTEVGVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpO1xuXG4gICAgaWYgKHNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSG9yaXpvbnRhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vL1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgdGhpcy5zaG93RW1iZWRkZWRNb2RlTWVudUJ1dHRvbigpO1xuICAgICAgdGhpcy5oaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24oKTtcbiAgICAgIHRoaXMuc2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbigpO1xuICAgIH1cblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgICAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBmdWxsU2NyZWVuTW9kZSgpIHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigoZXJyb3IpID0+IHtcbiAgICAgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgZW1iZWRkZWRNb2RlKCkge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKCFmdWxsU2NyZWVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5leGl0RnVsbFNjcmVlbigoZXJyb3IpID0+IHtcbiAgICAgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgZ29Ub0xpbmsodGFyZ2V0KSB7XG4gICAgY29uc3QgbGluayA9IHRhcmdldC5jbG9zZXN0KEFOQ0hPUl9IUkVGX1NFTEVDVE9SKTtcblxuICAgIGlmIChsaW5rICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoSFJFRik7XG5cbiAgICAgIGlmIChocmVmID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBocmVmU3RhcnRzV2l0aEhhc2ggPSBocmVmLnN0YXJ0c1dpdGgoSEFTSCksXG4gICAgICAgICAgICBsaW5rRXh0ZXJuYWwgPSAhaHJlZlN0YXJ0c1dpdGhIYXNoO1xuXG4gICAgICBpZiAobGlua0V4dGVybmFsKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IEJMQU5LX1RBUkdFVDtcblxuICAgICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYW5jaG9ySWQgPSBocmVmLnN1YnN0cmluZygxKTsgLy8vXG5cbiAgICAgICAgdGhpcy5nb1RvQW5jaG9yKGFuY2hvcklkKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbms7XG4gIH1cblxuICB6b29tKHNjYWxlID0gbnVsbCkge1xuICAgIGlmIChzY2FsZSA9PT0gbnVsbCkge1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudFNjYWxlID0gc2NhbGUsIC8vL1xuICAgICAgICAgIHZpZXdJbm5lcldpZHRoID0gaW5uZXJXaWR0aCwgLy8vXG4gICAgICAgICAgdmlld0lubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5zY2FsZURvY3VtZW50RGl2KGRvY3VtZW50U2NhbGUsIHZpZXdJbm5lcldpZHRoLCB2aWV3SW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzY3JvbGxUb0xlZnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBhbmltYXRpb25GcmFtZSA9IHRoaXMuZ2V0QW5pbWF0aW9uRnJhbWUoKTtcblxuICAgIGlmIChhbmltYXRpb25GcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgdGhlbjtcblxuICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgIGNvbnN0IHN0ZXAgPSAobm93KSA9PiB7XG4gICAgICBjb25zdCB0aW1lRGVsdGEgPSBub3cgLSB0aGVuLFxuICAgICAgICAgICAgc2Nyb2xsU3BlZWREZWx0YSA9IFNDUk9MTF9TUEVFRF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgc2Nyb2xsU3BlZWQgPSBzY3JvbGxTcGVlZCAtIHNjcm9sbFNwZWVkRGVsdGE7XG5cbiAgICAgIGlmIChzY3JvbGxTcGVlZCA8IDApIHtcbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNjcm9sbFNwZWVkICogU0NST0xMX1RPUF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFVQX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIExFRlRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBET1dOX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJJR0hUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICByZXNldFNjcm9sbGluZygpIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5zY3JvbGxUb0xlZnQoKTtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxUb3A7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsV2lkdGggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxXaWR0aCAtIGlubmVyV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxMZWZ0O1xuICB9XG5cbiAgY2FuU2Nyb2xsVmVydGljYWxseSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnREaXZIZWlnaHQgPSB0aGlzLmdldERvY3VtZW50RGl2SGVpZ2h0KCksXG4gICAgICAgICAgc2NhbGVkRG9jdW1lbnREaXZIZWlnaHQgPSBkb2N1bWVudERpdkhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgIHNjcm9sbFZlcnRpY2FsbHkgPSBzY2FsZWREb2N1bWVudERpdkhlaWdodCA+IGlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbFZlcnRpY2FsbHk7XG4gIH1cblxuICBjYW5TY3JvbGxIb3Jpem9udGFsbHkoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZSgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBkb2N1bWVudERpdldpZHRoID0gdGhpcy5nZXREb2N1bWVudERpdldpZHRoKCksXG4gICAgICAgICAgc2NhbGVkRG9jdW1lbnREaXZXaWR0aCA9IGRvY3VtZW50RGl2V2lkdGggKiBzY2FsZSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSBzY2FsZWREb2N1bWVudERpdldpZHRoID4gaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiBzY3JvbGxIb3Jpem9udGFsbHk7XG4gIH1cblxuICBnZXRTY2FsZSgpIHtcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBnZXRTdGFydFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY2FsZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2NhbGU7XG4gIH1cblxuICBnZXRBbmltYXRpb25GcmFtZSgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGlvbkZyYW1lIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uRnJhbWU7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbExlZnQoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbExlZnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbExlZnQ7XG4gIH1cblxuICBzZXRTY2FsZShzY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2NhbGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHNjYWxlID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjYWxlID0gbnVsbCxcbiAgICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjYWxlLFxuICAgICAgc3RhcnRTY2FsZSxcbiAgICAgIGFuaW1hdGlvbkZyYW1lLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1JpZ2h0KHRoaXMuZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLm9mZlJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdMZWZ0KHRoaXMuZHJhZ0xlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdG9wKHRoaXMucGluY2hTdG9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNZW51RGl2Lz4sXG4gICAgICA8RG9jdW1lbnREaXYgcmVzaXplSGFuZGxlcj17cmVzaXplSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICB0b3VjaC1hY3Rpb246IG5vbmU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3QmFja2dyb3VuZENvbG91cn07XG4gIFxuICAke3Njcm9sbGJhck1peGlufVxuICBcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIH1cbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsInRhcmdldCIsImxpbmsiLCJnb1RvTGluayIsIm1lbnVEaXYiLCJjbG9zZXN0IiwiTUVOVV9ESVZfU0VMRUNUT1IiLCJ0b2dnbGVNZW51RGl2IiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInNjYWxlIiwic2V0U2NhbGUiLCJ6b29tIiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJnZXRTY2FsZSIsInN0YXJ0U2NhbGUiLCJzZXRTdGFydFNjYWxlIiwicGluY2hTdG9wQ3VzdG9tSGFuZGxlciIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0U2NhbGUiLCJNYXRoIiwic3FydCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic3BlZWQiLCJzdG9wU2Nyb2xsaW5nIiwic2Nyb2xsSG9yaXpvbnRhbGx5IiwiY2FuU2Nyb2xsSG9yaXpvbnRhbGx5Iiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxlZExlZnQiLCJub1Njcm9sbExlZnQiLCJzaG93TGVmdERpdmlzaW9uRGl2IiwicmVzZXRTY3JvbGxpbmciLCJzY3JvbGxTcGVlZCIsImRpcmVjdGlvbiIsIlJJR0hUX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsIm1heGltdW1TY3JvbGxMZWZ0IiwiZ2V0TWF4aW11bVNjcm9sbExlZnQiLCJzY3JvbGxlZFJpZ2h0Iiwibm9TY3JvbGxSaWdodCIsInNob3dSaWdodERpdmlzaW9uRGl2IiwiTEVGVF9ESVJFQ1RJT04iLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic2Nyb2xsVmVydGljYWxseSIsImNhblNjcm9sbFZlcnRpY2FsbHkiLCJET1dOX0RJUkVDVElPTiIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInN0YXJ0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbExlZnQiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsTGVmdCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ0xlZnRDdXN0b21IYW5kbGVyIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsImZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsInNob3dFbWJlZGRlZE1vZGVNZW51QnV0dG9uIiwiaGlkZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiIsImhpZGVFbWJlZGRlZE1vZGVNZW51QnV0dG9uIiwic2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInJlc2l6ZUhhbmRsZXIiLCJmdWxsU2NyZWVuTW9kZSIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZXJyb3IiLCJlbWJlZGRlZE1vZGUiLCJBTkNIT1JfSFJFRl9TRUxFQ1RPUiIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJIUkVGIiwiRU1QVFlfU1RSSU5HIiwiaHJlZlN0YXJ0c1dpdGhIYXNoIiwic3RhcnRzV2l0aCIsIkhBU0giLCJsaW5rRXh0ZXJuYWwiLCJCTEFOS19UQVJHRVQiLCJ3aW5kb3ciLCJvcGVuIiwiYW5jaG9ySWQiLCJzdWJzdHJpbmciLCJnb1RvQW5jaG9yIiwiaW5uZXJXaWR0aCIsImdldElubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldElubmVySGVpZ2h0IiwiZG9jdW1lbnRTY2FsZSIsInZpZXdJbm5lcldpZHRoIiwidmlld0lubmVySGVpZ2h0Iiwic2NhbGVEb2N1bWVudERpdiIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG9MZWZ0IiwiYW5pbWF0aW9uRnJhbWUiLCJnZXRBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0QW5pbWF0aW9uRnJhbWUiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRoZW4iLCJzdGVwIiwidGltZURlbHRhIiwic2Nyb2xsU3BlZWREZWx0YSIsIlNDUk9MTF9TUEVFRF9ERUxUQSIsInNjcm9sbERlbHRhIiwiU0NST0xMX1RPUF9ERUxUQSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldE1heGltdW1TY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJnZXRTY3JvbGxIZWlnaHQiLCJtYXhpbXVtU2Nyb2xsVG9wIiwibWF4Iiwic2Nyb2xsV2lkdGgiLCJnZXRTY3JvbGxXaWR0aCIsImRvY3VtZW50RGl2SGVpZ2h0IiwiZ2V0RG9jdW1lbnREaXZIZWlnaHQiLCJzY2FsZWREb2N1bWVudERpdkhlaWdodCIsImRvY3VtZW50RGl2V2lkdGgiLCJnZXREb2N1bWVudERpdldpZHRoIiwic2NhbGVkRG9jdW1lbnREaXZXaWR0aCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJvblJlc2l6ZSIsIm9uS2V5RG93biIsIm9uRnVsbFNjcmVlbkNoYW5nZSIsIm9uQ3VzdG9tRHJhZ1VwIiwib25DdXN0b21Td2lwZVVwIiwib25DdXN0b21EcmFnTGVmdCIsIm9uQ3VzdG9tRHJhZ0Rvd24iLCJvbkN1c3RvbVNpbmdsZVRhcCIsIm9uQ3VzdG9tRG91YmxlVGFwIiwib25DdXN0b21EcmFnUmlnaHQiLCJvbkN1c3RvbURyYWdTdGFydCIsIm9uQ3VzdG9tU3dpcGVMZWZ0Iiwib25DdXN0b21Td2lwZURvd24iLCJvbkN1c3RvbVBpbmNoTW92ZSIsIm9uQ3VzdG9tUGluY2hTdG9wIiwib25DdXN0b21QaW5jaFN0YXJ0Iiwib25DdXN0b21Td2lwZVJpZ2h0Iiwid2lsbFVubW91bnQiLCJkaXNhYmxlVG91Y2giLCJvZmZSZXNpemUiLCJvZmZLZXlEb3duIiwib2ZmRnVsbFNjcmVlbkNoYW5nZSIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwib2ZmQ3VzdG9tU2luZ2xlVGFwIiwib2ZmQ3VzdG9tRHJhZ1JpZ2h0Iiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdG9wIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIk1lbnVEaXYiLCJEb2N1bWVudERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwidmlld0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJNaXhpbiIsInZpZXdTY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJ2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwidmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRxQkE7OztlQUFBOzs7b0VBMXFCc0I7eUJBRUc7MkJBQ007b0JBQ0M7MEJBQ2M7MkRBRTFCOytEQUNJO3FCQUVXO3lCQUNxQjtzQkFDMEY7eUJBVS9HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBUUEsaUJBTXlCQyxtQkFBUSxDQU5qQ0QsZ0JBQ0FFLGtCQUt5QkQsbUJBQVEsQ0FMakNDLGlCQUNBQyxvQkFJeUJGLG1CQUFRLENBSmpDRSxtQkFDQUMscUJBR3lCSCxtQkFBUSxDQUhqQ0csb0JBQ0FDLHNCQUV5QkosbUJBQVEsQ0FGakNJLHFCQUNBQyxzQkFDeUJMLG1CQUFRLENBRGpDSyxxQkFDQUMsdUJBQXlCTixtQkFBUSxDQUFqQ007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