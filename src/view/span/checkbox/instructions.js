"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { instructionsFontSize, instructionsFontFamily } from "../../../styles";

class InstructionsCheckboxSpan extends Element {
  childElements() {
    return "Hide these instructions in future";
  }

  static tagName = "span";

  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsCheckboxSpan)`

  font-size: ${instructionsFontSize};
  font-family: ${instructionsFontFamily};
  
`;
