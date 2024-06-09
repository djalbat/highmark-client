"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { ALT } from "../constants";
import { elementFromDOMElement } from "../utilities/element";

class Image extends Element {
  areBoundsOverlapping(top, left) {
    const bounds = this.getBounds(),
          boundsOverlapping = bounds.areOverlappingByTopAndLeft(top, left);

    return boundsOverlapping;
  }

  getAlternateText() {
    const altAttribute = this.getAttribute(ALT),
          alternateText = altAttribute; ///

    return alternateText;
  }

  clone() {
    let domElement = this.getDOMElement();

    domElement = domElement.cloneNode();  ///

    const image = elementFromDOMElement(domElement, Image);

    image.addClass("cloned");

    return image;
  }

  static tagName = "img";
}

export default withStyle(Image)`

  .cloned {
    width: 75%;
    height: auto;
    max-height: 75%;
    object-fit: contain;
  }
  
`;