"use strict";

const { fontUtilities, clientUtilities } = require("./bin/index"), ///
      { templateUtilities, fileSystemUtilities } = require("necessary"),
      { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts");

const { copyFonts } = fontUtilities,
      { parseFile } = templateUtilities,
      { readFile, writeFile } = fileSystemUtilities,
      { getClientHTML, getLoadingCSS, getLoadingHTML, getTemplateFilePath } = clientUtilities;

const markdownHTML = readFile("./markdown.html"),
      markdownStylesCSS = readFile("./markdownStyles.css");

const clientHTML = getClientHTML(),
      loadingCSS = getLoadingCSS(),
      loadingHTML = getLoadingHTML(),
      templateFilePath = getTemplateFilePath(),
      args = {
        clientHTML,
        loadingCSS,
        loadingHTML,
        markdownHTML,
        markdownStylesCSS,
        computerModernStyleCSS
      },
      content = parseFile(templateFilePath, args);

writeFile("./index.html", content);

copyFonts("./font");
