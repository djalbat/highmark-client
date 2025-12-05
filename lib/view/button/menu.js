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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  fill: ",
        ";\n  width: ",
        ";\n  height: auto;\n  cursor: pointer;\n  display: flex;\n  background: transparent;\n  align-items: center;\n  justify-content: center;\n  \n  .active {\n    fill: ",
        ";\n    cursor: default;\n    filter: drop-shadow(0 0 3px ",
        ");  \n  }\n   \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MenuButton = /*#__PURE__*/ function(Button) {
    _inherits(MenuButton, Button);
    function MenuButton() {
        _class_call_check(this, MenuButton);
        return _call_super(this, MenuButton, arguments);
    }
    _create_class(MenuButton, [
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, _this_properties_active = _this_properties.active, active = _this_properties_active === void 0 ? false : _this_properties_active, _this_properties_hidden = _this_properties.hidden, hidden = _this_properties_hidden === void 0 ? false : _this_properties_hidden;
                if (hidden) {
                    this.hide();
                }
                if (active) {
                    this.activate();
                }
                this.onClick(this.clickHandler);
            }
        },
        {
            key: "isActive",
            value: function isActive() {
                var active = this.hasClass("active");
                return active;
            }
        },
        {
            key: "activate",
            value: function activate() {
                this.addClass("active");
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                this.removeClass("active");
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offClick(this.clickHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var MenuSVG = this.constructor.MenuSVG;
                return /*#__PURE__*/ React.createElement(MenuSVG, null);
            }
        }
    ]);
    return MenuButton;
}(_easy.Button);
_define_property(MenuButton, "ignoredProperties", [
    "hidden",
    "active"
]);
_define_property(MenuButton, "defaultProperties", {
    className: "menu"
});
var _default = (0, _easywithstyle.default)(MenuButton)(_templateObject(), _styles.menuButtonFill, _styles.menuButtonWidth, _styles.menuButtonDisabledFill, _styles.menuButtonDisabledColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBtZW51QnV0dG9uRmlsbCwgbWVudUJ1dHRvbldpZHRoLCBtZW51QnV0dG9uRGlzYWJsZWRGaWxsLCBtZW51QnV0dG9uRGlzYWJsZWRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSA9IGZhbHNlLCBoaWRkZW4gPSBmYWxzZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKGhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBpc0FjdGl2ZSgpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgeyBNZW51U1ZHIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPE1lbnVTVkcvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImhpZGRlblwiLFxuICAgIFwiYWN0aXZlXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWVudUJ1dHRvbilgXG5cbiAgZmlsbDogJHttZW51QnV0dG9uRmlsbH07XG4gIHdpZHRoOiAke21lbnVCdXR0b25XaWR0aH07XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAuYWN0aXZlIHtcbiAgICBmaWxsOiAke21lbnVCdXR0b25EaXNhYmxlZEZpbGx9O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAzcHggJHttZW51QnV0dG9uRGlzYWJsZWRDb2xvdXJ9KTsgIFxuICB9XG4gICBcbmA7XG4iXSwibmFtZXMiOlsiTWVudUJ1dHRvbiIsImRpZE1vdW50IiwicHJvcGVydGllcyIsImFjdGl2ZSIsImhpZGRlbiIsImhpZGUiLCJhY3RpdmF0ZSIsIm9uQ2xpY2siLCJjbGlja0hhbmRsZXIiLCJpc0FjdGl2ZSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJkZWFjdGl2YXRlIiwicmVtb3ZlQ2xhc3MiLCJ3aWxsVW5tb3VudCIsIm9mZkNsaWNrIiwiY2hpbGRFbGVtZW50cyIsIk1lbnVTVkciLCJCdXR0b24iLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwibWVudUJ1dHRvbkZpbGwiLCJtZW51QnV0dG9uV2lkdGgiLCJtZW51QnV0dG9uRGlzYWJsZWRGaWxsIiwibWVudUJ1dHRvbkRpc2FibGVkQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2REE7OztlQUFBOzs7b0VBM0RzQjtvQkFFQztzQkFFMkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEcsSUFBQSxBQUFNQSwyQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBMkMsbUJBQUEsSUFBSSxDQUFDQyxVQUFVLDRCQUFmLGlCQUFuQ0MsUUFBQUEsOENBQVMsMkRBQTBCLGlCQUFuQkMsUUFBQUEsOENBQVM7Z0JBRWpDLElBQUlBLFFBQVE7b0JBQ1YsSUFBSSxDQUFDQyxJQUFJO2dCQUNYO2dCQUVBLElBQUlGLFFBQVE7b0JBQ1YsSUFBSSxDQUFDRyxRQUFRO2dCQUNmO2dCQUVBLElBQUksQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ0MsWUFBWTtZQUNoQzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTixTQUFTLElBQUksQ0FBQ08sUUFBUSxDQUFDO2dCQUU3QixPQUFPUDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0ssUUFBUSxDQUFDO1lBQ2hCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1lBQ25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQ1AsWUFBWTtZQUNqQzs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFVBQVksSUFBSSxDQUFDLFdBQVcsQ0FBNUJBO2dCQUVSLHFCQUVFLG9CQUFDQTtZQUdMOzs7V0F6Q0lqQjtFQUFtQmtCLFlBQU07QUEyQzdCLGlCQTNDSWxCLFlBMkNHbUIscUJBQW9CO0lBQ3pCO0lBQ0E7Q0FDRDtBQUVELGlCQWhESW5CLFlBZ0RHb0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDdEIsK0JBRWZ1QixzQkFBYyxFQUNiQyx1QkFBZSxFQVNkQyw4QkFBc0IsRUFFQUMsZ0NBQXdCIn0=