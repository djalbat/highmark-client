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
var _selectors = require("../../selectors");
var _element = require("../../utilities/element");
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
        "\n  \n  width: fit-content;\n  display: flex;\n  flex-shrink: 0;\n  align-items: flex-start;\n  flex-direction: column;\n  \n  .presentation {\n    width: 100%;\n    height: 100%;\n    align-items: stretch;\n  }\n  \n"
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
        return _call_super(this, DocumentDiv, arguments);
    }
    _create_class(DocumentDiv, [
        {
            key: "scale",
            value: function scale(documentScale, viewInnerWidth, previewPaneInnerHeight) {
                var scale = documentScale, width = this.getWidth(), height = this.getHeight(), scaledWidth = width * scale, scaledHeight = height * scale, translateX = scaledWidth < viewInnerWidth ? (viewInnerWidth - scaledWidth) / 2 : 0, translateY = scaledHeight < previewPaneInnerHeight ? (previewPaneInnerHeight - scaledHeight) / 2 : 0, transform = "translate(".concat(translateX, "px, ").concat(translateY, "px) scale(").concat(scale, ")"), transformOrigin = _constants.TOP_LEFT_TRANSFORM_ORIGIN;
                this.style(_constants.TRANSFORM, transform);
                this.style(_constants.TRANSFORM_ORIGIN, transformOrigin);
                var marginRight = width * (scale - 1), marginBottom = height * (scale - 1);
                marginRight = "".concat(marginRight, "px");
                marginBottom = "".concat(marginBottom, "px");
                this.style(_constants.MARGIN_RIGHT, marginRight);
                this.style(_constants.MARGIN_BOTTOM, marginBottom);
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
                this.showFirstDivisionDiv();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
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
                var goToAnchor = this.goToAnchor.bind(this), scaleDocumentDiv = this.scale.bind(this), getDocumentDivWidth = this.getWidth.bind(this), getDocumentDivHeight = this.getHeight.bind(this), showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this);
                return {
                    goToAnchor: goToAnchor,
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
_define_property(DocumentDiv, "ignoredProperties", [
    "resizeHandler"
]);
_define_property(DocumentDiv, "defaultProperties", {
    className: "document"
});
var _default = (0, _easywithstyle.default)(DocumentDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBEaXZpc2lvbkRpdiBmcm9tIFwiLi4vZGl2L2RpdmlzaW9uXCI7XG5cbmltcG9ydCB7IERPQ1VNRU5UX0RJVl9TRUxFQ1RPUiwgRElWSVNJT05fRElWU19TRUxFQ1RPUiB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHJlbW92ZURPTUVsZW1lbnQsIHJlbW92ZURPTUVsZW1lbnRzLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgVFJBTlNGT1JNLCBNQVJHSU5fUklHSFQsIE1BUkdJTl9CT1RUT00sIFRSQU5TRk9STV9PUklHSU4sIFRPUF9MRUZUX1RSQU5TRk9STV9PUklHSU4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCwgaXNBbmNob3JJZEluZGV4QW5jaG9ySWQsIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYW5jaG9yXCI7XG5cbmNvbnN0IGRpdmlzaW9uRGl2RE9NRWxlbWVudHMgPSByZW1vdmVET01FbGVtZW50cyhESVZJU0lPTl9ESVZTX1NFTEVDVE9SKSxcbiAgICAgIGRpdmlzaW9uRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRpdmlzaW9uRGl2RE9NRWxlbWVudHMsIERpdmlzaW9uRGl2KTtcblxucmVtb3ZlRE9NRWxlbWVudChET0NVTUVOVF9ESVZfU0VMRUNUT1IpO1xuXG5jbGFzcyBEb2N1bWVudERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBzY2FsZShkb2N1bWVudFNjYWxlLCB2aWV3SW5uZXJXaWR0aCwgcHJldmlld1BhbmVJbm5lckhlaWdodCkge1xuICAgIGNvbnN0IHNjYWxlID0gZG9jdW1lbnRTY2FsZSwgIC8vL1xuICAgICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgc2NhbGVkV2lkdGggPSB3aWR0aCAqIHNjYWxlLFxuICAgICAgICAgIHNjYWxlZEhlaWdodCA9IGhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoc2NhbGVkV2lkdGggPCB2aWV3SW5uZXJXaWR0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICh2aWV3SW5uZXJXaWR0aCAtIHNjYWxlZFdpZHRoKSAvIDIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gKHNjYWxlZEhlaWdodCA8IHByZXZpZXdQYW5lSW5uZXJIZWlnaHQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAocHJldmlld1BhbmVJbm5lckhlaWdodCAtIHNjYWxlZEhlaWdodCkgLyAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weCkgc2NhbGUoJHtzY2FsZX0pYCxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4gPSBUT1BfTEVGVF9UUkFOU0ZPUk1fT1JJR0lOO1xuXG4gICAgdGhpcy5zdHlsZShUUkFOU0ZPUk0sIHRyYW5zZm9ybSk7XG4gICAgdGhpcy5zdHlsZShUUkFOU0ZPUk1fT1JJR0lOLCB0cmFuc2Zvcm1PcmlnaW4pO1xuXG4gICAgbGV0IG1hcmdpblJpZ2h0ID0gd2lkdGggKiAoc2NhbGUgLSAxKSxcbiAgICAgICAgbWFyZ2luQm90dG9tID0gaGVpZ2h0ICogKHNjYWxlIC0gMSk7XG5cbiAgICBtYXJnaW5SaWdodCA9IGAke21hcmdpblJpZ2h0fXB4YDtcbiAgICBtYXJnaW5Cb3R0b20gPSBgJHttYXJnaW5Cb3R0b219cHhgO1xuXG4gICAgdGhpcy5zdHlsZShNQVJHSU5fUklHSFQsIG1hcmdpblJpZ2h0KTtcbiAgICB0aGlzLnN0eWxlKE1BUkdJTl9CT1RUT00sIG1hcmdpbkJvdHRvbSk7XG4gIH1cblxuICBnb1RvQW5jaG9yKGFuY2hvcklkKSB7XG4gICAgY29uc3QgYW5jaG9ySWRJbmRleEFuY2hvcklkID0gaXNBbmNob3JJZEluZGV4QW5jaG9ySWQoYW5jaG9ySWQpO1xuXG4gICAgaWYgKGFuY2hvcklkSW5kZXhBbmNob3JJZCkge1xuICAgICAgY29uc3QgaW5kZXhBbmNob3JJZCA9IGFuY2hvcklkOyAvLy9cblxuICAgICAgdGhpcy5zaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpO1xuICB9XG5cbiAgc2hvd0xlZnREaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2Yoc2hvd2luZ0RpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0xhc3REaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZpc2lvbkRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gKHNob3dpbmdEaXZpc2lvbkRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2aXNpb25EaXZzLmluZGV4T2Yoc2hvd2luZ0RpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZzTGVuZ3RoIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dGaXJzdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgaW5kZXggPSAoc2hvd2luZ0RpdmlzaW9uRGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IDAsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93UmlnaHREaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZpc2lvbkRpdnMubGVuZ3RoLFxuICAgICAgICAgIGluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2Yoc2hvd2luZ0RpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCk7XG5cbiAgICBpZiAocHJldmlvdXNJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzRGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnNbcHJldmlvdXNJbmRleF07XG5cbiAgICAgIHByZXZpb3VzRGl2aXNpb25EaXYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHREaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2c1tuZXh0SW5kZXhdO1xuXG4gICAgbmV4dERpdmlzaW9uRGl2LnNob3coKTtcbiAgfVxuXG4gIHNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpIHtcbiAgICBsZXQgZGl2aXNpb25EaXY7XG5cbiAgICBkaXZpc2lvbkRpdiA9IGZpbmREaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpOyAgLy8vXG5cbiAgICBpZiAoZGl2aXNpb25EaXYgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIG5leHREaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2LCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNEaXZpc2lvbkRpdiA9IHNob3dpbmdEaXZpc2lvbkRpdiwgIC8vL1xuICAgICAgICAgIG5leHRJbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKG5leHREaXZpc2lvbkRpdiksICAvLy9cbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YocHJldmlvdXNEaXZpc2lvbkRpdik7ICAvLy9cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuXG4gICAgc2Nyb2xsVG9BbmNob3IoYW5jaG9ySWQpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdnNMZW5ndGggPSBkaXZpc2lvbkRpdnMubGVuZ3RoLFxuICAgICAgICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyRnJvbUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCksXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IHBhZ2VOdW1iZXIgLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgZmluZFNob3dpbmdEaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzLmZpbmQoKGRpdmlzaW9uRGl2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93aW5nID0gZGl2aXNpb25EaXYuaXNTaG93aW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChzaG93aW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2aXNpb25EaXY7XG4gIH1cblxuICBnZXREaXZpc2lvbkRpdnMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IFtcbiAgICAgICAgICAgIC4uLmNoaWxkRWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uRGl2cztcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZGl2aXNpb25EaXZzOyAvLy9cblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnb1RvQW5jaG9yID0gdGhpcy5nb1RvQW5jaG9yLmJpbmQodGhpcyksXG4gICAgICAgICAgc2NhbGVEb2N1bWVudERpdiA9IHRoaXMuc2NhbGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0RG9jdW1lbnREaXZXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0RG9jdW1lbnREaXZIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzaG93TGVmdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0xhc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xhc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dGaXJzdERpdmlzaW9uRGl2ID0gdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2ID0gdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnb1RvQW5jaG9yLFxuICAgICAgc2NhbGVEb2N1bWVudERpdixcbiAgICAgIGdldERvY3VtZW50RGl2V2lkdGgsXG4gICAgICBnZXREb2N1bWVudERpdkhlaWdodCxcbiAgICAgIHNob3dMZWZ0RGl2aXNpb25EaXYsXG4gICAgICBzaG93TGFzdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd0ZpcnN0RGl2aXNpb25EaXYsXG4gICAgICBzaG93UmlnaHREaXZpc2lvbkRpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJyZXNpemVIYW5kbGVyXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRvY3VtZW50XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERvY3VtZW50RGl2KWBcbiAgXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgLnByZXNlbnRhdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJkaXZpc2lvbkRpdkRPTUVsZW1lbnRzIiwicmVtb3ZlRE9NRWxlbWVudHMiLCJESVZJU0lPTl9ESVZTX1NFTEVDVE9SIiwiZGl2aXNpb25EaXZzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXZpc2lvbkRpdiIsInJlbW92ZURPTUVsZW1lbnQiLCJET0NVTUVOVF9ESVZfU0VMRUNUT1IiLCJEb2N1bWVudERpdiIsInNjYWxlIiwiZG9jdW1lbnRTY2FsZSIsInZpZXdJbm5lcldpZHRoIiwicHJldmlld1BhbmVJbm5lckhlaWdodCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJzY2FsZWRXaWR0aCIsInNjYWxlZEhlaWdodCIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwidHJhbnNmb3JtIiwidHJhbnNmb3JtT3JpZ2luIiwiVE9QX0xFRlRfVFJBTlNGT1JNX09SSUdJTiIsInN0eWxlIiwiVFJBTlNGT1JNIiwiVFJBTlNGT1JNX09SSUdJTiIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwiTUFSR0lOX1JJR0hUIiwiTUFSR0lOX0JPVFRPTSIsImdvVG9BbmNob3IiLCJhbmNob3JJZCIsImFuY2hvcklkSW5kZXhBbmNob3JJZCIsImlzQW5jaG9ySWRJbmRleEFuY2hvcklkIiwiaW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZCIsInNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJzaG93TGVmdERpdmlzaW9uRGl2Iiwic2hvd2luZ0RpdmlzaW9uRGl2IiwiZmluZFNob3dpbmdEaXZpc2lvbkRpdiIsImdldERpdmlzaW9uRGl2cyIsImluZGV4IiwiaW5kZXhPZiIsIm5leHRJbmRleCIsInByZXZpb3VzSW5kZXgiLCJzaG93TmV4dERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsImRpdnNMZW5ndGgiLCJsZW5ndGgiLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dSaWdodERpdmlzaW9uRGl2IiwicHJldmlvdXNEaXZpc2lvbkRpdiIsImhpZGUiLCJuZXh0RGl2aXNpb25EaXYiLCJzaG93IiwiZGl2aXNpb25EaXYiLCJmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkIiwic2Nyb2xsVG9BbmNob3IiLCJwYWdlTnVtYmVyIiwicGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIiwiZmluZCIsInNob3dpbmciLCJpc1Nob3dpbmciLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsInNjYWxlRG9jdW1lbnREaXYiLCJnZXREb2N1bWVudERpdldpZHRoIiwiZ2V0RG9jdW1lbnREaXZIZWlnaHQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0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