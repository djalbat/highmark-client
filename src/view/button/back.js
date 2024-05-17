"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { backButtonColour, instructionsFontSize, instructionsFontFamily } from "../../styles";

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
  font-size: ${instructionsFontSize};
  background: transparent;
  font-family: ${instructionsFontFamily};
  
  :hover {
    filter: grayscale(50%);
  }
  
`;
