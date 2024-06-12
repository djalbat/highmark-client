"use strict";

import withStyle from "easy-with-style";  ///

import CloseButton from "../../button/close";

class ShowDivisionsCloseButton extends CloseButton {
  parentContext() {
    const showShowDivisionsCloseButton = this.show.bind(this), ///
          hideShowDivisionsCloseButton = this.hide.bind(this); ///

    return ({
      showShowDivisionsCloseButton,
      hideShowDivisionsCloseButton
    });
  }

  static defaultProperties = {
    className: "show-divisions"
  };
}

export default withStyle(ShowDivisionsCloseButton)`

  grid-area: show-divisions-close-button;
  justify-self: end;

`;
