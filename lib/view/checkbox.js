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
var _easy = require("easy");
var _checkmark = /*#__PURE__*/ _interop_require_default(require("./svg/checkmark"));
var _styles = require("../styles");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: ",
        ";\n  height: ",
        ";\n  border: ",
        " solid ",
        ";\n  padding: ",
        ";\n  border-radius: ",
        ";   \n  background-color: ",
        ";\n\n  cursor: pointer;  \n  display: block;\n  outline: none;\n  flex-shrink: 0;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Checkbox = /*#__PURE__*/ function(Element) {
    _inherits(Checkbox, Element);
    function Checkbox() {
        _class_call_check(this, Checkbox);
        var _this;
        _this = _call_super(this, Checkbox, arguments), _define_property(_this, "clickHandler", function(event, element) {
            event.preventDefault();
            var checked = _this.isChecked();
            checked ? _this.uncheck() : _this.check();
        });
        return _this;
    }
    _create_class(Checkbox, [
        {
            key: "check",
            value: function check() {
                this.showCheckmarkSVG();
            }
        },
        {
            key: "uncheck",
            value: function uncheck() {
                this.hideCheckmarkSVG();
            }
        },
        {
            key: "isChecked",
            value: function isChecked() {
                var checkmarkSVGShowing = this.isCheckmarkSVGShowing(), checked = checkmarkSVGShowing; ///
                return checked;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onClick(this.clickHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offClick(this.clickHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_checkmark.default, null);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var checkCheckbox = this.check.bind(this), uncheckCheckbox = this.uncheck.bind(this); ///
                return {
                    checkCheckbox: checkCheckbox,
                    uncheckCheckbox: uncheckCheckbox
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return Checkbox;
}(_wrap_native_super(_easy.Element));
_define_property(Checkbox, "tagName", "div");
_define_property(Checkbox, "defaultProperties", {
    className: "checkbox"
});
var _default = (0, _easywithstyle.default)(Checkbox)(_templateObject(), _styles.checkboxSize, _styles.checkboxSize, _styles.borderWidth, _styles.borderColour, _styles.checkboxPadding, _styles.borderRadius, _styles.checkboxBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2NoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IENoZWNrbWFya1NWRyBmcm9tIFwiLi9zdmcvY2hlY2ttYXJrXCI7XG5cbmltcG9ydCB7IGJvcmRlcldpZHRoLCBib3JkZXJSYWRpdXMsIGJvcmRlckNvbG91ciwgY2hlY2tib3hTaXplLCBjaGVja2JveFBhZGRpbmcsIGNoZWNrYm94QmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpO1xuXG4gICAgY2hlY2tlZCA/XG4gICAgICB0aGlzLnVuY2hlY2soKSA6XG4gICAgICAgIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIHRoaXMuc2hvd0NoZWNrbWFya1NWRygpO1xuICB9XG5cbiAgdW5jaGVjaygpIHtcbiAgICB0aGlzLmhpZGVDaGVja21hcmtTVkcoKTtcbiAgfVxuXG4gIGlzQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBjaGVja21hcmtTVkdTaG93aW5nID0gdGhpcy5pc0NoZWNrbWFya1NWR1Nob3dpbmcoKSxcbiAgICAgICAgICBjaGVja2VkID0gY2hlY2ttYXJrU1ZHU2hvd2luZzsgIC8vL1xuXG4gICAgcmV0dXJuIGNoZWNrZWQ7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDaGVja21hcmtTVkcvPlxuXG4gICAgKVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjaGVja0NoZWNrYm94ID0gdGhpcy5jaGVjay5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgdW5jaGVja0NoZWNrYm94ID0gdGhpcy51bmNoZWNrLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgY2hlY2tDaGVja2JveCxcbiAgICAgIHVuY2hlY2tDaGVja2JveFxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImNoZWNrYm94XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENoZWNrYm94KWBcblxuICB3aWR0aDogJHtjaGVja2JveFNpemV9O1xuICBoZWlnaHQ6ICR7Y2hlY2tib3hTaXplfTtcbiAgYm9yZGVyOiAke2JvcmRlcldpZHRofSBzb2xpZCAke2JvcmRlckNvbG91cn07XG4gIHBhZGRpbmc6ICR7Y2hlY2tib3hQYWRkaW5nfTtcbiAgYm9yZGVyLXJhZGl1czogJHtib3JkZXJSYWRpdXN9OyAgIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NoZWNrYm94QmFja2dyb3VuZENvbG91cn07XG5cbiAgY3Vyc29yOiBwb2ludGVyOyAgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBmbGV4LXNocmluazogMDtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkNoZWNrYm94IiwiY2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJjaGVja2VkIiwiaXNDaGVja2VkIiwidW5jaGVjayIsImNoZWNrIiwic2hvd0NoZWNrbWFya1NWRyIsImhpZGVDaGVja21hcmtTVkciLCJjaGVja21hcmtTVkdTaG93aW5nIiwiaXNDaGVja21hcmtTVkdTaG93aW5nIiwiZGlkTW91bnQiLCJvbkNsaWNrIiwid2lsbFVubW91bnQiLCJvZmZDbGljayIsImNoaWxkRWxlbWVudHMiLCJDaGVja21hcmtTVkciLCJwYXJlbnRDb250ZXh0IiwiY2hlY2tDaGVja2JveCIsImJpbmQiLCJ1bmNoZWNrQ2hlY2tib3giLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJjaGVja2JveFNpemUiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG91ciIsImNoZWNrYm94UGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNoZWNrYm94QmFja2dyb3VuZENvbG91ciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUVBOzs7ZUFBQTs7O29FQXZFc0I7b0JBRUU7Z0VBRUM7c0JBRXdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqSCxJQUFBLEFBQU1BLHlCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLHNCQUNKQyx3QkFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckJELE1BQU1FLGNBQWM7WUFFcEIsSUFBTUMsVUFBVSxNQUFLQyxTQUFTO1lBRTlCRCxVQUNFLE1BQUtFLE9BQU8sS0FDVixNQUFLQyxLQUFLO1FBQ2hCOzs7a0JBVElSOztZQVdKUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxnQkFBZ0I7WUFDdkI7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDRyxnQkFBZ0I7WUFDdkI7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUssc0JBQXNCLElBQUksQ0FBQ0MscUJBQXFCLElBQ2hEUCxVQUFVTSxxQkFBc0IsR0FBRztnQkFFekMsT0FBT047WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUNiLFlBQVk7WUFDaEM7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDZixZQUFZO1lBQ2pDOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0Msa0JBQVk7WUFHakI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ1osS0FBSyxDQUFDYSxJQUFJLENBQUMsSUFBSSxHQUNwQ0Msa0JBQWtCLElBQUksQ0FBQ2YsT0FBTyxDQUFDYyxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRXJELE9BQVE7b0JBQ05ELGVBQUFBO29CQUNBRSxpQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7WUFDcEI7OztXQXRESXhCO3FCQUFpQnlCLGFBQU87QUF3RDVCLGlCQXhESXpCLFVBd0RHMEIsV0FBVTtBQUVqQixpQkExREkxQixVQTBERzJCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzdCLDZCQUVkOEIsb0JBQVksRUFDWEEsb0JBQVksRUFDWkMsbUJBQVcsRUFBVUMsb0JBQVksRUFDaENDLHVCQUFlLEVBQ1RDLG9CQUFZLEVBQ1RDLGdDQUF3QiJ9