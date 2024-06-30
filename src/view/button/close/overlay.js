"use strict";

import withStyle from "easy-with-style";  ///

import CloseButton from "../../button/close";

class OverlayCloseButton extends CloseButton {
  parentContext() {
    const showOverlayCloseButton = this.show.bind(this), ///
          hideOverlayCloseButton = this.hide.bind(this); ///

    return ({
      showOverlayCloseButton,
      hideOverlayCloseButton
    });
  }

  static defaultProperties = {
    className: "overlay"
  };
}

export default withStyle(OverlayCloseButton)`

  grid-area: overlay-close-button;
  justify-self: end;

`;
