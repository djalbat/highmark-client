"use strict";

import { DraftModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class DraftModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    debugger
  }

  static MenuSVG = DraftModeMenuSVG;

  static defaultProperties = {
    className: "draft-mode",
  };
}
