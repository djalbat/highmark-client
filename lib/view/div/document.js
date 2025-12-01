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
var _easy = require("easy");
var _division = /*#__PURE__*/ _interop_require_default(require("../div/division"));
var _element = require("../../utilities/element");
var _selectors = require("../../selectors");
var _constants = require("../../constants");
var _anchor = require("../../utilities/anchor");
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
                this.onClick(this.clickHandler);
                this.showFirstDivisionDiv();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offClick(this.clickHandler);
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
                var scaleDocumentDiv = this.scale.bind(this), getDocumentDivWidth = this.getWidth.bind(this), getDocumentDivHeight = this.getHeight.bind(this), showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this);
                return {
                    scaleDocumentDiv: scaleDocumentDiv,
                    getDocumentDivWidth: getDocumentDivWidth,
                    getDocumentDivHeight: getDocumentDivHeight,
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
var _default = (0, _easywithstyle.default)(DocumentDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBEaXZpc2lvbkRpdiBmcm9tIFwiLi4vZGl2L2RpdmlzaW9uXCI7XG5cbmltcG9ydCB7IHJlbW92ZURPTUVsZW1lbnQsIHJlbW92ZURPTUVsZW1lbnRzLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IsIERPQ1VNRU5UX0RJVl9TRUxFQ1RPUiwgRElWSVNJT05fRElWU19TRUxFQ1RPUiB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IEhBU0gsIEhSRUYsIEVNUFRZX1NUUklORywgVFJBTlNGT1JNLCBCTEFOS19UQVJHRVQsIFRSQU5TRk9STV9PUklHSU4sIFRPUF9MRUZUX1RSQU5TRk9STV9PUklHSU4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCwgaXNBbmNob3JJZEluZGV4QW5jaG9ySWQsIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYW5jaG9yXCI7XG5cbmNvbnN0IGRpdmlzaW9uRGl2RE9NRWxlbWVudHMgPSByZW1vdmVET01FbGVtZW50cyhESVZJU0lPTl9ESVZTX1NFTEVDVE9SKSxcbiAgICAgIGRpdmlzaW9uRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRpdmlzaW9uRGl2RE9NRWxlbWVudHMsIERpdmlzaW9uRGl2KTtcblxucmVtb3ZlRE9NRWxlbWVudChET0NVTUVOVF9ESVZfU0VMRUNUT1IpO1xuXG5jbGFzcyBEb2N1bWVudERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgbGluayA9IHRhcmdldC5jbG9zZXN0KEFOQ0hPUl9IUkVGX1NFTEVDVE9SKTtcblxuICAgIGlmIChsaW5rID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKEhSRUYpO1xuXG4gICAgaWYgKGhyZWYgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBocmVmU3RhcnRzV2l0aEhhc2ggPSBocmVmLnN0YXJ0c1dpdGgoSEFTSCksXG4gICAgICAgICAgbGlua0V4dGVybmFsID0gIWhyZWZTdGFydHNXaXRoSGFzaDtcblxuICAgIGlmIChsaW5rRXh0ZXJuYWwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IEJMQU5LX1RBUkdFVDtcblxuICAgICAgd2luZG93Lm9wZW4oaHJlZiwgdGFyZ2V0KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFuY2hvcklkID0gaHJlZi5zdWJzdHJpbmcoMSk7IC8vL1xuXG4gICAgdGhpcy5nb1RvQW5jaG9yKGFuY2hvcklkKTtcbiAgfVxuXG4gIHNjYWxlKGRvY3VtZW50U2NhbGUsIHByZXZpZXdQYW5lSW5uZXJXaWR0aCwgcHJldmlld1BhbmVJbm5lckhlaWdodCkge1xuICAgIGNvbnN0IHNjYWxlID0gZG9jdW1lbnRTY2FsZSwgIC8vL1xuICAgICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgc2NhbGVkV2lkdGggPSB3aWR0aCAqIHNjYWxlLFxuICAgICAgICAgIHNjYWxlZEhlaWdodCA9IGhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoc2NhbGVkV2lkdGggPCBwcmV2aWV3UGFuZUlubmVyV2lkdGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAocHJldmlld1BhbmVJbm5lcldpZHRoIC0gc2NhbGVkV2lkdGgpIC8gMiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSAoc2NhbGVkSGVpZ2h0IDwgcHJldmlld1BhbmVJbm5lckhlaWdodCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIChwcmV2aWV3UGFuZUlubmVySGVpZ2h0IC0gc2NhbGVkSGVpZ2h0KSAvIDIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4KSBzY2FsZSgke3NjYWxlfSlgLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbiA9IFRPUF9MRUZUX1RSQU5TRk9STV9PUklHSU47XG5cbiAgICB0aGlzLnN0eWxlKFRSQU5TRk9STSwgdHJhbnNmb3JtKTtcblxuICAgIHRoaXMuc3R5bGUoVFJBTlNGT1JNX09SSUdJTiwgdHJhbnNmb3JtT3JpZ2luKTtcbiAgfVxuXG4gIGdvVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgICBjb25zdCBhbmNob3JJZEluZGV4QW5jaG9ySWQgPSBpc0FuY2hvcklkSW5kZXhBbmNob3JJZChhbmNob3JJZCk7XG5cbiAgICBpZiAoYW5jaG9ySWRJbmRleEFuY2hvcklkKSB7XG4gICAgICBjb25zdCBpbmRleEFuY2hvcklkID0gYW5jaG9ySWQ7IC8vL1xuXG4gICAgICB0aGlzLnNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7XG4gIH1cblxuICBzaG93TGVmdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSAoc2hvd2luZ0RpdmlzaW9uRGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBpbmRleCA9IChzaG93aW5nRGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgICAgcHJldmlvdXNEaXZpc2lvbkRpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW25leHRJbmRleF07XG5cbiAgICBuZXh0RGl2aXNpb25EaXYuc2hvdygpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCkge1xuICAgIGxldCBkaXZpc2lvbkRpdjtcblxuICAgIGRpdmlzaW9uRGl2ID0gZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7ICAvLy9cblxuICAgIGlmIChkaXZpc2lvbkRpdiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXYsICAvLy9cbiAgICAgICAgICBwcmV2aW91c0RpdmlzaW9uRGl2ID0gc2hvd2luZ0RpdmlzaW9uRGl2LCAgLy8vXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YobmV4dERpdmlzaW9uRGl2KSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihwcmV2aW91c0RpdmlzaW9uRGl2KTsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG5cbiAgICBzY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG4gIH1cblxuICBzaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKSxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gcGFnZU51bWJlciAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0RpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnMuZmluZCgoZGl2aXNpb25EaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBkaXZpc2lvbkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkRpdjtcbiAgfVxuXG4gIGdldERpdmlzaW9uRGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gW1xuICAgICAgICAgICAgLi4uY2hpbGRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZGl2aXNpb25EaXZzO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyKTtcblxuICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZGl2aXNpb25EaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzY2FsZURvY3VtZW50RGl2ID0gdGhpcy5zY2FsZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXREb2N1bWVudERpdldpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXREb2N1bWVudERpdkhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNob3dMZWZ0RGl2aXNpb25EaXYgPSB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93TGFzdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0ZpcnN0RGl2aXNpb25EaXYgPSB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd1JpZ2h0RGl2aXNpb25EaXYgPSB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNjYWxlRG9jdW1lbnREaXYsXG4gICAgICBnZXREb2N1bWVudERpdldpZHRoLFxuICAgICAgZ2V0RG9jdW1lbnREaXZIZWlnaHQsXG4gICAgICBzaG93TGVmdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdixcbiAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd1JpZ2h0RGl2aXNpb25EaXZcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkb2N1bWVudFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEb2N1bWVudERpdilgXG4gIFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgLnByZXNlbnRhdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJkaXZpc2lvbkRpdkRPTUVsZW1lbnRzIiwicmVtb3ZlRE9NRWxlbWVudHMiLCJESVZJU0lPTl9ESVZTX1NFTEVDVE9SIiwiZGl2aXNpb25EaXZzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXZpc2lvbkRpdiIsInJlbW92ZURPTUVsZW1lbnQiLCJET0NVTUVOVF9ESVZfU0VMRUNUT1IiLCJEb2N1bWVudERpdiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRhcmdldCIsImxpbmsiLCJjbG9zZXN0IiwiQU5DSE9SX0hSRUZfU0VMRUNUT1IiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiSFJFRiIsIkVNUFRZX1NUUklORyIsInByZXZlbnREZWZhdWx0IiwiaHJlZlN0YXJ0c1dpdGhIYXNoIiwic3RhcnRzV2l0aCIsIkhBU0giLCJsaW5rRXh0ZXJuYWwiLCJCTEFOS19UQVJHRVQiLCJ3aW5kb3ciLCJvcGVuIiwiYW5jaG9ySWQiLCJzdWJzdHJpbmciLCJnb1RvQW5jaG9yIiwic2NhbGUiLCJkb2N1bWVudFNjYWxlIiwicHJldmlld1BhbmVJbm5lcldpZHRoIiwicHJldmlld1BhbmVJbm5lckhlaWdodCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzY2FsZWRXaWR0aCIsInNjYWxlZEhlaWdodCIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwidHJhbnNmb3JtIiwidHJhbnNmb3JtT3JpZ2luIiwiVE9QX0xFRlRfVFJBTlNGT1JNX09SSUdJTiIsInN0eWxlIiwiVFJBTlNGT1JNIiwiVFJBTlNGT1JNX09SSUdJTiIsImFuY2hvcklkSW5kZXhBbmNob3JJZCIsImlzQW5jaG9ySWRJbmRleEFuY2hvcklkIiwiaW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJzaG93TGVmdERpdmlzaW9uRGl2Iiwic2hvd2luZ0RpdmlzaW9uRGl2IiwiZmluZFNob3dpbmdEaXZpc2lvbkRpdiIsImdldERpdmlzaW9uRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dSaWdodERpdmlzaW9uRGl2IiwicHJldmlvdXNEaXZpc2lvbkRpdiIsImhpZGUiLCJuZXh0RGl2aXNpb25EaXYiLCJzaG93IiwiZGl2aXNpb25EaXYiLCJmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkIiwic2Nyb2xsVG9BbmNob3IiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIiwiZmluZCIsInNob3dpbmciLCJpc1Nob3dpbmciLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImRpZE1vdW50Iiwib25DbGljayIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJwYXJlbnRDb250ZXh0Iiwic2NhbGVEb2N1bWVudERpdiIsImJpbmQiLCJnZXREb2N1bWVudERpdldpZHRoIiwiZ2V0RG9jdW1lbnREaXZIZWlnaHQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNlFBOzs7ZUFBQTs7O29FQTNRc0I7b0JBRUU7K0RBRUE7dUJBRXFEO3lCQUNPO3lCQUMyQjtzQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEgsSUFBTUEseUJBQXlCQyxJ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