"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { instructionsFontSize, instructionsFontFamily, instructionsParagraphMargin } from "../../styles";

class InstructionsParagraph extends Element {
  static tagName = "p";

  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsParagraph)`
  
  margin: ${instructionsParagraphMargin};
  font-size: ${instructionsFontSize};
  font-family: ${instructionsFontFamily};
  
`;
