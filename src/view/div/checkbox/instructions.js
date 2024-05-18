"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import InstructionsCheckbox from "../../checkbox/instructions";
import InstructionsCheckboxSpan from "../../span/checkbox/instructions";

import { setOverlayHidden } from "../../../state";
import { instructionsCheckboxDivGap, instructionsCheckboxDivPadding } from "../../../styles";

class InstructionsCheckboxDiv extends Element {
  instructionsCheckboxChangeHandler = (event, element) => {
    const instructionsCheckbox = element, ///
          checked = instructionsCheckbox.isChecked(),
          overlayHidden = checked;  ///

    setOverlayHidden(overlayHidden);
  }

  childElements() {
    return ([

      <InstructionsCheckbox onChange={this.instructionsCheckboxChangeHandler} />,
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
  padding: ${instructionsCheckboxDivPadding};
  font-size: inherit;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  
`;
