"use strict";

const { copyFiles } = require("./bin/index"), ///
      { fileSystemUtilities } = require("necessary");

const { readFile } = fileSystemUtilities;

const markdownHTML = readFile("./example/markdown.html"),
      markdownStylesCSS = readFile("./example/markdownStyles.css"),
      targetDirectoryPath = ".";

copyFiles(markdownHTML, markdownStylesCSS, targetDirectoryPath);
