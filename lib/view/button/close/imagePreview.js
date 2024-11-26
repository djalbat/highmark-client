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
var _close = /*#__PURE__*/ _interop_require_default(require("../../button/close"));
var _styles = require("../../../styles");
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
        "\n\n  top: ",
        ";\n  right: ",
        ";\n  position: absolute;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ImagePreviewCloseButton = /*#__PURE__*/ function(CloseButton) {
    _inherits(ImagePreviewCloseButton, CloseButton);
    function ImagePreviewCloseButton() {
        _class_call_check(this, ImagePreviewCloseButton);
        return _call_super(this, ImagePreviewCloseButton, arguments);
    }
    return ImagePreviewCloseButton;
}(_close.default);
_define_property(ImagePreviewCloseButton, "defaultProperties", {
    className: "image-preview-close-button"
});
var _default = (0, _easywithstyle.default)(ImagePreviewCloseButton)(_templateObject(), _styles.imagePreviewCloseButtonTop, _styles.imagePreviewCloseButtonLeft);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9jbG9zZS9pbWFnZVByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL2Nsb3NlXCI7XG5cbmltcG9ydCB7IGltYWdlUHJldmlld0Nsb3NlQnV0dG9uVG9wLCBpbWFnZVByZXZpZXdDbG9zZUJ1dHRvbkxlZnQgfSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEltYWdlUHJldmlld0Nsb3NlQnV0dG9uIGV4dGVuZHMgQ2xvc2VCdXR0b24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImltYWdlLXByZXZpZXctY2xvc2UtYnV0dG9uXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEltYWdlUHJldmlld0Nsb3NlQnV0dG9uKWBcblxuICB0b3A6ICR7aW1hZ2VQcmV2aWV3Q2xvc2VCdXR0b25Ub3B9O1xuICByaWdodDogJHtpbWFnZVByZXZpZXdDbG9zZUJ1dHRvbkxlZnR9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJJbWFnZVByZXZpZXdDbG9zZUJ1dHRvbiIsIkNsb3NlQnV0dG9uIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJpbWFnZVByZXZpZXdDbG9zZUJ1dHRvblRvcCIsImltYWdlUHJldmlld0Nsb3NlQnV0dG9uTGVmdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7b0VBWnNCOzREQUVFO3NCQUVnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhFLElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztXQUFBQTtFQUFnQ0MsY0FBVztBQUMvQyxpQkFESUQseUJBQ0dFLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ0osNENBRWhCSyxrQ0FBMEIsRUFDeEJDLG1DQUEyQiJ9