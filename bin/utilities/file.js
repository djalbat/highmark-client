"use strict";

const { pathUtilities, fileSystemUtilities } = require("necessary");

const { getSourceDirectoryPath } = require("../utilities/directory");

const { concatenatePaths } = pathUtilities,
      { copyFile: copyFileAsync, writeFile: writeFileAsync } = fileSystemUtilities;

function copyFile(targetDirectoryPath, fileName) {
  const sourceDirectoryPath = getSourceDirectoryPath(),
        targetPath = concatenatePaths(targetDirectoryPath, fileName),
        sourcePath = concatenatePaths(sourceDirectoryPath, fileName);

  copyFileAsync(sourcePath, targetPath);
}

function writeFile(targetDirectoryPath, fileName, content) {
  const filePath = concatenatePaths(targetDirectoryPath, fileName);

  writeFileAsync(filePath, content);
}

module.exports = {
  copyFile,
  writeFile
};
