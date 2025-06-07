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
var _image = /*#__PURE__*/ _interop_require_default(require("../image"));
var _selectors = require("../../selectors");
var _element = require("../../utilities/element");
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
        "\n\n  width: 100%;\n  transform-origin: top left;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var mountElement = _easy.elementUtilities.mountElement, unmountElement = _easy.elementUtilities.unmountElement;
var DivisionDiv = /*#__PURE__*/ function(Element) {
    _inherits(DivisionDiv, Element);
    function DivisionDiv() {
        _class_call_check(this, DivisionDiv);
        return _call_super(this, DivisionDiv, arguments);
    }
    _create_class(DivisionDiv, [
        {
            key: "getBackgroundColour",
            value: function getBackgroundColour() {
                var backgroundColour = this.css(_constants.BACKGROUND_COLOUR) || null;
                return backgroundColour;
            }
        },
        {
            key: "zoom",
            value: function zoom(zoom) {
                var zoomRatio = 100 / zoom, width = "".concat(zoomRatio, "%"), minHeight = "".concat(zoomRatio, "%"), transform = "scale(".concat(zoom, ")");
                var css = {
                    width: width,
                    minHeight: minHeight,
                    transform: transform
                };
                this.css(css);
            }
        },
        {
            key: "show",
            value: function show() {
                var display = this.getDisplay();
                this.display(display);
            }
        },
        {
            key: "mountImages",
            value: function mountImages() {
                var images = this.getImages();
                images.forEach(function(image) {
                    var element = image; ///
                    mountElement(element);
                });
            }
        },
        {
            key: "unmountImages",
            value: function unmountImages() {
                var images = this.getImages();
                images.forEach(function(image) {
                    var element = image; ///
                    unmountElement(element);
                });
            }
        },
        {
            key: "findImageByTopAndLeft",
            value: function findImageByTopAndLeft(top, left) {
                var images = this.getImages(), image = images.find(function(image) {
                    var boundsOverlapping = image.areBoundsOverlapping(top, left);
                    if (boundsOverlapping) {
                        return true;
                    }
                }) || null;
                return image;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var name = _constants.DISPLAY, display = this.css(name), domElement = this.getDOMElement(), imageDOMElements = _to_consumable_array(domElement.querySelectorAll(_selectors.IMAGE_SELECTOR)), images = (0, _element.elementsFromDOMElements)(imageDOMElements, _image.default);
                this.setDisplay(display);
                this.setImages(images);
                this.hide();
                this.mountImages();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.unmountImages();
            }
        },
        {
            key: "getImages",
            value: function getImages() {
                var images = this.getState().images;
                return images;
            }
        },
        {
            key: "getDisplay",
            value: function getDisplay() {
                var display = this.getState().display;
                return display;
            }
        },
        {
            key: "setImages",
            value: function setImages(images) {
                this.updateState({
                    images: images
                });
            }
        },
        {
            key: "setDisplay",
            value: function setDisplay(display) {
                this.updateState({
                    display: display
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var images = null, display = null;
                this.setState({
                    images: images,
                    display: display
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return DivisionDiv;
}(_wrap_native_super(_easy.Element));
_define_property(DivisionDiv, "tagName", "div");
var _default = (0, _easywithstyle.default)(DivisionDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCwgZWxlbWVudFV0aWxpdGllcyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vaW1hZ2VcIjtcblxuaW1wb3J0IHsgSU1BR0VfU0VMRUNUT1IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21ET01FbGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgRElTUExBWSwgQkFDS0dST1VORF9DT0xPVVIgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9ID0gZWxlbWVudFV0aWxpdGllcztcblxuY2xhc3MgRGl2aXNpb25EaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0QmFja2dyb3VuZENvbG91cigpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gdGhpcy5jc3MoQkFDS0dST1VORF9DT0xPVVIpIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYmFja2dyb3VuZENvbG91cjtcbiAgfVxuXG4gIHpvb20oem9vbSkge1xuICAgIGNvbnN0IHpvb21SYXRpbyA9IDEwMCAvIHpvb20sXG4gICAgICAgICAgd2lkdGggPSBgJHt6b29tUmF0aW99JWAsXG4gICAgICAgICAgbWluSGVpZ2h0ID0gYCR7em9vbVJhdGlvfSVgLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGBzY2FsZSgke3pvb219KWA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB3aWR0aCxcbiAgICAgIG1pbkhlaWdodCxcbiAgICAgIHRyYW5zZm9ybVxuICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5nZXREaXNwbGF5KCk7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBtb3VudEltYWdlcygpIHtcbiAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmdldEltYWdlcygpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaW1hZ2U7ICAvLy9cblxuICAgICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgdW5tb3VudEltYWdlcygpIHtcbiAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmdldEltYWdlcygpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaW1hZ2U7ICAvLy9cblxuICAgICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kSW1hZ2VCeVRvcEFuZExlZnQodG9wLCBsZWZ0KSB7XG4gICAgY29uc3QgaW1hZ2VzID0gdGhpcy5nZXRJbWFnZXMoKSxcbiAgICAgICAgICBpbWFnZSA9IGltYWdlcy5maW5kKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYm91bmRzT3ZlcmxhcHBpbmcgPSBpbWFnZS5hcmVCb3VuZHNPdmVybGFwcGluZyh0b3AsIGxlZnQpO1xuXG4gICAgICAgICAgICBpZiAoYm91bmRzT3ZlcmxhcHBpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBpbWFnZTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IG5hbWUgPSBESVNQTEFZLCAvLy9cbiAgICAgICAgICBkaXNwbGF5ID0gdGhpcy5jc3MobmFtZSksXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGltYWdlRE9NRWxlbWVudHMgPSBbIC4uLmRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChJTUFHRV9TRUxFQ1RPUikgXSxcbiAgICAgICAgICBpbWFnZXMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhpbWFnZURPTUVsZW1lbnRzLCBJbWFnZSk7XG5cbiAgICB0aGlzLnNldERpc3BsYXkoZGlzcGxheSk7XG5cbiAgICB0aGlzLnNldEltYWdlcyhpbWFnZXMpO1xuXG4gICAgdGhpcy5oaWRlKCk7XG5cbiAgICB0aGlzLm1vdW50SW1hZ2VzKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVubW91bnRJbWFnZXMoKTtcbiAgfVxuXG4gIGdldEltYWdlcygpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGltYWdlcztcbiAgfVxuXG4gIGdldERpc3BsYXkoKSB7XG4gICAgY29uc3QgeyBkaXNwbGF5IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGlzcGxheTtcbiAgfVxuXG4gIHNldEltYWdlcyhpbWFnZXMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGltYWdlc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RGlzcGxheShkaXNwbGF5KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXNwbGF5XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgaW1hZ2VzID0gbnVsbCxcbiAgICAgICAgICBkaXNwbGF5ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1hZ2VzLFxuICAgICAgZGlzcGxheVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRGl2aXNpb25EaXYpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIm1vdW50RWxlbWVudCIsImVsZW1lbnRVdGlsaXRpZXMiLCJ1bm1vdW50RWxlbWVudCIsIkRpdmlzaW9uRGl2IiwiZ2V0QmFja2dyb3VuZENvbG91ciIsImJhY2tncm91bmRDb2xvdXIiLCJjc3MiLCJCQUNLR1JPVU5EX0NPTE9VUiIsInpvb20iLCJ6b29tUmF0aW8iLCJ3aWR0aCIsIm1pbkhlaWdodCIsInRyYW5zZm9ybSIsInNob3ciLCJkaXNwbGF5IiwiZ2V0RGlzcGxheSIsIm1vdW50SW1hZ2VzIiwiaW1hZ2VzIiwiZ2V0SW1hZ2VzIiwiZm9yRWFjaCIsImltYWdlIiwiZWxlbWVudCIsInVubW91bnRJbWFnZXMiLCJmaW5kSW1hZ2VCeVRvcEFuZExlZnQiLCJ0b3AiLCJsZWZ0IiwiZmluZCIsImJvdW5kc092ZXJsYXBwaW5nIiwiYXJlQm91bmRzT3ZlcmxhcHBpbmciLCJkaWRNb3VudCIsIm5hbWUiLCJESVNQTEFZIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJpbWFnZURPTUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIklNQUdFX1NFTEVDVE9SIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJJbWFnZSIsInNldERpc3BsYXkiLCJzZXRJbWFnZXMiLCJoaWRlIiwid2lsbFVubW91bnQiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdJQTs7O2VBQUE7OztvRUF0SXNCO29CQUVvQjs0REFFeEI7eUJBRWE7dUJBQ1M7eUJBQ0c7Ozs7Ozs7Ozs7Ozs7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