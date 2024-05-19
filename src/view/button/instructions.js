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

  width: fit-content;
  color: ${instructionsButtonColour};
  display: flex;
  padding: ${instructionsButtonPadding};
  font-size: 1em;
  font-family: inherit;
  font-weight: bold;
  align-items: center;
  justify-self: center;
  flex-direction: row;
  justify-content: center;
  
  :hover {
    filter: grayscale(50%);
  }

`;
