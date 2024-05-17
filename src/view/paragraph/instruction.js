"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { desktop } from "../../breakpoints";
import { instructionsFontFamily, instructionParagraphPadding, instructionsMobileFontSize, instructionsDesktopFontSize } from "../../styles";

class InstructionParagraph extends Element {
  static tagName = "p";

  static defaultProperties = {
    className: "instruction"
  };
}

export default withStyle(InstructionParagraph)`
  
  padding: ${instructionParagraphPadding};
  font-family: ${instructionsFontFamily};
  
  font-size: ${instructionsMobileFontSize};
  
  @media (min-width: ${desktop}) {

    font-size: ${instructionsDesktopFontSize};
    
  }
  
`;
