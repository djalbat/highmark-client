"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZoomInMenuButton;
    }
});
var _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
var _zoomIn = /*#__PURE__*/ _interop_require_default(require("../../svg/menu/zoomIn"));
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
var ZoomInMenuButton = /*#__PURE__*/ function(MenuButton) {
    _inherits(ZoomInMenuButton, MenuButton);
    function ZoomInMenuButton() {
        _class_call_check(this, ZoomInMenuButton);
        var _this;
        _this = _call_super(this, ZoomInMenuButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            controller.zoomMenuIn();
        });
        return _this;
    }
    return ZoomInMenuButton;
}(_menu.default);
_define_property(ZoomInMenuButton, "SVG", _zoomIn.default);
_define_property(ZoomInMenuButton, "defaultProperties", {
    className: "zoom-in"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L3pvb21Jbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9tZW51XCI7XG5pbXBvcnQgWm9vbUluTWVudVNWRyBmcm9tIFwiLi4vLi4vc3ZnL21lbnUvem9vbUluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21Jbk1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci56b29tTWVudUluKCk7XG4gIH1cblxuICBzdGF0aWMgU1ZHID0gWm9vbUluTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInpvb20taW5cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlpvb21Jbk1lbnVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiem9vbU1lbnVJbiIsIk1lbnVCdXR0b24iLCJTVkciLCJab29tSW5NZW51U1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhFOzZEQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLDhCQUNuQkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCQyxXQUFXQyxVQUFVO1FBQ3ZCOzs7V0FIbUJMO0VBQXlCTSxhQUFVO0FBS3RELGlCQUxtQk4sa0JBS1pPLE9BQU1DLGVBQWE7QUFFMUIsaUJBUG1CUixrQkFPWlMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==