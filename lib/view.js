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
Object.assign(View.prototype, _easymobile.touchMixins);
Object.assign(View.prototype, _easymobile.fullScreenMixins);
var _default = (0, _easywithstyle.default)(View)(_templateObject(), _styles.viewBackgroundColour, _occamstyles.scrollbarMixin, _styles.viewScrollbarThumbBackgroundColour, _styles.viewScrollbarTrackBackgroundColour, _styles.viewScrollbarCornerBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuXG5pbXBvcnQgeyBnZXRTY2FsZSwgc2V0U2NhbGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IsIE1FTlVfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyB2aWV3QmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEhSRUYsXG4gICAgICAgICBIQVNILFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgQkxBTktfVEFSR0VULFxuICAgICAgICAgVVBfRElSRUNUSU9OLFxuICAgICAgICAgSU5JVElBTF9TQ0FMRSxcbiAgICAgICAgIExFRlRfRElSRUNUSU9OLFxuICAgICAgICAgRE9XTl9ESVJFQ1RJT04sXG4gICAgICAgICBSSUdIVF9ESVJFQ1RJT04sXG4gICAgICAgICBTQ1JPTExfVE9QX0RFTFRBLFxuICAgICAgICAgU0NST0xMX1NQRUVEX0RFTFRBIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICBsaW5rID0gdGhpcy5nb1RvTGluayh0YXJnZXQpO1xuXG4gICAgaWYgKGxpbmsgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51RGl2ID0gdGFyZ2V0LmNsb3Nlc3QoTUVOVV9ESVZfU0VMRUNUT1IpO1xuXG4gICAgaWYgKG1lbnVEaXYgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZU1lbnVEaXYoKTtcbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gSU5JVElBTF9TQ0FMRTtcblxuICAgIHNldFNjYWxlKHNjYWxlKTtcblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgc3RhcnRTY2FsZSA9IHNjYWxlOyAvLy9cblxuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjYWxlKHN0YXJ0U2NhbGUpO1xuICB9XG5cbiAgcGluY2hTdG9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5nZXRTY2FsZSgpO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFNjYWxlID0gdGhpcy5nZXRTdGFydFNjYWxlKCksXG4gICAgICAgICAgc2NhbGUgPSBzdGFydFNjYWxlICogTWF0aC5zcXJ0KHJhdGlvKTtcblxuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKHNjYWxlKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZExlZnQgPSBzY3JvbGxMZWZ0IDw9IDEsXG4gICAgICAgICAgbm9TY3JvbGxMZWZ0ID0gIXNjcm9sbEhvcml6b250YWxseTtcblxuICAgIGlmIChzY3JvbGxlZExlZnQgfHwgbm9TY3JvbGxMZWZ0KSB7XG4gICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gc3BlZWQsICAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBSSUdIVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gdGhpcy5jYW5TY3JvbGxIb3Jpem9udGFsbHkoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsTGVmdCA9IHRoaXMuZ2V0TWF4aW11bVNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgICAgc2Nyb2xsZWRSaWdodCA9IHNjcm9sbExlZnQgPj0gbWF4aW11bVNjcm9sbExlZnQgLSAxLFxuICAgICAgICAgIG5vU2Nyb2xsUmlnaHQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkUmlnaHQgfHwgbm9TY3JvbGxSaWdodCkge1xuICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IExFRlRfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKTtcblxuICAgIGlmICghc2Nyb2xsVmVydGljYWxseSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gc3BlZWQsICAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gdGhpcy5jYW5TY3JvbGxIb3Jpem9udGFsbHkoKTtcblxuICAgIGlmIChzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbEhvcml6b250YWxseSkge1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBzdGFydFNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyAvLy9cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsTGVmdCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsTGVmdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBzdGFydFNjcm9sbExlZnQgLSBsZWZ0O1xuXG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIHRoaXMuc2hvd0VtYmVkZGVkTW9kZU1lbnVCdXR0b24oKTtcbiAgICAgIHRoaXMuaGlkZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVFbWJlZGRlZE1vZGVNZW51QnV0dG9uKCk7XG4gICAgICB0aGlzLnNob3dGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24oKTtcbiAgICB9XG5cbiAgICB0aGlzLnpvb20oKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzaXplSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgcHJlc2VudGF0aW9uTW9kZSgpIHtcbiAgICB0aGlzLmFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24oKTtcbiAgICB0aGlzLmRlYWN0aXZhdGVEcmFmdE1vZGVNZW51QnV0dG9uKCk7XG5cbiAgICB0aGlzLmRvY3VtZW50RGl2UHJlc2VudGF0aW9uTW9kZSgpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBmdWxsU2NyZWVuTW9kZSgpIHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigoZXJyb3IpID0+IHtcbiAgICAgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgZW1iZWRkZWRNb2RlKCkge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKCFmdWxsU2NyZWVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5leGl0RnVsbFNjcmVlbigoZXJyb3IpID0+IHtcbiAgICAgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgZHJhZnRNb2RlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uKCk7XG4gICAgdGhpcy5hY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24oKTtcblxuICAgIHRoaXMuZG9jdW1lbnREaXZEcmFmdE1vZGUoKTtcblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgZ29Ub0xpbmsodGFyZ2V0KSB7XG4gICAgY29uc3QgbGluayA9IHRhcmdldC5jbG9zZXN0KEFOQ0hPUl9IUkVGX1NFTEVDVE9SKTtcblxuICAgIGlmIChsaW5rICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoSFJFRik7XG5cbiAgICAgIGlmIChocmVmID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBocmVmU3RhcnRzV2l0aEhhc2ggPSBocmVmLnN0YXJ0c1dpdGgoSEFTSCksXG4gICAgICAgICAgICBsaW5rRXh0ZXJuYWwgPSAhaHJlZlN0YXJ0c1dpdGhIYXNoO1xuXG4gICAgICBpZiAobGlua0V4dGVybmFsKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IEJMQU5LX1RBUkdFVDtcblxuICAgICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYW5jaG9ySWQgPSBocmVmLnN1YnN0cmluZygxKTsgLy8vXG5cbiAgICAgICAgdGhpcy5nb1RvQW5jaG9yKGFuY2hvcklkKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbms7XG4gIH1cblxuICB6b29tKHNjYWxlID0gbnVsbCkge1xuICAgIGlmIChzY2FsZSA9PT0gbnVsbCkge1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudFNjYWxlID0gc2NhbGUsIC8vL1xuICAgICAgICAgIHZpZXdJbm5lcldpZHRoID0gaW5uZXJXaWR0aCwgLy8vXG4gICAgICAgICAgdmlld0lubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5zY2FsZURvY3VtZW50RGl2KGRvY3VtZW50U2NhbGUsIHZpZXdJbm5lcldpZHRoLCB2aWV3SW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzY3JvbGxUb0xlZnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBhbmltYXRpb25GcmFtZSA9IHRoaXMuZ2V0QW5pbWF0aW9uRnJhbWUoKTtcblxuICAgIGlmIChhbmltYXRpb25GcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgdGhlbjtcblxuICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgIGNvbnN0IHN0ZXAgPSAobm93KSA9PiB7XG4gICAgICBjb25zdCB0aW1lRGVsdGEgPSBub3cgLSB0aGVuLFxuICAgICAgICAgICAgc2Nyb2xsU3BlZWREZWx0YSA9IFNDUk9MTF9TUEVFRF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgc2Nyb2xsU3BlZWQgPSBzY3JvbGxTcGVlZCAtIHNjcm9sbFNwZWVkRGVsdGE7XG5cbiAgICAgIGlmIChzY3JvbGxTcGVlZCA8IDApIHtcbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNjcm9sbFNwZWVkICogU0NST0xMX1RPUF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFVQX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIExFRlRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBET1dOX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJJR0hUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICByZXNldFNjcm9sbGluZygpIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5zY3JvbGxUb0xlZnQoKTtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxUb3A7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsV2lkdGggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxXaWR0aCAtIGlubmVyV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxMZWZ0O1xuICB9XG5cbiAgY2FuU2Nyb2xsVmVydGljYWxseSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnREaXZIZWlnaHQgPSB0aGlzLmdldERvY3VtZW50RGl2SGVpZ2h0KCksXG4gICAgICAgICAgc2NhbGVkRG9jdW1lbnREaXZIZWlnaHQgPSBkb2N1bWVudERpdkhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgIHNjcm9sbFZlcnRpY2FsbHkgPSBzY2FsZWREb2N1bWVudERpdkhlaWdodCA+IGlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbFZlcnRpY2FsbHk7XG4gIH1cblxuICBjYW5TY3JvbGxIb3Jpem9udGFsbHkoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZSgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBkb2N1bWVudERpdldpZHRoID0gdGhpcy5nZXREb2N1bWVudERpdldpZHRoKCksXG4gICAgICAgICAgc2NhbGVkRG9jdW1lbnREaXZXaWR0aCA9IGRvY3VtZW50RGl2V2lkdGggKiBzY2FsZSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSBzY2FsZWREb2N1bWVudERpdldpZHRoID4gaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiBzY3JvbGxIb3Jpem9udGFsbHk7XG4gIH1cblxuICBnZXRTY2FsZSgpIHtcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBnZXRTdGFydFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY2FsZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2NhbGU7XG4gIH1cblxuICBnZXRBbmltYXRpb25GcmFtZSgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGlvbkZyYW1lIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uRnJhbWU7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbExlZnQoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbExlZnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbExlZnQ7XG4gIH1cblxuICBzZXRTY2FsZShzY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2NhbGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHNjYWxlID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjYWxlID0gbnVsbCxcbiAgICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjYWxlLFxuICAgICAgc3RhcnRTY2FsZSxcbiAgICAgIGFuaW1hdGlvbkZyYW1lLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1JpZ2h0KHRoaXMuZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLm9mZlJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdMZWZ0KHRoaXMuZHJhZ0xlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdG9wKHRoaXMucGluY2hTdG9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNZW51RGl2Lz4sXG4gICAgICA8RG9jdW1lbnREaXYgcmVzaXplSGFuZGxlcj17cmVzaXplSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dmlld0JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gICAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3Iiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRvcCIsImxlZnQiLCJ0YXJnZXQiLCJsaW5rIiwiZ29Ub0xpbmsiLCJtZW51RGl2IiwiY2xvc2VzdCIsIk1FTlVfRElWX1NFTEVDVE9SIiwidG9nZ2xlTWVudURpdiIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJzY2FsZSIsIklOSVRJQUxfU0NBTEUiLCJzZXRTY2FsZSIsInpvb20iLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsImdldFNjYWxlIiwic3RhcnRTY2FsZSIsInNldFN0YXJ0U2NhbGUiLCJwaW5jaFN0b3BDdXN0b21IYW5kbGVyIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRTY2FsZSIsIk1hdGgiLCJzcXJ0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsInN0b3BTY3JvbGxpbmciLCJzY3JvbGxIb3Jpem9udGFsbHkiLCJjYW5TY3JvbGxIb3Jpem9udGFsbHkiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbGVkTGVmdCIsIm5vU2Nyb2xsTGVmdCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJyZXNldFNjcm9sbGluZyIsInNjcm9sbFNwZWVkIiwiZGlyZWN0aW9uIiwiUklHSFRfRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwibWF4aW11bVNjcm9sbExlZnQiLCJnZXRNYXhpbXVtU2Nyb2xsTGVmdCIsInNjcm9sbGVkUmlnaHQiLCJub1Njcm9sbFJpZ2h0Iiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJMRUZUX0RJUkVDVElPTiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzY3JvbGxWZXJ0aWNhbGx5IiwiY2FuU2Nyb2xsVmVydGljYWxseSIsIkRPV05fRElSRUNUSU9OIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic3RhcnRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsTGVmdCIsImRyYWdSaWdodEN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbExlZnQiLCJzZXRTY3JvbGxMZWZ0IiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwic2hvd0VtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwiaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJzaG93RnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwicmVzaXplSGFuZGxlciIsInByZXNlbnRhdGlvbk1vZGUiLCJhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uIiwiZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24iLCJkb2N1bWVudERpdlByZXNlbnRhdGlvbk1vZGUiLCJmdWxsU2NyZWVuTW9kZSIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZXJyb3IiLCJlbWJlZGRlZE1vZGUiLCJkcmFmdE1vZGUiLCJkZWFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24iLCJkb2N1bWVudERpdkRyYWZ0TW9kZSIsIkFOQ0hPUl9IUkVGX1NFTEVDVE9SIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsIkhSRUYiLCJFTVBUWV9TVFJJTkciLCJocmVmU3RhcnRzV2l0aEhhc2giLCJzdGFydHNXaXRoIiwiSEFTSCIsImxpbmtFeHRlcm5hbCIsIkJMQU5LX1RBUkdFVCIsIndpbmRvdyIsIm9wZW4iLCJhbmNob3JJZCIsInN1YnN0cmluZyIsImdvVG9BbmNob3IiLCJpbm5lcldpZHRoIiwiZ2V0SW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJkb2N1bWVudFNjYWxlIiwidmlld0lubmVyV2lkdGgiLCJ2aWV3SW5uZXJIZWlnaHQiLCJzY2FsZURvY3VtZW50RGl2Iiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUb0xlZnQiLCJhbmltYXRpb25GcmFtZSIsImdldEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRBbmltYXRpb25GcmFtZSIsIm5vdyIsInBlcmZvcm1hbmNlIiwidGhlbiIsInN0ZXAiLCJ0aW1lRGVsdGEiLCJzY3JvbGxTcGVlZERlbHRhIiwiU0NST0xMX1NQRUVEX0RFTFRBIiwic2Nyb2xsRGVsdGEiLCJTQ1JPTExfVE9QX0RFTFRBIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0TWF4aW11bVNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImdldFNjcm9sbEhlaWdodCIsIm1heGltdW1TY3JvbGxUb3AiLCJtYXgiLCJzY3JvbGxXaWR0aCIsImdldFNjcm9sbFdpZHRoIiwiZG9jdW1lbnREaXZIZWlnaHQiLCJnZXREb2N1bWVudERpdkhlaWdodCIsInNjYWxlZERvY3VtZW50RGl2SGVpZ2h0IiwiZG9jdW1lbnREaXZXaWR0aCIsImdldERvY3VtZW50RGl2V2lkdGgiLCJzY2FsZWREb2N1bWVudERpdldpZHRoIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uUmVzaXplIiwib25LZXlEb3duIiwib25GdWxsU2NyZWVuQ2hhbmdlIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21Eb3VibGVUYXAiLCJvbkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0b3AiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsIm9mZlJlc2l6ZSIsIm9mZktleURvd24iLCJvZmZGdWxsU2NyZWVuQ2hhbmdlIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0b3AiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiTWVudURpdiIsIkRvY3VtZW50RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJ0b3VjaE1peGlucyIsImZ1bGxTY3JlZW5NaXhpbnMiLCJ3aXRoU3R5bGUiLCJ2aWV3QmFja2dyb3VuZENvbG91ciIsInNjcm9sbGJhck1peGluIiwidmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciIsInZpZXdTY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJ2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK3JCQTs7O2VBQUE7OztvRUE3ckJzQjt5QkFFRzsyQkFDTTtvQkFDQzswQkFDYzsyREFFMUI7K0RBQ0k7cUJBRVc7eUJBQ3FCO3NCQUMwRjt5QkFXL0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFRQSxpQkFNeUJDLG1CQUFRLENBTmpDRCxnQkFDQUUsa0JBS3lCRCxtQkFBUSxDQUxqQ0MsaUJBQ0FDLG9CQUl5QkYsbUJBQVEsQ0FKakNFLG1CQUNBQyxxQkFHeUJILG1CQUFRLENBSGpDRyxvQkFDQUMsc0JBRXlCSixtQkFBUSxDQUZqQ0kscUJBQ0FDLHNCQUN5QkwsbUJBQVEsQ0FEakNLLHFCQUNBQyx1QkFBeUJOLG1CQUFRLENBQWpDTTtBQUVSLElBQUEsQUFBTUMscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSwwQkFBeUIsU0FBQ0MsT0FBT0MsU0FBU0MsS0FBS0M7WUFDN0MsSUFBTSxBQUFFQyxTQUFXSixNQUFYSSxRQUNGQyxPQUFPLE1BQUtDLFFBQVEsQ0FBQ0Y7WUFFM0IsSUFBSUMsU0FBUyxNQUFNO2dCQUNqQjtZQUNGO1lBRUEsSUFBTUUsVUFBVUgsT0FBT0ksT0FBTyxDQUFDQyw0QkFBaUI7WUFFaEQsSUFBSUYsWUFBWSxN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