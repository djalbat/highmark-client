"use strict";

import { Element } from "easy";

import { DISPLAY } from "../../constants";

export default class DivisionDiv extends Element {
  show() {
    const display = this.getDisplay();

    this.display(display);
  }

  didMount() {
    const name = DISPLAY, ///
          display = this.css(name);

    this.setDisplay(display);

    this.hide();
  }

  willUnmount() {
    ///
  }

  getDisplay() {
    const { display } = this.getState();

    return display;
  }

  setDisplay(display) {
    this.updateState({
      display
    });
  }

  setInitialState() {
    const display = null;

    this.setState({
      display
    });
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";
}
