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
var DesktopInstructionsDiv = /*#__PURE__*/ function(InstructionsDiv) {
    _inherits(DesktopInstructionsDiv, InstructionsDiv);
    function DesktopInstructionsDiv() {
        _class_call_check(this, DesktopInstructionsDiv);
        return _call_super(this, DesktopInstructionsDiv, arguments);
    }
    _create_class(DesktopInstructionsDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showDesktopInstructionsDiv = this.show.bind(this), hideDesktopInstructionsDiv = this.hide.bind(this); ///
                return {
                    showDesktopInstructionsDiv: showDesktopInstructionsDiv,
                    hideDesktopInstructionsDiv: hideDesktopInstructionsDiv
                };
            }
        }
    ]);
    return DesktopInstructionsDiv;
}(_instructions.default);
_define_property(DesktopInstructionsDiv, "instructions", [
    "Click near the bottom of the screen to open the menu once these instructions have been hidden.",
    "Native gestures are overridden by default for mobile and tablet. This disables scrolling on desktops and laptops, so you must restore native gestures from the menu before proceeding on these devices."
]);
_define_property(DesktopInstructionsDiv, "defaultProperties", {
    className: "desktop"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9pbnN0cnVjdGlvbnMvZGVza3RvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEluc3RydWN0aW9uc0RpdiBmcm9tIFwiLi4vLi4vZGl2L2luc3RydWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IGV4dGVuZHMgSW5zdHJ1Y3Rpb25zRGl2IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93RGVza3RvcEluc3RydWN0aW9uc0RpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNEaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93RGVza3RvcEluc3RydWN0aW9uc0RpdixcbiAgICAgIGhpZGVEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zID0gW1xuICAgIFwiQ2xpY2sgbmVhciB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG8gb3BlbiB0aGUgbWVudSBvbmNlIHRoZXNlIGluc3RydWN0aW9ucyBoYXZlIGJlZW4gaGlkZGVuLlwiLFxuICAgIFwiTmF0aXZlIGdlc3R1cmVzIGFyZSBvdmVycmlkZGVuIGJ5IGRlZmF1bHQgZm9yIG1vYmlsZSBhbmQgdGFibGV0LiBUaGlzIGRpc2FibGVzIHNjcm9sbGluZyBvbiBkZXNrdG9wcyBhbmQgbGFwdG9wcywgc28geW91IG11c3QgcmVzdG9yZSBuYXRpdmUgZ2VzdHVyZXMgZnJvbSB0aGUgbWVudSBiZWZvcmUgcHJvY2VlZGluZyBvbiB0aGVzZSBkZXZpY2VzLlwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJkZXNrdG9wXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IiwicGFyZW50Q29udGV4dCIsInNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2Iiwic2hvdyIsImJpbmQiLCJoaWRlRGVza3RvcEluc3RydWN0aW9uc0RpdiIsImhpZGUiLCJJbnN0cnVjdGlvbnNEaXYiLCJpbnN0cnVjdGlvbnMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7bUVBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDZCQUE2QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDaERDLDZCQUE2QixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUU3RCxPQUFRO29CQUNORiw0QkFBQUE7b0JBQ0FHLDRCQUFBQTtnQkFDRjtZQUNGOzs7V0FUbUJMO0VBQStCTyxxQkFBZTtBQVdqRSxpQkFYbUJQLHdCQVdaUSxnQkFBZTtJQUNwQjtJQUNBO0NBQ0Q7QUFFRCxpQkFoQm1CUix3QkFnQlpTLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=