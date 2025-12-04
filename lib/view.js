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
        }), _define_property(_this, "fullScreenChangeHandler", function(event, element) {
            var fullScreen = _this.isFullScreen();
            if (fullScreen) {
                _this.hideFullScreenModeMenuButton();
                _this.showEmbe;
                _this.resetScrolling();
                _this.zoom();
                return;
            }
            var embedding;
            embedding = true;
            _this.setEmbedding(embedding);
            var delay = _constants.EMBEDDING_DELAY;
            setTimeout(function() {
                embedding = false;
                _this.setEmbedding(embedding);
            }, delay);
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
            var embedding = _this.isEmbedding();
            if (!embedding) {
                return;
            }
            _this.zoom();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "fullScreenNode",
            value: function fullScreenNode() {
                var fullScreen = this.isFullScreen();
                if (fullScreen) {
                    return;
                }
                this.disableFullScreenModeMenuButton();
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
                this.disableEmbeddedModeMenuButton();
                this.exitFullScreen(function(error) {
                ///
                });
            }
        },
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
            key: "isEmbedding",
            value: function isEmbedding() {
                var embedding = this.getState().embedding;
                return embedding;
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
            key: "setEmbedding",
            value: function setEmbedding(embedding) {
                this.updateState({
                    embedding: embedding
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
                var scale = null, embedding = false, startScale = null, animationFrame = null, startScrollTop = null, startScrollLeft = null;
                this.setState({
                    scale: scale,
                    embedding: embedding,
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
                this.enableFullScreen();
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
                this.disableFullScreen();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuXG5pbXBvcnQgeyBnZXRTY2FsZSwgc2V0U2NhbGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHZpZXdCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgSFJFRixcbiAgICAgICAgIEhBU0gsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBCTEFOS19UQVJHRVQsXG4gICAgICAgICBVUF9ESVJFQ1RJT04sXG4gICAgICAgICBMRUZUX0RJUkVDVElPTixcbiAgICAgICAgIERPV05fRElSRUNUSU9OLFxuICAgICAgICAgUklHSFRfRElSRUNUSU9OLFxuICAgICAgICAgRU1CRURESU5HX0RFTEFZLFxuICAgICAgICAgU0NST0xMX1RPUF9ERUxUQSxcbiAgICAgICAgIFNDUk9MTF9TUEVFRF9ERUxUQSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzaW5nbGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5nb1RvTGluayhldmVudCwgZWxlbWVudCk7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlTWVudURpdigpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSAxO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBzdGFydFNjYWxlID0gc2NhbGU7IC8vL1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSk7XG4gIH1cblxuICBwaW5jaFN0b3BDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG5cbiAgICBzZXRTY2FsZShzY2FsZSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NhbGUgPSB0aGlzLmdldFN0YXJ0U2NhbGUoKSxcbiAgICAgICAgICBzY2FsZSA9IHN0YXJ0U2NhbGUgKiBNYXRoLnNxcnQocmF0aW8pO1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnpvb20oc2NhbGUpO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbGVkTGVmdCA9IHNjcm9sbExlZnQgPD0gMSxcbiAgICAgICAgICBub1Njcm9sbExlZnQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkTGVmdCB8fCBub1Njcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gTEVGVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpO1xuXG4gICAgaWYgKHNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSG9yaXpvbnRhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vL1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgdGhpcy5oaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uKCk7XG4gICAgICB0aGlzLnNob3dFbWJlXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGVtYmVkZGluZztcblxuICAgIGVtYmVkZGluZyA9IHRydWU7XG5cbiAgICB0aGlzLnNldEVtYmVkZGluZyhlbWJlZGRpbmcpO1xuXG4gICAgY29uc3QgZGVsYXkgPSBFTUJFRERJTkdfREVMQVk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVtYmVkZGluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLnNldEVtYmVkZGluZyhlbWJlZGRpbmcpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEVOVEVSX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzaXplSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVtYmVkZGluZyA9IHRoaXMuaXNFbWJlZGRpbmcoKTtcblxuICAgIGlmICghZW1iZWRkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBmdWxsU2NyZWVuTm9kZSgpIHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kaXNhYmxlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uKCk7XG5cbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKChlcnJvcikgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBlbWJlZGRlZE1vZGUoKSB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoIWZ1bGxTY3JlZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRpc2FibGVFbWJlZGRlZE1vZGVNZW51QnV0dG9uKCk7XG5cbiAgICB0aGlzLmV4aXRGdWxsU2NyZWVuKChlcnJvcikgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBnb1RvTGluayhldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoQU5DSE9SX0hSRUZfU0VMRUNUT1IpO1xuXG4gICAgaWYgKGxpbmsgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZShIUkVGKTtcblxuICAgICAgaWYgKGhyZWYgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhyZWZTdGFydHNXaXRoSGFzaCA9IGhyZWYuc3RhcnRzV2l0aChIQVNIKSxcbiAgICAgICAgICAgIGxpbmtFeHRlcm5hbCA9ICFocmVmU3RhcnRzV2l0aEhhc2g7XG5cbiAgICAgIGlmIChsaW5rRXh0ZXJuYWwpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gQkxBTktfVEFSR0VUO1xuXG4gICAgICAgIHdpbmRvdy5vcGVuKGhyZWYsIHRhcmdldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhbmNob3JJZCA9IGhyZWYuc3Vic3RyaW5nKDEpOyAvLy9cblxuICAgICAgICB0aGlzLmdvVG9BbmNob3IoYW5jaG9ySWQpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGluaztcbiAgfVxuXG4gIHpvb20oc2NhbGUgPSBudWxsKSB7XG4gICAgaWYgKHNjYWxlID09PSBudWxsKSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50U2NhbGUgPSBzY2FsZSwgLy8vXG4gICAgICAgICAgdmlld0lubmVyV2lkdGggPSBpbm5lcldpZHRoLCAvLy9cbiAgICAgICAgICB2aWV3SW5uZXJIZWlnaHQgPSBpbm5lckhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnNjYWxlRG9jdW1lbnREaXYoZG9jdW1lbnRTY2FsZSwgdmlld0lubmVyV2lkdGgsIHZpZXdJbm5lckhlaWdodCk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHNjcm9sbFRvTGVmdCgpIHtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lID0gdGhpcy5nZXRBbmltYXRpb25GcmFtZSgpO1xuXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG5cbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgICB0aGVuO1xuXG4gICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgY29uc3Qgc3RlcCA9IChub3cpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IG5vdyAtIHRoZW4sXG4gICAgICAgICAgICBzY3JvbGxTcGVlZERlbHRhID0gU0NST0xMX1NQRUVEX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBzY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkIC0gc2Nyb2xsU3BlZWREZWx0YTtcblxuICAgICAgaWYgKHNjcm9sbFNwZWVkIDwgMCkge1xuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2Nyb2xsU3BlZWQgKiBTQ1JPTExfVE9QX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgVVBfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wICsgc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTEVGVF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIERPV05fRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wIC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUklHSFRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIHJlc2V0U2Nyb2xsaW5nKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcbiAgICB0aGlzLnNjcm9sbFRvTGVmdCgpO1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICB9XG5cbiAgZ2V0TWF4aW11bVNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBzY3JvbGxIZWlnaHQgLSBpbm5lckhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBzY3JvbGxXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsTGVmdCA9IE1hdGgubWF4KDAsIHNjcm9sbFdpZHRoIC0gaW5uZXJXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVNjcm9sbExlZnQ7XG4gIH1cblxuICBjYW5TY3JvbGxWZXJ0aWNhbGx5KCkge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudERpdkhlaWdodCA9IHRoaXMuZ2V0RG9jdW1lbnREaXZIZWlnaHQoKSxcbiAgICAgICAgICBzY2FsZWREb2N1bWVudERpdkhlaWdodCA9IGRvY3VtZW50RGl2SGVpZ2h0ICogc2NhbGUsXG4gICAgICAgICAgc2Nyb2xsVmVydGljYWxseSA9IHNjYWxlZERvY3VtZW50RGl2SGVpZ2h0ID4gaW5uZXJIZWlnaHQ7XG5cbiAgICByZXR1cm4gc2Nyb2xsVmVydGljYWxseTtcbiAgfVxuXG4gIGNhblNjcm9sbEhvcml6b250YWxseSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGRvY3VtZW50RGl2V2lkdGggPSB0aGlzLmdldERvY3VtZW50RGl2V2lkdGgoKSxcbiAgICAgICAgICBzY2FsZWREb2N1bWVudERpdldpZHRoID0gZG9jdW1lbnREaXZXaWR0aCAqIHNjYWxlLFxuICAgICAgICAgIHNjcm9sbEhvcml6b250YWxseSA9IHNjYWxlZERvY3VtZW50RGl2V2lkdGggPiBpbm5lcldpZHRoO1xuXG4gICAgcmV0dXJuIHNjcm9sbEhvcml6b250YWxseTtcbiAgfVxuXG4gIGdldFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGlzRW1iZWRkaW5nKCkge1xuICAgIGNvbnN0IHsgZW1iZWRkaW5nIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZW1iZWRkaW5nO1xuICB9XG5cbiAgZ2V0U3RhcnRTY2FsZSgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2NhbGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjYWxlO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgY29uc3QgeyBhbmltYXRpb25GcmFtZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGFuaW1hdGlvbkZyYW1lO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxUb3AoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuICB9XG5cbiAgZ2V0U3RhcnRTY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxMZWZ0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxMZWZ0O1xuICB9XG5cbiAgc2V0U2NhbGUoc2NhbGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHNjYWxlXG4gICAgfSk7XG4gIH1cblxuICBzZXRFbWJlZGRpbmcoZW1iZWRkaW5nKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBlbWJlZGRpbmdcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsTGVmdChzdGFydFNjcm9sbExlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHNjYWxlID0gbnVsbCxcbiAgICAgICAgICBlbWJlZGRpbmcgPSBmYWxzZSxcbiAgICAgICAgICBzdGFydFNjYWxlID0gbnVsbCxcbiAgICAgICAgICBhbmltYXRpb25GcmFtZSA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjYWxlLFxuICAgICAgZW1iZWRkaW5nLFxuICAgICAgc3RhcnRTY2FsZSxcbiAgICAgIGFuaW1hdGlvbkZyYW1lLFxuICAgICAgc3RhcnRTY3JvbGxUb3AsXG4gICAgICBzdGFydFNjcm9sbExlZnRcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub25GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RvcCh0aGlzLnBpbmNoU3RvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMuZGlzYWJsZUZ1bGxTY3JlZW4oKTtcblxuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1lbnVEaXYvPixcbiAgICAgIDxEb2N1bWVudERpdiByZXNpemVIYW5kbGVyPXtyZXNpemVIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgXG4gICR7c2Nyb2xsYmFyTWl4aW59XG4gIFxuICBAbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICAgIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgfVxuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInNpbmdsZVRhcEN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0b3AiLCJsZWZ0IiwibGluayIsImdvVG9MaW5rIiwidG9nZ2xlTWVudURpdiIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJzY2FsZSIsInNldFNjYWxlIiwiem9vbSIsInBpbmNoU3RhcnRDdXN0b21IYW5kbGVyIiwiZ2V0U2NhbGUiLCJzdGFydFNjYWxlIiwic2V0U3RhcnRTY2FsZSIsInBpbmNoU3RvcEN1c3RvbUhhbmRsZXIiLCJwaW5jaE1vdmVDdXN0b21IYW5kbGVyIiwicmF0aW8iLCJnZXRTdGFydFNjYWxlIiwiTWF0aCIsInNxcnQiLCJzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciIsInNwZWVkIiwic3RvcFNjcm9sbGluZyIsInNjcm9sbEhvcml6b250YWxseSIsImNhblNjcm9sbEhvcml6b250YWxseSIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsZWRMZWZ0Iiwibm9TY3JvbGxMZWZ0Iiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInJlc2V0U2Nyb2xsaW5nIiwic2Nyb2xsU3BlZWQiLCJkaXJlY3Rpb24iLCJSSUdIVF9ESVJFQ1RJT04iLCJzdGFydFNjcm9sbGluZyIsInN3aXBlTGVmdEN1c3RvbUhhbmRsZXIiLCJtYXhpbXVtU2Nyb2xsTGVmdCIsImdldE1heGltdW1TY3JvbGxMZWZ0Iiwic2Nyb2xsZWRSaWdodCIsIm5vU2Nyb2xsUmlnaHQiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsIkxFRlRfRElSRUNUSU9OIiwic3dpcGVEb3duQ3VzdG9tSGFuZGxlciIsInNjcm9sbFZlcnRpY2FsbHkiLCJjYW5TY3JvbGxWZXJ0aWNhbGx5IiwiRE9XTl9ESVJFQ1RJT04iLCJzd2lwZVVwQ3VzdG9tSGFuZGxlciIsIlVQX0RJUkVDVElPTiIsImRyYWdTdGFydEN1c3RvbUhhbmRsZXIiLCJzdGFydFNjcm9sbFRvcCIsInN0YXJ0U2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxMZWZ0IiwiZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsTGVmdCIsInNldFNjcm9sbExlZnQiLCJkcmFnRG93bkN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbFRvcCIsInNldFNjcm9sbFRvcCIsImRyYWdMZWZ0Q3VzdG9tSGFuZGxlciIsImRyYWdVcEN1c3RvbUhhbmRsZXIiLCJmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwic2hvd0VtYmUiLCJlbWJlZGRpbmciLCJzZXRFbWJlZGRpbmciLCJkZWxheSIsIkVNQkVERElOR19ERUxBWSIsInNldFRpbWVvdXQiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJjb250cm9sbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dMYXN0RGl2aXNpb25EaXYiLCJyZXNpemVIYW5kbGVyIiwiaXNFbWJlZGRpbmciLCJmdWxsU2NyZWVuTm9kZSIsImRpc2FibGVGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsImVycm9yIiwiZW1iZWRkZWRNb2RlIiwiZGlzYWJsZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiQU5DSE9SX0hSRUZfU0VMRUNUT1IiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiSFJFRiIsIkVNUFRZX1NUUklORyIsImhyZWZTdGFydHNXaXRoSGFzaCIsInN0YXJ0c1dpdGgiLCJIQVNIIiwibGlua0V4dGVybmFsIiwiQkxBTktfVEFSR0VUIiwid2luZG93Iiwib3BlbiIsImFuY2hvcklkIiwic3Vic3RyaW5nIiwiZ29Ub0FuY2hvciIsImlubmVyV2lkdGgiLCJnZXRJbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRJbm5lckhlaWdodCIsImRvY3VtZW50U2NhbGUiLCJ2aWV3SW5uZXJXaWR0aCIsInZpZXdJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvTGVmdCIsImFuaW1hdGlvbkZyYW1lIiwiZ2V0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldEFuaW1hdGlvbkZyYW1lIiwibm93IiwicGVyZm9ybWFuY2UiLCJ0aGVuIiwic3RlcCIsInRpbWVEZWx0YSIsInNjcm9sbFNwZWVkRGVsdGEiLCJTQ1JPTExfU1BFRURfREVMVEEiLCJzY3JvbGxEZWx0YSIsIlNDUk9MTF9UT1BfREVMVEEiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnZXRNYXhpbXVtU2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4aW11bVNjcm9sbFRvcCIsIm1heCIsInNjcm9sbFdpZHRoIiwiZ2V0U2Nyb2xsV2lkdGgiLCJkb2N1bWVudERpdkhlaWdodCIsImdldERvY3VtZW50RGl2SGVpZ2h0Iiwic2NhbGVkRG9jdW1lbnREaXZIZWlnaHQiLCJkb2N1bWVudERpdldpZHRoIiwiZ2V0RG9jdW1lbnREaXZXaWR0aCIsInNjYWxlZERvY3VtZW50RGl2V2lkdGgiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsImVuYWJsZVRvdWNoIiwiZW5hYmxlRnVsbFNjcmVlbiIsIm9uUmVzaXplIiwib25LZXlEb3duIiwib25GdWxsU2NyZWVuQ2hhbmdlIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21Eb3VibGVUYXAiLCJvbkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0b3AiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsImRpc2FibGVGdWxsU2NyZWVuIiwib2ZmUmVzaXplIiwib2ZmS2V5RG93biIsIm9mZkZ1bGxTY3JlZW5DaGFuZ2UiLCJvZmZDdXN0b21EcmFnVXAiLCJvZmZDdXN0b21Td2lwZVVwIiwib2ZmQ3VzdG9tRHJhZ0xlZnQiLCJvZmZDdXN0b21EcmFnRG93biIsIm9mZkN1c3RvbURvdWJsZVRhcCIsIm9mZkN1c3RvbVNpbmdsZVRhcCIsIm9mZkN1c3RvbURyYWdSaWdodCIsIm9mZkN1c3RvbURyYWdTdGFydCIsIm9mZkN1c3RvbVN3aXBlTGVmdCIsIm9mZkN1c3RvbVN3aXBlRG93biIsIm9mZkN1c3RvbVBpbmNoTW92ZSIsIm9mZkN1c3RvbVBpbmNoU3RvcCIsIm9mZkN1c3RvbVBpbmNoU3RhcnQiLCJvZmZDdXN0b21Td2lwZVJpZ2h0IiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJNZW51RGl2IiwiRG9jdW1lbnREaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsInZpZXdCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyTWl4aW4iLCJ2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwidmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpdEJBOzs7ZUFBQTs7O29FQS9zQnNCO3lCQUVHOzJCQUNNO29CQUNDOzBCQUNjOzJEQUUxQjsrREFDSTtxQkFFVzt5QkFDRTtzQkFDNkc7eUJBVy9HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBUUEsaUJBTXlCQyxtQkFBUSxDQU5qQ0QsZ0JBQ0FFLGtCQUt5QkQsbUJBQVEsQ0FMakNDLGlCQUNBQyxvQkFJeUJGLG1CQUFRLENBSmpDRSxtQkFDQUMscUJBR3lCSCxtQkFBUSxDQUhqQ0csb0JBQ0FDLHNCQUV5QkosbUJBQVEsQ0FGakNJLHFCQUNBQyxzQkFDeUJMLG1CQUFRLENBRGpDSyxxQkFDQUMsdUJBQXlCTixtQkFBUSxDQUFqQ007QUFFUixJQUFBLEFBQU1DLHFCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLGtCQUNKQyx3QkFBQUEsMEJBQXlCLFNBQUNDLE9BQU9DLFNBQVNDLEtBQUtDO1lBQzdDLElBQU1DLE9BQU8sTUFBS0MsUUFBUSxDQUFDTCxPQUFPQztZQUVsQyxJQUFJRyxTQUFTLE1BQU07Z0JBQ2pCO1lBQ0Y7WUFFQSxNQUFLRSxhQUFhO1FBQ3BCLElBRUFDLHdCQUFBQSwwQkFBeUIsU0FBQ1AsT0FBT0MsU0FBU0MsS0FBS0M7WUFDN0MsSUFBTUssUUFBUTtZQUVkQyxJQUFBQSxlQUFRLEVB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