"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { desktop } from "../../breakpoints";
import { backButtonColour, instructionsFontFamily, instructionsMobileFontSize, instructionsDesktopFontSize } from "../../styles";

class BackButton extends Button {
  childElements() {
    return "...back"
  }

  static defaultProperties = {
    className: "back"
  };
}

export default withStyle(BackButton)`

  color: ${backButtonColour};
  float: right;
  background: transparent;
  font-family: ${instructionsFontFamily};
  
  font-size: ${instructionsMobileFontSize};
  
  @media (min-width: ${desktop}) {

    font-size: ${instructionsDesktopFontSize};
    
  }

  :hover {
    filter: grayscale(50%);
  }
  
`;
