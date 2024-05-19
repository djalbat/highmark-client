"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import InstructionParagraph from "../paragraph/instruction";

class InstructionsDiv extends Element {
  childElements() {
    const { instructions } = this.constructor,
          instructionParagraphs = instructions.map((instruction) =>

            <InstructionParagraph>
              {instruction}
            </InstructionParagraph>

          ),
          childElements = [
            ...instructionParagraphs
          ];

    return childElements;
  }

  static tagName =  "div";

  static defaultProperties = {
    className: "instructions"
  };
}

export default withStyle(InstructionsDiv)`

  grid-area: instructions-div;

`;
