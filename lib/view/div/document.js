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
        "\n  \n  width: 100%;\n  height: 100%;\n  \n"
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
            var hrefStartsWithHash = href.startsWith(_constants.HASH), linkExternal = !hrefStartsWithHash;
            if (linkExternal) {
                var target1 = _constants.BLANK_TARGET;
                window.open(href, target1);
                return;
            }
            event.preventDefault();
            var anchorId = href.substring(1); ///
            _this.goToAnchor(anchorId);
        });
        return _this;
    }
    _create_class(DocumentDiv, [
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
                // const zoom = getZoom();
                //
                // this.stopScrolling();
                //
                // this.scrollToTop();
                //
                // nextDivisionDiv.zoom(zoom);
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
                var showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this);
                return {
                    // goToAnchor,
                    // updateZoom,
                    // exitFullScreen,
                    // enterFullScreen,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0b3VjaE1peGlucywgZnVsbFNjcmVlbk1peGlucyB9IGZyb20gXCJlYXN5LW1vYmlsZVwiO1xuXG5pbXBvcnQgRGl2aXNpb25EaXYgZnJvbSBcIi4uL2Rpdi9kaXZpc2lvblwiO1xuXG5pbXBvcnQgeyByZW1vdmVET01FbGVtZW50LCByZW1vdmVET01FbGVtZW50cywgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IEFOQ0hPUl9IUkVGX1NFTEVDVE9SLCBET0NVTUVOVF9ESVZfU0VMRUNUT1IsIERJVklTSU9OX0RJVlNfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCwgaXNBbmNob3JJZEluZGV4QW5jaG9ySWQsIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYW5jaG9yXCI7XG5pbXBvcnQgeyBIQVNILCBIUkVGLCBFTVBUWV9TVFJJTkcsIEJMQU5LX1RBUkdFVCwgU0NST0xMX0RFTEFZLCBVUF9ESVJFQ1RJT04sIERFQ0VMRVJBVElPTiwgRE9XTl9ESVJFQ1RJT04gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGRpdmlzaW9uRGl2RE9NRWxlbWVudHMgPSByZW1vdmVET01FbGVtZW50cyhESVZJU0lPTl9ESVZTX1NFTEVDVE9SKSxcbiAgICAgIGRpdmlzaW9uRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRpdmlzaW9uRGl2RE9NRWxlbWVudHMsIERpdmlzaW9uRGl2KTtcblxucmVtb3ZlRE9NRWxlbWVudChET0NVTUVOVF9ESVZfU0VMRUNUT1IpO1xuXG5jbGFzcyBEb2N1bWVudERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgbGluayA9IHRhcmdldC5jbG9zZXN0KEFOQ0hPUl9IUkVGX1NFTEVDVE9SKTtcblxuICAgIGlmIChsaW5rID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKEhSRUYpO1xuXG4gICAgaWYgKGhyZWYgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhyZWZTdGFydHNXaXRoSGFzaCA9IGhyZWYuc3RhcnRzV2l0aChIQVNIKSxcbiAgICAgICAgICBsaW5rRXh0ZXJuYWwgPSAhaHJlZlN0YXJ0c1dpdGhIYXNoO1xuXG4gICAgaWYgKGxpbmtFeHRlcm5hbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gQkxBTktfVEFSR0VUO1xuXG4gICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFuY2hvcklkID0gaHJlZi5zdWJzdHJpbmcoMSk7IC8vL1xuXG4gICAgdGhpcy5nb1RvQW5jaG9yKGFuY2hvcklkKTtcbiAgfVxuXG4gIGdvVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgICBjb25zdCBhbmNob3JJZEluZGV4QW5jaG9ySWQgPSBpc0FuY2hvcklkSW5kZXhBbmNob3JJZChhbmNob3JJZCk7XG5cbiAgICBpZiAoYW5jaG9ySWRJbmRleEFuY2hvcklkKSB7XG4gICAgICBjb25zdCBpbmRleEFuY2hvcklkID0gYW5jaG9ySWQ7IC8vL1xuXG4gICAgICB0aGlzLnNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7XG4gIH1cblxuICBzaG93TGVmdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSAoc2hvd2luZ0RpdmlzaW9uRGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBpbmRleCA9IChzaG93aW5nRGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgICAgcHJldmlvdXNEaXZpc2lvbkRpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW25leHRJbmRleF07XG5cbiAgICAvLyBjb25zdCB6b29tID0gZ2V0Wm9vbSgpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG4gICAgLy9cbiAgICAvLyB0aGlzLnNjcm9sbFRvVG9wKCk7XG4gICAgLy9cbiAgICAvLyBuZXh0RGl2aXNpb25EaXYuem9vbSh6b29tKTtcblxuICAgIG5leHREaXZpc2lvbkRpdi5zaG93KCk7XG4gIH1cblxuICBzaG93RGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKSB7XG4gICAgbGV0IGRpdmlzaW9uRGl2O1xuXG4gICAgZGl2aXNpb25EaXYgPSBmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKTsgIC8vL1xuXG4gICAgaWYgKGRpdmlzaW9uRGl2ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBuZXh0RGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdiwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRGl2aXNpb25EaXYgPSBzaG93aW5nRGl2aXNpb25EaXYsICAvLy9cbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihuZXh0RGl2aXNpb25EaXYpLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHByZXZpb3VzRGl2aXNpb25EaXYpOyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcblxuICAgIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcbiAgfVxuXG4gIHNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpLFxuICAgICAgICAgIGluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2Yoc2hvd2luZ0RpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBwYWdlTnVtYmVyIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIGZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2cy5maW5kKChkaXZpc2lvbkRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd2luZyA9IGRpdmlzaW9uRGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uRGl2O1xuICB9XG5cbiAgZ2V0RGl2aXNpb25EaXZzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdnMgPSBbXG4gICAgICAgICAgICAuLi5jaGlsZEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBkaXZpc2lvbkRpdnM7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICAvLyB0aGlzLm9uQ3VzdG9tRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyKTtcbiAgICAvL1xuICAgIC8vIHRoaXMub25DdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICAvL1xuICAgIC8vIHRoaXMuZW5hYmxlRnVsbFNjcmVlbigpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyKTtcblxuICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgLy8gdGhpcy5kaXNhYmxlVG91Y2goKTtcbiAgICAvL1xuICAgIC8vIHRoaXMuZGlzYWJsZUZ1bGxTY3JlZW4oKTtcbiAgICAvL1xuICAgIC8vIHRoaXMub2ZmQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgLy9cbiAgICAvLyB0aGlzLm9mZkN1c3RvbUZ1bGxTY3JlZW5DaGFuZ2UodGhpcy5mdWxsU2NyZWVuQ2hhbmdlQ3VzdG9tSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBkaXZpc2lvbkRpdnM7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIC8vIGNvbnN0IGdvVG9BbmNob3IgPSB0aGlzLmdvVG9BbmNob3IuYmluZCh0aGlzKSwgIC8vL1xuICAgIC8vICAgICAgIHVwZGF0ZVpvb20gPSB0aGlzLnVwZGF0ZVpvb20uYmluZCh0aGlzKSxcbiAgICAvLyAgICAgICBleGl0RnVsbFNjcmVlbiA9IHRoaXMuZXhpdEZ1bGxTY3JlZW4uYmluZCh0aGlzKSxcbiAgICAvLyAgICAgICBlbnRlckZ1bGxTY3JlZW4gPSB0aGlzLmVudGVyRnVsbFNjcmVlbi5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3Qgc2hvd0xlZnREaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dMYXN0RGl2aXNpb25EaXYgPSB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93Rmlyc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93UmlnaHREaXZpc2lvbkRpdiA9IHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLy8gZ29Ub0FuY2hvcixcbiAgICAgIC8vIHVwZGF0ZVpvb20sXG4gICAgICAvLyBleGl0RnVsbFNjcmVlbixcbiAgICAgIC8vIGVudGVyRnVsbFNjcmVlbixcbiAgICAgIHNob3dMZWZ0RGl2aXNpb25EaXYsXG4gICAgICBzaG93TGFzdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd0ZpcnN0RGl2aXNpb25EaXYsXG4gICAgICBzaG93UmlnaHREaXZpc2lvbkRpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIC8vIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkb2N1bWVudFwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnREaXYucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50RGl2LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEb2N1bWVudERpdilgXG4gIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBcbmA7XG5cbi8vIGZ1bGxTY3JlZW5DaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4vLyAgIHRoaXMudXBkYXRlWm9vbSgpO1xuLy8gfVxuLy9cbi8vIHNpbmdsZVRhcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuLy8gICAvLy9cbi8vIH1cbi8vXG4vLyBkb3VibGVUYXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG4vL1xuLy8gICBpZiAoZnVsbFNjcmVlbikge1xuLy8gICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbi8vXG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gcGluY2hTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbi8vICAgY29uc3Qgem9vbSA9IGdldFpvb20oKSxcbi8vICAgICAgICAgc3RhcnRab29tID0gem9vbTsgLy8vXG4vL1xuLy8gICB0aGlzLnNldFN0YXJ0Wm9vbShzdGFydFpvb20pO1xuLy8gfVxuLy9cbi8vIHBpbmNoTW92ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHJhdGlvKSA9PiB7XG4vLyAgIGNvbnN0IHN0YXJ0Wm9vbSA9IHRoaXMuZ2V0U3RhcnRab29tKCksXG4vLyAgICAgICAgIHpvb20gPSBzdGFydFpvb20gKiBNYXRoLnNxcnQocmF0aW8pOyAgLy8vXG4vL1xuLy8gICBjb250cm9sbGVyLnpvb20oem9vbSk7XG4vLyB9XG4vL1xuLy8gc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BwZWQpID0+IHtcbi8vICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG4vLyB9XG4vL1xuLy8gc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcHBlZCkgPT4ge1xuLy8gICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG4vLyB9XG4vL1xuLy8gc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuLy8gICBjb25zdCBkaXJlY3Rpb24gPSBET1dOX0RJUkVDVElPTjtcbi8vXG4vLyAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc3BlZWQsIGRpcmVjdGlvbik7XG4vLyB9XG4vL1xuLy8gc3dpcGVVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbi8vICAgY29uc3QgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuLy9cbi8vICAgdGhpcy5zdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKTtcbi8vIH1cbi8vXG4vLyBkcmFnU3RhcnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbi8vICAgICAgICAgc3RhcnRTY3JvbGxUb3AgPSBzY3JvbGxUb3A7IC8vL1xuLy9cbi8vICAgdGhpcy5zZXRTdGFydFNjcm9sbFRvcChzdGFydFNjcm9sbFRvcCk7XG4vLyB9XG4vL1xuLy8gZHJhZ0Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG4vL1xuLy8gICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vXG4vLyAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuLy9cbi8vICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbi8vIH1cbi8vXG4vLyBkcmFnVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQpID0+IHtcbi8vICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG4vL1xuLy8gICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cbi8vXG4vLyAgIGNvbnN0IHNjcm9sbFRvcCA9IHN0YXJ0U2Nyb2xsVG9wIC0gdG9wO1xuLy9cbi8vICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbi8vIH1cbi8vXG4vLyBzY3JvbGxUb1RvcCgpIHtcbi8vICAgY29uc3Qgc2Nyb2xsVG9wID0gMDtcbi8vXG4vLyAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4vLyB9XG4vL1xuLy8gc3RvcFNjcm9sbGluZygpIHtcbi8vICAgbGV0IGludGVydmFsID0gdGhpcy5nZXRJbnRlcnZhbCgpO1xuLy9cbi8vICAgaWYgKGludGVydmFsICE9PSBudWxsKSB7XG4vLyAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4vL1xuLy8gICAgIGludGVydmFsID0gbnVsbDtcbi8vXG4vLyAgICAgdGhpcy5zZXRJbnRlcnZhbChpbnRlcnZhbCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBzdGFydFNjcm9sbGluZyhzcGVlZCwgZGlyZWN0aW9uKSB7XG4vLyAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuLy9cbi8vICAgc2Nyb2xsVG9wICs9IHNwZWVkICogU0NST0xMX0RFTEFZO1xuLy9cbi8vICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbi8vXG4vLyAgIGxldCBpbnRlcnZhbCA9IHRoaXMuZ2V0SW50ZXJ2YWwoKTtcbi8vXG4vLyAgIGlmIChpbnRlcnZhbCAhPT0gbnVsbCkge1xuLy8gICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuLy8gICB9XG4vL1xuLy8gICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICBzcGVlZCA9IHNwZWVkIC0gZGlyZWN0aW9uICogREVDRUxFUkFUSU9OO1xuLy9cbi8vICAgICBpZiAoKHNwZWVkICogZGlyZWN0aW9uKSA8IDApIHtcbi8vICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuLy9cbi8vICAgICAgIGludGVydmFsID0gbnVsbDtcbi8vXG4vLyAgICAgICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuLy9cbi8vICAgICBzY3JvbGxUb3AgKz0gc3BlZWQgKiBTQ1JPTExfREVMQVk7XG4vL1xuLy8gICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG4vLyAgIH0sIFNDUk9MTF9ERUxBWSk7XG4vL1xuLy8gICB0aGlzLnNldEludGVydmFsKGludGVydmFsKTtcbi8vIH1cbi8vXG4vLyBlbnRlckZ1bGxTY3JlZW4oKSB7XG4vLyAgIHRoaXMucmVxdWVzdEZ1bGxTY3JlZW4oKTtcbi8vIH1cbi8vXG4vLyB1cGRhdGVab29tKCkge1xuLy8gICBjb25zdCBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKTtcbi8vXG4vLyAgIGlmIChkaXZpc2lvbkRpdiAhPT0gbnVsbCkge1xuLy8gICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCk7XG4vL1xuLy8gICAgIGRpdmlzaW9uRGl2Lnpvb20oem9vbSk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyBlbmFibGVDdXN0b21HZXN0dXJlcygpIHtcbi8vICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9uQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVN3aXBlUmlnaHQodGhpcy5zd2lwZVJpZ2h0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub25DdXN0b21Eb3VibGVUYXAodGhpcy5kb3VibGVUYXBDdXN0b21IYW5kbGVyKTtcbi8vIH1cbi8vXG4vLyBkaXNhYmxlQ3VzdG9tR2VzdHVyZXMoKSB7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURyYWdTdGFydCh0aGlzLmRyYWdTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbVN3aXBlVXAodGhpcy5zd2lwZVVwQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVEb3duKHRoaXMuc3dpcGVEb3duQ3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVMZWZ0KHRoaXMuc3dpcGVMZWZ0Q3VzdG9tSGFuZGxlcik7XG4vLyAgIHRoaXMub2ZmQ3VzdG9tU3dpcGVSaWdodCh0aGlzLnN3aXBlUmlnaHRDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21QaW5jaE1vdmUodGhpcy5waW5jaE1vdmVDdXN0b21IYW5kbGVyKTtcbi8vICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuLy8gICB0aGlzLm9mZkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuLy8gfVxuLy9cbi8vIGdldEludGVydmFsKCkge1xuLy8gICBjb25zdCB7IGludGVydmFsIH0gPSB0aGlzLmdldFN0YXRlKCk7XG4vL1xuLy8gICByZXR1cm4gaW50ZXJ2YWw7XG4vLyB9XG4vL1xuLy8gZ2V0U3RhcnRab29tKCkge1xuLy8gICBjb25zdCB7IHN0YXJ0Wm9vbSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuLy9cbi8vICAgcmV0dXJuIHN0YXJ0Wm9vbTtcbi8vIH1cbi8vXG4vLyBnZXRTdGFydFNjcm9sbFRvcCgpIHtcbi8vICAgY29uc3QgeyBzdGFydFNjcm9sbFRvcCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuLy9cbi8vICAgcmV0dXJuIHN0YXJ0U2Nyb2xsVG9wO1xuLy8gfVxuLy9cbi8vIHNldEludGVydmFsKGludGVydmFsKSB7XG4vLyAgIHRoaXMudXBkYXRlU3RhdGUoe1xuLy8gICAgIGludGVydmFsXG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIHNldFN0YXJ0Wm9vbShzdGFydFpvb20pIHtcbi8vICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4vLyAgICAgc3RhcnRab29tXG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4vLyAgIHRoaXMudXBkYXRlU3RhdGUoe1xuLy8gICAgIHN0YXJ0U2Nyb2xsVG9wXG4vLyAgIH0pO1xuLy8gfVxuLy9cbi8vIHNldEluaXRpYWxTdGF0ZSgpIHtcbi8vICAgY29uc3QgaW50ZXJ2YWwgPSBudWxsLFxuLy8gICAgICAgICBzdGFydFpvb20gPSBudWxsLFxuLy8gICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG4vL1xuLy8gICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICBpbnRlcnZhbCxcbi8vICAgICBzdGFydFpvb20sXG4vLyAgICAgc3RhcnRTY3JvbGxUb3Bcbi8vICAgfSk7XG4vLyB9XG4iXSwibmFtZXMiOlsiZGl2aXNpb25EaXZET01FbGVtZW50cyIsInJlbW92ZURPTUVsZW1lbnRzIiwiRElWSVNJT05fRElWU19TRUxFQ1RPUiIsImRpdmlzaW9uRGl2cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiRGl2aXNpb25EaXYiLCJyZW1vdmVET01FbGVtZW50IiwiRE9DVU1FTlRfRElWX1NFTEVDVE9SIiwiRG9jdW1lbnREaXYiLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0YXJnZXQiLCJsaW5rIiwiY2xvc2VzdCIsIkFOQ0hPUl9IUkVGX1NFTEVDVE9SIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsIkhSRUYiLCJFTVBUWV9TVFJJTkciLCJocmVmU3RhcnRzV2l0aEhhc2giLCJzdGFydHNXaXRoIiwiSEFTSCIsImxpbmtFeHRlcm5hbCIsIkJMQU5LX1RBUkdFVCIsIndpbmRvdyIsIm9wZW4iLCJwcmV2ZW50RGVmYXVsdCIsImFuY2hvcklkIiwic3Vic3RyaW5nIiwiZ29Ub0FuY2hvciIsImFuY2hvcklkSW5kZXhBbmNob3JJZCIsImlzQW5jaG9ySWRJbmRleEFuY2hvcklkIiwiaW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJzaG93TGVmdERpdmlzaW9uRGl2Iiwic2hvd2luZ0RpdmlzaW9uRGl2IiwiZmluZFNob3dpbmdEaXZpc2lvbkRpdiIsImdldERpdmlzaW9uRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dSaWdodERpdmlzaW9uRGl2IiwicHJldmlvdXNEaXZpc2lvbkRpdiIsImhpZGUiLCJuZXh0RGl2aXNpb25EaXYiLCJzaG93IiwiZGl2aXNpb25EaXYiLCJmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkIiwic2Nyb2xsVG9BbmNob3IiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIiwiZmluZCIsInNob3dpbmciLCJpc1Nob3dpbmciLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImRpZE1vdW50Iiwib25DbGljayIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwidG91Y2hNaXhpbnMiLCJmdWxsU2NyZWVuTWl4aW5zIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwUkEsVUFPQSx3REFBd0Q7Q0FDeEQsdUJBQXVCO0NBQ3ZCLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELFFBQVE7Q0FDUixJQUFJO0NBQ0osRUFBRTtDQUNGLDREQUE0RDtDQUM1RCw0Q0FBNEM7Q0FDNUMsRUFBRTtDQUNGLHNCQUFzQjtDQUN0QixtQ0FBbUM7Q0FDbkMsRUFBRTtDQUNGLGNBQWM7Q0FDZCxNQUFNO0NBQ04sSUFBSTtDQUNKLEVBQUU7Q0FDRixrREFBa0Q7Q0FDbEQsNEJBQTRCO0NBQzVCLGdDQUFnQztDQUNoQyxFQUFFO0NBQ0Ysa0NBQWtDO0NBQ2xDLElBQUk7Q0FDSixFQUFFO0NBQ0Ysd0RBQXdEO0NBQ3hELDJDQUEyQztDQUMzQyxvREFBb0Q7Q0FDcEQsRUFBRTtDQUNGLDJCQUEyQjtDQUMzQixJQUFJO0NBQ0osRUFBRTtDQUNGLG9FQUFvRTtDQUNwRSxnQ0FBZ0M7Q0FDaEMsSUFBSTtDQUNKLEVBQUU7Q0FDRixtRUFBbUU7Q0FDbkUsaUNBQWlDO0NBQ2pDLElBQUk7Q0FDSixFQUFFO0NBQ0YsbUVBQW1FO0NBQ25FLHNDQUFzQztDQUN0QyxFQUFFO0NBQ0YsMkNBQTJDO0NBQzNDLElBQUk7Q0FDSixFQUFFO0NBQ0YsaUVBQWlFO0NBQ2pFLG9DQUFvQztDQUNwQyxFQUFFO0NBQ0YsMkNBQTJDO0NBQzNDLElBQUk7Q0FDSixFQUFFO0NBQ0YsNERBQTREO0NBQzVELDJDQUEyQztDQUMzQywwQ0FBMEM7Q0FDMUMsRUFBRTtDQUNGLDRDQUE0QztDQUM1QyxJQUFJO0NBQ0osRUFBRTtDQUNGLDJEQUEyRDtDQUMzRCxxREFBcUQ7Q0FDckQsRUFBRTtDQUNGLG1DQUFtQztDQUNuQyxjQUFjO0NBQ2QsTUFBTTtDQUNOLEVBQUU7Q0FDRiw0Q0FBNEM7Q0FDNUMsRUFBRTtDQUNGLGtDQUFrQztDQUNsQyxJQUFJO0NBQ0osRUFBRTtDQUNGLHlEQUF5RDtDQUN6RCxxREFBcUQ7Q0FDckQsRUFBRTtDQUNGLG1DQUFtQztDQUNuQyxjQUFjO0NBQ2QsTUFBTTtDQUNOLEVBQUU7Q0FDRiw0Q0FBNEM7Q0FDNUMsRUFBRTtDQUNGLGtDQUFrQztDQUNsQyxJQUFJO0NBQ0osRUFBRTtDQUNGLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsRUFBRTtDQUNGLGtDQUFrQztDQUNsQyxJQUFJO0NBQ0osRUFBRTtDQUNGLG9CQUFvQjtDQUNwQix1Q0FBdUM7Q0FDdkMsRUFBRTtDQUNGLDZCQUE2QjtDQUM3QiwrQkFBK0I7Q0FDL0IsRUFBRTtDQUNGLHVCQUF1QjtDQUN2QixFQUFFO0NBQ0Ysa0NBQWtDO0NBQ2xDLE1BQU07Q0FDTixJQUFJO0NBQ0osRUFBRTtDQUNGLHFDQUFxQztDQUNyQyx5Q0FBeUM7Q0FDekMsRUFBRTtDQUNGLHVDQUF1QztDQUN2QyxFQUFFO0NBQ0Ysa0NBQWtDO0NBQ2xDLEVBQUU7Q0FDRix1Q0FBdUM7Q0FDdkMsRUFBRTtDQUNGLDZCQUE2QjtDQUM3QiwrQkFBK0I7Q0FDL0IsTUFBTTtDQUNOLEVBQUU7Q0FDRixtQ0FBbUM7Q0FDbkMsZ0RBQWdEO0NBQ2hELEVBQUU7Q0FDRixxQ0FBcUM7Q0FDckMsaUNBQWlDO0NBQ2pDLEVBQUU7Q0FDRix5QkFBeUI7Q0FDekIsRUFBRTtDQUNGLG9DQUFvQztDQUNwQyxRQUFRO0NBQ1IsRUFBRTtDQUNGLDJDQUEyQztDQUMzQyxFQUFFO0NBQ0YseUNBQXlDO0NBQ3pDLEVBQUU7Q0FDRixvQ0FBb0M7Q0FDcEMsc0JBQXNCO0NBQ3RCLEVBQUU7Q0FDRixnQ0FBZ0M7Q0FDaEMsSUFBSTtDQUNKLEVBQUU7Q0FDRixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLElBQUk7Q0FDSixFQUFFO0NBQ0YsaUJBQWlCO0NBQ2pCLDhEQUE4RDtDQUM5RCxFQUFFO0NBQ0YsZ0NBQWdDO0NBQ2hDLDhCQUE4QjtDQUM5QixFQUFFO0NBQ0YsOEJBQThCO0NBQzlCLE1BQU07Q0FDTixJQUFJO0NBQ0osRUFBRTtDQUNGLDJCQUEyQjtDQUMzQixtREFBbUQ7Q0FDbkQsdURBQXVEO0NBQ3ZELHlEQUF5RDtDQUN6RCxxREFBcUQ7Q0FDckQseURBQXlEO0NBQ3pELHlEQUF5RDtDQUN6RCwyREFBMkQ7Q0FDM0QseURBQXlEO0NBQ3pELDJEQUEyRDtDQUMzRCx5REFBeUQ7Q0FDekQsSUFBSTtDQUNKLEVBQUU7Q0FDRiw0QkFBNEI7Q0FDNUIsb0RBQW9EO0NBQ3BELHdEQUF3RDtDQUN4RCwwREFBMEQ7Q0FDMUQsc0RBQXNEO0NBQ3RELDBEQUEwRDtDQUMxRCwwREFBMEQ7Q0FDMUQsNERBQTREO0NBQzVELDBEQUEwRDtDQUMxRCw0REFBNEQ7Q0FDNUQsMERBQTBEO0NBQzFELElBQUk7Q0FDSixFQUFFO0NBQ0Ysa0JBQWtCO0NBQ2xCLDBDQUEwQztDQUMxQyxFQUFFO0NBQ0YscUJBQXFCO0NBQ3JCLElBQUk7Q0FDSixFQUFFO0NBQ0YsbUJBQW1CO0NBQ25CLDJDQUEyQztDQUMzQyxFQUFFO0NBQ0Ysc0JBQXNCO0NBQ3RCLElBQUk7Q0FDSixFQUFFO0NBQ0Ysd0JBQXdCO0NBQ3hCLGdEQUFnRDtDQUNoRCxFQUFFO0NBQ0YsMkJBQTJCO0NBQzNCLElBQUk7Q0FDSixFQUFFO0NBQ0YsMEJBQTBCO0NBQzFCLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsUUFBUTtDQUNSLElBQUk7Q0FDSixFQUFFO0NBQ0YsNEJBQTRCO0NBQzVCLHVCQUF1QjtDQUN2QixnQkFBZ0I7Q0FDaEIsUUFBUTtDQUNSLElBQUk7Q0FDSixFQUFFO0NBQ0Ysc0NBQXNDO0NBQ3RDLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsUUFBUTtDQUNSLElBQUk7Q0FDSixFQUFFO0NBQ0Ysc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsaUNBQWlDO0NBQ2pDLEVBQUU7Q0FDRixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsUUFBUTtDQUNSLElBQUk7Ozs7ZUFwT0o7OztvRUF4UnNCO29CQUVFOzBCQUNzQjsrREFFdEI7dUJBRXFEO3lCQUNPO3NCQUM0Qjt5QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakgsSUFBTUEseUJBQXlCQyxJQUFBQSwwQkFBaUIsRUFBQ0MsaUNBQXNCLEdBQ2pFQyxlQUFlQyxJQUFBQSxnQ0FBdUIsRUFBQ0osd0JBQXdCSyxpQkFBVztBQUVoRkMsSUFBQUEseUJBQWdCLEVBQUNDLGdDQUFxQjtBQUV0QyxJQUFBLEFBQU1DLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLHlCQUNKQyx3QkFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckIsSUFBTSxBQUFFQyxTQUFXRixNQUFYRSxRQUNGQyxPQUFPRCxPQUFPRSxPQUFPLENBQUNDLCtCQUFvQjtZQUVoRCxJQUFJRixTQUFTLE1BQU07Z0JBQ2pCO1lBQ0Y7WUFFQSxJQUFNRyxPQUFPSCxLQUFLSSxZQUFZLENBQUNDLGVBQUk7WUFFbkMsSUFBSUYsU0FBU0csdUJBQVksRUFBRTtnQkFDekI7WUFDRjtZQUVBLElBQU1DLHFCQUFxQkosS0FBS0ssVUFBVSxDQUFDQyxlQUFJLEdBQ3pDQyxlQUFlLENBQUNIO1lBRXRCLElBQUlHLGNBQWM7Z0JBQ2hCLElBQU1YLFVBQVNZLHVCQUFZO2dCQUUzQkMsT0FBT0MsSUFBSSxDQUFDVixNQUFNSjtnQkFFbEI7WUFDRjtZQUVBRixNQUFNaUIsY0FBYztZQUVwQixJQUFNQyxXQUFXWixLQUFLYSxTQUFTLENBQUMsSUFBSSxHQUFHO1lBRXZDLE1BQUtDLFVBQVUsQ0FBQ0Y7UUFDbEI7OztrQkEvQklwQjs7WUFpQ0pzQixLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0YsUUFBUTtnQkFDakIsSUFBTUcsd0JBQXdCQyxJQUFBQSwrQkFBdUIsRUFBQ0o7Z0JBRXRELElBQUlHLHVCQUF1QjtvQkFDekIsSUFBTUUsZ0JBQWdCTCxVQUFVLEdBQUc7b0JBRW5DLElBQUksQ0FBQ00sOEJBQThCLENBQUNEO29CQUVwQztnQkFDRjtnQkFFQSxJQUFJLENBQUNFLHlCQUF5QixDQUFDUDtZQUNqQzs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxzQkFBc0IsSUFDaERuQyxlQUFlLElBQUksQ0FBQ29DLGVBQWUsSUFDbkNDLFFBQVFyQyxhQUFhc0MsT0FBTyxDQUFDSixxQkFDN0JLLFlBQVlGLFFBQVEsR0FDcEJHLGdCQUFnQkgsT0FBUSxHQUFHO2dCQUVqQyxJQUFJRSxjQUFjLENBQUMsR0FBRztvQkFDcEI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQ0YsV0FBV0M7WUFDdEM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTFDLGVBQWUsSUFBSSxDQUFDb0MsZUFBZSxJQUNuQ0YscUJBQXFCLElBQUksQ0FBQ0Msc0JBQXNCLElBQ2hEUSxhQUFhM0MsYUFBYTRDLE1BQU0sRUFDaENQLFFBQVEsQUFBQ0gsdUJBQXVCLE9BQ3RCLENBQUMsSUFDQ2xDLGFBQWFzQyxPQUFPLENBQUNKLHFCQUNqQ0ssWUFBWUksYUFBYSxHQUN6QkgsZ0JBQWdCSCxPQUFRLEdBQUc7Z0JBRWpDLElBQUlFLGNBQWNDLGVBQWU7b0JBQy9CO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNGLFdBQVdDO1lBQ3RDOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU03QyxlQUFlLElBQUksQ0FBQ29DLGVBQWUsSUFDbkNGLHFCQUFxQixJQUFJLENBQUNDLHNCQUFzQixJQUNoREUsUUFBUSxBQUFDSCx1QkFBdUIsT0FDdEIsQ0FBQyxJQUNDbEMsYUFBYXNDLE9BQU8sQ0FBQ0oscUJBQ2pDSyxZQUFZLEdBQ1pDLGdCQUFnQkgsT0FBUSxHQUFHO2dCQUVqQyxJQUFJRSxjQUFjQyxlQUFlO29CQUMvQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLG1CQUFtQixDQUFDRixXQUFXQztZQUN0Qzs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNOUMsZUFBZSxJQUFJLENBQUNvQyxlQUFlLElBQ25DRixxQkFBcUIsSUFBSSxDQUFDQyxzQkFBc0IsSUFDaERRLGFBQWEzQyxhQUFhNEMsTUFBTSxFQUNoQ1AsUUFBUXJDLGFBQWFzQyxPQUFPLENBQUNKLHFCQUM3QkssWUFBWUYsUUFBUSxHQUNwQkcsZ0JBQWdCSCxPQUFRLEdBQUc7Z0JBRWpDLElBQUlFLGNBQWNJLFlBQVk7b0JBQzVCO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0YsbUJBQW1CLENBQUNGLFdBQVdDO1lBQ3RDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkYsU0FBUyxFQUFFQyxhQUFhO2dCQUMxQyxJQUFNeEMsZUFBZSxJQUFJLENBQUNvQyxlQUFlO2dCQUV6QyxJQUFJSSxrQkFBa0IsQ0FBQyxHQUFHO29CQUN4QixJQUFNTyxzQkFBc0IvQyxZQUFZLENBQUN3QyxjQUFjO29CQUV2RE8sb0JBQW9CQyxJQUFJO2dCQUMxQjtnQkFFQSxJQUFNQyxrQkFBa0JqRCxZQUFZLENBQUN1QyxVQUFVO2dCQUUvQywwQkFBMEI7Z0JBQzFCLEVBQUU7Z0JBQ0Ysd0JBQXdCO2dCQUN4QixFQUFFO2dCQUNGLHNCQUFzQjtnQkFDdEIsRUFBRTtnQkFDRiw4QkFBOEI7Z0JBRTlCVSxnQkFBZ0JDLElBQUk7WUFDdEI7OztZQUVBbEIsS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQlAsUUFBUTtnQkFDaEMsSUFBSTBCO2dCQUVKQSxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQzNCLFdBQVksR0FBRztnQkFFdkQsSUFBSTBCLGdCQUFnQixNQUFNO29CQUN4QjtnQkFDRjtnQkFFQSxJQUFNbkQsZUFBZSxJQUFJLENBQUNvQyxlQUFlLElBQ25DRixxQkFBcUIsSUFBSSxDQUFDQyxzQkFBc0IsSUFDaERjLGtCQUFrQkUsYUFDbEJKLHNCQUFzQmIsb0JBQ3RCSyxZQUFZdkMsYUFBYXNDLE9BQU8sQ0FBQ1csa0JBQ2pDVCxnQkFBZ0J4QyxhQUFhc0MsT0FBTyxDQUFDUyxzQkFBdUIsR0FBRztnQkFFckUsSUFBSSxDQUFDTixtQkFBbUIsQ0FBQ0YsV0FBV0M7Z0JBRXBDYSxJQUFBQSxzQkFBYyxFQUFDNUI7WUFDakI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCRCxhQUFhO2dCQUMxQyxJQUFNOUIsZUFBZSxJQUFJLENBQUNvQyxlQUFlLElBQ25DRixxQkFBcUIsSUFBSSxDQUFDQyxzQkFBc0IsSUFDaERRLGFBQWEzQyxhQUFhNEMsTUFBTSxFQUNoQ1UsYUFBYUMsSUFBQUEsbUNBQTJCLEVBQUN6QixnQkFDekNPLFFBQVFyQyxhQUFhc0MsT0FBTyxDQUFDSixxQkFDN0JLLFlBQVllLGFBQWEsR0FDekJkLGdCQUFnQkgsT0FBUSxHQUFHO2dCQUVqQyxJQUFJRSxjQUFjSSxZQUFZO29CQUM1QjtnQkFDRjtnQkFFQSxJQUFJLENBQUNGLG1CQUFtQixDQUFDRixXQUFXQztZQUN0Qzs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbkMsZUFBZSxJQUFJLENBQUNvQyxlQUFlLElBQ25DZSxjQUFjbkQsYUFBYXdELElBQUksQ0FBQyxTQUFDTDtvQkFDL0IsSUFBTU0sVUFBVU4sWUFBWU8sU0FBUztvQkFFckMsSUFBSUQsU0FBUzt3QkFDWCxPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosT0FBT047WUFDVDs7O1lBRUFmLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdUIsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDNUQsZUFDRSxxQkFBRzJEO2dCQUdYLE9BQU8zRDtZQUNUOzs7WUFFQTZELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxRUFBcUU7Z0JBQ3JFLEVBQUU7Z0JBQ0YsdURBQXVEO2dCQUN2RCxFQUFFO2dCQUNGLDJCQUEyQjtnQkFDM0IsRUFBRTtnQkFDRixzQkFBc0I7Z0JBRXRCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ3hELFlBQVk7Z0JBRTlCLElBQUksQ0FBQ3VDLG9CQUFvQjtZQUMzQjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDMUQsWUFBWTtZQUUvQix1QkFBdUI7WUFDdkIsRUFBRTtZQUNGLDRCQUE0QjtZQUM1QixFQUFFO1lBQ0Ysd0RBQXdEO1lBQ3hELEVBQUU7WUFDRixzRUFBc0U7WUFDeEU7OztZQUVBcUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1BLGdCQUFnQjNELGNBQWMsR0FBRztnQkFFdkMsT0FBTzJEO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0Usc0RBQXNEO2dCQUN0RCxpREFBaUQ7Z0JBQ2pELHlEQUF5RDtnQkFDekQsMkRBQTJEO2dCQUUzRCxJQUFNaEMsc0JBQXNCLElBQUksQ0FBQ0EsbUJBQW1CLENBQUNpQyxJQUFJLENBQUMsSUFBSSxHQUN4RHhCLHNCQUFzQixJQUFJLENBQUNBLG1CQUFtQixDQUFDd0IsSUFBSSxDQUFDLElBQUksR0FDeERyQix1QkFBdUIsSUFBSSxDQUFDQSxvQkFBb0IsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJLEdBQzFEcEIsdUJBQXVCLElBQUksQ0FBQ0Esb0JBQW9CLENBQUNvQixJQUFJLENBQUMsSUFBSTtnQkFFaEUsT0FBUTtvQkFDTixjQUFjO29CQUNkLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CakMscUJBQUFBO29CQUNBUyxxQkFBQUE7b0JBQ0FHLHNCQUFBQTtvQkFDQUMsc0JBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtZQUVsQiwwQkFBMEI7WUFDNUI7OztXQXpQSS9EO3FCQUFvQmdFLGFBQU87QUEyUC9CLGlCQTNQSWhFLGFBMlBHaUUsV0FBVTtBQUVqQixpQkE3UElqRSxhQTZQR2tFLHFCQUFvQixFQUFFO0FBRTdCLGlCQS9QSWxFLGFBK1BHbUUscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFHRkMsT0FBT0MsTUFBTSxDQUFDdEUsWUFBWXVFLFNBQVMsRUFBRUMsdUJBQVc7QUFDaERILE9BQU9DLE1BQU0sQ0FBQ3RFLFlBQVl1RSxTQUFTLEVBQUVFLDRCQUFnQjtJQUVyRCxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDMUUifQ==