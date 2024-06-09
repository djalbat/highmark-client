"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BackButton from "../button/back";
import MobileInstructionsDiv from "./instructions/mobile";
import DesktopInstructionsDiv from "./instructions/desktop";
import InstructionsCheckboxDiv from "../div/checkbox/instructions";
import ShowDivisionsCloseButton from "../button/close/showDivisions";
import MobileInstructionsButton from "../button/instructions/mobile";
import DesktopInstructionsButton from "../button/instructions/desktop";

import { containerDivGap, containerDivPadding, containerDivMaxWidth } from "../../styles";

class ContainerDiv extends Element {
  desktopInstructionsButtonClickHandler = (event, element) => {
    this.desktop();
  }

  mobileInstructionsButtonClickHandler = (event, element) => {
    this.mobile();
  }

  showDivisionsCloseButtonClickHandler = (event, element) => {
    controller.showDivisions();
  }

  backButtonClickHandler = (event, element) => {
    this.back();
  }

  desktop() {
    this.showBackButton();
    this.showDesktopInstructionsDiv();
    this.showInstructionsCheckboxDiv();
    this.showShowDivisionsCloseButton();
    this.hideMobileInstructionsButton();
    this.hideDesktopInstructionsButton();
  }

  mobile() {
    this.showBackButton();
    this.showMobileInstructionsDiv();
    this.showInstructionsCheckboxDiv();
    this.showShowDivisionsCloseButton();
    this.hideMobileInstructionsButton();
    this.hideDesktopInstructionsButton();
  }

  back() {
    this.hideBackButton();
    this.hideMobileInstructionsDiv();
    this.hideDesktopInstructionsDiv();
    this.hideInstructionsCheckboxDiv();
    this.hideShowDivisionsCloseButton();
    this.showMobileInstructionsButton();
    this.showDesktopInstructionsButton();
  }

  childElements() {
    return ([

      <BackButton onClick={this.backButtonClickHandler} />,
      <ShowDivisionsCloseButton onClick={this.showDivisionsCloseButtonClickHandler} />,
      <MobileInstructionsButton onClick={this.mobileInstructionsButtonClickHandler} />,
      <DesktopInstructionsButton onClick={this.desktopInstructionsButtonClickHandler} />,
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

  gap: ${containerDivGap};
  margin: auto;  
  display: grid;
  padding: ${containerDivPadding};
  max-width: ${containerDivMaxWidth};
    
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: auto 1fr;
  grid-template-areas:
  
                   ". hide-overlay-button"
    
     "mobile-instructions-button mobile-instructions-button" 
              
    "desktop-instructions-button desktop-instructions-button"
    
              "instructions-div instructions-div"
              
            "instructions-checkbox-div back-button"
      
  ;      
  
  @media (orientation: landscape) {

    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto 1fr;
    grid-template-areas:
    
                     ". hide-overlay-button"
      
      "mobile-instructions-button desktop-instructions-button"
        
                "instructions-div instructions-div"

              "instructions-checkbox-div back-button"
    ;      
    
  }

`;
