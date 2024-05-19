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

import { desktop } from "../../breakpoints";
import { BACK_BUTTON_CLICK_CUSTOM_EVENT_TYPE } from "../../customEventTypes";
import { containerDivGap,
         containerDivPadding,
         containerDivMaxWidth,
         containerDivFontFamily,
         containerDivMobileFontSize,
         containerDivDesktopFontSize } from "../../styles";

class ContainerDiv extends Element {
  desktopInstructionsButtonClickHandler = (event, element) => {
    this.hideButtons();

    this.showDesktopInstructionsDiv();
  }

  mobileInstructionsButtonClickHandler = (event, element) => {
    this.hideButtons();

    this.showMobileInstructionsDiv();
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

  backButtonClickHandler = (event, element) => {
    const customEventType = BACK_BUTTON_CLICK_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  childElements() {
    return ([

      <HideOverlayButton/>,
      <MobileInstructionsButton onClick={this.mobileInstructionsButtonClickHandler} />,
      <DesktopInstructionsButton onClick={this.desktopInstructionsButtonClickHandler} />,
      <MobileInstructionsDiv/>,
      <InstructionsCheckboxDiv/>,
      <BackButton/>

    ]);
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
  
  font-size: ${containerDivMobileFontSize};
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: auto 1fr;
  grid-template-areas:
  
                   ". hide-overlay-button"
    
     "mobile-instructions-button mobile-instructions-button" 
              
    "desktop-instructions-button desktop-instructions-button"
    
              "instructions-div instructions-div"
              
            "instructions-checkbox-div back-button"
      
  ;      
  
  @media (min-width: ${desktop}) {

    font-size: ${containerDivDesktopFontSize};
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
