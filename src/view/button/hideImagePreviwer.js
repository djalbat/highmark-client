"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { hideOverlayButtonColour, hideOverlayButtonFontSize } from "../../styles";

class HideImagePreviewerButton extends Button {
  childElements() {
    return "╳";
  }

  parentContext() {
    const showHideImagePreviewerButton = this.show.bind(this), ///
          hideHideImagePreviewerButton = this.hide.bind(this); ///

    return ({
      showHideImagePreviewerButton,
      hideHideImagePreviewerButton
    });
  }

  static defaultProperties = {
    className: "hide-image-previewer"
  };
}

export default withStyle(HideImagePreviewerButton)`

  width: fit-content;
  color: ${hideOverlayButtonColour};
  cursor: pointer;
  padding: 0;
  font-size: ${hideOverlayButtonFontSize};
  grid-area: hide-overlay-button;
  background: transparent;
  justify-self: end;

`;
