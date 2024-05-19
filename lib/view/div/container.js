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
var _hideOverlay = /*#__PURE__*/ _interop_require_default(require("../button/hideOverlay"));
var _mobile = /*#__PURE__*/ _interop_require_default(require("./instructions/mobile"));
var _desktop = /*#__PURE__*/ _interop_require_default(require("./instructions/desktop"));
var _instructions = /*#__PURE__*/ _interop_require_default(require("../div/checkbox/instructions"));
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
        ";\n  margin: auto;  \n  display: grid;\n  padding: ",
        ";\n  max-width: ",
        ";\n  font-family: ",
        ";\n  \n  font-size: ",
        ';\n  \n  grid-template-rows: auto auto auto auto auto;\n  grid-template-columns: auto 1fr;\n  grid-template-areas:\n  \n                   ". hide-overlay-button"\n    \n     "mobile-instructions-button mobile-instructions-button" \n              \n    "desktop-instructions-button desktop-instructions-button"\n    \n              "instructions-div instructions-div"\n              \n            "instructions-checkbox-div back-button"\n      \n  ;      \n  \n  @media (orientation: landscape) {\n\n    font-size: ',
        ';\n  \n    grid-template-rows: auto auto auto auto;\n    grid-template-columns: auto 1fr;\n    grid-template-areas:\n    \n                     ". hide-overlay-button"\n      \n      "mobile-instructions-button desktop-instructions-button"\n        \n                "instructions-div instructions-div"\n\n              "instructions-checkbox-div back-button"\n    ;      \n    \n  }\n\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ContainerDiv = /*#__PURE__*/ function(Element) {
    _inherits(ContainerDiv, Element);
    var _super = _create_super(ContainerDiv);
    function ContainerDiv() {
        _class_call_check(this, ContainerDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "desktopInstructionsButtonClickHandler", function(event, element) {
            _this.desktop();
        });
        _define_property(_assert_this_initialized(_this), "mobileInstructionsButtonClickHandler", function(event, element) {
            _this.mobile();
        });
        _define_property(_assert_this_initialized(_this), "hideOverlayButtonClickHandler", function(event, element) {
            controller.showDivisions(); ///
        });
        _define_property(_assert_this_initialized(_this), "backButtonClickHandler", function(event, element) {
            _this.back();
        });
        return _this;
    }
    _create_class(ContainerDiv, [
        {
            key: "desktop",
            value: function desktop() {
                this.showBackButton();
                this.showHideOverlayButton();
                this.showDesktopInstructionsDiv();
                this.showInstructionsCheckboxDiv();
                this.hideMobileInstructionsButton();
                this.hideDesktopInstructionsButton();
            }
        },
        {
            key: "mobile",
            value: function mobile() {
                this.showBackButton();
                this.showHideOverlayButton();
                this.showMobileInstructionsDiv();
                this.showInstructionsCheckboxDiv();
                this.hideMobileInstructionsButton();
                this.hideDesktopInstructionsButton();
            }
        },
        {
            key: "back",
            value: function back() {
                this.hideBackButton();
                this.hideHideOverlayButton();
                this.hideMobileInstructionsDiv();
                this.hideDesktopInstructionsDiv();
                this.hideInstructionsCheckboxDiv();
                this.showMobileInstructionsButton();
                this.showDesktopInstructionsButton();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_back.default, {
                        onClick: this.backButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_hideOverlay.default, {
                        onClick: this.hideOverlayButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_mobile1.default, {
                        onClick: this.mobileInstructionsButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_desktop1.default, {
                        onClick: this.desktopInstructionsButtonClickHandler
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
var _default = (0, _easywithstyle.default)(ContainerDiv)(_templateObject(), _styles.containerDivGap, _styles.containerDivPadding, _styles.containerDivMaxWidth, _styles.containerDivFontFamily, _styles.containerDivPortraitFontSize, _styles.containerDivLandscapeFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jb250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2JhY2tcIjtcbmltcG9ydCBIaWRlT3ZlcmxheUJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2hpZGVPdmVybGF5XCI7XG5pbXBvcnQgTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IGZyb20gXCIuL2luc3RydWN0aW9ucy9tb2JpbGVcIjtcbmltcG9ydCBEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IGZyb20gXCIuL2luc3RydWN0aW9ucy9kZXNrdG9wXCI7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYgZnJvbSBcIi4uL2Rpdi9jaGVja2JveC9pbnN0cnVjdGlvbnNcIjtcbmltcG9ydCBNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9pbnN0cnVjdGlvbnMvbW9iaWxlXCI7XG5pbXBvcnQgRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2luc3RydWN0aW9ucy9kZXNrdG9wXCI7XG5cbmltcG9ydCB7IGNvbnRhaW5lckRpdkdhcCxcbiAgICAgICAgIGNvbnRhaW5lckRpdlBhZGRpbmcsXG4gICAgICAgICBjb250YWluZXJEaXZNYXhXaWR0aCxcbiAgICAgICAgIGNvbnRhaW5lckRpdkZvbnRGYW1pbHksXG4gICAgICAgICBjb250YWluZXJEaXZQb3J0cmFpdEZvbnRTaXplLFxuICAgICAgICAgY29udGFpbmVyRGl2TGFuZHNjYXBlRm9udFNpemUgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIENvbnRhaW5lckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBkZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5kZXNrdG9wKCk7XG4gIH1cblxuICBtb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1vYmlsZSgpO1xuICB9XG5cbiAgaGlkZU92ZXJsYXlCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb250cm9sbGVyLnNob3dEaXZpc2lvbnMoKTsgLy8vXG4gIH1cblxuICBiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5iYWNrKCk7XG4gIH1cblxuICBkZXNrdG9wKCkge1xuICAgIHRoaXMuc2hvd0JhY2tCdXR0b24oKTtcbiAgICB0aGlzLnNob3dIaWRlT3ZlcmxheUJ1dHRvbigpO1xuICAgIHRoaXMuc2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNEaXYoKTtcbiAgICB0aGlzLnNob3dJbnN0cnVjdGlvbnNDaGVja2JveERpdigpO1xuICAgIHRoaXMuaGlkZU1vYmlsZUluc3RydWN0aW9uc0J1dHRvbigpO1xuICAgIHRoaXMuaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgfVxuXG4gIG1vYmlsZSgpIHtcbiAgICB0aGlzLnNob3dCYWNrQnV0dG9uKCk7XG4gICAgdGhpcy5zaG93SGlkZU92ZXJsYXlCdXR0b24oKTtcbiAgICB0aGlzLnNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYoKTtcbiAgICB0aGlzLnNob3dJbnN0cnVjdGlvbnNDaGVja2JveERpdigpO1xuICAgIHRoaXMuaGlkZU1vYmlsZUluc3RydWN0aW9uc0J1dHRvbigpO1xuICAgIHRoaXMuaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgfVxuXG4gIGJhY2soKSB7XG4gICAgdGhpcy5oaWRlQmFja0J1dHRvbigpO1xuICAgIHRoaXMuaGlkZUhpZGVPdmVybGF5QnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gICAgdGhpcy5oaWRlRGVza3RvcEluc3RydWN0aW9uc0RpdigpO1xuICAgIHRoaXMuaGlkZUluc3RydWN0aW9uc0NoZWNrYm94RGl2KCk7XG4gICAgdGhpcy5zaG93TW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gICAgdGhpcy5zaG93RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17dGhpcy5iYWNrQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxIaWRlT3ZlcmxheUJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVPdmVybGF5QnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24gb25DbGljaz17dGhpcy5tb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPERlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24gb25DbGljaz17dGhpcy5kZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxNb2JpbGVJbnN0cnVjdGlvbnNEaXYvPixcbiAgICAgIDxEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2Lz4sXG4gICAgICA8SW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5iYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9ICBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29udGFpbmVyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENvbnRhaW5lckRpdilgXG5cbiAgZ2FwOiAke2NvbnRhaW5lckRpdkdhcH07XG4gIG1hcmdpbjogYXV0bzsgIFxuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAke2NvbnRhaW5lckRpdlBhZGRpbmd9O1xuICBtYXgtd2lkdGg6ICR7Y29udGFpbmVyRGl2TWF4V2lkdGh9O1xuICBmb250LWZhbWlseTogJHtjb250YWluZXJEaXZGb250RmFtaWx5fTtcbiAgXG4gIGZvbnQtc2l6ZTogJHtjb250YWluZXJEaXZQb3J0cmFpdEZvbnRTaXplfTtcbiAgXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICBcbiAgICAgICAgICAgICAgICAgICBcIi4gaGlkZS1vdmVybGF5LWJ1dHRvblwiXG4gICAgXG4gICAgIFwibW9iaWxlLWluc3RydWN0aW9ucy1idXR0b24gbW9iaWxlLWluc3RydWN0aW9ucy1idXR0b25cIiBcbiAgICAgICAgICAgICAgXG4gICAgXCJkZXNrdG9wLWluc3RydWN0aW9ucy1idXR0b24gZGVza3RvcC1pbnN0cnVjdGlvbnMtYnV0dG9uXCJcbiAgICBcbiAgICAgICAgICAgICAgXCJpbnN0cnVjdGlvbnMtZGl2IGluc3RydWN0aW9ucy1kaXZcIlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25zLWNoZWNrYm94LWRpdiBiYWNrLWJ1dHRvblwiXG4gICAgICBcbiAgOyAgICAgIFxuICBcbiAgQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgICBmb250LXNpemU6ICR7Y29udGFpbmVyRGl2TGFuZHNjYXBlRm9udFNpemV9O1xuICBcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgXCIuIGhpZGUtb3ZlcmxheS1idXR0b25cIlxuICAgICAgXG4gICAgICBcIm1vYmlsZS1pbnN0cnVjdGlvbnMtYnV0dG9uIGRlc2t0b3AtaW5zdHJ1Y3Rpb25zLWJ1dHRvblwiXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25zLWRpdiBpbnN0cnVjdGlvbnMtZGl2XCJcblxuICAgICAgICAgICAgICBcImluc3RydWN0aW9ucy1jaGVja2JveC1kaXYgYmFjay1idXR0b25cIlxuICAgIDsgICAgICBcbiAgICBcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIkNvbnRhaW5lckRpdiIsImRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkZXNrdG9wIiwibW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyIiwibW9iaWxlIiwiaGlkZU92ZXJsYXlCdXR0b25DbGlja0hhbmRsZXIiLCJjb250cm9sbGVyIiwic2hvd0RpdmlzaW9ucyIsImJhY2tCdXR0b25DbGlja0hhbmRsZXIiLCJiYWNrIiwic2hvd0JhY2tCdXR0b24iLCJzaG93SGlkZU92ZXJsYXlCdXR0b24iLCJzaG93RGVza3RvcEluc3RydWN0aW9uc0RpdiIsInNob3dJbnN0cnVjdGlvbnNDaGVja2JveERpdiIsImhpZGVNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJoaWRlRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJoaWRlQmFja0J1dHRvbiIsImhpZGVIaWRlT3ZlcmxheUJ1dHRvbiIsImhpZGVNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJoaWRlRGVza3RvcEluc3RydWN0aW9uc0RpdiIsImhpZGVJbnN0cnVjdGlvbnNDaGVja2JveERpdiIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJzaG93RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJCYWNrQnV0dG9uIiwib25DbGljayIsIkhpZGVPdmVybGF5QnV0dG9uIiwiTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIiwiRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsIk1vYmlsZUluc3RydWN0aW9uc0RpdiIsIkRlc2t0b3BJbnN0cnVjdGlvbnNEaXYiLCJJbnN0cnVjdGlvbnNDaGVja2JveERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNvbnRhaW5lckRpdkdhcCIsImNvbnRhaW5lckRpdlBhZGRpbmciLCJjb250YWluZXJEaXZNYXhXaWR0aCIsImNvbnRhaW5lckRpdkZvbnRGYW1pbHkiLCJjb250YWluZXJEaXZQb3J0cmFpdEZvbnRTaXplIiwiY29udGFpbmVyRGl2TGFuZHNjYXBlRm9udFNpemUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkZBOzs7ZUFBQTs7O29FQTNGc0I7b0JBRUU7MkRBRUQ7a0VBQ087NkRBQ0k7OERBQ0M7bUVBQ0M7OERBQ0M7K0RBQ0M7c0JBT1E7Ozs7Ozs7Ozs7Ozs7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