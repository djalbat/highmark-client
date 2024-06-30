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
var _menu = /*#__PURE__*/ _interop_require_default(require("./view/div/menu"));
var _overlay = /*#__PURE__*/ _interop_require_default(require("./view/div/overlay"));
var _anchors = /*#__PURE__*/ _interop_require_default(require("./view/div/anchors"));
var _divisions = /*#__PURE__*/ _interop_require_default(require("./view/div/divisions"));
var _preloader = /*#__PURE__*/ _interop_require_default(require("./view/div/preloader"));
var _imagePreview = /*#__PURE__*/ _interop_require_default(require("./view/div/imagePreview"));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 100%;\n  height: 100%;\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "previewImageCustomHandler", function(event, element, image) {
            _this.showImagePreviewDiv(image);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "updateZoom",
            value: function updateZoom() {
                this.updateMenuZoom();
                this.updateDivisionsZoom();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_imagePreview.default, null),
                    /*#__PURE__*/ React.createElement(_preloader.default, null),
                    /*#__PURE__*/ React.createElement(_overlay.default, null),
                    /*#__PURE__*/ React.createElement(_divisions.default, {
                        onCustomPreviewImage: this.previewImageCustomHandler
                    }),
                    /*#__PURE__*/ React.createElement(_anchors.default, null),
                    /*#__PURE__*/ React.createElement(_menu.default, null)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.show(); ///
                this.assignContext();
                this.updateNativeGestures();
                this.updateDivisionsColours();
                this.updateFullScreenCheckboxDiv();
                this.updateInvertColoursCheckboxDiv();
                this.updateNativeGesturesCheckboxDiv();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", []);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IE1lbnVEaXYgZnJvbSBcIi4vdmlldy9kaXYvbWVudVwiO1xuaW1wb3J0IE92ZXJsYXlEaXYgZnJvbSBcIi4vdmlldy9kaXYvb3ZlcmxheVwiO1xuaW1wb3J0IEFuY2hvcnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvYW5jaG9yc1wiO1xuaW1wb3J0IERpdmlzaW9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9kaXZpc2lvbnNcIjtcbmltcG9ydCBQcmVsb2FkZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvcHJlbG9hZGVyXCI7XG5pbXBvcnQgSW1hZ2VQcmV2aWV3RGl2IGZyb20gXCIuL3ZpZXcvZGl2L2ltYWdlUHJldmlld1wiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHVwZGF0ZVpvb20oKSB7XG4gICAgdGhpcy51cGRhdGVNZW51Wm9vbSgpO1xuICAgIHRoaXMudXBkYXRlRGl2aXNpb25zWm9vbSgpO1xuICB9XG5cbiAgcHJldmlld0ltYWdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW1hZ2UpID0+IHtcbiAgICB0aGlzLnNob3dJbWFnZVByZXZpZXdEaXYoaW1hZ2UpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEltYWdlUHJldmlld0Rpdi8+LFxuICAgICAgPFByZWxvYWRlckRpdi8+LFxuICAgICAgPE92ZXJsYXlEaXYvPixcbiAgICAgIDxEaXZpc2lvbnNEaXYgb25DdXN0b21QcmV2aWV3SW1hZ2U9e3RoaXMucHJldmlld0ltYWdlQ3VzdG9tSGFuZGxlcn0gLz4sXG4gICAgICA8QW5jaG9yc0Rpdi8+LFxuICAgICAgPE1lbnVEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2hvdygpOyAgLy8vXG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXMoKTtcbiAgICB0aGlzLnVwZGF0ZURpdmlzaW9uc0NvbG91cnMoKTtcbiAgICB0aGlzLnVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdigpO1xuICAgIHRoaXMudXBkYXRlSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2KCk7XG4gICAgdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJwcmV2aWV3SW1hZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW1hZ2UiLCJzaG93SW1hZ2VQcmV2aWV3RGl2IiwidXBkYXRlWm9vbSIsInVwZGF0ZU1lbnVab29tIiwidXBkYXRlRGl2aXNpb25zWm9vbSIsImNoaWxkRWxlbWVudHMiLCJJbWFnZVByZXZpZXdEaXYiLCJQcmVsb2FkZXJEaXYiLCJPdmVybGF5RGl2IiwiRGl2aXNpb25zRGl2Iiwib25DdXN0b21QcmV2aWV3SW1hZ2UiLCJBbmNob3JzRGl2IiwiTWVudURpdiIsImluaXRpYWxpc2UiLCJzaG93IiwiYXNzaWduQ29udGV4dCIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwidXBkYXRlRGl2aXNpb25zQ29sb3VycyIsInVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdiIsInVwZGF0ZUludmVydENvbG91cnNDaGVja2JveERpdiIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlEQTs7O2VBQUE7OztvRUF2RHNCO29CQUVFOzJEQUVKOzhEQUNHOzhEQUNBO2dFQUNFO2dFQUNBO21FQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEscUJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFNSkMsa0RBQUFBLDZCQUE0QixTQUFDQyxPQUFPQyxTQUFTQztZQUMzQyxNQUFLQyxtQkFBbUIsQ0FBQ0Q7UUFDM0I7OztrQkFSSUo7O1lBQ0pNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGNBQWM7Z0JBQ25CLElBQUksQ0FBQ0MsbUJBQW1CO1lBQzFCOzs7WUFNQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLHFCQUFlO2tDQUNoQixvQkFBQ0Msa0JBQVk7a0NBQ2Isb0JBQUNDLGdCQUFVO2tDQUNYLG9CQUFDQyxrQkFBWTt3QkFBQ0Msc0JBQXNCLElBQUksQ0FBQ2IseUJBQXlCOztrQ0FDbEUsb0JBQUNjLGdCQUFVO2tDQUNYLG9CQUFDQyxhQUFPO2lCQUVUO1lBQ0g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxJQUFJLElBQUssR0FBRztnQkFFakIsSUFBSSxDQUFDQyxhQUFhO2dCQUVsQixJQUFJLENBQUNDLG9CQUFvQjtnQkFDekIsSUFBSSxDQUFDQyxzQkFBc0I7Z0JBQzNCLElBQUksQ0FBQ0MsMkJBQTJCO2dCQUNoQyxJQUFJLENBQUNDLDhCQUE4QjtnQkFDbkMsSUFBSSxDQUFDQywrQkFBK0I7WUFDdEM7OztXQWpDSXhCO3FCQUFheUIsYUFBTztBQW1DeEIsaUJBbkNJekIsTUFtQ0cwQixXQUFVO0FBRWpCLGlCQXJDSTFCLE1BcUNHMkIscUJBQW9CLEVBQUU7QUFFN0IsaUJBdkNJM0IsTUF1Q0c0QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUM5QiJ9