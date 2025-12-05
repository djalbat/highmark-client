"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InvertColoursMenuButton;
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
var InvertColoursMenuButton = /*#__PURE__*/ function(MenuButton) {
    _inherits(InvertColoursMenuButton, MenuButton);
    function InvertColoursMenuButton() {
        _class_call_check(this, InvertColoursMenuButton);
        var _this;
        _this = _call_super(this, InvertColoursMenuButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            var active = _this.isActive();
            if (active) {
                _this.deactivate();
                controller.revertColours();
            } else {
                _this.activate();
                controller.invertColours();
            }
            event.preventDefault();
        });
        return _this;
    }
    return InvertColoursMenuButton;
}(_menu.default);
_define_property(InvertColoursMenuButton, "MenuSVG", _occamstyles.InvertColoursMenuSVG);
_define_property(InvertColoursMenuButton, "defaultProperties", {
    className: "invert-colours"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2ludmVydENvbG91cnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEludmVydENvbG91cnNNZW51U1ZHIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZXJ0Q29sb3Vyc01lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG5cbiAgICAgIGNvbnRyb2xsZXIucmV2ZXJ0Q29sb3VycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XG5cbiAgICAgIGNvbnRyb2xsZXIuaW52ZXJ0Q29sb3VycygpO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzdGF0aWMgTWVudVNWRyA9IEludmVydENvbG91cnNNZW51U1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW52ZXJ0LWNvbG91cnNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkludmVydENvbG91cnNNZW51QnV0dG9uIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJkZWFjdGl2YXRlIiwiY29udHJvbGxlciIsInJldmVydENvbG91cnMiLCJhY3RpdmF0ZSIsImludmVydENvbG91cnMiLCJwcmV2ZW50RGVmYXVsdCIsIk1lbnVCdXR0b24iLCJNZW51U1ZHIiwiSW52ZXJ0Q29sb3Vyc01lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7MkJBSmdCOzJEQUVkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLHFDQUNuQkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLElBQU1DLFNBQVMsTUFBS0MsUUFBUTtZQUU1QixJQUFJRCxRQUFRO2dCQUNWLE1BQUtFLFVBQVU7Z0JBRWZDLFdBQVdDLGFBQWE7WUFDMUIsT0FBTztnQkFDTCxNQUFLQyxRQUFRO2dCQUViRixXQUFXRyxhQUFhO1lBQzFCO1lBRUFSLE1BQU1TLGNBQWM7UUFDdEI7OztXQWZtQlg7RUFBZ0NZLGFBQVU7QUFpQjdELGlCQWpCbUJaLHlCQWlCWmEsV0FBVUMsaUNBQW9CO0FBRXJDLGlCQW5CbUJkLHlCQW1CWmUscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==