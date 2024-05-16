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
var _instructions1 = /*#__PURE__*/ _interop_require_default(require("../../paragraph/instructions"));
var _instructions2 = /*#__PURE__*/ _interop_require_default(require("../../div/checkbox/instructions"));
var _constants = require("../../../constants");
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
            key: "show",
            value: function show() {
                var display = _constants.FLEX;
                this.display(display);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_instructions1.default, null, "Tap near the bottom of the screen to open the menu."),
                    /*#__PURE__*/ React.createElement(_instructions1.default, null, "Native gestures are mostly overridden. Pinching changes the font size instead of zooming, for example."),
                    /*#__PURE__*/ React.createElement(_instructions1.default, null, "The double tap native gesture cannot be fully overridden and sometimes causes unwanted zooming. When this happens, restore native gestures in order to fix it."),
                    /*#__PURE__*/ React.createElement(_instructions1.default, null, "If the unwanted zooming means that you cannot access the menu then you can restore native gestures with another double tap. This can take a little practice."),
                    /*#__PURE__*/ React.createElement(_instructions2.default, null)
                ];
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showMobileInstructionsDiv = this.show.bind(this); ///
                return {
                    showMobileInstructionsDiv: showMobileInstructionsDiv
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.hide();
            }
        }
    ]);
    return MobileInstructionsDiv;
}(_instructions.default);
_define_property(MobileInstructionsDiv, "defaultProperties", {
    className: "mobile"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9pbnN0cnVjdGlvbnMvbW9iaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5zdHJ1Y3Rpb25zRGl2IGZyb20gXCIuLi8uLi9kaXYvaW5zdHJ1Y3Rpb25zXCI7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zUGFyYWdyYXBoIGZyb20gXCIuLi8uLi9wYXJhZ3JhcGgvaW5zdHJ1Y3Rpb25zXCI7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jaGVja2JveC9pbnN0cnVjdGlvbnNcIjtcblxuaW1wb3J0IHsgRkxFWCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IGV4dGVuZHMgSW5zdHJ1Y3Rpb25zRGl2IHtcbiAgc2hvdygpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gRkxFWDtcblxuICAgIHRoaXMuZGlzcGxheShkaXNwbGF5KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxJbnN0cnVjdGlvbnNQYXJhZ3JhcGg+XG4gICAgICAgIFRhcCBuZWFyIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0byBvcGVuIHRoZSBtZW51LlxuICAgICAgPC9JbnN0cnVjdGlvbnNQYXJhZ3JhcGg+LFxuICAgICAgPEluc3RydWN0aW9uc1BhcmFncmFwaD5cbiAgICAgICAgTmF0aXZlIGdlc3R1cmVzIGFyZSBtb3N0bHkgb3ZlcnJpZGRlbi5cbiAgICAgICAgUGluY2hpbmcgY2hhbmdlcyB0aGUgZm9udCBzaXplIGluc3RlYWQgb2Ygem9vbWluZywgZm9yIGV4YW1wbGUuXG4gICAgICA8L0luc3RydWN0aW9uc1BhcmFncmFwaD4sXG4gICAgICA8SW5zdHJ1Y3Rpb25zUGFyYWdyYXBoPlxuICAgICAgICBUaGUgZG91YmxlIHRhcCBuYXRpdmUgZ2VzdHVyZSBjYW5ub3QgYmUgZnVsbHkgb3ZlcnJpZGRlbiBhbmQgc29tZXRpbWVzIGNhdXNlcyB1bndhbnRlZCB6b29taW5nLlxuICAgICAgICBXaGVuIHRoaXMgaGFwcGVucywgcmVzdG9yZSBuYXRpdmUgZ2VzdHVyZXMgaW4gb3JkZXIgdG8gZml4IGl0LlxuICAgICAgPC9JbnN0cnVjdGlvbnNQYXJhZ3JhcGg+LFxuICAgICAgPEluc3RydWN0aW9uc1BhcmFncmFwaD5cbiAgICAgICAgSWYgdGhlIHVud2FudGVkIHpvb21pbmcgbWVhbnMgdGhhdCB5b3UgY2Fubm90IGFjY2VzcyB0aGUgbWVudSB0aGVuIHlvdSBjYW4gcmVzdG9yZSBuYXRpdmUgZ2VzdHVyZXMgd2l0aCBhbm90aGVyIGRvdWJsZSB0YXAuXG4gICAgICAgIFRoaXMgY2FuIHRha2UgYSBsaXR0bGUgcHJhY3RpY2UuXG4gICAgICA8L0luc3RydWN0aW9uc1BhcmFncmFwaD4sXG4gICAgICA8SW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYgPSB0aGlzLnNob3cuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXZcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1vYmlsZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2Iiwic2hvdyIsImRpc3BsYXkiLCJGTEVYIiwiY2hpbGRFbGVtZW50cyIsIkluc3RydWN0aW9uc1BhcmFncmFwaCIsIkluc3RydWN0aW9uc0NoZWNrYm94RGl2IiwicGFyZW50Q29udGV4dCIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJiaW5kIiwiaW5pdGlhbGlzZSIsImhpZGUiLCJJbnN0cnVjdGlvbnNEaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7bUVBTk87b0VBQ007b0VBQ0U7eUJBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMsZUFBSTtnQkFFcEIsSUFBSSxDQUFDRCxPQUFPLENBQUNBO1lBQ2Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0Msc0JBQXFCLFFBQUM7a0NBR3ZCLG9CQUFDQSxzQkFBcUIsUUFBQztrQ0FJdkIsb0JBQUNBLHNCQUFxQixRQUFDO2tDQUl2QixvQkFBQ0Esc0JBQXFCLFFBQUM7a0NBSXZCLG9CQUFDQyxzQkFBdUI7aUJBRXpCO1lBQ0g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsNEJBQTRCLElBQUksQ0FBQ1AsSUFBSSxDQUFDUSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRTNELE9BQVE7b0JBQ05ELDJCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsSUFBSTtZQUNYOzs7V0F4Q21CWDtFQUE4QlkscUJBQWU7QUEwQ2hFLGlCQTFDbUJaLHVCQTBDWmEscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==