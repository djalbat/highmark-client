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
var _document = /*#__PURE__*/ _interop_require_default(require("./view/div/document"));
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
                    /*#__PURE__*/ React.createElement(_document.default, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBcIi4vdmlldy9hbmNob3JzXCI7XG5cbmltcG9ydCBNZW51RGl2IGZyb20gXCIuL3ZpZXcvZGl2L21lbnVcIjtcbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuaW1wb3J0IEltYWdlUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9pbWFnZVByZXZpZXdcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBCQUNLU1BBQ0VfS0VZX0NPREUsXG4gICAgICAgIEFSUk9XX1VQX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcHJldmlld0ltYWdlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW1hZ2UpID0+IHtcbiAgICB0aGlzLnNob3dJbWFnZVByZXZpZXdEaXYoaW1hZ2UpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBpbWFnZVByZXZpZXdEaXZTaG93aW5nID0gdGhpcy5pc0ltYWdlUHJldmlld0RpdlNob3dpbmcoKTtcblxuICAgICAgICBpZiAoaW1hZ2VQcmV2aWV3RGl2U2hvd2luZykge1xuICAgICAgICAgIHRoaXMuaGlkZUltYWdlUHJldmlld0RpdigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250cm9sbGVyLmNsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfVVBfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93Rmlyc3REaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX0RPV05fS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGFzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBCQUNLU1BBQ0VfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX0xFRlRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93TGVmdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlWm9vbSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1lbnVab29tKCk7XG4gICAgdGhpcy51cGRhdGVEaXZpc2lvbnNab29tKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlcik7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SW1hZ2VQcmV2aWV3RGl2Lz4sXG4gICAgICA8RG9jdW1lbnREaXYgb25DdXN0b21QcmV2aWV3SW1hZ2U9e3RoaXMucHJldmlld0ltYWdlQ3VzdG9tSGFuZGxlcn0gLz4sXG4gICAgICA8TWVudURpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zaG93KCk7ICAvLy9cblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy51cGRhdGVOYXRpdmVHZXN0dXJlcygpO1xuICAgIHRoaXMudXBkYXRlRGl2aXNpb25zQ29sb3VycygpO1xuICAgIHRoaXMudXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2KCk7XG4gICAgdGhpcy51cGRhdGVJbnZlcnRDb2xvdXJzQ2hlY2tib3hEaXYoKTtcbiAgICB0aGlzLnVwZGF0ZU5hdGl2ZUdlc3R1cmVzQ2hlY2tib3hEaXYoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJrZXlDb2RlcyIsIkVTQ0FQRV9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX1VQX0tFWV9DT0RFIiwiQVJST1dfRE9XTl9LRVlfQ09ERSIsIkFSUk9XX0xFRlRfS0VZX0NPREUiLCJBUlJPV19SSUdIVF9LRVlfQ09ERSIsIlZpZXciLCJwcmV2aWV3SW1hZ2VDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW1hZ2UiLCJzaG93SW1hZ2VQcmV2aWV3RGl2Iiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiaW1hZ2VQcmV2aWV3RGl2U2hvd2luZyIsImlzSW1hZ2VQcmV2aWV3RGl2U2hvd2luZyIsImhpZGVJbWFnZVByZXZpZXdEaXYiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwiY2xvc2VNZW51Iiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2Iiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJzaG93TGVmdERpdmlzaW9uRGl2IiwidXBkYXRlWm9vbSIsInVwZGF0ZU1lbnVab29tIiwidXBkYXRlRGl2aXNpb25zWm9vbSIsImRpZE1vdW50Iiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsIkltYWdlUHJldmlld0RpdiIsIkRvY3VtZW50RGl2Iiwib25DdXN0b21QcmV2aWV3SW1hZ2UiLCJNZW51RGl2IiwiaW5pdGlhbGlzZSIsInNob3ciLCJhc3NpZ25Db250ZXh0IiwidXBkYXRlTmF0aXZlR2VzdHVyZXMiLCJ1cGRhdGVEaXZpc2lvbnNDb2xvdXJzIiwidXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2IiwidXBkYXRlSW52ZXJ0Q29sb3Vyc0NoZWNrYm94RGl2IiwidXBkYXRlTmF0aXZlR2VzdHVyZXNDaGVja2JveERpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHls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