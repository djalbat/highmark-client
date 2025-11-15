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
var _necessary = require("necessary");
var _easy = require("easy");
require("./view/anchors");
var _menu = /*#__PURE__*/ _interop_require_default(require("./view/div/menu"));
var _preloader = /*#__PURE__*/ _interop_require_default(require("./view/div/preloader"));
var _divisions = /*#__PURE__*/ _interop_require_default(require("./view/div/divisions"));
var _imagePreview = /*#__PURE__*/ _interop_require_default(require("./view/div/imagePreview"));
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
        "\n\n  width: 100%;\n  height: 100%;\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "previewImageCustomHandler", function(event, element, image) {
            _this.showImagePreviewDiv(image);
        }), _define_property(_this, "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            switch(keyCode){
                case ESCAPE_KEY_CODE:
                    {
                        var imagePreviewDivShowing = _this.isImagePreviewDivShowing();
                        if (imagePreviewDivShowing) {
                            _this.hideImagePreviewDiv();
                        } else {
                            var fullScreen = _this.isFullScreen();
                            if (fullScreen) {
                                controller.exitFullScreen();
                            }
                            controller.closeMenu();
                        }
                        break;
                    }
                case ARROW_UP_KEY_CODE:
                    {
                        _this.showFirstDivisionDiv();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastDivisionDiv();
                        break;
                    }
                case ENTER_KEY_CODE:
                case ARROW_RIGHT_KEY_CODE:
                    {
                        _this.showRightDivisionDiv();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftDivisionDiv();
                        break;
                    }
            }
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
            key: "didMount",
            value: function didMount() {
                _easy.window.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                _easy.window.offKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_imagePreview.default, null),
                    /*#__PURE__*/ React.createElement(_preloader.default, null),
                    /*#__PURE__*/ React.createElement(_divisions.default, {
                        onCustomPreviewImage: this.previewImageCustomHandler
                    }),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBcIi4vdmlldy9hbmNob3JzXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBQcmVsb2FkZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvcHJlbG9hZGVyXCI7XG5pbXBvcnQgRGl2aXNpb25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2RpdmlzaW9uc1wiO1xuaW1wb3J0IEltYWdlUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9pbWFnZVByZXZpZXdcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcHJldmlld0ltYWdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW1hZ2UpID0+IHtcbiAgICB0aGlzLnNob3dJbWFnZVByZXZpZXdEaXYoaW1hZ2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBpbWFnZVByZXZpZXdEaXZTaG93aW5nID0gdGhpcy5pc0ltYWdlUHJldmlld0RpdlNob3dpbmcoKTtcblxuICAgICAgICBpZiAoaW1hZ2VQcmV2aWV3RGl2U2hvd2luZykge1xuICAgICAgICAgIHRoaXMuaGlkZUltYWdlUHJldmlld0RpdigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250cm9sbGVyLmNsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlWm9vbSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1lbnVab29tKCk7XG4gICAgdGhpcy51cGRhdGVEaXZpc2lvbnNab29tKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW1hZ2VQcmV2aWV3RGl2Lz4sXG4gICAgICA8UHJlbG9hZGVyRGl2Lz4sXG4gICAgICA8RGl2aXNpb25zRGl2IG9uQ3VzdG9tUHJldmlld0ltYWdlPXt0aGlzLnByZXZpZXdJbWFnZUN1c3RvbUhhbmRsZXJ9IC8+LFxuICAgICAgPE1lbnVEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2hvdygpOyAgLy8vXG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXMoKTtcbiAgICB0aGlzLnVwZGF0ZURpdmlzaW9uc0NvbG91cnMoKTtcbiAgICB0aGlzLnVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdigpO1xuICAgIHRoaXMudXBkYXRlSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2KCk7XG4gICAgdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJCQUNLU1BBQ0VfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3IiwicHJldmlld0ltYWdlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImltYWdlIiwic2hvd0ltYWdlUHJldmlld0RpdiIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsImltYWdlUHJldmlld0RpdlNob3dpbmciLCJpc0ltYWdlUHJldmlld0RpdlNob3dpbmciLCJoaWRlSW1hZ2VQcmV2aWV3RGl2IiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsImNsb3NlTWVudSIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInNob3dSaWdodERpdmlzaW9uRGl2Iiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInVwZGF0ZVpvb20iLCJ1cGRhdGVNZW51Wm9vbSIsInVwZGF0ZURpdmlzaW9uc1pvb20iLCJkaWRNb3VudCIsIndpbmRvdyIsIm9uS2V5RG93biIsIndpbGxVbm1vdW50Iiwib2ZmS2V5RG93biIsImNoaWxkRWxlbWVudHMiLCJJbWFnZVByZXZpZXdEaXYiLCJQcmVsb2FkZXJEaXYiLCJEaXZpc2lvbnNEaXYiLCJvbkN1c3RvbVByZXZpZXdJbWFnZSIsIk1lbnVEaXYiLCJpbml0aWFsaXNlIiwic2hvdyIsImFzc2lnbkNvbnRleHQiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlcyIsInVwZGF0ZURpdmlzaW9uc0NvbG91cnMiLCJ1cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJ1cGRhdGVJbnZlcnRDb2xvdXJzQ2hlY2tib3hEaXYiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwSEE7OztlQUFBOzs7b0VBeEhzQjt5QkFFRztvQkFDTztRQUV6QjsyREFFYTtnRUFDSztnRUFDQTttRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFRQSxpQkFNeUJDLG1CQUFRLENBTmpDRCxnQkFDQUUsa0JBS3lCRCxtQkFBUSxDQUxqQ0MsaUJBQ0FDLHFCQUl5QkYsbUJBQVEsQ0FKakNFLG9CQUNBQyxvQkFHeUJILG1CQUFRLENBSGpDRyxtQkFDQUMsc0JBRXlCSixtQkFBUSxDQUZqQ0kscUJBQ0FDLHNCQUN5QkwsbUJBQVEsQ0FEakNLLHFCQUNBQyx1QkFBeUJOLG1CQUFRLENBQWpDTTtBQUVSLElBQUEsQUFBTUMscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsa0JBQ0pDLHdCQUFBQSw2QkFBNEIsU0FBQ0MsT0FBT0MsU0FBU0M7WUFDM0MsTUFBS0MsbUJBQW1CLENBQUNEO1FBQzNCLElBRUFFLHdCQUFBQSxrQkFBaUIsU0FBQ0osT0FBT0M7WUFDdkIsSUFBTSxBQUFFSSxVQUFZTCxNQUFaSztZQUVSLE9BQVFBO2dCQUNOLEtBQUtiO29CQUFpQjt3QkFDcEIsSUFBTWMseUJBQXlCLE1BQUtDLHdCQUF3Qjt3QkFFNUQsSUFBSUQsd0JBQXdCOzRCQUMxQixNQUFLRSxtQkFBbUI7d0JBQzFCLE9BQU87NEJBQ0wsSUFBTUMsYUFBYSxNQUFLQyxZQUFZOzRCQUVwQyxJQUFJRCxZQUFZO2dDQUNkRSxXQUFXQyxjQUFjOzRCQUMzQjs0QkFFQUQsV0FBV0UsU0FBUzt3QkFDdEI7d0JBRUE7b0JBQ0Y7Z0JBRUEsS0FBS25CO29CQUFtQjt3QkFDdEIsTUFBS29CLG9CQUFvQjt3QkFFekI7b0JBQ0Y7Z0JBRUEsS0FBS25CO29CQUFxQjt3QkFDeEIsTUFBS29CLG1CQUFtQjt3QkFFeEI7b0JBQ0Y7Z0JBRUEsS0FBS3pCO2dCQUNMLEtBQUtPO29CQUFzQjt3QkFDekIsTUFBS21CLG9CQUFvQjt3QkFFekI7b0JBQ0Y7Z0JBRUEsS0FBS3ZCO2dCQUNMLEtBQUtHO29CQUFxQjt3QkFDeEIsTUFBS3FCLG1CQUFtQjt3QkFFeEI7b0JBQ0Y7WUFDRjtRQUNGOzs7a0JBckRJbkI7O1lBdURKb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsY0FBYztnQkFDbkIsSUFBSSxDQUFDQyxtQkFBbUI7WUFDMUI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0VDLFlBQU0sQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ25CLGNBQWM7WUFDdEM7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFRixZQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUNyQixjQUFjO1lBQ3ZDOzs7WUFFQXNCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxxQkFBZTtrQ0FDaEIsb0JBQUNDLGtCQUFZO2tDQUNiLG9CQUFDQyxrQkFBWTt3QkFBQ0Msc0JBQXNCLElBQUksQ0FBQy9CLHlCQUF5Qjs7a0NBQ2xFLG9CQUFDZ0MsYUFBTztpQkFFVDtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsSUFBSSxJQUFLLEdBQUc7Z0JBRWpCLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBSSxDQUFDQyxvQkFBb0I7Z0JBQ3pCLElBQUksQ0FBQ0Msc0JBQXNCO2dCQUMzQixJQUFJLENBQUNDLDJCQUEyQjtnQkFDaEMsSUFBSSxDQUFDQyw4QkFBOEI7Z0JBQ25DLElBQUksQ0FBQ0MsK0JBQStCO1lBQ3RDOzs7V0F6Rkl6QztxQkFBYTBDLGFBQU87QUEyRnhCLGlCQTNGSTFDLE1BMkZHMkMsV0FBVTtBQUVqQixpQkE3RkkzQyxNQTZGRzRDLHFCQUFvQixFQUFFO0FBRTdCLGlCQS9GSTVDLE1BK0ZHNkMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDL0MifQ==