"use strict";

const { getFontDirectoryPath } = require("highmark-fonts"),
      { pathUtilities, fileSystemUtilities } = require("necessary");

const { concatenatePaths, bottommostNameFromPath } = pathUtilities,
      { isEntryFile,
        copyFile: copyFileAsync,
        readDirectory: readDirectoryAsync,
        createDirectory: createDirectoryAsync } = fileSystemUtilities;

function copyFonts(fontDirectoryPath) {
  createDirectoryAsync(fontDirectoryPath);

  const targetDirectoryPath = fontDirectoryPath;  ///

  fontDirectoryPath = getFontDirectoryPath(); ///

  const recursive = false;

  readDirectory(fontDirectoryPath, (filePath) => {
    const fileName = fileNameFromFilePath(filePath),
          sourceFilePath = filePath,  ///
          targetFilePath = concatenatePaths(targetDirectoryPath, fileName); ///

    copyFileAsync(sourceFilePath, targetFilePath);
  }, recursive);
}

module.exports = copyFonts;

function readDirectory(directoryPath, callback, recursive = true) {
  const entryNames = readDirectoryAsync(directoryPath);

  entryNames.forEach((entryName) => {
    const entryNameHiddenName = isEntryNameHiddenName(entryName);

    if (!entryNameHiddenName) {
      const entryPath = concatenatePaths(directoryPath, entryName), ///
            entryFile = isEntryFile(entryPath);

      if (entryFile) {
        const filePath = entryPath; ///

        callback(filePath);
      } else {
        if (recursive) {
          const directoryPath = entryPath;  ///

          readDirectory(directoryPath, callback, recursive);
        }
      }
    }
  });
}

function fileNameFromFilePath(filePath) {
  const path = filePath,  ///
        bottommostName = bottommostNameFromPath(path),
        fileName = bottommostName;  ///

  return fileName;
}

function isEntryNameHiddenName(entryName) {
  const nameHiddenName = /^\..+/.test(entryName);

  return nameHiddenName;
}

