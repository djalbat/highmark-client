"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { svgFill } from "../styles";

class SVG extends Element {
  static tagName = "svg";
}

export default withStyle(SVG)`

  fill: ${svgFill};
  stroke: none;
  display: block;
  pointer-events: none;
  
`;
