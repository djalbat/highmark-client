"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { desktop } from "../../../breakpoints";
import { instructionsFontFamily, instructionsMobileFontSize, instructionsDesktopFontSize } from "../../../styles";

class InstructionsCheckboxSpan extends Element {
  childElements() {
    return "Hide in future";
  }

  static tagName = "span";

  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsCheckboxSpan)`

  font-family: ${instructionsFontFamily};
  
  font-size: ${instructionsMobileFontSize};
  
  @media (min-width: ${desktop}) {

    font-size: ${instructionsDesktopFontSize};
    
  }
  
`;
