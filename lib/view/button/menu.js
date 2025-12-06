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
        "\n\n  fill: ",
        ";\n  width: ",
        ";\n  height: auto;\n  cursor: pointer;\n  display: flex;\n  background: transparent;\n  align-items: center;\n  justify-content: center;\n  \n  .active {\n    fill: ",
        ";\n    cursor: default;\n    filter: drop-shadow(0 0 3px ",
        ");  \n  }\n   \n"
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
                var _this_properties = this.properties, _this_properties_hidden = _this_properties.hidden, hidden = _this_properties_hidden === void 0 ? false : _this_properties_hidden;
                if (hidden) {
                    this.hide();
                }
                this.onClick(this.clickHandler);
            }
        },
        {
            key: "isActive",
            value: function isActive() {
                var active = this.hasClass("active");
                return active;
            }
        },
        {
            key: "activate",
            value: function activate() {
                this.addClass("active");
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                this.removeClass("active");
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
                var MenuSVG = this.constructor.MenuSVG;
                return /*#__PURE__*/ React.createElement(MenuSVG, null);
            }
        }
    ]);
    return MenuButton;
}(_easy.Button);
_define_property(MenuButton, "ignoredProperties", [
    "hidden"
]);
_define_property(MenuButton, "defaultProperties", {
    className: "menu"
});
var _default = (0, _easywithstyle.default)(MenuButton)(_templateObject(), _styles.menuButtonFill, _styles.menuButtonWidth, _styles.menuButtonDisabledFill, _styles.menuButtonDisabledColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBtZW51QnV0dG9uRmlsbCwgbWVudUJ1dHRvbldpZHRoLCBtZW51QnV0dG9uRGlzYWJsZWRGaWxsLCBtZW51QnV0dG9uRGlzYWJsZWRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGhpZGRlbiA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgIHJldHVybiBhY3RpdmU7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IHsgTWVudVNWRyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxNZW51U1ZHLz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJoaWRkZW5cIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVudVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNZW51QnV0dG9uKWBcblxuICBmaWxsOiAke21lbnVCdXR0b25GaWxsfTtcbiAgd2lkdGg6ICR7bWVudUJ1dHRvbldpZHRofTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gIC5hY3RpdmUge1xuICAgIGZpbGw6ICR7bWVudUJ1dHRvbkRpc2FibGVkRmlsbH07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDNweCAke21lbnVCdXR0b25EaXNhYmxlZENvbG91cn0pOyAgXG4gIH1cbiAgIFxuYDtcbiJdLCJuYW1lcyI6WyJNZW51QnV0dG9uIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwiaGlkZGVuIiwiaGlkZSIsIm9uQ2xpY2siLCJjbGlja0hhbmRsZXIiLCJpc0FjdGl2ZSIsImFjdGl2ZSIsImhhc0NsYXNzIiwiYWN0aXZhdGUiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJyZW1vdmVDbGFzcyIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwiTWVudVNWRyIsIkJ1dHRvbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJtZW51QnV0dG9uRmlsbCIsIm1lbnVCdXR0b25XaWR0aCIsIm1lbnVCdXR0b25EaXNhYmxlZEZpbGwiLCJtZW51QnV0dG9uRGlzYWJsZWRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdEQTs7O2VBQUE7OztvRUF0RHNCO29CQUVDO3NCQUUyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRyxJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUEyQixtQkFBQSxJQUFJLENBQUNDLFVBQVUsNEJBQWYsaUJBQW5CQyxRQUFBQSw4Q0FBUztnQkFFakIsSUFBSUEsUUFBUTtvQkFDVixJQUFJLENBQUNDLElBQUk7Z0JBQ1g7Z0JBRUEsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDQyxZQUFZO1lBQ2hDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBRTdCLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUM7WUFDaEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxXQUFXLENBQUM7WUFDbkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDVCxZQUFZO1lBQ2pDOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUMsVUFBWSxJQUFJLENBQUMsV0FBVyxDQUE1QkE7Z0JBRVIscUJBRUUsb0JBQUNBO1lBR0w7OztXQXJDSWpCO0VBQW1Ca0IsWUFBTTtBQXVDN0IsaUJBdkNJbEIsWUF1Q0dtQixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQTNDSW5CLFlBMkNHb0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDdEIsK0JBRWZ1QixzQkFBYyxFQUNiQyx1QkFBZSxFQVNkQyw4QkFBc0IsRUFFQUMsZ0NBQXdCIn0=