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
var _instructions = /*#__PURE__*/ _interop_require_default(require("../../button/instructions"));
var _styles = require("../../../styles");
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
        "\n\n  background-color: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DesktopInstructionsButton = /*#__PURE__*/ function(InstructionsButton) {
    _inherits(DesktopInstructionsButton, InstructionsButton);
    function DesktopInstructionsButton() {
        _class_call_check(this, DesktopInstructionsButton);
        return _call_super(this, DesktopInstructionsButton, arguments);
    }
    _create_class(DesktopInstructionsButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "Desktop / Laptop";
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showDesktopInstructionsButton = this.show.bind(this), hideDesktopInstructionsButton = this.hide.bind(this); ///
                return {
                    showDesktopInstructionsButton: showDesktopInstructionsButton,
                    hideDesktopInstructionsButton: hideDesktopInstructionsButton
                };
            }
        }
    ]);
    return DesktopInstructionsButton;
}(_instructions.default);
_define_property(DesktopInstructionsButton, "defaultProperties", {
    className: "desktop"
});
var _default = (0, _easywithstyle.default)(DesktopInstructionsButton)(_templateObject(), _styles.desktopInstructionsButtonBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9pbnN0cnVjdGlvbnMvZGVza3RvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IEluc3RydWN0aW9uc0J1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL2luc3RydWN0aW9uc1wiO1xuXG5pbXBvcnQgeyBkZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiBleHRlbmRzIEluc3RydWN0aW9uc0J1dHRvbiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiRGVza3RvcCAvIExhcHRvcFwiO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24sXG4gICAgICBoaWRlRGVza3RvcEluc3RydWN0aW9uc0J1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkZXNrdG9wXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24pYFxuXG4gIGJhY2tncm91bmQtY29sb3I6ICR7ZGVza3RvcEluc3RydWN0aW9uc0J1dHRvbkJhY2tncm91bmRDb2xvdXJ9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24iLCJzaG93IiwiYmluZCIsImhpZGVEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uIiwiaGlkZSIsIkluc3RydWN0aW9uc0J1dHRvbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZGVza3RvcEluc3RydWN0aW9uc0J1dHRvbkJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQTs7O2VBQUE7OztvRUExQnNCO21FQUVTO3NCQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRCxJQUFBLEFBQU1BLDBDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0NBQWdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNuREMsZ0NBQWdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRS9ELE9BQVE7b0JBQ05GLCtCQUFBQTtvQkFDQUcsK0JBQUFBO2dCQUNGO1lBQ0Y7OztXQWJJTjtFQUFrQ1EscUJBQWtCO0FBZXhELGlCQWZJUiwyQkFlR1MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDWCw4Q0FFSFksaURBQXlDIn0=