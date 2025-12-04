"use strict";

import { controller } from "sufficient";
import { FullScreenModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class FullScreenModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.fullScreenMode();

    event.preventDefault();
  }

  static MenuSVG = FullScreenModeMenuSVG;

  static defaultProperties = {
    className: "full-screen-mode"
  };
}
