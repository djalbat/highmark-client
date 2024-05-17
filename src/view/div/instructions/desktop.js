"use strict";

import InstructionsDiv from "../../div/instructions";

export default class DesktopInstructionsDiv extends InstructionsDiv {
  parentContext() {
    const showDesktopInstructionsDiv = this.show.bind(this),  ///
          hideDesktopInstructionsDiv = this.hide.bind(this);  ///

    return ({
      showDesktopInstructionsDiv,
      hideDesktopInstructionsDiv
    });
  }

  static instructions = [
    "Click near the bottom of the screen to open the menu once these instructions have been hidden.",
    "Native gestures are overridden by default for mobile and tablet once these instructions are hidden. This disables scrolling on desktops and laptops, however, so you must restore native gestures from the menu before proceeding on these devices."
  ];

  static defaultProperties = {
    className: "desktop"
  };
}
