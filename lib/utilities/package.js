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
    get getClientJSFileName () {
        return getClientJSFileName;
    },
    get getFileNames () {
        return getFileNames;
    },
    get getSourceDirectoryPath () {
        return getSourceDirectoryPath;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var getPackagePath = _necessary.packageUtilities.getPackagePath;
function getFileNames() {
    var fileNames = [
        _constants.CLIENT_JS_FILE_NAME,
        _constants.CHECKMARK_SVG_FILE_NAME
    ];
    return fileNames;
}
function getClientJSFileName() {
    var clientJSFileName = _constants.CLIENT_JS_FILE_NAME;
    return clientJSFileName;
}
function getSourceDirectoryPath() {
    var packagePath = getPackagePath(), sourceDirectoryPath = "".concat(packagePath, "/node_modules/highmark-client");
    return sourceDirectoryPath;
}
var _default = {
    getFileNames: getFileNames,
    getClientJSFileName: getClientJSFileName,
    getSourceDirectoryPath: getSourceDirectoryPath
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFja2FnZVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBnZXRQYWNrYWdlUGF0aCB9ID0gcGFja2FnZVV0aWxpdGllcztcblxuaW1wb3J0IHsgQ0xJRU5UX0pTX0ZJTEVfTkFNRSwgQ0hFQ0tNQVJLX1NWR19GSUxFX05BTUUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlTmFtZXMoKSB7XG4gIGNvbnN0IGZpbGVOYW1lcyA9IFtcbiAgICBDTElFTlRfSlNfRklMRV9OQU1FLFxuICAgIENIRUNLTUFSS19TVkdfRklMRV9OQU1FXG4gIF07XG5cbiAgcmV0dXJuIGZpbGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEpTRmlsZU5hbWUoKSB7XG4gIGNvbnN0IGNsaWVudEpTRmlsZU5hbWUgPSBDTElFTlRfSlNfRklMRV9OQU1FO1xuXG4gIHJldHVybiBjbGllbnRKU0ZpbGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U291cmNlRGlyZWN0b3J5UGF0aCgpIHtcbiAgY29uc3QgcGFja2FnZVBhdGggPSBnZXRQYWNrYWdlUGF0aCgpLFxuICAgICAgICBzb3VyY2VEaXJlY3RvcnlQYXRoID0gYCR7cGFja2FnZVBhdGh9L25vZGVfbW9kdWxlcy9oaWdobWFyay1jbGllbnRgO1xuXG4gIHJldHVybiBzb3VyY2VEaXJlY3RvcnlQYXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEZpbGVOYW1lcyxcbiAgZ2V0Q2xpZW50SlNGaWxlTmFtZSxcbiAgZ2V0U291cmNlRGlyZWN0b3J5UGF0aFxufTtcbiJdLCJuYW1lcyI6WyJnZXRDbGllbnRKU0ZpbGVOYW1lIiwiZ2V0RmlsZU5hbWVzIiwiZ2V0U291cmNlRGlyZWN0b3J5UGF0aCIsImdldFBhY2thZ2VQYXRoIiwicGFja2FnZVV0aWxpdGllcyIsImZpbGVOYW1lcyIsIkNMSUVOVF9KU19GSUxFX05BTUUiLCJDSEVDS01BUktfU1ZHX0ZJTEVfTkFNRSIsImNsaWVudEpTRmlsZU5hbWUiLCJwYWNrYWdlUGF0aCIsInNvdXJjZURpcmVjdG9yeVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQThCQTtlQUFBOztRQWJnQkE7ZUFBQUE7O1FBVEFDO2VBQUFBOztRQWVBQztlQUFBQTs7O3lCQXJCaUI7eUJBSTRCO0FBRjdELElBQU0sQUFBRUMsaUJBQW1CQywyQkFBZ0IsQ0FBbkNEO0FBSUQsU0FBU0Y7SUFDZCxJQUFNSSxZQUFZO1FBQ2hCQyw4QkFBbUI7UUFDbkJDLGtDQUF1QjtLQUN4QjtJQUVELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTTDtJQUNkLElBQU1RLG1CQUFtQkYsOEJBQW1CO0lBRTVDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTTjtJQUNkLElBQU1PLGNBQWNOLGtCQUNkTyxzQkFBc0IsQUFBQyxHQUFjLE9BQVpELGFBQVk7SUFFM0MsT0FBT0M7QUFDVDtJQUVBLFdBQWU7SUFDYlQsY0FBQUE7SUFDQUQscUJBQUFBO0lBQ0FFLHdCQUFBQTtBQUNGIn0=