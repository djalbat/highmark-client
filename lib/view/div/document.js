"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" // fullScreenChangeCustomHandler = (event, element) => {
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
 // swipeRightCustomHandler = (event, element, top, left, spped) => {
 //   this.showLeftDivisionDiv();
 // }
 //
 // swipeLeftCustomHandler = (event, element, top, left, spped) => {
 //   this.showRightDivisionDiv();
 // }
 //
 // swipeDownCustomHandler = (event, element, top, left, speed) => {
 //   const direction = DOWN_DIRECTION;
 //
 //   this.startScrolling(speed, direction);
 // }
 //
 // swipeUpCustomHandler = (event, element, top, left, speed) => {
 //   const direction = UP_DIRECTION;
 //
 //   this.startScrolling(speed, direction);
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
 // scrollToTop() {
 //   const scrollTop = 0;
 //
 //   this.setScrollTop(scrollTop);
 // }
 //
 // stopScrolling() {
 //   let interval = this.getInterval();
 //
 //   if (interval !== null) {
 //     clearInterval(interval);
 //
 //     interval = null;
 //
 //     this.setInterval(interval);
 //   }
 // }
 //
 // startScrolling(speed, direction) {
 //   let scrollTop = this.getScrollTop();
 //
 //   scrollTop += speed * SCROLL_DELAY;
 //
 //   this.setScrollTop(scrollTop);
 //
 //   let interval = this.getInterval();
 //
 //   if (interval !== null) {
 //     clearInterval(interval);
 //   }
 //
 //   interval = setInterval(() => {
 //     speed = speed - direction * DECELERATION;
 //
 //     if ((speed * direction) < 0) {
 //       clearInterval(interval);
 //
 //       interval = null;
 //
 //       this.setInterval(interval);
 //     }
 //
 //     let scrollTop = this.getScrollTop();
 //
 //     scrollTop += speed * SCROLL_DELAY;
 //
 //     this.setScrollTop(scrollTop);
 //   }, SCROLL_DELAY);
 //
 //   this.setInterval(interval);
 // }
 //
 // enterFullScreen() {
 //   this.requestFullScreen();
 // }
 //
 // updateZoom() {
 //   const showingDivisionDiv = this.findShowingDivisionDiv();
 //
 //   if (divisionDiv !== null) {
 //     const zoom = getZoom();
 //
 //     divisionDiv.zoom(zoom);
 //   }
 // }
 //
 // enableCustomGestures() {
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
 // disableCustomGestures() {
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
 // getInterval() {
 //   const { interval } = this.getState();
 //
 //   return interval;
 // }
 //
 // getStartZoom() {
 //   const { startZoom } = this.getState();
 //
 //   return startZoom;
 // }
 //
 // getStartScrollTop() {
 //   const { startScrollTop } = this.getState();
 //
 //   return startScrollTop;
 // }
 //
 // setInterval(interval) {
 //   this.updateState({
 //     interval
 //   });
 // }
 //
 // setStartZoom(startZoom) {
 //   this.updateState({
 //     startZoom
 //   });
 // }
 //
 // setStartScrollTop(startScrollTop) {
 //   this.updateState({
 //     startScrollTop
 //   });
 // }
 //
 // setInitialState() {
 //   const interval = null,
 //         startZoom = null,
 //         startScrollTop = null;
 //
 //   this.setState({
 //     interval,
 //     startZoom,
 //     startScrollTop
 //   });
 // }
, {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _easymobile = require("easy-mobile");
var _division = /*#__PURE__*/ _interop_require_default(require("../div/division"));
var _element = require("../../utilities/element");
var _selectors = require("../../selectors");
var _anchor = require("../../utilities/anchor");
var _constants = require("../../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
        "\n  \n  width: fit-content;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  \n  .presentation {\n    width: 100%;\n    height: 100%;\n    align-items: stretch;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var divisionDivDOMElements = (0, _element.removeDOMElements)(_selectors.DIVISION_DIVS_SELECTOR), divisionDivs = (0, _element.elementsFromDOMElements)(divisionDivDOMElements, _division.default);
(0, _element.removeDOMElement)(_selectors.DOCUMENT_DIV_SELECTOR);
var DocumentDiv = /*#__PURE__*/ function(Element) {
    _inherits(DocumentDiv, Element);
    function DocumentDiv() {
        _class_call_check(this, DocumentDiv);
        var _this;
        _this = _call_super(this, DocumentDiv, arguments), _define_property(_this, "clickHandler", function(event, element) {
            var target = event.target, link = target.closest(_selectors.ANCHOR_HREF_SELECTOR);
            if (link === null) {
                return;
            }
            var href = link.getAttribute(_constants.HREF);
            if (href === _constants.EMPTY_STRING) {
                return;
            }
            event.preventDefault();
            var hrefStartsWithHash = href.startsWith(_constants.HASH), linkExternal = !hrefStartsWithHash;
            if (linkExternal) {
                var target1 = _constants.BLANK_TARGET;
                window.open(href, target1);
                return;
            }
            var anchorId = href.substring(1); ///
            _this.goToAnchor(anchorId);
        });
        return _this;
    }
    _create_class(DocumentDiv, [
        {
            key: "scale",
            value: function scale(documentScale, previewPaneInnerWidth, previewPaneInnerHeight) {
                var scale = documentScale, width = this.getWidth(), height = this.getHeight(), scaledWidth = width * scale, scaledHeight = height * scale, translateX = scaledWidth < previewPaneInnerWidth ? (previewPaneInnerWidth - scaledWidth) / 2 : 0, translateY = scaledHeight < previewPaneInnerHeight ? (previewPaneInnerHeight - scaledHeight) / 2 : 0, transform = "translate(".concat(translateX, "px, ").concat(translateY, "px) scale(").concat(scale, ")"), transformOrigin = _constants.TOP_LEFT_TRANSFORM_ORIGIN;
                this.style(_constants.TRANSFORM, transform);
                this.style(_constants.TRANSFORM_ORIGIN, transformOrigin);
            }
        },
        {
            key: "goToAnchor",
            value: function goToAnchor(anchorId) {
                var anchorIdIndexAnchorId = (0, _anchor.isAnchorIdIndexAnchorId)(anchorId);
                if (anchorIdIndexAnchorId) {
                    var indexAnchorId = anchorId; ///
                    this.showDivisionDivByIndexAnchorId(indexAnchorId);
                    return;
                }
                this.showDivisionDivByAnchorId(anchorId);
            }
        },
        {
            key: "showLeftDivisionDiv",
            value: function showLeftDivisionDiv() {
                var showingDivisionDiv = this.findShowingDivisionDiv(), divisionDivs = this.getDivisionDivs(), index = divisionDivs.indexOf(showingDivisionDiv), nextIndex = index - 1, previousIndex = index; ///
                if (nextIndex === -1) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showLastDivisionDiv",
            value: function showLastDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), showingDivisionDiv = this.findShowingDivisionDiv(), divsLength = divisionDivs.length, index = showingDivisionDiv === null ? -1 : divisionDivs.indexOf(showingDivisionDiv), nextIndex = divsLength - 1, previousIndex = index; ///
                if (nextIndex === previousIndex) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showFirstDivisionDiv",
            value: function showFirstDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), showingDivisionDiv = this.findShowingDivisionDiv(), index = showingDivisionDiv === null ? -1 : divisionDivs.indexOf(showingDivisionDiv), nextIndex = 0, previousIndex = index; ///
                if (nextIndex === previousIndex) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showRightDivisionDiv",
            value: function showRightDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), showingDivisionDiv = this.findShowingDivisionDiv(), divsLength = divisionDivs.length, index = divisionDivs.indexOf(showingDivisionDiv), nextIndex = index + 1, previousIndex = index; ///
                if (nextIndex === divsLength) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "showNextDivisionDiv",
            value: function showNextDivisionDiv(nextIndex, previousIndex) {
                var divisionDivs = this.getDivisionDivs();
                if (previousIndex !== -1) {
                    var previousDivisionDiv = divisionDivs[previousIndex];
                    previousDivisionDiv.hide();
                }
                var nextDivisionDiv = divisionDivs[nextIndex];
                // this.stopScrolling();
                //
                // this.scrollToTop();
                nextDivisionDiv.show();
            }
        },
        {
            key: "showDivisionDivByAnchorId",
            value: function showDivisionDivByAnchorId(anchorId) {
                var divisionDiv;
                divisionDiv = (0, _anchor.findDivisionDivByAnchorId)(anchorId); ///
                if (divisionDiv === null) {
                    return;
                }
                var divisionDivs = this.getDivisionDivs(), showingDivisionDiv = this.findShowingDivisionDiv(), nextDivisionDiv = divisionDiv, previousDivisionDiv = showingDivisionDiv, nextIndex = divisionDivs.indexOf(nextDivisionDiv), previousIndex = divisionDivs.indexOf(previousDivisionDiv); ///
                this.showNextDivisionDiv(nextIndex, previousIndex);
                (0, _anchor.scrollToAnchor)(anchorId);
            }
        },
        {
            key: "showDivisionDivByIndexAnchorId",
            value: function showDivisionDivByIndexAnchorId(indexAnchorId) {
                var divisionDivs = this.getDivisionDivs(), showingDivisionDiv = this.findShowingDivisionDiv(), divsLength = divisionDivs.length, pageNumber = (0, _anchor.pageNumberFromIndexAnchorId)(indexAnchorId), index = divisionDivs.indexOf(showingDivisionDiv), nextIndex = pageNumber - 1, previousIndex = index; ///
                if (nextIndex === divsLength) {
                    return;
                }
                this.showNextDivisionDiv(nextIndex, previousIndex);
            }
        },
        {
            key: "findShowingDivisionDiv",
            value: function findShowingDivisionDiv() {
                var divisionDivs = this.getDivisionDivs(), divisionDiv = divisionDivs.find(function(divisionDiv) {
                    var showing = divisionDiv.isShowing();
                    if (showing) {
                        return true;
                    }
                }) || null;
                return divisionDiv;
            }
        },
        {
            key: "getDivisionDivs",
            value: function getDivisionDivs() {
                var childElements = this.getChildElements(), divisionDivs = _to_consumable_array(childElements);
                return divisionDivs;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                // this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
                //
                // this.onCustomSingleTap(this.singleTapCustomHandler);
                //
                // this.enableFullScreen();
                //
                // this.enableTouch();
                this.onClick(this.clickHandler);
                this.showFirstDivisionDiv();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offClick(this.clickHandler);
            // this.disableTouch();
            //
            // this.disableFullScreen();
            //
            // this.offCustomSingleTap(this.singleTapCustomHandler);
            //
            // this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var childElements = divisionDivs; ///
                return childElements;
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                // const goToAnchor = this.goToAnchor.bind(this),  ///
                //       updateZoom = this.updateZoom.bind(this),
                //       exitFullScreen = this.exitFullScreen.bind(this),
                //       enterFullScreen = this.enterFullScreen.bind(this);
                var scaleDocumentDiv = this.scale.bind(this), showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this);
                return {
                    // goToAnchor,
                    // updateZoom,
                    // exitFullScreen,
                    // enterFullScreen,
                    scaleDocumentDiv: scaleDocumentDiv,
                    showLeftDivisionDiv: showLeftDivisionDiv,
                    showLastDivisionDiv: showLastDivisionDiv,
                    showFirstDivisionDiv: showFirstDivisionDiv,
                    showRightDivisionDiv: showRightDivisionDiv
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            // this.setInitialState();
            }
        }
    ]);
    return DocumentDiv;
}(_wrap_native_super(_easy.Element));
_define_property(DocumentDiv, "tagName", "div");
_define_property(DocumentDiv, "ignoredProperties", []);
_define_property(DocumentDiv, "defaultProperties", {
    className: "document"
});
Object.assign(DocumentDiv.prototype, _easymobile.touchMixins);
Object.assign(DocumentDiv.prototype, _easymobile.fullScreenMixins);
var _default = (0, _easywithstyle.default)(DocumentDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuXG5pbXBvcnQgRGl2aXNpb25EaXYgZnJvbSBcIi4uL2Rpdi9kaXZpc2lvblwiO1xuXG5pbXBvcnQgeyByZW1vdmVET01FbGVtZW50LCByZW1vdmVET01FbGVtZW50cywgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IEFOQ0hPUl9IUkVGX1NFTEVDVE9SLCBET0NVTUVOVF9ESVZfU0VMRUNUT1IsIERJVklTSU9OX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCwgaXNBbmNob3JJZEluZGV4QW5jaG9ySWQsIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYW5jaG9yXCI7XG5pbXBvcnQgeyBIQVNILCBIUkVGLCBFTVBUWV9TVFJJTkcsIFRSQU5TRk9STSwgQkxBTktfVEFSR0VULCBUUkFOU0ZPUk1fT1JJR0lOLCBUT1BfTEVGVF9UUkFOU0ZPUk1fT1JJR0lOLCBTQ1JPTExfREVMQVksIFVQX0RJUkVDVElPTiwgREVDRUxFUkFUSU9OLCBET1dOX0RJUkVDVElPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgZGl2aXNpb25EaXZET01FbGVtZW50cyA9IHJlbW92ZURPTUVsZW1lbnRzKERJVklTSU9OX0RJVlNfU0VMRUNUT1IpLFxuICAgICAgZGl2aXNpb25EaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGl2aXNpb25EaXZET01FbGVtZW50cywgRGl2aXNpb25EaXYpO1xuXG5yZW1vdmVET01FbGVtZW50KERPQ1VNRU5UX0RJVl9TRUxFQ1RPUik7XG5cbmNsYXNzIERvY3VtZW50RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoQU5DSE9SX0hSRUZfU0VMRUNUT1IpO1xuXG4gICAgaWYgKGxpbmsgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoSFJFRik7XG5cbiAgICBpZiAoaHJlZiA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGhyZWZTdGFydHNXaXRoSGFzaCA9IGhyZWYuc3RhcnRzV2l0aChIQVNIKSxcbiAgICAgICAgICBsaW5rRXh0ZXJuYWwgPSAhaHJlZlN0YXJ0c1dpdGhIYXNoO1xuXG4gICAgaWYgKGxpbmtFeHRlcm5hbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gQkxBTktfVEFSR0VUO1xuXG4gICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5jaG9ySWQgPSBocmVmLnN1YnN0cmluZygxKTsgLy8vXG5cbiAgICB0aGlzLmdvVG9BbmNob3IoYW5jaG9ySWQpO1xuICB9XG5cbiAgc2NhbGUoZG9jdW1lbnRTY2FsZSwgcHJldmlld1BhbmVJbm5lcldpZHRoLCBwcmV2aWV3UGFuZUlubmVySGVpZ2h0KSB7XG4gICAgY29uc3Qgc2NhbGUgPSBkb2N1bWVudFNjYWxlLCAgLy8vXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICBzY2FsZWRXaWR0aCA9IHdpZHRoICogc2NhbGUsXG4gICAgICAgICAgc2NhbGVkSGVpZ2h0ID0gaGVpZ2h0ICogc2NhbGUsXG4gICAgICAgICAgdHJhbnNsYXRlWCA9IChzY2FsZWRXaWR0aCA8IHByZXZpZXdQYW5lSW5uZXJXaWR0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIChwcmV2aWV3UGFuZUlubmVyV2lkdGggLSBzY2FsZWRXaWR0aCkgLyAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IChzY2FsZWRIZWlnaHQgPCBwcmV2aWV3UGFuZUlubmVySGVpZ2h0KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHByZXZpZXdQYW5lSW5uZXJIZWlnaHQgLSBzY2FsZWRIZWlnaHQpIC8gMiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfXB4LCAke3RyYW5zbGF0ZVl9cHgpIHNjYWxlKCR7c2NhbGV9KWAsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luID0gVE9QX0xFRlRfVFJBTlNGT1JNX09SSUdJTjtcblxuICAgIHRoaXMuc3R5bGUoVFJBTlNGT1JNLCB0cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5zdHlsZShUUkFOU0ZPUk1fT1JJR0lOLCB0cmFuc2Zvcm1PcmlnaW4pO1xuICB9XG5cbiAgZ29Ub0FuY2hvcihhbmNob3JJZCkge1xuICAgIGNvbnN0IGFuY2hvcklkSW5kZXhBbmNob3JJZCA9IGlzQW5jaG9ySWRJbmRleEFuY2hvcklkKGFuY2hvcklkKTtcblxuICAgIGlmIChhbmNob3JJZEluZGV4QW5jaG9ySWQpIHtcbiAgICAgIGNvbnN0IGluZGV4QW5jaG9ySWQgPSBhbmNob3JJZDsgLy8vXG5cbiAgICAgIHRoaXMuc2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93RGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKTtcbiAgfVxuXG4gIHNob3dMZWZ0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IChzaG93aW5nRGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93Rmlyc3REaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGluZGV4ID0gKHNob3dpbmdEaXZpc2lvbkRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2aXNpb25EaXZzLmluZGV4T2Yoc2hvd2luZ0RpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd1JpZ2h0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpO1xuXG4gICAgaWYgKHByZXZpb3VzSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgICBwcmV2aW91c0RpdmlzaW9uRGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnNbbmV4dEluZGV4XTtcblxuICAgIC8vIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5zY3JvbGxUb1RvcCgpO1xuXG4gICAgbmV4dERpdmlzaW9uRGl2LnNob3coKTtcbiAgfVxuXG4gIHNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpIHtcbiAgICBsZXQgZGl2aXNpb25EaXY7XG5cbiAgICBkaXZpc2lvbkRpdiA9IGZpbmREaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpOyAgLy8vXG5cbiAgICBpZiAoZGl2aXNpb25EaXYgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIG5leHREaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2LCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNEaXZpc2lvbkRpdiA9IHNob3dpbmdEaXZpc2lvbkRpdiwgIC8vL1xuICAgICAgICAgIG5leHRJbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKG5leHREaXZpc2lvbkRpdiksICAvLy9cbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YocHJldmlvdXNEaXZpc2lvbkRpdik7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuXG4gICAgc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZpc2lvbkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyRnJvbUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCksXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IHBhZ2VOdW1iZXIgLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgZmluZFNob3dpbmdEaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzLmZpbmQoKGRpdmlzaW9uRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gZGl2aXNpb25EaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChzaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2aXNpb25EaXY7XG4gIH1cblxuICBnZXREaXZpc2lvbkRpdnMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IFtcbiAgICAgICAgICAgIC4uLmNoaWxkRWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uRGl2cztcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIC8vIHRoaXMub25DdXN0b21GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5vbkN1c3RvbVNpbmdsZVRhcCh0aGlzLnNpbmdsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5lbmFibGVGdWxsU2NyZWVuKCk7XG4gICAgLy9cbiAgICAvLyB0aGlzLmVuYWJsZVRvdWNoKCk7XG5cbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG5cbiAgICAvLyB0aGlzLmRpc2FibGVUb3VjaCgpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5kaXNhYmxlRnVsbFNjcmVlbigpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICAvL1xuICAgIC8vIHRoaXMub2ZmQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGRpdmlzaW9uRGl2czsgLy8vXG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgLy8gY29uc3QgZ29Ub0FuY2hvciA9IHRoaXMuZ29Ub0FuY2hvci5iaW5kKHRoaXMpLCAgLy8vXG4gICAgLy8gICAgICAgdXBkYXRlWm9vbSA9IHRoaXMudXBkYXRlWm9vbS5iaW5kKHRoaXMpLFxuICAgIC8vICAgICAgIGV4aXRGdWxsU2NyZWVuID0gdGhpcy5leGl0RnVsbFNjcmVlbi5iaW5kKHRoaXMpLFxuICAgIC8vICAgICAgIGVudGVyRnVsbFNjcmVlbiA9IHRoaXMuZW50ZXJGdWxsU2NyZWVuLmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCBzY2FsZURvY3VtZW50RGl2ID0gdGhpcy5zY2FsZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzaG93TGVmdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2ID0gdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAvLyBnb1RvQW5jaG9yLFxuICAgICAgLy8gdXBkYXRlWm9vbSxcbiAgICAgIC8vIGV4aXRGdWxsU2NyZWVuLFxuICAgICAgLy8gZW50ZXJGdWxsU2NyZWVuLFxuICAgICAgc2NhbGVEb2N1bWVudERpdixcbiAgICAgIHNob3dMZWZ0RGl2aXNpb25EaXYsXG4gICAgICBzaG93TGFzdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd0ZpcnN0RGl2aXNpb25EaXYsXG4gICAgICBzaG93UmlnaHREaXZpc2lvbkRpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIC8vIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkb2N1bWVudFwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnREaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50RGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEb2N1bWVudERpdilgXG4gIFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgLnByZXNlbnRhdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuYDtcblxuLy8gZnVsbFNjcmVlbkNoYW5nZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbi8vICAgdGhpcy51cGRhdGVab29tKCk7XG4vLyB9XG4vL1xuLy8gc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4vLyAgIC8vL1xuLy8gfVxuLy9cbi8vIGRvdWJsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcbi8vXG4vLyAgIGlmIChmdWxsU2NyZWVuKSB7XG4vLyAgICAgY29udHJvbGxlci5leGl0RnVsbFNjcmVlbigpO1xuLy9cbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuLy8gICBjb25zdCB6b29tID0gZ2V0Wm9vbSgpLFxuLy8gICAgICAgICBzdGFydFpvb20gPSB6b29tOyAvLy9cbi8vXG4vLyAgIHRoaXMuc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSk7XG4vLyB9XG4vL1xuLy8gcGluY2hNb3ZlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmF0aW8pID0+IHtcbi8vICAgY29uc3Qgc3RhcnRab29tID0gdGhpcy5nZXRTdGFydFpvb20oKSxcbi8vICAgICAgICAgem9vbSA9IHN0YXJ0Wm9vbSAqIE1hdGguc3FydChyYXRpbyk7ICAvLy9cbi8vXG4vLyAgIGNvbnRyb2xsZXIuem9vbSh6b29tKTtcbi8vIH1cbi8vXG4vLyBzd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuLy8gICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcbi8vIH1cbi8vXG4vLyBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwcGVkKSA9PiB7XG4vLyAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcbi8vIH1cbi8vXG4vLyBzd2lwZURvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4vLyAgIGNvbnN0IGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuLy9cbi8vICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbi8vIH1cbi8vXG4vLyBzd2lwZVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuLy8gICBjb25zdCBkaXJlY3Rpb24gPSBVUF9ESVJFQ1RJT047XG4vL1xuLy8gICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pO1xuLy8gfVxuLy9cbi8vIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuLy8gICAgICAgICBzdGFydFNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgLy8vXG4vL1xuLy8gICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbi8vIH1cbi8vXG4vLyBkcmFnRG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcbi8vXG4vLyAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy9cbi8vICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG4vL1xuLy8gICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuLy8gfVxuLy9cbi8vIGRyYWdVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxUb3AoKTtcbi8vXG4vLyAgIGlmIChzdGFydFNjcm9sbFRvcCA9PT0gbnVsbCkge1xuLy8gICAgIHJldHVybjtcbi8vICAgfVxuLy9cbi8vICAgY29uc3Qgc2Nyb2xsVG9wID0gc3RhcnRTY3JvbGxUb3AgLSB0b3A7XG4vL1xuLy8gICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuLy8gfVxuLy9cbi8vIHNjcm9sbFRvVG9wKCkge1xuLy8gICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuLy9cbi8vICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbi8vIH1cbi8vXG4vLyBzdG9wU2Nyb2xsaW5nKCkge1xuLy8gICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmdldEludGVydmFsKCk7XG4vL1xuLy8gICBpZiAoaW50ZXJ2YWwgIT09IG51bGwpIHtcbi8vICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbi8vXG4vLyAgICAgaW50ZXJ2YWwgPSBudWxsO1xuLy9cbi8vICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIHN0YXJ0U2Nyb2xsaW5nKHNwZWVkLCBkaXJlY3Rpb24pIHtcbi8vICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG4vL1xuLy8gICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG4vL1xuLy8gICB0aGlzLnNldFNjcm9sbFRvcChzY3JvbGxUb3ApO1xuLy9cbi8vICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuLy9cbi8vICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4vLyAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4vLyAgIH1cbi8vXG4vLyAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICAgIHNwZWVkID0gc3BlZWQgLSBkaXJlY3Rpb24gKiBERUNFTEVSQVRJT047XG4vL1xuLy8gICAgIGlmICgoc3BlZWQgKiBkaXJlY3Rpb24pIDwgMCkge1xuLy8gICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4vL1xuLy8gICAgICAgaW50ZXJ2YWwgPSBudWxsO1xuLy9cbi8vICAgICAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgbGV0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG4vL1xuLy8gICAgIHNjcm9sbFRvcCArPSBzcGVlZCAqIFNDUk9MTF9ERUxBWTtcbi8vXG4vLyAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbi8vICAgfSwgU0NST0xMX0RFTEFZKTtcbi8vXG4vLyAgIHRoaXMuc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpO1xuLy8gfVxuLy9cbi8vIGVudGVyRnVsbFNjcmVlbigpIHtcbi8vICAgdGhpcy5yZXF1ZXN0RnVsbFNjcmVlbigpO1xuLy8gfVxuLy9cbi8vIHVwZGF0ZVpvb20oKSB7XG4vLyAgIGNvbnN0IHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpO1xuLy9cbi8vICAgaWYgKGRpdmlzaW9uRGl2ICE9PSBudWxsKSB7XG4vLyAgICAgY29uc3Qgem9vbSA9IGdldFpvb20oKTtcbi8vXG4vLyAgICAgZGl2aXNpb25EaXYuem9vbSh6b29tKTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIGVuYWJsZUN1c3RvbUdlc3R1cmVzKCkge1xuLy8gICB0aGlzLm9uQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21EcmFnU3RhcnQodGhpcy5kcmFnU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tUGluY2hTdGFydCh0aGlzLnBpbmNoU3RhcnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy8gfVxuLy9cbi8vIGRpc2FibGVDdXN0b21HZXN0dXJlcygpIHtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnVXAodGhpcy5kcmFnVXBDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21EcmFnRG93bih0aGlzLmRyYWdEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVVcCh0aGlzLnN3aXBlVXBDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVBpbmNoTW92ZSh0aGlzLnBpbmNoTW92ZUN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4vLyB9XG4vL1xuLy8gZ2V0SW50ZXJ2YWwoKSB7XG4vLyAgIGNvbnN0IHsgaW50ZXJ2YWwgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcbi8vXG4vLyAgIHJldHVybiBpbnRlcnZhbDtcbi8vIH1cbi8vXG4vLyBnZXRTdGFydFpvb20oKSB7XG4vLyAgIGNvbnN0IHsgc3RhcnRab29tIH0gPSB0aGlzLmdldFN0YXRlKCk7XG4vL1xuLy8gICByZXR1cm4gc3RhcnRab29tO1xuLy8gfVxuLy9cbi8vIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuLy8gICBjb25zdCB7IHN0YXJ0U2Nyb2xsVG9wIH0gPSB0aGlzLmdldFN0YXRlKCk7XG4vL1xuLy8gICByZXR1cm4gc3RhcnRTY3JvbGxUb3A7XG4vLyB9XG4vL1xuLy8gc2V0SW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbi8vICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4vLyAgICAgaW50ZXJ2YWxcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gc2V0U3RhcnRab29tKHN0YXJ0Wm9vbSkge1xuLy8gICB0aGlzLnVwZGF0ZVN0YXRlKHtcbi8vICAgICBzdGFydFpvb21cbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApIHtcbi8vICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4vLyAgICAgc3RhcnRTY3JvbGxUb3Bcbi8vICAgfSk7XG4vLyB9XG4vL1xuLy8gc2V0SW5pdGlhbFN0YXRlKCkge1xuLy8gICBjb25zdCBpbnRlcnZhbCA9IG51bGwsXG4vLyAgICAgICAgIHN0YXJ0Wm9vbSA9IG51bGwsXG4vLyAgICAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcbi8vXG4vLyAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgIGludGVydmFsLFxuLy8gICAgIHN0YXJ0Wm9vbSxcbi8vICAgICBzdGFydFNjcm9sbFRvcFxuLy8gICB9KTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJkaXZpc2lvbkRpdkRPTUVsZW1lbnRzIiwicmVtb3ZlRE9NRWxlbWVudHMiLCJESVZJU0lPTl9ESVZTX1NFTEVDVE9SIiwiZGl2aXNpb25EaXZzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXZpc2lvbkRpdiIsInJlbW92ZURPTUVsZW1lbnQiLCJET0NVTUVOVF9ESVZfU0VMRUNUT1IiLCJEb2N1bWVudERpdiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRhcmdldCIsImxpbmsiLCJjbG9zZXN0IiwiQU5DSE9SX0hSRUZfU0VMRUNUT1IiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiSFJFRiIsIkVNUFRZX1NUUklORyIsInByZXZlbnREZWZhdWx0IiwiaHJlZlN0YXJ0c1dpdGhIYXNoIiwic3RhcnRzV2l0aCIsIkhBU0giLCJsaW5rRXh0ZXJuYWwiLCJCTEFOS19UQVJHRVQiLCJ3aW5kb3ciLCJvcGVuIiwiYW5jaG9ySWQiLCJzdWJzdHJpbmciLCJnb1RvQW5jaG9yIiwic2NhbGUiLCJkb2N1bWVudFNjYWxlIiwicHJldmlld1BhbmVJbm5lcldpZHRoIiwicHJldmlld1BhbmVJbm5lckhlaWdodCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzY2FsZWRXaWR0aCIsInNjYWxlZEhlaWdodCIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwidHJhbnNmb3JtIiwidHJhbnNmb3JtT3JpZ2luIiwiVE9QX0xFRlRfVFJBTlNGT1JNX09SSUdJTiIsInN0eWxlIiwiVFJBTlNGT1JNIiwiVFJBTlNGT1JNX09SSUdJTiIsImFuY2hvcklkSW5kZXhBbmNob3JJZCIsImlzQW5jaG9ySWRJbmRleEFuY2hvcklkIiwiaW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJzaG93TGVmdERpdmlzaW9uRGl2Iiwic2hvd2luZ0RpdmlzaW9uRGl2IiwiZmluZFNob3dpbmdEaXZpc2lvbkRpdiIsImdldERpdmlzaW9uRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dSaWdodERpdmlzaW9uRGl2IiwicHJldmlvdXNEaXZpc2lvbkRpdiIsImhpZGUiLCJuZXh0RGl2aXNpb25EaXYiLCJzaG93IiwiZGl2aXNpb25EaXYiLCJmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkIiwic2Nyb2xsVG9BbmNob3IiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIiwiZmluZCIsInNob3dpbmciLCJpc1Nob3dpbmciLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImRpZE1vdW50Iiwib25DbGljayIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJwYXJlbnRDb250ZXh0Iiwic2NhbGVEb2N1bWVudERpdiIsImJpbmQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNFNBLFVBZUEsd0RBQXdEO0NBQ3hELHVCQUF1QjtDQUN2QixJQUFJO0NBQ0osRUFBRTtDQUNGLDREQUE0RDtDQUM1RCxRQUFRO0NBQ1IsSUFBSTtDQUNKLEVB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