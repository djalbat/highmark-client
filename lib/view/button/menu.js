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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: ",
        ";\n  height: ",
        ";\n  border: ",
        " solid ",
        ";\n  padding: ",
        ";\n  background: transparent;\n  border-radius: ",
        ";   \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MenuButton = /*#__PURE__*/ function(Button) {
    _inherits(MenuButton, Button);
    function MenuButton() {
        _class_call_check(this, MenuButton);
        return _call_super(this, MenuButton, arguments);
    }
    _create_class(MenuButton, [
        {
            key: "didMount",
            value: function didMount() {
                this.onClick(this.clickHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offClick(this.clickHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var SVG = this.constructor.SVG;
                return /*#__PURE__*/ React.createElement(SVG, null);
            }
        }
    ]);
    return MenuButton;
}(_button.default);
_define_property(MenuButton, "defaultProperties", {
    className: "menu"
});
var _default = (0, _easywithstyle.default)(MenuButton)(_templateObject(), _styles.menuButtonSize, _styles.menuButtonSize, _styles.borderWidth, _styles.borderColour, _styles.menuButtonPadding, _styles.borderRadius);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcblxuaW1wb3J0IHsgYm9yZGVyV2lkdGgsIGJvcmRlclJhZGl1cywgYm9yZGVyQ29sb3VyLCBtZW51QnV0dG9uU2l6ZSwgbWVudUJ1dHRvblBhZGRpbmcgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgU1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNWRy8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtZW51XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1lbnVCdXR0b24pYFxuXG4gIHdpZHRoOiAke21lbnVCdXR0b25TaXplfTtcbiAgaGVpZ2h0OiAke21lbnVCdXR0b25TaXplfTtcbiAgYm9yZGVyOiAke2JvcmRlcldpZHRofSBzb2xpZCAke2JvcmRlckNvbG91cn07XG4gIHBhZGRpbmc6ICR7bWVudUJ1dHRvblBhZGRpbmd9O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogJHtib3JkZXJSYWRpdXN9OyAgIFxuICBcbmA7XG4iXSwibmFtZXMiOlsiTWVudUJ1dHRvbiIsImRpZE1vdW50Iiwib25DbGljayIsImNsaWNrSGFuZGxlciIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwiU1ZHIiwiY29uc3RydWN0b3IiLCJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm1lbnVCdXR0b25TaXplIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvdXIiLCJtZW51QnV0dG9uUGFkZGluZyIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0NBOzs7ZUFBQTs7O29FQTlCc0I7NkRBRUg7c0JBRXdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0YsSUFBQSxBQUFNQSwyQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNDLFlBQVk7WUFDaEM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDRixZQUFZO1lBQ2pDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsTUFBUSxJQUFJLENBQUNDLFdBQVcsQ0FBeEJEO2dCQUVSLHFCQUVFLG9CQUFDQTtZQUdMOzs7V0FqQklQO0VBQW1CUyxlQUFNO0FBbUI3QixpQkFuQklULFlBbUJHVSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNaLCtCQUVkYSxzQkFBYyxFQUNiQSxzQkFBYyxFQUNkQyxtQkFBVyxFQUFVQyxvQkFBWSxFQUNoQ0MseUJBQWlCLEVBRVhDLG9CQUFZIn0=