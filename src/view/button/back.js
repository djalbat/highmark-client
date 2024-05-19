"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { backButtonColour } from "../../styles";

class BackButton extends Button {
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
  grid-area: back-button;
  font-size: 1em;
  background: transparent;
  font-family: inherit;
  justify-self: end;

  :hover {
    filter: grayscale(50%);
  }
  
`;
