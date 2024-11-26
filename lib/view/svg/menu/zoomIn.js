"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZoomInMenuSVG;
    }
});
var _svg = /*#__PURE__*/ _interop_require_default(require("../../svg"));
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
var ZoomInMenuSVG = /*#__PURE__*/ function(SVG) {
    _inherits(ZoomInMenuSVG, SVG);
    function ZoomInMenuSVG() {
        _class_call_check(this, ZoomInMenuSVG);
        return _call_super(this, ZoomInMenuSVG, arguments);
    }
    _create_class(ZoomInMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    x: "3",
                    y: "10",
                    width: "19",
                    height: "5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    x: "10",
                    y: "3",
                    width: "5",
                    height: "19"
                }));
            }
        }
    ]);
    return ZoomInMenuSVG;
}(_svg.default);
_define_property(ZoomInMenuSVG, "defaultProperties", {
    className: "zoom-in-menu"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L3N2Zy9tZW51L3pvb21Jbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNWRyBmcm9tIFwiLi4vLi4vc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21Jbk1lbnVTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB4PVwiM1wiIHk9XCIxMFwiIHdpZHRoPVwiMTlcIiBoZWlnaHQ9XCI1XCIvPlxuICAgICAgICA8cmVjdCB4PVwiMTBcIiB5PVwiM1wiIHdpZHRoPVwiNVwiIGhlaWdodD1cIjE5XCIvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiem9vbS1pbi1tZW51XCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJab29tSW5NZW51U1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJyZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIlNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzswREFGTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7b0JBQUlDLEdBQUU7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87a0NBQ3JDLG9CQUFDSjtvQkFBS0MsR0FBRTtvQkFBS0MsR0FBRTtvQkFBSUMsT0FBTTtvQkFBSUMsUUFBTzs7WUFJMUM7OztXQVZtQlA7RUFBc0JRLFlBQUc7QUFZNUMsaUJBWm1CUixlQVlaUyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9