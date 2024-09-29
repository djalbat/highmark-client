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
var isFullScreen = _easymobile.fullScreenUtilities.isFullScreen, ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBmdWxsU2NyZWVuVXRpbGl0aWVzIH0gZnJvbSBcImVhc3ktbW9iaWxlXCI7XG5cbmltcG9ydCBcIi4vdmlldy9hbmNob3JzXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBPdmVybGF5RGl2IGZyb20gXCIuL3ZpZXcvZGl2L292ZXJsYXlcIjtcbmltcG9ydCBEaXZpc2lvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvZGl2aXNpb25zXCI7XG5pbXBvcnQgUHJlbG9hZGVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3ByZWxvYWRlclwiO1xuaW1wb3J0IEltYWdlUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9pbWFnZVByZXZpZXdcIjtcblxuY29uc3QgeyBpc0Z1bGxTY3JlZW4gfSA9IGZ1bGxTY3JlZW5VdGlsaXRpZXMsXG4gICAgICB7IEVOVEVSX0tFWV9DT0RFLFxuICAgICAgICBFU0NBUEVfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1JJR0hUX0tFWV9DT0RFIH0gPSBrZXlDb2RlcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBwcmV2aWV3SW1hZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbWFnZSkgPT4ge1xuICAgIHRoaXMuc2hvd0ltYWdlUHJldmlld0RpdihpbWFnZSk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgRVNDQVBFX0tFWV9DT0RFOiB7XG4gICAgICAgIGNvbnN0IGltYWdlUHJldmlld0RpdlNob3dpbmcgPSB0aGlzLmlzSW1hZ2VQcmV2aWV3RGl2U2hvd2luZygpO1xuXG4gICAgICAgIGlmIChpbWFnZVByZXZpZXdEaXZTaG93aW5nKSB7XG4gICAgICAgICAgdGhpcy5oaWRlSW1hZ2VQcmV2aWV3RGl2KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IGlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250cm9sbGVyLmNsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlWm9vbSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1lbnVab29tKCk7XG4gICAgdGhpcy51cGRhdGVEaXZpc2lvbnNab29tKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW1hZ2VQcmV2aWV3RGl2Lz4sXG4gICAgICA8UHJlbG9hZGVyRGl2Lz4sXG4gICAgICA8T3ZlcmxheURpdi8+LFxuICAgICAgPERpdmlzaW9uc0RpdiBvbkN1c3RvbVByZXZpZXdJbWFnZT17dGhpcy5wcmV2aWV3SW1hZ2VDdXN0b21IYW5kbGVyfSAvPixcbiAgICAgIDxNZW51RGl2Lz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNob3coKTsgIC8vL1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnVwZGF0ZU5hdGl2ZUdlc3R1cmVzKCk7XG4gICAgdGhpcy51cGRhdGVEaXZpc2lvbnNDb2xvdXJzKCk7XG4gICAgdGhpcy51cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYoKTtcbiAgICB0aGlzLnVwZGF0ZUludmVydENvbG91cnNDaGVja2JveERpdigpO1xuICAgIHRoaXMudXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdigpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAgIFxuYDtcbiJdLCJuYW1lcyI6WyJpc0Z1bGxTY3JlZW4iLCJmdWxsU2NyZWVuVXRpbGl0aWVzIiwiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJwcmV2aWV3SW1hZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW1hZ2UiLCJzaG93SW1hZ2VQcmV2aWV3RGl2Iiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiaW1hZ2VQcmV2aWV3RGl2U2hvd2luZyIsImlzSW1hZ2VQcmV2aWV3RGl2U2hvd2luZyIsImhpZGVJbWFnZVByZXZpZXdEaXYiLCJmdWxsU2NyZWVuIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwiY2xvc2VNZW51Iiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2Iiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJzaG93TGVmdERpdmlzaW9uRGl2IiwidXBkYXRlWm9vbSIsInVwZGF0ZU1lbnVab29tIiwidXBkYXRlRGl2aXNpb25zWm9vbSIsImRpZE1vdW50Iiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsIkltYWdlUHJldmlld0RpdiIsIlByZWxvYWRlckRpdiIsIk92ZXJsYXlEaXYiLCJEaXZpc2lvbnNEaXYiLCJvbkN1c3RvbVByZXZpZXdJbWFnZSIsIk1lbnVEaXYiLCJpbml0aWFsaXNlIiwic2hvdyIsImFzc2lnbkNvbnRleHQiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlcyIsInVwZGF0ZURpdmlzaW9uc0NvbG91cnMiLCJ1cGRhdGVGdWxsU2NyZWVuQ2hlY2tib3hEaXYiLCJ1cGRhdGVJbnZlcnRDb2xvdXJzQ2hlY2tib3hEaXYiLCJ1cGRhdGVOYXRpdmVHZXN0dXJlc0NoZWNrYm94RGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4SEE7OztlQUFBOzs7b0VBNUhzQjt5QkFFRztvQkFDTzswQkFDSTtRQUU3QjsyREFFYTs4REFDRztnRUFDRTtnRUFDQTttRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNLEFBQUVBLGVBQWlCQywrQkFBbUIsQ0FBcENELGNBQ0FFLGlCQU15QkMsbUJBQVEsQ0FOakNELGdCQUNBRSxrQkFLeUJELG1CQUFRLENBTGpDQyxpQkFDQUMscUJBSXlCRixtQkFBUSxDQUpqQ0Usb0JBQ0FDLG9CQUd5QkgsbUJBQVEsQ0FIakNHLG1CQUNBQyxzQkFFeUJKLG1CQUFRLENBRmpDSSxxQkFDQUMsc0JBQ3lCTCxtQkFBUSxDQURqQ0sscUJBQ0FDLHVCQUF5Qk4sbUJBQVEsQ0FBakNNO0FBRVIsSUFBQSxBQUFNQyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2tDQUFBQSxrQkFDSkMsd0JBQUFBLDZCQUE0QixTQUFDQyxPQUFPQyxTQUFTQztZQUMzQyxNQUFLQyxtQkFBbUIsQ0FBQ0Q7UUFDM0IsSUFFQUUsd0JBQUFBLGtCQUFpQixTQUFDSixPQUFPQztZQUN2QixJQUFNLEFBQUVJLFVBQVlMLE1BQVpLO1lBRVIsT0FBUUE7Z0JBQ04sS0FBS2I7b0JBQWlCO3dCQUNwQixJQUFNYyx5QkFBeUIsTUFBS0Msd0JBQXdCO3dCQUU1RCxJQUFJRCx3QkFBd0I7NEJBQzFCLE1BQUtFLG1CQUFtQjt3QkFDMUIsT0FBTzs0QkFDTCxJQUFNQyxhQUFhckI7NEJBRW5CLElBQUlxQixZQUFZO2dDQUNkQyxXQUFXQyxjQUFjOzRCQUMzQjs0QkFFQUQsV0FBV0UsU0FBUzt3QkFDdEI7d0JBRUE7b0JBQ0Y7Z0JBRUEsS0FBS2xCO29CQUFtQjt3QkFDdEIsTUFBS21CLG9CQUFvQjt3QkFFekI7b0JBQ0Y7Z0JBRUEsS0FBS2xCO29CQUFxQjt3QkFDeEIsTUFBS21CLG1CQUFtQjt3QkFFeEI7b0JBQ0Y7Z0JBRUEsS0FBS3hCO2dCQUNMLEtBQUtPO29CQUFzQjt3QkFDekIsTUFBS2tCLG9CQUFvQjt3QkFFekI7b0JBQ0Y7Z0JBRUEsS0FBS3RCO2dCQUNMLEtBQUtHO29CQUFxQjt3QkFDeEIsTUFBS29CLG1CQUFtQjt3QkFFeEI7b0JBQ0Y7WUFDRjtRQUNGOzs7a0JBckRJbEI7O1lBdURKbUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsY0FBYztnQkFDbkIsSUFBSSxDQUFDQyxtQkFBbUI7WUFDMUI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0VDLFlBQU0sQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQ2xCLGNBQWM7WUFDdEM7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFRixZQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUNwQixjQUFjO1lBQ3ZDOzs7WUFFQXFCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxxQkFBZTtrQ0FDaEIsb0JBQUNDLGtCQUFZO2tDQUNiLG9CQUFDQyxnQkFBVTtrQ0FDWCxvQkFBQ0Msa0JBQVk7d0JBQUNDLHNCQUFzQixJQUFJLENBQUMvQix5QkFBeUI7O2tDQUNsRSxvQkFBQ2dDLGFBQU87aUJBRVQ7WUFDSDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLElBQUksSUFBSyxHQUFHO2dCQUVqQixJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUN6QixJQUFJLENBQUNDLHNCQUFzQjtnQkFDM0IsSUFBSSxDQUFDQywyQkFBMkI7Z0JBQ2hDLElBQUksQ0FBQ0MsOEJBQThCO2dCQUNuQyxJQUFJLENBQUNDLCtCQUErQjtZQUN0Qzs7O1dBMUZJekM7cUJBQWEwQyxhQUFPO0FBNEZ4QixpQkE1RkkxQyxNQTRGRzJDLFdBQVU7QUFFakIsaUJBOUZJM0MsTUE4Rkc0QyxxQkFBb0IsRUFBRTtBQUU3QixpQkFoR0k1QyxNQWdHRzZDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQy9DIn0=