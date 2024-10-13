"use strict";

import withStyle from "easy-with-style";  ///

import { keyCodes } from "necessary";
import { Element, window } from "easy";

import "./view/anchors";

import MenuDiv from "./view/div/menu";
import OverlayDiv from "./view/div/overlay";
import DivisionsDiv from "./view/div/divisions";
import PreloaderDiv from "./view/div/preloader";
import ImagePreviewDiv from "./view/div/imagePreview";

const { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  previewImageCustomHandler = (event, element, image) => {
    this.showImagePreviewDiv(image);
  }

  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    switch (keyCode) {
      case ESCAPE_KEY_CODE: {
        const imagePreviewDivShowing = this.isImagePreviewDivShowing();

        if (imagePreviewDivShowing) {
          this.hideImagePreviewDiv();
        } else {
          const fullScreen = this.isFullScreen();

          if (fullScreen) {
            controller.exitFullScreen();
          }

          controller.closeMenu();
        }

        break;
      }

      case ARROW_UP_KEY_CODE: {
        this.showFirstDivisionDiv();

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.showLastDivisionDiv();

        break;
      }

      case ENTER_KEY_CODE:
      case ARROW_RIGHT_KEY_CODE: {
        this.showRightDivisionDiv();

        break;
      }

      case BACKSPACE_KEY_CODE:
      case ARROW_LEFT_KEY_CODE: {
        this.showLeftDivisionDiv();

        break;
      }
    }
  }

  updateZoom() {
    this.updateMenuZoom();
    this.updateDivisionsZoom();
  }

  didMount() {
    window.onKeyDown(this.keyDownHandler);
  }

  willUnmount() {
    window.offKeyDown(this.keyDownHandler);
  }

  childElements() {
    return ([

      <ImagePreviewDiv/>,
      <PreloaderDiv/>,
      <OverlayDiv/>,
      <DivisionsDiv onCustomPreviewImage={this.previewImageCustomHandler} />,
      <MenuDiv/>

    ]);
  }

  initialise() {
    this.show();  ///

    this.assignContext();

    this.updateNativeGestures();
    this.updateDivisionsColours();
    this.updateFullScreenCheckboxDiv();
    this.updateInvertColoursCheckboxDiv();
    this.updateNativeGesturesCheckboxDiv();
  }

  static tagName = "div";

  static ignoredProperties = [];

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  width: 100%;
  height: 100%;
    
`;
