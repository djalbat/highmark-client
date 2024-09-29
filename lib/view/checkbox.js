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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
        ";\n  cursor: pointer;  \n  display: block;\n  outline: none;\n  position: relative;\n  appearance: none;\n  flex-shrink: 0;\n  \n  ::before {\n    width: 100%;\n    height: 100%;\n    border: ",
        " solid ",
        ';\n    content: " ";\n    position: absolute;\n    border-radius: ',
        ";\n    background-color: ",
        ';\n  }\n  \n  ::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    content: " ";\n    position: absolute;\n    background-size: 0;\n    background-image: url("checkmark.svg");\n  }\n\n  :checked::after {\n    background-size: 100%;\n  }\n  \n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var _default = (0, _easywithstyle.default)(/*#__PURE__*/ function(Checkbox) {
    _inherits(_class, Checkbox);
    function _class() {
        _class_call_check(this, _class);
        return _call_super(this, _class, arguments);
    }
    _create_class(_class, [
        {
            key: "check",
            value: function check() {
                var checked = true;
                _get(_get_prototype_of(_class.prototype), "check", this).call(this, checked);
            }
        },
        {
            key: "uncheck",
            value: function uncheck() {
                var checked = false;
                _get(_get_prototype_of(_class.prototype), "check", this).call(this, checked);
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
        }
    ]);
    return _class;
}(_easy.Checkbox))(_templateObject(), _styles.checkboxSize, _styles.checkboxSize, _styles.borderWidth, _styles.borderColour, _styles.borderRadius, _styles.checkboxBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3L2NoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IGJvcmRlcldpZHRoLCBib3JkZXJSYWRpdXMsIGJvcmRlckNvbG91ciwgY2hlY2tib3hTaXplLCBjaGVja2JveEJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShjbGFzcyBleHRlbmRzIENoZWNrYm94IHtcbiAgY2hlY2soKSB7XG4gICAgY29uc3QgY2hlY2tlZCA9IHRydWU7XG5cbiAgICBzdXBlci5jaGVjayhjaGVja2VkKTtcbiAgfVxuXG4gIHVuY2hlY2soKSB7XG4gICAgY29uc3QgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgc3VwZXIuY2hlY2soY2hlY2tlZCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNoZWNrQ2hlY2tib3ggPSB0aGlzLmNoZWNrLmJpbmQodGhpcyksICAvLy9cbiAgICAgICAgICB1bmNoZWNrQ2hlY2tib3ggPSB0aGlzLnVuY2hlY2suYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBjaGVja0NoZWNrYm94LFxuICAgICAgdW5jaGVja0NoZWNrYm94XG4gICAgfSk7XG4gIH1cbn0pYFxuXG4gIHdpZHRoOiAke2NoZWNrYm94U2l6ZX07XG4gIGhlaWdodDogJHtjaGVja2JveFNpemV9O1xuICBjdXJzb3I6IHBvaW50ZXI7ICBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIFxuICA6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogJHtib3JkZXJXaWR0aH0gc29saWQgJHtib3JkZXJDb2xvdXJ9O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAke2JvcmRlclJhZGl1c307XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjaGVja2JveEJhY2tncm91bmRDb2xvdXJ9O1xuICB9XG4gIFxuICA6OmFmdGVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJjaGVja21hcmsuc3ZnXCIpO1xuICB9XG5cbiAgOmNoZWNrZWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cbiAgXG5gO1xuIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsImNoZWNrIiwiY2hlY2tlZCIsInVuY2hlY2siLCJwYXJlbnRDb250ZXh0IiwiY2hlY2tDaGVja2JveCIsImJpbmQiLCJ1bmNoZWNrQ2hlY2tib3giLCJDaGVja2JveCIsImNoZWNrYm94U2l6ZSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3VyIiwiYm9yZGVyUmFkaXVzIiwiY2hlY2tib3hCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztvRUFOc0I7b0JBRUc7c0JBRXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhHLFdBQWVBLElBQUFBLHNCQUFTLGdCQUFDOzs7Ozs7OztZQUN2QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVU7Z0JBRWhCLDBDQUFNRCxTQUFOLElBQUssYUFBT0M7WUFDZDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxVQUFVO2dCQUVoQiwwQ0FBTUQsU0FBTixJQUFLLGFBQU9DO1lBQ2Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxJQUFJLENBQUMsSUFBSSxHQUNwQ0Msa0JBQWtCLElBQUksQ0FBQ0osT0FBTyxDQUFDRyxJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRXJELE9BQVE7b0JBQ05ELGVBQUFBO29CQUNBRSxpQkFBQUE7Z0JBQ0Y7WUFDRjs7OztFQXJCcUNDLGNBQVEsc0JBd0JwQ0Msb0JBQVksRUFDWEEsb0JBQVksRUFXVkMsbUJBQVcsRUFBVUMsb0JBQVksRUFHMUJDLG9CQUFZLEVBQ1RDLGdDQUF3QiJ9