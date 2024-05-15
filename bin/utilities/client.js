"use strict";

const { liveReloadSnippet } = require("lively-cli"),
      { pathUtilities, packageUtilities, templateUtilities, fileSystemUtilities } = require("necessary");

const { LOADING_CSS_FILE_PATH, CLIENT_TEMPLATE_FILE_PATH, LOADING_TEMPLATE_FILE_PATH, DEFAULT_TEMPLATE_FILE_PATH } = require("../constants");

const { readFile } = fileSystemUtilities,
      { parseFile } = templateUtilities,
      { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

function getClientHTML() {
  const packagePath = getPackagePath(),
        templateFilePath = concatenatePaths(packagePath, CLIENT_TEMPLATE_FILE_PATH),
        args = {
          liveReloadSnippet
        },
        content = parseFile(templateFilePath, args),
        clientHTML = content; ///

  return clientHTML;
}

function getLoadingCSS() {
  const packagePath = getPackagePath(),
        filePath = concatenatePaths(packagePath, LOADING_CSS_FILE_PATH),
        content = readFile(filePath),
        loadingCSS = content; ///

  return loadingCSS;
}

function getLoadingHTML() {
  const packagePath = getPackagePath(),
        templateFilePath = concatenatePaths(packagePath, LOADING_TEMPLATE_FILE_PATH),
        args = {},
        content = parseFile(templateFilePath, args),
        loadingHTML = content; ///

  return loadingHTML;
}

function getTemplateFilePath() {
  const packagePath = getPackagePath(),
        defaultTemplateFilePath = concatenatePaths(packagePath, DEFAULT_TEMPLATE_FILE_PATH),
        templateFilePath = defaultTemplateFilePath; ///

  return templateFilePath;
}

module.exports = {
  getClientHTML,
  getLoadingCSS,
  getLoadingHTML,
  getTemplateFilePath
};
