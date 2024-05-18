"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { instructionsButtonColour, instructionsButtonPadding } from "../../styles";

class InstructionsButton extends Button {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsButton)`

  color: ${instructionsButtonColour};
  padding: ${instructionsButtonPadding};
  display: flex;
  font-size: inherit;
  font-family: inherit;
  font-weight: bold;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
  :hover {
    filter: grayscale(50%);
  }

`;
