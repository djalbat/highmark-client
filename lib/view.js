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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuXG5pbXBvcnQgeyBnZXRTY2FsZSwgc2V0U2NhbGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IsIE1FTlVfRElWX1NFTEVDVE9SIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyB2aWV3QmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgdmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEhSRUYsXG4gICAgICAgICBIQVNILFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgQkxBTktfVEFSR0VULFxuICAgICAgICAgVVBfRElSRUNUSU9OLFxuICAgICAgICAgSU5JVElBTF9TQ0FMRSxcbiAgICAgICAgIExFRlRfRElSRUNUSU9OLFxuICAgICAgICAgRE9XTl9ESVJFQ1RJT04sXG4gICAgICAgICBSSUdIVF9ESVJFQ1RJT04sXG4gICAgICAgICBTQ1JPTExfVE9QX0RFTFRBLFxuICAgICAgICAgU0NST0xMX1NQRUVEX0RFTFRBIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICBsaW5rID0gdGhpcy5nb1RvTGluayh0YXJnZXQpO1xuXG4gICAgaWYgKGxpbmsgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtZW51RGl2ID0gdGFyZ2V0LmNsb3Nlc3QoTUVOVV9ESVZfU0VMRUNUT1IpO1xuXG4gICAgaWYgKG1lbnVEaXYgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZU1lbnVEaXYoKTtcbiAgfVxuXG4gIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gSU5JVElBTF9TQ0FMRTtcblxuICAgIHNldFNjYWxlKHNjYWxlKTtcblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgc3RhcnRTY2FsZSA9IHNjYWxlOyAvLy9cblxuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjYWxlKHN0YXJ0U2NhbGUpO1xuICB9XG5cbiAgcGluY2hTdG9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5nZXRTY2FsZSgpO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuICB9XG5cbiAgcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbiAgICBjb25zdCBzdGFydFNjYWxlID0gdGhpcy5nZXRTdGFydFNjYWxlKCksXG4gICAgICAgICAgc2NhbGUgPSBzdGFydFNjYWxlICogTWF0aC5zcXJ0KHJhdGlvKTtcblxuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKHNjYWxlKTtcbiAgfVxuXG4gIHN3aXBlUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZExlZnQgPSBzY3JvbGxMZWZ0IDw9IDEsXG4gICAgICAgICAgbm9TY3JvbGxMZWZ0ID0gIXNjcm9sbEhvcml6b250YWxseTtcblxuICAgIGlmIChzY3JvbGxlZExlZnQgfHwgbm9TY3JvbGxMZWZ0KSB7XG4gICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gc3BlZWQsICAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBSSUdIVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gdGhpcy5jYW5TY3JvbGxIb3Jpem9udGFsbHkoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsTGVmdCA9IHRoaXMuZ2V0TWF4aW11bVNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgICAgc2Nyb2xsZWRSaWdodCA9IHNjcm9sbExlZnQgPj0gbWF4aW11bVNjcm9sbExlZnQgLSAxLFxuICAgICAgICAgIG5vU2Nyb2xsUmlnaHQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkUmlnaHQgfHwgbm9TY3JvbGxSaWdodCkge1xuICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IExFRlRfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKTtcblxuICAgIGlmICghc2Nyb2xsVmVydGljYWxseSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFNwZWVkID0gc3BlZWQsICAvLy9cbiAgICAgICAgICBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFVQX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gdGhpcy5jYW5TY3JvbGxIb3Jpem9udGFsbHkoKTtcblxuICAgIGlmIChzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbEhvcml6b250YWxseSkge1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBzdGFydFNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyAvLy9cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnUmlnaHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsTGVmdCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsTGVmdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBzdGFydFNjcm9sbExlZnQgLSBsZWZ0O1xuXG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4gIH1cblxuICBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBkcmFnTGVmdEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5nZXRTdGFydFNjcm9sbFRvcCgpO1xuXG4gICAgaWYgKHN0YXJ0U2Nyb2xsVG9wID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCk7XG4gIH1cblxuICBmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIHRoaXMuc2hvd0VtYmVkZGVkTW9kZU1lbnVCdXR0b24oKTtcbiAgICAgIHRoaXMuaGlkZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVFbWJlZGRlZE1vZGVNZW51QnV0dG9uKCk7XG4gICAgICB0aGlzLnNob3dGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24oKTtcbiAgICB9XG5cbiAgICB0aGlzLnpvb20oKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzaXplSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgcHJlc2VudGF0aW9uTW9kZSgpIHtcbiAgICB0aGlzLmFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24oKTtcbiAgICB0aGlzLmRlYWN0aXZhdGVEcmFmdE1vZGVNZW51QnV0dG9uKCk7XG5cbiAgICB0aGlzLmRvY3VtZW50RGl2UHJlc2VudGF0aW9uTW9kZSgpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBmdWxsU2NyZWVuTW9kZSgpIHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigoZXJyb3IpID0+IHtcbiAgICAgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgZW1iZWRkZWRNb2RlKCkge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKCFmdWxsU2NyZWVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5leGl0RnVsbFNjcmVlbigoZXJyb3IpID0+IHtcbiAgICAgIC8vL1xuICAgIH0pO1xuICB9XG5cbiAgZHJhZnRNb2RlKCkge1xuICAgIHRoaXMuZGVhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uKCk7XG4gICAgdGhpcy5hY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24oKTtcblxuICAgIHRoaXMuZG9jdW1lbnREaXZEcmFmdE1vZGUoKTtcblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgZ29Ub0xpbmsodGFyZ2V0KSB7XG4gICAgY29uc3QgbGluayA9IHRhcmdldC5jbG9zZXN0KEFOQ0hPUl9IUkVGX1NFTEVDVE9SKTtcblxuICAgIGlmIChsaW5rICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoSFJFRik7XG5cbiAgICAgIGlmIChocmVmID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBocmVmU3RhcnRzV2l0aEhhc2ggPSBocmVmLnN0YXJ0c1dpdGgoSEFTSCksXG4gICAgICAgICAgICBsaW5rRXh0ZXJuYWwgPSAhaHJlZlN0YXJ0c1dpdGhIYXNoO1xuXG4gICAgICBpZiAobGlua0V4dGVybmFsKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IEJMQU5LX1RBUkdFVDtcblxuICAgICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYW5jaG9ySWQgPSBocmVmLnN1YnN0cmluZygxKTsgLy8vXG5cbiAgICAgICAgdGhpcy5nb1RvQW5jaG9yKGFuY2hvcklkKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbms7XG4gIH1cblxuICB6b29tKHNjYWxlID0gbnVsbCkge1xuICAgIGlmIChzY2FsZSA9PT0gbnVsbCkge1xuICAgICAgc2NhbGUgPSBnZXRTY2FsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudFNjYWxlID0gc2NhbGUsIC8vL1xuICAgICAgICAgIHZpZXdJbm5lcldpZHRoID0gaW5uZXJXaWR0aCwgLy8vXG4gICAgICAgICAgdmlld0lubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5zY2FsZURvY3VtZW50RGl2KGRvY3VtZW50U2NhbGUsIHZpZXdJbm5lcldpZHRoLCB2aWV3SW5uZXJIZWlnaHQpO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4gIH1cblxuICBzY3JvbGxUb0xlZnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG4gIH1cblxuICBzdG9wU2Nyb2xsaW5nKCkge1xuICAgIGxldCBhbmltYXRpb25GcmFtZSA9IHRoaXMuZ2V0QW5pbWF0aW9uRnJhbWUoKTtcblxuICAgIGlmIChhbmltYXRpb25GcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuXG4gICAgICBhbmltYXRpb25GcmFtZSA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgdGhlbjtcblxuICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgIGNvbnN0IHN0ZXAgPSAobm93KSA9PiB7XG4gICAgICBjb25zdCB0aW1lRGVsdGEgPSBub3cgLSB0aGVuLFxuICAgICAgICAgICAgc2Nyb2xsU3BlZWREZWx0YSA9IFNDUk9MTF9TUEVFRF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgc2Nyb2xsU3BlZWQgPSBzY3JvbGxTcGVlZCAtIHNjcm9sbFNwZWVkRGVsdGE7XG5cbiAgICAgIGlmIChzY3JvbGxTcGVlZCA8IDApIHtcbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxEZWx0YSA9IHNjcm9sbFNwZWVkICogU0NST0xMX1RPUF9ERUxUQSAqIHRpbWVEZWx0YTtcblxuICAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIFVQX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIExFRlRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBET1dOX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbFRvcCA9IHNjcm9sbFRvcCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJJR0hUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0IC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gIH1cblxuICByZXNldFNjcm9sbGluZygpIHtcbiAgICB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgdGhpcy5zY3JvbGxUb0xlZnQoKTtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgc2Nyb2xsSGVpZ2h0IC0gaW5uZXJIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxUb3A7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgc2Nyb2xsV2lkdGggPSB0aGlzLmdldFNjcm9sbFdpZHRoKCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxXaWR0aCAtIGlubmVyV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1TY3JvbGxMZWZ0O1xuICB9XG5cbiAgY2FuU2Nyb2xsVmVydGljYWxseSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnREaXZIZWlnaHQgPSB0aGlzLmdldERvY3VtZW50RGl2SGVpZ2h0KCksXG4gICAgICAgICAgc2NhbGVkRG9jdW1lbnREaXZIZWlnaHQgPSBkb2N1bWVudERpdkhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgIHNjcm9sbFZlcnRpY2FsbHkgPSBzY2FsZWREb2N1bWVudERpdkhlaWdodCA+IGlubmVySGVpZ2h0O1xuXG4gICAgcmV0dXJuIHNjcm9sbFZlcnRpY2FsbHk7XG4gIH1cblxuICBjYW5TY3JvbGxIb3Jpem9udGFsbHkoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZSgpLFxuICAgICAgICAgIGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBkb2N1bWVudERpdldpZHRoID0gdGhpcy5nZXREb2N1bWVudERpdldpZHRoKCksXG4gICAgICAgICAgc2NhbGVkRG9jdW1lbnREaXZXaWR0aCA9IGRvY3VtZW50RGl2V2lkdGggKiBzY2FsZSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSBzY2FsZWREb2N1bWVudERpdldpZHRoID4gaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiBzY3JvbGxIb3Jpem9udGFsbHk7XG4gIH1cblxuICBnZXRTY2FsZSgpIHtcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBnZXRTdGFydFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY2FsZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2NhbGU7XG4gIH1cblxuICBnZXRBbmltYXRpb25GcmFtZSgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGlvbkZyYW1lIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uRnJhbWU7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbExlZnQoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbExlZnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbExlZnQ7XG4gIH1cblxuICBzZXRTY2FsZShzY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2NhbGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHNjYWxlID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjYWxlID0gbnVsbCxcbiAgICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjYWxlLFxuICAgICAgc3RhcnRTY2FsZSxcbiAgICAgIGFuaW1hdGlvbkZyYW1lLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMub25SZXNpemUodGhpcy5yZXNpemVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub25DdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1JpZ2h0KHRoaXMuZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLm9mZlJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdMZWZ0KHRoaXMuZHJhZ0xlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdG9wKHRoaXMucGluY2hTdG9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxNZW51RGl2Lz4sXG4gICAgICA8RG9jdW1lbnREaXYgcmVzaXplSGFuZGxlcj17cmVzaXplSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKFZpZXcucHJvdG90eXBlLCBmdWxsU2NyZWVuTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICB0b3VjaC1hY3Rpb246IG5vbmU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3QmFja2dyb3VuZENvbG91cn07XG4gIFxuICAke3Njcm9sbGJhck1peGlufVxuICBcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIH1cbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJzaW5nbGVUYXBDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidG9wIiwibGVmdCIsInRhcmdldCIsImxpbmsiLCJnb1RvTGluayIsIm1lbnVEaXYiLCJjbG9zZXN0IiwiTUVOVV9ESVZfU0VMRUNUT1IiLCJ0b2dnbGVNZW51RGl2IiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInNjYWxlIiwiSU5JVElBTF9TQ0FMRSIsInNldFNjYWxlIiwiem9vbSIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiZ2V0U2NhbGUiLCJzdGFydFNjYWxlIiwic2V0U3RhcnRTY2FsZSIsInBpbmNoU3RvcEN1c3RvbUhhbmRsZXIiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFNjYWxlIiwiTWF0aCIsInNxcnQiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNwZWVkIiwic3RvcFNjcm9sbGluZyIsInNjcm9sbEhvcml6b250YWxseSIsImNhblNjcm9sbEhvcml6b250YWxseSIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsZWRMZWZ0Iiwibm9TY3JvbGxMZWZ0Iiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInJlc2V0U2Nyb2xsaW5nIiwic2Nyb2xsU3BlZWQiLCJkaXJlY3Rpb24iLCJSSUdIVF9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJtYXhpbXVtU2Nyb2xsTGVmdCIsImdldE1heGltdW1TY3JvbGxMZWZ0Iiwic2Nyb2xsZWRSaWdodCIsIm5vU2Nyb2xsUmlnaHQiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsIkxFRlRfRElSRUNUSU9OIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNjcm9sbFZlcnRpY2FsbHkiLCJjYW5TY3JvbGxWZXJ0aWNhbGx5IiwiRE9XTl9ESVJFQ1RJT04iLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzdGFydFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxMZWZ0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJzaG93RW1iZWRkZWRNb2RlTWVudUJ1dHRvbiIsImhpZGVGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJoaWRlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiIsInNob3dGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJjb250cm9sbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dMYXN0RGl2aXNpb25EaXYiLCJyZXNpemVIYW5kbGVyIiwicHJlc2VudGF0aW9uTW9kZSIsImFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJkZWFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbiIsImRvY3VtZW50RGl2UHJlc2VudGF0aW9uTW9kZSIsImZ1bGxTY3JlZW5Nb2RlIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJlcnJvciIsImVtYmVkZGVkTW9kZSIsImRyYWZ0TW9kZSIsImRlYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbiIsImFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbiIsImRvY3VtZW50RGl2RHJhZnRNb2RlIiwiQU5DSE9SX0hSRUZfU0VMRUNUT1IiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiSFJFRiIsIkVNUFRZX1NUUklORyIsImhyZWZTdGFydHNXaXRoSGFzaCIsInN0YXJ0c1dpdGgiLCJIQVNIIiwibGlua0V4dGVybmFsIiwiQkxBTktfVEFSR0VUIiwid2luZG93Iiwib3BlbiIsImFuY2hvcklkIiwic3Vic3RyaW5nIiwiZ29Ub0FuY2hvciIsImlubmVyV2lkdGgiLCJnZXRJbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRJbm5lckhlaWdodCIsImRvY3VtZW50U2NhbGUiLCJ2aWV3SW5uZXJXaWR0aCIsInZpZXdJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvTGVmdCIsImFuaW1hdGlvbkZyYW1lIiwiZ2V0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEFuaW1hdGlvbkZyYW1lIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aGVuIiwic3RlcCIsInRpbWVEZWx0YSIsInNjcm9sbFNwZWVkRGVsdGEiLCJTQ1JPTExfU1BFRURfREVMVEEiLCJzY3JvbGxEZWx0YSIsIlNDUk9MTF9UT1BfREVMVEEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRNYXhpbXVtU2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4aW11bVNjcm9sbFRvcCIsIm1heCIsInNjcm9sbFdpZHRoIiwiZ2V0U2Nyb2xsV2lkdGgiLCJkb2N1bWVudERpdkhlaWdodCIsImdldERvY3VtZW50RGl2SGVpZ2h0Iiwic2NhbGVkRG9jdW1lbnREaXZIZWlnaHQiLCJkb2N1bWVudERpdldpZHRoIiwiZ2V0RG9jdW1lbnREaXZXaWR0aCIsInNjYWxlZERvY3VtZW50RGl2V2lkdGgiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwib25SZXNpemUiLCJvbktleURvd24iLCJvbkZ1bGxTY3JlZW5DaGFuZ2UiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21TaW5nbGVUYXAiLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RvcCIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwib2ZmUmVzaXplIiwib2ZmS2V5RG93biIsIm9mZkZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tRHJhZ0xlZnQiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURvdWJsZVRhcCIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RvcCIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0IiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJNZW51RGl2IiwiRG9jdW1lbnREaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsInZpZXdCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyTWl4aW4iLCJ2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwidmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErckJBOzs7ZUFBQTs7O29FQTdyQnNCO3lCQUVHOzJCQUNNO29CQUNDOzBCQUNjOzJEQUUxQjsrREFDSTtxQkFFVzt5QkFDcUI7c0JBQzBGO3lCQVcvRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQVFBLGlCQU15QkMsbUJBQVEsQ0FOakNELGdCQUNBRSxrQkFLeUJELG1CQUFRLENBTGpDQyxpQkFDQUMsb0JBSXlCRixtQkFBUSxDQUpqQ0UsbUJBQ0FDLHFCQUd5QkgsbUJBQVEsQ0FIakNHLG9CQUNBQyxzQkFFeUJKLG1CQUFRLENBRmpDSSxxQkFDQUMsc0JBQ3lCTCxtQkFBUSxDQURqQ0sscUJBQ0FDLHVCQUF5Qk4sbUJBQVEsQ0FBakNNO0FBRVIsSUFBQSxBQUFNQyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDBCQUF5QixTQUFDQyxPQUFPQyxTQUFTQyxLQUFLQztZQUM3QyxJQUFNLEFBQUVDLFNBQVdKLE1BQVhJLFFBQ0ZDLE9BQU8sTUFBS0MsUUFBUSxDQUFDRjtZQUUzQixJQUFJQyxTQUFTLE1BQU07Z0JBQ2pCO1lBQ0Y7WUFFQSxJQUFNRSxVQUFVSCxPQUFPSSxPQUFPLENBQUNDLDRCQUFpQjtZQUVoRCxJQUFJRixZQUFZLE1BQU07Z0JBQ3BCO1lBQ0Y7WUFF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