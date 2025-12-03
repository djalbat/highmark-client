"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get menuButtonDisabledColour () {
        return menuButtonDisabledColour;
    },
    get menuButtonFill () {
        return menuButtonFill;
    },
    get menuButtonPadding () {
        return menuButtonPadding;
    },
    get menuButtonWidth () {
        return menuButtonWidth;
    },
    get menuDivBackgroundColour () {
        return menuDivBackgroundColour;
    },
    get menuDivColumnGap () {
        return menuDivColumnGap;
    },
    get menuDivPadding () {
        return menuDivPadding;
    },
    get viewBackgroundColour () {
        return viewBackgroundColour;
    },
    get viewScrollbarCornerBackgroundColour () {
        return viewScrollbarCornerBackgroundColour;
    },
    get viewScrollbarThumbBackgroundColour () {
        return viewScrollbarThumbBackgroundColour;
    },
    get viewScrollbarTrackBackgroundColour () {
        return viewScrollbarTrackBackgroundColour;
    }
});
var _occamstyles = require("occam-styles");
var pumice = _occamstyles.colours.pumice, woodsmoke = _occamstyles.colours.woodsmoke, springWood = _occamstyles.colours.springWood, backgroundColour = _occamstyles.previewPaneScheme.backgroundColour, scrollbarThumbBackgroundColour = _occamstyles.previewPaneScheme.scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour = _occamstyles.previewPaneScheme.scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour = _occamstyles.previewPaneScheme.scrollbarCornerBackgroundColour;
var menuButtonFill = pumice;
var menuDivPadding = "1rem";
var menuButtonWidth = "3rem";
var menuDivColumnGap = "1rem";
var menuButtonPadding = "0.25rem";
var viewBackgroundColour = backgroundColour;
var menuDivBackgroundColour = woodsmoke;
var menuButtonDisabledColour = springWood;
var viewScrollbarThumbBackgroundColour = scrollbarThumbBackgroundColour;
var viewScrollbarTrackBackgroundColour = scrollbarTrackBackgroundColour;
var viewScrollbarCornerBackgroundColour = scrollbarCornerBackgroundColour;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbG91cnMsIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5jb25zdCB7IHB1bWljZSwgd29vZHNtb2tlLCBzcHJpbmdXb29kIH0gPSBjb2xvdXJzLFxuICAgICAgeyBiYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9ID0gcHJldmlld1BhbmVTY2hlbWU7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uRmlsbCA9IHB1bWljZTtcbmV4cG9ydCBjb25zdCBtZW51RGl2UGFkZGluZyA9IFwiMXJlbVwiO1xuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25XaWR0aCA9IFwiM3JlbVwiO1xuZXhwb3J0IGNvbnN0IG1lbnVEaXZDb2x1bW5HYXAgPSBcIjFyZW1cIjtcbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uUGFkZGluZyA9IFwiMC4yNXJlbVwiO1xuZXhwb3J0IGNvbnN0IHZpZXdCYWNrZ3JvdW5kQ29sb3VyID0gYmFja2dyb3VuZENvbG91cjtcbmV4cG9ydCBjb25zdCBtZW51RGl2QmFja2dyb3VuZENvbG91ciA9IHdvb2RzbW9rZTtcbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uRGlzYWJsZWRDb2xvdXIgPSBzcHJpbmdXb29kO1xuZXhwb3J0IGNvbnN0IHZpZXdTY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIgPSBzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXI7XG5leHBvcnQgY29uc3Qgdmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciA9IHNjcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cjtcbmV4cG9ydCBjb25zdCB2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciA9IHNjcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXI7XG4iXSwibmFtZXMiOlsibWVudUJ1dHRvbkRpc2FibGVkQ29sb3VyIiwibWVudUJ1dHRvbkZpbGwiLCJtZW51QnV0dG9uUGFkZGluZyIsIm1lbnVCdXR0b25XaWR0aCIsIm1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIiwibWVudURpdkNvbHVtbkdhcCIsIm1lbnVEaXZQYWRkaW5nIiwidmlld0JhY2tncm91bmRDb2xvdXIiLCJ2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciIsInZpZXdTY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJ2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyIiwicHVtaWNlIiwiY29sb3VycyIsIndvb2RzbW9rZSIsInNwcmluZ1dvb2QiLCJiYWNrZ3JvdW5kQ29sb3VyIiwicHJldmlld1BhbmVTY2hlbWUiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFjYUE7ZUFBQUE7O1FBUEFDO2VBQUFBOztRQUlBQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQUhBQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQUtBQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBQ0FDO2VBQUFBOzs7MkJBZDhCO0FBRTNDLElBQVFDLFNBQWtDQyxvQkFBTyxDQUF6Q0QsUUFBUUUsWUFBMEJELG9CQUFPLENBQWpDQyxXQUFXQyxhQUFlRixvQkFBTyxDQUF0QkUsWUFDbkJDLG1CQUFzSEMsOEJBQWlCLENBQXZJRCxrQkFBa0JFLGlDQUFvR0QsOEJBQWlCLENBQXJIQyxnQ0FBZ0NDLGlDQUFvRUYsOEJBQWlCLENBQXJGRSxnQ0FBZ0NDLGtDQUFvQ0gsOEJBQWlCLENBQXJERztBQUVuRixJQUFNbEIsaUJBQWlCVTtBQUN2QixJQUFNTCxpQkFBaUI7QUFDdkIsSUFBTUgsa0JBQWtCO0FBQ3hCLElBQU1FLG1CQUFtQjtBQUN6QixJQUFNSCxvQkFBb0I7QUFDMUIsSUFBTUssdUJBQXVCUTtBQUM3QixJQUFNWCwwQkFBMEJTO0FBQ2hDLElBQU1iLDJCQUEyQmM7QUFDakMsSUFBTUwscUNBQXFDUTtBQUMzQyxJQUFNUCxxQ0FBcUNRO0FBQzNDLElBQU1WLHNDQUFzQ1cifQ==