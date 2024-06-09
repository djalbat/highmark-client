"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
var _easy = require("easy");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
var CONTEXTMENU_EVENT_TYPE = _easy.eventTypes.CONTEXTMENU_EVENT_TYPE;
var Image = /*#__PURE__*/ function(Element) {
    _inherits(Image, Element);
    var _super = _create_super(Image);
    function Image() {
        _class_call_check(this, Image);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "contextMenuHandler", function(event, element) {
            event.preventDefault();
        });
        return _this;
    }
    _create_class(Image, [
        {
            key: "areBoundsOverlapping",
            value: function areBoundsOverlapping(top, left) {
                var bounds = this.getBounds(), boundsOverlapping = bounds.areOverlappingByTopAndLeft(top, left);
                return boundsOverlapping;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onEvent(CONTEXTMENU_EVENT_TYPE, this.contextMenuHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offEvent(CONTEXTMENU_EVENT_TYPE, this.contextMenuHandler);
            }
        }
    ]);
    return Image;
}(_wrap_native_super(_easy.Element));
_define_property(Image, "tagName", "img") ///
;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBldmVudFR5cGVzIH0gZnJvbSBcImVhc3lcIjtcblxuY29uc3QgeyBDT05URVhUTUVOVV9FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb250ZXh0TWVudUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgYXJlQm91bmRzT3ZlcmxhcHBpbmcodG9wLCBsZWZ0KSB7XG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKSxcbiAgICAgICAgICBib3VuZHNPdmVybGFwcGluZyA9IGJvdW5kcy5hcmVPdmVybGFwcGluZ0J5VG9wQW5kTGVmdCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIGJvdW5kc092ZXJsYXBwaW5nO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkV2ZW50KENPTlRFWFRNRU5VX0VWRU5UX1RZUEUsIHRoaXMuY29udGV4dE1lbnVIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmRXZlbnQoQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSwgdGhpcy5jb250ZXh0TWVudUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImltZ1wiOyAvLy9cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkNPTlRFWFRNRU5VX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiY29udGV4dE1lbnVIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJhcmVCb3VuZHNPdmVybGFwcGluZyIsInRvcCIsImxlZnQiLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJib3VuZHNPdmVybGFwcGluZyIsImFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0IiwiZGlkTW91bnQiLCJvbkV2ZW50Iiwid2lsbFVubW91bnQiLCJvZmZFdmVudCIsIkVsZW1lbnQiLCJ0YWdOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztvQkFKZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxJQUFNLEFBQUVDLHlCQUEyQkMsZ0JBQVUsQ0FBckNEO0FBRU8sSUFBQSxBQUFNRCxzQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkcsa0RBQUFBLHNCQUFxQixTQUFDQyxPQUFPQztZQUMzQkQsTUFBTUUsY0FBYztRQUN0Qjs7O2tCQUhtQk47O1lBS25CTyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxHQUFHLEVBQUVDLElBQUk7Z0JBQzVCLElBQU1DLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxvQkFBb0JGLE9BQU9HLDBCQUEwQixDQUFDTCxLQUFLQztnQkFFakUsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ2Qsd0JBQXdCLElBQUksQ0FBQ0Usa0JBQWtCO1lBQzlEOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsUUFBUSxDQUFDaEIsd0JBQXdCLElBQUksQ0FBQ0Usa0JBQWtCO1lBQy9EOzs7V0FsQm1CSDtxQkFBY2tCLGFBQU87QUFvQnhDLGlCQXBCbUJsQixPQW9CWm1CLFdBQVUsT0FBTyxHQUFHIn0=