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
var _back = /*#__PURE__*/ _interop_require_default(require("../button/back"));
var _instruction = /*#__PURE__*/ _interop_require_default(require("../paragraph/instruction"));
var _instructions = /*#__PURE__*/ _interop_require_default(require("../div/checkbox/instructions"));
var _constants = require("../../constants");
var _styles = require("../../styles");
var _customEventTypes = require("../../customEventTypes");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
        "\n  \n  display: flex;\n  max-width: ",
        ";\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: center;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InstructionsDiv = /*#__PURE__*/ function(Element) {
    _inherits(InstructionsDiv, Element);
    var _super = _create_super(InstructionsDiv);
    function InstructionsDiv() {
        _class_call_check(this, InstructionsDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "backButtonClickHandler", function(event, element) {
            var customEventType = _customEventTypes.BACK_BUTTON_CLICK_CUSTOM_EVENT_TYPE;
            _this.callCustomHandlers(customEventType, event, element);
        });
        return _this;
    }
    _create_class(InstructionsDiv, [
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
                var instructions = this.constructor.instructions, instructionParagraphs = instructions.map(function(instruction) {
                    return /*#__PURE__*/ React.createElement(_instruction.default, null, instruction);
                });
                return _to_consumable_array(instructionParagraphs).concat([
                    /*#__PURE__*/ React.createElement(_instruction.default, null, /*#__PURE__*/ React.createElement(_back.default, {
                        onClick: this.backButtonClickHandler
                    })),
                    /*#__PURE__*/ React.createElement(_instructions.default, null)
                ]);
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.hide();
            }
        }
    ]);
    return InstructionsDiv;
}(_wrap_native_super(_easy.Element));
_define_property(InstructionsDiv, "tagName", "div");
_define_property(InstructionsDiv, "defaultProperties", {
    className: "instructions"
});
var _default = (0, _easywithstyle.default)(InstructionsDiv)(_templateObject(), _styles.instructionsDivMaxWidth);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9pbnN0cnVjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2JhY2tcIjtcbmltcG9ydCBJbnN0cnVjdGlvblBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoL2luc3RydWN0aW9uXCI7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYgZnJvbSBcIi4uL2Rpdi9jaGVja2JveC9pbnN0cnVjdGlvbnNcIjtcblxuaW1wb3J0IHsgRkxFWCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGluc3RydWN0aW9uc0Rpdk1heFdpZHRoIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgQkFDS19CVVRUT05fQ0xJQ0tfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuXG5jbGFzcyBJbnN0cnVjdGlvbnNEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgYmFja0J1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEJBQ0tfQlVUVE9OX0NMSUNLX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBGTEVYO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCB7IGluc3RydWN0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBpbnN0cnVjdGlvblBhcmFncmFwaHMgPSBpbnN0cnVjdGlvbnMubWFwKChpbnN0cnVjdGlvbikgPT5cblxuICAgICAgICAgICAgPEluc3RydWN0aW9uUGFyYWdyYXBoPlxuICAgICAgICAgICAgICB7aW5zdHJ1Y3Rpb259XG4gICAgICAgICAgICA8L0luc3RydWN0aW9uUGFyYWdyYXBoPlxuXG4gICAgICAgICAgKVxuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIC4uLmluc3RydWN0aW9uUGFyYWdyYXBocyxcblxuICAgICAgICA8SW5zdHJ1Y3Rpb25QYXJhZ3JhcGg+XG4gICAgICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17dGhpcy5iYWNrQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuICAgICAgICA8L0luc3RydWN0aW9uUGFyYWdyYXBoPixcbiAgICAgICAgPEluc3RydWN0aW9uc0NoZWNrYm94RGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gIFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJpbnN0cnVjdGlvbnNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSW5zdHJ1Y3Rpb25zRGl2KWBcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogJHtpbnN0cnVjdGlvbnNEaXZNYXhXaWR0aH07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuYDtcbiJdLCJuYW1lcyI6WyJJbnN0cnVjdGlvbnNEaXYiLCJiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiQkFDS19CVVRUT05fQ0xJQ0tfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJzaG93IiwiZGlzcGxheSIsIkZMRVgiLCJjaGlsZEVsZW1lbnRzIiwiaW5zdHJ1Y3Rpb25zIiwiY29uc3RydWN0b3IiLCJpbnN0cnVjdGlvblBhcmFncmFwaHMiLCJtYXAiLCJpbnN0cnVjdGlvbiIsIkluc3RydWN0aW9uUGFyYWdyYXBoIiwiQmFja0J1dHRvbiIsIm9uQ2xpY2siLCJJbnN0cnVjdGlvbnNDaGVja2JveERpdiIsImluaXRpYWxpc2UiLCJoaWRlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImluc3RydWN0aW9uc0Rpdk1heFdpZHRoIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0REE7OztlQUFBOzs7b0VBMURzQjtvQkFFRTsyREFFRDtrRUFDVTttRUFDRzt5QkFFZjtzQkFDbUI7Z0NBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFBLEFBQU1BLGdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSwwQkFBeUIsU0FBQ0MsT0FBT0M7WUFDL0IsSUFBTUMsa0JBQWtCQyxxREFBbUM7WUFFM0QsTUFBS0Msa0JBQWtCLENBQUNGLGlCQUFpQkYsT0FBT0M7UUFDbEQ7OztrQkFMSUg7O1lBT0pPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVQyxlQUFJO2dCQUVwQixJQUFJLENBQUNELE9BQU8sQ0FBQ0E7WUFDZjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLGVBQWlCLElBQUksQ0FBQ0MsV0FBVyxDQUFqQ0QsY0FDRkUsd0JBQXdCRixhQUFhRyxHQUFHLENBQUMsU0FBQ0M7eUNBRXhDLG9CQUFDQyxvQkFBb0IsUUFDbEJEOztnQkFLWCxPQUFRLEFBRU4scUJBQUdGLDhCQUZHO2tDQUlKLG9CQUFDRyxvQkFBb0Isc0JBQ25CLG9CQUFDQyxhQUFVO3dCQUFDQyxTQUFTLElBQUksQ0FBQ2pCLHNCQUFzQjs7a0NBRWxELG9CQUFDa0IscUJBQXVCO2lCQUUzQjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsSUFBSTtZQUNYOzs7V0FyQ0lyQjtxQkFBd0JzQixhQUFPO0FBdUNuQyxpQkF2Q0l0QixpQkF1Q0d1QixXQUFXO0FBRWxCLGlCQXpDSXZCLGlCQXlDR3dCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzFCLG9DQUdWMkIsK0JBQXVCIn0=