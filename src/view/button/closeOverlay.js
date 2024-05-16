"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";
import { closeOverlayButtonTop, closeOverlayButtonRight, closeOverlayButtonColour, closeOverlayButtonFontSize } from "../../styles";

class CloseOverlayButton extends Button {
  childElements() {
    return "╳";
  }

  static defaultProperties = {
    className: "close-overlay"
  };
}

export default withStyle(CloseOverlayButton)`

  top: ${closeOverlayButtonTop};
  right: ${closeOverlayButtonRight};
  color: ${closeOverlayButtonColour};
  cursor: pointer;
  padding: 0;
  position: absolute;
  font-size: ${closeOverlayButtonFontSize};
  background: transparent;

`;
