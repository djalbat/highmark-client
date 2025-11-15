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
function getSourceDirectoryPath() {
    var packagePath = getPackagePath(), sourceDirectoryPath = "".concat(packagePath, "/node_modules/highmark-client");
    return sourceDirectoryPath;
}
var _default = {
    getFileNames: getFileNames,
    getSourceDirectoryPath: getSourceDirectoryPath
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFja2FnZVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBnZXRQYWNrYWdlUGF0aCB9ID0gcGFja2FnZVV0aWxpdGllcztcblxuaW1wb3J0IHsgQ0xJRU5UX0pTX0ZJTEVfTkFNRSwgQ0hFQ0tNQVJLX1NWR19GSUxFX05BTUUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlTmFtZXMoKSB7XG4gIGNvbnN0IGZpbGVOYW1lcyA9IFtcbiAgICBDTElFTlRfSlNfRklMRV9OQU1FLFxuICAgIENIRUNLTUFSS19TVkdfRklMRV9OQU1FXG4gIF07XG5cbiAgcmV0dXJuIGZpbGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZURpcmVjdG9yeVBhdGgoKSB7XG4gIGNvbnN0IHBhY2thZ2VQYXRoID0gZ2V0UGFja2FnZVBhdGgoKSxcbiAgICAgICAgc291cmNlRGlyZWN0b3J5UGF0aCA9IGAke3BhY2thZ2VQYXRofS9ub2RlX21vZHVsZXMvaGlnaG1hcmstY2xpZW50YDtcblxuICByZXR1cm4gc291cmNlRGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRGaWxlTmFtZXMsXG4gIGdldFNvdXJjZURpcmVjdG9yeVBhdGhcbn07XG4iXSwibmFtZXMiOlsiZ2V0RmlsZU5hbWVzIiwiZ2V0U291cmNlRGlyZWN0b3J5UGF0aCIsImdldFBhY2thZ2VQYXRoIiwicGFja2FnZVV0aWxpdGllcyIsImZpbGVOYW1lcyIsIkNMSUVOVF9KU19GSUxFX05BTUUiLCJDSEVDS01BUktfU1ZHX0ZJTEVfTkFNRSIsInBhY2thZ2VQYXRoIiwic291cmNlRGlyZWN0b3J5UGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBd0JBO2VBQUE7O1FBaEJnQkE7ZUFBQUE7O1FBU0FDO2VBQUFBOzs7eUJBZmlCO3lCQUk0QjtBQUY3RCxJQUFNLEFBQUVDLGlCQUFtQkMsMkJBQWdCLENBQW5DRDtBQUlELFNBQVNGO0lBQ2QsSUFBTUksWUFBWTtRQUNoQkMsOEJBQW1CO1FBQ25CQyxrQ0FBdUI7S0FDeEI7SUFFRCxPQUFPRjtBQUNUO0FBRU8sU0FBU0g7SUFDZCxJQUFNTSxjQUFjTCxrQkFDZE0sc0JBQXNCLEFBQUMsR0FBYyxPQUFaRCxhQUFZO0lBRTNDLE9BQU9DO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JSLGNBQUFBO0lBQ0FDLHdCQUFBQTtBQUNGIn0=