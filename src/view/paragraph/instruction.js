"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { instructionParagraphMarginTop, instructionParagraphMarginBottom } from "../../styles";

class InstructionParagraph extends Element {
  static tagName = "p";

  static defaultProperties = {
    className: "instruction"
  };
}

export default withStyle(InstructionParagraph)`
  
  font-size: 1em;
  margin-top: ${instructionParagraphMarginTop};
  font-family: inherit;
  margin-bottom: ${instructionParagraphMarginBottom};
    
`;
