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
                var showEmbeddedModeMenuButton = this.show.bind(this), hideEmbeddedModeMenuButton = this.hide.bind(this); ///
                return {
                    showEmbeddedModeMenuButton: showEmbeddedModeMenuButton,
                    hideEmbeddedModeMenuButton: hideEmbeddedModeMenuButton
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9tZW51L2VtYmVkZGVkTW9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRW1iZWRkZWRNb2RlTWVudVNWRyB9IGZyb20gXCJvY2NhbS1zdHlsZXNcIjtcblxuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkZGVkTW9kZU1lbnVCdXR0b24gZXh0ZW5kcyBNZW51QnV0dG9uIHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5lbWJlZGRlZE1vZGUoKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dFbWJlZGRlZE1vZGVNZW51QnV0dG9uID0gdGhpcy5zaG93LmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICBoaWRlRW1iZWRkZWRNb2RlTWVudUJ1dHRvbiA9IHRoaXMuaGlkZS5iaW5kKHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dFbWJlZGRlZE1vZGVNZW51QnV0dG9uLFxuICAgICAgaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBNZW51U1ZHID0gRW1iZWRkZWRNb2RlTWVudVNWRztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVtYmVkZGVkLW1vZGVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJjbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiZW1iZWRkZWRNb2RlIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRDb250ZXh0Iiwic2hvd0VtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJzaG93IiwiYmluZCIsImhpZGVFbWJlZGRlZE1vZGVNZW51QnV0dG9uIiwiaGlkZSIsIk1lbnVCdXR0b24iLCJNZW51U1ZHIiwiRW1iZWRkZWRNb2RlTWVudVNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyQkFKZTsyREFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHVDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLG9DQUNuQkMsd0JBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCQyxXQUFXQyxZQUFZO1lBRXZCSCxNQUFNSSxjQUFjO1FBQ3RCOzs7a0JBTG1CTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyw2QkFBNkIsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ2hEQyw2QkFBNkIsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFN0QsT0FBUTtvQkFDTkYsNEJBQUFBO29CQUNBRyw0QkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBZm1CWDtFQUErQmEsYUFBVTtBQWlCNUQsaUJBakJtQmIsd0JBaUJaYyxXQUFVQyxnQ0FBbUI7QUFFcEMsaUJBbkJtQmYsd0JBbUJaZ0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==