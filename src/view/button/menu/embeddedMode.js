"use strict";

import { EmbeddedModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class EmbeddedModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.embeddedMode();

    event.preventDefault();
  }

  static MenuSVG = EmbeddedModeMenuSVG;

  static defaultProperties = {
    className: "embedded-mode"
  };
}
