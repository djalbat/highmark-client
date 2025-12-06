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
var _draftMode = /*#__PURE__*/ _interop_require_default(require("../button/menu/draftMode"));
var _embeddedMode = /*#__PURE__*/ _interop_require_default(require("../button/menu/embeddedMode"));
var _invertColours = /*#__PURE__*/ _interop_require_default(require("../button/menu/invertColours"));
var _fullScreenMode = /*#__PURE__*/ _interop_require_default(require("../button/menu/fullScreenMode"));
var _presentationMode = /*#__PURE__*/ _interop_require_default(require("../button/menu/presentationMode"));
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: ",
        ";\n  z-index: 1;\n  display: flex;\n  position: fixed;  \n  column-gap: ",
        ";\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  background-color: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MenuDiv = /*#__PURE__*/ function(Element) {
    _inherits(MenuDiv, Element);
    function MenuDiv() {
        _class_call_check(this, MenuDiv);
        return _call_super(this, MenuDiv, arguments);
    }
    _create_class(MenuDiv, [
        {
            key: "toggle",
            value: function toggle() {
                var showing = this.isShowing();
                showing ? this.hide() : this.show();
            }
        },
        {
            key: "show",
            value: function show() {
                var display = _constants.FLEX;
                this.display(display);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.hide();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_invertColours.default, null),
                    /*#__PURE__*/ React.createElement(_presentationMode.default, null),
                    /*#__PURE__*/ React.createElement(_draftMode.default, null),
                    /*#__PURE__*/ React.createElement(_embeddedMode.default, {
                        hidden: true
                    }),
                    /*#__PURE__*/ React.createElement(_fullScreenMode.default, null)
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), toggleMenuDiv = this.toggle.bind(this);
                return _object_spread_props(_object_spread({}, context), {
                    toggleMenuDiv: toggleMenuDiv
                });
            }
        }
    ]);
    return MenuDiv;
}(_wrap_native_super(_easy.Element));
_define_property(MenuDiv, "tagName", "div");
_define_property(MenuDiv, "defaultProperties", {
    className: "menu"
});
var _default = (0, _easywithstyle.default)(MenuDiv)(_templateObject(), _styles.menuDivPadding, _styles.menuDivColumnGap, _styles.menuDivBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IERyYWZ0TW9kZU1lbnVCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9tZW51L2RyYWZ0TW9kZVwiO1xuaW1wb3J0IEVtYmVkZGVkTW9kZU1lbnVCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9tZW51L2VtYmVkZGVkTW9kZVwiO1xuaW1wb3J0IEludmVydENvbG91cnNNZW51QnV0dG9uIGZyb20gXCIuLi9idXR0b24vbWVudS9pbnZlcnRDb2xvdXJzXCI7XG5pbXBvcnQgRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIGZyb20gXCIuLi9idXR0b24vbWVudS9mdWxsU2NyZWVuTW9kZVwiO1xuaW1wb3J0IFByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uIGZyb20gXCIuLi9idXR0b24vbWVudS9wcmVzZW50YXRpb25Nb2RlXCI7XG5cbmltcG9ydCB7IEZMRVggfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtZW51RGl2UGFkZGluZywgbWVudURpdkNvbHVtbkdhcCwgbWVudURpdkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1lbnVEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IHNob3dpbmcgPSB0aGlzLmlzU2hvd2luZygpO1xuXG4gICAgc2hvd2luZyA/XG4gICAgICB0aGlzLmhpZGUoKSA6XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gRkxFWDtcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW52ZXJ0Q29sb3Vyc01lbnVCdXR0b24vPixcbiAgICAgIDxQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbi8+LFxuICAgICAgPERyYWZ0TW9kZU1lbnVCdXR0b24vPixcbiAgICAgIDxFbWJlZGRlZE1vZGVNZW51QnV0dG9uIGhpZGRlbiAvPixcbiAgICAgIDxGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24vPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b2dnbGVNZW51RGl2ID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHRvZ2dsZU1lbnVEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWVudURpdilgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogJHttZW51RGl2UGFkZGluZ307XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDsgIFxuICBjb2x1bW4tZ2FwOiAke21lbnVEaXZDb2x1bW5HYXB9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHttZW51RGl2QmFja2dyb3VuZENvbG91cn07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJNZW51RGl2IiwidG9nZ2xlIiwic2hvd2luZyIsImlzU2hvd2luZyIsImhpZGUiLCJzaG93IiwiZGlzcGxheSIsIkZMRVgiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsIkludmVydENvbG91cnNNZW51QnV0dG9uIiwiUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJEcmFmdE1vZGVNZW51QnV0dG9uIiwiRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiIsImhpZGRlbiIsIkZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiIsInBhcmVudENvbnRleHQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInRvZ2dsZU1lbnVEaXYiLCJiaW5kIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm1lbnVEaXZQYWRkaW5nIiwibWVudURpdkNvbHVtbkdhcCIsIm1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtRUE7OztlQUFBOzs7b0VBakVzQjtvQkFFRTtnRUFFUTttRUFDRztvRUFDQztxRUFDQzt1RUFDRTt5QkFFbEI7c0JBQ3FEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVUsSUFBSSxDQUFDQyxTQUFTO2dCQUU5QkQsVUFDRSxJQUFJLENBQUNFLElBQUksS0FDUCxJQUFJLENBQUNDLElBQUk7WUFDZjs7O1lBRUFBLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVQyxlQUFJO2dCQUVwQixJQUFJLENBQUNELE9BQU8sQ0FBQ0E7WUFDZjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNKLElBQUk7WUFDWDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxzQkFBdUI7a0NBQ3hCLG9CQUFDQyx5QkFBMEI7a0NBQzNCLG9CQUFDQyxrQkFBbUI7a0NBQ3BCLG9CQUFDQyxxQkFBc0I7d0JBQUNDLFFBQUFBOztrQ0FDeEIsb0JBQUNDLHVCQUF3QjtpQkFFMUI7WUFDSDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZ0JBQWdCLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ29CLElBQUksQ0FBQyxJQUFJO2dCQUUzQyxPQUFRLHdDQUNISDtvQkFDSEUsZUFBQUE7O1lBRUo7OztXQTNDSXBCO3FCQUFnQnNCLGFBQU87QUE2QzNCLGlCQTdDSXRCLFNBNkNHdUIsV0FBVTtBQUVqQixpQkEvQ0l2QixTQStDR3dCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzFCLDRCQUtaMkIsc0JBQWMsRUFJWEMsd0JBQWdCLEVBSVZDLCtCQUF1QiJ9