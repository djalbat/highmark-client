"use strict";

import MenuButton from "../../button/menu";
import CloseMenuSVG from "../../svg/menu/close";

export default class CloseMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.closeMenu();
  }

  static SVG = CloseMenuSVG;

  static defaultProperties = {
    className: "close"
  };
}
