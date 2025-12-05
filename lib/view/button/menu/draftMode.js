"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DraftModeMenuButton;
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
var DraftModeMenuButton = /*#__PURE__*/ function(MenuButton) {
    _inherits(DraftModeMenuButton, MenuButton);
    function DraftModeMenuButton() {
        _class_call_check(this, DraftModeMenuButton);
        var _this;
        _this = _call_super(this, DraftModeMenuButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            controller.draftMode();
            event.preventDefault();
        });
        return _this;
    }
    _create_class(DraftModeMenuButton, [
        {
            key: "parentContext",
            value: function parentContext() {
                var activateDraftModeMenuButton = this.activate.bind(this), deactivateDraftModeMenuButton = this.deactivate.bind(this); ///
                return {
                    activateDraftModeMenuButton: activateDraftModeMenuButton,
                    deactivateDraftModeMenuButton: deactivateDraftModeMenuButton
                };
            }
        }
    ]);
    return DraftModeMenuButton;
}(_menu.default);
_define_property(DraftModeMenuButton, "MenuSVG", _occamstyles.DraftModeMenuSVG);
_define_property(DraftModeMenuButton, "defaultProperties", {
    className: "draft-mode"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2RyYWZ0TW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRHJhZnRNb2RlTWVudVNWRyB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0TW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5kcmFmdE1vZGUoKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbiA9IHRoaXMuYWN0aXZhdGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24gPSB0aGlzLmRlYWN0aXZhdGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbixcbiAgICAgIGRlYWN0aXZhdGVEcmFmdE1vZGVNZW51QnV0dG9uXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgTWVudVNWRyA9IERyYWZ0TW9kZU1lbnVTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkcmFmdC1tb2RlXCIsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRHJhZnRNb2RlTWVudUJ1dHRvbiIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJkcmFmdE1vZGUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudENvbnRleHQiLCJhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24iLCJhY3RpdmF0ZSIsImJpbmQiLCJkZWFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbiIsImRlYWN0aXZhdGUiLCJNZW51QnV0dG9uIiwiTWVudVNWRyIsIkRyYWZ0TW9kZU1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkJBSlk7MkRBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxpQ0FDbkJDLHdCQUFBQSxnQkFBZSxTQUFDQyxPQUFPQztZQUNyQkMsV0FBV0MsU0FBUztZQUVwQkgsTUFBTUksY0FBYztRQUN0Qjs7O2tCQUxtQk47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsOEJBQThCLElBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUNyREMsZ0NBQWdDLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRXJFLE9BQVE7b0JBQ05GLDZCQUFBQTtvQkFDQUcsK0JBQUFBO2dCQUNGO1lBQ0Y7OztXQWZtQlg7RUFBNEJhLGFBQVU7QUFpQnpELGlCQWpCbUJiLHFCQWlCWmMsV0FBVUMsNkJBQWdCO0FBRWpDLGlCQW5CbUJmLHFCQW1CWmdCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=