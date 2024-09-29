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
var _buttons = /*#__PURE__*/ _interop_require_default(require("../div/buttons"));
var _checkboxes = /*#__PURE__*/ _interop_require_default(require("../div/checkboxes"));
var _state = require("../../state");
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
        "\n\n  left: 0;\n  bottom: 0;\n  display: block;\n  padding: ",
        ";\n  position: fixed;\n  border-top: 1px solid ",
        ";\n  background-color: ",
        ";\n  transform-origin: bottom left;\n    \n"
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
            key: "openMenu",
            value: function openMenu() {
                this.show();
            }
        },
        {
            key: "closeMenu",
            value: function closeMenu() {
                this.hide();
            }
        },
        {
            key: "updateMenuZoom",
            value: function updateMenuZoom() {
                var menuZoom = (0, _state.getMenuZoom)(), width = "".concat(100 / menuZoom, "%"), transform = "scale(".concat(menuZoom, ")"), css = {
                    width: width,
                    transform: transform
                };
                this.css(css);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_checkboxes.default, null),
                    /*#__PURE__*/ React.createElement(_buttons.default, null)
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var context = this.getContext(), openMenu = this.openMenu.bind(this), closeMenu = this.closeMenu.bind(this), updateMenuZoom = this.updateMenuZoom.bind(this);
                return _object_spread_props(_object_spread({}, context), {
                    openMenu: openMenu,
                    closeMenu: closeMenu,
                    updateMenuZoom: updateMenuZoom
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.hide();
            }
        }
    ]);
    return MenuDiv;
}(_wrap_native_super(_easy.Element));
_define_property(MenuDiv, "tagName", "div");
_define_property(MenuDiv, "defaultProperties", {
    className: "menu"
});
var _default = (0, _easywithstyle.default)(MenuDiv)(_templateObject(), _styles.menuDivPadding, _styles.borderColour, _styles.menuDivBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEJ1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9idXR0b25zXCI7XG5pbXBvcnQgQ2hlY2tib3hlc0RpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94ZXNcIjtcblxuaW1wb3J0IHsgZ2V0TWVudVpvb20gfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IGJvcmRlckNvbG91ciwgbWVudURpdlBhZGRpbmcsIG1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBNZW51RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9wZW5NZW51KCkge1xuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgY2xvc2VNZW51KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgdXBkYXRlTWVudVpvb20oKSB7XG4gICAgY29uc3QgbWVudVpvb20gPSBnZXRNZW51Wm9vbSgpLFxuICAgICAgICAgIHdpZHRoID0gYCR7MTAwL21lbnVab29tfSVgLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGBzY2FsZSgke21lbnVab29tfSlgLFxuICAgICAgICAgIGNzcyA9IHtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgdHJhbnNmb3JtXG4gICAgICAgICAgfTtcblxuICAgIHRoaXMuY3NzKGNzcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q2hlY2tib3hlc0Rpdi8+LFxuICAgICAgPEJ1dHRvbnNEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBvcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbG9zZU1lbnUgPSB0aGlzLmNsb3NlTWVudS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZU1lbnVab29tID0gdGhpcy51cGRhdGVNZW51Wm9vbS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgb3Blbk1lbnUsXG4gICAgICBjbG9zZU1lbnUsXG4gICAgICB1cGRhdGVNZW51Wm9vbVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWVudURpdilgXG5cbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogJHttZW51RGl2UGFkZGluZ307XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHttZW51RGl2QmFja2dyb3VuZENvbG91cn07XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJNZW51RGl2Iiwib3Blbk1lbnUiLCJzaG93IiwiY2xvc2VNZW51IiwiaGlkZSIsInVwZGF0ZU1lbnVab29tIiwibWVudVpvb20iLCJnZXRNZW51Wm9vbSIsIndpZHRoIiwidHJhbnNmb3JtIiwiY3NzIiwiY2hpbGRFbGVtZW50cyIsIkNoZWNrYm94ZXNEaXYiLCJCdXR0b25zRGl2IiwicGFyZW50Q29udGV4dCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmluZCIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwibWVudURpdlBhZGRpbmciLCJib3JkZXJDb2xvdXIiLCJtZW51RGl2QmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUVBOzs7ZUFBQTs7O29FQWpFc0I7b0JBRUU7OERBRUQ7aUVBQ0c7cUJBRUU7c0JBQzBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRFLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxJQUFJO1lBQ1g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxJQUFJO1lBQ1g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsSUFBQUEsa0JBQVcsS0FDdEJDLFFBQVEsQUFBQyxHQUFlLE9BQWIsTUFBSUYsVUFBUyxNQUN4QkcsWUFBWSxBQUFDLFNBQWlCLE9BQVRILFVBQVMsTUFDOUJJLE1BQU07b0JBQ0pGLE9BQUFBO29CQUNBQyxXQUFBQTtnQkFDRjtnQkFFTixJQUFJLENBQUNDLEdBQUcsQ0FBQ0E7WUFDWDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxtQkFBYTtrQ0FDZCxvQkFBQ0MsZ0JBQVU7aUJBRVo7WUFDSDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QmYsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ2dCLElBQUksQ0FBQyxJQUFJLEdBQ2xDZCxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDYyxJQUFJLENBQUMsSUFBSSxHQUNwQ1osaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxDQUFDWSxJQUFJLENBQUMsSUFBSTtnQkFFcEQsT0FBUSx3Q0FDSEY7b0JBQ0hkLFVBQUFBO29CQUNBRSxXQUFBQTtvQkFDQUUsZ0JBQUFBOztZQUVKOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ2QsSUFBSTtZQUNYOzs7V0E5Q0lKO3FCQUFnQm1CLGFBQU87QUFnRDNCLGlCQWhESW5CLFNBZ0RHb0IsV0FBVTtBQUVqQixpQkFsRElwQixTQWtER3FCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3ZCLDRCQUtad0Isc0JBQWMsRUFFREMsb0JBQVksRUFDaEJDLCtCQUF1QiJ9