"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { desktop } from "../../breakpoints";
import { hideOverlayButtonTop, hideOverlayButtonRight, hideOverlayButtonColour, hideOverlayButtonFontFamily, hideOverlayButtonMobileFontSize, hideOverlayButtonDesktopFontSize } from "../../styles";

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
  background: transparent;
  font-family: ${hideOverlayButtonFontFamily};

  font-size: ${hideOverlayButtonMobileFontSize};
  
  @media (min-width: ${desktop}) {

    font-size: ${hideOverlayButtonDesktopFontSize};
    
  }

`;
