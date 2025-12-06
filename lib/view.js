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
var _easygestures = require("easy-gestures");
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
        "\n\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: absolute;\n  overflow: scroll;\n  align-items: flex-start;\n  touch-action: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  background-color: ",
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
            var scale = _constants.INITIAL_SCALE;
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
            key: "presentationMode",
            value: function presentationMode() {
                this.activatePresentationModeMenuButton();
                this.deactivateDraftModeMenuButton();
                this.documentDivPresentationMode();
                this.zoom();
            }
        },
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
            key: "draftMode",
            value: function draftMode() {
                this.deactivatePresentationModeMenuButton();
                this.activateDraftModeMenuButton();
                this.documentDivDraftMode();
                this.zoom();
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
Object.assign(View.prototype, _easygestures.touchMixins);
Object.assign(View.prototype, _easygestures.fullScreenMixins);
var _default = (0, _easywithstyle.default)(View)(_templateObject(), _styles.viewBackgroundColour, _occamstyles.scrollbarMixin, _styles.viewScrollbarThumbBackgroundColour, _styles.viewScrollbarTrackBackgroundColour, _styles.viewScrollbarCornerBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktZ2VzdHVyZXNcIjtcblxuaW1wb3J0IE1lbnVEaXYgZnJvbSBcIi4vdmlldy9kaXYvbWVudVwiO1xuaW1wb3J0IERvY3VtZW50RGl2IGZyb20gXCIuL3ZpZXcvZGl2L2RvY3VtZW50XCI7XG5cbmltcG9ydCB7IGdldFNjYWxlLCBzZXRTY2FsZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBBTkNIT1JfSFJFRl9TRUxFQ1RPUiwgTUVOVV9ESVZfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHZpZXdCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgSFJFRixcbiAgICAgICAgIEhBU0gsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBCTEFOS19UQVJHRVQsXG4gICAgICAgICBVUF9ESVJFQ1RJT04sXG4gICAgICAgICBJTklUSUFMX1NDQUxFLFxuICAgICAgICAgTEVGVF9ESVJFQ1RJT04sXG4gICAgICAgICBET1dOX0RJUkVDVElPTixcbiAgICAgICAgIFJJR0hUX0RJUkVDVElPTixcbiAgICAgICAgIFNDUk9MTF9UT1BfREVMVEEsXG4gICAgICAgICBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LFxuICAgICAgICAgIGxpbmsgPSB0aGlzLmdvVG9MaW5rKHRhcmdldCk7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVEaXYgPSB0YXJnZXQuY2xvc2VzdChNRU5VX0RJVl9TRUxFQ1RPUik7XG5cbiAgICBpZiAobWVudURpdiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlTWVudURpdigpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSBJTklUSUFMX1NDQUxFO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBzdGFydFNjYWxlID0gc2NhbGU7IC8vL1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSk7XG4gIH1cblxuICBwaW5jaFN0b3BDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG5cbiAgICBzZXRTY2FsZShzY2FsZSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NhbGUgPSB0aGlzLmdldFN0YXJ0U2NhbGUoKSxcbiAgICAgICAgICBzY2FsZSA9IHN0YXJ0U2NhbGUgKiBNYXRoLnNxcnQocmF0aW8pO1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnpvb20oc2NhbGUpO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbGVkTGVmdCA9IHNjcm9sbExlZnQgPD0gMSxcbiAgICAgICAgICBub1Njcm9sbExlZnQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkTGVmdCB8fCBub1Njcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gTEVGVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpO1xuXG4gICAgaWYgKHNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSG9yaXpvbnRhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vL1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgdGhpcy5zaG93RW1iZWRkZWRNb2RlTWVudUJ1dHRvbigpO1xuICAgICAgdGhpcy5oaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24oKTtcbiAgICAgIHRoaXMuc2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbigpO1xuICAgIH1cblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgICAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwcmVzZW50YXRpb25Nb2RlKCkge1xuICAgIHRoaXMuYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbigpO1xuICAgIHRoaXMuZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24oKTtcblxuICAgIHRoaXMuZG9jdW1lbnREaXZQcmVzZW50YXRpb25Nb2RlKCk7XG5cbiAgICB0aGlzLnpvb20oKTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5Nb2RlKCkge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKChlcnJvcikgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBlbWJlZGRlZE1vZGUoKSB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoIWZ1bGxTY3JlZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV4aXRGdWxsU2NyZWVuKChlcnJvcikgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBkcmFmdE1vZGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24oKTtcbiAgICB0aGlzLmFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbigpO1xuXG4gICAgdGhpcy5kb2N1bWVudERpdkRyYWZ0TW9kZSgpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBnb1RvTGluayh0YXJnZXQpIHtcbiAgICBjb25zdCBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoQU5DSE9SX0hSRUZfU0VMRUNUT1IpO1xuXG4gICAgaWYgKGxpbmsgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZShIUkVGKTtcblxuICAgICAgaWYgKGhyZWYgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhyZWZTdGFydHNXaXRoSGFzaCA9IGhyZWYuc3RhcnRzV2l0aChIQVNIKSxcbiAgICAgICAgICAgIGxpbmtFeHRlcm5hbCA9ICFocmVmU3RhcnRzV2l0aEhhc2g7XG5cbiAgICAgIGlmIChsaW5rRXh0ZXJuYWwpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gQkxBTktfVEFSR0VUO1xuXG4gICAgICAgIHdpbmRvdy5vcGVuKGhyZWYsIHRhcmdldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhbmNob3JJZCA9IGhyZWYuc3Vic3RyaW5nKDEpOyAvLy9cblxuICAgICAgICB0aGlzLmdvVG9BbmNob3IoYW5jaG9ySWQpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGluaztcbiAgfVxuXG4gIHpvb20oc2NhbGUgPSBudWxsKSB7XG4gICAgaWYgKHNjYWxlID09PSBudWxsKSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50U2NhbGUgPSBzY2FsZSwgLy8vXG4gICAgICAgICAgdmlld0lubmVyV2lkdGggPSBpbm5lcldpZHRoLCAvLy9cbiAgICAgICAgICB2aWV3SW5uZXJIZWlnaHQgPSBpbm5lckhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnNjYWxlRG9jdW1lbnREaXYoZG9jdW1lbnRTY2FsZSwgdmlld0lubmVyV2lkdGgsIHZpZXdJbm5lckhlaWdodCk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHNjcm9sbFRvTGVmdCgpIHtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lID0gdGhpcy5nZXRBbmltYXRpb25GcmFtZSgpO1xuXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG5cbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgICB0aGVuO1xuXG4gICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgY29uc3Qgc3RlcCA9IChub3cpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IG5vdyAtIHRoZW4sXG4gICAgICAgICAgICBzY3JvbGxTcGVlZERlbHRhID0gU0NST0xMX1NQRUVEX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBzY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkIC0gc2Nyb2xsU3BlZWREZWx0YTtcblxuICAgICAgaWYgKHNjcm9sbFNwZWVkIDwgMCkge1xuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2Nyb2xsU3BlZWQgKiBTQ1JPTExfVE9QX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgVVBfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wICsgc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTEVGVF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIERPV05fRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wIC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUklHSFRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIHJlc2V0U2Nyb2xsaW5nKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcbiAgICB0aGlzLnNjcm9sbFRvTGVmdCgpO1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICB9XG5cbiAgZ2V0TWF4aW11bVNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBzY3JvbGxIZWlnaHQgLSBpbm5lckhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBzY3JvbGxXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsTGVmdCA9IE1hdGgubWF4KDAsIHNjcm9sbFdpZHRoIC0gaW5uZXJXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVNjcm9sbExlZnQ7XG4gIH1cblxuICBjYW5TY3JvbGxWZXJ0aWNhbGx5KCkge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudERpdkhlaWdodCA9IHRoaXMuZ2V0RG9jdW1lbnREaXZIZWlnaHQoKSxcbiAgICAgICAgICBzY2FsZWREb2N1bWVudERpdkhlaWdodCA9IGRvY3VtZW50RGl2SGVpZ2h0ICogc2NhbGUsXG4gICAgICAgICAgc2Nyb2xsVmVydGljYWxseSA9IHNjYWxlZERvY3VtZW50RGl2SGVpZ2h0ID4gaW5uZXJIZWlnaHQ7XG5cbiAgICByZXR1cm4gc2Nyb2xsVmVydGljYWxseTtcbiAgfVxuXG4gIGNhblNjcm9sbEhvcml6b250YWxseSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGRvY3VtZW50RGl2V2lkdGggPSB0aGlzLmdldERvY3VtZW50RGl2V2lkdGgoKSxcbiAgICAgICAgICBzY2FsZWREb2N1bWVudERpdldpZHRoID0gZG9jdW1lbnREaXZXaWR0aCAqIHNjYWxlLFxuICAgICAgICAgIHNjcm9sbEhvcml6b250YWxseSA9IHNjYWxlZERvY3VtZW50RGl2V2lkdGggPiBpbm5lcldpZHRoO1xuXG4gICAgcmV0dXJuIHNjcm9sbEhvcml6b250YWxseTtcbiAgfVxuXG4gIGdldFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2NhbGUoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjYWxlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY2FsZTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uRnJhbWUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBhbmltYXRpb25GcmFtZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsTGVmdCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY2FsZShzdGFydFNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjYWxlXG4gICAgfSk7XG4gIH1cblxuICBzZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2NhbGUgPSBudWxsLFxuICAgICAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2NhbGUsXG4gICAgICBzdGFydFNjYWxlLFxuICAgICAgYW5pbWF0aW9uRnJhbWUsXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub25GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RvcCh0aGlzLnBpbmNoU3RvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1lbnVEaXYvPixcbiAgICAgIDxEb2N1bWVudERpdiByZXNpemVIYW5kbGVyPXtyZXNpemVIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3QmFja2dyb3VuZENvbG91cn07XG4gIFxuICAke3Njcm9sbGJhck1peGlufVxuICBcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIH1cbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsInRhcmdldCIsImxpbmsiLCJnb1RvTGluayIsIm1lbnVEaXYiLCJjbG9zZXN0IiwiTUVOVV9ESVZfU0VMRUNUT1IiLCJ0b2dnbGVNZW51RGl2IiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInNjYWxlIiwiSU5JVElBTF9TQ0FMRSIsInNldFNjYWxlIiwiem9vbSIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiZ2V0U2NhbGUiLCJzdGFydFNjYWxlIiwic2V0U3RhcnRTY2FsZSIsInBpbmNoU3RvcEN1c3RvbUhhbmRsZXIiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFNjYWxlIiwiTWF0aCIsInNxcnQiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNwZWVkIiwic3RvcFNjcm9sbGluZyIsInNjcm9sbEhvcml6b250YWxseSIsImNhblNjcm9sbEhvcml6b250YWxseSIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsZWRMZWZ0Iiwibm9TY3JvbGxMZWZ0Iiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInJlc2V0U2Nyb2xsaW5nIiwic2Nyb2xsU3BlZWQiLCJkaXJlY3Rpb24iLCJSSUdIVF9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJtYXhpbXVtU2Nyb2xsTGVmdCIsImdldE1heGltdW1TY3JvbGxMZWZ0Iiwic2Nyb2xsZWRSaWdodCIsIm5vU2Nyb2xsUmlnaHQiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsIkxFRlRfRElSRUNUSU9OIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNjcm9sbFZlcnRpY2FsbHkiLCJjYW5TY3JvbGxWZXJ0aWNhbGx5IiwiRE9XTl9ESVJFQ1RJT04iLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzdGFydFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxMZWZ0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJzaG93RW1iZWRkZWRNb2RlTWVudUJ1dHRvbiIsImhpZGVGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJoaWRlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiIsInNob3dGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJjb250cm9sbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dMYXN0RGl2aXNpb25EaXYiLCJyZXNpemVIYW5kbGVyIiwicHJlc2VudGF0aW9uTW9kZSIsImFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJkZWFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbiIsImRvY3VtZW50RGl2UHJlc2VudGF0aW9uTW9kZSIsImZ1bGxTY3JlZW5Nb2RlIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJlcnJvciIsImVtYmVkZGVkTW9kZSIsImRyYWZ0TW9kZSIsImRlYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbiIsImFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbiIsImRvY3VtZW50RGl2RHJhZnRNb2RlIiwiQU5DSE9SX0hSRUZfU0VMRUNUT1IiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiSFJFRiIsIkVNUFRZX1NUUklORyIsImhyZWZTdGFydHNXaXRoSGFzaCIsInN0YXJ0c1dpdGgiLCJIQVNIIiwibGlua0V4dGVybmFsIiwiQkxBTktfVEFSR0VUIiwid2luZG93Iiwib3BlbiIsImFuY2hvcklkIiwic3Vic3RyaW5nIiwiZ29Ub0FuY2hvciIsImlubmVyV2lkdGgiLCJnZXRJbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRJbm5lckhlaWdodCIsImRvY3VtZW50U2NhbGUiLCJ2aWV3SW5uZXJXaWR0aCIsInZpZXdJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvTGVmdCIsImFuaW1hdGlvbkZyYW1lIiwiZ2V0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEFuaW1hdGlvbkZyYW1lIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aGVuIiwic3RlcCIsInRpbWVEZWx0YSIsInNjcm9sbFNwZWVkRGVsdGEiLCJTQ1JPTExfU1BFRURfREVMVEEiLCJzY3JvbGxEZWx0YSIsIlNDUk9MTF9UT1BfREVMVEEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRNYXhpbXVtU2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4aW11bVNjcm9sbFRvcCIsIm1heCIsInNjcm9sbFdpZHRoIiwiZ2V0U2Nyb2xsV2lkdGgiLCJkb2N1bWVudERpdkhlaWdodCIsImdldERvY3VtZW50RGl2SGVpZ2h0Iiwic2NhbGVkRG9jdW1lbnREaXZIZWlnaHQiLCJkb2N1bWVudERpdldpZHRoIiwiZ2V0RG9jdW1lbnREaXZXaWR0aCIsInNjYWxlZERvY3VtZW50RGl2V2lkdGgiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25SZXNpemUiLCJvbktleURvd24iLCJvbkZ1bGxTY3JlZW5DaGFuZ2UiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21TaW5nbGVUYXAiLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RvcCIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwib2ZmUmVzaXplIiwib2ZmS2V5RG93biIsIm9mZkZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tRHJhZ0xlZnQiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURvdWJsZVRhcCIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RvcCIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0IiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJNZW51RGl2IiwiRG9jdW1lbnREaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsInZpZXdCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyTWl4aW4iLCJ2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwidmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErckJBOzs7ZUFBQTs7O29FQTdyQnNCO3lCQUVHOzJCQUNNO29CQUNDOzRCQUNjOzJEQUUxQjsrREFDSTtxQkFFVzt5QkFDcUI7c0JBQzBGO3lCQVcvRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFBLGlCQU15QkMsbUJBQVEsQ0FOakNELGdCQUNBRSxrQkFLeUJELG1CQUFRLENBTGpDQyxpQkFDQUMsb0JBSXlCRixtQkFBUSxDQUpqQ0UsbUJBQ0FDLHFCQUd5QkgsbUJBQVEsQ0FIakNHLG9CQUNBQyxzQkFFeUJKLG1CQUFRLENBRmpDSSxxQkFDQUMsc0JBQ3lCTCxtQkFBUSxDQURqQ0sscUJBQ0FDLHVCQUF5Qk4sbUJBQVEsQ0FBakNNO0FBRVIsSUFBQSxBQUFNQyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDBCQUF5QixTQUFDQyxPQUFPQyxTQUFTQyxLQUFLQztZQUM3QyxJQUFNLEFBQUVDLFNBQVdKLE1BQVhJLFFBQ0ZDLE9BQU8sTUFBS0MsUUFBUSxDQUFDRjtZQUUzQixJQUFJQyxTQUFTLE1BQU07Z0JBQ2pCO1lBQ0Y7WUFFQSxJQUFNRSxVQUFVSCxPQUFPSSxPQUFPLENBQUNDLDRCQUFpQjtZQUVoRCxJQUFJRixZQUFZ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