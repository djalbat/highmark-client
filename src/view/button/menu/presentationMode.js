"use strict";

import { PresentationModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class PresentationModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.presentationMode();

    event.preventDefault();
  }

  parentContext() {
    const activatePresentationModeMenuButton = this.activate.bind(this),  ///
          deactivatePresentationModeMenuButton = this.deactivate.bind(this);  ///

    return ({
      activatePresentationModeMenuButton,
      deactivatePresentationModeMenuButton
    });
  }

  static MenuSVG = PresentationModeMenuSVG;

  static defaultProperties = {
    className: "presentation-mode",
  };
}
