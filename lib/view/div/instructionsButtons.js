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
var _mobile = /*#__PURE__*/ _interop_require_default(require("../button/instructions/mobile"));
var _desktop = /*#__PURE__*/ _interop_require_default(require("../button/instructions/desktop"));
var _constants = require("../../constants");
var _styles = require("../../styles");
var _customEventTypes = require("../../customEventTypes");
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
        "\n\n  gap: ",
        ";\n  display: flex;\n  flex-wrap: wrap;\n  grid-area: instructions-buttons-div;\n  align-items: center;\n  flex-direction: row;\n  justify-content: center;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var InstructionsButtonsDiv = /*#__PURE__*/ function(Element) {
    _inherits(InstructionsButtonsDiv, Element);
    function InstructionsButtonsDiv() {
        _class_call_check(this, InstructionsButtonsDiv);
        var _this;
        _this = _call_super(this, InstructionsButtonsDiv, arguments), _define_property(_this, "desktopInstructionsButtonClickHandler", function(event, element) {
            var customEventType = _customEventTypes.DESKTOP_CUSTOM_EVENT_TYPE;
            _this.callCustomHandlers(customEventType, event, element);
        }), _define_property(_this, "mobileInstructionsButtonClickHandler", function(event, element) {
            var customEventType = _customEventTypes.MOBILE_CUSTOM_EVENT_TYPE;
            _this.callCustomHandlers(customEventType, event, element);
        });
        return _this;
    }
    _create_class(InstructionsButtonsDiv, [
        {
            key: "show",
            value: function show() {
                var display = _constants.FLEX;
                this.display(display);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
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
            key: "parentContext",
            value: function parentContext() {
                var showInstructionsButtonsDiv = this.show.bind(this), hideInstructionsButtonsDiv = this.hide.bind(this); ///
                return {
                    showInstructionsButtonsDiv: showInstructionsButtonsDiv,
                    hideInstructionsButtonsDiv: hideInstructionsButtonsDiv
                };
            }
        }
    ]);
    return InstructionsButtonsDiv;
}(_wrap_native_super(_easy.Element));
_define_property(InstructionsButtonsDiv, "tagName", "div");
_define_property(InstructionsButtonsDiv, "defaultProperties", {
    className: "instructions-bottoms"
});
var _default = (0, _easywithstyle.default)(InstructionsButtonsDiv)(_templateObject(), _styles.instructionsButtonsDivGap);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9pbnN0cnVjdGlvbnNCdXR0b25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IE1vYmlsZUluc3RydWN0aW9uc0J1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2luc3RydWN0aW9ucy9tb2JpbGVcIjtcbmltcG9ydCBEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uIGZyb20gXCIuLi9idXR0b24vaW5zdHJ1Y3Rpb25zL2Rlc2t0b3BcIjtcblxuaW1wb3J0IHsgRkxFWCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGluc3RydWN0aW9uc0J1dHRvbnNEaXZHYXAgfSBmcm9tIFwiLi4vLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBNT0JJTEVfQ1VTVE9NX0VWRU5UX1RZUEUsIERFU0tUT1BfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vY3VzdG9tRXZlbnRUeXBlc1wiO1xuXG5jbGFzcyBJbnN0cnVjdGlvbnNCdXR0b25zRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBERVNLVE9QX0NVU1RPTV9FVkVOVF9UWVBFO1xuXG4gICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBtb2JpbGVJbnN0cnVjdGlvbnNCdXR0b25DbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBNT0JJTEVfQ1VTVE9NX0VWRU5UX1RZUEU7XG5cbiAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IEZMRVg7XG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8TW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uIG9uQ2xpY2s9e3RoaXMubW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPixcbiAgICAgIDxEZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGVza3RvcEluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlcn0gLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzaG93SW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZUluc3RydWN0aW9uc0J1dHRvbnNEaXYgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93SW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdixcbiAgICAgIGhpZGVJbnN0cnVjdGlvbnNCdXR0b25zRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9ICBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaW5zdHJ1Y3Rpb25zLWJvdHRvbXNcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdilgXG5cbiAgZ2FwOiAke2luc3RydWN0aW9uc0J1dHRvbnNEaXZHYXB9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdyaWQtYXJlYTogaW5zdHJ1Y3Rpb25zLWJ1dHRvbnMtZGl2O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkluc3RydWN0aW9uc0J1dHRvbnNEaXYiLCJkZXNrdG9wSW5zdHJ1Y3Rpb25zQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiREVTS1RPUF9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsIm1vYmlsZUluc3RydWN0aW9uc0J1dHRvbkNsaWNrSGFuZGxlciIsIk1PQklMRV9DVVNUT01fRVZFTlRfVFlQRSIsInNob3ciLCJkaXNwbGF5IiwiRkxFWCIsImNoaWxkRWxlbWVudHMiLCJNb2JpbGVJbnN0cnVjdGlvbnNCdXR0b24iLCJvbkNsaWNrIiwiRGVza3RvcEluc3RydWN0aW9uc0J1dHRvbiIsInBhcmVudENvbnRleHQiLCJzaG93SW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdiIsImJpbmQiLCJoaWRlSW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdiIsImhpZGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uc0RpdkdhcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMERBOzs7ZUFBQTs7O29FQXhEc0I7b0JBRUU7NkRBRWE7OERBQ0M7eUJBRWpCO3NCQUNxQjtnQ0FDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztrQ0FBQUEsb0NBQ0pDLHdCQUFBQSx5Q0FBd0MsU0FBQ0MsT0FBT0M7WUFDOUMsSUFBTUMsa0JBQWtCQywyQ0FBeUI7WUFFakQsTUFBS0Msa0JBQWtCLENBQUNGLGlCQUFpQkYsT0FBT0M7UUFDbEQsSUFFQUksd0JBQUFBLHdDQUF1QyxTQUFDTCxPQUFPQztZQUM3QyxJQUFNQyxrQkFBa0JJLDBDQUF3QjtZQUVoRCxNQUFLRixrQkFBa0IsQ0FBQ0YsaUJBQWlCRixPQUFPQztRQUNsRDs7O2tCQVhJSDs7WUFhSlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFVBQVVDLGVBQUk7Z0JBRXBCLElBQUksQ0FBQ0QsT0FBTyxDQUFDQTtZQUNmOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7a0NBRU4sb0JBQUNDLGVBQXdCO3dCQUFDQyxTQUFTLElBQUksQ0FBQ1Asb0NBQW9DOztrQ0FDNUUsb0JBQUNRLGdCQUF5Qjt3QkFBQ0QsU0FBUyxJQUFJLENBQUNiLHFDQUFxQzs7aUJBRS9FO1lBQ0g7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsNkJBQTZCLElBQUksQ0FBQ1IsSUFBSSxDQUFDUyxJQUFJLENBQUMsSUFBSSxHQUNoREMsNkJBQTZCLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsSUFBSSxHQUFJLEdBQUc7Z0JBRTdELE9BQVE7b0JBQ05ELDRCQUFBQTtvQkFDQUUsNEJBQUFBO2dCQUNGO1lBQ0Y7OztXQXBDSW5CO3FCQUErQnFCLGFBQU87QUFzQzFDLGlCQXRDSXJCLHdCQXNDR3NCLFdBQVc7QUFFbEIsaUJBeENJdEIsd0JBd0NHdUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDekIsMkNBRWhCMEIsaUNBQXlCIn0=