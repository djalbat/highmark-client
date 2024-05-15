"use strict";

const { pathUtilities, packageUtilities, fileSystemUtilities } = require("necessary");

const { getPackagePath } = packageUtilities,
      { concatenatePaths } = pathUtilities,
      { copyFile: copyFileAsync, writeFile: writeFileAsync } = fileSystemUtilities;

function copyFile(targetDirectoryPath, fileName) {
  const packagePath = getPackagePath(),
        sourceDirectoryPath = `${packagePath}/node_modules/highmark-client`,
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
