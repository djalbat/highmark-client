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
var _back = /*#__PURE__*/ _interop_require_default(require("../button/back"));
var _overlay = /*#__PURE__*/ _interop_require_default(require("../button/close/overlay"));
var _mobile = /*#__PURE__*/ _interop_require_default(require("./instructions/mobile"));
var _instructionsButtons = /*#__PURE__*/ _interop_require_default(require("../div/instructionsButtons"));
var _desktop = /*#__PURE__*/ _interop_require_default(require("./instructions/desktop"));
var _instructions = /*#__PURE__*/ _interop_require_default(require("../div/checkbox/instructions"));
var _styles = require("../../styles");
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
        "\n\n  margin: ",
        ";\n  display: grid;\n  max-width: ",
        ";\n  padding-top: ",
        ';\n  grid-template-rows: auto auto auto auto;\n  grid-template-columns: auto 1fr;\n  grid-template-areas:\n  \n    \n                ". overlay-close-button"\n             \n    "instructions-buttons-div instructions-buttons-div" \n              \n           "instructions-div instructions-div"\n          \n         "instructions-checkbox-div back-button"\n      \n  ;      \n\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ContainerDiv = /*#__PURE__*/ function(Element) {
    _inherits(ContainerDiv, Element);
    function ContainerDiv() {
        _class_call_check(this, ContainerDiv);
        var _this;
        _this = _call_super(this, ContainerDiv, arguments), _define_property(_this, "overlayCloseButtonClickHandler", function(event, element) {
            controller.hideOverlay();
            controller.showDivisions();
        }), _define_property(_this, "backButtonClickHandler", function(event, element) {
            _this.back();
        }), _define_property(_this, "desktopCustomHandler", function(event, element) {
            _this.desktop();
        }), _define_property(_this, "mobileCustomHandler", function(event, element) {
            _this.mobile();
        });
        return _this;
    }
    _create_class(ContainerDiv, [
        {
            key: "desktop",
            value: function desktop() {
                this.showBackButton();
                this.showOverlayCloseButton();
                this.showDesktopInstructionsDiv();
                this.hideInstructionsButtonsDiv();
                this.showInstructionsCheckboxDiv();
            }
        },
        {
            key: "mobile",
            value: function mobile() {
                this.showBackButton();
                this.showOverlayCloseButton();
                this.showMobileInstructionsDiv();
                this.hideInstructionsButtonsDiv();
                this.showInstructionsCheckboxDiv();
            }
        },
        {
            key: "back",
            value: function back() {
                this.hideBackButton();
                this.hideOverlayCloseButton();
                this.hideMobileInstructionsDiv();
                this.showInstructionsButtonsDiv();
                this.hideDesktopInstructionsDiv();
                this.hideInstructionsCheckboxDiv();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_back.default, {
                        onClick: this.backButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_overlay.default, {
                        onClick: this.overlayCloseButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_instructionsButtons.default, {
                        onCustomMobile: this.mobileCustomHandler,
                        onCustomDesktop: this.desktopCustomHandler
                    }),
                    /*#__PURE__*/ React.createElement(_mobile.default, null),
                    /*#__PURE__*/ React.createElement(_desktop.default, null),
                    /*#__PURE__*/ React.createElement(_instructions.default, null)
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.back();
            }
        }
    ]);
    return ContainerDiv;
}(_wrap_native_super(_easy.Element));
_define_property(ContainerDiv, "tagName", "div");
_define_property(ContainerDiv, "defaultProperties", {
    className: "container"
});
var _default = (0, _easywithstyle.default)(ContainerDiv)(_templateObject(), _styles.containerDivMargin, _styles.containerDivMaxWidth, _styles.containerDivPaddingTop);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jb250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2JhY2tcIjtcbmltcG9ydCBPdmVybGF5Q2xvc2VCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9jbG9zZS9vdmVybGF5XCI7XG5pbXBvcnQgTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IGZyb20gXCIuL2luc3RydWN0aW9ucy9tb2JpbGVcIjtcbmltcG9ydCBJbnN0cnVjdGlvbnNCdXR0b25zRGl2IGZyb20gXCIuLi9kaXYvaW5zdHJ1Y3Rpb25zQnV0dG9uc1wiO1xuaW1wb3J0IERlc2t0b3BJbnN0cnVjdGlvbnNEaXYgZnJvbSBcIi4vaW5zdHJ1Y3Rpb25zL2Rlc2t0b3BcIjtcbmltcG9ydCBJbnN0cnVjdGlvbnNDaGVja2JveERpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94L2luc3RydWN0aW9uc1wiO1xuXG5pbXBvcnQgeyBjb250YWluZXJEaXZNYXJnaW4sIGNvbnRhaW5lckRpdk1heFdpZHRoLCBjb250YWluZXJEaXZQYWRkaW5nVG9wIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBDb250YWluZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgb3ZlcmxheUNsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5oaWRlT3ZlcmxheSgpO1xuXG4gICAgY29udHJvbGxlci5zaG93RGl2aXNpb25zKCk7XG4gIH1cblxuICBiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5iYWNrKCk7XG4gIH1cblxuICBkZXNrdG9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZGVza3RvcCgpO1xuICB9XG5cbiAgbW9iaWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubW9iaWxlKCk7XG4gIH1cblxuICBkZXNrdG9wKCkge1xuICAgIHRoaXMuc2hvd0JhY2tCdXR0b24oKTtcbiAgICB0aGlzLnNob3dPdmVybGF5Q2xvc2VCdXR0b24oKTtcbiAgICB0aGlzLnNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gICAgdGhpcy5oaWRlSW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdigpO1xuICAgIHRoaXMuc2hvd0luc3RydWN0aW9uc0NoZWNrYm94RGl2KCk7XG4gIH1cblxuICBtb2JpbGUoKSB7XG4gICAgdGhpcy5zaG93QmFja0J1dHRvbigpO1xuICAgIHRoaXMuc2hvd092ZXJsYXlDbG9zZUJ1dHRvbigpO1xuICAgIHRoaXMuc2hvd01vYmlsZUluc3RydWN0aW9uc0RpdigpO1xuICAgIHRoaXMuaGlkZUluc3RydWN0aW9uc0J1dHRvbnNEaXYoKTtcbiAgICB0aGlzLnNob3dJbnN0cnVjdGlvbnNDaGVja2JveERpdigpO1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICB0aGlzLmhpZGVCYWNrQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlT3ZlcmxheUNsb3NlQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gICAgdGhpcy5zaG93SW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdigpO1xuICAgIHRoaXMuaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNEaXYoKTtcbiAgICB0aGlzLmhpZGVJbnN0cnVjdGlvbnNDaGVja2JveERpdigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17dGhpcy5iYWNrQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxPdmVybGF5Q2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5vdmVybGF5Q2xvc2VCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPEluc3RydWN0aW9uc0J1dHRvbnNEaXYgb25DdXN0b21Nb2JpbGU9e3RoaXMubW9iaWxlQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21EZXNrdG9wPXt0aGlzLmRlc2t0b3BDdXN0b21IYW5kbGVyfSAvPixcbiAgICAgIDxNb2JpbGVJbnN0cnVjdGlvbnNEaXYvPixcbiAgICAgIDxEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2Lz4sXG4gICAgICA8SW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5iYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9ICBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29udGFpbmVyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENvbnRhaW5lckRpdilgXG5cbiAgbWFyZ2luOiAke2NvbnRhaW5lckRpdk1hcmdpbn07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogJHtjb250YWluZXJEaXZNYXhXaWR0aH07XG4gIHBhZGRpbmctdG9wOiAke2NvbnRhaW5lckRpdlBhZGRpbmdUb3B9O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gIFxuICAgIFxuICAgICAgICAgICAgICAgIFwiLiBvdmVybGF5LWNsb3NlLWJ1dHRvblwiXG4gICAgICAgICAgICAgXG4gICAgXCJpbnN0cnVjdGlvbnMtYnV0dG9ucy1kaXYgaW5zdHJ1Y3Rpb25zLWJ1dHRvbnMtZGl2XCIgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICBcImluc3RydWN0aW9ucy1kaXYgaW5zdHJ1Y3Rpb25zLWRpdlwiXG4gICAgICAgICAgXG4gICAgICAgICBcImluc3RydWN0aW9ucy1jaGVja2JveC1kaXYgYmFjay1idXR0b25cIlxuICAgICAgXG4gIDsgICAgICBcblxuYDtcbiJdLCJuYW1lcyI6WyJDb250YWluZXJEaXYiLCJvdmVybGF5Q2xvc2VCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjb250cm9sbGVyIiwiaGlkZU92ZXJsYXkiLCJzaG93RGl2aXNpb25zIiwiYmFja0J1dHRvbkNsaWNrSGFuZGxlciIsImJhY2siLCJkZXNrdG9wQ3VzdG9tSGFuZGxlciIsImRlc2t0b3AiLCJtb2JpbGVDdXN0b21IYW5kbGVyIiwibW9iaWxlIiwic2hvd0JhY2tCdXR0b24iLCJzaG93T3ZlcmxheUNsb3NlQnV0dG9uIiwic2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNEaXYiLCJoaWRlSW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdiIsInNob3dJbnN0cnVjdGlvbnNDaGVja2JveERpdiIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJoaWRlQmFja0J1dHRvbiIsImhpZGVPdmVybGF5Q2xvc2VCdXR0b24iLCJoaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2Iiwic2hvd0luc3RydWN0aW9uc0J1dHRvbnNEaXYiLCJoaWRlRGVza3RvcEluc3RydWN0aW9uc0RpdiIsImhpZGVJbnN0cnVjdGlvbnNDaGVja2JveERpdiIsImNoaWxkRWxlbWVudHMiLCJCYWNrQnV0dG9uIiwib25DbGljayIsIk92ZXJsYXlDbG9zZUJ1dHRvbiIsIkluc3RydWN0aW9uc0J1dHRvbnNEaXYiLCJvbkN1c3RvbU1vYmlsZSIsIm9uQ3VzdG9tRGVza3RvcCIsIk1vYmlsZUluc3RydWN0aW9uc0RpdiIsIkRlc2t0b3BJbnN0cnVjdGlvbnNEaXYiLCJJbnN0cnVjdGlvbnNDaGVja2JveERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNvbnRhaW5lckRpdk1hcmdpbiIsImNvbnRhaW5lckRpdk1heFdpZHRoIiwiY29udGFpbmVyRGl2UGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUZBOzs7ZUFBQTs7O29FQW5Gc0I7b0JBRUU7MkRBRUQ7OERBQ1E7NkRBQ0c7MEVBQ0M7OERBQ0E7bUVBQ0M7c0JBRTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLElBQUEsQUFBTUEsNkJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsMEJBQ0pDLHdCQUFBQSxrQ0FBaUMsU0FBQ0MsT0FBT0M7WUFDdkNDLFdBQVdDLFdBQVc7WUFFdEJELFdBQVdFLGFBQWE7UUFDMUIsSUFFQUMsd0JBQUFBLDBCQUF5QixTQUFDTCxPQUFPQztZQUMvQixNQUFLSyxJQUFJO1FBQ1gsSUFFQUMsd0JBQUFBLHdCQUF1QixTQUFDUCxPQUFPQztZQUM3QixNQUFLTyxPQUFPO1FBQ2QsSUFFQUMsd0JBQUFBLHVCQUFzQixTQUFDVCxPQUFPQztZQUM1QixNQUFLUyxNQUFNO1FBQ2I7OztrQkFqQklaOztZQW1CSlUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0csY0FBYztnQkFDbkIsSUFBSSxDQUFDQyxzQkFBc0I7Z0JBQzNCLElBQUksQ0FBQ0MsMEJBQTBCO2dCQUMvQixJQUFJLENBQUNDLDBCQUEwQjtnQkFDL0IsSUFBSSxDQUFDQywyQkFBMkI7WUFDbEM7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxjQUFjO2dCQUNuQixJQUFJLENBQUNDLHNCQUFzQjtnQkFDM0IsSUFBSSxDQUFDSSx5QkFBeUI7Z0JBQzlCLElBQUksQ0FBQ0YsMEJBQTBCO2dCQUMvQixJQUFJLENBQUNDLDJCQUEyQjtZQUNsQzs7O1lBRUFULEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNXLGNBQWM7Z0JBQ25CLElBQUksQ0FBQ0Msc0JBQXNCO2dCQUMzQixJQUFJLENBQUNDLHlCQUF5QjtnQkFDOUIsSUFBSSxDQUFDQywwQkFBMEI7Z0JBQy9CLElBQUksQ0FBQ0MsMEJBQTBCO2dCQUMvQixJQUFJLENBQUNDLDJCQUEyQjtZQUNsQzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDQyxhQUFVO3dCQUFDQyxTQUFTLElBQUksQ0FBQ3BCLHNCQUFzQjs7a0NBQ2hELG9CQUFDcUIsZ0JBQWtCO3dCQUFDRCxTQUFTLElBQUksQ0FBQzFCLDhCQUE4Qjs7a0NBQ2hFLG9CQUFDNEIsNEJBQXNCO3dCQUFDQyxnQkFBZ0IsSUFBSSxDQUFDbkIsbUJBQW1CO3dCQUFFb0IsaUJBQWlCLElBQUksQ0FBQ3RCLG9CQUFvQjs7a0NBQzVHLG9CQUFDdUIsZUFBcUI7a0NBQ3RCLG9CQUFDQyxnQkFBc0I7a0NBQ3ZCLG9CQUFDQyxxQkFBdUI7aUJBRXpCO1lBQ0g7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxhQUFhO2dCQUVsQixJQUFJLENBQUM1QixJQUFJO1lBQ1g7OztXQTdESVI7cUJBQXFCcUMsYUFBTztBQStEaEMsaUJBL0RJckMsY0ErREdzQyxXQUFXO0FBRWxCLGlCQWpFSXRDLGNBaUVHdUMscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDekMsaUNBRWIwQywwQkFBa0IsRUFFZkMsNEJBQW9CLEVBQ2xCQyw4QkFBc0IifQ==