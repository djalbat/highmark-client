"use strict";

import withStyle from "easy-with-style";  ///

import CloseButton from "../../button/close";

import { imagePreviewCloseButtonTop, imagePreviewCloseButtonLeft } from "../../../styles";

class ImagePreviewCloseButton extends CloseButton {
  static defaultProperties = {
    className: "image-preview-close-button"
  };
}

export default withStyle(ImagePreviewCloseButton)`

  top: ${imagePreviewCloseButtonTop};
  right: ${imagePreviewCloseButtonLeft};
  position: absolute;
  
`;
