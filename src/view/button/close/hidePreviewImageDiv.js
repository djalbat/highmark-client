"use strict";

import withStyle from "easy-with-style";  ///

import CloseButton from "../../button/close";

import { hidePreviewImageDivButtonTop, hidePreviewImageDivButtonLeft } from "../../../styles";

class HidePreviewImageDivButton extends CloseButton {
  static defaultProperties = {
    className: "hide-preview-image-div"
  };
}

export default withStyle(HidePreviewImageDivButton)`

  top: ${hidePreviewImageDivButtonTop};
  right: ${hidePreviewImageDivButtonLeft};
  position: absolute;
  
`;
