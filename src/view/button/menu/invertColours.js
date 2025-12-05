"use strict";

import { InvertColoursMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class InvertColoursMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    const active = this.isActive();

    if (active) {
      this.deactivate();

      controller.revertColours();
    } else {
      this.activate();

      controller.invertColours();
    }

    event.preventDefault();
  }

  static MenuSVG = InvertColoursMenuSVG;

  static defaultProperties = {
    className: "invert-colours"
  };
}
