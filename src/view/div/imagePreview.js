"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import AlternateTextSpan from "../span/alternateText";
import ImagePreviewCloseButton from "../button/close/imagePreview";

import { FLEX } from "../../constants";
import { IMAGE_SELECTOR, ALTERNATE_TEXT_SPAN_SELECTOR } from "../../selectors";
import { imagePreviewDivPadding, imagePreviewDivColumnGap, imagePreviewDivDivBackgroundColour } from "../../styles";

const { first } = arrayUtilities;

class ImagePreviewDiv extends Element {
  imagePreviewCloseButtonClickHandler = (event, element) => {
    this.hide();
  }

  removeImage() {
    const imageChildElements = this.getChildElements(IMAGE_SELECTOR),
          images = imageChildElements,  ///
          imagesLength = images.length;

    if (imagesLength === 1) {
      const firstImage = first(images),
            image = firstImage; ///

      image.remove();

      const alternateSpanElements = this.getChildElements(ALTERNATE_TEXT_SPAN_SELECTOR),
            alternateSpans = alternateSpanElements, ///
            firstAlternateSpan = first(alternateSpans),
            alternateSpan = firstAlternateSpan; ///

      alternateSpan.remove();
    }
  }

  addImage(image) {
    image = image.clone();  ///

    const alternateText = image.getAlternateText();

    this.add(image);

    this.add(

      <AlternateTextSpan>
        {alternateText}
      </AlternateTextSpan>

    );
  }

  show(image) {
    this.removeImage();

    this.addImage(image);

    const display = FLEX; ///

    this.display(display);
  }

  childElements() {
    return (

      <ImagePreviewCloseButton onClick={this.imagePreviewCloseButtonClickHandler} />

    );
  }

  parentContext() {
    const showImagePreviewDiv = this.show.bind(this); ///

    return ({
      showImagePreviewDiv
    });
  }

  initialise() {
    this.hide();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "image-preview"
  };
}

export default withStyle(ImagePreviewDiv)`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  padding: ${imagePreviewDivPadding};
  position: fixed;
  column-gap: ${imagePreviewDivColumnGap};
  align-items: center;
  flex-direction: column;
  background-color: ${imagePreviewDivDivBackgroundColour};
  justify-content: center;
    
`;
