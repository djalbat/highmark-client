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
var _instructionsButtons = /*#__PURE__*/ _interop_require_default(require("../div/instructionsButtons"));
var _desktop = /*#__PURE__*/ _interop_require_default(require("./instructions/desktop"));
var _instructions = /*#__PURE__*/ _interop_require_default(require("../div/checkbox/instructions"));
var _showDivisions = /*#__PURE__*/ _interop_require_default(require("../button/close/showDivisions"));
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
        "\n\n  margin: ",
        ";\n  display: grid;\n  max-width: ",
        ";\n  padding-top: ",
        ';\n  grid-template-rows: auto auto auto auto;\n  grid-template-columns: auto 1fr;\n  grid-template-areas:\n  \n             ". show-divisions-close-button"\n    \n    "instructions-buttons-div instructions-buttons-div" \n              \n           "instructions-div instructions-div"\n          \n         "instructions-checkbox-div back-button"\n      \n  ;      \n\n'
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
        _define_property(_assert_this_initialized(_this), "showDivisionsCloseButtonClickHandler", function(event, element) {
            controller.showDivisions();
        });
        _define_property(_assert_this_initialized(_this), "backButtonClickHandler", function(event, element) {
            _this.back();
        });
        _define_property(_assert_this_initialized(_this), "desktopCustomHandler", function(event, element) {
            _this.desktop();
        });
        _define_property(_assert_this_initialized(_this), "mobileCustomHandler", function(event, element) {
            _this.mobile();
        });
        return _this;
    }
    _create_class(ContainerDiv, [
        {
            key: "desktop",
            value: function desktop() {
                this.showBackButton();
                this.showDesktopInstructionsDiv();
                this.hideInstructionsButtonsDiv();
                this.showInstructionsCheckboxDiv();
                this.showShowDivisionsCloseButton();
            }
        },
        {
            key: "mobile",
            value: function mobile() {
                this.showBackButton();
                this.showMobileInstructionsDiv();
                this.hideInstructionsButtonsDiv();
                this.showInstructionsCheckboxDiv();
                this.showShowDivisionsCloseButton();
            }
        },
        {
            key: "back",
            value: function back() {
                this.hideBackButton();
                this.hideMobileInstructionsDiv();
                this.showInstructionsButtonsDiv();
                this.hideDesktopInstructionsDiv();
                this.hideInstructionsCheckboxDiv();
                this.hideShowDivisionsCloseButton();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9jb250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2JhY2tcIjtcbmltcG9ydCBNb2JpbGVJbnN0cnVjdGlvbnNEaXYgZnJvbSBcIi4vaW5zdHJ1Y3Rpb25zL21vYmlsZVwiO1xuaW1wb3J0IEluc3RydWN0aW9uc0J1dHRvbnNEaXYgZnJvbSBcIi4uL2Rpdi9pbnN0cnVjdGlvbnNCdXR0b25zXCI7XG5pbXBvcnQgRGVza3RvcEluc3RydWN0aW9uc0RpdiBmcm9tIFwiLi9pbnN0cnVjdGlvbnMvZGVza3RvcFwiO1xuaW1wb3J0IEluc3RydWN0aW9uc0NoZWNrYm94RGl2IGZyb20gXCIuLi9kaXYvY2hlY2tib3gvaW5zdHJ1Y3Rpb25zXCI7XG5pbXBvcnQgU2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uIGZyb20gXCIuLi9idXR0b24vY2xvc2Uvc2hvd0RpdmlzaW9uc1wiO1xuXG5pbXBvcnQgeyBjb250YWluZXJEaXZNYXJnaW4sIGNvbnRhaW5lckRpdk1heFdpZHRoLCBjb250YWluZXJEaXZQYWRkaW5nVG9wIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jbGFzcyBDb250YWluZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5zaG93RGl2aXNpb25zKCk7XG4gIH1cblxuICBiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5iYWNrKCk7XG4gIH1cblxuICBkZXNrdG9wQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuZGVza3RvcCgpO1xuICB9XG5cbiAgbW9iaWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubW9iaWxlKCk7XG4gIH1cblxuICBkZXNrdG9wKCkge1xuICAgIHRoaXMuc2hvd0JhY2tCdXR0b24oKTtcbiAgICB0aGlzLnNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gICAgdGhpcy5oaWRlSW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdigpO1xuICAgIHRoaXMuc2hvd0luc3RydWN0aW9uc0NoZWNrYm94RGl2KCk7XG4gICAgdGhpcy5zaG93U2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uKCk7XG4gIH1cblxuICBtb2JpbGUoKSB7XG4gICAgdGhpcy5zaG93QmFja0J1dHRvbigpO1xuICAgIHRoaXMuc2hvd01vYmlsZUluc3RydWN0aW9uc0RpdigpO1xuICAgIHRoaXMuaGlkZUluc3RydWN0aW9uc0J1dHRvbnNEaXYoKTtcbiAgICB0aGlzLnNob3dJbnN0cnVjdGlvbnNDaGVja2JveERpdigpO1xuICAgIHRoaXMuc2hvd1Nob3dEaXZpc2lvbnNDbG9zZUJ1dHRvbigpO1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICB0aGlzLmhpZGVCYWNrQnV0dG9uKCk7XG4gICAgdGhpcy5oaWRlTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2KCk7XG4gICAgdGhpcy5zaG93SW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdigpO1xuICAgIHRoaXMuaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNEaXYoKTtcbiAgICB0aGlzLmhpZGVJbnN0cnVjdGlvbnNDaGVja2JveERpdigpO1xuICAgIHRoaXMuaGlkZVNob3dEaXZpc2lvbnNDbG9zZUJ1dHRvbigpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17dGhpcy5iYWNrQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxTaG93RGl2aXNpb25zQ2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5zaG93RGl2aXNpb25zQ2xvc2VCdXR0b25DbGlja0hhbmRsZXJ9IC8+LFxuICAgICAgPEluc3RydWN0aW9uc0J1dHRvbnNEaXYgb25DdXN0b21Nb2JpbGU9e3RoaXMubW9iaWxlQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21EZXNrdG9wPXt0aGlzLmRlc2t0b3BDdXN0b21IYW5kbGVyfSAvPixcbiAgICAgIDxNb2JpbGVJbnN0cnVjdGlvbnNEaXYvPixcbiAgICAgIDxEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2Lz4sXG4gICAgICA8SW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5iYWNrKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9ICBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29udGFpbmVyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENvbnRhaW5lckRpdilgXG5cbiAgbWFyZ2luOiAke2NvbnRhaW5lckRpdk1hcmdpbn07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogJHtjb250YWluZXJEaXZNYXhXaWR0aH07XG4gIHBhZGRpbmctdG9wOiAke2NvbnRhaW5lckRpdlBhZGRpbmdUb3B9O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gIFxuICAgICAgICAgICAgIFwiLiBzaG93LWRpdmlzaW9ucy1jbG9zZS1idXR0b25cIlxuICAgIFxuICAgIFwiaW5zdHJ1Y3Rpb25zLWJ1dHRvbnMtZGl2IGluc3RydWN0aW9ucy1idXR0b25zLWRpdlwiIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgXCJpbnN0cnVjdGlvbnMtZGl2IGluc3RydWN0aW9ucy1kaXZcIlxuICAgICAgICAgIFxuICAgICAgICAgXCJpbnN0cnVjdGlvbnMtY2hlY2tib3gtZGl2IGJhY2stYnV0dG9uXCJcbiAgICAgIFxuICA7ICAgICAgXG5cbmA7XG4iXSwibmFtZXMiOlsiQ29udGFpbmVyRGl2Iiwic2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY29udHJvbGxlciIsInNob3dEaXZpc2lvbnMiLCJiYWNrQnV0dG9uQ2xpY2tIYW5kbGVyIiwiYmFjayIsImRlc2t0b3BDdXN0b21IYW5kbGVyIiwiZGVza3RvcCIsIm1vYmlsZUN1c3RvbUhhbmRsZXIiLCJtb2JpbGUiLCJzaG93QmFja0J1dHRvbiIsInNob3dEZXNrdG9wSW5zdHJ1Y3Rpb25zRGl2IiwiaGlkZUluc3RydWN0aW9uc0J1dHRvbnNEaXYiLCJzaG93SW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYiLCJzaG93U2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uIiwic2hvd01vYmlsZUluc3RydWN0aW9uc0RpdiIsImhpZGVCYWNrQnV0dG9uIiwiaGlkZU1vYmlsZUluc3RydWN0aW9uc0RpdiIsInNob3dJbnN0cnVjdGlvbnNCdXR0b25zRGl2IiwiaGlkZURlc2t0b3BJbnN0cnVjdGlvbnNEaXYiLCJoaWRlSW5zdHJ1Y3Rpb25zQ2hlY2tib3hEaXYiLCJoaWRlU2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uIiwiY2hpbGRFbGVtZW50cyIsIkJhY2tCdXR0b24iLCJvbkNsaWNrIiwiU2hvd0RpdmlzaW9uc0Nsb3NlQnV0dG9uIiwiSW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTW9iaWxlIiwib25DdXN0b21EZXNrdG9wIiwiTW9iaWxlSW5zdHJ1Y3Rpb25zRGl2IiwiRGVza3RvcEluc3RydWN0aW9uc0RpdiIsIkluc3RydWN0aW9uc0NoZWNrYm94RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiY29udGFpbmVyRGl2TWFyZ2luIiwiY29udGFpbmVyRGl2TWF4V2lkdGgiLCJjb250YWluZXJEaXZQYWRkaW5nVG9wIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1GQTs7O2VBQUE7OztvRUFqRnNCO29CQUVFOzJEQUVEOzZEQUNXOzBFQUNDOzhEQUNBO21FQUNDO29FQUNDO3NCQUU0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRixJQUFBLEFBQU1BLDZCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSx3Q0FBdUMsU0FBQ0MsT0FBT0M7WUFDN0NDLFdBQVdDLGFBQWE7UUFDMUI7UUFFQUMsa0RBQUFBLDBCQUF5QixTQUFDSixPQUFPQztZQUMvQixNQUFLSSxJQUFJO1FBQ1g7UUFFQUMsa0RBQUFBLHdCQUF1QixTQUFDTixPQUFPQztZQUM3QixNQUFLTSxPQUFPO1FBQ2Q7UUFFQUMsa0RBQUFBLHVCQUFzQixTQUFDUixPQUFPQztZQUM1QixNQUFLUSxNQUFNO1FBQ2I7OztrQkFmSVg7O1lBaUJKUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDRyxjQUFjO2dCQUNuQixJQUFJLENBQUNDLDBCQUEwQjtnQkFDL0IsSUFBSSxDQUFDQywwQkFBMEI7Z0JBQy9CLElBQUksQ0FBQ0MsMkJBQTJCO2dCQUNoQyxJQUFJLENBQUNDLDRCQUE0QjtZQUNuQzs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGNBQWM7Z0JBQ25CLElBQUksQ0FBQ0sseUJBQXlCO2dCQUM5QixJQUFJLENBQUNILDBCQUEwQjtnQkFDL0IsSUFBSSxDQUFDQywyQkFBMkI7Z0JBQ2hDLElBQUksQ0FBQ0MsNEJBQTRCO1lBQ25DOzs7WUFFQVQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ1csY0FBYztnQkFDbkIsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBQzlCLElBQUksQ0FBQ0MsMEJBQTBCO2dCQUMvQixJQUFJLENBQUNDLDBCQUEwQjtnQkFDL0IsSUFBSSxDQUFDQywyQkFBMkI7Z0JBQ2hDLElBQUksQ0FBQ0MsNEJBQTRCO1lBQ25DOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLGFBQVU7d0JBQUNDLFNBQVMsSUFBSSxDQUFDcEIsc0JBQXNCOztrQ0FDaEQsb0JBQUNxQixzQkFBd0I7d0JBQUNELFNBQVMsSUFBSSxDQUFDekIsb0NBQW9DOztrQ0FDNUUsb0JBQUMyQiw0QkFBc0I7d0JBQUNDLGdCQUFnQixJQUFJLENBQUNuQixtQkFBbUI7d0JBQUVvQixpQkFBaUIsSUFBSSxDQUFDdEIsb0JBQW9COztrQ0FDNUcsb0JBQUN1QixlQUFxQjtrQ0FDdEIsb0JBQUNDLGdCQUFzQjtrQ0FDdkIsb0JBQUNDLHFCQUF1QjtpQkFFekI7WUFDSDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQUksQ0FBQzVCLElBQUk7WUFDWDs7O1dBM0RJUDtxQkFBcUJvQyxhQUFPO0FBNkRoQyxpQkE3RElwQyxjQTZER3FDLFdBQVc7QUFFbEIsaUJBL0RJckMsY0ErREdzQyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUN4QyxpQ0FFYnlDLDBCQUFrQixFQUVmQyw0QkFBb0IsRUFDbEJDLDhCQUFzQiJ9