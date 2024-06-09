"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { imagePreviewDivDivBackgroundColour } from "../../styles";

class ImagePreviewDiv extends Element {
  childElements() {
    return "IMAGE PREVIEW";
  }

  show(image) {
    ///

    super.show();
  }

  initialise() {
    this.hide();
  }

  parentContext() {
    const showImagePreviewDiv = this.show.bind(this); ///

    return ({
      showImagePreviewDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "preloader"
  };
}

export default withStyle(ImagePreviewDiv)`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; 
  position: fixed;
  background-color: ${imagePreviewDivDivBackgroundColour};
    
`;