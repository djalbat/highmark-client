"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { checkboxSpanColour, checkboxSpanFontSize } from "../../styles";

class CheckboxSpan extends Element {
  static tagName = "span";

  static defaultProperties = {
    className: "checkbox"
  };
}

export default withStyle(CheckboxSpan)`

  color: ${checkboxSpanColour};
  font-size: ${checkboxSpanFontSize};
  white-space: pre;
  font-family: serif;
  
`;
