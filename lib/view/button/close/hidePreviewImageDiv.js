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
var _close = /*#__PURE__*/ _interop_require_default(require("../../button/close"));
var _styles = require("../../../styles");
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
        "\n\n  top: ",
        ";\n  right: ",
        ";\n  position: absolute;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var HidePreviewImageDivButton = /*#__PURE__*/ function(CloseButton) {
    _inherits(HidePreviewImageDivButton, CloseButton);
    var _super = _create_super(HidePreviewImageDivButton);
    function HidePreviewImageDivButton() {
        _class_call_check(this, HidePreviewImageDivButton);
        return _super.apply(this, arguments);
    }
    return HidePreviewImageDivButton;
}(_close.default);
_define_property(HidePreviewImageDivButton, "defaultProperties", {
    className: "hide-preview-image-div"
});
var _default = (0, _easywithstyle.default)(HidePreviewImageDivButton)(_templateObject(), _styles.hidePreviewImageDivButtonTop, _styles.hidePreviewImageDivButtonLeft);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9jbG9zZS9oaWRlUHJldmlld0ltYWdlRGl2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9jbG9zZVwiO1xuXG5pbXBvcnQgeyBoaWRlUHJldmlld0ltYWdlRGl2QnV0dG9uVG9wLCBoaWRlUHJldmlld0ltYWdlRGl2QnV0dG9uTGVmdCB9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgSGlkZVByZXZpZXdJbWFnZURpdkJ1dHRvbiBleHRlbmRzIENsb3NlQnV0dG9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJoaWRlLXByZXZpZXctaW1hZ2UtZGl2XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhpZGVQcmV2aWV3SW1hZ2VEaXZCdXR0b24pYFxuXG4gIHRvcDogJHtoaWRlUHJldmlld0ltYWdlRGl2QnV0dG9uVG9wfTtcbiAgcmlnaHQ6ICR7aGlkZVByZXZpZXdJbWFnZURpdkJ1dHRvbkxlZnR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJIaWRlUHJldmlld0ltYWdlRGl2QnV0dG9uIiwiQ2xvc2VCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImhpZGVQcmV2aWV3SW1hZ2VEaXZCdXR0b25Ub3AiLCJoaWRlUHJldmlld0ltYWdlRGl2QnV0dG9uTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7b0VBWnNCOzREQUVFO3NCQUVvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsQUFBTUEsMENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7V0FBQUE7RUFBa0NDLGNBQVc7QUFDakQsaUJBRElELDJCQUNHRSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNKLDhDQUVoQkssb0NBQTRCLEVBQzFCQyxxQ0FBNkIifQ==