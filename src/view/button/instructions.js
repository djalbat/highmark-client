"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { instructionsButtonColour, instructionsButtonPortraitPadding, instructionsButtonLandscapePadding } from "../../styles";

class InstructionsButton extends Button {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsButton)`

  width: fit-content;
  color: ${instructionsButtonColour};
  display: flex;
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

  padding: ${instructionsButtonPortraitPadding};
  
  @media (orientation: landscape) {

    padding: ${instructionsButtonLandscapePadding};
    
  }

`;
