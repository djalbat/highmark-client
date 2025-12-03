"use strict";

import { InvertColoursMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class InvertColoursMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    debugger
  }

  static MenuSVG = InvertColoursMenuSVG;

  static defaultProperties = {
    className: "invert-colours"
  };
}
