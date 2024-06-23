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
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../checkbox"));
var _checkbox1 = /*#__PURE__*/ _interop_require_default(require("../span/checkbox"));
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
        "\n  \n  gap: ",
        ";\n  display: flex;\n  align-items: flex-start;\n  flex-direction: row;\n  justify-content: flex-start;  \n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CheckboxDiv = /*#__PURE__*/ function(Element) {
    _inherits(CheckboxDiv, Element);
    var _super = _create_super(CheckboxDiv);
    function CheckboxDiv() {
        _class_call_check(this, CheckboxDiv);
        return _super.apply(this, arguments);
    }
    _create_class(CheckboxDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var message = this.constructor.message;
                return [
                    /*#__PURE__*/ React.createElement(_checkbox.default, {
                        onChange: this.changeHandler
                    }),
                    /*#__PURE__*/ React.createElement(_checkbox1.default, null, message)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return CheckboxDiv;
}(_wrap_native_super(_easy.Element));
_define_property(CheckboxDiv, "tagName", "div");
_define_property(CheckboxDiv, "defaultProperties", {
    className: "checkbox"
});
var _default = (0, _easywithstyle.default)(CheckboxDiv)(_templateObject(), _styles.checkboxDivGap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3hcIjtcbmltcG9ydCBDaGVja2JveFNwYW4gZnJvbSBcIi4uL3NwYW4vY2hlY2tib3hcIjtcblxuaW1wb3J0IHsgY2hlY2tib3hEaXZHYXAgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIENoZWNrYm94RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSAvPixcbiAgICAgIDxDaGVja2JveFNwYW4+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9DaGVja2JveFNwYW4+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjaGVja2JveFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDaGVja2JveERpdilgXG4gIFxuICBnYXA6ICR7Y2hlY2tib3hEaXZHYXB9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAgXG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJDaGVja2JveERpdiIsImNoaWxkRWxlbWVudHMiLCJtZXNzYWdlIiwiY29uc3RydWN0b3IiLCJDaGVja2JveCIsIm9uQ2hhbmdlIiwiY2hhbmdlSGFuZGxlciIsIkNoZWNrYm94U3BhbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNoZWNrYm94RGl2R2FwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvQ0E7OztlQUFBOzs7b0VBbENzQjtvQkFFRTsrREFFSDtnRUFDSTtzQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSw0QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFVBQVksSUFBSSxDQUFDQyxXQUFXLENBQTVCRDtnQkFFUixPQUFRO2tDQUVOLG9CQUFDRSxpQkFBUTt3QkFBQ0MsVUFBVSxJQUFJLENBQUNDLGFBQWE7O2tDQUN0QyxvQkFBQ0Msa0JBQVksUUFDVkw7aUJBR0o7WUFDSDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7WUFDcEI7OztXQWhCSVQ7cUJBQW9CVSxhQUFPO0FBa0IvQixpQkFsQklWLGFBa0JHVyxXQUFVO0FBRWpCLGlCQXBCSVgsYUFvQkdZLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2QsZ0NBRWhCZSxzQkFBYyJ9