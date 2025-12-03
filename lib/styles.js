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
    get menuButtonDisabledFill () {
        return menuButtonDisabledFill;
    },
    get menuButtonFill () {
        return menuButtonFill;
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
var nobel = _occamstyles.colours.nobel, woodsmoke = _occamstyles.colours.woodsmoke, springWood = _occamstyles.colours.springWood, backgroundColour = _occamstyles.previewPaneScheme.backgroundColour, scrollbarThumbBackgroundColour = _occamstyles.previewPaneScheme.scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour = _occamstyles.previewPaneScheme.scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour = _occamstyles.previewPaneScheme.scrollbarCornerBackgroundColour;
var menuButtonFill = nobel;
var menuDivPadding = "1.2rem";
var menuButtonWidth = "2.4rem";
var menuDivColumnGap = "1.2rem";
var viewBackgroundColour = backgroundColour;
var menuButtonDisabledFill = springWood;
var menuDivBackgroundColour = woodsmoke;
var menuButtonDisabledColour = springWood;
var viewScrollbarThumbBackgroundColour = scrollbarThumbBackgroundColour;
var viewScrollbarTrackBackgroundColour = scrollbarTrackBackgroundColour;
var viewScrollbarCornerBackgroundColour = scrollbarCornerBackgroundColour;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbG91cnMsIHByZXZpZXdQYW5lU2NoZW1lIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuXG5jb25zdCB7IG5vYmVsLCB3b29kc21va2UsIHNwcmluZ1dvb2QgfSA9IGNvbG91cnMsXG4gICAgICB7IGJhY2tncm91bmRDb2xvdXIsIHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciwgc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLCBzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIH0gPSBwcmV2aWV3UGFuZVNjaGVtZTtcblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25GaWxsID0gbm9iZWw7XG5leHBvcnQgY29uc3QgbWVudURpdlBhZGRpbmcgPSBcIjEuMnJlbVwiO1xuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25XaWR0aCA9IFwiMi40cmVtXCI7XG5leHBvcnQgY29uc3QgbWVudURpdkNvbHVtbkdhcCA9IFwiMS4ycmVtXCI7XG5leHBvcnQgY29uc3Qgdmlld0JhY2tncm91bmRDb2xvdXIgPSBiYWNrZ3JvdW5kQ29sb3VyO1xuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25EaXNhYmxlZEZpbGwgPSBzcHJpbmdXb29kO1xuZXhwb3J0IGNvbnN0IG1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyID0gd29vZHNtb2tlO1xuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b25EaXNhYmxlZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5leHBvcnQgY29uc3Qgdmlld1Njcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91ciA9IHNjcm9sbGJhclRodW1iQmFja2dyb3VuZENvbG91cjtcbmV4cG9ydCBjb25zdCB2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyID0gc2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyO1xuZXhwb3J0IGNvbnN0IHZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyID0gc2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91cjtcbiJdLCJuYW1lcyI6WyJtZW51QnV0dG9uRGlzYWJsZWRDb2xvdXIiLCJtZW51QnV0dG9uRGlzYWJsZWRGaWxsIiwibWVudUJ1dHRvbkZpbGwiLCJtZW51QnV0dG9uV2lkdGgiLCJtZW51RGl2QmFja2dyb3VuZENvbG91ciIsIm1lbnVEaXZDb2x1bW5HYXAiLCJtZW51RGl2UGFkZGluZyIsInZpZXdCYWNrZ3JvdW5kQ29sb3VyIiwidmlld1Njcm9sbGJhckNvcm5lckJhY2tncm91bmRDb2xvdXIiLCJ2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwidmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsIm5vYmVsIiwiY29sb3VycyIsIndvb2RzbW9rZSIsInNwcmluZ1dvb2QiLCJiYWNrZ3JvdW5kQ29sb3VyIiwicHJldmlld1BhbmVTY2hlbWUiLCJzY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJUcmFja0JhY2tncm91bmRDb2xvdXIiLCJzY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFjYUE7ZUFBQUE7O1FBRkFDO2VBQUFBOztRQUxBQztlQUFBQTs7UUFFQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOztRQUhBQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBR0FDO2VBQUFBOztRQU1BQztlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBQ0FDO2VBQUFBOzs7MkJBZDhCO0FBRTNDLElBQVFDLFFBQWlDQyxvQkFBTyxDQUF4Q0QsT0FBT0UsWUFBMEJELG9CQUFPLENBQWpDQyxXQUFXQyxhQUFlRixvQkFBTyxDQUF0QkUsWUFDbEJDLG1CQUFzSEMsOEJBQWlCLENBQXZJRCxrQkFBa0JFLGlDQUFvR0QsOEJBQWlCLENBQXJIQyxnQ0FBZ0NDLGlDQUFvRUYsOEJBQWlCLENBQXJGRSxnQ0FBZ0NDLGtDQUFvQ0gsOEJBQWlCLENBQXJERztBQUVuRixJQUFNakIsaUJBQWlCUztBQUN2QixJQUFNTCxpQkFBaUI7QUFDdkIsSUFBTUgsa0JBQWtCO0FBQ3hCLElBQU1FLG1CQUFtQjtBQUN6QixJQUFNRSx1QkFBdUJRO0FBQzdCLElBQU1kLHlCQUF5QmE7QUFDL0IsSUFBTVYsMEJBQTBCUztBQUNoQyxJQUFNYiwyQkFBMkJjO0FBQ2pDLElBQU1MLHFDQUFxQ1E7QUFDM0MsSUFBTVAscUNBQXFDUTtBQUMzQyxJQUFNVixzQ0FBc0NXIn0=