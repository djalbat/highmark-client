"use strict";

import { Element } from "easy";

import { ANCHORS_SELECTOR } from "../../selectors";

const anchorDOMElements = [ ...document.querySelectorAll(ANCHORS_SELECTOR) ]; ///

anchorDOMElements.forEach((anchorDOMElement) => {
  anchorDOMElement.remove();
});

export default class AnchorsDiv extends Element {
  static tagName = "div";

  static className = "anchors";
}
