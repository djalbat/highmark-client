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
Object.assign(View.prototype, _easymobile.touchMixins);
Object.assign(View.prototype, _easymobile.fullScreenMixins);
var _default = (0, _easywithstyle.default)(View)(_templateObject(), _styles.viewBackgroundColour, _occamstyles.scrollbarMixin, _styles.viewScrollbarThumbBackgroundColour, _styles.viewScrollbarTrackBackgroundColour, _styles.viewScrollbarCornerBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuXG5pbXBvcnQgeyBnZXRTY2FsZSwgc2V0U2NhbGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IsIE1FTlVfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyB2aWV3QmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEhSRUYsXG4gICAgICAgICBIQVNILFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgQkxBTktfVEFSR0VULFxuICAgICAgICAgVVBfRElSRUNUSU9OLFxuICAgICAgICAgTEVGVF9ESVJFQ1RJT04sXG4gICAgICAgICBET1dOX0RJUkVDVElPTixcbiAgICAgICAgIFJJR0hUX0RJUkVDVElPTixcbiAgICAgICAgIFNDUk9MTF9UT1BfREVMVEEsXG4gICAgICAgICBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LFxuICAgICAgICAgIGxpbmsgPSB0aGlzLmdvVG9MaW5rKHRhcmdldCk7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVEaXYgPSB0YXJnZXQuY2xvc2VzdChNRU5VX0RJVl9TRUxFQ1RPUik7XG5cbiAgICBpZiAobWVudURpdiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlTWVudURpdigpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSAxO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBzdGFydFNjYWxlID0gc2NhbGU7IC8vL1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSk7XG4gIH1cblxuICBwaW5jaFN0b3BDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG5cbiAgICBzZXRTY2FsZShzY2FsZSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NhbGUgPSB0aGlzLmdldFN0YXJ0U2NhbGUoKSxcbiAgICAgICAgICBzY2FsZSA9IHN0YXJ0U2NhbGUgKiBNYXRoLnNxcnQocmF0aW8pO1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnpvb20oc2NhbGUpO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbGVkTGVmdCA9IHNjcm9sbExlZnQgPD0gMSxcbiAgICAgICAgICBub1Njcm9sbExlZnQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkTGVmdCB8fCBub1Njcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gTEVGVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpO1xuXG4gICAgaWYgKHNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSG9yaXpvbnRhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vL1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgdGhpcy5zaG93RW1iZWRkZWRNb2RlTWVudUJ1dHRvbigpO1xuICAgICAgdGhpcy5oaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24oKTtcbiAgICAgIHRoaXMuc2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbigpO1xuICAgIH1cblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgICAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwcmVzZW50YXRpb25Nb2RlKCkge1xuICAgIHRoaXMuYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbigpO1xuICAgIHRoaXMuZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24oKTtcblxuICAgIHRoaXMuZG9jdW1lbnREaXZQcmVzZW50YXRpb25Nb2RlKCk7XG5cbiAgICB0aGlzLnpvb20oKTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5Nb2RlKCkge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKChlcnJvcikgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBlbWJlZGRlZE1vZGUoKSB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoIWZ1bGxTY3JlZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV4aXRGdWxsU2NyZWVuKChlcnJvcikgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBkcmFmdE1vZGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24oKTtcbiAgICB0aGlzLmFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbigpO1xuXG4gICAgdGhpcy5kb2N1bWVudERpdkRyYWZ0TW9kZSgpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBnb1RvTGluayh0YXJnZXQpIHtcbiAgICBjb25zdCBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoQU5DSE9SX0hSRUZfU0VMRUNUT1IpO1xuXG4gICAgaWYgKGxpbmsgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZShIUkVGKTtcblxuICAgICAgaWYgKGhyZWYgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhyZWZTdGFydHNXaXRoSGFzaCA9IGhyZWYuc3RhcnRzV2l0aChIQVNIKSxcbiAgICAgICAgICAgIGxpbmtFeHRlcm5hbCA9ICFocmVmU3RhcnRzV2l0aEhhc2g7XG5cbiAgICAgIGlmIChsaW5rRXh0ZXJuYWwpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gQkxBTktfVEFSR0VUO1xuXG4gICAgICAgIHdpbmRvdy5vcGVuKGhyZWYsIHRhcmdldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhbmNob3JJZCA9IGhyZWYuc3Vic3RyaW5nKDEpOyAvLy9cblxuICAgICAgICB0aGlzLmdvVG9BbmNob3IoYW5jaG9ySWQpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGluaztcbiAgfVxuXG4gIHpvb20oc2NhbGUgPSBudWxsKSB7XG4gICAgaWYgKHNjYWxlID09PSBudWxsKSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50U2NhbGUgPSBzY2FsZSwgLy8vXG4gICAgICAgICAgdmlld0lubmVyV2lkdGggPSBpbm5lcldpZHRoLCAvLy9cbiAgICAgICAgICB2aWV3SW5uZXJIZWlnaHQgPSBpbm5lckhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnNjYWxlRG9jdW1lbnREaXYoZG9jdW1lbnRTY2FsZSwgdmlld0lubmVyV2lkdGgsIHZpZXdJbm5lckhlaWdodCk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHNjcm9sbFRvTGVmdCgpIHtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lID0gdGhpcy5nZXRBbmltYXRpb25GcmFtZSgpO1xuXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG5cbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgICB0aGVuO1xuXG4gICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgY29uc3Qgc3RlcCA9IChub3cpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IG5vdyAtIHRoZW4sXG4gICAgICAgICAgICBzY3JvbGxTcGVlZERlbHRhID0gU0NST0xMX1NQRUVEX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBzY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkIC0gc2Nyb2xsU3BlZWREZWx0YTtcblxuICAgICAgaWYgKHNjcm9sbFNwZWVkIDwgMCkge1xuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2Nyb2xsU3BlZWQgKiBTQ1JPTExfVE9QX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgVVBfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wICsgc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTEVGVF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIERPV05fRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wIC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUklHSFRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIHJlc2V0U2Nyb2xsaW5nKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcbiAgICB0aGlzLnNjcm9sbFRvTGVmdCgpO1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICB9XG5cbiAgZ2V0TWF4aW11bVNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBzY3JvbGxIZWlnaHQgLSBpbm5lckhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBzY3JvbGxXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsTGVmdCA9IE1hdGgubWF4KDAsIHNjcm9sbFdpZHRoIC0gaW5uZXJXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVNjcm9sbExlZnQ7XG4gIH1cblxuICBjYW5TY3JvbGxWZXJ0aWNhbGx5KCkge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudERpdkhlaWdodCA9IHRoaXMuZ2V0RG9jdW1lbnREaXZIZWlnaHQoKSxcbiAgICAgICAgICBzY2FsZWREb2N1bWVudERpdkhlaWdodCA9IGRvY3VtZW50RGl2SGVpZ2h0ICogc2NhbGUsXG4gICAgICAgICAgc2Nyb2xsVmVydGljYWxseSA9IHNjYWxlZERvY3VtZW50RGl2SGVpZ2h0ID4gaW5uZXJIZWlnaHQ7XG5cbiAgICByZXR1cm4gc2Nyb2xsVmVydGljYWxseTtcbiAgfVxuXG4gIGNhblNjcm9sbEhvcml6b250YWxseSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGRvY3VtZW50RGl2V2lkdGggPSB0aGlzLmdldERvY3VtZW50RGl2V2lkdGgoKSxcbiAgICAgICAgICBzY2FsZWREb2N1bWVudERpdldpZHRoID0gZG9jdW1lbnREaXZXaWR0aCAqIHNjYWxlLFxuICAgICAgICAgIHNjcm9sbEhvcml6b250YWxseSA9IHNjYWxlZERvY3VtZW50RGl2V2lkdGggPiBpbm5lcldpZHRoO1xuXG4gICAgcmV0dXJuIHNjcm9sbEhvcml6b250YWxseTtcbiAgfVxuXG4gIGdldFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2NhbGUoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjYWxlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY2FsZTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uRnJhbWUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBhbmltYXRpb25GcmFtZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsTGVmdCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY2FsZShzdGFydFNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjYWxlXG4gICAgfSk7XG4gIH1cblxuICBzZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2NhbGUgPSBudWxsLFxuICAgICAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2NhbGUsXG4gICAgICBzdGFydFNjYWxlLFxuICAgICAgYW5pbWF0aW9uRnJhbWUsXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub25GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RvcCh0aGlzLnBpbmNoU3RvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1lbnVEaXYvPixcbiAgICAgIDxEb2N1bWVudERpdiByZXNpemVIYW5kbGVyPXtyZXNpemVIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgXG4gICR7c2Nyb2xsYmFyTWl4aW59XG4gIFxuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICAgIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgfVxuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInNpbmdsZVRhcEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0b3AiLCJsZWZ0IiwidGFyZ2V0IiwibGluayIsImdvVG9MaW5rIiwibWVudURpdiIsImNsb3Nlc3QiLCJNRU5VX0RJVl9TRUxFQ1RPUiIsInRvZ2dsZU1lbnVEaXYiLCJkb3VibGVUYXBDdXN0b21IYW5kbGVyIiwic2NhbGUiLCJzZXRTY2FsZSIsInpvb20iLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsImdldFNjYWxlIiwic3RhcnRTY2FsZSIsInNldFN0YXJ0U2NhbGUiLCJwaW5jaFN0b3BDdXN0b21IYW5kbGVyIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRTY2FsZSIsIk1hdGgiLCJzcXJ0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsInN0b3BTY3JvbGxpbmciLCJzY3JvbGxIb3Jpem9udGFsbHkiLCJjYW5TY3JvbGxIb3Jpem9udGFsbHkiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbGVkTGVmdCIsIm5vU2Nyb2xsTGVmdCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJyZXNldFNjcm9sbGluZyIsInNjcm9sbFNwZWVkIiwiZGlyZWN0aW9uIiwiUklHSFRfRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwibWF4aW11bVNjcm9sbExlZnQiLCJnZXRNYXhpbXVtU2Nyb2xsTGVmdCIsInNjcm9sbGVkUmlnaHQiLCJub1Njcm9sbFJpZ2h0Iiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJMRUZUX0RJUkVDVElPTiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzY3JvbGxWZXJ0aWNhbGx5IiwiY2FuU2Nyb2xsVmVydGljYWxseSIsIkRPV05fRElSRUNUSU9OIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic3RhcnRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsTGVmdCIsImRyYWdSaWdodEN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbExlZnQiLCJzZXRTY3JvbGxMZWZ0IiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwic2hvd0VtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwiaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJzaG93RnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwicmVzaXplSGFuZGxlciIsInByZXNlbnRhdGlvbk1vZGUiLCJhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uIiwiZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24iLCJkb2N1bWVudERpdlByZXNlbnRhdGlvbk1vZGUiLCJmdWxsU2NyZWVuTW9kZSIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZXJyb3IiLCJlbWJlZGRlZE1vZGUiLCJkcmFmdE1vZGUiLCJkZWFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24iLCJkb2N1bWVudERpdkRyYWZ0TW9kZSIsIkFOQ0hPUl9IUkVGX1NFTEVDVE9SIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsIkhSRUYiLCJFTVBUWV9TVFJJTkciLCJocmVmU3RhcnRzV2l0aEhhc2giLCJzdGFydHNXaXRoIiwiSEFTSCIsImxpbmtFeHRlcm5hbCIsIkJMQU5LX1RBUkdFVCIsIndpbmRvdyIsIm9wZW4iLCJhbmNob3JJZCIsInN1YnN0cmluZyIsImdvVG9BbmNob3IiLCJpbm5lcldpZHRoIiwiZ2V0SW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJkb2N1bWVudFNjYWxlIiwidmlld0lubmVyV2lkdGgiLCJ2aWV3SW5uZXJIZWlnaHQiLCJzY2FsZURvY3VtZW50RGl2Iiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUb0xlZnQiLCJhbmltYXRpb25GcmFtZSIsImdldEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRBbmltYXRpb25GcmFtZSIsIm5vdyIsInBlcmZvcm1hbmNlIiwidGhlbiIsInN0ZXAiLCJ0aW1lRGVsdGEiLCJzY3JvbGxTcGVlZERlbHRhIiwiU0NST0xMX1NQRUVEX0RFTFRBIiwic2Nyb2xsRGVsdGEiLCJTQ1JPTExfVE9QX0RFTFRBIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0TWF4aW11bVNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImdldFNjcm9sbEhlaWdodCIsIm1heGltdW1TY3JvbGxUb3AiLCJtYXgiLCJzY3JvbGxXaWR0aCIsImdldFNjcm9sbFdpZHRoIiwiZG9jdW1lbnREaXZIZWlnaHQiLCJnZXREb2N1bWVudERpdkhlaWdodCIsInNjYWxlZERvY3VtZW50RGl2SGVpZ2h0IiwiZG9jdW1lbnREaXZXaWR0aCIsImdldERvY3VtZW50RGl2V2lkdGgiLCJzY2FsZWREb2N1bWVudERpdldpZHRoIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uUmVzaXplIiwib25LZXlEb3duIiwib25GdWxsU2NyZWVuQ2hhbmdlIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21Eb3VibGVUYXAiLCJvbkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0b3AiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsIm9mZlJlc2l6ZSIsIm9mZktleURvd24iLCJvZmZGdWxsU2NyZWVuQ2hhbmdlIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0b3AiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiTWVudURpdiIsIkRvY3VtZW50RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJ3aXRoU3R5bGUiLCJ2aWV3QmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhck1peGluIiwidmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInZpZXdTY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJ2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOHJCQTs7O2VBQUE7OztvRUE1ckJzQjt5QkFFRzsyQkFDTTtvQkFDQzswQkFDYzsyREFFMUI7K0RBQ0k7cUJBRVc7eUJBQ3FCO3NCQUMwRjt5QkFVL0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFRQSxpQkFNeUJDLG1CQUFRLENBTmpDRCxnQkFDQUUsa0JBS3lCRCxtQkFBUSxDQUxqQ0MsaUJBQ0FDLG9CQUl5QkYsbUJBQVEsQ0FKakNFLG1CQUNBQyxxQkFHeUJILG1CQUFRLENBSGpDRyxvQkFDQUMsc0JBRXlCSixtQkFBUSxDQUZqQ0kscUJBQ0FDLHNCQUN5QkwsbUJBQVEsQ0FEakNLLHFCQUNBQyx1QkFBeUJOLG1CQUFRLENBQWpDTTtBQUVSLElBQUEsQUFBTUMscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSwwQkFBeUIsU0FBQ0MsT0FBT0MsU0FBU0MsS0FBS0M7WUFDN0MsSUFBTSxBQUFFQyxTQUFXSixNQUFYSSxRQUNGQyxPQUFPLE1BQUtDLFFBQVEsQ0FBQ0Y7WUFFM0IsSUFBSUMsU0FBUyxNQUFNO2dCQUNqQjtZQUNGO1lBRUEsSUFBTUUsVUFBVUgsT0FBT0ksT0FBTyxDQUFDQyw0QkFBaUI7WUFFaEQsSUFBSUYsWUFBWSxNQUFNO2dCQUNwQjtZQUNGO1lBRUEsTUFBS0csYUFBYTtRQUNwQixJQUVBQyx3QkFBQUEsMEJBQXlCLFNBQUNYLE9BQU9DLFNB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