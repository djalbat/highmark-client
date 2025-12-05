"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PresentationModeMenuButton;
    }
});
var _occamstyles = require("occam-styles");
var _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
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
var PresentationModeMenuButton = /*#__PURE__*/ function(MenuButton) {
    _inherits(PresentationModeMenuButton, MenuButton);
    function PresentationModeMenuButton() {
        _class_call_check(this, PresentationModeMenuButton);
        var _this;
        _this = _call_super(this, PresentationModeMenuButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            controller.presentationMode();
            event.preventDefault();
        });
        return _this;
    }
    _create_class(PresentationModeMenuButton, [
        {
            key: "parentContext",
            value: function parentContext() {
                var activatePresentationModeMenuButton = this.activate.bind(this), deactivatePresentationModeMenuButton = this.deactivate.bind(this); ///
                return {
                    activatePresentationModeMenuButton: activatePresentationModeMenuButton,
                    deactivatePresentationModeMenuButton: deactivatePresentationModeMenuButton
                };
            }
        }
    ]);
    return PresentationModeMenuButton;
}(_menu.default);
_define_property(PresentationModeMenuButton, "MenuSVG", _occamstyles.PresentationModeMenuSVG);
_define_property(PresentationModeMenuButton, "defaultProperties", {
    className: "presentation-mode"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L3ByZXNlbnRhdGlvbk1vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFByZXNlbnRhdGlvbk1vZGVNZW51U1ZHIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5wcmVzZW50YXRpb25Nb2RlKCk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uID0gdGhpcy5hY3RpdmF0ZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZGVhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uID0gdGhpcy5kZWFjdGl2YXRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbixcbiAgICAgIGRlYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIE1lbnVTVkcgPSBQcmVzZW50YXRpb25Nb2RlTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInByZXNlbnRhdGlvbi1tb2RlXCIsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwicHJlc2VudGF0aW9uTW9kZSIsInByZXZlbnREZWZhdWx0IiwicGFyZW50Q29udGV4dCIsImFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJhY3RpdmF0ZSIsImJpbmQiLCJkZWFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJkZWFjdGl2YXRlIiwiTWVudUJ1dHRvbiIsIk1lbnVTVkciLCJQcmVzZW50YXRpb25Nb2RlTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKbUI7MkRBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsd0NBQ25CQyx3QkFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckJDLFdBQVdDLGdCQUFnQjtZQUUzQkgsTUFBTUksY0FBYztRQUN0Qjs7O2tCQUxtQk47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUNBQXFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUM1REMsdUNBQXVDLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRTdFLE9BQVE7b0JBQ05GLG9DQUFBQTtvQkFDQUcsc0NBQUFBO2dCQUNGO1lBQ0Y7OztXQWZtQlg7RUFBbUNhLGFBQVU7QUFpQmhFLGlCQWpCbUJiLDRCQWlCWmMsV0FBVUMsb0NBQXVCO0FBRXhDLGlCQW5CbUJmLDRCQW1CWmdCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=