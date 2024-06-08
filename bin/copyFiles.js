"use strict";

const { copyFile } = require("./utilities/file"),
      { CLIENT_JS_FILE_NAME, CHECKMARK_SVG_FILE_NAME } = require("./constants");

function copyFiles(targetDirectoryPath) {
  let fileName;

  fileName = CLIENT_JS_FILE_NAME;

  copyFile(targetDirectoryPath, fileName);

  fileName = CHECKMARK_SVG_FILE_NAME;

  copyFile(targetDirectoryPath, fileName);
}

module.exports = copyFiles;
