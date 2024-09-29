"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CloseMenuButton;
    }
});
var _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
var _close = /*#__PURE__*/ _interop_require_default(require("../../svg/menu/close"));
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
var CloseMenuButton = /*#__PURE__*/ function(MenuButton) {
    _inherits(CloseMenuButton, MenuButton);
    function CloseMenuButton() {
        _class_call_check(this, CloseMenuButton);
        var _this;
        _this = _call_super(this, CloseMenuButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            controller.closeMenu();
        });
        return _this;
    }
    return CloseMenuButton;
}(_menu.default);
_define_property(CloseMenuButton, "SVG", _close.default);
_define_property(CloseMenuButton, "defaultProperties", {
    className: "close"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2Nsb3NlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWVudUJ1dHRvbiBmcm9tIFwiLi4vLi4vYnV0dG9uL21lbnVcIjtcbmltcG9ydCBDbG9zZU1lbnVTVkcgZnJvbSBcIi4uLy4uL3N2Zy9tZW51L2Nsb3NlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlTWVudUJ1dHRvbiBleHRlbmRzIE1lbnVCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb250cm9sbGVyLmNsb3NlTWVudSgpO1xuICB9XG5cbiAgc3RhdGljIFNWRyA9IENsb3NlTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNsb3NlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDbG9zZU1lbnVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiY2xvc2VNZW51IiwiTWVudUJ1dHRvbiIsIlNWRyIsIkNsb3NlTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFIRTs0REFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2tDQUFBQSw2QkFDbkJDLHdCQUFBQSxnQkFBZSxTQUFDQyxPQUFPQztZQUNyQkMsV0FBV0MsU0FBUztRQUN0Qjs7O1dBSG1CTDtFQUF3Qk0sYUFBVTtBQUtyRCxpQkFMbUJOLGlCQUtaTyxPQUFNQyxjQUFZO0FBRXpCLGlCQVBtQlIsaUJBT1pTLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=