"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { instructionsFontSize, instructionsFontFamily } from "../../../styles";

class InstructionsCheckboxSpan extends Element {
  childElements() {
    return "Do not show these instructions again";
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
