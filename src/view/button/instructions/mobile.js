"use strict";

import withStyle from "easy-with-style";  ///

import InstructionsButton from "../../button/instructions";

import { mobileInstructionsButtonBackgroundColour } from "../../../styles";

class MobileInstructionsButton extends InstructionsButton {
  childElements() {
    return "Mobile / Tablet";
  }

  parentContext() {
    const showMobileInstructionsButton = this.show.bind(this),  ///
          hideMobileInstructionsButton = this.hide.bind(this);  ///

    return  ({
      showMobileInstructionsButton,
      hideMobileInstructionsButton
    });
  }

  static defaultProperties = {
    className: "mobile"
  };
}

export default withStyle(MobileInstructionsButton)`

  background-color: ${mobileInstructionsButtonBackgroundColour};
  
`;
