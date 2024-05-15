"use strict";

const { copyFiles } = require("./bin/index"), ///
      { fileSystemUtilities } = require("necessary");

const { readFile } = fileSystemUtilities;

const markdownHTML = readFile("./markdown.html"),
      markdownStylesCSS = readFile("./markdownStyles.css"),
      targetDirectoryPath = ".",
      includeFonts = true;

copyFiles(markdownHTML, markdownStylesCSS, targetDirectoryPath, includeFonts);
