"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FullScreenModeMenuButton;
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
var FullScreenModeMenuButton = /*#__PURE__*/ function(MenuButton) {
    _inherits(FullScreenModeMenuButton, MenuButton);
    function FullScreenModeMenuButton() {
        _class_call_check(this, FullScreenModeMenuButton);
        var _this;
        _this = _call_super(this, FullScreenModeMenuButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            controller.fullScreenMode();
            event.preventDefault();
        });
        return _this;
    }
    _create_class(FullScreenModeMenuButton, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showFullScreenModeMenuButton = this.show.bind(this), hideFullScreenModeMenuButton = this.hide.bind(this); ///
                return {
                    showFullScreenModeMenuButton: showFullScreenModeMenuButton,
                    hideFullScreenModeMenuButton: hideFullScreenModeMenuButton
                };
            }
        }
    ]);
    return FullScreenModeMenuButton;
}(_menu.default);
_define_property(FullScreenModeMenuButton, "MenuSVG", _occamstyles.FullScreenModeMenuSVG);
_define_property(FullScreenModeMenuButton, "defaultProperties", {
    className: "full-screen-mode"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2Z1bGxTY3JlZW5Nb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGdWxsU2NyZWVuTW9kZU1lbnVTVkcgfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5cbmltcG9ydCBNZW51QnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5mdWxsU2NyZWVuTW9kZSgpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24sXG4gICAgICBoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgTWVudVNWRyA9IEZ1bGxTY3JlZW5Nb2RlTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZ1bGwtc2NyZWVuLW1vZGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJmdWxsU2NyZWVuTW9kZSIsInByZXZlbnREZWZhdWx0IiwicGFyZW50Q29udGV4dCIsInNob3dGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJzaG93IiwiYmluZCIsImhpZGVGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJoaWRlIiwiTWVudUJ1dHRvbiIsIk1lbnVTVkciLCJGdWxsU2NyZWVuTW9kZU1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkJBSmlCOzJEQUVmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsc0NBQ25CQyx3QkFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckJDLFdBQVdDLGNBQWM7WUFFekJILE1BQU1JLGNBQWM7UUFDdEI7OztrQkFMbUJOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLCtCQUErQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDbERDLCtCQUErQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUUvRCxPQUFRO29CQUNORiw4QkFBQUE7b0JBQ0FHLDhCQUFBQTtnQkFDRjtZQUNGOzs7V0FmbUJYO0VBQWlDYSxhQUFVO0FBaUI5RCxpQkFqQm1CYiwwQkFpQlpjLFdBQVVDLGtDQUFxQjtBQUV0QyxpQkFuQm1CZiwwQkFtQlpnQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9