"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { instructionsDivWidth } from "../../styles";

class InstructionsDiv extends Element {
  static tagName =  "div";

  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsDiv)`
  
  width: ${instructionsDivWidth};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

`;
