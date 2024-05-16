"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { instructionsButtonColour, instructionsButtonPadding, instructionsButtonFontSize } from "../../styles";

class InstructionsButton extends Button {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsButton)`

  color: ${instructionsButtonColour};
  padding: ${instructionsButtonPadding};
  font-size: ${instructionsButtonFontSize};
  font-weight: bold;
  
  :hover {
    filter: grayscale(90%);
  }

`;
