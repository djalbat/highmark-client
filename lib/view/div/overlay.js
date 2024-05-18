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
var _hideOverlay = /*#__PURE__*/ _interop_require_default(require("../button/hideOverlay"));
var _mobile = /*#__PURE__*/ _interop_require_default(require("../div/instructions/mobile"));
var _desktop = /*#__PURE__*/ _interop_require_default(require("../div/instructions/desktop"));
var _mobile1 = /*#__PURE__*/ _interop_require_default(require("../button/instructions/mobile"));
var _desktop1 = /*#__PURE__*/ _interop_require_default(require("../button/instructions/desktop"));
var _breakpoints = require("../../breakpoints");
var _state = require("../../state");
var _styles = require("../../styles");
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
        "\n\n  gap: ",
        ";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  z-index: 1;\n  overflow: scroll;\n  position: fixed;\n  font-family: ",
        ";\n  align-items: center;\n  justify-content: center;\n  background-color: ",
        ";\n  \n  font-size: ",
        ";\n  flex-direction: column;\n  \n  @media (min-width: ",
        ") {\n\n    font-size: ",
        ";\n    flex-direction: row;\n    \n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var OverlayDiv = /*#__PURE__*/ function(Element) {
    _inherits(OverlayDiv, Element);
    var _super = _create_super(OverlayDiv);
    function OverlayDiv() {
        _class_call_check(this, OverlayDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "desktopInstructionsButtonClickHandler", function(event, element) {
            _this.hideButtons();
            _this.showDesktopInstructionsDiv();
        });
        _define_property(_assert_this_initialized(_this), "mobileInstructionsButtonClickHandler", function(event, element) {
            _this.hideButtons();
            _this.showMobileInstructionsDiv();
        });
        _define_property(_assert_this_initialized(_this), "hideOverlayButtonClickHandler", function(event, element) {
            _this.hide();
        });
        _define_property(_assert_this_initialized(_this), "backButtonClickCustomHandler", function(event, element) {
            _this.hideDesktopInstructionsDiv();
            _this.hideMobileInstructionsDiv();
            _this.showButtons();
        });
        return _this;
    }
    _create_class(OverlayDiv, [
        {
            key: "showButtons",
            value: function showButtons() {
                this.showMobileInstructionsButton();
                this.showDesktopInstructionsButton();
            }
        },
        {
            key: "hideButtons",
            value: function hideButtons() {
                this.hideMobileInstructionsButton();
                this.hideDesktopInstructionsButton();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_hideOverlay.default, {
                        onClick: this.hideOverlayButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_mobile1.default, {
                        onClick: this.mobileInstructionsButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_desktop1.default, {
                        onClick: this.desktopInstructionsButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_desktop.default, {
                        onCustomBackButtonClick: this.backButtonClickCustomHandler
                    }),
                    /*#__PURE__*/ React.createElement(_mobile.default, {
                        onCustomBackButtonClick: this.backButtonClickCustomHandler
                    })
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var overlayHidden = (0, _state.isOverlayHidden)();
                if (overlayHidden) {
                    this.hide();
                }
            }
        }
    ]);
    return OverlayDiv;
}(_wrap_native_super(_easy.Element));
_define_property(OverlayDiv, "tagName", "div");
_define_property(OverlayDiv, "defaultProperties", {
    className: "overlay"
});
var _default = (0, _easywithstyle.default)(OverlayDiv)(_templateObject(), _styles.overlayDivGap, _styles.overlayDivFontFamily, _styles.overlayDivBackgroundColour, _styles.overlayDivMobileFontSize, _breakpoints.desktop, _styles.overlayDivDesktopFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEhpZGVPdmVybGF5QnV0dG9uIGZyb20gXCIuLi9idXR0b24vaGlkZU92ZXJsYXlcIjtcbmltcG9ydCBNb2JpbGVJbnN0cnVjdGlvbnNEaXYgZnJvbSBcIi4uL2Rpdi9pbnN0cnVjdGlvbnMvbW9iaWxlXCI7XG5pbXBvcnQgRGVza3RvcEluc3RydWN0aW9uc0RpdiBmcm9tIFwiLi4vZGl2L2luc3RydWN0aW9ucy9kZXNrdG9wXCI7XG5pbXBvcnQgTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIGZyb20gXCIuLi9idXR0b24vaW5zdHJ1Y3Rpb25zL21vYmlsZVwiO1xuaW1wb3J0IERlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9pbnN0cnVjdGlvbnMvZGVza3RvcFwiO1xuXG5pbXBvcnQgeyBkZXNrdG9wIH0gZnJvbSBcIi4uLy4uL2JyZWFrcG9pbnRzXCI7XG5pbXBvcnQgeyBpc092ZXJsYXlIaWRkZW4gfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcbmltcG9ydCB7IG92ZXJsYXlEaXZHYXAsIG92ZXJsYXlEaXZGb250RmFtaWx5LCBvdmVybGF5RGl2TW9iaWxlRm9udFNpemUsIG92ZXJsYXlEaXZEZXNrdG9wRm9udFNpemUsIG92ZXJsYXlEaXZCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBPdmVybGF5RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGVCdXR0b25zKCk7XG5cbiAgICB0aGlzLnNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gIH1cblxuICBtb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGVCdXR0b25zKCk7XG5cbiAgICB0aGlzLnNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYoKTtcbiAgfVxuXG4gIGhpZGVPdmVybGF5QnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBiYWNrQnV0dG9uQ2xpY2tDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5oaWRlRGVza3RvcEluc3RydWN0aW9uc0RpdigpO1xuICAgIHRoaXMuaGlkZU1vYmlsZUluc3RydWN0aW9uc0RpdigpO1xuXG4gICAgdGhpcy5zaG93QnV0dG9ucygpO1xuICB9XG5cbiAgc2hvd0J1dHRvbnMoKSB7XG4gICAgdGhpcy5zaG93TW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gICAgdGhpcy5zaG93RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbigpO1xuICB9XG5cbiAgaGlkZUJ1dHRvbnMoKSB7XG4gICAgdGhpcy5oaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhpZGVPdmVybGF5QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGlkZU92ZXJsYXlCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPE1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiBvbkNsaWNrPXt0aGlzLm1vYmlsZUluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiBvbkNsaWNrPXt0aGlzLmRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPERlc2t0b3BJbnN0cnVjdGlvbnNEaXYgb25DdXN0b21CYWNrQnV0dG9uQ2xpY2s9e3RoaXMuYmFja0J1dHRvbkNsaWNrQ3VzdG9tSGFuZGxlcn0gLz4sXG4gICAgICA8TW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IG9uQ3VzdG9tQmFja0J1dHRvbkNsaWNrPXt0aGlzLmJhY2tCdXR0b25DbGlja0N1c3RvbUhhbmRsZXJ9IC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBvdmVybGF5SGlkZGVuID0gaXNPdmVybGF5SGlkZGVuKCk7XG5cbiAgICBpZiAob3ZlcmxheUhpZGRlbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwib3ZlcmxheVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShPdmVybGF5RGl2KWBcblxuICBnYXA6ICR7b3ZlcmxheURpdkdhcH07XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmb250LWZhbWlseTogJHtvdmVybGF5RGl2Rm9udEZhbWlseX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke292ZXJsYXlEaXZCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgXG4gIGZvbnQtc2l6ZTogJHtvdmVybGF5RGl2TW9iaWxlRm9udFNpemV9O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7ZGVza3RvcH0pIHtcblxuICAgIGZvbnQtc2l6ZTogJHtvdmVybGF5RGl2RGVza3RvcEZvbnRTaXplfTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIFxuICB9XG5cbmA7XG4iXSwibmFtZXMiOlsiT3ZlcmxheURpdiIsImRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJoaWRlQnV0dG9ucyIsInNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IiwibW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyIiwic2hvd01vYmlsZUluc3RydWN0aW9uc0RpdiIsImhpZGVPdmVybGF5QnV0dG9uQ2xpY2tIYW5kbGVyIiwiaGlkZSIsImJhY2tCdXR0b25DbGlja0N1c3RvbUhhbmRsZXIiLCJoaWRlRGVza3RvcEluc3RydWN0aW9uc0RpdiIsImhpZGVNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJzaG93QnV0dG9ucyIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJzaG93RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsImhpZGVNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJoaWRlRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJIaWRlT3ZlcmxheUJ1dHRvbiIsIm9uQ2xpY2siLCJNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uIiwiRGVza3RvcEluc3RydWN0aW9uc0RpdiIsIm9uQ3VzdG9tQmFja0J1dHRvbkNsaWNrIiwiTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJvdmVybGF5SGlkZGVuIiwiaXNPdmVybGF5SGlkZGVuIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm92ZXJsYXlEaXZHYXAiLCJvdmVybGF5RGl2Rm9udEZhbWlseSIsIm92ZXJsYXlEaXZCYWNrZ3JvdW5kQ29sb3VyIiwib3ZlcmxheURpdk1vYmlsZUZvbnRTaXplIiwiZGVza3RvcCIsIm92ZXJsYXlEaXZEZXNrdG9wRm9udFNpemUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErRUE7OztlQUFBOzs7b0VBN0VzQjtvQkFFRTtrRUFFTTs2REFDSTs4REFDQzs4REFDRTsrREFDQzsyQkFFZDtxQkFDUTtzQkFDcUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckksSUFBQSxBQUFNQSwyQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEseUNBQXdDLFNBQUNDLE9BQU9DO1lBQzlDLE1BQUtDLFdBQVc7WUFFaEIsTUFBS0MsMEJBQTBCO1FBQ2pDO1FBRUFDLGtEQUFBQSx3Q0FBdUMsU0FBQ0osT0FBT0M7WUFDN0MsTUFBS0MsV0FBVztZQUVoQixNQUFLRyx5QkFBeUI7UUFDaEM7UUFFQUMsa0RBQUFBLGlDQUFnQyxTQUFDTixPQUFPQztZQUN0QyxNQUFLTSxJQUFJO1FBQ1g7UUFFQUMsa0RBQUFBLGdDQUErQixTQUFDUixPQUFPQztZQUNyQyxNQUFLUSwwQkFBMEI7WUFDL0IsTUFBS0MseUJBQXlCO1lBRTlCLE1BQUtDLFdBQVc7UUFDbEI7OztrQkF0QkliOztZQXdCSmEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsNEJBQTRCO2dCQUNqQyxJQUFJLENBQUNDLDZCQUE2QjtZQUNwQzs7O1lBRUFYLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNZLDRCQUE0QjtnQkFDakMsSUFBSSxDQUFDQyw2QkFBNkI7WUFDcEM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0Msb0JBQWlCO3dCQUFDQyxTQUFTLElBQUksQ0FBQ1osNkJBQTZCOztrQ0FDOUQsb0JBQUNhLGdCQUF3Qjt3QkFBQ0QsU0FBUyxJQUFJLENBQUNkLG9DQUFvQzs7a0NBQzVFLG9CQUFDZ0IsaUJBQXlCO3dCQUFDRixTQUFTLElBQUksQ0FBQ25CLHFDQUFxQzs7a0NBQzlFLG9CQUFDc0IsZ0JBQXNCO3dCQUFDQyx5QkFBeUIsSUFBSSxDQUFDZCw0QkFBNEI7O2tDQUNsRixvQkFBQ2UsZUFBcUI7d0JBQUNELHlCQUF5QixJQUFJLENBQUNkLDRCQUE0Qjs7aUJBRWxGO1lBQ0g7OztZQUVBZ0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxzQkFBZTtnQkFFckMsSUFBSUQsZUFBZTtvQkFDakIsSUFBSSxDQUFDbkIsSUFBSTtnQkFDWDtZQUNGOzs7V0F0RElUO3FCQUFtQjhCLGFBQU87QUF3RDlCLGlCQXhESTlCLFlBd0RHK0IsV0FBVTtBQUVqQixpQkExREkvQixZQTBER2dDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2xDLCtCQUVoQm1DLHFCQUFhLEVBU0xDLDRCQUFvQixFQUdmQyxrQ0FBMEIsRUFFakNDLGdDQUF3QixFQUdoQkMsb0JBQU8sRUFFYkMsaUNBQXlCIn0=