"use strict";

import withStyle from "easy-with-style";  ///

import Checkbox from "../checkbox";

class InstructionsCheckbox extends Checkbox {
  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsCheckbox)`

  filter: invert(1);

`;
