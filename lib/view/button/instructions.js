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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: fit-content;\n  color: ",
        ";\n  display: flex;\n  padding: ",
        ";\n  font-size: ",
        ";\n  font-weight: bold;\n  align-items: center;\n  justify-self: center;\n  flex-direction: row;\n  justify-content: center;\n  \n  :hover {\n    filter: grayscale(50%);\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InstructionsButton = /*#__PURE__*/ function(Button) {
    _inherits(InstructionsButton, Button);
    function InstructionsButton() {
        _class_call_check(this, InstructionsButton);
        return _call_super(this, InstructionsButton, arguments);
    }
    return InstructionsButton;
}(_button.default);
_define_property(InstructionsButton, "defaultProperties", {
    className: "instructions"
});
var _default = (0, _easywithstyle.default)(InstructionsButton)(_templateObject(), _styles.instructionsButtonColour, _styles.instructionsButtonPadding, _styles.instructionsButtonFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9pbnN0cnVjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiO1xuXG5pbXBvcnQgeyBpbnN0cnVjdGlvbnNCdXR0b25Db2xvdXIsIGluc3RydWN0aW9uc0J1dHRvblBhZGRpbmcsIGluc3RydWN0aW9uc0J1dHRvbkZvbnRTaXplIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBJbnN0cnVjdGlvbnNCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImluc3RydWN0aW9uc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShJbnN0cnVjdGlvbnNCdXR0b24pYFxuXG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgY29sb3I6ICR7aW5zdHJ1Y3Rpb25zQnV0dG9uQ29sb3VyfTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogJHtpbnN0cnVjdGlvbnNCdXR0b25QYWRkaW5nfTtcbiAgZm9udC1zaXplOiAke2luc3RydWN0aW9uc0J1dHRvbkZvbnRTaXplfTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gIDpob3ZlciB7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoNTAlKTtcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIkluc3RydWN0aW9uc0J1dHRvbiIsIkJ1dHRvbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uQ29sb3VyIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uUGFkZGluZyIsImluc3RydWN0aW9uc0J1dHRvbkZvbnRTaXplIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztvRUFac0I7NkRBRUg7c0JBRTZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhHLElBQUEsQUFBTUEsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O1dBQUFBO0VBQTJCQyxlQUFNO0FBQ3JDLGlCQURJRCxvQkFDR0UscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDSix1Q0FHZEssZ0NBQXdCLEVBRXRCQyxpQ0FBeUIsRUFDdkJDLGtDQUEwQiJ9