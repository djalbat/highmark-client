"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { instructionsCheckboxSpanFontSize } from "../../../styles";

class InstructionsCheckboxSpan extends Element {
  childElements() {
    return "Hide in future";
  }

  static tagName = "span";

  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsCheckboxSpan)`

  font-size: ${instructionsCheckboxSpanFontSize};
  
`;
