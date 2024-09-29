"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _instructions = /*#__PURE__*/ _interop_require_default(require("../../button/instructions"));
var _styles = require("../../../styles");
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  background-color: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MobileInstructionsButton = /*#__PURE__*/ function(InstructionsButton) {
    _inherits(MobileInstructionsButton, InstructionsButton);
    function MobileInstructionsButton() {
        _class_call_check(this, MobileInstructionsButton);
        return _call_super(this, MobileInstructionsButton, arguments);
    }
    _create_class(MobileInstructionsButton, [
        {
            key: "childElements",
            value: function childElements() {
                return "Mobile / Tablet";
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showMobileInstructionsButton = this.show.bind(this), hideMobileInstructionsButton = this.hide.bind(this); ///
                return {
                    showMobileInstructionsButton: showMobileInstructionsButton,
                    hideMobileInstructionsButton: hideMobileInstructionsButton
                };
            }
        }
    ]);
    return MobileInstructionsButton;
}(_instructions.default);
_define_property(MobileInstructionsButton, "defaultProperties", {
    className: "mobile"
});
var _default = (0, _easywithstyle.default)(MobileInstructionsButton)(_templateObject(), _styles.mobileInstructionsButtonBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9pbnN0cnVjdGlvbnMvbW9iaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zQnV0dG9uIGZyb20gXCIuLi8uLi9idXR0b24vaW5zdHJ1Y3Rpb25zXCI7XG5cbmltcG9ydCB7IG1vYmlsZUluc3RydWN0aW9uc0J1dHRvbkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIE1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiBleHRlbmRzIEluc3RydWN0aW9uc0J1dHRvbiB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiTW9iaWxlIC8gVGFibGV0XCI7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24gPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24gPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICAoe1xuICAgICAgc2hvd01vYmlsZUluc3RydWN0aW9uc0J1dHRvbixcbiAgICAgIGhpZGVNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibW9iaWxlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1vYmlsZUluc3RydWN0aW9uc0J1dHRvbilgXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHttb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25CYWNrZ3JvdW5kQ29sb3VyfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIk1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJwYXJlbnRDb250ZXh0Iiwic2hvd01vYmlsZUluc3RydWN0aW9uc0J1dHRvbiIsInNob3ciLCJiaW5kIiwiaGlkZU1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiIsImhpZGUiLCJJbnN0cnVjdGlvbnNCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm1vYmlsZUluc3RydWN0aW9uc0J1dHRvbkJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQTs7O2VBQUE7OztvRUExQnNCO21FQUVTO3NCQUUwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFBLEFBQU1BLHlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU87WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywrQkFBK0IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxJQUFJLEdBQ2xEQywrQkFBK0IsSUFBSSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxJQUFJLEdBQUksR0FBRztnQkFFL0QsT0FBUztvQkFDUEYsOEJBQUFBO29CQUNBRyw4QkFBQUE7Z0JBQ0Y7WUFDRjs7O1dBYklOO0VBQWlDUSxxQkFBa0I7QUFldkQsaUJBZklSLDBCQWVHUyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNYLDZDQUVIWSxnREFBd0MifQ==