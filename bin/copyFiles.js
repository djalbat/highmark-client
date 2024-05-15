"use strict";

const { pathUtilities } = require("necessary");

const copyFonts = require("./copyFonts"),
      createIndexHTML = require("./createIndexHTML");

const { copyFile, writeFile } = require("./utilities/file"),
      { INDEX_FILE_NAME, FONT_DIRECTORY_NAME, CLIENT_JS_FILE_NAME, CHECKMARK_SVG_FILE_NAME } = require("./constants");

const { concatenatePaths } = pathUtilities;

function copyFiles(markdownHTML, markdownStylesCSS, targetDirectoryPath, includeFonts = false) {
  let fileName;

  fileName = CLIENT_JS_FILE_NAME;

  copyFile(targetDirectoryPath, fileName);

  fileName = CHECKMARK_SVG_FILE_NAME;

  copyFile(targetDirectoryPath, fileName);

  const indexHTML = createIndexHTML(markdownHTML, markdownStylesCSS),
        content = indexHTML;  ///

  fileName = INDEX_FILE_NAME;

  writeFile(targetDirectoryPath, fileName, content);

  if (includeFonts) {
    const fontDirectoryPath = concatenatePaths(targetDirectoryPath, FONT_DIRECTORY_NAME);

    copyFonts(fontDirectoryPath);
  }
}

module.exports = copyFiles;
