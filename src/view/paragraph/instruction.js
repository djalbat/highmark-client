"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { instructionParagraphPadding } from "../../styles";

class InstructionParagraph extends Element {
  static tagName = "p";

  static defaultProperties = {
    className: "instruction"
  };
}

export default withStyle(InstructionParagraph)`
  
  padding: ${instructionParagraphPadding};
  font-size: inherit;
  font-family: inherit;
    
`;
