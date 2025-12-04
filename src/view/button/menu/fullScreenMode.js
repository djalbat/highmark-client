"use strict";

import { controller } from "sufficient";
import { FullScreenModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class FullScreenModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.fullScreenMode();

    event.preventDefault();
  }

  parentContext() {
    const showFullScreenModeMenuButton = this.show.bind(this),  ///
          hideFullScreenModeMenuButton = this.hide.bind(this),  ///
          enableFullScreenModeMenuButton = this.enable.bind(this),  ///
          disableFullScreenModeMenuButton = this.disable.bind(this);  ///

    return ({
      showFullScreenModeMenuButton,
      hideFullScreenModeMenuButton,
      enableFullScreenModeMenuButton,
      disableFullScreenModeMenuButton
    });
  }

  static MenuSVG = FullScreenModeMenuSVG;

  static defaultProperties = {
    className: "full-screen-mode"
  };
}
