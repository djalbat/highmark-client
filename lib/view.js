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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuXG5pbXBvcnQgeyBnZXRTY2FsZSwgc2V0U2NhbGUgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHZpZXdCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgSFJFRixcbiAgICAgICAgIEhBU0gsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBCTEFOS19UQVJHRVQsXG4gICAgICAgICBVUF9ESVJFQ1RJT04sXG4gICAgICAgICBMRUZUX0RJUkVDVElPTixcbiAgICAgICAgIERPV05fRElSRUNUSU9OLFxuICAgICAgICAgUklHSFRfRElSRUNUSU9OLFxuICAgICAgICAgRU1CRURESU5HX0RFTEFZLFxuICAgICAgICAgU0NST0xMX1RPUF9ERUxUQSxcbiAgICAgICAgIFNDUk9MTF9TUEVFRF9ERUxUQSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBzaW5nbGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5nb1RvTGluayhldmVudCwgZWxlbWVudCk7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlTWVudURpdigpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSAxO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBzdGFydFNjYWxlID0gc2NhbGU7IC8vL1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSk7XG4gIH1cblxuICBwaW5jaFN0b3BDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG5cbiAgICBzZXRTY2FsZShzY2FsZSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NhbGUgPSB0aGlzLmdldFN0YXJ0U2NhbGUoKSxcbiAgICAgICAgICBzY2FsZSA9IHN0YXJ0U2NhbGUgKiBNYXRoLnNxcnQocmF0aW8pO1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnpvb20oc2NhbGUpO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbGVkTGVmdCA9IHNjcm9sbExlZnQgPD0gMSxcbiAgICAgICAgICBub1Njcm9sbExlZnQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkTGVmdCB8fCBub1Njcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gTEVGVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpO1xuXG4gICAgaWYgKHNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSG9yaXpvbnRhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vL1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBlbWJlZGRpbmc7XG5cbiAgICBlbWJlZGRpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRFbWJlZGRpbmcoZW1iZWRkaW5nKTtcblxuICAgIGNvbnN0IGRlbGF5ID0gRU1CRURESU5HX0RFTEFZO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlbWJlZGRpbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5zZXRFbWJlZGRpbmcoZW1iZWRkaW5nKTtcbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgIGlmIChmdWxsU2NyZWVuKSB7XG4gICAgICAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbWJlZGRpbmcgPSB0aGlzLmlzRW1iZWRkaW5nKCk7XG5cbiAgICBpZiAoIWVtYmVkZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAgZnVsbFNjcmVlbk5vZGUoKSB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKGVycm9yKSA9PiB7XG4gICAgICAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIGVtYmVkZGVkTW9kZSgpIHtcbiAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgIGlmICghZnVsbFNjcmVlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXhpdEZ1bGxTY3JlZW4oKGVycm9yKSA9PiB7XG4gICAgICAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIGdvVG9MaW5rKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LFxuICAgICAgICAgIGxpbmsgPSB0YXJnZXQuY2xvc2VzdChBTkNIT1JfSFJFRl9TRUxFQ1RPUik7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKEhSRUYpO1xuXG4gICAgICBpZiAoaHJlZiA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaHJlZlN0YXJ0c1dpdGhIYXNoID0gaHJlZi5zdGFydHNXaXRoKEhBU0gpLFxuICAgICAgICAgICAgbGlua0V4dGVybmFsID0gIWhyZWZTdGFydHNXaXRoSGFzaDtcblxuICAgICAgaWYgKGxpbmtFeHRlcm5hbCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBCTEFOS19UQVJHRVQ7XG5cbiAgICAgICAgd2luZG93Lm9wZW4oaHJlZiwgdGFyZ2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFuY2hvcklkID0gaHJlZi5zdWJzdHJpbmcoMSk7IC8vL1xuXG4gICAgICAgIHRoaXMuZ29Ub0FuY2hvcihhbmNob3JJZCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFNjcm9sbGluZygpO1xuXG4gICAgICAgIHRoaXMuem9vbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsaW5rO1xuICB9XG5cbiAgem9vbShzY2FsZSA9IG51bGwpIHtcbiAgICBpZiAoc2NhbGUgPT09IG51bGwpIHtcbiAgICAgIHNjYWxlID0gZ2V0U2NhbGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgaW5uZXJIZWlnaHQgPSB0aGlzLmdldElubmVySGVpZ2h0KCksXG4gICAgICAgICAgZG9jdW1lbnRTY2FsZSA9IHNjYWxlLCAvLy9cbiAgICAgICAgICB2aWV3SW5uZXJXaWR0aCA9IGlubmVyV2lkdGgsIC8vL1xuICAgICAgICAgIHZpZXdJbm5lckhlaWdodCA9IGlubmVySGVpZ2h0OyAvLy9cblxuICAgIHRoaXMuc2NhbGVEb2N1bWVudERpdihkb2N1bWVudFNjYWxlLCB2aWV3SW5uZXJXaWR0aCwgdmlld0lubmVySGVpZ2h0KTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IDA7XG5cbiAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuICB9XG5cbiAgc2Nyb2xsVG9MZWZ0KCkge1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuICB9XG5cbiAgc3RvcFNjcm9sbGluZygpIHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWUgPSB0aGlzLmdldEFuaW1hdGlvbkZyYW1lKCk7XG5cbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcblxuICAgICAgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCksXG4gICAgICAgIHRoZW47XG5cbiAgICB0aGVuID0gbm93OyAgLy8vXG5cbiAgICBjb25zdCBzdGVwID0gKG5vdykgPT4ge1xuICAgICAgY29uc3QgdGltZURlbHRhID0gbm93IC0gdGhlbixcbiAgICAgICAgICAgIHNjcm9sbFNwZWVkRGVsdGEgPSBTQ1JPTExfU1BFRURfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIHNjcm9sbFNwZWVkID0gc2Nyb2xsU3BlZWQgLSBzY3JvbGxTcGVlZERlbHRhO1xuXG4gICAgICBpZiAoc2Nyb2xsU3BlZWQgPCAwKSB7XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2Nyb2xsRGVsdGEgPSBzY3JvbGxTcGVlZCAqIFNDUk9MTF9UT1BfREVMVEEgKiB0aW1lRGVsdGE7XG5cbiAgICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKTtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBVUF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgKyBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBMRUZUX0RJUkVDVElPTjoge1xuICAgICAgICAgIHNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0ICsgc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRE9XTl9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGxUb3AgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSSUdIVF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXG4gICAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuXG4gICAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgIHRoaXMuc2V0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgcmVzZXRTY3JvbGxpbmcoKSB7XG4gICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgIHRoaXMuc2Nyb2xsVG9MZWZ0KCk7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gIH1cblxuICBnZXRNYXhpbXVtU2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtU2Nyb2xsVG9wO1xuICB9XG5cbiAgZ2V0TWF4aW11bVNjcm9sbExlZnQoKSB7XG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIHNjcm9sbFdpZHRoID0gdGhpcy5nZXRTY3JvbGxXaWR0aCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gTWF0aC5tYXgoMCwgc2Nyb2xsV2lkdGggLSBpbm5lcldpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtU2Nyb2xsTGVmdDtcbiAgfVxuXG4gIGNhblNjcm9sbFZlcnRpY2FsbHkoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBnZXRTY2FsZSgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50RGl2SGVpZ2h0ID0gdGhpcy5nZXREb2N1bWVudERpdkhlaWdodCgpLFxuICAgICAgICAgIHNjYWxlZERvY3VtZW50RGl2SGVpZ2h0ID0gZG9jdW1lbnREaXZIZWlnaHQgKiBzY2FsZSxcbiAgICAgICAgICBzY3JvbGxWZXJ0aWNhbGx5ID0gc2NhbGVkRG9jdW1lbnREaXZIZWlnaHQgPiBpbm5lckhlaWdodDtcblxuICAgIHJldHVybiBzY3JvbGxWZXJ0aWNhbGx5O1xuICB9XG5cbiAgY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCkge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBpbm5lcldpZHRoID0gdGhpcy5nZXRJbm5lcldpZHRoKCksXG4gICAgICAgICAgZG9jdW1lbnREaXZXaWR0aCA9IHRoaXMuZ2V0RG9jdW1lbnREaXZXaWR0aCgpLFxuICAgICAgICAgIHNjYWxlZERvY3VtZW50RGl2V2lkdGggPSBkb2N1bWVudERpdldpZHRoICogc2NhbGUsXG4gICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5ID0gc2NhbGVkRG9jdW1lbnREaXZXaWR0aCA+IGlubmVyV2lkdGg7XG5cbiAgICByZXR1cm4gc2Nyb2xsSG9yaXpvbnRhbGx5O1xuICB9XG5cbiAgZ2V0U2NhbGUoKSB7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgaXNFbWJlZGRpbmcoKSB7XG4gICAgY29uc3QgeyBlbWJlZGRpbmcgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBlbWJlZGRpbmc7XG4gIH1cblxuICBnZXRTdGFydFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY2FsZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2NhbGU7XG4gIH1cblxuICBnZXRBbmltYXRpb25GcmFtZSgpIHtcbiAgICBjb25zdCB7IGFuaW1hdGlvbkZyYW1lIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uRnJhbWU7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4gIH1cblxuICBnZXRTdGFydFNjcm9sbExlZnQoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjcm9sbExlZnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbExlZnQ7XG4gIH1cblxuICBzZXRTY2FsZShzY2FsZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc2NhbGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEVtYmVkZGluZyhlbWJlZGRpbmcpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGVtYmVkZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY2FsZShzdGFydFNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjYWxlXG4gICAgfSk7XG4gIH1cblxuICBzZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBudWxsLFxuICAgICAgICAgIGVtYmVkZGluZyA9IGZhbHNlLFxuICAgICAgICAgIHN0YXJ0U2NhbGUgPSBudWxsLFxuICAgICAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2NhbGUsXG4gICAgICBlbWJlZGRpbmcsXG4gICAgICBzdGFydFNjYWxlLFxuICAgICAgYW5pbWF0aW9uRnJhbWUsXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKHRoaXMucmVzaXplSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdMZWZ0KHRoaXMuZHJhZ0xlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hTdG9wKHRoaXMucGluY2hTdG9wQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuXG4gICAgdGhpcy5vZmZSZXNpemUodGhpcy5yZXNpemVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZGdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1JpZ2h0KHRoaXMuZHJhZ1JpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RvcCh0aGlzLnBpbmNoU3RvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSB0aGlzLnJlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8TWVudURpdi8+LFxuICAgICAgPERvY3VtZW50RGl2IHJlc2l6ZUhhbmRsZXI9e3Jlc2l6ZUhhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihWaWV3LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dmlld0JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gICAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICB9XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3Iiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRvcCIsImxlZnQiLCJsaW5rIiwiZ29Ub0xpbmsiLCJ0b2dnbGVNZW51RGl2IiwiZG91YmxlVGFwQ3VzdG9tSGFuZGxlciIsInNjYWxlIiwic2V0U2NhbGUiLCJ6b29tIiwicGluY2hTdGFydEN1c3RvbUhhbmRsZXIiLCJnZXRTY2FsZSIsInN0YXJ0U2NhbGUiLCJzZXRTdGFydFNjYWxlIiwicGluY2hTdG9wQ3VzdG9tSGFuZGxlciIsInBpbmNoTW92ZUN1c3RvbUhhbmRsZXIiLCJyYXRpbyIsImdldFN0YXJ0U2NhbGUiLCJNYXRoIiwic3FydCIsInN3aXBlUmlnaHRDdXN0b21IYW5kbGVyIiwic3BlZWQiLCJzdG9wU2Nyb2xsaW5nIiwic2Nyb2xsSG9yaXpvbnRhbGx5IiwiY2FuU2Nyb2xsSG9yaXpvbnRhbGx5Iiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJzY3JvbGxlZExlZnQiLCJub1Njcm9sbExlZnQiLCJzaG93TGVmdERpdmlzaW9uRGl2IiwicmVzZXRTY3JvbGxpbmciLCJzY3JvbGxTcGVlZCIsImRpcmVjdGlvbiIsIlJJR0hUX0RJUkVDVElPTiIsInN0YXJ0U2Nyb2xsaW5nIiwic3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciIsIm1heGltdW1TY3JvbGxMZWZ0IiwiZ2V0TWF4aW11bVNjcm9sbExlZnQiLCJzY3JvbGxlZFJpZ2h0Iiwibm9TY3JvbGxSaWdodCIsInNob3dSaWdodERpdmlzaW9uRGl2IiwiTEVGVF9ESVJFQ1RJT04iLCJzd2lwZURvd25DdXN0b21IYW5kbGVyIiwic2Nyb2xsVmVydGljYWxseSIsImNhblNjcm9sbFZlcnRpY2FsbHkiLCJET1dOX0RJUkVDVElPTiIsInN3aXBlVXBDdXN0b21IYW5kbGVyIiwiVVBfRElSRUNUSU9OIiwiZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlciIsInN0YXJ0U2Nyb2xsVG9wIiwic3RhcnRTY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbExlZnQiLCJkcmFnUmlnaHRDdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxMZWZ0Iiwic2V0U2Nyb2xsTGVmdCIsImRyYWdEb3duQ3VzdG9tSGFuZGxlciIsImdldFN0YXJ0U2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiZHJhZ0xlZnRDdXN0b21IYW5kbGVyIiwiZHJhZ1VwQ3VzdG9tSGFuZGxlciIsImZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImVtYmVkZGluZyIsInNldEVtYmVkZGluZyIsImRlbGF5IiwiRU1CRURESU5HX0RFTEFZIiwic2V0VGltZW91dCIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInJlc2l6ZUhhbmRsZXIiLCJpc0VtYmVkZGluZyIsImZ1bGxTY3JlZW5Ob2RlIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJlcnJvciIsImVtYmVkZGVkTW9kZSIsInRhcmdldCIsImNsb3Nlc3QiLCJBTkNIT1JfSFJFRl9TRUxFQ1RPUiIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJIUkVGIiwiRU1QVFlfU1RSSU5HIiwiaHJlZlN0YXJ0c1dpdGhIYXNoIiwic3RhcnRzV2l0aCIsIkhBU0giLCJsaW5rRXh0ZXJuYWwiLCJCTEFOS19UQVJHRVQiLCJ3aW5kb3ciLCJvcGVuIiwiYW5jaG9ySWQiLCJzdWJzdHJpbmciLCJnb1RvQW5jaG9yIiwiaW5uZXJXaWR0aCIsImdldElubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldElubmVySGVpZ2h0IiwiZG9jdW1lbnRTY2FsZSIsInZpZXdJbm5lcldpZHRoIiwidmlld0lubmVySGVpZ2h0Iiwic2NhbGVEb2N1bWVudERpdiIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG9MZWZ0IiwiYW5pbWF0aW9uRnJhbWUiLCJnZXRBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0QW5pbWF0aW9uRnJhbWUiLCJub3ciLCJwZXJmb3JtYW5jZSIsInRoZW4iLCJzdGVwIiwidGltZURlbHRhIiwic2Nyb2xsU3BlZWREZWx0YSIsIlNDUk9MTF9TUEVFRF9ERUxUQSIsInNjcm9sbERlbHRhIiwiU0NST0xMX1RPUF9ERUxUQSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldE1heGltdW1TY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJnZXRTY3JvbGxIZWlnaHQiLCJtYXhpbXVtU2Nyb2xsVG9wIiwibWF4Iiwic2Nyb2xsV2lkdGgiLCJnZXRTY3JvbGxXaWR0aCIsImRvY3VtZW50RGl2SGVpZ2h0IiwiZ2V0RG9jdW1lbnREaXZIZWlnaHQiLCJzY2FsZWREb2N1bWVudERpdkhlaWdodCIsImRvY3VtZW50RGl2V2lkdGgiLCJnZXREb2N1bWVudERpdldpZHRoIiwic2NhbGVkRG9jdW1lbnREaXZXaWR0aCIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50IiwiZW5hYmxlVG91Y2giLCJlbmFibGVGdWxsU2NyZWVuIiwib25SZXNpemUiLCJvbktleURvd24iLCJvbkZ1bGxTY3JlZW5DaGFuZ2UiLCJvbkN1c3RvbURyYWdVcCIsIm9uQ3VzdG9tU3dpcGVVcCIsIm9uQ3VzdG9tRHJhZ0xlZnQiLCJvbkN1c3RvbURyYWdEb3duIiwib25DdXN0b21TaW5nbGVUYXAiLCJvbkN1c3RvbURvdWJsZVRhcCIsIm9uQ3VzdG9tRHJhZ1JpZ2h0Iiwib25DdXN0b21EcmFnU3RhcnQiLCJvbkN1c3RvbVN3aXBlTGVmdCIsIm9uQ3VzdG9tU3dpcGVEb3duIiwib25DdXN0b21QaW5jaE1vdmUiLCJvbkN1c3RvbVBpbmNoU3RvcCIsIm9uQ3VzdG9tUGluY2hTdGFydCIsIm9uQ3VzdG9tU3dpcGVSaWdodCIsIndpbGxVbm1vdW50IiwiZGlzYWJsZVRvdWNoIiwiZGlzYWJsZUZ1bGxTY3JlZW4iLCJvZmZSZXNpemUiLCJvZmZLZXlEb3duIiwib2ZmRnVsbFNjcmVlbkNoYW5nZSIsIm9mZkN1c3RvbURyYWdVcCIsIm9mZkN1c3RvbVN3aXBlVXAiLCJvZmZDdXN0b21EcmFnTGVmdCIsIm9mZkN1c3RvbURyYWdEb3duIiwib2ZmQ3VzdG9tRG91YmxlVGFwIiwib2ZmQ3VzdG9tU2luZ2xlVGFwIiwib2ZmQ3VzdG9tRHJhZ1JpZ2h0Iiwib2ZmQ3VzdG9tRHJhZ1N0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVMZWZ0Iiwib2ZmQ3VzdG9tU3dpcGVEb3duIiwib2ZmQ3VzdG9tUGluY2hNb3ZlIiwib2ZmQ3VzdG9tUGluY2hTdG9wIiwib2ZmQ3VzdG9tUGluY2hTdGFydCIsIm9mZkN1c3RvbVN3aXBlUmlnaHQiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIk1lbnVEaXYiLCJEb2N1bWVudERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIiwidmlld0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJNaXhpbiIsInZpZXdTY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJ2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwidmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJzQkE7OztlQUFBOzs7b0VBenNCc0I7eUJBRUc7MkJBQ007b0JBQ0M7MEJBQ2M7MkRBRTFCOytEQUNJO3FCQUVXO3lCQUNFO3NCQUM2Rzt5QkFXL0c7Ozs7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