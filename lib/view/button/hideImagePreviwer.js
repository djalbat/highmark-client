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
        "\n\n  width: fit-content;\n  color: ",
        ";\n  cursor: pointer;\n  padding: 0;\n  font-size: ",
        ";\n  grid-area: hide-overlay-button;\n  background: transparent;\n  justify-self: end;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var HideImagePreviewerButton = /*#__PURE__*/ function(Button) {
    _inherits(HideImagePreviewerButton, Button);
    function HideImagePreviewerButton() {
        _class_call_check(this, HideImagePreviewerButton);
        return _call_super(this, HideImagePreviewerButton, arguments);
    }
    _create_class(HideImagePreviewerButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "╳";
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showHideImagePreviewerButton = this.show.bind(this), hideHideImagePreviewerButton = this.hide.bind(this); ///
                return {
                    showHideImagePreviewerButton: showHideImagePreviewerButton,
                    hideHideImagePreviewerButton: hideHideImagePreviewerButton
                };
            }
        }
    ]);
    return HideImagePreviewerButton;
}(_easy.Button);
_define_property(HideImagePreviewerButton, "defaultProperties", {
    className: "hide-image-previewer"
});
var _default = (0, _easywithstyle.default)(HideImagePreviewerButton)(_templateObject(), _styles.hideOverlayButtonColour, _styles.hideOverlayButtonFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9oaWRlSW1hZ2VQcmV2aXdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgaGlkZU92ZXJsYXlCdXR0b25Db2xvdXIsIGhpZGVPdmVybGF5QnV0dG9uRm9udFNpemUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEhpZGVJbWFnZVByZXZpZXdlckJ1dHRvbiBleHRlbmRzIEJ1dHRvbiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwi4pWzXCI7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dIaWRlSW1hZ2VQcmV2aWV3ZXJCdXR0b24gPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZUhpZGVJbWFnZVByZXZpZXdlckJ1dHRvbiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0hpZGVJbWFnZVByZXZpZXdlckJ1dHRvbixcbiAgICAgIGhpZGVIaWRlSW1hZ2VQcmV2aWV3ZXJCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaGlkZS1pbWFnZS1wcmV2aWV3ZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSGlkZUltYWdlUHJldmlld2VyQnV0dG9uKWBcblxuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiAke2hpZGVPdmVybGF5QnV0dG9uQ29sb3VyfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6ICR7aGlkZU92ZXJsYXlCdXR0b25Gb250U2l6ZX07XG4gIGdyaWQtYXJlYTogaGlkZS1vdmVybGF5LWJ1dHRvbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkhpZGVJbWFnZVByZXZpZXdlckJ1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0hpZGVJbWFnZVByZXZpZXdlckJ1dHRvbiIsInNob3ciLCJiaW5kIiwiaGlkZUhpZGVJbWFnZVByZXZpZXdlckJ1dHRvbiIsImhpZGUiLCJCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImhpZGVPdmVybGF5QnV0dG9uQ29sb3VyIiwiaGlkZU92ZXJsYXlCdXR0b25Gb250U2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEJBOzs7ZUFBQTs7O29FQTFCc0I7b0JBRUM7c0JBRTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLCtCQUErQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDbERDLCtCQUErQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUU5RCxPQUFRO29CQUNORiw4QkFBQUE7b0JBQ0FHLDhCQUFBQTtnQkFDRjtZQUNGOzs7V0FiSU47RUFBaUNRLFlBQU07QUFlM0MsaUJBZklSLDBCQWVHUyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNYLDZDQUdkWSwrQkFBdUIsRUFHbkJDLGlDQUF5QiJ9