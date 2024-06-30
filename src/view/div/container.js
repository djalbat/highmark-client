"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BackButton from "../button/back";
import OverlayCloseButton from "../button/close/overlay";
import MobileInstructionsDiv from "./instructions/mobile";
import InstructionsButtonsDiv from "../div/instructionsButtons";
import DesktopInstructionsDiv from "./instructions/desktop";
import InstructionsCheckboxDiv from "../div/checkbox/instructions";

import { containerDivMargin, containerDivMaxWidth, containerDivPaddingTop } from "../../styles";

class ContainerDiv extends Element {
  overlayCloseButtonClickHandler = (event, element) => {
    controller.hideOverlay();

    controller.showDivisions();
  }

  backButtonClickHandler = (event, element) => {
    this.back();
  }

  desktopCustomHandler = (event, element) => {
    this.desktop();
  }

  mobileCustomHandler = (event, element) => {
    this.mobile();
  }

  desktop() {
    this.showBackButton();
    this.showOverlayCloseButton();
    this.showDesktopInstructionsDiv();
    this.hideInstructionsButtonsDiv();
    this.showInstructionsCheckboxDiv();
  }

  mobile() {
    this.showBackButton();
    this.showOverlayCloseButton();
    this.showMobileInstructionsDiv();
    this.hideInstructionsButtonsDiv();
    this.showInstructionsCheckboxDiv();
  }

  back() {
    this.hideBackButton();
    this.hideOverlayCloseButton();
    this.hideMobileInstructionsDiv();
    this.showInstructionsButtonsDiv();
    this.hideDesktopInstructionsDiv();
    this.hideInstructionsCheckboxDiv();
  }

  childElements() {
    return ([

      <BackButton onClick={this.backButtonClickHandler} />,
      <OverlayCloseButton onClick={this.overlayCloseButtonClickHandler} />,
      <InstructionsButtonsDiv onCustomMobile={this.mobileCustomHandler} onCustomDesktop={this.desktopCustomHandler} />,
      <MobileInstructionsDiv/>,
      <DesktopInstructionsDiv/>,
      <InstructionsCheckboxDiv/>

    ]);
  }

  initialise() {
    this.assignContext();

    this.back();
  }

  static tagName =  "div";

  static defaultProperties = {
    className: "container"
  };
}

export default withStyle(ContainerDiv)`

  margin: ${containerDivMargin};
  display: grid;
  max-width: ${containerDivMaxWidth};
  padding-top: ${containerDivPaddingTop};
  grid-template-rows: auto auto auto auto;
  grid-template-columns: auto 1fr;
  grid-template-areas:
  
    
                ". overlay-close-button"
             
    "instructions-buttons-div instructions-buttons-div" 
              
           "instructions-div instructions-div"
          
         "instructions-checkbox-div back-button"
      
  ;      

`;
