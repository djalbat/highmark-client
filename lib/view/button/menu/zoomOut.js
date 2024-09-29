"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZoomMenuOutMenuButton;
    }
});
var _menu = /*#__PURE__*/ _interop_require_default(require("../../button/menu"));
var _zoomOut = /*#__PURE__*/ _interop_require_default(require("../../svg/menu/zoomOut"));
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
var ZoomMenuOutMenuButton = /*#__PURE__*/ function(MenuButton) {
    _inherits(ZoomMenuOutMenuButton, MenuButton);
    function ZoomMenuOutMenuButton() {
        _class_call_check(this, ZoomMenuOutMenuButton);
        var _this;
        _this = _call_super(this, ZoomMenuOutMenuButton, arguments), _define_property(_this, "clickHandler", function(event, element) {
            controller.zoomMenuOut();
        });
        return _this;
    }
    return ZoomMenuOutMenuButton;
}(_menu.default);
_define_property(ZoomMenuOutMenuButton, "SVG", _zoomOut.default);
_define_property(ZoomMenuOutMenuButton, "defaultProperties", {
    className: "zoom-out"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L3pvb21PdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZW51QnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vbWVudVwiO1xuaW1wb3J0IFpvb21PdXRNZW51U1ZHIGZyb20gXCIuLi8uLi9zdmcvbWVudS96b29tT3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21NZW51T3V0TWVudUJ1dHRvbiBleHRlbmRzIE1lbnVCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb250cm9sbGVyLnpvb21NZW51T3V0KCk7XG4gIH1cblxuICBzdGF0aWMgU1ZHID0gWm9vbU91dE1lbnVTVkc7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ6b29tLW91dFwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiWm9vbU1lbnVPdXRNZW51QnV0dG9uIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInpvb21NZW51T3V0IiwiTWVudUJ1dHRvbiIsIlNWRyIsIlpvb21PdXRNZW51U1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7OzJEQUhFOzhEQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7a0NBQUFBLG1DQUNuQkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCQyxXQUFXQyxXQUFXO1FBQ3hCOzs7V0FIbUJMO0VBQThCTSxhQUFVO0FBSzNELGlCQUxtQk4sdUJBS1pPLE9BQU1DLGdCQUFjO0FBRTNCLGlCQVBtQlIsdUJBT1pTLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=