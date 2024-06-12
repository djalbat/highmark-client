"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import MobileInstructionsButton from "../button/instructions/mobile";
import DesktopInstructionsButton from "../button/instructions/desktop";

import { FLEX } from "../../constants";
import { instructionsButtonsDivGap } from "../../styles";
import { MOBILE_CUSTOM_EVENT_TYPE, DESKTOP_CUSTOM_EVENT_TYPE } from "../../customEventTypes";

class InstructionsButtonsDiv extends Element {
  desktopInstructionsButtonClickHandler = (event, element) => {
    const customEventType = DESKTOP_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  mobileInstructionsButtonClickHandler = (event, element) => {
    const customEventType = MOBILE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element);
  }

  show() {
    const display = FLEX;

    this.display(display);
  }

  childElements() {
    return ([

      <MobileInstructionsButton onClick={this.mobileInstructionsButtonClickHandler} />,
      <DesktopInstructionsButton onClick={this.desktopInstructionsButtonClickHandler} />

    ]);
  }

  parentContext() {
    const showInstructionsButtonsDiv = this.show.bind(this),  ///
          hideInstructionsButtonsDiv = this.hide.bind(this);  ///

    return ({
      showInstructionsButtonsDiv,
      hideInstructionsButtonsDiv
    });
  }

  static tagName =  "div";

  static defaultProperties = {
    className: "instructions-bottoms"
  };
}

export default withStyle(InstructionsButtonsDiv)`

  gap: ${instructionsButtonsDivGap};
  display: flex;
  flex-wrap: wrap;
  grid-area: instructions-buttons-div;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
`;
