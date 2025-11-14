"use strict";

import { packageUtilities } from "necessary";

const { getPackagePath } = packageUtilities;

import { CLIENT_JS_FILE_NAME, CHECKMARK_SVG_FILE_NAME } from "../constants";

export function getFileNames() {
  const fileNames = [
    CLIENT_JS_FILE_NAME,
    CHECKMARK_SVG_FILE_NAME
  ];

  return fileNames;
}

export function getClientJSFileName() {
  const clientJSFileName = CLIENT_JS_FILE_NAME;

  return clientJSFileName;
}

export function getSourceDirectoryPath() {
  const packagePath = getPackagePath(),
        sourceDirectoryPath = `${packagePath}/node_modules/highmark-client`;

  return sourceDirectoryPath;
}

export default {
  getFileNames,
  getClientJSFileName,
  getSourceDirectoryPath
};
