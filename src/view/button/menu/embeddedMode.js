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
          hideEmbeddedModeMenuButton = this.hide.bind(this);  ///

    return ({
      showEmbeddedModeMenuButton,
      hideEmbeddedModeMenuButton
    });
  }

  static MenuSVG = EmbeddedModeMenuSVG;

  static defaultProperties = {
    className: "embedded-mode"
  };
}
