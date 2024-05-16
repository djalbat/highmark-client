"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";
import { hideOverlayButtonTop, hideOverlayButtonRight, hideOverlayButtonColour, hideOverlayButtonFontSize, hideOverlayButtonFontFamily } from "../../styles";

class HideOverlayButton extends Button {
  childElements() {
    return "╳";
  }

  static defaultProperties = {
    className: "hide-overlay"
  };
}

export default withStyle(HideOverlayButton)`

  top: ${hideOverlayButtonTop};
  right: ${hideOverlayButtonRight};
  color: ${hideOverlayButtonColour};
  cursor: pointer;
  padding: 0;
  position: absolute;
  font-size: ${hideOverlayButtonFontSize};
  background: transparent;
  font-family: ${hideOverlayButtonFontFamily};

`;
