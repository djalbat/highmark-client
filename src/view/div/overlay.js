"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import HideOverlayButton from "../button/hideOverlay";
import MobileInstructionsDiv from "../div/instructions/mobile";
import DesktopInstructionsDiv from "../div/instructions/desktop";
import MobileInstructionsButton from "../button/instructions/mobile";
import DesktopInstructionsButton from "../button/instructions/desktop";

import { desktop } from "../../breakpoints";
import { isOverlayHidden } from "../../state";
import { overlayDivGap, instructionsDivPadding, overlayDivBackgroundColour } from "../../styles";

class OverlayDiv extends Element {
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

  backButtonClickCustomHandler = (event, element) => {
    this.hideDesktopInstructionsDiv();
    this.hideMobileInstructionsDiv();

    this.showButtons();
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
      <DesktopInstructionsDiv onCustomBackButtonClick={this.backButtonClickCustomHandler} />,
      <MobileInstructionsDiv onCustomBackButtonClick={this.backButtonClickCustomHandler} />

    ]);
  }

  initialise() {
    this.assignContext();

    const overlayHidden = isOverlayHidden();

    if (overlayHidden) {
      this.hide();
    }
  }

  static tagName = "div";

  static defaultProperties = {
    className: "overlay"
  };
}

export default withStyle(OverlayDiv)`

  gap: ${overlayDivGap};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
  padding: ${instructionsDivPadding};
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: ${overlayDivBackgroundColour};
  
  flex-direction: column;
  
  @media (min-width: ${desktop}) {

    flex-direction: row;
    
  }

`;
