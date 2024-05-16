"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import InstructionsCheckbox from "../../checkbox/instructions";
import InstructionsCheckboxSpan from "../../span/checkbox/instructions";

import { instructionsCheckboxDivGap, instructionsCheckboxDivMarginTop, instructionsCheckboxDivPaddingRight } from "../../../styles";

class InstructionsCheckboxDiv extends Element {
  childElements() {
    return ([

      <InstructionsCheckbox/>,
      <InstructionsCheckboxSpan/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "instructions-checkbox"
  };
}

export default withStyle(InstructionsCheckboxDiv)`

  gap: ${instructionsCheckboxDivGap};
  display: flex;
  margin-top: ${instructionsCheckboxDivMarginTop};
  align-self: center;
  align-items: center;
  padding-right: ${instructionsCheckboxDivPaddingRight};
  flex-direction: row;
  justify-content: flex-start;
  
`;
