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
        "\n  \n  width: fit-content;\n  display: flex;\n  z-index: 0;\n  flex-shrink: 0;\n  align-items: flex-start;\n  flex-direction: column;\n  \n  .presentation {\n    width: 100%;\n    height: 100%;\n    align-items: stretch;\n  }\n  \n  .inverted-colours {\n    filter: invert(1);\n  }\n  \n"
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
            key: "draftMode",
            value: function draftMode() {
                this.removeClass("presentation");
            }
        },
        {
            key: "invertColours",
            value: function invertColours() {
                this.addClass("inverted-colours");
            }
        },
        {
            key: "revertColours",
            value: function revertColours() {
                this.removeClass("inverted-colours");
            }
        },
        {
            key: "presentationMode",
            value: function presentationMode() {
                this.addClass("presentation");
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
                var scaleDocumentDiv = this.scale.bind(this), getDocumentDivWidth = this.getWidth.bind(this), getDocumentDivHeight = this.getHeight.bind(this), documentDivDraftMode = this.draftMode.bind(this), documentDivPresentationMode = this.presentationMode.bind(this), goToAnchor = this.goToAnchor.bind(this), invertColours = this.invertColours.bind(this), revertColours = this.revertColours.bind(this), showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this), showLastDivisionDiv = this.showLastDivisionDiv.bind(this), showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this), showRightDivisionDiv = this.showRightDivisionDiv.bind(this);
                return {
                    scaleDocumentDiv: scaleDocumentDiv,
                    getDocumentDivWidth: getDocumentDivWidth,
                    getDocumentDivHeight: getDocumentDivHeight,
                    documentDivDraftMode: documentDivDraftMode,
                    documentDivPresentationMode: documentDivPresentationMode,
                    goToAnchor: goToAnchor,
                    invertColours: invertColours,
                    revertColours: revertColours,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBEaXZpc2lvbkRpdiBmcm9tIFwiLi4vZGl2L2RpdmlzaW9uXCI7XG5cbmltcG9ydCB7IERPQ1VNRU5UX0RJVl9TRUxFQ1RPUiwgRElWSVNJT05fRElWU19TRUxFQ1RPUiB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHJlbW92ZURPTUVsZW1lbnQsIHJlbW92ZURPTUVsZW1lbnRzLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgVFJBTlNGT1JNLCBNQVJHSU5fUklHSFQsIE1BUkdJTl9CT1RUT00sIFRSQU5TRk9STV9PUklHSU4sIFRPUF9MRUZUX1RSQU5TRk9STV9PUklHSU4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzY3JvbGxUb0FuY2hvciwgZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZCwgaXNBbmNob3JJZEluZGV4QW5jaG9ySWQsIHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYW5jaG9yXCI7XG5cbmNvbnN0IGRpdmlzaW9uRGl2RE9NRWxlbWVudHMgPSByZW1vdmVET01FbGVtZW50cyhESVZJU0lPTl9ESVZTX1NFTEVDVE9SKSxcbiAgICAgIGRpdmlzaW9uRGl2cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRpdmlzaW9uRGl2RE9NRWxlbWVudHMsIERpdmlzaW9uRGl2KTtcblxucmVtb3ZlRE9NRWxlbWVudChET0NVTUVOVF9ESVZfU0VMRUNUT1IpO1xuXG5jbGFzcyBEb2N1bWVudERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBzY2FsZShkb2N1bWVudFNjYWxlLCB2aWV3SW5uZXJXaWR0aCwgcHJldmlld1BhbmVJbm5lckhlaWdodCkge1xuICAgIGNvbnN0IHNjYWxlID0gZG9jdW1lbnRTY2FsZSwgIC8vL1xuICAgICAgICAgIHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgc2NhbGVkV2lkdGggPSB3aWR0aCAqIHNjYWxlLFxuICAgICAgICAgIHNjYWxlZEhlaWdodCA9IGhlaWdodCAqIHNjYWxlLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoc2NhbGVkV2lkdGggPCB2aWV3SW5uZXJXaWR0aCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICh2aWV3SW5uZXJXaWR0aCAtIHNjYWxlZFdpZHRoKSAvIDIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gKHNjYWxlZEhlaWdodCA8IHByZXZpZXdQYW5lSW5uZXJIZWlnaHQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAocHJldmlld1BhbmVJbm5lckhlaWdodCAtIHNjYWxlZEhlaWdodCkgLyAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weCkgc2NhbGUoJHtzY2FsZX0pYCxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4gPSBUT1BfTEVGVF9UUkFOU0ZPUk1fT1JJR0lOO1xuXG4gICAgdGhpcy5zdHlsZShUUkFOU0ZPUk0sIHRyYW5zZm9ybSk7XG4gICAgdGhpcy5zdHlsZShUUkFOU0ZPUk1fT1JJR0lOLCB0cmFuc2Zvcm1PcmlnaW4pO1xuXG4gICAgbGV0IG1hcmdpblJpZ2h0ID0gd2lkdGggKiAoc2NhbGUgLSAxKSxcbiAgICAgICAgbWFyZ2luQm90dG9tID0gaGVpZ2h0ICogKHNjYWxlIC0gMSk7XG5cbiAgICBtYXJnaW5SaWdodCA9IGAke21hcmdpblJpZ2h0fXB4YDtcbiAgICBtYXJnaW5Cb3R0b20gPSBgJHttYXJnaW5Cb3R0b219cHhgO1xuXG4gICAgdGhpcy5zdHlsZShNQVJHSU5fUklHSFQsIG1hcmdpblJpZ2h0KTtcbiAgICB0aGlzLnN0eWxlKE1BUkdJTl9CT1RUT00sIG1hcmdpbkJvdHRvbSk7XG4gIH1cblxuICBnb1RvQW5jaG9yKGFuY2hvcklkKSB7XG4gICAgY29uc3QgYW5jaG9ySWRJbmRleEFuY2hvcklkID0gaXNBbmNob3JJZEluZGV4QW5jaG9ySWQoYW5jaG9ySWQpO1xuXG4gICAgaWYgKGFuY2hvcklkSW5kZXhBbmNob3JJZCkge1xuICAgICAgY29uc3QgaW5kZXhBbmNob3JJZCA9IGFuY2hvcklkOyAvLy9cblxuICAgICAgdGhpcy5zaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dEaXZpc2lvbkRpdkJ5QW5jaG9ySWQoYW5jaG9ySWQpO1xuICB9XG5cbiAgZHJhZnRNb2RlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJwcmVzZW50YXRpb25cIik7XG4gIH1cblxuICBpbnZlcnRDb2xvdXJzKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpXG4gIH1cblxuICByZXZlcnRDb2xvdXJzKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJpbnZlcnRlZC1jb2xvdXJzXCIpXG4gIH1cblxuICBwcmVzZW50YXRpb25Nb2RlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJwcmVzZW50YXRpb25cIik7XG4gIH1cblxuICBzaG93TGVmdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93TGFzdERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSAoc2hvd2luZ0RpdmlzaW9uRGl2ID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGRpdnNMZW5ndGggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd0ZpcnN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBpbmRleCA9IChzaG93aW5nRGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gMCxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dSaWdodERpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihzaG93aW5nRGl2aXNpb25EaXYpLFxuICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKTtcblxuICAgIGlmIChwcmV2aW91c0luZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgcHJldmlvdXNEaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2c1twcmV2aW91c0luZGV4XTtcblxuICAgICAgcHJldmlvdXNEaXZpc2lvbkRpdi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW25leHRJbmRleF07XG5cbiAgICBuZXh0RGl2aXNpb25EaXYuc2hvdygpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCkge1xuICAgIGxldCBkaXZpc2lvbkRpdjtcblxuICAgIGRpdmlzaW9uRGl2ID0gZmluZERpdmlzaW9uRGl2QnlBbmNob3JJZChhbmNob3JJZCk7ICAvLy9cblxuICAgIGlmIChkaXZpc2lvbkRpdiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgbmV4dERpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXYsICAvLy9cbiAgICAgICAgICBwcmV2aW91c0RpdmlzaW9uRGl2ID0gc2hvd2luZ0RpdmlzaW9uRGl2LCAgLy8vXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2YobmV4dERpdmlzaW9uRGl2KSwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihwcmV2aW91c0RpdmlzaW9uRGl2KTsgIC8vL1xuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG5cbiAgICBzY3JvbGxUb0FuY2hvcihhbmNob3JJZCk7XG4gIH1cblxuICBzaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQoaW5kZXhBbmNob3JJZCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2c0xlbmd0aCA9IGRpdmlzaW9uRGl2cy5sZW5ndGgsXG4gICAgICAgICAgcGFnZU51bWJlciA9IHBhZ2VOdW1iZXJGcm9tSW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKSxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gcGFnZU51bWJlciAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBkaXZzTGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBmaW5kU2hvd2luZ0RpdmlzaW9uRGl2KCkge1xuICAgIGNvbnN0IGRpdmlzaW9uRGl2cyA9IHRoaXMuZ2V0RGl2aXNpb25EaXZzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnMuZmluZCgoZGl2aXNpb25EaXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dpbmcgPSBkaXZpc2lvbkRpdi5pc1Nob3dpbmcoKTtcblxuICAgICAgICAgICAgaWYgKHNob3dpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkRpdjtcbiAgfVxuXG4gIGdldERpdmlzaW9uRGl2cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gW1xuICAgICAgICAgICAgLi4uY2hpbGRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gZGl2aXNpb25EaXZzO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBkaXZpc2lvbkRpdnM7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNjYWxlRG9jdW1lbnREaXYgPSB0aGlzLnNjYWxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldERvY3VtZW50RGl2V2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldERvY3VtZW50RGl2SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZG9jdW1lbnREaXZEcmFmdE1vZGUgPSB0aGlzLmRyYWZ0TW9kZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBkb2N1bWVudERpdlByZXNlbnRhdGlvbk1vZGUgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ29Ub0FuY2hvciA9IHRoaXMuZ29Ub0FuY2hvci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGludmVydENvbG91cnMgPSB0aGlzLmludmVydENvbG91cnMuYmluZCh0aGlzKSxcbiAgICAgICAgICByZXZlcnRDb2xvdXJzID0gdGhpcy5yZXZlcnRDb2xvdXJzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0xlZnREaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dMYXN0RGl2aXNpb25EaXYgPSB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93Rmlyc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93UmlnaHREaXZpc2lvbkRpdiA9IHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2NhbGVEb2N1bWVudERpdixcbiAgICAgIGdldERvY3VtZW50RGl2V2lkdGgsXG4gICAgICBnZXREb2N1bWVudERpdkhlaWdodCxcbiAgICAgIGRvY3VtZW50RGl2RHJhZnRNb2RlLFxuICAgICAgZG9jdW1lbnREaXZQcmVzZW50YXRpb25Nb2RlLFxuICAgICAgZ29Ub0FuY2hvcixcbiAgICAgIGludmVydENvbG91cnMsXG4gICAgICByZXZlcnRDb2xvdXJzLFxuICAgICAgc2hvd0xlZnREaXZpc2lvbkRpdixcbiAgICAgIHNob3dMYXN0RGl2aXNpb25EaXYsXG4gICAgICBzaG93Rmlyc3REaXZpc2lvbkRpdixcbiAgICAgIHNob3dSaWdodERpdmlzaW9uRGl2XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcInJlc2l6ZUhhbmRsZXJcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZG9jdW1lbnRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRG9jdW1lbnREaXYpYFxuICBcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICAucHJlc2VudGF0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbiAgXG4gIC5pbnZlcnRlZC1jb2xvdXJzIHtcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiZGl2aXNpb25EaXZET01FbGVtZW50cyIsInJlbW92ZURPTUVsZW1lbnRzIiwiRElWSVNJT05fRElWU19TRUxFQ1RPUiIsImRpdmlzaW9uRGl2cyIsImVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIiwiRGl2aXNpb25EaXYiLCJyZW1vdmVET01FbGVtZW50IiwiRE9DVU1FTlRfRElWX1NFTEVDVE9SIiwiRG9jdW1lbnREaXYiLCJzY2FsZSIsImRvY3VtZW50U2NhbGUiLCJ2aWV3SW5uZXJXaWR0aCIsInByZXZpZXdQYW5lSW5uZXJIZWlnaHQiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2NhbGVkV2lkdGgiLCJzY2FsZWRIZWlnaHQiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInRyYW5zZm9ybSIsInRyYW5zZm9ybU9yaWdpbiIsIlRPUF9MRUZUX1RSQU5TRk9STV9PUklHSU4iLCJzdHlsZSIsIlRSQU5TRk9STSIsIlRSQU5TRk9STV9PUklHSU4iLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIk1BUkdJTl9SSUdIVCIsIk1BUkdJTl9CT1RUT00iLCJnb1RvQW5jaG9yIiwiYW5jaG9ySWQiLCJhbmNob3JJZEluZGV4QW5jaG9ySWQiLCJpc0FuY2hvcklkSW5kZXhBbmNob3JJZCIsImluZGV4QW5jaG9ySWQiLCJzaG93RGl2aXNpb25EaXZCeUluZGV4QW5jaG9ySWQiLCJzaG93RGl2aXNpb25EaXZCeUFuY2hvcklkIiwiZHJhZnRNb2RlIiwicmVtb3ZlQ2xhc3MiLCJpbnZlcnRDb2xvdXJzIiwiYWRkQ2xhc3MiLCJyZXZlcnRDb2xvdXJzIiwicHJlc2VudGF0aW9uTW9kZSIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJzaG93aW5nRGl2aXNpb25EaXYiLCJmaW5kU2hvd2luZ0RpdmlzaW9uRGl2IiwiZ2V0RGl2aXNpb25EaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwiZGl2c0xlbmd0aCIsImxlbmd0aCIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJwcmV2aW91c0RpdmlzaW9uRGl2IiwiaGlkZSIsIm5leHREaXZpc2lvbkRpdiIsInNob3ciLCJkaXZpc2lvbkRpdiIsImZpbmREaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJzY3JvbGxUb0FuY2hvciIsInBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyRnJvbUluZGV4QW5jaG9ySWQiLCJmaW5kIiwic2hvd2luZyIsImlzU2hvd2luZyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInBhcmVudENvbnRleHQiLCJzY2FsZURvY3VtZW50RGl2IiwiYmluZCIsImdldERvY3VtZW50RGl2V2lkdGgiLCJnZXREb2N1bWVudERpdkhlaWdodCIsImRvY3VtZW50RGl2RHJhZnRNb2RlIiwiZG9jdW1lbnREaXZQcmVzZW50YXRpb25Nb2RlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGlu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