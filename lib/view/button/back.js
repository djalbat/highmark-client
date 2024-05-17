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
var _button = /*#__PURE__*/ _interop_require_default(require("../button"));
var _breakpoints = require("../../breakpoints");
var _styles = require("../../styles");
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
        "\n\n  color: ",
        ";\n  float: right;\n  background: transparent;\n  font-family: ",
        ";\n  \n  font-size: ",
        ";\n  \n  @media (min-width: ",
        ") {\n\n    font-size: ",
        ";\n    \n  }\n\n  :hover {\n    filter: grayscale(50%);\n  }\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var BackButton = /*#__PURE__*/ function(Button) {
    _inherits(BackButton, Button);
    var _super = _create_super(BackButton);
    function BackButton() {
        _class_call_check(this, BackButton);
        return _super.apply(this, arguments);
    }
    _create_class(BackButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "...back";
            }
        }
    ]);
    return BackButton;
}(_button.default);
_define_property(BackButton, "defaultProperties", {
    className: "back"
});
var _default = (0, _easywithstyle.default)(BackButton)(_templateObject(), _styles.backButtonColour, _styles.instructionsFontFamily, _styles.instructionsMobileFontSize, _breakpoints.desktop, _styles.instructionsDesktopFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9iYWNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcblxuaW1wb3J0IHsgZGVza3RvcCB9IGZyb20gXCIuLi8uLi9icmVha3BvaW50c1wiO1xuaW1wb3J0IHsgYmFja0J1dHRvbkNvbG91ciwgaW5zdHJ1Y3Rpb25zRm9udEZhbWlseSwgaW5zdHJ1Y3Rpb25zTW9iaWxlRm9udFNpemUsIGluc3RydWN0aW9uc0Rlc2t0b3BGb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgQmFja0J1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiLi4uYmFja1wiXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJhY2tcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQmFja0J1dHRvbilgXG5cbiAgY29sb3I6ICR7YmFja0J1dHRvbkNvbG91cn07XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiAke2luc3RydWN0aW9uc0ZvbnRGYW1pbHl9O1xuICBcbiAgZm9udC1zaXplOiAke2luc3RydWN0aW9uc01vYmlsZUZvbnRTaXplfTtcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAke2Rlc2t0b3B9KSB7XG5cbiAgICBmb250LXNpemU6ICR7aW5zdHJ1Y3Rpb25zRGVza3RvcEZvbnRTaXplfTtcbiAgICBcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoNTAlKTtcbiAgfVxuICBcbmA7XG4iXSwibmFtZXMiOlsiQmFja0J1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImJhY2tCdXR0b25Db2xvdXIiLCJpbnN0cnVjdGlvbnNGb250RmFtaWx5IiwiaW5zdHJ1Y3Rpb25zTW9iaWxlRm9udFNpemUiLCJkZXNrdG9wIiwiaW5zdHJ1Y3Rpb25zRGVza3RvcEZvbnRTaXplIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7b0VBakJzQjs2REFFSDsyQkFFSztzQkFDMEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxILElBQUEsQUFBTUEsMkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTztZQUNUOzs7V0FISUQ7RUFBbUJFLGVBQU07QUFLN0IsaUJBTElGLFlBS0dHLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ0wsK0JBRWRNLHdCQUFnQixFQUdWQyw4QkFBc0IsRUFFeEJDLGtDQUEwQixFQUVsQkMsb0JBQU8sRUFFYkMsbUNBQTJCIn0=