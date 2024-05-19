"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { FLEX } from "../../constants";
import { backButtonColour, backButtonPadding, backButtonFontSize } from "../../styles";

class BackButton extends Button {
  show() {
    const display = FLEX;

    this.display(display);
  }

  childElements() {
    return "← back"
  }

  parentContext() {
    const showBackButton = this.show.bind(this),  ///
          hideBackButton = this.hide.bind(this);  ///

    return ({
      showBackButton,
      hideBackButton
    });
  }

  static defaultProperties = {
    className: "back"
  };
}

export default withStyle(BackButton)`

  color: ${backButtonColour};
  width: fit-content;
  cursor: pointer;
  padding: ${backButtonPadding};
  font-size: ${backButtonFontSize};
  grid-area: back-button;
  background: transparent;
  justify-self: end;

  :hover {
    filter: grayscale(50%);
  }
    
`;
