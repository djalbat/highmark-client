"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { backButtonColour, backButtonPadding } from "../../styles";

class BackButton extends Button {
  childElements() {
    return "← back"
  }

  static defaultProperties = {
    className: "back"
  };
}

export default withStyle(BackButton)`

  color: ${backButtonColour};
  cursor: pointer;
  padding: ${backButtonPadding};
  font-size: inherit;
  align-self: flex-end;
  background: transparent;
  font-family: inherit;

  :hover {
    filter: grayscale(50%);
  }
  
`;
