"use strict";

import { PresentationModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class PresentationModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    debugger
  }

  static MenuSVG = PresentationModeMenuSVG;

  static defaultProperties = {
    className: "presentation-mode",
  };
}
