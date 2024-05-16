"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import InstructionParagraph from "../paragraph/instruction";
import InstructionsCheckboxDiv from "../div/checkbox/instructions";

import { FLEX } from "../../constants";
import { instructionsDivWidth } from "../../styles";

class InstructionsDiv extends Element {
  show() {
    const display = FLEX;

    this.display(display);
  }

  childElements() {
    const { instructions } = this.constructor,
          instructionParagraphs = instructions.map((instruction) =>

            <InstructionParagraph>
              {instruction}
            </InstructionParagraph>,
          )

    return ([

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
  
  width: ${instructionsDivWidth};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

`;
