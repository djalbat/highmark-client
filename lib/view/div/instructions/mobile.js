"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MobileInstructionsDiv;
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
var MobileInstructionsDiv = /*#__PURE__*/ function(InstructionsDiv) {
    _inherits(MobileInstructionsDiv, InstructionsDiv);
    function MobileInstructionsDiv() {
        _class_call_check(this, MobileInstructionsDiv);
        return _call_super(this, MobileInstructionsDiv, arguments);
    }
    _create_class(MobileInstructionsDiv, [
        {
            key: "parentContext",
            value: function parentContext() {
                var showMobileInstructionsDiv = this.show.bind(this), hideMobileInstructionsDiv = this.hide.bind(this); ///
                return {
                    showMobileInstructionsDiv: showMobileInstructionsDiv,
                    hideMobileInstructionsDiv: hideMobileInstructionsDiv
                };
            }
        }
    ]);
    return MobileInstructionsDiv;
}(_instructions.default);
_define_property(MobileInstructionsDiv, "instructions", [
    "Click near the bottom of the screen to open the menu once these instructions have been hidden.",
    "Native gestures are mostly overridden. Pinching will change the font size instead of zooming, for example. The double tap native gesture cannot be fully overridden, however, and sometimes causes unwanted zooming. When this happens, restore native gestures in order to fix it.",
    "If the unwanted zooming means that you cannot access the menu then you can restore native gestures with another double tap. This can take a little practice.",
    "Lastly, if bringing up the context menu interferes with subsequent swiping and pinching then tap at the bottom of the screen to show the menu. This will clear it."
]);
_define_property(MobileInstructionsDiv, "defaultProperties", {
    className: "mobile"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9pbnN0cnVjdGlvbnMvbW9iaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zRGl2IGZyb20gXCIuLi8uLi9kaXYvaW5zdHJ1Y3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZUluc3RydWN0aW9uc0RpdiBleHRlbmRzIEluc3RydWN0aW9uc0RpdiB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd01vYmlsZUluc3RydWN0aW9uc0RpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TW9iaWxlSW5zdHJ1Y3Rpb25zRGl2LFxuICAgICAgaGlkZU1vYmlsZUluc3RydWN0aW9uc0RpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IFtcbiAgICBcIkNsaWNrIG5lYXIgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvIG9wZW4gdGhlIG1lbnUgb25jZSB0aGVzZSBpbnN0cnVjdGlvbnMgaGF2ZSBiZWVuIGhpZGRlbi5cIixcbiAgICBcIk5hdGl2ZSBnZXN0dXJlcyBhcmUgbW9zdGx5IG92ZXJyaWRkZW4uIFBpbmNoaW5nIHdpbGwgY2hhbmdlIHRoZSBmb250IHNpemUgaW5zdGVhZCBvZiB6b29taW5nLCBmb3IgZXhhbXBsZS4gVGhlIGRvdWJsZSB0YXAgbmF0aXZlIGdlc3R1cmUgY2Fubm90IGJlIGZ1bGx5IG92ZXJyaWRkZW4sIGhvd2V2ZXIsIGFuZCBzb21ldGltZXMgY2F1c2VzIHVud2FudGVkIHpvb21pbmcuIFdoZW4gdGhpcyBoYXBwZW5zLCByZXN0b3JlIG5hdGl2ZSBnZXN0dXJlcyBpbiBvcmRlciB0byBmaXggaXQuXCIsXG4gICAgXCJJZiB0aGUgdW53YW50ZWQgem9vbWluZyBtZWFucyB0aGF0IHlvdSBjYW5ub3QgYWNjZXNzIHRoZSBtZW51IHRoZW4geW91IGNhbiByZXN0b3JlIG5hdGl2ZSBnZXN0dXJlcyB3aXRoIGFub3RoZXIgZG91YmxlIHRhcC4gVGhpcyBjYW4gdGFrZSBhIGxpdHRsZSBwcmFjdGljZS5cIixcbiAgICBcIkxhc3RseSwgaWYgYnJpbmdpbmcgdXAgdGhlIGNvbnRleHQgbWVudSBpbnRlcmZlcmVzIHdpdGggc3Vic2VxdWVudCBzd2lwaW5nIGFuZCBwaW5jaGluZyB0aGVuIHRhcCBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG8gc2hvdyB0aGUgbWVudS4gVGhpcyB3aWxsIGNsZWFyIGl0LlwiXG4gIF1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1vYmlsZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IiwicGFyZW50Q29udGV4dCIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJzaG93IiwiYmluZCIsImhpZGVNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJoaWRlIiwiSW5zdHJ1Y3Rpb25zRGl2IiwiaW5zdHJ1Y3Rpb25zIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O21FQUZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDRCQUE0QixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDL0NDLDRCQUE0QixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHO2dCQUUzRCxPQUFRO29CQUNORiwyQkFBQUE7b0JBQ0FHLDJCQUFBQTtnQkFDRjtZQUNGOzs7V0FUbUJMO0VBQThCTyxxQkFBZTtBQVdoRSxpQkFYbUJQLHVCQVdaUSxnQkFBZTtJQUNwQjtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsaUJBbEJtQlIsdUJBa0JaUyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9