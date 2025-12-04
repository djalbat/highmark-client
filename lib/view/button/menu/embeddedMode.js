"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbeddedModeMenuButton;
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
var EmbeddedModeMenuButton = /*#__PURE__*/ function(MenuButton) {
    _inherits(EmbeddedModeMenuButton, MenuButton);
    function EmbeddedModeMenuButton() {
        _class_call_check(this, EmbeddedModeMenuButton);
        var _this;
        _this = _call_super(this, EmbeddedModeMenuButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            controller.embeddedMode();
            event.preventDefault();
        });
        return _this;
    }
    _create_class(EmbeddedModeMenuButton, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showEmbeddedModeMenuButton = this.show.bind(this), hideEmbeddedModeMenuButton = this.hide.bind(this), enableEmbeddedModeMenuButton = this.enable.bind(this), disableEmbeddedModeMenuButton = this.disable.bind(this); ///
                return {
                    showEmbeddedModeMenuButton: showEmbeddedModeMenuButton,
                    hideEmbeddedModeMenuButton: hideEmbeddedModeMenuButton,
                    enableEmbeddedModeMenuButton: enableEmbeddedModeMenuButton,
                    disableEmbeddedModeMenuButton: disableEmbeddedModeMenuButton
                };
            }
        }
    ]);
    return EmbeddedModeMenuButton;
}(_menu.default);
_define_property(EmbeddedModeMenuButton, "MenuSVG", _occamstyles.EmbeddedModeMenuSVG);
_define_property(EmbeddedModeMenuButton, "defaultProperties", {
    className: "embedded-mode"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2VtYmVkZGVkTW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRW1iZWRkZWRNb2RlTWVudVNWRyB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkZGVkTW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5lbWJlZGRlZE1vZGUoKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFbWJlZGRlZE1vZGVNZW51QnV0dG9uID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgZW5hYmxlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBkaXNhYmxlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dFbWJlZGRlZE1vZGVNZW51QnV0dG9uLFxuICAgICAgaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24sXG4gICAgICBlbmFibGVFbWJlZGRlZE1vZGVNZW51QnV0dG9uLFxuICAgICAgZGlzYWJsZUVtYmVkZGVkTW9kZU1lbnVCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBNZW51U1ZHID0gRW1iZWRkZWRNb2RlTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVtYmVkZGVkLW1vZGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiZW1iZWRkZWRNb2RlIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0VtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJzaG93IiwiYmluZCIsImhpZGVFbWJlZGRlZE1vZGVNZW51QnV0dG9uIiwiaGlkZSIsImVuYWJsZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJlbmFibGUiLCJkaXNhYmxlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiIsImRpc2FibGUiLCJNZW51QnV0dG9uIiwiTWVudVNWRyIsIkVtYmVkZGVkTW9kZU1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkJBSmU7MkRBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxvQ0FDbkJDLHdCQUFBQSxnQkFBZSxTQUFDQyxPQUFPQztZQUNyQkMsV0FBV0MsWUFBWTtZQUV2QkgsTUFBTUksY0FBYztRQUN0Qjs7O2tCQUxtQk47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsNkJBQTZCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNoREMsNkJBQTZCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUNoREcsK0JBQStCLElBQUksQ0FBQ0MsTUFBTSxDQUFDSixJQUFJLENBQUMsSUFBSSxHQUNwREssZ0NBQWdDLElBQUksQ0FBQ0MsT0FBTyxDQUFDTixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRW5FLE9BQVE7b0JBQ05GLDRCQUFBQTtvQkFDQUcsNEJBQUFBO29CQUNBRSw4QkFBQUE7b0JBQ0FFLCtCQUFBQTtnQkFDRjtZQUNGOzs7V0FuQm1CZjtFQUErQmlCLGFBQVU7QUFxQjVELGlCQXJCbUJqQix3QkFxQlprQixXQUFVQyxnQ0FBbUI7QUFFcEMsaUJBdkJtQm5CLHdCQXVCWm9CLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=