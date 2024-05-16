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
var _closeOverlay = /*#__PURE__*/ _interop_require_default(require("../button/closeOverlay"));
var _mobile = /*#__PURE__*/ _interop_require_default(require("../button/instructions/mobile"));
var _desktop = /*#__PURE__*/ _interop_require_default(require("../button/instructions/desktop"));
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
        });
        _define_property(_assert_this_initialized(_this), "mobileInstructionsButtonClickHandler", function(event, element) {
            _this.hideButtons();
        });
        _define_property(_assert_this_initialized(_this), "instructionsCloseButtonClickHandler", function(event, element) {
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
                    /*#__PURE__*/ React.createElement(_closeOverlay.default, {
                        onClick: this.instructionsCloseButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_mobile.default, {
                        onClick: this.mobileInstructionsButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_desktop.default, {
                        onClick: this.desktopInstructionsButtonClickHandler
                    })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9vdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IENsb3NlT3ZlcmxheUJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2Nsb3NlT3ZlcmxheVwiO1xuaW1wb3J0IE1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2luc3RydWN0aW9ucy9tb2JpbGVcIjtcbmltcG9ydCBEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uIGZyb20gXCIuLi9idXR0b24vaW5zdHJ1Y3Rpb25zL2Rlc2t0b3BcIjtcblxuaW1wb3J0IHsgb3ZlcmxheURpdkdhcCwgb3ZlcmxheURpdkJhY2tncm91bmRDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIEluc3RydWN0aW9uc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuICBkZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5oaWRlQnV0dG9ucygpO1xuICB9XG5cbiAgbW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5oaWRlQnV0dG9ucygpO1xuICB9XG5cbiAgaW5zdHJ1Y3Rpb25zQ2xvc2VCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHNob3dCdXR0b25zKCkge1xuICAgIHRoaXMuc2hvd01vYmlsZUluc3RydWN0aW9uc0J1dHRvbigpO1xuICAgIHRoaXMuc2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgfVxuXG4gIGhpZGVCdXR0b25zKCkge1xuICAgIHRoaXMuaGlkZU1vYmlsZUluc3RydWN0aW9uc0J1dHRvbigpO1xuICAgIHRoaXMuaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDbG9zZU92ZXJsYXlCdXR0b24gb25DbGljaz17dGhpcy5pbnN0cnVjdGlvbnNDbG9zZUJ1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8TW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIG9uQ2xpY2s9e3RoaXMubW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGVza3RvcEluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm92ZXJsYXlcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSW5zdHJ1Y3Rpb25zRGl2KWBcblxuICBnYXA6ICR7b3ZlcmxheURpdkdhcH07XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtvdmVybGF5RGl2QmFja2dyb3VuZENvbG91cn07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJJbnN0cnVjdGlvbnNEaXYiLCJkZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaGlkZUJ1dHRvbnMiLCJtb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIiLCJpbnN0cnVjdGlvbnNDbG9zZUJ1dHRvbkNsaWNrSGFuZGxlciIsImhpZGUiLCJzaG93QnV0dG9ucyIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJzaG93RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsImhpZGVNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJoaWRlRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJDbG9zZU92ZXJsYXlCdXR0b24iLCJvbkNsaWNrIiwiTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIiwiRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsIm92ZXJsYXlEaXZHYXAiLCJvdmVybGF5RGl2QmFja2dyb3VuZENvbG91ciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0RBOzs7ZUFBQTs7O29FQXREc0I7b0JBRUU7bUVBRU87NkRBQ007OERBQ0M7c0JBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUQsSUFBQSxBQUFNQSxnQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEseUNBQXdDLFNBQUNDLE9BQU9DO1lBQzlDLE1BQUtDLFdBQVc7UUFDbEI7UUFFQUMsa0RBQUFBLHdDQUF1QyxTQUFDSCxPQUFPQztZQUM3QyxNQUFLQyxXQUFXO1FBQ2xCO1FBRUFFLGtEQUFBQSx1Q0FBc0MsU0FBQ0osT0FBT0M7WUFDNUMsTUFBS0ksSUFBSTtRQUNYOzs7a0JBWElQOztZQWFKUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyw0QkFBNEI7Z0JBQ2pDLElBQUksQ0FBQ0MsNkJBQTZCO1lBQ3BDOzs7WUFFQU4sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ08sNEJBQTRCO2dCQUNqQyxJQUFJLENBQUNDLDZCQUE2QjtZQUNwQzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxxQkFBa0I7d0JBQUNDLFNBQVMsSUFBSSxDQUFDVCxtQ0FBbUM7O2tDQUNyRSxvQkFBQ1UsZUFBd0I7d0JBQUNELFNBQVMsSUFBSSxDQUFDVixvQ0FBb0M7O2tDQUM1RSxvQkFBQ1ksZ0JBQXlCO3dCQUFDRixTQUFTLElBQUksQ0FBQ2QscUNBQXFDOztpQkFFL0U7WUFDSDs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhO1lBQ3BCOzs7V0FuQ0luQjtxQkFBd0JvQixhQUFPO0FBcUNuQyxpQkFyQ0lwQixpQkFxQ0dxQixXQUFVO0FBRWpCLGlCQXZDSXJCLGlCQXVDR3NCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3hCLG9DQUVoQnlCLHFCQUFhLEVBV0FDLGtDQUEwQiJ9