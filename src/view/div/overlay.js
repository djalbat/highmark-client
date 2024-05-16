"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import HideOverlayButton from "../button/hideOverlay";
import MobileInstructionsDiv from "../div/instructions/mobile";
import DesktopInstructionsDiv from "../div/instructions/desktop";
import MobileInstructionsButton from "../button/instructions/mobile";
import DesktopInstructionsButton from "../button/instructions/desktop";

import { overlayDivGap, overlayDivBackgroundColour } from "../../styles";

class InstructionsDiv extends Element {
  desktopInstructionsButtonClickHandler = (event, element) => {
    this.hideButtons();

    this.showDesktopInstructionsDiv();
  }

  mobileInstructionsButtonClickHandler = (event, element) => {
    this.hideButtons();

    this.showMobileInstructionsDiv();
  }

  hideOverlayButtonClickHandler = (event, element) => {
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

      <HideOverlayButton onClick={this.hideOverlayButtonClickHandler} />,
      <MobileInstructionsButton onClick={this.mobileInstructionsButtonClickHandler} />,
      <DesktopInstructionsButton onClick={this.desktopInstructionsButtonClickHandler} />,
      <DesktopInstructionsDiv/>,
      <MobileInstructionsDiv/>

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
