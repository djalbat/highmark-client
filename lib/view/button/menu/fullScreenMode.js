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
var _sufficient = require("sufficient");
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
            _sufficient.controller.fullScreenMode();
            event.preventDefault();
        });
        return _this;
    }
    _create_class(FullScreenModeMenuButton, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showFullScreenModeMenuButton = this.show.bind(this), hideFullScreenModeMenuButton = this.hide.bind(this), enableFullScreenModeMenuButton = this.enable.bind(this), disableFullScreenModeMenuButton = this.disable.bind(this); ///
                return {
                    showFullScreenModeMenuButton: showFullScreenModeMenuButton,
                    hideFullScreenModeMenuButton: hideFullScreenModeMenuButton,
                    enableFullScreenModeMenuButton: enableFullScreenModeMenuButton,
                    disableFullScreenModeMenuButton: disableFullScreenModeMenuButton
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2Z1bGxTY3JlZW5Nb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEZ1bGxTY3JlZW5Nb2RlTWVudVNWRyB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiBleHRlbmRzIE1lbnVCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb250cm9sbGVyLmZ1bGxTY3JlZW5Nb2RlKCk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93RnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uID0gdGhpcy5oaWRlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBlbmFibGVGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24gPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24sXG4gICAgICBoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uLFxuICAgICAgZW5hYmxlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uLFxuICAgICAgZGlzYWJsZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIE1lbnVTVkcgPSBGdWxsU2NyZWVuTW9kZU1lbnVTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJmdWxsLXNjcmVlbi1tb2RlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiZnVsbFNjcmVlbk1vZGUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudENvbnRleHQiLCJzaG93RnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwic2hvdyIsImJpbmQiLCJoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwiaGlkZSIsImVuYWJsZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiIsImVuYWJsZSIsImRpc2FibGVGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b24iLCJkaXNhYmxlIiwiTWVudUJ1dHRvbiIsIk1lbnVTVkciLCJGdWxsU2NyZWVuTW9kZU1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MEJBTE07MkJBQ1c7MkRBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSx5Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxzQ0FDbkJDLHdCQUFBQSxnQkFBZSxTQUFDQyxPQUFPQztZQUNyQkMsc0JBQVUsQ0FBQ0MsY0FBYztZQUV6QkgsTUFBTUksY0FBYztRQUN0Qjs7O2tCQUxtQk47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsK0JBQStCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNsREMsK0JBQStCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUNsREcsaUNBQWlDLElBQUksQ0FBQ0MsTUFBTSxDQUFDSixJQUFJLENBQUMsSUFBSSxHQUN0REssa0NBQWtDLElBQUksQ0FBQ0MsT0FBTyxDQUFDTixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRXJFLE9BQVE7b0JBQ05GLDhCQUFBQTtvQkFDQUcsOEJBQUFBO29CQUNBRSxnQ0FBQUE7b0JBQ0FFLGlDQUFBQTtnQkFDRjtZQUNGOzs7V0FuQm1CZjtFQUFpQ2lCLGFBQVU7QUFxQjlELGlCQXJCbUJqQiwwQkFxQlprQixXQUFVQyxrQ0FBcUI7QUFFdEMsaUJBdkJtQm5CLDBCQXVCWm9CLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=