"use strict";

const createIndexHTML = require("./createIndexHTML");

function createHTML(markdownHTML, markdownStylesCSS, noClient) {
  const indexHTML = createIndexHTML(markdownHTML, markdownStylesCSS, noClient),
        html = indexHTML; ///

  return html;
}

module.exports = createHTML;
