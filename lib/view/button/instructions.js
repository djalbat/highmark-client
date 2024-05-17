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
        ";\n  width: ",
        ";\n  height: ",
        ";\n  display: flex;\n  font-size: ",
        ";\n  font-family: ",
        ";\n  font-weight: bold;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  \n  :hover {\n    filter: grayscale(90%);\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InstructionsButton = /*#__PURE__*/ function(Button) {
    _inherits(InstructionsButton, Button);
    var _super = _create_super(InstructionsButton);
    function InstructionsButton() {
        _class_call_check(this, InstructionsButton);
        return _super.apply(this, arguments);
    }
    return InstructionsButton;
}(_button.default);
_define_property(InstructionsButton, "defaultProperties", {
    className: "instructions"
});
var _default = (0, _easywithstyle.default)(InstructionsButton)(_templateObject(), _styles.instructionsButtonColour, _styles.instructionsButtonWidth, _styles.instructionsButtonHeight, _styles.instructionsButtonFontSize, _styles.instructionsFontFamily);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9pbnN0cnVjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2J1dHRvblwiO1xuXG5pbXBvcnQgeyBpbnN0cnVjdGlvbnNGb250RmFtaWx5LCBpbnN0cnVjdGlvbnNCdXR0b25XaWR0aCwgaW5zdHJ1Y3Rpb25zQnV0dG9uSGVpZ2h0LCBpbnN0cnVjdGlvbnNCdXR0b25Db2xvdXIsIGluc3RydWN0aW9uc0J1dHRvbkZvbnRTaXplIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBJbnN0cnVjdGlvbnNCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImluc3RydWN0aW9uc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShJbnN0cnVjdGlvbnNCdXR0b24pYFxuXG4gIGNvbG9yOiAke2luc3RydWN0aW9uc0J1dHRvbkNvbG91cn07XG4gIHdpZHRoOiAke2luc3RydWN0aW9uc0J1dHRvbldpZHRofTtcbiAgaGVpZ2h0OiAke2luc3RydWN0aW9uc0J1dHRvbkhlaWdodH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogJHtpbnN0cnVjdGlvbnNCdXR0b25Gb250U2l6ZX07XG4gIGZvbnQtZmFtaWx5OiAke2luc3RydWN0aW9uc0ZvbnRGYW1pbHl9O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICA6aG92ZXIge1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDkwJSk7XG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJJbnN0cnVjdGlvbnNCdXR0b24iLCJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImluc3RydWN0aW9uc0J1dHRvbkNvbG91ciIsImluc3RydWN0aW9uc0J1dHRvbldpZHRoIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uSGVpZ2h0IiwiaW5zdHJ1Y3Rpb25zQnV0dG9uRm9udFNpemUiLCJpbnN0cnVjdGlvbnNGb250RmFtaWx5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7b0VBWnNCOzZEQUVIO3NCQUU2SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhKLElBQUEsQUFBTUEsbUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7V0FBQUE7RUFBMkJDLGVBQU07QUFDckMsaUJBRElELG9CQUNHRSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNKLHVDQUVkSyxnQ0FBd0IsRUFDeEJDLCtCQUF1QixFQUN0QkMsZ0NBQXdCLEVBRXJCQyxrQ0FBMEIsRUFDeEJDLDhCQUFzQiJ9