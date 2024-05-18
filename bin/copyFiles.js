"use strict";

const copyHTML = require("./copyHTML");

const { copyFile } = require("./utilities/file"),
      { CLIENT_JS_FILE_NAME, CHECKMARK_SVG_FILE_NAME } = require("./constants");

function copyFiles(markdownHTML, markdownStylesCSS, targetDirectoryPath) {
  let fileName;

  fileName = CLIENT_JS_FILE_NAME;

  copyFile(targetDirectoryPath, fileName);

  fileName = CHECKMARK_SVG_FILE_NAME;

  copyFile(targetDirectoryPath, fileName);

  const noClient = false;

  copyHTML(markdownHTML, markdownStylesCSS, targetDirectoryPath, noClient)
}

module.exports = copyFiles;
