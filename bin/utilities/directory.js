"use strict";

const { packageUtilities } = require("necessary");

const { getPackagePath } = packageUtilities;

function getSourceDirectoryPath() {
  const packagePath = getPackagePath(),
        sourceDirectoryPath = `${packagePath}/node_modules/highmark-client`;

  return sourceDirectoryPath;
}

module.exports = {
  getSourceDirectoryPath
};
