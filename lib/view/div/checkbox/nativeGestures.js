"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NativeGesturesCheckboxDiv;
    }
});
var _checkbox = /*#__PURE__*/ _interop_require_default(require("../../div/checkbox"));
var _state = require("../../../state");
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
var NativeGesturesCheckboxDiv = /*#__PURE__*/ function(CheckboxDiv) {
    _inherits(NativeGesturesCheckboxDiv, CheckboxDiv);
    function NativeGesturesCheckboxDiv() {
        _class_call_check(this, NativeGesturesCheckboxDiv);
        var _this;
        _this = _call_super(this, NativeGesturesCheckboxDiv, arguments), _define_property(_this, "changeHandler", function(event, element) {
            var checkbox = element, checked = checkbox.isChecked();
            checked ? controller.restoreNativeGestures() : controller.suppressNativeGestures();
        });
        return _this;
    }
    _create_class(NativeGesturesCheckboxDiv, [
        {
            key: "update",
            value: function update() {
                var nativeGesturesRestored = (0, _state.areNativeGesturesRestored)();
                nativeGesturesRestored ? this.checkCheckbox() : this.uncheckCheckbox();
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updateNativeGesturesCheckboxDiv = this.update.bind(this); ///
                return {
                    updateNativeGesturesCheckboxDiv: updateNativeGesturesCheckboxDiv
                };
            }
        }
    ]);
    return NativeGesturesCheckboxDiv;
}(_checkbox.default);
_define_property(NativeGesturesCheckboxDiv, "message", "Native gestures\n(double tap to toggle)");
_define_property(NativeGesturesCheckboxDiv, "defaultProperties", {
    className: "native-gestures"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9uYXRpdmVHZXN0dXJlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENoZWNrYm94RGl2IGZyb20gXCIuLi8uLi9kaXYvY2hlY2tib3hcIjtcblxuaW1wb3J0IHsgYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCB9IGZyb20gXCIuLi8uLi8uLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG5cbiAgICBjaGVja2VkID9cbiAgICAgIGNvbnRyb2xsZXIucmVzdG9yZU5hdGl2ZUdlc3R1cmVzKCkgOlxuICAgICAgICBjb250cm9sbGVyLnN1cHByZXNzTmF0aXZlR2VzdHVyZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBuYXRpdmVHZXN0dXJlc1Jlc3RvcmVkID0gYXJlTmF0aXZlR2VzdHVyZXNSZXN0b3JlZCgpO1xuXG4gICAgbmF0aXZlR2VzdHVyZXNSZXN0b3JlZCA/XG4gICAgICB0aGlzLmNoZWNrQ2hlY2tib3goKSA6XG4gICAgICAgIHRoaXMudW5jaGVja0NoZWNrYm94KCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgdXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG1lc3NhZ2UgPSBgTmF0aXZlIGdlc3R1cmVzXG4oZG91YmxlIHRhcCB0byB0b2dnbGUpYDtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm5hdGl2ZS1nZXN0dXJlc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiIsImNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjaGVja2JveCIsImNoZWNrZWQiLCJpc0NoZWNrZWQiLCJjb250cm9sbGVyIiwicmVzdG9yZU5hdGl2ZUdlc3R1cmVzIiwic3VwcHJlc3NOYXRpdmVHZXN0dXJlcyIsInVwZGF0ZSIsIm5hdGl2ZUdlc3R1cmVzUmVzdG9yZWQiLCJhcmVOYXRpdmVHZXN0dXJlc1Jlc3RvcmVkIiwiY2hlY2tDaGVja2JveCIsInVuY2hlY2tDaGVja2JveCIsInBhcmVudENvbnRleHQiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IiwiYmluZCIsIkNoZWNrYm94RGl2IiwibWVzc2FnZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKRztxQkFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsdUNBQ25CQyx3QkFBQUEsaUJBQWdCLFNBQUNDLE9BQU9DO1lBQ3RCLElBQU1DLFdBQVdELFNBQ1hFLFVBQVVELFNBQVNFLFNBQVM7WUFFbENELFVBQ0VFLFdBQVdDLHFCQUFxQixLQUM5QkQsV0FBV0Usc0JBQXNCO1FBQ3ZDOzs7a0JBUm1CVDs7WUFVbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx5QkFBeUJDLElBQUFBLGdDQUF5QjtnQkFFeERELHlCQUNFLElBQUksQ0FBQ0UsYUFBYSxLQUNoQixJQUFJLENBQUNDLGVBQWU7WUFDMUI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0NBQWtDLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUc7Z0JBRW5FLE9BQVE7b0JBQ05ELGlDQUFBQTtnQkFDRjtZQUNGOzs7V0F4Qm1CaEI7RUFBa0NrQixpQkFBVztBQTBCaEUsaUJBMUJtQmxCLDJCQTBCWm1CLFdBQVc7QUFHbEIsaUJBN0JtQm5CLDJCQTZCWm9CLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=