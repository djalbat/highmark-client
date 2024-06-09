"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { closeButtonColour, closeButtonFontSize } from "../../styles";

class CloseButton extends Button {
  childElements() {
    return "╳";
  }

  static defaultProperties = {
    className: "close"
  };
}

export default withStyle(CloseButton)`

  width: fit-content;
  color: ${closeButtonColour};
  cursor: pointer;
  padding: 0;
  font-size: ${closeButtonFontSize};
  background: transparent;

`;
