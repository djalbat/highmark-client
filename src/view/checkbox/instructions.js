"use strict";

import withStyle from "easy-with-style";  ///

import Checkbox from "../checkbox";

import { instructionsCheckboxSize } from "../../styles";

class InstructionsCheckbox extends Checkbox {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsCheckbox)`

  width: ${instructionsCheckboxSize}; 
  height: ${instructionsCheckboxSize}; 
  filter: invert(1);

`;
