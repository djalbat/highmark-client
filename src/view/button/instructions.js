"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { instructionsFontFamily, instructionsButtonWidth, instructionsButtonHeight, instructionsButtonColour, instructionsButtonFontSize } from "../../styles";

class InstructionsButton extends Button {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsButton)`

  color: ${instructionsButtonColour};
  width: ${instructionsButtonWidth};
  height: ${instructionsButtonHeight};
  display: flex;
  font-size: ${instructionsButtonFontSize};
  font-family: ${instructionsFontFamily};
  font-weight: bold;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
  :hover {
    filter: grayscale(90%);
  }

`;
