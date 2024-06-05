"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { DISPLAY, BACKGROUND_COLOUR } from "../constants";

class Div extends Element {
  getBackgroundColour() {
    const backgroundColour = this.css(BACKGROUND_COLOUR) || null;

    return backgroundColour;
  }

  zoom(zoom) {
    const zoomRatio = 100 / zoom,
          width = `${zoomRatio}%`,
          minHeight = `${zoomRatio}%`,
          transform = `scale(${zoom})`;

    const css = {
      width,
      minHeight,
      transform
    };

    this.css(css);
  }

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

export default withStyle(Div)`

  width: 100%;
  transform-origin: top left;
  
`;
