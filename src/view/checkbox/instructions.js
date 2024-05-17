"use strict";

import withStyle from "easy-with-style";  ///

import Checkbox from "../checkbox";

import { desktop } from "../../breakpoints";
import { instructionsCheckboxMobileSize, instructionsCheckboxDesktopSize } from "../../styles";

class InstructionsCheckbox extends Checkbox {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsCheckbox)`

  filter: invert(1);

  width: ${instructionsCheckboxMobileSize}; 
  height: ${instructionsCheckboxMobileSize};
  
  @media (min-width: ${desktop}) {

    width: ${instructionsCheckboxDesktopSize}; 
    height: ${instructionsCheckboxDesktopSize};
    
  }

`;
