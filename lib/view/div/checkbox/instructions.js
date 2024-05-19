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
var _constants = require("../../../constants");
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
        "\n\n  display: flex;\n  grid-area: instructions-checkbox-div;\n  font-size: 1em;\n  align-items: center;\n  justify-self: start;\n  flex-direction: row;\n  justify-content: start;\n  \n  gap: ",
        ";\n\n  @media (orientation: landscape) {\n  \n    gap: ",
        ";\n\n  }\n  \n"
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
            key: "show",
            value: function show() {
                var display = _constants.FLEX;
                this.display(display);
            }
        },
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
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showInstructionsCheckboxDiv = this.show.bind(this), hideInstructionsCheckboxDiv = this.hide.bind(this); ///
                return {
                    showInstructionsCheckboxDiv: showInstructionsCheckboxDiv,
                    hideInstructionsCheckboxDiv: hideInstructionsCheckboxDiv
                };
            }
        }
    ]);
    return InstructionsCheckboxDiv;
}(_wrap_native_super(_easy.Element));
_define_property(InstructionsCheckboxDiv, "tagName", "div");
_define_property(InstructionsCheckboxDiv, "defaultProperties", {
    className: "instructions-checkbox"
});
var _default = (0, _easywithstyle.default)(InstructionsCheckboxDiv)(_templateObject(), _styles.instructionsCheckboxDivPortraitGap, _styles.instructionsCheckboxDivLandscapeGap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9pbnN0cnVjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zQ2hlY2tib3ggZnJvbSBcIi4uLy4uL2NoZWNrYm94L2luc3RydWN0aW9uc1wiO1xuaW1wb3J0IEluc3RydWN0aW9uc0NoZWNrYm94U3BhbiBmcm9tIFwiLi4vLi4vc3Bhbi9jaGVja2JveC9pbnN0cnVjdGlvbnNcIjtcblxuaW1wb3J0IHsgRkxFWCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHNldE92ZXJsYXlIaWRkZW4gfSBmcm9tIFwiLi4vLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGluc3RydWN0aW9uc0NoZWNrYm94RGl2UG9ydHJhaXRHYXAsIGluc3RydWN0aW9uc0NoZWNrYm94RGl2TGFuZHNjYXBlR2FwIH0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBJbnN0cnVjdGlvbnNDaGVja2JveERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBpbnN0cnVjdGlvbnNDaGVja2JveENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNDaGVja2JveCA9IGVsZW1lbnQsIC8vL1xuICAgICAgICAgIGNoZWNrZWQgPSBpbnN0cnVjdGlvbnNDaGVja2JveC5pc0NoZWNrZWQoKSxcbiAgICAgICAgICBvdmVybGF5SGlkZGVuID0gY2hlY2tlZDsgIC8vL1xuXG4gICAgc2V0T3ZlcmxheUhpZGRlbihvdmVybGF5SGlkZGVuKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IEZMRVg7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW5zdHJ1Y3Rpb25zQ2hlY2tib3ggb25DaGFuZ2U9e3RoaXMuaW5zdHJ1Y3Rpb25zQ2hlY2tib3hDaGFuZ2VIYW5kbGVyfSAvPixcbiAgICAgIDxJbnN0cnVjdGlvbnNDaGVja2JveFNwYW4vPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dJbnN0cnVjdGlvbnNDaGVja2JveERpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dJbnN0cnVjdGlvbnNDaGVja2JveERpdixcbiAgICAgIGhpZGVJbnN0cnVjdGlvbnNDaGVja2JveERpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW5zdHJ1Y3Rpb25zLWNoZWNrYm94XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEluc3RydWN0aW9uc0NoZWNrYm94RGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBncmlkLWFyZWE6IGluc3RydWN0aW9ucy1jaGVja2JveC1kaXY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBcbiAgZ2FwOiAke2luc3RydWN0aW9uc0NoZWNrYm94RGl2UG9ydHJhaXRHYXB9O1xuXG4gIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBcbiAgICBnYXA6ICR7aW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXZMYW5kc2NhcGVHYXB9O1xuXG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkluc3RydWN0aW9uc0NoZWNrYm94RGl2IiwiaW5zdHJ1Y3Rpb25zQ2hlY2tib3hDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW5zdHJ1Y3Rpb25zQ2hlY2tib3giLCJjaGVja2VkIiwiaXNDaGVja2VkIiwib3ZlcmxheUhpZGRlbiIsInNldE92ZXJsYXlIaWRkZW4iLCJzaG93IiwiZGlzcGxheSIsIkZMRVgiLCJjaGlsZEVsZW1lbnRzIiwiSW5zdHJ1Y3Rpb25zQ2hlY2tib3giLCJvbkNoYW5nZSIsIkluc3RydWN0aW9uc0NoZWNrYm94U3BhbiIsInBhcmVudENvbnRleHQiLCJzaG93SW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYiLCJiaW5kIiwiaGlkZUluc3RydWN0aW9uc0NoZWNrYm94RGl2IiwiaGlkZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJpbnN0cnVjdGlvbnNDaGVja2JveERpdlBvcnRyYWl0R2FwIiwiaW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXZMYW5kc2NhcGVHYXAiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNEQTs7O2VBQUE7OztvRUFwRHNCO29CQUVFO21FQUVTO29FQUNJO3lCQUVoQjtxQkFDWTtzQkFDdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RixJQUFBLEFBQU1BLHdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxxQ0FBb0MsU0FBQ0MsT0FBT0M7WUFDMUMsSUFBTUMsdUJBQXVCRCxTQUN2QkUsVUFBVUQscUJBQXFCRSxTQUFTLElBQ3hDQyxnQkFBZ0JGLFNBQVUsR0FBRztZQUVuQ0csSUFBQUEsdUJBQWdCLEVBQUNEO1FBQ25COzs7a0JBUElQOztZQVNKUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMsZUFBSTtnQkFFcEIsSUFBSSxDQUFDRCxPQUFPLENBQUNBO1lBQ2Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0MscUJBQW9CO3dCQUFDQyxVQUFVLElBQUksQ0FBQ2IsaUNBQWlDOztrQ0FDdEUsb0JBQUNjLHNCQUF3QjtpQkFFMUI7WUFDSDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyw4QkFBOEIsSUFBSSxDQUFDUixJQUFJLENBQUNTLElBQUksQ0FBQyxJQUFJLEdBQ2pEQyw4QkFBOEIsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFN0QsT0FBUTtvQkFDTkQsNkJBQUFBO29CQUNBRSw2QkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBaENJbkI7cUJBQWdDcUIsYUFBTztBQWtDM0MsaUJBbENJckIseUJBa0NHc0IsV0FBVTtBQUVqQixpQkFwQ0l0Qix5QkFvQ0d1QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN6Qiw0Q0FVaEIwQiwwQ0FBa0MsRUFJaENDLDJDQUFtQyJ9