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
var _default = {
    getClientFileName: getClientFileName,
    getSourceDirectoryPath: getSourceDirectoryPath
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFja2FnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcGFja2FnZVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuY29uc3QgeyBnZXRQYWNrYWdlUGF0aCB9ID0gcGFja2FnZVV0aWxpdGllcztcblxuaW1wb3J0IHsgQ0xJRU5UX0ZJTEVfTkFNRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEZpbGVOYW1lKCkge1xuICByZXR1cm4gQ0xJRU5UX0ZJTEVfTkFNRTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvdXJjZURpcmVjdG9yeVBhdGgoKSB7XG4gIGNvbnN0IHBhY2thZ2VQYXRoID0gZ2V0UGFja2FnZVBhdGgoKSxcbiAgICAgICAgc291cmNlRGlyZWN0b3J5UGF0aCA9IGAke3BhY2thZ2VQYXRofS9ub2RlX21vZHVsZXMvaGlnaG1hcmstY2xpZW50YDtcblxuICByZXR1cm4gc291cmNlRGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRDbGllbnRGaWxlTmFtZSxcbiAgZ2V0U291cmNlRGlyZWN0b3J5UGF0aFxufTtcbiJdLCJuYW1lcyI6WyJnZXRDbGllbnRGaWxlTmFtZSIsImdldFNvdXJjZURpcmVjdG9yeVBhdGgiLCJnZXRQYWNrYWdlUGF0aCIsInBhY2thZ2VVdGlsaXRpZXMiLCJDTElFTlRfRklMRV9OQU1FIiwicGFja2FnZVBhdGgiLCJzb3VyY2VEaXJlY3RvcnlQYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFtQkE7ZUFBQTs7UUFYZ0JBO2VBQUFBOztRQUlBQztlQUFBQTs7O3lCQVZpQjt5QkFJQTtBQUZqQyxJQUFNLEFBQUVDLGlCQUFtQkMsMkJBQWdCLENBQW5DRDtBQUlELFNBQVNGO0lBQ2QsT0FBT0ksMkJBQWdCO0FBQ3pCO0FBRU8sU0FBU0g7SUFDZCxJQUFNSSxjQUFjSCxrQkFDZEksc0JBQXNCLEFBQUMsR0FBYyxPQUFaRCxhQUFZO0lBRTNDLE9BQU9DO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JOLG1CQUFBQTtJQUNBQyx3QkFBQUE7QUFDRiJ9