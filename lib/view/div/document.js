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
                var scaleDocumentDiv = this.scale.bind(this), showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this);
                return {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBEaXZpc2lvbkRpdiBmcm9tIFwiLi4vZGl2L2RpdmlzaW9uXCI7XG5cbmltcG9ydCB7IHJlbW92ZURPTUVsZW1lbnQsIHJlbW92ZURPTUVsZW1lbnRzLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IsIERPQ1VNRU5UX0RJVl9TRUxFQ1RPUiwgRElWSVNJT05fRElWU19TRUxFQ1RPUiB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IEhBU0gsIEhSRUYsIEVNUFRZX1NUUklORywgVFJBTlNGT1JNLCBCTEFOS19UQVJHRVQsIFRSQU5TRk9STV9PUklHSU4sIFRPUF9MRUZUX1RSQU5TRk9STV9PUklHSU4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCwgaXNBbmNob3JJZEluZGV4QW5jaG9ySWQsIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYW5jaG9yXCI7XG5cbmNvbnN0IGRpdmlzaW9uRGl2RE9NRWxlbWVudHMgPSByZW1vdmVET01FbGVtZW50cyhESVZJU0lPTl9ESVZTX1NFTEVDVE9SKSxcbiAgICAgIGRpdmlzaW9uRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRpdmlzaW9uRGl2RE9NRWxlbWVudHMsIERpdmlzaW9uRGl2KTtcblxucmVtb3ZlRE9NRWxlbWVudChET0NVTUVOVF9ESVZfU0VMRUNUT1IpO1xuXG5jbGFzcyBEb2N1bWVudERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgbGluayA9IHRhcmdldC5jbG9zZXN0KEFOQ0hPUl9IUkVGX1NFTEVDVE9SKTtcblxuICAgIGlmIChsaW5rID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKEhSRUYpO1xuXG4gICAgaWYgKGhyZWYgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBocmVmU3RhcnRzV2l0aEhhc2ggPSBocmVmLnN0YXJ0c1dpdGgoSEFTSCksXG4gICAgICAgICAgbGlua0V4dGVybmFsID0gIWhyZWZTdGFydHNXaXRoSGFzaDtcblxuICAgIGlmIChsaW5rRXh0ZXJuYWwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IEJMQU5LX1RBUkdFVDtcblxuICAgICAgd2luZG93Lm9wZW4oaHJlZiwgdGFyZ2V0KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFuY2hvcklkID0gaHJlZi5zdWJzdHJpbmcoMSk7IC8vL1xuXG4gICAgdGhpcy5nb1RvQW5jaG9yKGFuY2hvcklkKTtcbiAgfVxuXG4gIHNjYWxlKGRvY3VtZW50U2NhbGUsIHByZXZpZXdQYW5lSW5uZXJXaWR0aCwgcHJldmlld1BhbmVJbm5lckhlaWdodCkge1xuICAgIGNvbnN0IHNjYWxlID0gZG9jdW1lbnRTY2FsZSwgIC8vL1xuICAgICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgc2NhbGVkV2lkdGggPSB3aWR0aCAqIHNjYWxlLFxuICAgICAgICAgIHNjYWxlZEhlaWdodCA9IGhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoc2NhbGVkV2lkdGggPCBwcmV2aWV3UGFuZUlubmVyV2lkdGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAocHJldmlld1BhbmVJbm5lcldpZHRoIC0gc2NhbGVkV2lkdGgpIC8gMiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSAoc2NhbGVkSGVpZ2h0IDwgcHJldmlld1BhbmVJbm5lckhlaWdodCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIChwcmV2aWV3UGFuZUlubmVySGVpZ2h0IC0gc2NhbGVkSGVpZ2h0KSAvIDIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4KSBzY2FsZSgke3NjYWxlfSlgLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbiA9IFRPUF9MRUZUX1RSQU5TRk9STV9PUklHSU47XG5cbiAgICB0aGlzLnN0eWxlKFRSQU5TRk9STSwgdHJhbnNmb3JtKTtcblxuICAgIHRoaXMuc3R5bGUoVFJBTlNGT1JNX09SSUdJTiwgdHJhbnNmb3JtT3JpZ2luKTtcbiAgfVxuXG4gIGdvVG9BbmNob3IoYW5jaG9ySWQpIHtcbiAgICBjb25zdCBhbmNob3JJZEluZGV4QW5jaG9ySWQgPSBpc0FuY2hvcklkSW5kZXhBbmNob3JJZChhbmNob3JJZCk7XG5cbiAgICBpZiAoYW5jaG9ySWRJbmRleEFuY2hvcklkKSB7XG4gICAgICBjb25zdCBpbmRleEFuY2hvcklkID0gYW5jaG9ySWQ7IC8vL1xuXG4gICAgICB0aGlzLnNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7XG4gIH1cblxuICBzaG93TGVmdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSAoc2hvd2luZ0RpdmlzaW9uRGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBpbmRleCA9IChzaG93aW5nRGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgICAgcHJldmlvdXNEaXZpc2lvbkRpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW25leHRJbmRleF07XG5cbiAgICBuZXh0RGl2aXNpb25EaXYuc2hvdygpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCkge1xuICAgIGxldCBkaXZpc2lvbkRpdjtcblxuICAgIGRpdmlzaW9uRGl2ID0gZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7ICAvLy9cblxuICAgIGlmIChkaXZpc2lvbkRpdiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXYsICAvLy9cbiAgICAgICAgICBwcmV2aW91c0RpdmlzaW9uRGl2ID0gc2hvd2luZ0RpdmlzaW9uRGl2LCAgLy8vXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YobmV4dERpdmlzaW9uRGl2KSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihwcmV2aW91c0RpdmlzaW9uRGl2KTsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG5cbiAgICBzY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG4gIH1cblxuICBzaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKSxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gcGFnZU51bWJlciAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0RpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnMuZmluZCgoZGl2aXNpb25EaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBkaXZpc2lvbkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkRpdjtcbiAgfVxuXG4gIGdldERpdmlzaW9uRGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gW1xuICAgICAgICAgICAgLi4uY2hpbGRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZGl2aXNpb25EaXZzO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyKTtcblxuICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZGl2aXNpb25EaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzY2FsZURvY3VtZW50RGl2ID0gdGhpcy5zY2FsZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzaG93TGVmdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2ID0gdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzY2FsZURvY3VtZW50RGl2LFxuICAgICAgc2hvd0xlZnREaXZpc2lvbkRpdixcbiAgICAgIHNob3dMYXN0RGl2aXNpb25EaXYsXG4gICAgICBzaG93Rmlyc3REaXZpc2lvbkRpdixcbiAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZG9jdW1lbnRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRG9jdW1lbnREaXYpYFxuICBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gIC5wcmVzZW50YXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiZGl2aXNpb25EaXZET01FbGVtZW50cyIsInJlbW92ZURPTUVsZW1lbnRzIiwiRElWSVNJT05fRElWU19TRUxFQ1RPUiIsImRpdmlzaW9uRGl2cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiRGl2aXNpb25EaXYiLCJyZW1vdmVET01FbGVtZW50IiwiRE9DVU1FTlRfRElWX1NFTEVDVE9SIiwiRG9jdW1lbnREaXYiLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ0YXJnZXQiLCJsaW5rIiwiY2xvc2VzdCIsIkFOQ0hPUl9IUkVGX1NFTEVDVE9SIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsIkhSRUYiLCJFTVBUWV9TVFJJTkciLCJwcmV2ZW50RGVmYXVsdCIsImhyZWZTdGFydHNXaXRoSGFzaCIsInN0YXJ0c1dpdGgiLCJIQVNIIiwibGlua0V4dGVybmFsIiwiQkxBTktfVEFSR0VUIiwid2luZG93Iiwib3BlbiIsImFuY2hvcklkIiwic3Vic3RyaW5nIiwiZ29Ub0FuY2hvciIsInNjYWxlIiwiZG9jdW1lbnRTY2FsZSIsInByZXZpZXdQYW5lSW5uZXJXaWR0aCIsInByZXZpZXdQYW5lSW5uZXJIZWlnaHQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2NhbGVkV2lkdGgiLCJzY2FsZWRIZWlnaHQiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybU9yaWdpbiIsIlRPUF9MRUZUX1RSQU5TRk9STV9PUklHSU4iLCJzdHlsZSIsIlRSQU5TRk9STSIsIlRSQU5TRk9STV9PUklHSU4iLCJhbmNob3JJZEluZGV4QW5jaG9ySWQiLCJpc0FuY2hvcklkSW5kZXhBbmNob3JJZCIsImluZGV4QW5jaG9ySWQiLCJzaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQiLCJzaG93RGl2aXNpb25EaXZCeUFuY2hvcklkIiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInNob3dpbmdEaXZpc2lvbkRpdiIsImZpbmRTaG93aW5nRGl2aXNpb25EaXYiLCJnZXREaXZpc2lvbkRpdnMiLCJpbmRleCIsImluZGV4T2YiLCJuZXh0SW5kZXgiLCJwcmV2aW91c0luZGV4Iiwic2hvd05leHREaXZpc2lvbkRpdiIsInNob3dMYXN0RGl2aXNpb25EaXYiLCJkaXZzTGVuZ3RoIiwibGVuZ3RoIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsInByZXZpb3VzRGl2aXNpb25EaXYiLCJoaWRlIiwibmV4dERpdmlzaW9uRGl2Iiwic2hvdyIsImRpdmlzaW9uRGl2IiwiZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCIsInNjcm9sbFRvQW5jaG9yIiwicGFnZU51bWJlciIsInBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCIsImZpbmQiLCJzaG93aW5nIiwiaXNTaG93aW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJkaWRNb3VudCIsIm9uQ2xpY2siLCJ3aWxsVW5tb3VudCIsIm9mZkNsaWNrIiwicGFyZW50Q29udGV4dCIsInNjYWxlRG9jdW1lbnREaXYiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlRQTs7O2VBQUE7OztvRUF2UXNCO29CQUVFOytEQUVBO3VCQUVxRDt5QkFDTzt5QkFDMkI7c0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhILElBQU1BLHlCQUF5QkMsSUFBQUEsMEJBQWlCLEVBQUNDLGlDQUFzQixHQUNqRUMsZUFBZUMsSUFBQUEsZ0NBQXVCLEVBQUNKLHdCQUF3QkssaUJBQVc7QUFFaEZDLElBQUFBLHlCQUFnQixFQUFDQyxnQ0FBcUI7QUFFdEMsSUFBQSxBQUFNQyw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSx5QkFDSkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLElBQU0sQUFBRUMsU0FBV0YsTUFBWEUsUUFDRkMsT0FB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