"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DesktopInstructionsDiv;
    }
});
var _instructions = /*#__PURE__*/ _interop_require_default(require("../../div/instructions"));
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
var DesktopInstructionsDiv = /*#__PURE__*/ function(InstructionsDiv) {
    _inherits(DesktopInstructionsDiv, InstructionsDiv);
    var _super = _create_super(DesktopInstructionsDiv);
    function DesktopInstructionsDiv() {
        _class_call_check(this, DesktopInstructionsDiv);
        return _super.apply(this, arguments);
    }
    _create_class(DesktopInstructionsDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showDesktopInstructionsDiv = this.show.bind(this); ///
                return {
                    showDesktopInstructionsDiv: showDesktopInstructionsDiv
                };
            }
        }
    ]);
    return DesktopInstructionsDiv;
}(_instructions.default);
_define_property(DesktopInstructionsDiv, "instructions", [
    "Click near the bottom of the screen to open the menu once these instructions have been hidden.",
    "Native gestures are overridden by default for mobile and tablet use but this disables scrolling on desktops and laptops. So you must restore native gestures from the menu before proceeding on these devices."
]);
_define_property(DesktopInstructionsDiv, "defaultProperties", {
    className: "desktop"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9pbnN0cnVjdGlvbnMvZGVza3RvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEluc3RydWN0aW9uc0RpdiBmcm9tIFwiLi4vLi4vZGl2L2luc3RydWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IGV4dGVuZHMgSW5zdHJ1Y3Rpb25zRGl2IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93RGVza3RvcEluc3RydWN0aW9uc0RpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0cnVjdGlvbnMgPSBbXG4gICAgXCJDbGljayBuZWFyIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0byBvcGVuIHRoZSBtZW51IG9uY2UgdGhlc2UgaW5zdHJ1Y3Rpb25zIGhhdmUgYmVlbiBoaWRkZW4uXCIsXG4gICAgXCJOYXRpdmUgZ2VzdHVyZXMgYXJlIG92ZXJyaWRkZW4gYnkgZGVmYXVsdCBmb3IgbW9iaWxlIGFuZCB0YWJsZXQgdXNlIGJ1dCB0aGlzIGRpc2FibGVzIHNjcm9sbGluZyBvbiBkZXNrdG9wcyBhbmQgbGFwdG9wcy4gU28geW91IG11c3QgcmVzdG9yZSBuYXRpdmUgZ2VzdHVyZXMgZnJvbSB0aGUgbWVudSBiZWZvcmUgcHJvY2VlZGluZyBvbiB0aGVzZSBkZXZpY2VzLlwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkZXNrdG9wXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IiwicGFyZW50Q29udGV4dCIsInNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2Iiwic2hvdyIsImJpbmQiLCJJbnN0cnVjdGlvbnNEaXYiLCJpbnN0cnVjdGlvbnMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7bUVBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSx1Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsNkJBQTZCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRTVELE9BQVE7b0JBQ05GLDRCQUFBQTtnQkFDRjtZQUNGOzs7V0FQbUJGO0VBQStCSyxxQkFBZTtBQVNqRSxpQkFUbUJMLHdCQVNaTSxnQkFBZTtJQUNwQjtJQUNBO0NBQ0Q7QUFFRCxpQkFkbUJOLHdCQWNaTyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9