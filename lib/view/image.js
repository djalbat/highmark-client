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
var _constants = require("../constants");
var _element = require("../utilities/element");
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
        "\n\n  .cloned {\n    width: 75%;\n    height: auto;\n    max-height: 75%;\n    object-fit: contain;\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Image = /*#__PURE__*/ function(Element) {
    _inherits(Image, Element);
    function Image() {
        _class_call_check(this, Image);
        return _call_super(this, Image, arguments);
    }
    _create_class(Image, [
        {
            key: "areBoundsOverlapping",
            value: function areBoundsOverlapping(top, left) {
                var bounds = this.getBounds(), boundsOverlapping = bounds.areOverlappingByTopAndLeft(top, left);
                return boundsOverlapping;
            }
        },
        {
            key: "getAlternateText",
            value: function getAlternateText() {
                var altAttribute = this.getAttribute(_constants.ALT), alternateText = altAttribute; ///
                return alternateText;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var domElement = this.getDOMElement();
                domElement = domElement.cloneNode(); ///
                var image = (0, _element.elementFromDOMElement)(domElement, Image);
                image.addClass("cloned");
                return image;
            }
        }
    ]);
    return Image;
}(_wrap_native_super(_easy.Element));
_define_property(Image, "tagName", "img");
var _default = (0, _easywithstyle.default)(Image)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgQUxUIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21ET01FbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGFyZUJvdW5kc092ZXJsYXBwaW5nKHRvcCwgbGVmdCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCksXG4gICAgICAgICAgYm91bmRzT3ZlcmxhcHBpbmcgPSBib3VuZHMuYXJlT3ZlcmxhcHBpbmdCeVRvcEFuZExlZnQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBib3VuZHNPdmVybGFwcGluZztcbiAgfVxuXG4gIGdldEFsdGVybmF0ZVRleHQoKSB7XG4gICAgY29uc3QgYWx0QXR0cmlidXRlID0gdGhpcy5nZXRBdHRyaWJ1dGUoQUxUKSxcbiAgICAgICAgICBhbHRlcm5hdGVUZXh0ID0gYWx0QXR0cmlidXRlOyAvLy9cblxuICAgIHJldHVybiBhbHRlcm5hdGVUZXh0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50LmNsb25lTm9kZSgpOyAgLy8vXG5cbiAgICBjb25zdCBpbWFnZSA9IGVsZW1lbnRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBJbWFnZSk7XG5cbiAgICBpbWFnZS5hZGRDbGFzcyhcImNsb25lZFwiKTtcblxuICAgIHJldHVybiBpbWFnZTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbWdcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEltYWdlKWBcblxuICAuY2xvbmVkIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA3NSU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuICBcbmA7Il0sIm5hbWVzIjpbIkltYWdlIiwiYXJlQm91bmRzT3ZlcmxhcHBpbmciLCJ0b3AiLCJsZWZ0IiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwiYm91bmRzT3ZlcmxhcHBpbmciLCJhcmVPdmVybGFwcGluZ0J5VG9wQW5kTGVmdCIsImdldEFsdGVybmF0ZVRleHQiLCJhbHRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJBTFQiLCJhbHRlcm5hdGVUZXh0IiwiY2xvbmUiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImNsb25lTm9kZSIsImltYWdlIiwiZWxlbWVudEZyb21ET01FbGVtZW50IiwiYWRkQ2xhc3MiLCJFbGVtZW50IiwidGFnTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUNBOzs7ZUFBQTs7O29FQXJDc0I7b0JBRUU7eUJBRUo7dUJBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsc0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxHQUFHLEVBQUVDLElBQUk7Z0JBQzVCLElBQU1DLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxvQkFBb0JGLE9BQU9HLDBCQUEwQixDQUFDTCxLQUFLQztnQkFFakUsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxjQUFHLEdBQ3BDQyxnQkFBZ0JILGNBQWMsR0FBRztnQkFFdkMsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFbkNELGFBQWFBLFdBQVdFLFNBQVMsSUFBSyxHQUFHO2dCQUV6QyxJQUFNQyxRQUFRQyxJQUFBQSw4QkFBcUIsRUFBQ0osWUFwQmxDZDtnQkFzQkZpQixNQUFNRSxRQUFRLENBQUM7Z0JBRWYsT0FBT0Y7WUFDVDs7O1dBekJJakI7cUJBQWNvQixhQUFPO0FBMkJ6QixpQkEzQklwQixPQTJCR3FCLFdBQVU7SUFHbkIsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3RCIn0=