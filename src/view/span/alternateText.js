"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { alternateTextSpanColour, alternateTextSpanFontSize } from "../../styles";

class AlternateTextSpan extends Element {
  static tagName = "span";

  static defaultProperties = {
    className: "alternate-text"
  };
}

export default withStyle(AlternateTextSpan)`

  color: ${alternateTextSpanColour};
  font-size: ${alternateTextSpanFontSize};
  font-family: serif;
  
`;
