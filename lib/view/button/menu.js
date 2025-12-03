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
        ";\n  height: auto;\n  cursor: pointer;\n  display: flex;\n  padding: ",
        ";\n  background: transparent;\n  align-items: center;\n  justify-content: center;\n  \n  :disabled {\n    cursor: default;\n    filter: drop-shadow(0 0 3px ",
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
var _default = (0, _easywithstyle.default)(MenuButton)(_templateObject(), _styles.menuButtonFill, _styles.menuButtonWidth, _styles.menuButtonPadding, _styles.menuButtonDisabledColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBtZW51QnV0dG9uRmlsbCwgbWVudUJ1dHRvbldpZHRoLCBtZW51QnV0dG9uUGFkZGluZywgbWVudUJ1dHRvbkRpc2FibGVkQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNZW51QnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IE1lbnVTVkcgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8TWVudVNWRy8+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiaGlkZGVuXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWVudUJ1dHRvbilgXG5cbiAgZmlsbDogJHttZW51QnV0dG9uRmlsbH07XG4gIHdpZHRoOiAke21lbnVCdXR0b25XaWR0aH07XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAke21lbnVCdXR0b25QYWRkaW5nfTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgM3B4ICR7bWVudUJ1dHRvbkRpc2FibGVkQ29sb3VyfSk7ICBcbiAgfVxuICAgXG5gO1xuIl0sIm5hbWVzIjpbIk1lbnVCdXR0b24iLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJoaWRkZW4iLCJoaWRlIiwib25DbGljayIsImNsaWNrSGFuZGxlciIsIndpbGxVbm1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwiTWVudVNWRyIsIkJ1dHRvbiIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJtZW51QnV0dG9uRmlsbCIsIm1lbnVCdXR0b25XaWR0aCIsIm1lbnVCdXR0b25QYWRkaW5nIiwibWVudUJ1dHRvbkRpc2FibGVkQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQ0E7OztlQUFBOzs7b0VBeENzQjtvQkFFQztzQkFFc0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0YsSUFBQSxBQUFNQSwyQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBMkIsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLDRCQUFmLGlCQUFuQkMsUUFBQUEsOENBQVM7Z0JBRWpCLElBQUlBLFFBQVE7b0JBQ1YsSUFBSSxDQUFDQyxJQUFJO2dCQUNYO2dCQUVBLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ0MsWUFBWTtZQUNoQzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUNGLFlBQVk7WUFDakM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFQyxVQUFZLElBQUksQ0FBQyxXQUFXLENBQTVCQTtnQkFFUixxQkFFRSxvQkFBQ0E7WUFHTDs7O1dBdkJJVjtFQUFtQlcsWUFBTTtBQXlCN0IsaUJBekJJWCxZQXlCR1kscUJBQW9CO0lBQ3pCO0NBQ0Q7QUFFRCxpQkE3QklaLFlBNkJHYSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNmLCtCQUVmZ0Isc0JBQWMsRUFDYkMsdUJBQWUsRUFJYkMseUJBQWlCLEVBT0lDLGdDQUF3QiJ9