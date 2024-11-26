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
var _overlay = /*#__PURE__*/ _interop_require_default(require("./view/div/overlay"));
var _divisions = /*#__PURE__*/ _interop_require_default(require("./view/div/divisions"));
var _preloader = /*#__PURE__*/ _interop_require_default(require("./view/div/preloader"));
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
                    /*#__PURE__*/ React.createElement(_overlay.default, null),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBcIi4vdmlldy9hbmNob3JzXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBPdmVybGF5RGl2IGZyb20gXCIuL3ZpZXcvZGl2L292ZXJsYXlcIjtcbmltcG9ydCBEaXZpc2lvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvZGl2aXNpb25zXCI7XG5pbXBvcnQgUHJlbG9hZGVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3ByZWxvYWRlclwiO1xuaW1wb3J0IEltYWdlUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9pbWFnZVByZXZpZXdcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcHJldmlld0ltYWdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW1hZ2UpID0+IHtcbiAgICB0aGlzLnNob3dJbWFnZVByZXZpZXdEaXYoaW1hZ2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBpbWFnZVByZXZpZXdEaXZTaG93aW5nID0gdGhpcy5pc0ltYWdlUHJldmlld0RpdlNob3dpbmcoKTtcblxuICAgICAgICBpZiAoaW1hZ2VQcmV2aWV3RGl2U2hvd2luZykge1xuICAgICAgICAgIHRoaXMuaGlkZUltYWdlUHJldmlld0RpdigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250cm9sbGVyLmNsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlWm9vbSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1lbnVab29tKCk7XG4gICAgdGhpcy51cGRhdGVEaXZpc2lvbnNab29tKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW1hZ2VQcmV2aWV3RGl2Lz4sXG4gICAgICA8UHJlbG9hZGVyRGl2Lz4sXG4gICAgICA8T3ZlcmxheURpdi8+LFxuICAgICAgPERpdmlzaW9uc0RpdiBvbkN1c3RvbVByZXZpZXdJbWFnZT17dGhpcy5wcmV2aWV3SW1hZ2VDdXN0b21IYW5kbGVyfSAvPixcbiAgICAgIDxNZW51RGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNob3coKTsgIC8vL1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCk7XG4gICAgdGhpcy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCk7XG4gICAgdGhpcy51cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYoKTtcbiAgICB0aGlzLnVwZGF0ZUludmVydENvbG91cnNDaGVja2JveERpdigpO1xuICAgIHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJFTlRFUl9LRVlfQ09ERSIsImtleUNvZGVzIiwiRVNDQVBFX0tFWV9DT0RFIiwiQkFDS1NQQUNFX0tFWV9DT0RFIiwiQVJST1dfVVBfS0VZX0NPREUiLCJBUlJPV19ET1dOX0tFWV9DT0RFIiwiQVJST1dfTEVGVF9LRVlfQ09ERSIsIkFSUk9XX1JJR0hUX0tFWV9DT0RFIiwiVmlldyIsInByZXZpZXdJbWFnZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJpbWFnZSIsInNob3dJbWFnZVByZXZpZXdEaXYiLCJrZXlEb3duSGFuZGxlciIsImtleUNvZGUiLCJpbWFnZVByZXZpZXdEaXZTaG93aW5nIiwiaXNJbWFnZVByZXZpZXdEaXZTaG93aW5nIiwiaGlkZUltYWdlUHJldmlld0RpdiIsImZ1bGxTY3JlZW4iLCJpc0Z1bGxTY3JlZW4iLCJjb250cm9sbGVyIiwiZXhpdEZ1bGxTY3JlZW4iLCJjbG9zZU1lbnUiLCJzaG93Rmlyc3REaXZpc2lvbkRpdiIsInNob3dMYXN0RGl2aXNpb25EaXYiLCJzaG93UmlnaHREaXZpc2lvbkRpdiIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJ1cGRhdGVab29tIiwidXBkYXRlTWVudVpvb20iLCJ1cGRhdGVEaXZpc2lvbnNab29tIiwiZGlkTW91bnQiLCJ3aW5kb3ciLCJvbktleURvd24iLCJ3aWxsVW5tb3VudCIsIm9mZktleURvd24iLCJjaGlsZEVsZW1lbnRzIiwiSW1hZ2VQcmV2aWV3RGl2IiwiUHJlbG9hZGVyRGl2IiwiT3ZlcmxheURpdiIsIkRpdmlzaW9uc0RpdiIsIm9uQ3VzdG9tUHJldmlld0ltYWdlIiwiTWVudURpdiIsImluaXRpYWxpc2UiLCJzaG93IiwiYXNzaWduQ29udGV4dCIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzIiwidXBkYXRlRGl2aXNpb25zQ29sb3VycyIsInVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdiIsInVwZGF0ZUludmVydENvbG91cnNDaGVja2JveERpdiIsInVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRIQTs7O2VBQUE7OztvRUExSHNCO3lCQUVHO29CQUNPO1FBRXpCOzJEQUVhOzhEQUNHO2dFQUNFO2dFQUNBO21FQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQVFBLGlCQU15QkMsbUJBQVEsQ0FOakNELGdCQUNBRSxrQkFLeUJELG1CQUFRLENBTGpDQyxpQkFDQUMscUJBSXlCRixtQkFBUSxDQUpqQ0Usb0JBQ0FDLG9CQUd5QkgsbUJBQVEsQ0FIakNHLG1CQUNBQyxzQkFFeUJKLG1CQUFRLENBRmpDSSxxQkFDQUMsc0JBQ3lCTCxtQkFBUSxDQURqQ0sscUJBQ0FDLHVCQUF5Qk4sbUJBQVEsQ0FBakNNO0FBRVIsSUFBQSxBQUFNQyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDZCQUE0QixTQUFDQyxPQUFPQyxTQUFTQztZQUMzQyxNQUFLQyxtQkFBbUIsQ0FBQ0Q7UUFDM0IsSUFFQUUsd0JBQUFBLGtCQUFpQixTQUFDSixPQUFPQztZQUN2QixJQUFNLEFBQUVJLFVBQVlMLE1BQVpLO1lBRVIsT0FBUUE7Z0JBQ04sS0FBS2I7b0JBQWlCO3dCQUNwQixJQUFNYyx5QkFBeUIsTUFBS0Msd0JBQXdCO3dCQUU1RCxJQUFJRCx3QkFBd0I7NEJBQzFCLE1BQUtFLG1CQUFtQjt3QkFDMUIsT0FBTzs0QkFDTCxJQUFNQyxhQUFhLE1BQUtDLFlBQVk7NEJBRXBDLElBQUlELFlBQVk7Z0NBQ2RFLFdBQVdDLGNBQWM7NEJBQzNCOzRCQUVBRCxXQUFXRSxTQUFTO3dCQUN0Qjt3QkFFQTtvQkFDRjtnQkFFQSxLQUFLbkI7b0JBQW1CO3dCQUN0QixNQUFLb0Isb0JBQW9CO3dCQUV6QjtvQkFDRjtnQkFFQSxLQUFLbkI7b0JBQXFCO3dCQUN4QixNQUFLb0IsbUJBQW1CO3dCQUV4QjtvQkFDRjtnQkFFQSxLQUFLekI7Z0JBQ0wsS0FBS087b0JBQXNCO3dCQUN6QixNQUFLbUIsb0JBQW9CO3dCQUV6QjtvQkFDRjtnQkFFQSxLQUFLdkI7Z0JBQ0wsS0FBS0c7b0JBQXFCO3dCQUN4QixNQUFLcUIsbUJBQW1CO3dCQUV4QjtvQkFDRjtZQUNGO1FBQ0Y7OztrQkFyREluQjs7WUF1REpvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxjQUFjO2dCQUNuQixJQUFJLENBQUNDLG1CQUFtQjtZQUMxQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRUMsWUFBTSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDbkIsY0FBYztZQUN0Qzs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0VGLFlBQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQ3JCLGNBQWM7WUFDdkM7OztZQUVBc0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLHFCQUFlO2tDQUNoQixvQkFBQ0Msa0JBQVk7a0NBQ2Isb0JBQUNDLGdCQUFVO2tDQUNYLG9CQUFDQyxrQkFBWTt3QkFBQ0Msc0JBQXNCLElBQUksQ0FBQ2hDLHlCQUF5Qjs7a0NBQ2xFLG9CQUFDaUMsYUFBTztpQkFFVDtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsSUFBSSxJQUFLLEdBQUc7Z0JBRWpCLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBSSxDQUFDQyxvQkFBb0I7Z0JBQ3pCLElBQUksQ0FBQ0Msc0JBQXNCO2dCQUMzQixJQUFJLENBQUNDLDJCQUEyQjtnQkFDaEMsSUFBSSxDQUFDQyw4QkFBOEI7Z0JBQ25DLElBQUksQ0FBQ0MsK0JBQStCO1lBQ3RDOzs7V0ExRkkxQztxQkFBYTJDLGFBQU87QUE0RnhCLGlCQTVGSTNDLE1BNEZHNEMsV0FBVTtBQUVqQixpQkE5Rkk1QyxNQThGRzZDLHFCQUFvQixFQUFFO0FBRTdCLGlCQWhHSTdDLE1BZ0dHOEMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDaEQifQ==