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
        ";\n  cursor: pointer;\n  padding: 0;\n  position: absolute;\n  font-size: ",
        ";\n  background: transparent;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CloseOverlayButton = /*#__PURE__*/ function(Button) {
    _inherits(CloseOverlayButton, Button);
    var _super = _create_super(CloseOverlayButton);
    function CloseOverlayButton() {
        _class_call_check(this, CloseOverlayButton);
        return _super.apply(this, arguments);
    }
    _create_class(CloseOverlayButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "╳";
            }
        }
    ]);
    return CloseOverlayButton;
}(_easy.Button);
_define_property(CloseOverlayButton, "defaultProperties", {
    className: "close-overlay"
});
var _default = (0, _easywithstyle.default)(CloseOverlayButton)(_templateObject(), _styles.closeOverlayButtonTop, _styles.closeOverlayButtonRight, _styles.closeOverlayButtonColour, _styles.closeOverlayButtonFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9jbG9zZU92ZXJsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBjbG9zZU92ZXJsYXlCdXR0b25Ub3AsIGNsb3NlT3ZlcmxheUJ1dHRvblJpZ2h0LCBjbG9zZU92ZXJsYXlCdXR0b25Db2xvdXIsIGNsb3NlT3ZlcmxheUJ1dHRvbkZvbnRTaXplIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBDbG9zZU92ZXJsYXlCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIuKVs1wiO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjbG9zZS1vdmVybGF5XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENsb3NlT3ZlcmxheUJ1dHRvbilgXG5cbiAgdG9wOiAke2Nsb3NlT3ZlcmxheUJ1dHRvblRvcH07XG4gIHJpZ2h0OiAke2Nsb3NlT3ZlcmxheUJ1dHRvblJpZ2h0fTtcbiAgY29sb3I6ICR7Y2xvc2VPdmVybGF5QnV0dG9uQ29sb3VyfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogJHtjbG9zZU92ZXJsYXlCdXR0b25Gb250U2l6ZX07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG5gO1xuIl0sIm5hbWVzIjpbIkNsb3NlT3ZlcmxheUJ1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNsb3NlT3ZlcmxheUJ1dHRvblRvcCIsImNsb3NlT3ZlcmxheUJ1dHRvblJpZ2h0IiwiY2xvc2VPdmVybGF5QnV0dG9uQ29sb3VyIiwiY2xvc2VPdmVybGF5QnV0dG9uRm9udFNpemUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7b0VBZnNCO29CQUVDO3NCQUM4Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVySCxJQUFBLEFBQU1BLG1DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU87WUFDVDs7O1dBSElEO0VBQTJCRSxZQUFNO0FBS3JDLGlCQUxJRixvQkFLR0cscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDTCx1Q0FFaEJNLDZCQUFxQixFQUNuQkMsK0JBQXVCLEVBQ3ZCQyxnQ0FBd0IsRUFJcEJDLGtDQUEwQiJ9