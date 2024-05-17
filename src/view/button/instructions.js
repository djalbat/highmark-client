"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { desktop } from "../../breakpoints";
import { instructionsFontFamily, instructionsButtonColour, instructionsButtonPadding, instructionsMobileFontSize, instructionsDesktopFontSize } from "../../styles";

class InstructionsButton extends Button {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsButton)`

  color: ${instructionsButtonColour};
  padding: ${instructionsButtonPadding};
  display: flex;
  font-family: ${instructionsFontFamily};
  font-weight: bold;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
  :hover {
    filter: grayscale(50%);
  }

  font-size: ${instructionsMobileFontSize};
  
  @media (min-width: ${desktop}) {

    font-size: ${instructionsDesktopFontSize};
    
  }

`;
