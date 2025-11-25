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
    get default () {
        return _default;
    },
    get getClientCSSSelectorsString () {
        return getClientCSSSelectorsString;
    },
    get getClientFileName () {
        return getClientFileName;
    },
    get getSourceDirectoryPath () {
        return getSourceDirectoryPath;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var getPackagePath = _necessary.packageUtilities.getPackagePath;
function getClientFileName() {
    return _constants.CLIENT_FILE_NAME;
}
function getSourceDirectoryPath() {
    var packagePath = getPackagePath(), sourceDirectoryPath = "".concat(packagePath, "/node_modules/highmark-client");
    return sourceDirectoryPath;
}
function getClientCSSSelectorsString() {
    return _constants.CLIENT_CSS_SELECTORS_STRING;
}
var _default = {
    getClientFileName: getClientFileName,
    getSourceDirectoryPath: getSourceDirectoryPath,
    getClientCSSSelectorsString: getClientCSSSelectorsString
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYWNrYWdlVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGdldFBhY2thZ2VQYXRoIH0gPSBwYWNrYWdlVXRpbGl0aWVzO1xuXG5pbXBvcnQgeyBDTElFTlRfRklMRV9OQU1FLCBDTElFTlRfQ1NTX1NFTEVDVE9SU19TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRGaWxlTmFtZSgpIHtcbiAgcmV0dXJuIENMSUVOVF9GSUxFX05BTUU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTb3VyY2VEaXJlY3RvcnlQYXRoKCkge1xuICBjb25zdCBwYWNrYWdlUGF0aCA9IGdldFBhY2thZ2VQYXRoKCksXG4gICAgICAgIHNvdXJjZURpcmVjdG9yeVBhdGggPSBgJHtwYWNrYWdlUGF0aH0vbm9kZV9tb2R1bGVzL2hpZ2htYXJrLWNsaWVudGA7XG5cbiAgcmV0dXJuIHNvdXJjZURpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRDU1NTZWxlY3RvcnNTdHJpbmcoKSB7XG4gIHJldHVybiBDTElFTlRfQ1NTX1NFTEVDVE9SU19TVFJJTkc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0Q2xpZW50RmlsZU5hbWUsXG4gIGdldFNvdXJjZURpcmVjdG9yeVBhdGgsXG4gIGdldENsaWVudENTU1NlbGVjdG9yc1N0cmluZ1xufTtcbiJdLCJuYW1lcyI6WyJnZXRDbGllbnRDU1NTZWxlY3RvcnNTdHJpbmciLCJnZXRDbGllbnRGaWxlTmFtZSIsImdldFNvdXJjZURpcmVjdG9yeVBhdGgiLCJnZXRQYWNrYWdlUGF0aCIsInBhY2thZ2VVdGlsaXRpZXMiLCJDTElFTlRfRklMRV9OQU1FIiwicGFja2FnZVBhdGgiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIiwiQ0xJRU5UX0NTU19TRUxFQ1RPUlNfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1QkE7ZUFBQTs7UUFKZ0JBO2VBQUFBOztRQVhBQztlQUFBQTs7UUFJQUM7ZUFBQUE7Ozt5QkFWaUI7eUJBSTZCO0FBRjlELElBQU0sQUFBRUMsaUJBQW1CQywyQkFBZ0IsQ0FBbkNEO0FBSUQsU0FBU0Y7SUFDZCxPQUFPSSwyQkFBZ0I7QUFDekI7QUFFTyxTQUFTSDtJQUNkLElBQU1JLGNBQWNILGtCQUNkSSxzQkFBc0IsQUFBQyxHQUFjLE9BQVpELGFBQVk7SUFFM0MsT0FBT0M7QUFDVDtBQUVPLFNBQVNQO0lBQ2QsT0FBT1Esc0NBQTJCO0FBQ3BDO0lBRUEsV0FBZTtJQUNiUCxtQkFBQUE7SUFDQUMsd0JBQUFBO0lBQ0FGLDZCQUFBQTtBQUNGIn0=