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
var _constants = require("../../constants");
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
        "\n\n  color: ",
        ";\n  width: fit-content;\n  cursor: pointer;\n  padding: ",
        ";\n  font-size: ",
        ";\n  grid-area: back-button;\n  background: transparent;\n  justify-self: end;\n\n  :hover {\n    filter: grayscale(50%);\n  }\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var BackButton = /*#__PURE__*/ function(Button) {
    _inherits(BackButton, Button);
    function BackButton() {
        _class_call_check(this, BackButton);
        return _call_super(this, BackButton, arguments);
    }
    _create_class(BackButton, [
        {
            key: "show",
            value: function show() {
                var display = _constants.FLEX;
                this.display(display);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return "← back";
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showBackButton = this.show.bind(this), hideBackButton = this.hide.bind(this); ///
                return {
                    showBackButton: showBackButton,
                    hideBackButton: hideBackButton
                };
            }
        }
    ]);
    return BackButton;
}(_button.default);
_define_property(BackButton, "defaultProperties", {
    className: "back"
});
var _default = (0, _easywithstyle.default)(BackButton)(_templateObject(), _styles.backButtonColour, _styles.backButtonPadding, _styles.backButtonFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9iYWNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcblxuaW1wb3J0IHsgRkxFWCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGJhY2tCdXR0b25Db2xvdXIsIGJhY2tCdXR0b25QYWRkaW5nLCBiYWNrQnV0dG9uRm9udFNpemUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEJhY2tCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBGTEVYO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCLihpAgYmFja1wiXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dCYWNrQnV0dG9uID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlQmFja0J1dHRvbiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dCYWNrQnV0dG9uLFxuICAgICAgaGlkZUJhY2tCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYmFja1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShCYWNrQnV0dG9uKWBcblxuICBjb2xvcjogJHtiYWNrQnV0dG9uQ29sb3VyfTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6ICR7YmFja0J1dHRvblBhZGRpbmd9O1xuICBmb250LXNpemU6ICR7YmFja0J1dHRvbkZvbnRTaXplfTtcbiAgZ3JpZC1hcmVhOiBiYWNrLWJ1dHRvbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuXG4gIDpob3ZlciB7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoNTAlKTtcbiAgfVxuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJCYWNrQnV0dG9uIiwic2hvdyIsImRpc3BsYXkiLCJGTEVYIiwiY2hpbGRFbGVtZW50cyIsInBhcmVudENvbnRleHQiLCJzaG93QmFja0J1dHRvbiIsImJpbmQiLCJoaWRlQmFja0J1dHRvbiIsImhpZGUiLCJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImJhY2tCdXR0b25Db2xvdXIiLCJiYWNrQnV0dG9uUGFkZGluZyIsImJhY2tCdXR0b25Gb250U2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUNBOzs7ZUFBQTs7O29FQWpDc0I7NkRBRUg7eUJBRUU7c0JBQ21EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsSUFBQSxBQUFNQSwyQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVQyxlQUFJO2dCQUVwQixJQUFJLENBQUNELE9BQU8sQ0FBQ0E7WUFDZjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0wsSUFBSSxDQUFDTSxJQUFJLENBQUMsSUFBSSxHQUNwQ0MsaUJBQWlCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRWpELE9BQVE7b0JBQ05ELGdCQUFBQTtvQkFDQUUsZ0JBQUFBO2dCQUNGO1lBQ0Y7OztXQW5CSVI7RUFBbUJVLGVBQU07QUFxQjdCLGlCQXJCSVYsWUFxQkdXLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2IsK0JBRWRjLHdCQUFnQixFQUdkQyx5QkFBaUIsRUFDZkMsMEJBQWtCIn0=