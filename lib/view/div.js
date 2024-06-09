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
var _image = /*#__PURE__*/ _interop_require_default(require("./image"));
var _selectors = require("../selectors");
var _element = require("../utilities/element");
var _constants = require("../constants");
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
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
var Div = /*#__PURE__*/ function(Element) {
    _inherits(Div, Element);
    var _super = _create_super(Div);
    function Div() {
        _class_call_check(this, Div);
        return _super.apply(this, arguments);
    }
    _create_class(Div, [
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
                var images = this.getImages(), image = images.find(function(image) {}) || null;
                return null;
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
            key: "setImages",
            value: function setImages(images) {
                this.updateState({
                    images: images
                });
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
    return Div;
}(_wrap_native_super(_easy.Element));
_define_property(Div, "tagName", "div");
var _default = (0, _easywithstyle.default)(Div)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2Rpdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCwgZWxlbWVudFV0aWxpdGllcyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwiLi9pbWFnZVwiO1xuXG5pbXBvcnQgeyBJTUFHRV9TRUxFQ1RPUiB9IGZyb20gXCIuLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBESVNQTEFZLCBCQUNLR1JPVU5EX0NPTE9VUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBtb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50IH0gPSBlbGVtZW50VXRpbGl0aWVzO1xuXG5jbGFzcyBEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0QmFja2dyb3VuZENvbG91cigpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3VyID0gdGhpcy5jc3MoQkFDS0dST1VORF9DT0xPVVIpIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYmFja2dyb3VuZENvbG91cjtcbiAgfVxuXG4gIHpvb20oem9vbSkge1xuICAgIGNvbnN0IHpvb21SYXRpbyA9IDEwMCAvIHpvb20sXG4gICAgICAgICAgd2lkdGggPSBgJHt6b29tUmF0aW99JWAsXG4gICAgICAgICAgbWluSGVpZ2h0ID0gYCR7em9vbVJhdGlvfSVgLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGBzY2FsZSgke3pvb219KWA7XG5cbiAgICBjb25zdCBjc3MgPSB7XG4gICAgICB3aWR0aCxcbiAgICAgIG1pbkhlaWdodCxcbiAgICAgIHRyYW5zZm9ybVxuICAgIH07XG5cbiAgICB0aGlzLmNzcyhjc3MpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5nZXREaXNwbGF5KCk7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBtb3VudEltYWdlcygpIHtcbiAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmdldEltYWdlcygpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaW1hZ2U7ICAvLy9cblxuICAgICAgbW91bnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgdW5tb3VudEltYWdlcygpIHtcbiAgICBjb25zdCBpbWFnZXMgPSB0aGlzLmdldEltYWdlcygpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaW1hZ2U7ICAvLy9cblxuICAgICAgdW5tb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kSW1hZ2VCeVRvcEFuZExlZnQodG9wLCBsZWZ0KSB7XG4gICAgY29uc3QgaW1hZ2VzID0gdGhpcy5nZXRJbWFnZXMoKSxcbiAgICAgICAgICBpbWFnZSA9IGltYWdlcy5maW5kKChpbWFnZSkgPT4ge1xuXG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgbmFtZSA9IERJU1BMQVksIC8vL1xuICAgICAgICAgIGRpc3BsYXkgPSB0aGlzLmNzcyhuYW1lKSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgaW1hZ2VET01FbGVtZW50cyA9IFsgLi4uZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKElNQUdFX1NFTEVDVE9SKSBdLFxuICAgICAgICAgIGltYWdlcyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGltYWdlRE9NRWxlbWVudHMsIEltYWdlKTtcblxuICAgIHRoaXMuc2V0RGlzcGxheShkaXNwbGF5KTtcblxuICAgIHRoaXMuc2V0SW1hZ2VzKGltYWdlcyk7XG5cbiAgICB0aGlzLmhpZGUoKTtcblxuICAgIHRoaXMubW91bnRJbWFnZXMoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5tb3VudEltYWdlcygpO1xuICB9XG5cbiAgZ2V0SW1hZ2VzKCkge1xuICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gaW1hZ2VzO1xuICB9XG5cbiAgc2V0SW1hZ2VzKGltYWdlcykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaW1hZ2VzXG4gICAgfSk7XG4gIH1cblxuICBnZXREaXNwbGF5KCkge1xuICAgIGNvbnN0IHsgZGlzcGxheSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpc3BsYXk7XG4gIH1cblxuICBzZXREaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpc3BsYXlcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBpbWFnZXMgPSBudWxsLFxuICAgICAgICAgIGRpc3BsYXkgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbWFnZXMsXG4gICAgICBkaXNwbGF5XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShEaXYpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIm1vdW50RWxlbWVudCIsImVsZW1lbnRVdGlsaXRpZXMiLCJ1bm1vdW50RWxlbWVudCIsIkRpdiIsImdldEJhY2tncm91bmRDb2xvdXIiLCJiYWNrZ3JvdW5kQ29sb3VyIiwiY3NzIiwiQkFDS0dST1VORF9DT0xPVVIiLCJ6b29tIiwiem9vbVJhdGlvIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJ0cmFuc2Zvcm0iLCJzaG93IiwiZGlzcGxheSIsImdldERpc3BsYXkiLCJtb3VudEltYWdlcyIsImltYWdlcyIsImdldEltYWdlcyIsImZvckVhY2giLCJpbWFnZSIsImVsZW1lbnQiLCJ1bm1vdW50SW1hZ2VzIiwiZmluZEltYWdlQnlUb3BBbmRMZWZ0IiwidG9wIiwibGVmdCIsImZpbmQiLCJkaWRNb3VudCIsIm5hbWUiLCJESVNQTEFZIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJpbWFnZURPTUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIklNQUdFX1NFTEVDVE9SIiwiZWxlbWVudHNGcm9tRE9NRWxlbWVudHMiLCJJbWFnZSIsInNldERpc3BsYXkiLCJzZXRJbWFnZXMiLCJoaWRlIiwid2lsbFVubW91bnQiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsaXNlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJ3aXRoU3R5bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0lBOzs7ZUFBQTs7O29FQWxJc0I7b0JBRW9COzREQUV4Qjt5QkFFYTt1QkFDUzt5QkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBUUEsZUFBaUNDLHNCQUFnQixDQUFqREQsY0FBY0UsaUJBQW1CRCxzQkFBZ0IsQ0FBbkNDO0FBRXRCLElBQUEsQUFBTUMsb0JBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyw0QkFBaUIsS0FBSztnQkFFeEQsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQSxJQUFJO2dCQUNQLElBQU1DLFlBQVksTUFBTUQsTUFDbEJFLFFBQVEsQUFBQyxHQUFZLE9BQVZELFdBQVUsTUFDckJFLFlBQVksQUFBQyxHQUFZLE9BQVZGLFdBQVUsTUFDekJHLFlBQVksQUFBQyxTQUFhLE9BQUxKLE1BQUs7Z0JBRWhDLElBQU1GLE1BQU07b0JBQ1ZJLE9BQUFBO29CQUNBQyxXQUFBQTtvQkFDQUMsV0FBQUE7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDTixHQUFHLENBQUNBO1lBQ1g7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVSxJQUFJLENBQUNDLFVBQVU7Z0JBRS9CLElBQUksQ0FBQ0QsT0FBTyxDQUFDQTtZQUNmOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDQyxTQUFTO2dCQUU3QkQsT0FBT0UsT0FBTyxDQUFDLFNBQUNDO29CQUNkLElBQU1DLFVBQVVELE9BQVEsR0FBRztvQkFFM0JwQixhQUFhcUI7Z0JBQ2Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxTQUFTLElBQUksQ0FBQ0MsU0FBUztnQkFFN0JELE9BQU9FLE9BQU8sQ0FBQyxTQUFDQztvQkFDZCxJQUFNQyxVQUFVRCxPQUFRLEdBQUc7b0JBRTNCbEIsZUFBZW1CO2dCQUNqQjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsR0FBRyxFQUFFQyxJQUFJO2dCQUM3QixJQUFNUixTQUFTLElBQUksQ0FBQ0MsU0FBUyxJQUN2QkUsUUFBUUgsT0FBT1MsSUFBSSxDQUFDLFNBQUNOLFFBRXJCLE1BQU07Z0JBRVosT0FBTztZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU9DLGtCQUFPLEVBQ2RmLFVBQVUsSUFBSSxDQUFDUixHQUFHLENBQUNzQixPQUNuQkUsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0JDLG1CQUFxQixxQkFBR0YsV0FBV0csZ0JBQWdCLENBQUNDLHlCQUFjLElBQ2xFakIsU0FBU2tCLElBQUFBLGdDQUF1QixFQUFDSCxrQkFBa0JJLGNBQUs7Z0JBRTlELElBQUksQ0FBQ0MsVUFBVSxDQUFDdkI7Z0JBRWhCLElBQUksQ0FBQ3dCLFNBQVMsQ0FBQ3JCO2dCQUVmLElBQUksQ0FBQ3NCLElBQUk7Z0JBRVQsSUFBSSxDQUFDdkIsV0FBVztZQUNsQjs7O1lBRUF3QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDbEIsYUFBYTtZQUNwQjs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVELFNBQVcsSUFBSSxDQUFDd0IsUUFBUSxHQUF4QnhCO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVyQixNQUFNO2dCQUNkLElBQUksQ0FBQ3lCLFdBQVcsQ0FBQztvQkFDZnpCLFFBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFRCxVQUFZLElBQUksQ0FBQzJCLFFBQVEsR0FBekIzQjtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXdkIsT0FBTztnQkFDaEIsSUFBSSxDQUFDNEIsV0FBVyxDQUFDO29CQUNmNUIsU0FBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUE2QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTTFCLFNBQVMsTUFDVEgsVUFBVTtnQkFFaEIsSUFBSSxDQUFDOEIsUUFBUSxDQUFDO29CQUNaM0IsUUFBQUE7b0JBQ0FILFNBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBK0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0YsZUFBZTtZQUN0Qjs7O1dBakhJeEM7cUJBQVkyQyxhQUFPO0FBbUh2QixpQkFuSEkzQyxLQW1IRzRDLFdBQVU7SUFHbkIsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzdDIn0=