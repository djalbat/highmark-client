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
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../checkbox"));
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
        "\n\n  filter: invert(1);\n\n  width: ",
        "; \n  height: ",
        ";\n  \n  ::before {\n    border-width: ",
        ";\n    border-radius: ",
        ";\n  }\n  \n  @media (orientation: landscape) {\n\n    width: ",
        "; \n    height: ",
        ";\n    \n    ::before {\n      border-width: ",
        ";\n      border-radius: ",
        ";\n    }\n    \n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InstructionsCheckbox = /*#__PURE__*/ function(Checkbox) {
    _inherits(InstructionsCheckbox, Checkbox);
    var _super = _create_super(InstructionsCheckbox);
    function InstructionsCheckbox() {
        _class_call_check(this, InstructionsCheckbox);
        return _super.apply(this, arguments);
    }
    return InstructionsCheckbox;
}(_checkbox.default);
_define_property(InstructionsCheckbox, "defaultProperties", {
    className: "instructions"
});
var _default = (0, _easywithstyle.default)(InstructionsCheckbox)(_templateObject(), _styles.instructionsCheckboxPortraitSize, _styles.instructionsCheckboxPortraitSize, _styles.instructionsCheckboxPortraitBorderWidth, _styles.instructionsCheckboxPortraitBorderRadius, _styles.instructionsCheckboxLandscapeSize, _styles.instructionsCheckboxLandscapeSize, _styles.instructionsCheckboxLandscapeBorderWidth, _styles.instructionsCheckboxLandscapeBorderRadius);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2NoZWNrYm94L2luc3RydWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveFwiO1xuXG5pbXBvcnQgeyBpbnN0cnVjdGlvbnNDaGVja2JveFBvcnRyYWl0U2l6ZSxcbiAgICAgICAgIGluc3RydWN0aW9uc0NoZWNrYm94TGFuZHNjYXBlU2l6ZSxcbiAgICAgICAgIGluc3RydWN0aW9uc0NoZWNrYm94UG9ydHJhaXRCb3JkZXJXaWR0aCxcbiAgICAgICAgIGluc3RydWN0aW9uc0NoZWNrYm94TGFuZHNjYXBlQm9yZGVyV2lkdGgsXG4gICAgICAgICBpbnN0cnVjdGlvbnNDaGVja2JveFBvcnRyYWl0Qm9yZGVyUmFkaXVzLFxuICAgICAgICAgaW5zdHJ1Y3Rpb25zQ2hlY2tib3hMYW5kc2NhcGVCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEluc3RydWN0aW9uc0NoZWNrYm94IGV4dGVuZHMgQ2hlY2tib3gge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImluc3RydWN0aW9uc1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShJbnN0cnVjdGlvbnNDaGVja2JveClgXG5cbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG5cbiAgd2lkdGg6ICR7aW5zdHJ1Y3Rpb25zQ2hlY2tib3hQb3J0cmFpdFNpemV9OyBcbiAgaGVpZ2h0OiAke2luc3RydWN0aW9uc0NoZWNrYm94UG9ydHJhaXRTaXplfTtcbiAgXG4gIDo6YmVmb3JlIHtcbiAgICBib3JkZXItd2lkdGg6ICR7aW5zdHJ1Y3Rpb25zQ2hlY2tib3hQb3J0cmFpdEJvcmRlcldpZHRofTtcbiAgICBib3JkZXItcmFkaXVzOiAke2luc3RydWN0aW9uc0NoZWNrYm94UG9ydHJhaXRCb3JkZXJSYWRpdXN9O1xuICB9XG4gIFxuICBAbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcblxuICAgIHdpZHRoOiAke2luc3RydWN0aW9uc0NoZWNrYm94TGFuZHNjYXBlU2l6ZX07IFxuICAgIGhlaWdodDogJHtpbnN0cnVjdGlvbnNDaGVja2JveExhbmRzY2FwZVNpemV9O1xuICAgIFxuICAgIDo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci13aWR0aDogJHtpbnN0cnVjdGlvbnNDaGVja2JveExhbmRzY2FwZUJvcmRlcldpZHRofTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7aW5zdHJ1Y3Rpb25zQ2hlY2tib3hMYW5kc2NhcGVCb3JkZXJSYWRpdXN9O1xuICAgIH1cbiAgICBcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIkluc3RydWN0aW9uc0NoZWNrYm94IiwiQ2hlY2tib3giLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImluc3RydWN0aW9uc0NoZWNrYm94UG9ydHJhaXRTaXplIiwiaW5zdHJ1Y3Rpb25zQ2hlY2tib3hQb3J0cmFpdEJvcmRlcldpZHRoIiwiaW5zdHJ1Y3Rpb25zQ2hlY2tib3hQb3J0cmFpdEJvcmRlclJhZGl1cyIsImluc3RydWN0aW9uc0NoZWNrYm94TGFuZHNjYXBlU2l6ZSIsImluc3RydWN0aW9uc0NoZWNrYm94TGFuZHNjYXBlQm9yZGVyV2lkdGgiLCJpbnN0cnVjdGlvbnNDaGVja2JveExhbmRzY2FwZUJvcmRlclJhZGl1cyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQUE7OztvRUFqQnNCOytEQUVEO3NCQU9xQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEscUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7V0FBQUE7RUFBNkJDLGlCQUFRO0FBQ3pDLGlCQURJRCxzQkFDR0UscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDSix5Q0FJZEssd0NBQWdDLEVBQy9CQSx3Q0FBZ0MsRUFHeEJDLCtDQUF1QyxFQUN0Q0MsZ0RBQXdDLEVBS2hEQyx5Q0FBaUMsRUFDaENBLHlDQUFpQyxFQUd6QkMsZ0RBQXdDLEVBQ3ZDQyxpREFBeUMifQ==