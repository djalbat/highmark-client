"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import CloseOverlayButton from "../button/closeOverlay";
import MobileInstructionsButton from "../button/instructions/mobile";
import DesktopInstructionsButton from "../button/instructions/desktop";

import { overlayDivGap, overlayDivBackgroundColour } from "../../styles";

class InstructionsDiv extends Element {
  desktopInstructionsButtonClickHandler = (event, element) => {
    this.hideButtons();
  }

  mobileInstructionsButtonClickHandler = (event, element) => {
    this.hideButtons();
  }

  instructionsCloseButtonClickHandler = (event, element) => {
    this.hide();
  }

  showButtons() {
    this.showMobileInstructionsButton();
    this.showDesktopInstructionsButton();
  }

  hideButtons() {
    this.hideMobileInstructionsButton();
    this.hideDesktopInstructionsButton();
  }

  childElements() {
    return ([

      <CloseOverlayButton onClick={this.instructionsCloseButtonClickHandler} />,
      <MobileInstructionsButton onClick={this.mobileInstructionsButtonClickHandler} />,
      <DesktopInstructionsButton onClick={this.desktopInstructionsButtonClickHandler} />

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "overlay"
  };
}

export default withStyle(InstructionsDiv)`

  gap: ${overlayDivGap};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
  position: fixed;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${overlayDivBackgroundColour};
  
`;
