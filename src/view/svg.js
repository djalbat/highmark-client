"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { svgFill } from "../styles";

class FontSizeSVG extends Element {
  static tagName = "svg";
}

export default withStyle(FontSizeSVG)`

  fill: ${svgFill};
  stroke: none;
  display: block;
  pointer-events: none;
  
`;
