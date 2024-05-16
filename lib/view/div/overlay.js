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
        ";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  z-index: 1;\n  position: fixed;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  background-color: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InstructionsDiv = /*#__PURE__*/ function(Element) {
    _inherits(InstructionsDiv, Element);
    var _super = _create_super(InstructionsDiv);
    function InstructionsDiv() {
        _class_call_check(this, InstructionsDiv);
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
        return _this;
    }
    _create_class(InstructionsDiv, [
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
                    /*#__PURE__*/ React.createElement(_desktop.default, null),
                    /*#__PURE__*/ React.createElement(_mobile.default, null)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return InstructionsDiv;
}(_wrap_native_super(_easy.Element));
_define_property(InstructionsDiv, "tagName", "div");
_define_property(InstructionsDiv, "defaultProperties", {
    className: "overlay"
});
var _default = (0, _easywithstyle.default)(InstructionsDiv)(_templateObject(), _styles.overlayDivGap, _styles.overlayDivBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IEhpZGVPdmVybGF5QnV0dG9uIGZyb20gXCIuLi9idXR0b24vaGlkZU92ZXJsYXlcIjtcbmltcG9ydCBNb2JpbGVJbnN0cnVjdGlvbnNEaXYgZnJvbSBcIi4uL2Rpdi9pbnN0cnVjdGlvbnMvbW9iaWxlXCI7XG5pbXBvcnQgRGVza3RvcEluc3RydWN0aW9uc0RpdiBmcm9tIFwiLi4vZGl2L2luc3RydWN0aW9ucy9kZXNrdG9wXCI7XG5pbXBvcnQgTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIGZyb20gXCIuLi9idXR0b24vaW5zdHJ1Y3Rpb25zL21vYmlsZVwiO1xuaW1wb3J0IERlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9pbnN0cnVjdGlvbnMvZGVza3RvcFwiO1xuXG5pbXBvcnQgeyBvdmVybGF5RGl2R2FwLCBvdmVybGF5RGl2QmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgSW5zdHJ1Y3Rpb25zRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGVCdXR0b25zKCk7XG5cbiAgICB0aGlzLnNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gIH1cblxuICBtb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGVCdXR0b25zKCk7XG5cbiAgICB0aGlzLnNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYoKTtcbiAgfVxuXG4gIGhpZGVPdmVybGF5QnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBzaG93QnV0dG9ucygpIHtcbiAgICB0aGlzLnNob3dNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgICB0aGlzLnNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gIH1cblxuICBoaWRlQnV0dG9ucygpIHtcbiAgICB0aGlzLmhpZGVNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgICB0aGlzLmhpZGVEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGlkZU92ZXJsYXlCdXR0b24gb25DbGljaz17dGhpcy5oaWRlT3ZlcmxheUJ1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8TW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIG9uQ2xpY2s9e3RoaXMubW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGVza3RvcEluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8RGVza3RvcEluc3RydWN0aW9uc0Rpdi8+LFxuICAgICAgPE1vYmlsZUluc3RydWN0aW9uc0Rpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJvdmVybGF5XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEluc3RydWN0aW9uc0RpdilgXG5cbiAgZ2FwOiAke292ZXJsYXlEaXZHYXB9O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7b3ZlcmxheURpdkJhY2tncm91bmRDb2xvdXJ9O1xuICBcbmA7XG4iXSwibmFtZXMiOlsiSW5zdHJ1Y3Rpb25zRGl2IiwiZGVza3RvcEluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImhpZGVCdXR0b25zIiwic2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNEaXYiLCJtb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIiLCJzaG93TW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IiwiaGlkZU92ZXJsYXlCdXR0b25DbGlja0hhbmRsZXIiLCJoaWRlIiwic2hvd0J1dHRvbnMiLCJzaG93TW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIiwic2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24iLCJoaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIiwiaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24iLCJjaGlsZEVsZW1lbnRzIiwiSGlkZU92ZXJsYXlCdXR0b24iLCJvbkNsaWNrIiwiTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIiwiRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsIkRlc2t0b3BJbnN0cnVjdGlvbnNEaXYiLCJNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJvdmVybGF5RGl2R2FwIiwib3ZlcmxheURpdkJhY2tncm91bmRDb2xvdXIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdFQTs7O2VBQUE7OztvRUE5RHNCO29CQUVFO2tFQUVNOzZEQUNJOzhEQUNDOzhEQUNFOytEQUNDO3NCQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELElBQUEsQUFBTUEsZ0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLHlDQUF3QyxTQUFDQyxPQUFPQztZQUM5QyxNQUFLQyxXQUFXO1lBRWhCLE1BQUtDLDBCQUEwQjtRQUNqQztRQUVBQyxrREFBQUEsd0NBQXVDLFNBQUNKLE9BQU9DO1lBQzdDLE1BQUtDLFdBQVc7WUFFaEIsTUFBS0cseUJBQXlCO1FBQ2hDO1FBRUFDLGtEQUFBQSxpQ0FBZ0MsU0FBQ04sT0FBT0M7WUFDdEMsTUFBS00sSUFBSTtRQUNYOzs7a0JBZklUOztZQWlCSlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsNEJBQTRCO2dCQUNqQyxJQUFJLENBQUNDLDZCQUE2QjtZQUNwQzs7O1lBRUFSLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNTLDRCQUE0QjtnQkFDakMsSUFBSSxDQUFDQyw2QkFBNkI7WUFDcEM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0Msb0JBQWlCO3dCQUFDQyxTQUFTLElBQUksQ0FBQ1QsNkJBQTZCOztrQ0FDOUQsb0JBQUNVLGdCQUF3Qjt3QkFBQ0QsU0FBUyxJQUFJLENBQUNYLG9DQUFvQzs7a0NBQzVFLG9CQUFDYSxpQkFBeUI7d0JBQUNGLFNBQVMsSUFBSSxDQUFDaEIscUNBQXFDOztrQ0FDOUUsb0JBQUNtQixnQkFBc0I7a0NBQ3ZCLG9CQUFDQyxlQUFxQjtpQkFFdkI7WUFDSDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7WUFDcEI7OztXQXpDSXZCO3FCQUF3QndCLGFBQU87QUEyQ25DLGlCQTNDSXhCLGlCQTJDR3lCLFdBQVU7QUFFakIsaUJBN0NJekIsaUJBNkNHMEIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDNUIsb0NBRWhCNkIscUJBQWEsRUFXQUMsa0NBQTBCIn0=