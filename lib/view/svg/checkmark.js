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
var _svg = /*#__PURE__*/ _interop_require_default(require("../svg"));
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
        "\n\n  width: 100%;\n  height: 100%;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var CheckmarkSVG = /*#__PURE__*/ function(SVG) {
    _inherits(CheckmarkSVG, SVG);
    function CheckmarkSVG() {
        _class_call_check(this, CheckmarkSVG);
        return _call_super(this, CheckmarkSVG, arguments);
    }
    _create_class(CheckmarkSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    transform: "matrix(0.70580178,0,0,0.69424702,3.0000007,2.999987)"
                }, /*#__PURE__*/ React.createElement("path", {
                    style: "fill:#ffffff",
                    d: "M 6.0799812,16.1216 Q 7.3454978,13.232921 8.7898374,10.605598 10.247933,7.9645203 11.788561,5.7361107 13.604303,3.1225438 14.649729,1.9670722 15.323754,1.224269 15.915246,0.74282245 16.259136,0.46771016 17.001939,0.33015401 18.803925,1.9250438e-5 19.519217,1.9250438e-5 q 0.316379,0 0.316379,0.220089839562 0,0.20633422 -0.316379,0.49520213 -2.751123,2.44849948 -5.777358,7.00160798 -3.01248,4.5531088 -5.0895778,9.6701968 -0.78407,1.912031 -1.1004492,2.352211 -0.3026235,0.426424 -1.925786,0.426424 -1.0591824,0 -1.3342947,-0.206335 Q 4.0303946,19.753082 3.3288583,18.652633 2.1183642,16.823136 0.72904706,15.351285 -5.2992254e-7,14.580971 -5.2992254e-7,14.168303 q 0,-0.577736 0.81158127992254,-1.127961 0.81158125,-0.56398 1.33429465,-0.56398 0.7290476,0 1.7469631,0.825337 1.0316711,0.811581 2.1871427,2.819901 z"
                }));
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showCheckmarkSVG = this.show.bind(this), hideCheckmarkSVG = this.hide.bind(this), isCheckmarkSVGShowing = this.isShowing.bind(this); ///
                return {
                    showCheckmarkSVG: showCheckmarkSVG,
                    hideCheckmarkSVG: hideCheckmarkSVG,
                    isCheckmarkSVGShowing: isCheckmarkSVGShowing
                };
            }
        }
    ]);
    return CheckmarkSVG;
}(_svg.default);
_define_property(CheckmarkSVG, "defaultProperties", {
    className: "checkmark",
    viewBox: "0 0 20 20"
});
var _default = (0, _easywithstyle.default)(CheckmarkSVG)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L3N2Zy9jaGVja21hcmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTVkcgZnJvbSBcIi4uL3N2Z1wiO1xuXG5jbGFzcyBDaGVja21hcmtTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjcwNTgwMTc4LDAsMCwwLjY5NDI0NzAyLDMuMDAwMDAwNywyLjk5OTk4NylcIj5cbiAgICAgICAgPHBhdGggc3R5bGU9XCJmaWxsOiNmZmZmZmZcIiBkPVwiTSA2LjA3OTk4MTIsMTYuMTIxNiBRIDcuMzQ1NDk3OCwxMy4yMzI5MjEgOC43ODk4Mzc0LDEwLjYwNTU5OCAxMC4yNDc5MzMsNy45NjQ1MjAzIDExLjc4ODU2MSw1LjczNjExMDcgMTMuNjA0MzAzLDMuMTIyNTQzOCAxNC42NDk3MjksMS45NjcwNzIyIDE1LjMyMzc1NCwxLjIyNDI2OSAxNS45MTUyNDYsMC43NDI4MjI0NSAxNi4yNTkxMzYsMC40Njc3MTAxNiAxNy4wMDE5MzksMC4zMzAxNTQwMSAxOC44MDM5MjUsMS45MjUwNDM4ZS01IDE5LjUxOTIxNywxLjkyNTA0MzhlLTUgcSAwLjMxNjM3OSwwIDAuMzE2Mzc5LDAuMjIwMDg5ODM5NTYyIDAsMC4yMDYzMzQyMiAtMC4zMTYzNzksMC40OTUyMDIxMyAtMi43NTExMjMsMi40NDg0OTk0OCAtNS43NzczNTgsNy4wMDE2MDc5OCAtMy4wMTI0OCw0LjU1MzEwODggLTUuMDg5NTc3OCw5LjY3MDE5NjggLTAuNzg0MDcsMS45MTIwMzEgLTEuMTAwNDQ5MiwyLjM1MjIxMSAtMC4zMDI2MjM1LDAuNDI2NDI0IC0xLjkyNTc4NiwwLjQyNjQyNCAtMS4wNTkxODI0LDAgLTEuMzM0Mjk0NywtMC4yMDYzMzUgUSA0LjAzMDM5NDYsMTkuNzUzMDgyIDMuMzI4ODU4MywxOC42NTI2MzMgMi4xMTgzNjQyLDE2LjgyMzEzNiAwLjcyOTA0NzA2LDE1LjM1MTI4NSAtNS4yOTkyMjU0ZS03LDE0LjU4MDk3MSAtNS4yOTkyMjU0ZS03LDE0LjE2ODMwMyBxIDAsLTAuNTc3NzM2IDAuODExNTgxMjc5OTIyNTQsLTEuMTI3OTYxIDAuODExNTgxMjUsLTAuNTYzOTggMS4zMzQyOTQ2NSwtMC41NjM5OCAwLjcyOTA0NzYsMCAxLjc0Njk2MzEsMC44MjUzMzcgMS4wMzE2NzExLDAuODExNTgxIDIuMTg3MTQyNywyLjgxOTkwMSB6XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNob3dDaGVja21hcmtTVkcgPSB0aGlzLnNob3cuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGhpZGVDaGVja21hcmtTVkcgPSB0aGlzLmhpZGUuYmluZCh0aGlzKSwgIC8vL1xuICAgICAgICAgIGlzQ2hlY2ttYXJrU1ZHU2hvd2luZyA9IHRoaXMuaXNTaG93aW5nLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0NoZWNrbWFya1NWRyxcbiAgICAgIGhpZGVDaGVja21hcmtTVkcsXG4gICAgICBpc0NoZWNrbWFya1NWR1Nob3dpbmdcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY2hlY2ttYXJrXCIsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ2hlY2ttYXJrU1ZHKWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiQ2hlY2ttYXJrU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJ0cmFuc2Zvcm0iLCJwYXRoIiwic3R5bGUiLCJkIiwicGFyZW50Q29udGV4dCIsInNob3dDaGVja21hcmtTVkciLCJzaG93IiwiYmluZCIsImhpZGVDaGVja21hcmtTVkciLCJoaWRlIiwiaXNDaGVja21hcmtTVkdTaG93aW5nIiwiaXNTaG93aW5nIiwiU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ2aWV3Qm94Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQ0E7OztlQUFBOzs7b0VBakNzQjswREFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQztvQkFBRUMsV0FBVTtpQ0FDWCxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQWVDLEdBQUU7O1lBSW5DOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksR0FDdENDLG1CQUFtQixJQUFJLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLElBQUksR0FDdENHLHdCQUF3QixJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLElBQUksR0FBSSxHQUFHO2dCQUU3RCxPQUFRO29CQUNORixrQkFBQUE7b0JBQ0FHLGtCQUFBQTtvQkFDQUUsdUJBQUFBO2dCQUNGO1lBQ0Y7OztXQXJCSWI7RUFBcUJlLFlBQUc7QUF1QjVCLGlCQXZCSWYsY0F1QkdnQixxQkFBb0I7SUFDekJDLFdBQVc7SUFDWEMsU0FBUztBQUNYO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ25CIn0=