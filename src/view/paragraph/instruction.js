"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { instructionsFontSize, instructionsFontFamily, instructionParagraphMargin } from "../../styles";

class InstructionParagraph extends Element {
  static tagName = "p";

  static defaultProperties = {
    className: "instruction"
  };
}

export default withStyle(InstructionParagraph)`
  
  margin: ${instructionParagraphMargin};
  font-size: ${instructionsFontSize};
  font-family: ${instructionsFontFamily};
  
`;
