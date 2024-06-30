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
var _close = /*#__PURE__*/ _interop_require_default(require("../../button/close"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  grid-area: overlay-close-button;\n  justify-self: end;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var OverlayCloseButton = /*#__PURE__*/ function(CloseButton) {
    _inherits(OverlayCloseButton, CloseButton);
    var _super = _create_super(OverlayCloseButton);
    function OverlayCloseButton() {
        _class_call_check(this, OverlayCloseButton);
        return _super.apply(this, arguments);
    }
    _create_class(OverlayCloseButton, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showOverlayCloseButton = this.show.bind(this), hideOverlayCloseButton = this.hide.bind(this); ///
                return {
                    showOverlayCloseButton: showOverlayCloseButton,
                    hideOverlayCloseButton: hideOverlayCloseButton
                };
            }
        }
    ]);
    return OverlayCloseButton;
}(_close.default);
_define_property(OverlayCloseButton, "defaultProperties", {
    className: "overlay"
});
var _default = (0, _easywithstyle.default)(OverlayCloseButton)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2J1dHRvbi9jbG9zZS9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSBcIi4uLy4uL2J1dHRvbi9jbG9zZVwiO1xuXG5jbGFzcyBPdmVybGF5Q2xvc2VCdXR0b24gZXh0ZW5kcyBDbG9zZUJ1dHRvbiB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd092ZXJsYXlDbG9zZUJ1dHRvbiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlT3ZlcmxheUNsb3NlQnV0dG9uID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93T3ZlcmxheUNsb3NlQnV0dG9uLFxuICAgICAgaGlkZU92ZXJsYXlDbG9zZUJ1dHRvblxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJvdmVybGF5XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE92ZXJsYXlDbG9zZUJ1dHRvbilgXG5cbiAgZ3JpZC1hcmVhOiBvdmVybGF5LWNsb3NlLWJ1dHRvbjtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG5cbmA7XG4iXSwibmFtZXMiOlsiT3ZlcmxheUNsb3NlQnV0dG9uIiwicGFyZW50Q29udGV4dCIsInNob3dPdmVybGF5Q2xvc2VCdXR0b24iLCJzaG93IiwiYmluZCIsImhpZGVPdmVybGF5Q2xvc2VCdXR0b24iLCJoaWRlIiwiQ2xvc2VCdXR0b24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBQTs7O29FQXBCc0I7NERBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLG1DQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDNUNDLHlCQUF5QixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUV4RCxPQUFRO29CQUNORix3QkFBQUE7b0JBQ0FHLHdCQUFBQTtnQkFDRjtZQUNGOzs7V0FUSUw7RUFBMkJPLGNBQVc7QUFXMUMsaUJBWElQLG9CQVdHUSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNWIn0=