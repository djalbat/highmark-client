"use strict";

import { packageUtilities } from "necessary";

const { getPackagePath } = packageUtilities;

import { CLIENT_FILE_NAME, CLIENT_CSS_SELECTORS_STRING } from "../constants";

export function getClientFileName() {
  return CLIENT_FILE_NAME;
}

export function getSourceDirectoryPath() {
  const packagePath = getPackagePath(),
        sourceDirectoryPath = `${packagePath}/node_modules/highmark-client`;

  return sourceDirectoryPath;
}

export function getClientCSSSelectorsString() {
  return CLIENT_CSS_SELECTORS_STRING;
}

export default {
  getClientFileName,
  getSourceDirectoryPath,
  getClientCSSSelectorsString
};
