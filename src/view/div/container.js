"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import BackButton from "../button/back";
import HideOverlayButton from "../button/hideOverlay";
import MobileInstructionsDiv from "./instructions/mobile";
import DesktopInstructionsDiv from "./instructions/desktop";
import InstructionsCheckboxDiv from "../div/checkbox/instructions";
import MobileInstructionsButton from "../button/instructions/mobile";
import DesktopInstructionsButton from "../button/instructions/desktop";

import { containerDivGap,
         containerDivPadding,
         containerDivMaxWidth,
         containerDivFontFamily,
         containerDivPortraitFontSize,
         containerDivLandscapeFontSize } from "../../styles";

class ContainerDiv extends Element {
  desktopInstructionsButtonClickHandler = (event, element) => {
    this.desktop();
  }

  mobileInstructionsButtonClickHandler = (event, element) => {
    this.mobile();
  }

  hideOverlayButtonClickHandler = (event, element) => {
    debugger
  }

  backButtonClickHandler = (event, element) => {
    this.back();
  }

  desktop() {
    this.showBackButton();
    this.showHideOverlayButton();
    this.showDesktopInstructionsDiv();
    this.showInstructionsCheckboxDiv();
    this.hideMobileInstructionsButton();
    this.hideDesktopInstructionsButton();
  }

  mobile() {
    this.showBackButton();
    this.showHideOverlayButton();
    this.showMobileInstructionsDiv();
    this.showInstructionsCheckboxDiv();
    this.hideMobileInstructionsButton();
    this.hideDesktopInstructionsButton();
  }

  back() {
    this.hideBackButton();
    this.hideHideOverlayButton();
    this.hideMobileInstructionsDiv();
    this.hideDesktopInstructionsDiv();
    this.hideInstructionsCheckboxDiv();
    this.showMobileInstructionsButton();
    this.showDesktopInstructionsButton();
  }

  childElements() {
    return ([

      <BackButton onClick={this.backButtonClickHandler} />,
      <HideOverlayButton onClick={this.hideOverlayButtonClickHandler} />,
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
  font-family: ${containerDivFontFamily};
  
  font-size: ${containerDivPortraitFontSize};
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

    font-size: ${containerDivLandscapeFontSize};
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
