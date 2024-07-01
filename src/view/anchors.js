"use strict";

import { ANCHORS_SELECTOR } from "../selectors";

const anchorDOMElements = [ ...document.querySelectorAll(ANCHORS_SELECTOR) ]; ///

anchorDOMElements.forEach((anchorDOMElement) => {
  anchorDOMElement.remove();
});
