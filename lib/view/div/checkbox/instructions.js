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
var _instructions = /*#__PURE__*/ _interop_require_default(require("../../checkbox/instructions"));
var _instructions1 = /*#__PURE__*/ _interop_require_default(require("../../span/checkbox/instructions"));
var _state = require("../../../state");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "\n\n  gap: ",
        ";\n  display: flex;\n  grid-area: instructions-checkbox-div;\n  font-size: 1em;\n  align-items: center;\n  justify-self: start;\n  flex-direction: row;\n  justify-content: start;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InstructionsCheckboxDiv = /*#__PURE__*/ function(Element) {
    _inherits(InstructionsCheckboxDiv, Element);
    var _super = _create_super(InstructionsCheckboxDiv);
    function InstructionsCheckboxDiv() {
        _class_call_check(this, InstructionsCheckboxDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "instructionsCheckboxChangeHandler", function(event, element) {
            var instructionsCheckbox = element, checked = instructionsCheckbox.isChecked(), overlayHidden = checked; ///
            (0, _state.setOverlayHidden)(overlayHidden);
        });
        return _this;
    }
    _create_class(InstructionsCheckboxDiv, [
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_instructions.default, {
                        onChange: this.instructionsCheckboxChangeHandler
                    }),
                    /*#__PURE__*/ React.createElement(_instructions1.default, null)
                ];
            }
        }
    ]);
    return InstructionsCheckboxDiv;
}(_wrap_native_super(_easy.Element));
_define_property(InstructionsCheckboxDiv, "tagName", "div");
_define_property(InstructionsCheckboxDiv, "defaultProperties", {
    className: "instructions-checkbox"
});
var _default = (0, _easywithstyle.default)(InstructionsCheckboxDiv)(_templateObject(), _styles.instructionsCheckboxDivGap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9pbnN0cnVjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zQ2hlY2tib3ggZnJvbSBcIi4uLy4uL2NoZWNrYm94L2luc3RydWN0aW9uc1wiO1xuaW1wb3J0IEluc3RydWN0aW9uc0NoZWNrYm94U3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9jaGVja2JveC9pbnN0cnVjdGlvbnNcIjtcblxuaW1wb3J0IHsgc2V0T3ZlcmxheUhpZGRlbiB9IGZyb20gXCIuLi8uLi8uLi9zdGF0ZVwiO1xuaW1wb3J0IHsgaW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXZHYXAgfSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEluc3RydWN0aW9uc0NoZWNrYm94RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGluc3RydWN0aW9uc0NoZWNrYm94Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGluc3RydWN0aW9uc0NoZWNrYm94ID0gZWxlbWVudCwgLy8vXG4gICAgICAgICAgY2hlY2tlZCA9IGluc3RydWN0aW9uc0NoZWNrYm94LmlzQ2hlY2tlZCgpLFxuICAgICAgICAgIG92ZXJsYXlIaWRkZW4gPSBjaGVja2VkOyAgLy8vXG5cbiAgICBzZXRPdmVybGF5SGlkZGVuKG92ZXJsYXlIaWRkZW4pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEluc3RydWN0aW9uc0NoZWNrYm94IG9uQ2hhbmdlPXt0aGlzLmluc3RydWN0aW9uc0NoZWNrYm94Q2hhbmdlSGFuZGxlcn0gLz4sXG4gICAgICA8SW5zdHJ1Y3Rpb25zQ2hlY2tib3hTcGFuLz5cblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW5zdHJ1Y3Rpb25zLWNoZWNrYm94XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEluc3RydWN0aW9uc0NoZWNrYm94RGl2KWBcblxuICBnYXA6ICR7aW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXZHYXB9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBncmlkLWFyZWE6IGluc3RydWN0aW9ucy1jaGVja2JveC1kaXY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYiLCJpbnN0cnVjdGlvbnNDaGVja2JveENoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJpbnN0cnVjdGlvbnNDaGVja2JveCIsImNoZWNrZWQiLCJpc0NoZWNrZWQiLCJvdmVybGF5SGlkZGVuIiwic2V0T3ZlcmxheUhpZGRlbiIsImNoaWxkRWxlbWVudHMiLCJJbnN0cnVjdGlvbnNDaGVja2JveCIsIm9uQ2hhbmdlIiwiSW5zdHJ1Y3Rpb25zQ2hlY2tib3hTcGFuIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImluc3RydWN0aW9uc0NoZWNrYm94RGl2R2FwIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFDQTs7O2VBQUE7OztvRUFuQ3NCO29CQUVFO21FQUVTO29FQUNJO3FCQUVKO3NCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFBLEFBQU1BLHdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxxQ0FBb0MsU0FBQ0MsT0FBT0M7WUFDMUMsSUFBTUMsdUJBQXVCRCxTQUN2QkUsVUFBVUQscUJBQXFCRSxTQUFTLElBQ3hDQyxnQkFBZ0JGLFNBQVUsR0FBRztZQUVuQ0csSUFBQUEsdUJBQWdCLEVBQUNEO1FBQ25COzs7a0JBUElQOztZQVNKUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0MscUJBQW9CO3dCQUFDQyxVQUFVLElBQUksQ0FBQ1YsaUNBQWlDOztrQ0FDdEUsb0JBQUNXLHNCQUF3QjtpQkFFMUI7WUFDSDs7O1dBaEJJWjtxQkFBZ0NhLGFBQU87QUFrQjNDLGlCQWxCSWIseUJBa0JHYyxXQUFVO0FBRWpCLGlCQXBCSWQseUJBb0JHZSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNqQiw0Q0FFaEJrQixrQ0FBMEIifQ==