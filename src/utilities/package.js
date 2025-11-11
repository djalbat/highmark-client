"use strict";

import { pathUtilities, packageUtilities } from "necessary";

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities;

import { CLIENT_JS_FILE_NAME, CHECKMARK_SVG_FILE_NAME } from "../constants";

export function getClientJSFilePath() {
  const fileName = CLIENT_JS_FILE_NAME,
        filePath = getFilePath(fileName),
        clientJSFilePath = filePath;  ///

  return clientJSFilePath;
}

export function getCheckmarkSVGFilepath() {
  const fileName = CHECKMARK_SVG_FILE_NAME,
        filePath = getFilePath(fileName),
        checkmarkSVTFilePath = filePath;  ///

  return checkmarkSVTFilePath;
}

export default {
  getClientJSFilePath,
  getCheckmarkSVGFilepath
};

function getFilePath(fileName) {
  const sourceDirectoryPath = getSourceDirectoryPath(),
        filePath = concatenatePaths(sourceDirectoryPath, fileName);

  return filePath;
}

function getSourceDirectoryPath() {
  const packagePath = getPackagePath(),
        sourceDirectoryPath = `${packagePath}/node_modules/highmark-client`;

  return sourceDirectoryPath;
}

