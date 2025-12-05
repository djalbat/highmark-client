"use strict";

import { DraftModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class DraftModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.draftMode();

    event.preventDefault();
  }

  parentContext() {
    const activateDraftModeMenuButton = this.activate.bind(this), ///
          deactivateDraftModeMenuButton = this.deactivate.bind(this); ///

    return ({
      activateDraftModeMenuButton,
      deactivateDraftModeMenuButton
    });
  }

  static MenuSVG = DraftModeMenuSVG;

  static defaultProperties = {
    className: "draft-mode",
  };
}
