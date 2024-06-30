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
var _easymobile = require("easy-mobile");
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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen, ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
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
        _define_property(_assert_this_initialized(_this), "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            switch(keyCode){
                case ESCAPE_KEY_CODE:
                    {
                        var imagePreviewDivShowing = _this.isImagePreviewDivShowing();
                        if (imagePreviewDivShowing) {
                            _this.hideImagePreviewDiv();
                        } else {
                            var fullScreen = isFullScreen();
                            if (fullScreen) {
                                controller.exitFullScreen();
                            }
                            controller.closeMenu();
                        }
                        break;
                    }
                case ARROW_UP_KEY_CODE:
                    {
                        _this.showFirstDiv();
                        break;
                    }
                case ARROW_DOWN_KEY_CODE:
                    {
                        _this.showLastDiv();
                        break;
                    }
                case ENTER_KEY_CODE:
                case ARROW_RIGHT_KEY_CODE:
                    {
                        _this.showRightDiv();
                        break;
                    }
                case BACKSPACE_KEY_CODE:
                case ARROW_LEFT_KEY_CODE:
                    {
                        _this.showLeftDiv();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBmdWxsU2NyZWVuVXRpbGl0aWVzIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBPdmVybGF5RGl2IGZyb20gXCIuL3ZpZXcvZGl2L292ZXJsYXlcIjtcbmltcG9ydCBBbmNob3JzRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2FuY2hvcnNcIjtcbmltcG9ydCBEaXZpc2lvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvZGl2aXNpb25zXCI7XG5pbXBvcnQgUHJlbG9hZGVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3ByZWxvYWRlclwiO1xuaW1wb3J0IEltYWdlUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9pbWFnZVByZXZpZXdcIjtcblxuY29uc3QgeyBpc0Z1bGxTY3JlZW4gfSA9IGZ1bGxTY3JlZW5VdGlsaXRpZXMsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBwcmV2aWV3SW1hZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbWFnZSkgPT4ge1xuICAgIHRoaXMuc2hvd0ltYWdlUHJldmlld0RpdihpbWFnZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGltYWdlUHJldmlld0RpdlNob3dpbmcgPSB0aGlzLmlzSW1hZ2VQcmV2aWV3RGl2U2hvd2luZygpO1xuXG4gICAgICAgIGlmIChpbWFnZVByZXZpZXdEaXZTaG93aW5nKSB7XG4gICAgICAgICAgdGhpcy5oaWRlSW1hZ2VQcmV2aWV3RGl2KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250cm9sbGVyLmNsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19ET1dOX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xhc3REaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHREaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVpvb20oKSB7XG4gICAgdGhpcy51cGRhdGVNZW51Wm9vbSgpO1xuICAgIHRoaXMudXBkYXRlRGl2aXNpb25zWm9vbSgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEltYWdlUHJldmlld0Rpdi8+LFxuICAgICAgPFByZWxvYWRlckRpdi8+LFxuICAgICAgPE92ZXJsYXlEaXYvPixcbiAgICAgIDxEaXZpc2lvbnNEaXYgb25DdXN0b21QcmV2aWV3SW1hZ2U9e3RoaXMucHJldmlld0ltYWdlQ3VzdG9tSGFuZGxlcn0gLz4sXG4gICAgICA8QW5jaG9yc0Rpdi8+LFxuICAgICAgPE1lbnVEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2hvdygpOyAgLy8vXG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXMoKTtcbiAgICB0aGlzLnVwZGF0ZURpdmlzaW9uc0NvbG91cnMoKTtcbiAgICB0aGlzLnVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdigpO1xuICAgIHRoaXMudXBkYXRlSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2KCk7XG4gICAgdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW107XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gICAgXG5gO1xuIl0sIm5hbWVzIjpbImlzRnVsbFNjcmVlbiIsImZ1bGxTY3JlZW5VdGlsaXRpZXMiLCJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInByZXZpZXdJbWFnZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJpbWFnZSIsInNob3dJbWFnZVByZXZpZXdEaXYiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJpbWFnZVByZXZpZXdEaXZTaG93aW5nIiwiaXNJbWFnZVByZXZpZXdEaXZTaG93aW5nIiwiaGlkZUltYWdlUHJldmlld0RpdiIsImZ1bGxTY3JlZW4iLCJjb250cm9sbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJjbG9zZU1lbnUiLCJzaG93Rmlyc3REaXYiLCJzaG93TGFzdERpdiIsInNob3dSaWdodERpdiIsInNob3dMZWZ0RGl2IiwidXBkYXRlWm9vbSIsInVwZGF0ZU1lbnVab29tIiwidXBkYXRlRGl2aXNpb25zWm9vbSIsImRpZE1vdW50Iiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsIkltYWdlUHJldmlld0RpdiIsIlByZWxvYWRlckRpdiIsIk92ZXJsYXlEaXYiLCJEaXZpc2lvbnNEaXYiLCJvbkN1c3RvbVByZXZpZXdJbWFnZSIsIkFuY2hvcnNEaXYiLCJNZW51RGl2IiwiaW5pdGlhbGlzZSIsInNob3ciLCJhc3NpZ25Db250ZXh0IiwidXBkYXRlTmF0aXZlR2VzdHVyZXMiLCJ1cGRhdGVEaXZpc2lvbnNDb2xvdXJzIiwidXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2IiwidXBkYXRlSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2IiwidXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEhBOzs7ZUFBQTs7O29FQTVIc0I7eUJBRUc7b0JBQ087MEJBQ0k7MkRBRWhCOzhEQUNHOzhEQUNBO2dFQUNFO2dFQUNBO21FQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU0sQUFBRUEsZUFBaUJDLCtCQUFtQixDQUFwQ0QsY0FDQUUsaUJBTXlCQyxtQkFBUSxDQU5qQ0QsZ0JBQ0FFLGtCQUt5QkQsbUJBQVEsQ0FMakNDLGlCQUNBQyxxQkFJeUJGLG1CQUFRLENBSmpDRSxvQkFDQUMsb0JBR3lCSCxtQkFBUSxDQUhqQ0csbUJBQ0FDLHNCQUV5QkosbUJBQVEsQ0FGakNJLHFCQUNBQyxzQkFDeUJMLG1CQUFRLENBRGpDSyxxQkFDQUMsdUJBQXlCTixtQkFBUSxDQUFqQ007QUFFUixJQUFBLEFBQU1DLHFCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSw2QkFBNEIsU0FBQ0MsT0FBT0MsU0FBU0M7WUFDM0MsTUFBS0MsbUJBQW1CLENBQUNEO1FBQzNCO1FBRUFFLGtEQUFBQSxrQkFBaUIsU0FBQ0osT0FBT0M7WUFDdkIsSUFBTSxBQUFFSSxVQUFZTCxNQUFaSztZQUVSLE9BQVFBO2dCQUNOLEtBQUtiO29CQUFpQjt3QkFDcEIsSUFBTWMseUJBQXlCLE1BQUtDLHdCQUF3Qjt3QkFFNUQsSUFBSUQsd0JBQXdCOzRCQUMxQixNQUFLRSxtQkFBbUI7d0JBQzFCLE9BQU87NEJBQ0wsSUFBTUMsYUFBYXJCOzRCQUVuQixJQUFJcUIsWUFBWTtnQ0FDZEMsV0FBV0MsY0FBYzs0QkFDM0I7NEJBRUFELFdBQVdFLFNBQVM7d0JBQ3RCO3dCQUVBO29CQUNGO2dCQUVBLEtBQUtsQjtvQkFBbUI7d0JBQ3RCLE1BQUttQixZQUFZO3dCQUVqQjtvQkFDRjtnQkFFQSxLQUFLbEI7b0JBQXFCO3dCQUN4QixNQUFLbUIsV0FBVzt3QkFFaEI7b0JBQ0Y7Z0JBRUEsS0FBS3hCO2dCQUNMLEtBQUtPO29CQUFzQjt3QkFDekIsTUFBS2tCLFlBQVk7d0JBRWpCO29CQUNGO2dCQUVBLEtBQUt0QjtnQkFDTCxLQUFLRztvQkFBcUI7d0JBQ3hCLE1BQUtvQixXQUFXO3dCQUVoQjtvQkFDRjtZQUNGO1FBQ0Y7OztrQkFyRElsQjs7WUF1REptQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxjQUFjO2dCQUNuQixJQUFJLENBQUNDLG1CQUFtQjtZQUMxQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRUMsWUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDbEIsY0FBYztZQUN0Qzs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0VGLFlBQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQ3BCLGNBQWM7WUFDdkM7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLHFCQUFlO2tDQUNoQixvQkFBQ0Msa0JBQVk7a0NBQ2Isb0JBQUNDLGdCQUFVO2tDQUNYLG9CQUFDQyxrQkFBWTt3QkFBQ0Msc0JBQXNCLElBQUksQ0FBQy9CLHlCQUF5Qjs7a0NBQ2xFLG9CQUFDZ0MsZ0JBQVU7a0NBQ1gsb0JBQUNDLGFBQU87aUJBRVQ7WUFDSDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLElBQUksSUFBSyxHQUFHO2dCQUVqQixJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUN6QixJQUFJLENBQUNDLHNCQUFzQjtnQkFDM0IsSUFBSSxDQUFDQywyQkFBMkI7Z0JBQ2hDLElBQUksQ0FBQ0MsOEJBQThCO2dCQUNuQyxJQUFJLENBQUNDLCtCQUErQjtZQUN0Qzs7O1dBM0ZJMUM7cUJBQWEyQyxhQUFPO0FBNkZ4QixpQkE3RkkzQyxNQTZGRzRDLFdBQVU7QUFFakIsaUJBL0ZJNUMsTUErRkc2QyxxQkFBb0IsRUFBRTtBQUU3QixpQkFqR0k3QyxNQWlHRzhDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2hEIn0=