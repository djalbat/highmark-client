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
var _occamstyles = require("occam-styles");
var _document = /*#__PURE__*/ _interop_require_default(require("./view/div/document"));
var _state = require("./state");
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
        "\n\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: scroll;\n  position: absolute;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  touch-action: none;\n\n  background-color: ",
        ";\n  \n  ",
        "\n  \n  ::-webkit-scrollbar-thumb {\n    background-color: ",
        ";\n  }\n  \n  ::-webkit-scrollbar-track {\n    background-color: ",
        ";\n  }\n\n  ::-webkit-scrollbar-corner {\n    background-color: ",
        ";\n  }\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var backgroundColour = _occamstyles.previewPaneScheme.backgroundColour, scrollbarThumbBackgroundColour = _occamstyles.previewPaneScheme.scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour = _occamstyles.previewPaneScheme.scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour = _occamstyles.previewPaneScheme.scrollbarCornerBackgroundColour;
var ENTER_KEY_CODE = _necessary.keyCodes.ENTER_KEY_CODE, ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE, ARROW_UP_KEY_CODE = _necessary.keyCodes.ARROW_UP_KEY_CODE, BACKSPACE_KEY_CODE = _necessary.keyCodes.BACKSPACE_KEY_CODE, ARROW_DOWN_KEY_CODE = _necessary.keyCodes.ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE = _necessary.keyCodes.ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE = _necessary.keyCodes.ARROW_RIGHT_KEY_CODE;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyDownHandler", function(event, element) {
            var keyCode = event.keyCode;
            switch(keyCode){
                case ESCAPE_KEY_CODE:
                    {
                        var fullScreen = _this.isFullScreen();
                        if (fullScreen) {
                            controller.exitFullScreen();
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
        }), _define_property(_this, "resizeHandler", function(event, element) {
            var noNudge = true;
            _this.zoom(noNudge);
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "zoom",
            value: function zoom() {
                var noNudge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var zoom = (0, _state.getZoom)(), innerWidth = this.getInnerWidth(), innerHeight = this.getInnerHeight(), documentScale = zoom, previewPaneInnerWidth = innerWidth, previewPaneInnerHeight = innerHeight; ///
                this.scaleDocumentDiv(documentScale, previewPaneInnerWidth, previewPaneInnerHeight);
                if (noNudge) {
                    return;
                }
                this.nudge();
            }
        },
        {
            key: "nudge",
            value: function nudge() {
                var _this = this;
                var scrollTop = this.getScrollTop();
                var scrollLeft = this.getScrollLeft(), innerHeight = this.getInnerHeight(), scrollHeight = this.getScrollHeight(), maximumScrollTop = scrollHeight - innerHeight, delta = scrollTop < maximumScrollTop ? +1 : -1;
                scrollTop += delta;
                this.scrollTo(scrollTop, scrollLeft);
                requestAnimationFrame(function() {
                    scrollTop -= delta;
                    _this.scrollTo(scrollTop, scrollLeft);
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onResize(this.resizeHandler, this);
                _easy.window.onKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offResize(this.resizeHandler, this);
                _easy.window.offKeyDown(this.keyDownHandler);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var resizeHandler = this.resizeHandler.bind(this);
                return /*#__PURE__*/ React.createElement(_document.default, {
                    resizeHandler: resizeHandler
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
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
var _default = (0, _easywithstyle.default)(View)(_templateObject(), backgroundColour, _occamstyles.scrollbarMixin, scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIHdpbmRvdyB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyBzY3JvbGxiYXJNaXhpbiwgcHJldmlld1BhbmVTY2hlbWUgfSBmcm9tIFwib2NjYW0tc3R5bGVzXCI7XG5cbmltcG9ydCBEb2N1bWVudERpdiBmcm9tIFwiLi92aWV3L2Rpdi9kb2N1bWVudFwiO1xuXG5pbXBvcnQgeyBnZXRab29tIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWU7XG5cbmNvbnN0IHsgRU5URVJfS0VZX0NPREUsXG4gICAgICAgIEVTQ0FQRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfVVBfS0VZX0NPREUsXG4gICAgICAgIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgICAgICAgQVJST1dfUklHSFRfS0VZX0NPREUgfSA9IGtleUNvZGVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBFU0NBUEVfS0VZX0NPREU6IHtcbiAgICAgICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICAgICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICBjb250cm9sbGVyLmV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBBUlJPV19VUF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dGaXJzdERpdmlzaW9uRGl2KCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBFTlRFUl9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZX0NPREU6IHtcbiAgICAgICAgdGhpcy5zaG93UmlnaHREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEJBQ0tTUEFDRV9LRVlfQ09ERTpcbiAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMZWZ0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgbm9OdWRnZSA9IHRydWU7XG5cbiAgICB0aGlzLnpvb20obm9OdWRnZSk7XG4gIH1cblxuICB6b29tKG5vTnVkZ2UgPSBmYWxzZSkge1xuICAgIGNvbnN0IHpvb20gPSBnZXRab29tKCksXG4gICAgICAgICAgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50U2NhbGUgPSB6b29tLCAvLy9cbiAgICAgICAgICBwcmV2aWV3UGFuZUlubmVyV2lkdGggPSBpbm5lcldpZHRoLCAvLy9cbiAgICAgICAgICBwcmV2aWV3UGFuZUlubmVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7IC8vL1xuXG4gICAgdGhpcy5zY2FsZURvY3VtZW50RGl2KGRvY3VtZW50U2NhbGUsIHByZXZpZXdQYW5lSW5uZXJXaWR0aCwgcHJldmlld1BhbmVJbm5lckhlaWdodCk7XG5cbiAgICBpZiAobm9OdWRnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubnVkZ2UoKTtcbiAgfVxuXG4gIG51ZGdlKCkge1xuICAgIGxldCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpO1xuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIHNjcm9sbEhlaWdodCA9IHRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksXG4gICAgICAgICAgbWF4aW11bVNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0LFxuICAgICAgICAgIGRlbHRhID0gKHNjcm9sbFRvcCA8IG1heGltdW1TY3JvbGxUb3ApID9cbiAgICAgICAgICAgICAgICAgICAgKzEgOlxuICAgICAgICAgICAgICAgICAgICAgIC0xO1xuXG4gICAgc2Nyb2xsVG9wICs9IGRlbHRhO1xuXG4gICAgdGhpcy5zY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHNjcm9sbFRvcCAtPSBkZWx0YTtcblxuICAgICAgdGhpcy5zY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlciwgdGhpcyk7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPERvY3VtZW50RGl2IHJlc2l6ZUhhbmRsZXI9e3Jlc2l6ZUhhbmRsZXJ9IC8+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvdXJ9O1xuICBcbiAgJHtzY3JvbGxiYXJNaXhpbn1cbiAgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgfVxuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXJ9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7c2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cn07XG4gIH1cbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiYmFja2dyb3VuZENvbG91ciIsInByZXZpZXdQYW5lU2NoZW1lIiwic2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciIsIkVOVEVSX0tFWV9DT0RFIiwia2V5Q29kZXMiLCJFU0NBUEVfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJWaWV3Iiwia2V5RG93bkhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJrZXlDb2RlIiwiZnVsbFNjcmVlbiIsImlzRnVsbFNjcmVlbiIsImNvbnRyb2xsZXIiLCJleGl0RnVsbFNjcmVlbiIsInNob3dGaXJzdERpdmlzaW9uRGl2Iiwic2hvd0xhc3REaXZpc2lvbkRpdiIsInNob3dSaWdodERpdmlzaW9uRGl2Iiwic2hvd0xlZnREaXZpc2lvbkRpdiIsInJlc2l6ZUhhbmRsZXIiLCJub051ZGdlIiwiem9vbSIsImdldFpvb20iLCJpbm5lcldpZHRoIiwiZ2V0SW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJkb2N1bWVudFNjYWxlIiwicHJldmlld1BhbmVJbm5lcldpZHRoIiwicHJldmlld1BhbmVJbm5lckhlaWdodCIsInNjYWxlRG9jdW1lbnREaXYiLCJudWRnZSIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0Iiwic2Nyb2xsSGVpZ2h0IiwiZ2V0U2Nyb2xsSGVpZ2h0IiwibWF4aW11bVNjcm9sbFRvcCIsImRlbHRhIiwic2Nyb2xsVG8iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaWRNb3VudCIsIm9uUmVzaXplIiwid2luZG93Iiwib25LZXlEb3duIiwid2lsbFVubW91bnQiLCJvZmZSZXNpemUiLCJvZmZLZXlEb3duIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJEb2N1bWVudERpdiIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwic2Nyb2xsYmFyTWl4aW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlKQTs7O2VBQUE7OztvRUEvSXNCO3lCQUVHO29CQUNPOzJCQUNrQjsrREFFMUI7cUJBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFRQSxtQkFBc0hDLDhCQUFpQixDQUF2SUQsa0JBQWtCRSxpQ0FBb0dELDhCQUFpQixDQUFySEMsZ0NBQWdDQyxpQ0FBb0VGLDhCQUFpQixDQUFyRkUsZ0NBQWdDQyxrQ0FBb0NILDhCQUFpQixDQUFyREc7QUFFMUYsSUFBUUMsaUJBTXlCQyxtQkFBUSxDQU5qQ0QsZ0JBQ0FFLGtCQUt5QkQsbUJBQVEsQ0FMakNDLGlCQUNBQyxvQkFJeUJGLG1C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