"use strict";

import { FullScreenModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class FullScreenModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    debugger
  }

  static MenuSVG = FullScreenModeMenuSVG;

  static defaultProperties = {
    className: "full-screen-mode"
  };
}
