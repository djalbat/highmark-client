"use strict";

import withStyle from "easy-with-style";  ///

import Checkbox from "../checkbox";

import { instructionsCheckboxPortraitSize,
         instructionsCheckboxLandscapeSize,
         instructionsCheckboxPortraitBorderWidth,
         instructionsCheckboxLandscapeBorderWidth,
         instructionsCheckboxPortraitBorderRadius,
         instructionsCheckboxLandscapeBorderRadius } from "../../styles";

class InstructionsCheckbox extends Checkbox {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsCheckbox)`

  filter: invert(1);

  width: ${instructionsCheckboxPortraitSize}; 
  height: ${instructionsCheckboxPortraitSize};
  
  ::before {
    border-width: ${instructionsCheckboxPortraitBorderWidth};
    border-radius: ${instructionsCheckboxPortraitBorderRadius};
  }
  
  @media (orientation: landscape) {

    width: ${instructionsCheckboxLandscapeSize}; 
    height: ${instructionsCheckboxLandscapeSize};
    
    ::before {
      border-width: ${instructionsCheckboxLandscapeBorderWidth};
      border-radius: ${instructionsCheckboxLandscapeBorderRadius};
    }
    
  }

`;
