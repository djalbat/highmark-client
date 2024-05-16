"use strict";

import InstructionsDiv from "../../div/instructions";
import InstructionsParagraph from "../../paragraph/instructions";
import InstructionsCheckboxDiv from "../../div/checkbox/instructions";

import { FLEX } from "../../../constants";

export default class MobileInstructionsDiv extends InstructionsDiv {
  show() {
    const display = FLEX;

    this.display(display);
  }

  childElements() {
    return ([

      <InstructionsParagraph>
        Tap near the bottom of the screen to open the menu.
      </InstructionsParagraph>,
      <InstructionsParagraph>
        Native gestures are mostly overridden.
        Pinching changes the font size instead of zooming, for example.
      </InstructionsParagraph>,
      <InstructionsParagraph>
        The double tap native gesture cannot be fully overridden and sometimes causes unwanted zooming.
        When this happens, restore native gestures in order to fix it.
      </InstructionsParagraph>,
      <InstructionsParagraph>
        If the unwanted zooming means that you cannot access the menu then you can restore native gestures with another double tap.
        This can take a little practice.
      </InstructionsParagraph>,
      <InstructionsCheckboxDiv/>

    ]);
  }

  parentContext() {
    const showMobileInstructionsDiv = this.show.bind(this); ///

    return ({
      showMobileInstructionsDiv
    });
  }

  initialise() {
    this.hide();
  }

  static defaultProperties = {
    className: "mobile"
  };
}
