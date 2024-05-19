"use strict";

import { Element } from "easy";

export default class InstructionsCheckboxSpan extends Element {
  childElements() {
    return "Hide in future";
  }

  static tagName = "span";

  static defaultProperties = {
    className: "instructions"
  };
}
