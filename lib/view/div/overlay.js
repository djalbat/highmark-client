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
var _container = /*#__PURE__*/ _interop_require_default(require("../div/container"));
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
        "\n\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: scroll;\n  align-items: center;\n  font-family: ",
        ";\n  justify-content: center;\n  background-color: ",
        ";\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var OverlayDiv = /*#__PURE__*/ function(Element) {
    _inherits(OverlayDiv, Element);
    function OverlayDiv() {
        _class_call_check(this, OverlayDiv);
        return _call_super(this, OverlayDiv, arguments);
    }
    _create_class(OverlayDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_container.default, null);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showOverlayDiv = this.show.bind(this), hideOverlayDiv = this.hide.bind(this); ///
                return {
                    showOverlayDiv: showOverlayDiv,
                    hideOverlayDiv: hideOverlayDiv
                };
            }
        }
    ]);
    return OverlayDiv;
}(_wrap_native_super(_easy.Element));
_define_property(OverlayDiv, "tagName", "div");
_define_property(OverlayDiv, "defaultProperties", {
    className: "overlay"
});
var _default = (0, _easywithstyle.default)(OverlayDiv)(_templateObject(), _styles.overlayDivFontFamily, _styles.overlayDivBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IENvbnRhaW5lckRpdiBmcm9tIFwiLi4vZGl2L2NvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBvdmVybGF5RGl2Rm9udEZhbWlseSwgb3ZlcmxheURpdkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE92ZXJsYXlEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29udGFpbmVyRGl2Lz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dPdmVybGF5RGl2ID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlT3ZlcmxheURpdiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dPdmVybGF5RGl2LFxuICAgICAgaGlkZU92ZXJsYXlEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm92ZXJsYXlcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoT3ZlcmxheURpdilgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICR7b3ZlcmxheURpdkZvbnRGYW1pbHl9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtvdmVybGF5RGl2QmFja2dyb3VuZENvbG91cn07XG5cbmA7XG4iXSwibmFtZXMiOlsiT3ZlcmxheURpdiIsImNoaWxkRWxlbWVudHMiLCJDb250YWluZXJEaXYiLCJwYXJlbnRDb250ZXh0Iiwic2hvd092ZXJsYXlEaXYiLCJzaG93IiwiYmluZCIsImhpZGVPdmVybGF5RGl2IiwiaGlkZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJvdmVybGF5RGl2Rm9udEZhbWlseSIsIm92ZXJsYXlEaXZCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7b0VBbENzQjtvQkFFRTtnRUFFQztzQkFFd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRSxJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyxrQkFBWTtZQUdqQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ3BDQyxpQkFBaUIsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFakQsT0FBUTtvQkFDTkYsZ0JBQUFBO29CQUNBRyxnQkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBakJJUDtxQkFBbUJTLGFBQU87QUFtQjlCLGlCQW5CSVQsWUFtQkdVLFdBQVU7QUFFakIsaUJBckJJVixZQXFCR1cscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDYiwrQkFPUmMsNEJBQW9CLEVBRWZDLGtDQUEwQiJ9