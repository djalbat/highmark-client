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
var _breakpoints = require("../../breakpoints");
var _customEventTypes = require("../../customEventTypes");
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
        ';\n  grid-template-rows: auto auto auto auto auto;\n  grid-template-columns: auto 1fr;\n  grid-template-areas:\n  \n                   ". hide-overlay-button"\n    \n     "mobile-instructions-button mobile-instructions-button" \n              \n    "desktop-instructions-button desktop-instructions-button"\n    \n              "instructions-div instructions-div"\n              \n            "instructions-checkbox-div back-button"\n      \n  ;      \n  \n  @media (min-width: ',
        ") {\n\n    font-size: ",
        ';\n    grid-template-rows: auto auto auto auto;\n    grid-template-columns: auto 1fr;\n    grid-template-areas:\n    \n                     ". hide-overlay-button"\n      \n      "mobile-instructions-button desktop-instructions-button"\n        \n                "instructions-div instructions-div"\n\n              "instructions-checkbox-div back-button"\n    ;      \n    \n  }\n\n'
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
            _this.hideButtons();
            _this.showDesktopInstructionsDiv();
        });
        _define_property(_assert_this_initialized(_this), "mobileInstructionsButtonClickHandler", function(event, element) {
            _this.hideButtons();
            _this.showMobileInstructionsDiv();
        });
        _define_property(_assert_this_initialized(_this), "backButtonClickCustomHandler", function(event, element) {
            _this.hideDesktopInstructionsDiv();
            _this.hideMobileInstructionsDiv();
            _this.showButtons();
        });
        _define_property(_assert_this_initialized(_this), "backButtonClickHandler", function(event, element) {
            var customEventType = _customEventTypes.BACK_BUTTON_CLICK_CUSTOM_EVENT_TYPE;
            _this.callCustomHandlers(customEventType, event, element);
        });
        return _this;
    }
    _create_class(ContainerDiv, [
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
                    /*#__PURE__*/ React.createElement(_hideOverlay.default, null),
                    /*#__PURE__*/ React.createElement(_mobile1.default, {
                        onClick: this.mobileInstructionsButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_desktop1.default, {
                        onClick: this.desktopInstructionsButtonClickHandler
                    }),
                    /*#__PURE__*/ React.createElement(_mobile.default, null),
                    /*#__PURE__*/ React.createElement(_instructions.default, null),
                    /*#__PURE__*/ React.createElement(_back.default, null)
                ];
            }
        }
    ]);
    return ContainerDiv;
}(_wrap_native_super(_easy.Element));
_define_property(ContainerDiv, "tagName", "div");
_define_property(ContainerDiv, "defaultProperties", {
    className: "container"
});
var _default = (0, _easywithstyle.default)(ContainerDiv)(_templateObject(), _styles.containerDivGap, _styles.containerDivPadding, _styles.containerDivMaxWidth, _styles.containerDivFontFamily, _styles.containerDivMobileFontSize, _breakpoints.desktop, _styles.containerDivDesktopFontSize);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jb250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2JhY2tcIjtcbmltcG9ydCBIaWRlT3ZlcmxheUJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2hpZGVPdmVybGF5XCI7XG5pbXBvcnQgTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IGZyb20gXCIuL2luc3RydWN0aW9ucy9tb2JpbGVcIjtcbmltcG9ydCBEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IGZyb20gXCIuL2luc3RydWN0aW9ucy9kZXNrdG9wXCI7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYgZnJvbSBcIi4uL2Rpdi9jaGVja2JveC9pbnN0cnVjdGlvbnNcIjtcbmltcG9ydCBNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9pbnN0cnVjdGlvbnMvbW9iaWxlXCI7XG5pbXBvcnQgRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2luc3RydWN0aW9ucy9kZXNrdG9wXCI7XG5cbmltcG9ydCB7IGRlc2t0b3AgfSBmcm9tIFwiLi4vLi4vYnJlYWtwb2ludHNcIjtcbmltcG9ydCB7IEJBQ0tfQlVUVE9OX0NMSUNLX0NVU1RPTV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2N1c3RvbUV2ZW50VHlwZXNcIjtcbmltcG9ydCB7IGNvbnRhaW5lckRpdkdhcCxcbiAgICAgICAgIGNvbnRhaW5lckRpdlBhZGRpbmcsXG4gICAgICAgICBjb250YWluZXJEaXZNYXhXaWR0aCxcbiAgICAgICAgIGNvbnRhaW5lckRpdkZvbnRGYW1pbHksXG4gICAgICAgICBjb250YWluZXJEaXZNb2JpbGVGb250U2l6ZSxcbiAgICAgICAgIGNvbnRhaW5lckRpdkRlc2t0b3BGb250U2l6ZSB9IGZyb20gXCIuLi8uLi9zdHlsZXNcIjtcblxuY2xhc3MgQ29udGFpbmVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGVCdXR0b25zKCk7XG5cbiAgICB0aGlzLnNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gIH1cblxuICBtb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGVCdXR0b25zKCk7XG5cbiAgICB0aGlzLnNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYoKTtcbiAgfVxuXG4gIGJhY2tCdXR0b25DbGlja0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmhpZGVEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gICAgdGhpcy5oaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2KCk7XG5cbiAgICB0aGlzLnNob3dCdXR0b25zKCk7XG4gIH1cblxuICBzaG93QnV0dG9ucygpIHtcbiAgICB0aGlzLnNob3dNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgICB0aGlzLnNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gIH1cblxuICBoaWRlQnV0dG9ucygpIHtcbiAgICB0aGlzLmhpZGVNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24oKTtcbiAgICB0aGlzLmhpZGVEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uKCk7XG4gIH1cblxuICBiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQkFDS19CVVRUT05fQ0xJQ0tfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIaWRlT3ZlcmxheUJ1dHRvbi8+LFxuICAgICAgPE1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiBvbkNsaWNrPXt0aGlzLm1vYmlsZUluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcn0gLz4sXG4gICAgICA8RGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiBvbkNsaWNrPXt0aGlzLmRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPE1vYmlsZUluc3RydWN0aW9uc0Rpdi8+LFxuICAgICAgPEluc3RydWN0aW9uc0NoZWNrYm94RGl2Lz4sXG4gICAgICA8QmFja0J1dHRvbi8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gIFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb250YWluZXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29udGFpbmVyRGl2KWBcblxuICBnYXA6ICR7Y29udGFpbmVyRGl2R2FwfTtcbiAgbWFyZ2luOiBhdXRvOyAgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6ICR7Y29udGFpbmVyRGl2UGFkZGluZ307XG4gIG1heC13aWR0aDogJHtjb250YWluZXJEaXZNYXhXaWR0aH07XG4gIGZvbnQtZmFtaWx5OiAke2NvbnRhaW5lckRpdkZvbnRGYW1pbHl9O1xuICBcbiAgZm9udC1zaXplOiAke2NvbnRhaW5lckRpdk1vYmlsZUZvbnRTaXplfTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gIFxuICAgICAgICAgICAgICAgICAgIFwiLiBoaWRlLW92ZXJsYXktYnV0dG9uXCJcbiAgICBcbiAgICAgXCJtb2JpbGUtaW5zdHJ1Y3Rpb25zLWJ1dHRvbiBtb2JpbGUtaW5zdHJ1Y3Rpb25zLWJ1dHRvblwiIFxuICAgICAgICAgICAgICBcbiAgICBcImRlc2t0b3AtaW5zdHJ1Y3Rpb25zLWJ1dHRvbiBkZXNrdG9wLWluc3RydWN0aW9ucy1idXR0b25cIlxuICAgIFxuICAgICAgICAgICAgICBcImluc3RydWN0aW9ucy1kaXYgaW5zdHJ1Y3Rpb25zLWRpdlwiXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgXCJpbnN0cnVjdGlvbnMtY2hlY2tib3gtZGl2IGJhY2stYnV0dG9uXCJcbiAgICAgIFxuICA7ICAgICAgXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtkZXNrdG9wfSkge1xuXG4gICAgZm9udC1zaXplOiAke2NvbnRhaW5lckRpdkRlc2t0b3BGb250U2l6ZX07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgIFwiLiBoaWRlLW92ZXJsYXktYnV0dG9uXCJcbiAgICAgIFxuICAgICAgXCJtb2JpbGUtaW5zdHJ1Y3Rpb25zLWJ1dHRvbiBkZXNrdG9wLWluc3RydWN0aW9ucy1idXR0b25cIlxuICAgICAgICBcbiAgICAgICAgICAgICAgICBcImluc3RydWN0aW9ucy1kaXYgaW5zdHJ1Y3Rpb25zLWRpdlwiXG5cbiAgICAgICAgICAgICAgXCJpbnN0cnVjdGlvbnMtY2hlY2tib3gtZGl2IGJhY2stYnV0dG9uXCJcbiAgICA7ICAgICAgXG4gICAgXG4gIH1cblxuYDtcbiJdLCJuYW1lcyI6WyJDb250YWluZXJEaXYiLCJkZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaGlkZUJ1dHRvbnMiLCJzaG93RGVza3RvcEluc3RydWN0aW9uc0RpdiIsIm1vYmlsZUluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlciIsInNob3dNb2JpbGVJbnN0cnVjdGlvbnNEaXYiLCJiYWNrQnV0dG9uQ2xpY2tDdXN0b21IYW5kbGVyIiwiaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNEaXYiLCJoaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2Iiwic2hvd0J1dHRvbnMiLCJiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyIiwiY3VzdG9tRXZlbnRUeXBlIiwiQkFDS19CVVRUT05fQ0xJQ0tfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJzaG93TW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIiwic2hvd0Rlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24iLCJoaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIiwiaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b24iLCJjaGlsZEVsZW1lbnRzIiwiSGlkZU92ZXJsYXlCdXR0b24iLCJNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJvbkNsaWNrIiwiRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsIk1vYmlsZUluc3RydWN0aW9uc0RpdiIsIkluc3RydWN0aW9uc0NoZWNrYm94RGl2IiwiQmFja0J1dHRvbiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJjb250YWluZXJEaXZHYXAiLCJjb250YWluZXJEaXZQYWRkaW5nIiwiY29udGFpbmVyRGl2TWF4V2lkdGgiLCJjb250YWluZXJEaXZGb250RmFtaWx5IiwiY29udGFpbmVyRGl2TW9iaWxlRm9udFNpemUiLCJkZXNrdG9wIiwiY29udGFpbmVyRGl2RGVza3RvcEZvbnRTaXplIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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