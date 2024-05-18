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
        ";\n  display: flex;\n  padding: ",
        ";\n  font-size: inherit;\n  align-self: flex-start;\n  align-items: center;\n  flex-direction: row;\n  justify-content: flex-start;\n  \n"
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
var _default = (0, _easywithstyle.default)(InstructionsCheckboxDiv)(_templateObject(), _styles.instructionsCheckboxDivGap, _styles.instructionsCheckboxDivPadding);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9pbnN0cnVjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zQ2hlY2tib3ggZnJvbSBcIi4uLy4uL2NoZWNrYm94L2luc3RydWN0aW9uc1wiO1xuaW1wb3J0IEluc3RydWN0aW9uc0NoZWNrYm94U3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9jaGVja2JveC9pbnN0cnVjdGlvbnNcIjtcblxuaW1wb3J0IHsgc2V0T3ZlcmxheUhpZGRlbiB9IGZyb20gXCIuLi8uLi8uLi9zdGF0ZVwiO1xuaW1wb3J0IHsgaW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXZHYXAsIGluc3RydWN0aW9uc0NoZWNrYm94RGl2UGFkZGluZyB9IGZyb20gXCIuLi8uLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgaW5zdHJ1Y3Rpb25zQ2hlY2tib3hDaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zQ2hlY2tib3ggPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjaGVja2VkID0gaW5zdHJ1Y3Rpb25zQ2hlY2tib3guaXNDaGVja2VkKCksXG4gICAgICAgICAgb3ZlcmxheUhpZGRlbiA9IGNoZWNrZWQ7ICAvLy9cblxuICAgIHNldE92ZXJsYXlIaWRkZW4ob3ZlcmxheUhpZGRlbik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW5zdHJ1Y3Rpb25zQ2hlY2tib3ggb25DaGFuZ2U9e3RoaXMuaW5zdHJ1Y3Rpb25zQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSAvPixcbiAgICAgIDxJbnN0cnVjdGlvbnNDaGVja2JveFNwYW4vPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJpbnN0cnVjdGlvbnMtY2hlY2tib3hcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYpYFxuXG4gIGdhcDogJHtpbnN0cnVjdGlvbnNDaGVja2JveERpdkdhcH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6ICR7aW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXZQYWRkaW5nfTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJJbnN0cnVjdGlvbnNDaGVja2JveERpdiIsImluc3RydWN0aW9uc0NoZWNrYm94Q2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImluc3RydWN0aW9uc0NoZWNrYm94IiwiY2hlY2tlZCIsImlzQ2hlY2tlZCIsIm92ZXJsYXlIaWRkZW4iLCJzZXRPdmVybGF5SGlkZGVuIiwiY2hpbGRFbGVtZW50cyIsIkluc3RydWN0aW9uc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJJbnN0cnVjdGlvbnNDaGVja2JveFNwYW4iLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiaW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXZHYXAiLCJpbnN0cnVjdGlvbnNDaGVja2JveERpdlBhZGRpbmciXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFDQTs7O2VBQUE7OztvRUFuQ3NCO29CQUVFO21FQUVTO29FQUNJO3FCQUVKO3NCQUMwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQUEsQUFBTUEsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLHFDQUFvQyxTQUFDQyxPQUFPQztZQUMxQyxJQUFNQyx1QkFBdUJELFNBQ3ZCRSxVQUFVRCxxQkFBcUJFLFNBQVMsSUFDeENDLGdCQUFnQkYsU0FBVSxHQUFHO1lBRW5DRyxJQUFBQSx1QkFBZ0IsRUFBQ0Q7UUFDbkI7OztrQkFQSVA7O1lBU0pTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxxQkFBb0I7d0JBQUNDLFVBQVUsSUFBSSxDQUFDVixpQ0FBaUM7O2tDQUN0RSxvQkFBQ1csc0JBQXdCO2lCQUUxQjtZQUNIOzs7V0FoQklaO3FCQUFnQ2EsYUFBTztBQWtCM0MsaUJBbEJJYix5QkFrQkdjLFdBQVU7QUFFakIsaUJBcEJJZCx5QkFvQkdlLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2pCLDRDQUVoQmtCLGtDQUEwQixFQUV0QkMsc0NBQThCIn0=