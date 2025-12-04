"use strict";

import { EmbeddedModeMenuSVG } from "occam-styles";

import MenuButton from "../../button/menu";

export default class EmbeddedModeMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.embeddedMode();

    event.preventDefault();
  }

  parentContext() {
    const showEmbeddedModeMenuButton = this.show.bind(this),  ///
          hideEmbeddedModeMenuButton = this.hide.bind(this),  ///
          enableEmbeddedModeMenuButton = this.enable.bind(this),  ///
          disableEmbeddedModeMenuButton = this.disable.bind(this);  ///

    return ({
      showEmbeddedModeMenuButton,
      hideEmbeddedModeMenuButton,
      enableEmbeddedModeMenuButton,
      disableEmbeddedModeMenuButton
    });
  }

  static MenuSVG = EmbeddedModeMenuSVG;

  static defaultProperties = {
    className: "embedded-mode"
  };
}
