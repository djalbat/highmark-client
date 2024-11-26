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
var _fullScreen = /*#__PURE__*/ _interop_require_default(require("./checkbox/fullScreen"));
var _invertColours = /*#__PURE__*/ _interop_require_default(require("./checkbox/invertColours"));
var _nativeGestures = /*#__PURE__*/ _interop_require_default(require("./checkbox/nativeGestures"));
var _styles = require("../../styles");
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
        "\n\n  gap: ",
        ";\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: flex-start;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CheckboxesDiv = /*#__PURE__*/ function(Element) {
    _inherits(CheckboxesDiv, Element);
    function CheckboxesDiv() {
        _class_call_check(this, CheckboxesDiv);
        return _call_super(this, CheckboxesDiv, arguments);
    }
    _create_class(CheckboxesDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_invertColours.default, null),
                    /*#__PURE__*/ React.createElement(_fullScreen.default, null),
                    /*#__PURE__*/ React.createElement(_nativeGestures.default, null)
                ];
            }
        }
    ]);
    return CheckboxesDiv;
}(_wrap_native_super(_easy.Element));
_define_property(CheckboxesDiv, "tagName", "div");
_define_property(CheckboxesDiv, "defaultProperties", {
    className: "checkboxes"
});
var _default = (0, _easywithstyle.default)(CheckboxesDiv)(_templateObject(), _styles.checkboxesDivGap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEZ1bGxTY3JlZW5DaGVja2JveERpdiBmcm9tIFwiLi9jaGVja2JveC9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2IGZyb20gXCIuL2NoZWNrYm94L2ludmVydENvbG91cnNcIjtcbmltcG9ydCBOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IGZyb20gXCIuL2NoZWNrYm94L25hdGl2ZUdlc3R1cmVzXCI7XG5cbmltcG9ydCB7IGNoZWNrYm94ZXNEaXZHYXAgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIENoZWNrYm94ZXNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEludmVydENvbG91cnNDaGVja2JveERpdi8+LFxuICAgICAgPEZ1bGxTY3JlZW5DaGVja2JveERpdi8+LFxuICAgICAgPE5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjaGVja2JveGVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENoZWNrYm94ZXNEaXYpYFxuXG4gIGdhcDogJHtjaGVja2JveGVzRGl2R2FwfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbmA7XG4iXSwibmFtZXMiOlsiQ2hlY2tib3hlc0RpdiIsImNoaWxkRWxlbWVudHMiLCJJbnZlcnRDb2xvdXJzQ2hlY2tib3hEaXYiLCJGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNoZWNrYm94ZXNEaXZHYXAiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7OztvRUE1QnNCO29CQUVFO2lFQUVVO29FQUNHO3FFQUNDO3NCQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0Msc0JBQXdCO2tDQUN6QixvQkFBQ0MsbUJBQXFCO2tDQUN0QixvQkFBQ0MsdUJBQXlCO2lCQUUzQjtZQUNIOzs7V0FUSUo7cUJBQXNCSyxhQUFPO0FBV2pDLGlCQVhJTCxlQVdHTSxXQUFVO0FBRWpCLGlCQWJJTixlQWFHTyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNULGtDQUVoQlUsd0JBQWdCIn0=