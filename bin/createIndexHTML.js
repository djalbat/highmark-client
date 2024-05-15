"use strict";

const { liveReloadSnippet } = require("lively-cli"),
      { computerModernStyle: computerModernStyleCSS } = require("highmark-fonts"),
      { pathUtilities, packageUtilities, templateUtilities, fileSystemUtilities } = require("necessary");

const { LOADING_CSS_FILE_PATH, CLIENT_TEMPLATE_FILE_PATH, LOADING_TEMPLATE_FILE_PATH, INDEX_TEMPLATE_FILE_PATH } = require("./constants");

const { readFile } = fileSystemUtilities,
      { parseFile } = templateUtilities,
      { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function createIndexHTML(markdownHTML, markdownStylesCSS) {
  const packagePath = getPackagePath(),
        clientHTML = createClientHTML(packagePath),
        loadingCSS = createLoadingCSS(packagePath),
        loadingHTML = createLoadingHTML(packagePath),
        indexTemplateFilePath = concatenatePaths(packagePath, INDEX_TEMPLATE_FILE_PATH),
        args = {
          clientHTML,
          loadingCSS,
          loadingHTML,
          markdownHTML,
          markdownStylesCSS,
          computerModernStyleCSS
        },
        indexHTML = parseFile(indexTemplateFilePath, args);

  return indexHTML;
}

module.exports = createIndexHTML;

function createClientHTML(packagePath) {
  const templateFilePath = concatenatePaths(packagePath, CLIENT_TEMPLATE_FILE_PATH),
        args = {
          liveReloadSnippet
        },
        content = parseFile(templateFilePath, args),
        clientHTML = content; ///

  return clientHTML;
}

function createLoadingCSS(packagePath) {
  const filePath = concatenatePaths(packagePath, LOADING_CSS_FILE_PATH),
        content = readFile(filePath),
        loadingCSS = content; ///

  return loadingCSS;
}

function createLoadingHTML(packagePath) {
  const templateFilePath = concatenatePaths(packagePath, LOADING_TEMPLATE_FILE_PATH),
        args = {},
        content = parseFile(templateFilePath, args),
        loadingHTML = content; ///

  return loadingHTML;
}
