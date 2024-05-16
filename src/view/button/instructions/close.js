"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";
import { instructionsCloseButtonTop, instructionsCloseButtonRight, instructionsCloseButtonColour, instructionsCloseButtonFontSize } from "../../../styles";

class InstructionsCloseButton extends Button {
  childElements() {
    return "╳";
  }

  static defaultProperties = {
    className: "instructions-close"
  };
}

export default withStyle(InstructionsCloseButton)`

  top: ${instructionsCloseButtonTop};
  right: ${instructionsCloseButtonRight};
  color: ${instructionsCloseButtonColour};
  cursor: pointer;
  padding: 0;
  position: absolute;
  font-size: ${instructionsCloseButtonFontSize};
  background: transparent;

`;
