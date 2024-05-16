"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    borderColour: function() {
        return borderColour;
    },
    borderRadius: function() {
        return borderRadius;
    },
    borderWidth: function() {
        return borderWidth;
    },
    buttonsDivGap: function() {
        return buttonsDivGap;
    },
    checkboxBackgroundColour: function() {
        return checkboxBackgroundColour;
    },
    checkboxDivGap: function() {
        return checkboxDivGap;
    },
    checkboxSize: function() {
        return checkboxSize;
    },
    checkboxesDivGap: function() {
        return checkboxesDivGap;
    },
    closeOverlayButtonColour: function() {
        return closeOverlayButtonColour;
    },
    closeOverlayButtonFontSize: function() {
        return closeOverlayButtonFontSize;
    },
    closeOverlayButtonRight: function() {
        return closeOverlayButtonRight;
    },
    closeOverlayButtonTop: function() {
        return closeOverlayButtonTop;
    },
    desktopInstructionsButtonBackgroundColour: function() {
        return desktopInstructionsButtonBackgroundColour;
    },
    instructionsButtonColour: function() {
        return instructionsButtonColour;
    },
    instructionsButtonFontSize: function() {
        return instructionsButtonFontSize;
    },
    instructionsButtonPadding: function() {
        return instructionsButtonPadding;
    },
    menuButtonPadding: function() {
        return menuButtonPadding;
    },
    menuButtonSize: function() {
        return menuButtonSize;
    },
    menuDivBackgroundColour: function() {
        return menuDivBackgroundColour;
    },
    menuDivGap: function() {
        return menuDivGap;
    },
    menuDivPadding: function() {
        return menuDivPadding;
    },
    mobileInstructionsButtonBackgroundColour: function() {
        return mobileInstructionsButtonBackgroundColour;
    },
    overlayDivBackgroundColour: function() {
        return overlayDivBackgroundColour;
    },
    overlayDivGap: function() {
        return overlayDivGap;
    },
    spanColour: function() {
        return spanColour;
    },
    spanFontSize: function() {
        return spanFontSize;
    },
    svgFill: function() {
        return svgFill;
    }
});
var svgFill = "#fff";
var spanColour = "#fff";
var menuDivGap = "32px";
var borderWidth = "4px";
var borderRadius = "8px";
var borderColour = "#fff";
var checkboxSize = "48px";
var spanFontSize = checkboxSize; ///
var buttonsDivGap = "32px";
var overlayDivGap = "48px";
var menuDivPadding = "64px";
var checkboxDivGap = "32px";
var menuButtonSize = "64px";
var checkboxesDivGap = "48px";
var menuButtonPadding = "8px";
var closeOverlayButtonTop = "24px";
var closeOverlayButtonRight = "24px";
var menuDivBackgroundColour = "#222";
var instructionsButtonColour = "#fff";
var checkboxBackgroundColour = "#000";
var closeOverlayButtonColour = "#222";
var instructionsButtonPadding = "16px";
var closeOverlayButtonFontSize = "24px";
var overlayDivBackgroundColour = "#fff";
var instructionsButtonFontSize = "24px";
var mobileInstructionsButtonBackgroundColour = "#080";
var desktopInstructionsButtonBackgroundColour = "#008";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBzdmdGaWxsID0gXCIjZmZmXCI7XG5leHBvcnQgY29uc3Qgc3BhbkNvbG91ciA9IFwiI2ZmZlwiO1xuZXhwb3J0IGNvbnN0IG1lbnVEaXZHYXAgPSBcIjMycHhcIjtcbmV4cG9ydCBjb25zdCBib3JkZXJXaWR0aCA9IFwiNHB4XCI7XG5leHBvcnQgY29uc3QgYm9yZGVyUmFkaXVzID0gXCI4cHhcIlxuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG91ciA9IFwiI2ZmZlwiO1xuZXhwb3J0IGNvbnN0IGNoZWNrYm94U2l6ZSA9IFwiNDhweFwiO1xuZXhwb3J0IGNvbnN0IHNwYW5Gb250U2l6ZSA9IGNoZWNrYm94U2l6ZTsgLy8vXG5leHBvcnQgY29uc3QgYnV0dG9uc0RpdkdhcCA9IFwiMzJweFwiO1xuZXhwb3J0IGNvbnN0IG92ZXJsYXlEaXZHYXAgPSBcIjQ4cHhcIjtcbmV4cG9ydCBjb25zdCBtZW51RGl2UGFkZGluZyA9IFwiNjRweFwiO1xuZXhwb3J0IGNvbnN0IGNoZWNrYm94RGl2R2FwID0gXCIzMnB4XCI7XG5leHBvcnQgY29uc3QgbWVudUJ1dHRvblNpemUgPSBcIjY0cHhcIjtcbmV4cG9ydCBjb25zdCBjaGVja2JveGVzRGl2R2FwID0gXCI0OHB4XCI7XG5leHBvcnQgY29uc3QgbWVudUJ1dHRvblBhZGRpbmcgPSBcIjhweFwiO1xuZXhwb3J0IGNvbnN0IGNsb3NlT3ZlcmxheUJ1dHRvblRvcCA9IFwiMjRweFwiO1xuZXhwb3J0IGNvbnN0IGNsb3NlT3ZlcmxheUJ1dHRvblJpZ2h0ID0gXCIyNHB4XCI7XG5leHBvcnQgY29uc3QgbWVudURpdkJhY2tncm91bmRDb2xvdXIgPSBcIiMyMjJcIjtcbmV4cG9ydCBjb25zdCBpbnN0cnVjdGlvbnNCdXR0b25Db2xvdXIgPSBcIiNmZmZcIjtcbmV4cG9ydCBjb25zdCBjaGVja2JveEJhY2tncm91bmRDb2xvdXIgPSBcIiMwMDBcIjtcbmV4cG9ydCBjb25zdCBjbG9zZU92ZXJsYXlCdXR0b25Db2xvdXIgPSBcIiMyMjJcIjtcbmV4cG9ydCBjb25zdCBpbnN0cnVjdGlvbnNCdXR0b25QYWRkaW5nID0gXCIxNnB4XCI7XG5leHBvcnQgY29uc3QgY2xvc2VPdmVybGF5QnV0dG9uRm9udFNpemUgPSBcIjI0cHhcIjtcbmV4cG9ydCBjb25zdCBvdmVybGF5RGl2QmFja2dyb3VuZENvbG91ciA9IFwiI2ZmZlwiO1xuZXhwb3J0IGNvbnN0IGluc3RydWN0aW9uc0J1dHRvbkZvbnRTaXplID0gXCIyNHB4XCI7XG5leHBvcnQgY29uc3QgbW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQmFja2dyb3VuZENvbG91ciA9IFwiIzA4MFwiO1xuZXhwb3J0IGNvbnN0IGRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25CYWNrZ3JvdW5kQ29sb3VyID0gXCIjMDA4XCI7XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJidXR0b25zRGl2R2FwIiwiY2hlY2tib3hCYWNrZ3JvdW5kQ29sb3VyIiwiY2hlY2tib3hEaXZHYXAiLCJjaGVja2JveFNpemUiLCJjaGVja2JveGVzRGl2R2FwIiwiY2xvc2VPdmVybGF5QnV0dG9uQ29sb3VyIiwiY2xvc2VPdmVybGF5QnV0dG9uRm9udFNpemUiLCJjbG9zZU92ZXJsYXlCdXR0b25SaWdodCIsImNsb3NlT3ZlcmxheUJ1dHRvblRvcCIsImRlc2t0b3BJbnN0cnVjdGlvbnNCdXR0b25CYWNrZ3JvdW5kQ29sb3VyIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uQ29sb3VyIiwiaW5zdHJ1Y3Rpb25zQnV0dG9uRm9udFNpemUiLCJpbnN0cnVjdGlvbnNCdXR0b25QYWRkaW5nIiwibWVudUJ1dHRvblBhZGRpbmciLCJtZW51QnV0dG9uU2l6ZSIsIm1lbnVEaXZCYWNrZ3JvdW5kQ29sb3VyIiwibWVudURpdkdhcCIsIm1lbnVEaXZQYWRkaW5nIiwibW9iaWxlSW5zdHJ1Y3Rpb25zQnV0dG9uQmFja2dyb3VuZENvbG91ciIsIm92ZXJsYXlEaXZCYWNrZ3JvdW5kQ29sb3VyIiwib3ZlcmxheURpdkdhcCIsInNwYW5Db2xvdXIiLCJzcGFuRm9udFNpemUiLCJzdmdGaWxsIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFPYUEsWUFBWTtlQUFaQTs7SUFEQUMsWUFBWTtlQUFaQTs7SUFEQUMsV0FBVztlQUFYQTs7SUFLQUMsYUFBYTtlQUFiQTs7SUFXQUMsd0JBQXdCO2VBQXhCQTs7SUFSQUMsY0FBYztlQUFkQTs7SUFMQUMsWUFBWTtlQUFaQTs7SUFPQUMsZ0JBQWdCO2VBQWhCQTs7SUFPQUMsd0JBQXdCO2VBQXhCQTs7SUFFQUMsMEJBQTBCO2VBQTFCQTs7SUFOQUMsdUJBQXVCO2VBQXZCQTs7SUFEQUMscUJBQXFCO2VBQXJCQTs7SUFXQUMseUNBQXlDO2VBQXpDQTs7SUFSQUMsd0JBQXdCO2VBQXhCQTs7SUFNQUMsMEJBQTBCO2VBQTFCQTs7SUFIQUMseUJBQXlCO2VBQXpCQTs7SUFQQUMsaUJBQWlCO2VBQWpCQTs7SUFGQUMsY0FBYztlQUFkQTs7SUFLQUMsdUJBQXVCO2VBQXZCQTs7SUFmQUMsVUFBVTtlQUFWQTs7SUFRQUMsY0FBYztlQUFkQTs7SUFlQUMsd0NBQXdDO2VBQXhDQTs7SUFGQUMsMEJBQTBCO2VBQTFCQTs7SUFkQUMsYUFBYTtlQUFiQTs7SUFSQUMsVUFBVTtlQUFWQTs7SUFNQUMsWUFBWTtlQUFaQTs7SUFQQUMsT0FBTztlQUFQQTs7O0FBQU4sSUFBTUEsVUFBVTtBQUNoQixJQUFNRixhQUFhO0FBQ25CLElBQU1MLGFBQWE7QUFDbkIsSUFBTWpCLGNBQWM7QUFDcEIsSUFBTUQsZUFBZTtBQUNyQixJQUFNRCxlQUFlO0FBQ3JCLElBQU1NLGVBQWU7QUFDckIsSUFBTW1CLGVBQWVuQixjQUFjLEdBQUc7QUFDdEMsSUFBTUgsZ0JBQWdCO0FBQ3RCLElBQU1vQixnQkFBZ0I7QUFDdEIsSUFBTUgsaUJBQWlCO0FBQ3ZCLElBQU1mLGlCQUFpQjtBQUN2QixJQUFNWSxpQkFBaUI7QUFDdkIsSUFBTVYsbUJBQW1CO0FBQ3pCLElBQU1TLG9CQUFvQjtBQUMxQixJQUFNTCx3QkFBd0I7QUFDOUIsSUFBTUQsMEJBQTBCO0FBQ2hDLElBQU1RLDBCQUEwQjtBQUNoQyxJQUFNTCwyQkFBMkI7QUFDakMsSUFBTVQsMkJBQTJCO0FBQ2pDLElBQU1JLDJCQUEyQjtBQUNqQyxJQUFNTyw0QkFBNEI7QUFDbEMsSUFBTU4sNkJBQTZCO0FBQ25DLElBQU1hLDZCQUE2QjtBQUNuQyxJQUFNUiw2QkFBNkI7QUFDbkMsSUFBTU8sMkNBQTJDO0FBQ2pELElBQU1ULDRDQUE0QyJ9