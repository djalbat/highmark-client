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
var _mobile = /*#__PURE__*/ _interop_require_default(require("./instructions/mobile"));
var _desktop = /*#__PURE__*/ _interop_require_default(require("./instructions/desktop"));
var _instructions = /*#__PURE__*/ _interop_require_default(require("../div/checkbox/instructions"));
var _showDivisions = /*#__PURE__*/ _interop_require_default(require("../button/close/showDivisions"));
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
        ';\n    \n  grid-template-rows: auto auto auto auto auto;\n  grid-template-columns: auto 1fr;\n  grid-template-areas:\n  \n                   ". hide-overlay-button"\n    \n     "mobile-instructions-button mobile-instructions-button" \n              \n    "desktop-instructions-button desktop-instructions-button"\n    \n              "instructions-div instructions-div"\n              \n            "instructions-checkbox-div back-button"\n      \n  ;      \n  \n  @media (orientation: landscape) {\n\n    grid-template-rows: auto auto auto auto;\n    grid-template-columns: auto 1fr;\n    grid-template-areas:\n    \n                     ". hide-overlay-button"\n      \n      "mobile-instructions-button desktop-instructions-button"\n        \n                "instructions-div instructions-div"\n\n              "instructions-checkbox-div back-button"\n    ;      \n    \n  }\n\n'
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
        _define_property(_assert_this_initialized(_this), "showDivisionsCloseButtonClickHandler", function(event, element) {
            controller.showDivisions();
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
                this.showDesktopInstructionsDiv();
                this.showInstructionsCheckboxDiv();
                this.showShowDivisionsCloseButton();
                this.hideMobileInstructionsButton();
                this.hideDesktopInstructionsButton();
            }
        },
        {
            key: "mobile",
            value: function mobile() {
                this.showBackButton();
                this.showMobileInstructionsDiv();
                this.showInstructionsCheckboxDiv();
                this.showShowDivisionsCloseButton();
                this.hideMobileInstructionsButton();
                this.hideDesktopInstructionsButton();
            }
        },
        {
            key: "back",
            value: function back() {
                this.hideBackButton();
                this.hideMobileInstructionsDiv();
                this.hideDesktopInstructionsDiv();
                this.hideInstructionsCheckboxDiv();
                this.hideShowDivisionsCloseButton();
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
                    /*#__PURE__*/ React.createElement(_showDivisions.default, {
                        onClick: this.showDivisionsCloseButtonClickHandler
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
var _default = (0, _easywithstyle.default)(ContainerDiv)(_templateObject(), _styles.containerDivGap, _styles.containerDivPadding, _styles.containerDivMaxWidth);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jb250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2JhY2tcIjtcbmltcG9ydCBNb2JpbGVJbnN0cnVjdGlvbnNEaXYgZnJvbSBcIi4vaW5zdHJ1Y3Rpb25zL21vYmlsZVwiO1xuaW1wb3J0IERlc2t0b3BJbnN0cnVjdGlvbnNEaXYgZnJvbSBcIi4vaW5zdHJ1Y3Rpb25zL2Rlc2t0b3BcIjtcbmltcG9ydCBJbnN0cnVjdGlvbnNDaGVja2JveERpdiBmcm9tIFwiLi4vZGl2L2NoZWNrYm94L2luc3RydWN0aW9uc1wiO1xuaW1wb3J0IFNob3dEaXZpc2lvbnNDbG9zZUJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2Nsb3NlL3Nob3dEaXZpc2lvbnNcIjtcbmltcG9ydCBNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9pbnN0cnVjdGlvbnMvbW9iaWxlXCI7XG5pbXBvcnQgRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2luc3RydWN0aW9ucy9kZXNrdG9wXCI7XG5cbmltcG9ydCB7IGNvbnRhaW5lckRpdkdhcCwgY29udGFpbmVyRGl2UGFkZGluZywgY29udGFpbmVyRGl2TWF4V2lkdGggfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5cbmNsYXNzIENvbnRhaW5lckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBkZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5kZXNrdG9wKCk7XG4gIH1cblxuICBtb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1vYmlsZSgpO1xuICB9XG5cbiAgc2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5zaG93RGl2aXNpb25zKCk7XG4gIH1cblxuICBiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5iYWNrKCk7XG4gIH1cblxuICBkZXNrdG9wKCkge1xuICAgIHRoaXMuc2hvd0JhY2tCdXR0b24oKTtcbiAgICB0aGlzLnNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gICAgdGhpcy5zaG93SW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYoKTtcbiAgICB0aGlzLnNob3dTaG93RGl2aXNpb25zQ2xvc2VCdXR0b24oKTtcbiAgICB0aGlzLmhpZGVNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgICB0aGlzLmhpZGVEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gIH1cblxuICBtb2JpbGUoKSB7XG4gICAgdGhpcy5zaG93QmFja0J1dHRvbigpO1xuICAgIHRoaXMuc2hvd01vYmlsZUluc3RydWN0aW9uc0RpdigpO1xuICAgIHRoaXMuc2hvd0luc3RydWN0aW9uc0NoZWNrYm94RGl2KCk7XG4gICAgdGhpcy5zaG93U2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbigpO1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICB0aGlzLmhpZGVCYWNrQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gICAgdGhpcy5oaWRlRGVza3RvcEluc3RydWN0aW9uc0RpdigpO1xuICAgIHRoaXMuaGlkZUluc3RydWN0aW9uc0NoZWNrYm94RGl2KCk7XG4gICAgdGhpcy5oaWRlU2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uKCk7XG4gICAgdGhpcy5zaG93TW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gICAgdGhpcy5zaG93RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17dGhpcy5iYWNrQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxTaG93RGl2aXNpb25zQ2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5zaG93RGl2aXNpb25zQ2xvc2VCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPE1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiBvbkNsaWNrPXt0aGlzLm1vYmlsZUluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiBvbkNsaWNrPXt0aGlzLmRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPE1vYmlsZUluc3RydWN0aW9uc0Rpdi8+LFxuICAgICAgPERlc2t0b3BJbnN0cnVjdGlvbnNEaXYvPixcbiAgICAgIDxJbnN0cnVjdGlvbnNDaGVja2JveERpdi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLmJhY2soKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gIFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb250YWluZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29udGFpbmVyRGl2KWBcblxuICBnYXA6ICR7Y29udGFpbmVyRGl2R2FwfTtcbiAgbWFyZ2luOiBhdXRvOyAgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6ICR7Y29udGFpbmVyRGl2UGFkZGluZ307XG4gIG1heC13aWR0aDogJHtjb250YWluZXJEaXZNYXhXaWR0aH07XG4gICAgXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICBcbiAgICAgICAgICAgICAgICAgICBcIi4gaGlkZS1vdmVybGF5LWJ1dHRvblwiXG4gICAgXG4gICAgIFwibW9iaWxlLWluc3RydWN0aW9ucy1idXR0b24gbW9iaWxlLWluc3RydWN0aW9ucy1idXR0b25cIiBcbiAgICAgICAgICAgICAgXG4gICAgXCJkZXNrdG9wLWluc3RydWN0aW9ucy1idXR0b24gZGVza3RvcC1pbnN0cnVjdGlvbnMtYnV0dG9uXCJcbiAgICBcbiAgICAgICAgICAgICAgXCJpbnN0cnVjdGlvbnMtZGl2IGluc3RydWN0aW9ucy1kaXZcIlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25zLWNoZWNrYm94LWRpdiBiYWNrLWJ1dHRvblwiXG4gICAgICBcbiAgOyAgICAgIFxuICBcbiAgQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG5cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgXCIuIGhpZGUtb3ZlcmxheS1idXR0b25cIlxuICAgICAgXG4gICAgICBcIm1vYmlsZS1pbnN0cnVjdGlvbnMtYnV0dG9uIGRlc2t0b3AtaW5zdHJ1Y3Rpb25zLWJ1dHRvblwiXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25zLWRpdiBpbnN0cnVjdGlvbnMtZGl2XCJcblxuICAgICAgICAgICAgICBcImluc3RydWN0aW9ucy1jaGVja2JveC1kaXYgYmFjay1idXR0b25cIlxuICAgIDsgICAgICBcbiAgICBcbiAgfVxuXG5gO1xuIl0sIm5hbWVzIjpbIkNvbnRhaW5lckRpdiIsImRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkZXNrdG9wIiwibW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyIiwibW9iaWxlIiwic2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyIiwiY29udHJvbGxlciIsInNob3dEaXZpc2lvbnMiLCJiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyIiwiYmFjayIsInNob3dCYWNrQnV0dG9uIiwic2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNEaXYiLCJzaG93SW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYiLCJzaG93U2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uIiwiaGlkZU1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiIsImhpZGVEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uIiwic2hvd01vYmlsZUluc3RydWN0aW9uc0RpdiIsImhpZGVCYWNrQnV0dG9uIiwiaGlkZU1vYmlsZUluc3RydWN0aW9uc0RpdiIsImhpZGVEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IiwiaGlkZUluc3RydWN0aW9uc0NoZWNrYm94RGl2IiwiaGlkZVNob3dEaXZpc2lvbnNDbG9zZUJ1dHRvbiIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJzaG93RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsImNoaWxkRWxlbWVudHMiLCJCYWNrQnV0dG9uIiwib25DbGljayIsIlNob3dEaXZpc2lvbnNDbG9zZUJ1dHRvbiIsIk1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiIsIkRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24iLCJNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IiwiSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJjb250YWluZXJEaXZHYXAiLCJjb250YWluZXJEaXZQYWRkaW5nIiwiY29udGFpbmVyRGl2TWF4V2lkdGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0ZBOzs7ZUFBQTs7O29FQXRGc0I7b0JBRUU7MkRBRUQ7NkRBQ1c7OERBQ0M7bUVBQ0M7b0VBQ0M7OERBQ0E7K0RBQ0M7c0JBRXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNFLElBQUEsQUFBTUEsNkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLHlDQUF3QyxTQUFDQyxPQUFPQztZQUM5QyxNQUFLQyxPQUFPO1FBQ2Q7UUFFQUMsa0RBQUFBLHdDQUF1QyxTQUFDSCxPQUFPQztZQUM3QyxNQUFLRyxNQUFNO1FBQ2I7UUFFQUMsa0RBQUFBLHdDQUF1QyxTQUFDTCxPQUFPQztZQUM3Q0ssV0FBV0MsYUFBYTtRQUMxQjtRQUVBQyxrREFBQUEsMEJBQXlCLFNBQUNSLE9BQU9DO1lBQy9CLE1BQUtRLElBQUk7UUFDWDs7O2tCQWZJWDs7WUFpQkpJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNRLGNBQWM7Z0JBQ25CLElBQUksQ0FBQ0MsMEJBQTBCO2dCQUMvQixJQUFJLENBQUNDLDJCQUEyQjtnQkFDaEMsSUFBSSxDQUFDQyw0QkFBNEI7Z0JBQ2pDLElBQUksQ0FBQ0MsNEJBQTRCO2dCQUNqQyxJQUFJLENBQUNDLDZCQUE2QjtZQUNwQzs7O1lBRUFYLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNNLGNBQWM7Z0JBQ25CLElBQUksQ0FBQ00seUJBQXlCO2dCQUM5QixJQUFJLENBQUNKLDJCQUEyQjtnQkFDaEMsSUFBSSxDQUFDQyw0QkFBNEI7Z0JBQ2pDLElBQUksQ0FBQ0MsNEJBQTRCO2dCQUNqQyxJQUFJLENBQUNDLDZCQUE2QjtZQUNwQzs7O1lBRUFOLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNRLGNBQWM7Z0JBQ25CLElBQUksQ0FBQ0MseUJBQXlCO2dCQUM5QixJQUFJLENBQUNDLDBCQUEwQjtnQkFDL0IsSUFBSSxDQUFDQywyQkFBMkI7Z0JBQ2hDLElBQUksQ0FBQ0MsNEJBQTRCO2dCQUNqQyxJQUFJLENBQUNDLDRCQUE0QjtnQkFDakMsSUFBSSxDQUFDQyw2QkFBNkI7WUFDcEM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBUTtrQ0FFTixvQkFBQ0MsYUFBVTt3QkFBQ0MsU0FBUyxJQUFJLENBQUNsQixzQkFBc0I7O2tDQUNoRCxvQkFBQ21CLHNCQUF3Qjt3QkFBQ0QsU0FBUyxJQUFJLENBQUNyQixvQ0FBb0M7O2tDQUM1RSxvQkFBQ3VCLGdCQUF3Qjt3QkFBQ0YsU0FBUyxJQUFJLENBQUN2QixvQ0FBb0M7O2tDQUM1RSxvQkFBQzBCLGlCQUF5Qjt3QkFBQ0gsU0FBUyxJQUFJLENBQUMzQixxQ0FBcUM7O2tDQUM5RSxvQkFBQytCLGVBQXFCO2tDQUN0QixvQkFBQ0MsZ0JBQXNCO2tDQUN2QixvQkFBQ0MscUJBQXVCO2lCQUV6QjtZQUNIOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0MsYUFBYTtnQkFFbEIsSUFBSSxDQUFDekIsSUFBSTtZQUNYOzs7V0EvRElYO3FCQUFxQnFDLGFBQU87QUFpRWhDLGlCQWpFSXJDLGNBaUVHc0MsV0FBVztBQUVsQixpQkFuRUl0QyxjQW1FR3VDLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ3pDLGlDQUVoQjBDLHVCQUFlLEVBR1hDLDJCQUFtQixFQUNqQkMsNEJBQW9CIn0=