"use strict";

const createIndexHTML = require("./createIndexHTML");

function createHTML(markdownHTML, markdownStylesCSS, client) {
  const indexHTML = createIndexHTML(markdownHTML, markdownStylesCSS, client),
        html = indexHTML; ///

  return html;
}

module.exports = createHTML;
