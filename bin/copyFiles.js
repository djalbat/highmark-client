"use strict";

const createIndexHTML = require("./createIndexHTML");

const { copyFile, writeFile } = require("./utilities/file"),
      { CLIENT_JS_FILE_NAME, INDEX_HTML_FILE_NAME, CHECKMARK_SVG_FILE_NAME } = require("./constants");

function copyFiles(markdownHTML, markdownStylesCSS, targetDirectoryPath) {
  let fileName;

  fileName = CLIENT_JS_FILE_NAME;

  copyFile(targetDirectoryPath, fileName);

  fileName = CHECKMARK_SVG_FILE_NAME;

  copyFile(targetDirectoryPath, fileName);

  const indexHTML = createIndexHTML(markdownHTML, markdownStylesCSS),
        content = indexHTML;  ///

  fileName = INDEX_HTML_FILE_NAME;

  writeFile(targetDirectoryPath, fileName, content);
}

module.exports = copyFiles;
