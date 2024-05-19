"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

class InstructionsCheckboxSpan extends Element {
  childElements() {
    return "Hide these instructions";
  }

  static tagName = "span";

  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsCheckboxSpan)`

  font-size: 1em;
  font-family: inherit;
  
`;
