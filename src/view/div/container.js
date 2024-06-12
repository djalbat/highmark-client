"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BackButton from "../button/back";
import MobileInstructionsDiv from "./instructions/mobile";
import InstructionsButtonsDiv from "../div/instructionsButtons";
import DesktopInstructionsDiv from "./instructions/desktop";
import InstructionsCheckboxDiv from "../div/checkbox/instructions";
import ShowDivisionsCloseButton from "../button/close/showDivisions";

import { containerDivMargin, containerDivMaxWidth, containerDivPaddingTop } from "../../styles";

class ContainerDiv extends Element {
  showDivisionsCloseButtonClickHandler = (event, element) => {
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
    this.showDesktopInstructionsDiv();
    this.hideInstructionsButtonsDiv();
    this.showInstructionsCheckboxDiv();
    this.showShowDivisionsCloseButton();
  }

  mobile() {
    this.showBackButton();
    this.showMobileInstructionsDiv();
    this.hideInstructionsButtonsDiv();
    this.showInstructionsCheckboxDiv();
    this.showShowDivisionsCloseButton();
  }

  back() {
    this.hideBackButton();
    this.hideMobileInstructionsDiv();
    this.showInstructionsButtonsDiv();
    this.hideDesktopInstructionsDiv();
    this.hideInstructionsCheckboxDiv();
    this.hideShowDivisionsCloseButton();
  }

  childElements() {
    return ([

      <BackButton onClick={this.backButtonClickHandler} />,
      <ShowDivisionsCloseButton onClick={this.showDivisionsCloseButtonClickHandler} />,
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
  
             ". show-divisions-close-button"
    
    "instructions-buttons-div instructions-buttons-div" 
              
           "instructions-div instructions-div"
          
         "instructions-checkbox-div back-button"
      
  ;      

`;
