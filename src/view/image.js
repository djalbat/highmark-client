"use strict";

import { Element, eventTypes } from "easy";

const { CONTEXTMENU_EVENT_TYPE } = eventTypes;

export default class Image extends Element {
  contextMenuHandler = (event, element) => {
    event.preventDefault();
  }

  areBoundsOverlapping(top, left) {
    const bounds = this.getBounds(),
          boundsOverlapping = bounds.areOverlappingByTopAndLeft(top, left);

    return boundsOverlapping;
  }

  didMount() {
    this.onEvent(CONTEXTMENU_EVENT_TYPE, this.contextMenuHandler);
  }

  willUnmount() {
    this.offEvent(CONTEXTMENU_EVENT_TYPE, this.contextMenuHandler);
  }

  static tagName = "img"; ///
}
