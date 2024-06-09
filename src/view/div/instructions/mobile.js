"use strict";

import InstructionsDiv from "../../div/instructions";

export default class MobileInstructionsDiv extends InstructionsDiv {
  parentContext() {
    const showMobileInstructionsDiv = this.show.bind(this), ///
          hideMobileInstructionsDiv = this.hide.bind(this); ///

    return ({
      showMobileInstructionsDiv,
      hideMobileInstructionsDiv
    });
  }

  static instructions = [
    "Click near the bottom of the screen to open the menu once these instructions have been hidden.",
    "Native gestures are mostly overridden. Pinching will change the font size instead of zooming, for example. The double tap native gesture cannot be fully overridden, however, and sometimes causes unwanted zooming. When this happens, restore native gestures in order to fix it.",
    "If the unwanted zooming means that you cannot access the menu then you can restore native gestures with another double tap. This can take a little practice.",
    "Lastly, if bringing up the context menu interferes with subsequent swiping and pinching then tap at the bottom of the screen to show the menu. This will clear it."
  ]

  static defaultProperties = {
    className: "mobile"
  };
}
