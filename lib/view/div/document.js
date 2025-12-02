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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kb2N1bWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBEaXZpc2lvbkRpdiBmcm9tIFwiLi4vZGl2L2RpdmlzaW9uXCI7XG5cbmltcG9ydCB7IHJlbW92ZURPTUVsZW1lbnQsIHJlbW92ZURPTUVsZW1lbnRzLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgQU5DSE9SX0hSRUZfU0VMRUNUT1IsIERPQ1VNRU5UX0RJVl9TRUxFQ1RPUiwgRElWSVNJT05fRElWU19TRUxFQ1RPUiB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHNjcm9sbFRvQW5jaG9yLCBmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkLCBpc0FuY2hvcklkSW5kZXhBbmNob3JJZCwgcGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hbmNob3JcIjtcbmltcG9ydCB7IEhBU0gsIEhSRUYsIEVNUFRZX1NUUklORywgVFJBTlNGT1JNLCBNQVJHSU5fUklHSFQsIEJMQU5LX1RBUkdFVCwgTUFSR0lOX0JPVFRPTSwgVFJBTlNGT1JNX09SSUdJTiwgVE9QX0xFRlRfVFJBTlNGT1JNX09SSUdJTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgZGl2aXNpb25EaXZET01FbGVtZW50cyA9IHJlbW92ZURPTUVsZW1lbnRzKERJVklTSU9OX0RJVlNfU0VMRUNUT1IpLFxuICAgICAgZGl2aXNpb25EaXZzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGl2aXNpb25EaXZET01FbGVtZW50cywgRGl2aXNpb25EaXYpO1xuXG5yZW1vdmVET01FbGVtZW50KERPQ1VNRU5UX0RJVl9TRUxFQ1RPUik7XG5cbmNsYXNzIERvY3VtZW50RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoQU5DSE9SX0hSRUZfU0VMRUNUT1IpO1xuXG4gICAgaWYgKGxpbmsgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoSFJFRik7XG5cbiAgICBpZiAoaHJlZiA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGhyZWZTdGFydHNXaXRoSGFzaCA9IGhyZWYuc3RhcnRzV2l0aChIQVNIKSxcbiAgICAgICAgICBsaW5rRXh0ZXJuYWwgPSAhaHJlZlN0YXJ0c1dpdGhIYXNoO1xuXG4gICAgaWYgKGxpbmtFeHRlcm5hbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gQkxBTktfVEFSR0VUO1xuXG4gICAgICB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5jaG9ySWQgPSBocmVmLnN1YnN0cmluZygxKTsgLy8vXG5cbiAgICB0aGlzLmdvVG9BbmNob3IoYW5jaG9ySWQpO1xuICB9XG5cbiAgc2NhbGUoZG9jdW1lbnRTY2FsZSwgdmlld0lubmVyV2lkdGgsIHByZXZpZXdQYW5lSW5uZXJIZWlnaHQpIHtcbiAgICBjb25zdCBzY2FsZSA9IGRvY3VtZW50U2NhbGUsICAvLy9cbiAgICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHNjYWxlZFdpZHRoID0gd2lkdGggKiBzY2FsZSxcbiAgICAgICAgICBzY2FsZWRIZWlnaHQgPSBoZWlnaHQgKiBzY2FsZSxcbiAgICAgICAgICB0cmFuc2xhdGVYID0gKHNjYWxlZFdpZHRoIDwgdmlld0lubmVyV2lkdGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAodmlld0lubmVyV2lkdGggLSBzY2FsZWRXaWR0aCkgLyAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IChzY2FsZWRIZWlnaHQgPCBwcmV2aWV3UGFuZUlubmVySGVpZ2h0KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHByZXZpZXdQYW5lSW5uZXJIZWlnaHQgLSBzY2FsZWRIZWlnaHQpIC8gMiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfXB4LCAke3RyYW5zbGF0ZVl9cHgpIHNjYWxlKCR7c2NhbGV9KWAsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luID0gVE9QX0xFRlRfVFJBTlNGT1JNX09SSUdJTjtcblxuICAgIHRoaXMuc3R5bGUoVFJBTlNGT1JNLCB0cmFuc2Zvcm0pO1xuICAgIHRoaXMuc3R5bGUoVFJBTlNGT1JNX09SSUdJTiwgdHJhbnNmb3JtT3JpZ2luKTtcblxuICAgIGxldCBtYXJnaW5SaWdodCA9IHdpZHRoICogKHNjYWxlIC0gMSksXG4gICAgICAgIG1hcmdpbkJvdHRvbSA9IGhlaWdodCAqIChzY2FsZSAtIDEpO1xuXG4gICAgbWFyZ2luUmlnaHQgPSBgJHttYXJnaW5SaWdodH1weGA7XG4gICAgbWFyZ2luQm90dG9tID0gYCR7bWFyZ2luQm90dG9tfXB4YDtcblxuICAgIHRoaXMuc3R5bGUoTUFSR0lOX1JJR0hULCBtYXJnaW5SaWdodCk7XG4gICAgdGhpcy5zdHlsZShNQVJHSU5fQk9UVE9NLCBtYXJnaW5Cb3R0b20pO1xuICB9XG5cbiAgZ29Ub0FuY2hvcihhbmNob3JJZCkge1xuICAgIGNvbnN0IGFuY2hvcklkSW5kZXhBbmNob3JJZCA9IGlzQW5jaG9ySWRJbmRleEFuY2hvcklkKGFuY2hvcklkKTtcblxuICAgIGlmIChhbmNob3JJZEluZGV4QW5jaG9ySWQpIHtcbiAgICAgIGNvbnN0IGluZGV4QW5jaG9ySWQgPSBhbmNob3JJZDsgLy8vXG5cbiAgICAgIHRoaXMuc2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93RGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKTtcbiAgfVxuXG4gIHNob3dMZWZ0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3Qgc2hvd2luZ0RpdmlzaW9uRGl2ID0gdGhpcy5maW5kU2hvd2luZ0RpdmlzaW9uRGl2KCksXG4gICAgICAgICAgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggLSAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHNob3dMYXN0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IChzaG93aW5nRGl2aXNpb25EaXYgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgLTEgOlxuICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gZGl2c0xlbmd0aCAtIDEsXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGluZGV4OyAgLy8vXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaG93TmV4dERpdmlzaW9uRGl2KG5leHRJbmRleCwgcHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBzaG93Rmlyc3REaXZpc2lvbkRpdigpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpLFxuICAgICAgICAgIHNob3dpbmdEaXZpc2lvbkRpdiA9IHRoaXMuZmluZFNob3dpbmdEaXZpc2lvbkRpdigpLFxuICAgICAgICAgIGluZGV4ID0gKHNob3dpbmdEaXZpc2lvbkRpdiA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgZGl2aXNpb25EaXZzLmluZGV4T2Yoc2hvd2luZ0RpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSAwLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd1JpZ2h0RGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBpbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHNob3dpbmdEaXZpc2lvbkRpdiksXG4gICAgICAgICAgbmV4dEluZGV4ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHByZXZpb3VzSW5kZXggPSBpbmRleDsgIC8vL1xuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gZGl2c0xlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgc2hvd05leHREaXZpc2lvbkRpdihuZXh0SW5kZXgsIHByZXZpb3VzSW5kZXgpIHtcbiAgICBjb25zdCBkaXZpc2lvbkRpdnMgPSB0aGlzLmdldERpdmlzaW9uRGl2cygpO1xuXG4gICAgaWYgKHByZXZpb3VzSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBwcmV2aW91c0RpdmlzaW9uRGl2ID0gZGl2aXNpb25EaXZzW3ByZXZpb3VzSW5kZXhdO1xuXG4gICAgICBwcmV2aW91c0RpdmlzaW9uRGl2LmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdnNbbmV4dEluZGV4XTtcblxuICAgIG5leHREaXZpc2lvbkRpdi5zaG93KCk7XG4gIH1cblxuICBzaG93RGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKSB7XG4gICAgbGV0IGRpdmlzaW9uRGl2O1xuXG4gICAgZGl2aXNpb25EaXYgPSBmaW5kRGl2aXNpb25EaXZCeUFuY2hvcklkKGFuY2hvcklkKTsgIC8vL1xuXG4gICAgaWYgKGRpdmlzaW9uRGl2ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBuZXh0RGl2aXNpb25EaXYgPSBkaXZpc2lvbkRpdiwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzRGl2aXNpb25EaXYgPSBzaG93aW5nRGl2aXNpb25EaXYsICAvLy9cbiAgICAgICAgICBuZXh0SW5kZXggPSBkaXZpc2lvbkRpdnMuaW5kZXhPZihuZXh0RGl2aXNpb25EaXYpLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNJbmRleCA9IGRpdmlzaW9uRGl2cy5pbmRleE9mKHByZXZpb3VzRGl2aXNpb25EaXYpOyAgLy8vXG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcblxuICAgIHNjcm9sbFRvQW5jaG9yKGFuY2hvcklkKTtcbiAgfVxuXG4gIHNob3dEaXZpc2lvbkRpdkJ5SW5kZXhBbmNob3JJZChpbmRleEFuY2hvcklkKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBzaG93aW5nRGl2aXNpb25EaXYgPSB0aGlzLmZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSxcbiAgICAgICAgICBkaXZzTGVuZ3RoID0gZGl2aXNpb25EaXZzLmxlbmd0aCxcbiAgICAgICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckZyb21JbmRleEFuY2hvcklkKGluZGV4QW5jaG9ySWQpLFxuICAgICAgICAgIGluZGV4ID0gZGl2aXNpb25EaXZzLmluZGV4T2Yoc2hvd2luZ0RpdmlzaW9uRGl2KSxcbiAgICAgICAgICBuZXh0SW5kZXggPSBwYWdlTnVtYmVyIC0gMSxcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7ICAvLy9cblxuICAgIGlmIChuZXh0SW5kZXggPT09IGRpdnNMZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dOZXh0RGl2aXNpb25EaXYobmV4dEluZGV4LCBwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIGZpbmRTaG93aW5nRGl2aXNpb25EaXYoKSB7XG4gICAgY29uc3QgZGl2aXNpb25EaXZzID0gdGhpcy5nZXREaXZpc2lvbkRpdnMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdiA9IGRpdmlzaW9uRGl2cy5maW5kKChkaXZpc2lvbkRpdikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd2luZyA9IGRpdmlzaW9uRGl2LmlzU2hvd2luZygpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd2luZykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uRGl2O1xuICB9XG5cbiAgZ2V0RGl2aXNpb25EaXZzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBkaXZpc2lvbkRpdnMgPSBbXG4gICAgICAgICAgICAuLi5jaGlsZEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBkaXZpc2lvbkRpdnM7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuXG4gICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBkaXZpc2lvbkRpdnM7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNjYWxlRG9jdW1lbnREaXYgPSB0aGlzLnNjYWxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldERvY3VtZW50RGl2V2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldERvY3VtZW50RGl2SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2hvd0xlZnREaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dMYXN0RGl2aXNpb25EaXYgPSB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93Rmlyc3REaXZpc2lvbkRpdiA9IHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93UmlnaHREaXZpc2lvbkRpdiA9IHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2NhbGVEb2N1bWVudERpdixcbiAgICAgIGdldERvY3VtZW50RGl2V2lkdGgsXG4gICAgICBnZXREb2N1bWVudERpdkhlaWdodCxcbiAgICAgIHNob3dMZWZ0RGl2aXNpb25EaXYsXG4gICAgICBzaG93TGFzdERpdmlzaW9uRGl2LFxuICAgICAgc2hvd0ZpcnN0RGl2aXNpb25EaXYsXG4gICAgICBzaG93UmlnaHREaXZpc2lvbkRpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImRvY3VtZW50XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERvY3VtZW50RGl2KWBcbiAgXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgLnByZXNlbnRhdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJkaXZpc2lvbkRpdkRPTUVsZW1lbnRzIiwicmVtb3ZlRE9NRWxlbWVudHMiLCJESVZJU0lPTl9ESVZTX1NFTEVDVE9SIiwiZGl2aXNpb25EaXZzIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJEaXZpc2lvbkRpdiIsInJlbW92ZURPTUVsZW1lbnQiLCJET0NVTUVOVF9ESVZfU0VMRUNUT1IiLCJEb2N1bWVudERpdiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRhcmdldCIsImxpbmsiLCJjbG9zZXN0IiwiQU5DSE9SX0hSRUZfU0VMRUNUT1IiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiSFJFRiIsIkVNUFRZX1NUUklORyIsInByZXZlbnREZWZhdWx0IiwiaHJlZlN0YXJ0c1dpdGhIYXNoIiwic3RhcnRzV2l0aCIsIkhBU0giLCJsaW5rRXh0ZXJuYWwiLCJCTEFOS19UQVJHRVQiLCJ3aW5kb3ciLCJvcGVuIiwiYW5jaG9ySWQiLCJzdWJzdHJpbmciLCJnb1RvQW5jaG9yIiwic2NhbGUiLCJkb2N1bWVudFNjYWxlIiwidmlld0lubmVyV2lkdGgiLCJwcmV2aWV3UGFuZUlubmVySGVpZ2h0Iiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInNjYWxlZFdpZHRoIiwic2NhbGVkSGVpZ2h0IiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJUT1BfTEVGVF9UUkFOU0ZPUk1fT1JJR0lOIiwic3R5bGUiLCJUUkFOU0ZPUk0iLCJUUkFOU0ZPUk1fT1JJR0lOIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJNQVJHSU5fUklHSFQiLCJNQVJHSU5fQk9UVE9NIiwiYW5jaG9ySWRJbmRleEFuY2hvcklkIiwiaXNBbmNob3JJZEluZGV4QW5jaG9ySWQiLCJpbmRleEFuY2hvcklkIiwic2hvd0RpdmlzaW9uRGl2QnlJbmRleEFuY2hvcklkIiwic2hvd0RpdmlzaW9uRGl2QnlBbmNob3JJZCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJzaG93aW5nRGl2aXNpb25EaXYiLCJmaW5kU2hvd2luZ0RpdmlzaW9uRGl2IiwiZ2V0RGl2aXNpb25EaXZzIiwiaW5kZXgiLCJpbmRleE9mIiwibmV4dEluZGV4IiwicHJldmlvdXNJbmRleCIsInNob3dOZXh0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwiZGl2c0xlbmd0aCIsImxlbmd0aCIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJwcmV2aW91c0RpdmlzaW9uRGl2IiwiaGlkZSIsIm5leHREaXZpc2lvbkRpdiIsInNob3ciLCJkaXZpc2lvbkRpdiIsImZpbmREaXZpc2lvbkRpdkJ5QW5jaG9ySWQiLCJzY3JvbGxUb0FuY2hvciIsInBhZ2VOdW1iZXIiLCJwYWdlTnVtYmVyRnJvbUluZGV4QW5jaG9ySWQiLCJmaW5kIiwic2hvd2luZyIsImlzU2hvd2luZyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZGlkTW91bnQiLCJvbkNsaWNrIiwid2lsbFVubW91bnQiLCJvZmZDbGljayIsInBhcmVudENvbnRleHQiLCJzY2FsZURvY3VtZW50RGl2IiwiYmluZCIsImdldERvY3VtZW50RGl2V2lkdGgiLCJnZXREb2N1bWVudERpdkhlaWdodCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxUkE7OztlQUFBOzs7b0VBblJzQjtvQkFFRTsrREFFQTt1QkFFcUQ7eUJBQ087c0JBQzRCO3lCQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUksSUFBTUEseUJBQXlCQyxJQUFBQSwwQkFBaUIsRUFBQ0MsaUNBQXNCLEdBQ2pFQyxlQUFlQyxJQUFBQSxnQ0FBdUIsRUFBQ0osd0JBQXdCSyxpQkFBVztBQUVoRkMsSUFBQUEseUJBQWdCLEVBQUNDLGdDQUFxQjtBQUV0QyxJQUFBLEFBQU1DLDRCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLHlCQUNKQyx3QkFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckIsSUFBTSxBQUFFQyxTQUFXRixNQUFYRSxRQUNGQyxPQUFPRCxPQUFPRSxPQUFPLENBQUNDLCtCQUFvQjtZQUVoRCxJQUFJRixTQUFTLE1BQU07Z0JBQ2pCO1lBQ0Y7WUFFQSxJQUFNRyxPQUFPSCxLQUFLSSxZQUFZLENBQUNDLGVBQUk7WUFFbkMsSUFBSUYsU0FBU0csdUJBQVksRUFBRTtnQkFDekI7WUFDRjtZQUVBVCxNQUFNVSxjQUFjO1lBRXBCLElBQU1DLHFCQUFxQkwsS0FBS00sVUFBVSxDQUFDQyxlQUFJLEdBQ3pDQyxlQUFlLENBQUNIO1lBRXRCLElBQUlHLGNBQWM7Z0JBQ2hCLElBQU1aLFVBQVNhLHVCQUFZO2dCQUUzQkMsT0FBT0MsSUFBSSxDQUFDWCxNQUFNSjtnQkFFbEI7WUFDRjtZQUVBLElBQU1nQixXQUFXWixLQUFL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