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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2Z1bGxTY3JlZW5Nb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcInN1ZmZpY2llbnRcIjtcbmltcG9ydCB7IEZ1bGxTY3JlZW5Nb2RlTWVudVNWRyB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiBleHRlbmRzIE1lbnVCdXR0b24ge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb250cm9sbGVyLmZ1bGxTY3JlZW5Nb2RlKCk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93RnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbixcbiAgICAgIGhpZGVGdWxsU2NyZWVuTW9kZU1lbnVCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBNZW51U1ZHID0gRnVsbFNjcmVlbk1vZGVNZW51U1ZHO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZnVsbC1zY3JlZW4tbW9kZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsImZ1bGxTY3JlZW5Nb2RlIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiIsInNob3ciLCJiaW5kIiwiaGlkZUZ1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbiIsImhpZGUiLCJNZW51QnV0dG9uIiwiTWVudVNWRyIsIkZ1bGxTY3JlZW5Nb2RlTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzswQkFMTTsyQkFDVzsyREFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLHNDQUNuQkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCQyxzQkFBVSxDQUFDQyxjQUFjO1lBRXpCSCxNQUFNSSxjQUFjO1FBQ3RCOzs7a0JBTG1CTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywrQkFBK0IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ2xEQywrQkFBK0IsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFL0QsT0FBUTtvQkFDTkYsOEJBQUFBO29CQUNBRyw4QkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBZm1CWDtFQUFpQ2EsYUFBVTtBQWlCOUQsaUJBakJtQmIsMEJBaUJaYyxXQUFVQyxrQ0FBcUI7QUFFdEMsaUJBbkJtQmYsMEJBbUJaZ0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==