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
var _necessary = require("necessary");
var _alternateText = /*#__PURE__*/ _interop_require_default(require("../span/alternateText"));
var _imagePreview = /*#__PURE__*/ _interop_require_default(require("../button/close/imagePreview"));
var _constants = require("../../constants");
var _selectors = require("../../selectors");
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
        "\n\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  padding: ",
        ";\n  position: fixed;\n  column-gap: ",
        ";\n  align-items: center;\n  flex-direction: column;\n  background-color: ",
        ";\n  justify-content: center;\n    \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var first = _necessary.arrayUtilities.first;
var ImagePreviewDiv = /*#__PURE__*/ function(Element) {
    _inherits(ImagePreviewDiv, Element);
    var _super = _create_super(ImagePreviewDiv);
    function ImagePreviewDiv() {
        _class_call_check(this, ImagePreviewDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "imagePreviewCloseButtonClickHandler", function(event, element) {
            _this.hide();
        });
        return _this;
    }
    _create_class(ImagePreviewDiv, [
        {
            key: "removeImage",
            value: function removeImage() {
                var imageChildElements = this.getChildElements(_selectors.IMAGE_SELECTOR), images = imageChildElements, imagesLength = images.length;
                if (imagesLength === 1) {
                    var firstImage = first(images), image = firstImage; ///
                    image.remove();
                    var alternateSpanElements = this.getChildElements(_selectors.ALTERNATE_TEXT_SPAN_SELECTOR), alternateSpans = alternateSpanElements, firstAlternateSpan = first(alternateSpans), alternateSpan = firstAlternateSpan; ///
                    alternateSpan.remove();
                }
            }
        },
        {
            key: "addImage",
            value: function addImage(image) {
                image = image.clone(); ///
                var alternateText = image.getAlternateText();
                this.add(image);
                this.add(/*#__PURE__*/ React.createElement(_alternateText.default, null, alternateText));
            }
        },
        {
            key: "show",
            value: function show(image) {
                this.removeImage();
                this.addImage(image);
                var display = _constants.FLEX; ///
                this.display(display);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_imagePreview.default, {
                    onClick: this.imagePreviewCloseButtonClickHandler
                });
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var showImagePreviewDiv = this.show.bind(this); ///
                return {
                    showImagePreviewDiv: showImagePreviewDiv
                };
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.hide();
            }
        }
    ]);
    return ImagePreviewDiv;
}(_wrap_native_super(_easy.Element));
_define_property(ImagePreviewDiv, "tagName", "div");
_define_property(ImagePreviewDiv, "defaultProperties", {
    className: "image-preview"
});
var _default = (0, _easywithstyle.default)(ImagePreviewDiv)(_templateObject(), _styles.imagePreviewDivPadding, _styles.imagePreviewDivColumnGap, _styles.imagePreviewDivDivBackgroundColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9pbWFnZVByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBbHRlcm5hdGVUZXh0U3BhbiBmcm9tIFwiLi4vc3Bhbi9hbHRlcm5hdGVUZXh0XCI7XG5pbXBvcnQgSW1hZ2VQcmV2aWV3Q2xvc2VCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9jbG9zZS9pbWFnZVByZXZpZXdcIjtcblxuaW1wb3J0IHsgRkxFWCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IElNQUdFX1NFTEVDVE9SLCBBTFRFUk5BVEVfVEVYVF9TUEFOX1NFTEVDVE9SIH0gZnJvbSBcIi4uLy4uL3NlbGVjdG9yc1wiO1xuaW1wb3J0IHsgaW1hZ2VQcmV2aWV3RGl2UGFkZGluZywgaW1hZ2VQcmV2aWV3RGl2Q29sdW1uR2FwLCBpbWFnZVByZXZpZXdEaXZEaXZCYWNrZ3JvdW5kQ29sb3VyIH0gZnJvbSBcIi4uLy4uL3N0eWxlc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgSW1hZ2VQcmV2aWV3RGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGltYWdlUHJldmlld0Nsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICByZW1vdmVJbWFnZSgpIHtcbiAgICBjb25zdCBpbWFnZUNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoSU1BR0VfU0VMRUNUT1IpLFxuICAgICAgICAgIGltYWdlcyA9IGltYWdlQ2hpbGRFbGVtZW50cywgIC8vL1xuICAgICAgICAgIGltYWdlc0xlbmd0aCA9IGltYWdlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW1hZ2VzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdEltYWdlID0gZmlyc3QoaW1hZ2VzKSxcbiAgICAgICAgICAgIGltYWdlID0gZmlyc3RJbWFnZTsgLy8vXG5cbiAgICAgIGltYWdlLnJlbW92ZSgpO1xuXG4gICAgICBjb25zdCBhbHRlcm5hdGVTcGFuRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoQUxURVJOQVRFX1RFWFRfU1BBTl9TRUxFQ1RPUiksXG4gICAgICAgICAgICBhbHRlcm5hdGVTcGFucyA9IGFsdGVybmF0ZVNwYW5FbGVtZW50cywgLy8vXG4gICAgICAgICAgICBmaXJzdEFsdGVybmF0ZVNwYW4gPSBmaXJzdChhbHRlcm5hdGVTcGFucyksXG4gICAgICAgICAgICBhbHRlcm5hdGVTcGFuID0gZmlyc3RBbHRlcm5hdGVTcGFuOyAvLy9cblxuICAgICAgYWx0ZXJuYXRlU3Bhbi5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBhZGRJbWFnZShpbWFnZSkge1xuICAgIGltYWdlID0gaW1hZ2UuY2xvbmUoKTsgIC8vL1xuXG4gICAgY29uc3QgYWx0ZXJuYXRlVGV4dCA9IGltYWdlLmdldEFsdGVybmF0ZVRleHQoKTtcblxuICAgIHRoaXMuYWRkKGltYWdlKTtcblxuICAgIHRoaXMuYWRkKFxuXG4gICAgICA8QWx0ZXJuYXRlVGV4dFNwYW4+XG4gICAgICAgIHthbHRlcm5hdGVUZXh0fVxuICAgICAgPC9BbHRlcm5hdGVUZXh0U3Bhbj5cblxuICAgICk7XG4gIH1cblxuICBzaG93KGltYWdlKSB7XG4gICAgdGhpcy5yZW1vdmVJbWFnZSgpO1xuXG4gICAgdGhpcy5hZGRJbWFnZShpbWFnZSk7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gRkxFWDsgLy8vXG5cbiAgICB0aGlzLmRpc3BsYXkoZGlzcGxheSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxJbWFnZVByZXZpZXdDbG9zZUJ1dHRvbiBvbkNsaWNrPXt0aGlzLmltYWdlUHJldmlld0Nsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyfSAvPlxuXG4gICAgKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2hvd0ltYWdlUHJldmlld0RpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd0ltYWdlUHJldmlld0RpdlxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImltYWdlLXByZXZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSW1hZ2VQcmV2aWV3RGl2KWBcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6ICR7aW1hZ2VQcmV2aWV3RGl2UGFkZGluZ307XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sdW1uLWdhcDogJHtpbWFnZVByZXZpZXdEaXZDb2x1bW5HYXB9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2ltYWdlUHJldmlld0RpdkRpdkJhY2tncm91bmRDb2xvdXJ9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkltYWdlUHJldmlld0RpdiIsImltYWdlUHJldmlld0Nsb3NlQnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaGlkZSIsInJlbW92ZUltYWdlIiwiaW1hZ2VDaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsIklNQUdFX1NFTEVDVE9SIiwiaW1hZ2VzIiwiaW1hZ2VzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RJbWFnZSIsImltYWdlIiwicmVtb3ZlIiwiYWx0ZXJuYXRlU3BhbkVsZW1lbnRzIiwiQUxURVJOQVRFX1RFWFRfU1BBTl9TRUxFQ1RPUiIsImFsdGVybmF0ZVNwYW5zIiwiZmlyc3RBbHRlcm5hdGVTcGFuIiwiYWx0ZXJuYXRlU3BhbiIsImFkZEltYWdlIiwiY2xvbmUiLCJhbHRlcm5hdGVUZXh0IiwiZ2V0QWx0ZXJuYXRlVGV4dCIsImFkZCIsIkFsdGVybmF0ZVRleHRTcGFuIiwic2hvdyIsImRpc3BsYXkiLCJGTEVYIiwiY2hpbGRFbGVtZW50cyIsIkltYWdlUHJldmlld0Nsb3NlQnV0dG9uIiwib25DbGljayIsInBhcmVudENvbnRleHQiLCJzaG93SW1hZ2VQcmV2aWV3RGl2IiwiYmluZCIsImluaXRpYWxpc2UiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiaW1hZ2VQcmV2aWV3RGl2UGFkZGluZyIsImltYWdlUHJldmlld0RpdkNvbHVtbkdhcCIsImltYWdlUHJldmlld0RpdkRpdkJhY2tncm91bmRDb2xvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThGQTs7O2VBQUE7OztvRUE1RnNCO29CQUVFO3lCQUNPO29FQUVEO21FQUNNO3lCQUVmO3lCQUN3QztzQkFDd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckcsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFBLEFBQU1FLGdDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSx1Q0FBc0MsU0FBQ0MsT0FBT0M7WUFDNUMsTUFBS0MsSUFBSTtRQUNYOzs7a0JBSElKOztZQUtKSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNDLHlCQUFjLEdBQ3pEQyxTQUFTSCxvQkFDVEksZUFBZUQsT0FBT0UsTUFBTTtnQkFFbEMsSUFBSUQsaUJBQWlCLEdBQUc7b0JBQ3RCLElBQU1FLGFBQWFkLE1BQU1XLFNBQ25CSSxRQUFRRCxZQUFZLEdBQUc7b0JBRTdCQyxNQUFNQyxNQUFNO29CQUVaLElBQU1DLHdCQUF3QixJQUFJLENBQUNSLGdCQUFnQixDQUFDUyx1Q0FBNEIsR0FDMUVDLGlCQUFpQkYsdUJBQ2pCRyxxQkFBcUJwQixNQUFNbUIsaUJBQzNCRSxnQkFBZ0JELG9CQUFvQixHQUFHO29CQUU3Q0MsY0FBY0wsTUFBTTtnQkFDdEI7WUFDRjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTUCxLQUFLO2dCQUNaQSxRQUFRQSxNQUFNUSxLQUFLLElBQUssR0FBRztnQkFFM0IsSUFBTUMsZ0JBQWdCVCxNQUFNVSxnQkFBZ0I7Z0JBRTVDLElBQUksQ0FBQ0MsR0FBRyxDQUFDWDtnQkFFVCxJQUFJLENBQUNXLEdBQUcsZUFFTixvQkFBQ0Msc0JBQWlCLFFBQ2ZIO1lBSVA7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS2IsS0FBSztnQkFDUixJQUFJLENBQUNSLFdBQVc7Z0JBRWhCLElBQUksQ0FBQ2UsUUFBUSxDQUFDUDtnQkFFZCxJQUFNYyxVQUFVQyxlQUFJLEVBQUUsR0FBRztnQkFFekIsSUFBSSxDQUFDRCxPQUFPLENBQUNBO1lBQ2Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHFCQUF1QjtvQkFBQ0MsU0FBUyxJQUFJLENBQUM5QixtQ0FBbUM7O1lBRzlFOzs7WUFFQStCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDUCxJQUFJLENBQUNRLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFFckQsT0FBUTtvQkFDTkQscUJBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDL0IsSUFBSTtZQUNYOzs7V0FyRUlKO3FCQUF3Qm9DLGFBQU87QUF1RW5DLGlCQXZFSXBDLGlCQXVFR3FDLFdBQVU7QUFFakIsaUJBekVJckMsaUJBeUVHc0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDeEMsb0NBUVp5Qyw4QkFBc0IsRUFFbkJDLGdDQUF3QixFQUdsQkMsMENBQWtDIn0=