"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { instructionParagraphMargin, instructionParagraphFontSize } from "../../styles";

class InstructionParagraph extends Element {
  static tagName = "p";

  static defaultProperties = {
    className: "instruction"
  };
}

export default withStyle(InstructionParagraph)`
  
  margin: ${instructionParagraphMargin} 0;
  font-size: ${instructionParagraphFontSize} 0;

`;
