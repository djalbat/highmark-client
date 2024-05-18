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
var MobileInstructionsDiv = /*#__PURE__*/ function(InstructionsDiv) {
    _inherits(MobileInstructionsDiv, InstructionsDiv);
    var _super = _create_super(MobileInstructionsDiv);
    function MobileInstructionsDiv() {
        _class_call_check(this, MobileInstructionsDiv);
        return _super.apply(this, arguments);
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
    "Native gestures are mostly overridden once these instructions are hidden. Pinching changes the font size instead of zooming, for example.",
    "The double tap native gesture cannot be fully overridden and sometimes causes unwanted zooming. When this happens, restore native gestures in order to fix it.",
    "If the unwanted zooming means that you cannot access the menu then you can restore native gestures with another double tap. This can take a little practice."
]);
_define_property(MobileInstructionsDiv, "defaultProperties", {
    className: "mobile"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9pbnN0cnVjdGlvbnMvbW9iaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zRGl2IGZyb20gXCIuLi8uLi9kaXYvaW5zdHJ1Y3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZUluc3RydWN0aW9uc0RpdiBleHRlbmRzIEluc3RydWN0aW9uc0RpdiB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd01vYmlsZUluc3RydWN0aW9uc0RpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TW9iaWxlSW5zdHJ1Y3Rpb25zRGl2LFxuICAgICAgaGlkZU1vYmlsZUluc3RydWN0aW9uc0RpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGluc3RydWN0aW9ucyA9IFtcbiAgICBcIkNsaWNrIG5lYXIgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvIG9wZW4gdGhlIG1lbnUgb25jZSB0aGVzZSBpbnN0cnVjdGlvbnMgaGF2ZSBiZWVuIGhpZGRlbi5cIixcbiAgICBcIk5hdGl2ZSBnZXN0dXJlcyBhcmUgbW9zdGx5IG92ZXJyaWRkZW4gb25jZSB0aGVzZSBpbnN0cnVjdGlvbnMgYXJlIGhpZGRlbi4gUGluY2hpbmcgY2hhbmdlcyB0aGUgZm9udCBzaXplIGluc3RlYWQgb2Ygem9vbWluZywgZm9yIGV4YW1wbGUuXCIsXG4gICAgXCJUaGUgZG91YmxlIHRhcCBuYXRpdmUgZ2VzdHVyZSBjYW5ub3QgYmUgZnVsbHkgb3ZlcnJpZGRlbiBhbmQgc29tZXRpbWVzIGNhdXNlcyB1bndhbnRlZCB6b29taW5nLiBXaGVuIHRoaXMgaGFwcGVucywgcmVzdG9yZSBuYXRpdmUgZ2VzdHVyZXMgaW4gb3JkZXIgdG8gZml4IGl0LlwiLFxuICAgIFwiSWYgdGhlIHVud2FudGVkIHpvb21pbmcgbWVhbnMgdGhhdCB5b3UgY2Fubm90IGFjY2VzcyB0aGUgbWVudSB0aGVuIHlvdSBjYW4gcmVzdG9yZSBuYXRpdmUgZ2VzdHVyZXMgd2l0aCBhbm90aGVyIGRvdWJsZSB0YXAuIFRoaXMgY2FuIHRha2UgYSBsaXR0bGUgcHJhY3RpY2UuXCJcbiAgXVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibW9iaWxlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJwYXJlbnRDb250ZXh0Iiwic2hvd01vYmlsZUluc3RydWN0aW9uc0RpdiIsInNob3ciLCJiaW5kIiwiaGlkZU1vYmlsZUluc3RydWN0aW9uc0RpdiIsImhpZGUiLCJJbnN0cnVjdGlvbnNEaXYiLCJpbnN0cnVjdGlvbnMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7bUVBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWIsSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsNEJBQTRCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxHQUMvQ0MsNEJBQTRCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRTNELE9BQVE7b0JBQ05GLDJCQUFBQTtvQkFDQUcsMkJBQUFBO2dCQUNGO1lBQ0Y7OztXQVRtQkw7RUFBOEJPLHFCQUFlO0FBV2hFLGlCQVhtQlAsdUJBV1pRLGdCQUFlO0lBQ3BCO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxpQkFsQm1CUix1QkFrQlpTLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=