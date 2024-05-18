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
        "\n\n  top: ",
        ";\n  right: ",
        ";\n  color: ",
        ";\n  cursor: pointer;\n  padding: 0;\n  position: absolute;\n  background: transparent;\n  font-family: ",
        ";\n\n  font-size: ",
        ";\n  \n  @media (min-width: ",
        ") {\n\n    font-size: ",
        ";\n    \n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var HideOverlayButton = /*#__PURE__*/ function(Button) {
    _inherits(HideOverlayButton, Button);
    var _super = _create_super(HideOverlayButton);
    function HideOverlayButton() {
        _class_call_check(this, HideOverlayButton);
        return _super.apply(this, arguments);
    }
    _create_class(HideOverlayButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "╳";
            }
        }
    ]);
    return HideOverlayButton;
}(_easy.Button);
_define_property(HideOverlayButton, "defaultProperties", {
    className: "hide-overlay"
});
var _default = (0, _easywithstyle.default)(HideOverlayButton)(_templateObject(), _styles.hideOverlayButtonTop, _styles.hideOverlayButtonRight, _styles.hideOverlayButtonColour, _styles.hideOverlayButtonFontFamily, _styles.hideOverlayButtonMobileFontSize, _breakpoints.desktop, _styles.hideOverlayButtonDesktopFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9oaWRlT3ZlcmxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgZGVza3RvcCB9IGZyb20gXCIuLi8uLi9icmVha3BvaW50c1wiO1xuaW1wb3J0IHsgaGlkZU92ZXJsYXlCdXR0b25Ub3AsIGhpZGVPdmVybGF5QnV0dG9uUmlnaHQsIGhpZGVPdmVybGF5QnV0dG9uQ29sb3VyLCBoaWRlT3ZlcmxheUJ1dHRvbkZvbnRGYW1pbHksIGhpZGVPdmVybGF5QnV0dG9uTW9iaWxlRm9udFNpemUsIGhpZGVPdmVybGF5QnV0dG9uRGVza3RvcEZvbnRTaXplIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBIaWRlT3ZlcmxheUJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwi4pWzXCI7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhpZGUtb3ZlcmxheVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShIaWRlT3ZlcmxheUJ1dHRvbilgXG5cbiAgdG9wOiAke2hpZGVPdmVybGF5QnV0dG9uVG9wfTtcbiAgcmlnaHQ6ICR7aGlkZU92ZXJsYXlCdXR0b25SaWdodH07XG4gIGNvbG9yOiAke2hpZGVPdmVybGF5QnV0dG9uQ29sb3VyfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogJHtoaWRlT3ZlcmxheUJ1dHRvbkZvbnRGYW1pbHl9O1xuXG4gIGZvbnQtc2l6ZTogJHtoaWRlT3ZlcmxheUJ1dHRvbk1vYmlsZUZvbnRTaXplfTtcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAke2Rlc2t0b3B9KSB7XG5cbiAgICBmb250LXNpemU6ICR7aGlkZU92ZXJsYXlCdXR0b25EZXNrdG9wRm9udFNpemV9O1xuICAgIFxuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiSGlkZU92ZXJsYXlCdXR0b24iLCJjaGlsZEVsZW1lbnRzIiwiQnV0dG9uIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJoaWRlT3ZlcmxheUJ1dHRvblRvcCIsImhpZGVPdmVybGF5QnV0dG9uUmlnaHQiLCJoaWRlT3ZlcmxheUJ1dHRvbkNvbG91ciIsImhpZGVPdmVybGF5QnV0dG9uRm9udEZhbWlseSIsImhpZGVPdmVybGF5QnV0dG9uTW9iaWxlRm9udFNpemUiLCJkZXNrdG9wIiwiaGlkZU92ZXJsYXlCdXR0b25EZXNrdG9wRm9udFNpemUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O29FQWpCc0I7b0JBRUM7MkJBRUM7c0JBQzhKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRMLElBQUEsQUFBTUEsa0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTztZQUNUOzs7V0FISUQ7RUFBMEJFLFlBQU07QUFLcEMsaUJBTElGLG1CQUtHRyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNMLHNDQUVoQk0sNEJBQW9CLEVBQ2xCQyw4QkFBc0IsRUFDdEJDLCtCQUF1QixFQUtqQkMsbUNBQTJCLEVBRTdCQyx1Q0FBK0IsRUFFdkJDLG9CQUFPLEVBRWJDLHdDQUFnQyJ9