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
var InstructionsCloseButton = /*#__PURE__*/ function(Button) {
    _inherits(InstructionsCloseButton, Button);
    var _super = _create_super(InstructionsCloseButton);
    function InstructionsCloseButton() {
        _class_call_check(this, InstructionsCloseButton);
        return _super.apply(this, arguments);
    }
    _create_class(InstructionsCloseButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "╳";
            }
        }
    ]);
    return InstructionsCloseButton;
}(_easy.Button);
_define_property(InstructionsCloseButton, "defaultProperties", {
    className: "instructions-close"
});
var _default = (0, _easywithstyle.default)(InstructionsCloseButton)(_templateObject(), _styles.instructionsCloseButtonTop, _styles.instructionsCloseButtonRight, _styles.instructionsCloseButtonColour, _styles.instructionsCloseButtonFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9pbnN0cnVjdGlvbnMvY2xvc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBpbnN0cnVjdGlvbnNDbG9zZUJ1dHRvblRvcCwgaW5zdHJ1Y3Rpb25zQ2xvc2VCdXR0b25SaWdodCwgaW5zdHJ1Y3Rpb25zQ2xvc2VCdXR0b25Db2xvdXIsIGluc3RydWN0aW9uc0Nsb3NlQnV0dG9uRm9udFNpemUgfSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEluc3RydWN0aW9uc0Nsb3NlQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCLilbNcIjtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW5zdHJ1Y3Rpb25zLWNsb3NlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEluc3RydWN0aW9uc0Nsb3NlQnV0dG9uKWBcblxuICB0b3A6ICR7aW5zdHJ1Y3Rpb25zQ2xvc2VCdXR0b25Ub3B9O1xuICByaWdodDogJHtpbnN0cnVjdGlvbnNDbG9zZUJ1dHRvblJpZ2h0fTtcbiAgY29sb3I6ICR7aW5zdHJ1Y3Rpb25zQ2xvc2VCdXR0b25Db2xvdXJ9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAke2luc3RydWN0aW9uc0Nsb3NlQnV0dG9uRm9udFNpemV9O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuYDtcbiJdLCJuYW1lcyI6WyJJbnN0cnVjdGlvbnNDbG9zZUJ1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImluc3RydWN0aW9uc0Nsb3NlQnV0dG9uVG9wIiwiaW5zdHJ1Y3Rpb25zQ2xvc2VCdXR0b25SaWdodCIsImluc3RydWN0aW9uc0Nsb3NlQnV0dG9uQ29sb3VyIiwiaW5zdHJ1Y3Rpb25zQ2xvc2VCdXR0b25Gb250U2l6ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQUE7OztvRUFmc0I7b0JBRUM7c0JBQ2tIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpJLElBQUEsQUFBTUEsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTztZQUNUOzs7V0FISUQ7RUFBZ0NFLFlBQU07QUFLMUMsaUJBTElGLHlCQUtHRyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNMLDRDQUVoQk0sa0NBQTBCLEVBQ3hCQyxvQ0FBNEIsRUFDNUJDLHFDQUE2QixFQUl6QkMsdUNBQStCIn0=