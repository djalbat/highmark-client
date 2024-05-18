"use strict";

const createIndexHTML = require("./createIndexHTML");

const { writeFile } = require("./utilities/file"),
      { INDEX_HTML_FILE_NAME } = require("./constants");

function copyHTML(markdownHTML, markdownStylesCSS, noClient, targetDirectoryPath) {
  const indexHTML = createIndexHTML(markdownHTML, markdownStylesCSS, noClient),
        fileName = INDEX_HTML_FILE_NAME, ///
        content = indexHTML;  ///

  writeFile(targetDirectoryPath, fileName, content);
}

module.exports = copyHTML;
