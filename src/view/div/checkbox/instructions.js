"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import InstructionsCheckbox from "../../checkbox/instructions";
import InstructionsCheckboxSpan from "../../span/checkbox/instructions";

import { FLEX } from "../../../constants";
import { setOverlayHidden } from "../../../state";
import { instructionsCheckboxDivGap } from "../../../styles";

class InstructionsCheckboxDiv extends Element {
  instructionsCheckboxChangeHandler = (event, element) => {
    const instructionsCheckbox = element, ///
          checked = instructionsCheckbox.isChecked(),
          overlayHidden = checked;  ///

    setOverlayHidden(overlayHidden);
  }

  show() {
    const display = FLEX;

    this.display(display);
  }

  childElements() {
    return ([

      <InstructionsCheckbox onChange={this.instructionsCheckboxChangeHandler} />,
      <InstructionsCheckboxSpan/>

    ]);
  }

  parentContext() {
    const showInstructionsCheckboxDiv = this.show.bind(this), ///
          hideInstructionsCheckboxDiv = this.hide.bind(this); ///

    return ({
      showInstructionsCheckboxDiv,
      hideInstructionsCheckboxDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "instructions-checkbox"
  };
}

export default withStyle(InstructionsCheckboxDiv)`

  gap: ${instructionsCheckboxDivGap};
  display: flex;
  grid-area: instructions-checkbox-div;
  font-size: 1em;
  align-items: center;
  justify-self: start;
  flex-direction: row;
  justify-content: start;
  
`;
