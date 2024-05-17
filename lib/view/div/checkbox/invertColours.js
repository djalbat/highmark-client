"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return InvertColoursCheckboxDiv;
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
var InvertColoursCheckboxDiv = /*#__PURE__*/ function(CheckboxDiv) {
    _inherits(InvertColoursCheckboxDiv, CheckboxDiv);
    var _super = _create_super(InvertColoursCheckboxDiv);
    function InvertColoursCheckboxDiv() {
        _class_call_check(this, InvertColoursCheckboxDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            var checkbox = element, checked = checkbox.isChecked();
            checked ? controller.invertColours() : controller.revertColours();
        });
        return _this;
    }
    _create_class(InvertColoursCheckboxDiv, [
        {
            key: "update",
            value: function update() {
                var coloursInverted = (0, _state.areColoursInverted)();
                coloursInverted ? this.checkCheckbox() : this.uncheckCheckbox();
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var updateInvertColoursCheckboxDiv = this.update.bind(this);
                return {
                    updateInvertColoursCheckboxDiv: updateInvertColoursCheckboxDiv
                };
            }
        }
    ]);
    return InvertColoursCheckboxDiv;
}(_checkbox.default);
_define_property(InvertColoursCheckboxDiv, "message", "Invert colours");
_define_property(InvertColoursCheckboxDiv, "defaultProperties", {
    className: "invert-colours"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jaGVja2JveC9pbnZlcnRDb2xvdXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2hlY2tib3hEaXYgZnJvbSBcIi4uLy4uL2Rpdi9jaGVja2JveFwiO1xuXG5pbXBvcnQgeyBhcmVDb2xvdXJzSW52ZXJ0ZWQgfSBmcm9tIFwiLi4vLi4vLi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2IGV4dGVuZHMgQ2hlY2tib3hEaXYge1xuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBlbGVtZW50LCAvLy9cbiAgICAgICAgICBjaGVja2VkID0gY2hlY2tib3guaXNDaGVja2VkKCk7XG5cbiAgICBjaGVja2VkID9cbiAgICAgIGNvbnRyb2xsZXIuaW52ZXJ0Q29sb3VycygpIDpcbiAgICAgICAgY29udHJvbGxlci5yZXZlcnRDb2xvdXJzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgY29sb3Vyc0ludmVydGVkID0gYXJlQ29sb3Vyc0ludmVydGVkKCk7XG5cbiAgICBjb2xvdXJzSW52ZXJ0ZWQgP1xuICAgICAgdGhpcy5jaGVja0NoZWNrYm94KCkgOlxuICAgICAgICB0aGlzLnVuY2hlY2tDaGVja2JveCgpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCB1cGRhdGVJbnZlcnRDb2xvdXJzQ2hlY2tib3hEaXYgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICB1cGRhdGVJbnZlcnRDb2xvdXJzQ2hlY2tib3hEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBtZXNzYWdlID0gXCJJbnZlcnQgY29sb3Vyc1wiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW52ZXJ0LWNvbG91cnNcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkludmVydENvbG91cnNDaGVja2JveERpdiIsImNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjaGVja2JveCIsImNoZWNrZWQiLCJpc0NoZWNrZWQiLCJjb250cm9sbGVyIiwiaW52ZXJ0Q29sb3VycyIsInJldmVydENvbG91cnMiLCJ1cGRhdGUiLCJjb2xvdXJzSW52ZXJ0ZWQiLCJhcmVDb2xvdXJzSW52ZXJ0ZWQiLCJjaGVja0NoZWNrYm94IiwidW5jaGVja0NoZWNrYm94IiwicGFyZW50Q29udGV4dCIsInVwZGF0ZUludmVydENvbG91cnNDaGVja2JveERpdiIsImJpbmQiLCJDaGVja2JveERpdiIsIm1lc3NhZ2UiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKRztxQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSx5Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQkMsa0RBQUFBLGlCQUFnQixTQUFDQyxPQUFPQztZQUN0QixJQUFNQyxXQUFXRCxTQUNYRSxVQUFVRCxTQUFTRSxTQUFTO1lBRWxDRCxVQUNFRSxXQUFXQyxhQUFhLEtBQ3RCRCxXQUFXRSxhQUFhO1FBQzlCOzs7a0JBUm1CVDs7WUFVbkJVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxrQkFBa0JDLElBQUFBLHlCQUFrQjtnQkFFMUNELGtCQUNFLElBQUksQ0FBQ0UsYUFBYSxLQUNoQixJQUFJLENBQUNDLGVBQWU7WUFDMUI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUNBQWlDLElBQUksQ0FBQ04sTUFBTSxDQUFDTyxJQUFJLENBQUMsSUFBSTtnQkFFNUQsT0FBUTtvQkFDTkQsZ0NBQUFBO2dCQUNGO1lBQ0Y7OztXQXhCbUJoQjtFQUFpQ2tCLGlCQUFXO0FBMEIvRCxpQkExQm1CbEIsMEJBMEJabUIsV0FBVTtBQUVqQixpQkE1Qm1CbkIsMEJBNEJab0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==