"use strict";

import withStyle from "easy-with-style";  ///

import InstructionsButton from "../../button/instructions";

import { desktopInstructionsButtonBackgroundColour } from "../../../styles";

class DesktopInstructionsButton extends InstructionsButton {
  childElements() {
    return "Desktop / Laptop";
  }

  parentContext() {
    const showDesktopInstructionsButton = this.show.bind(this), ///
          hideDesktopInstructionsButton = this.hide.bind(this); ///

    return ({
      showDesktopInstructionsButton,
      hideDesktopInstructionsButton
    });
  }

  static defaultProperties = {
    className: "desktop"
  };
}

export default withStyle(DesktopInstructionsButton)`

  grid-area: desktop-instructions-button;
  background-color: ${desktopInstructionsButtonBackgroundColour};
  
`;
