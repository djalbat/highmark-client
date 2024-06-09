"use strict";

import withStyle from "easy-with-style";  ///

import { Element, elementUtilities } from "easy";

import Image from "./image";

import { IMAGE_SELECTOR } from "../selectors";
import { elementsFromDOMElements } from "../utilities/element";
import { DISPLAY, BACKGROUND_COLOUR } from "../constants";

const { mountElement, unmountElement } = elementUtilities;

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

  mountImages() {
    const images = this.getImages();

    images.forEach((image) => {
      const element = image;  ///

      mountElement(element);
    });
  }

  unmountImages() {
    const images = this.getImages();

    images.forEach((image) => {
      const element = image;  ///

      unmountElement(element);
    });
  }

  findImageByTopAndLeft(top, left) {
    const images = this.getImages(),
          image = images.find((image) => {

          }) || null;

    return null;
  }

  didMount() {
    const name = DISPLAY, ///
          display = this.css(name),
          domElement = this.getDOMElement(),
          imageDOMElements = [ ...domElement.querySelectorAll(IMAGE_SELECTOR) ],
          images = elementsFromDOMElements(imageDOMElements, Image);

    this.setDisplay(display);

    this.setImages(images);

    this.hide();

    this.mountImages();
  }

  willUnmount() {
    this.unmountImages();
  }

  getImages() {
    const { images } = this.getState();

    return images;
  }

  setImages(images) {
    this.updateState({
      images
    });
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
    const images = null,
          display = null;

    this.setState({
      images,
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
