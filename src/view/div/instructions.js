"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BackButton from "../button/back";
import InstructionParagraph from "../paragraph/instruction";
import InstructionsCheckboxDiv from "../div/checkbox/instructions";

import { FLEX } from "../../constants";
import { instructionsDivMaxWidth } from "../../styles";
import { BACK_BUTTON_CLICK_CUSTOM_EVENT_TYPE } from "../../customEventTypes";

class InstructionsDiv extends Element {
  backButtonClickHandler = (event, element) => {
    const customEventType = BACK_BUTTON_CLICK_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  show() {
    const display = FLEX;

    this.display(display);
  }

  childElements() {
    const { instructions } = this.constructor,
          instructionParagraphs = instructions.map((instruction) =>

            <InstructionParagraph>
              {instruction}
            </InstructionParagraph>

          );

    return ([

        <BackButton onClick={this.backButtonClickHandler} />,

      ...instructionParagraphs,

        <InstructionsCheckboxDiv/>

    ]);
  }

  initialise() {
    this.hide();
  }

  static tagName =  "div";

  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsDiv)`
  
  display: flex;
  max-width: ${instructionsDivMaxWidth};
  font-size: inherit;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

`;
