"use strict";

import withStyle from "easy-with-style";  ///

import { keyCodes } from "necessary";
import { Element, window } from "easy";
import { scrollbarMixin, previewPaneScheme } from "occam-styles";

import DocumentDiv from "./view/div/document";

import { getZoom } from "./state";

const { backgroundColour, scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour } = previewPaneScheme;

const { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  keyDownHandler = (event, element) => {
    const { keyCode } = event;

    switch (keyCode) {
      case ESCAPE_KEY_CODE: {
        const fullScreen = this.isFullScreen();

        if (fullScreen) {
          controller.exitFullScreen();
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

  resizeHandler = (event, element) => {
    const noNudge = true;

    this.zoom(noNudge);
  }

  zoom(noNudge = false) {
    const zoom = getZoom(),
          innerWidth = this.getInnerWidth(),
          innerHeight = this.getInnerHeight(),
          documentScale = zoom, ///
          previewPaneInnerWidth = innerWidth, ///
          previewPaneInnerHeight = innerHeight; ///

    this.scaleDocumentDiv(documentScale, previewPaneInnerWidth, previewPaneInnerHeight);

    if (noNudge) {
      return;
    }

    this.nudge();
  }

  nudge() {
    let scrollTop = this.getScrollTop();

    const scrollLeft = this.getScrollLeft(),
          innerHeight = this.getInnerHeight(),
          scrollHeight = this.getScrollHeight(),
          maximumScrollTop = scrollHeight - innerHeight,
          delta = (scrollTop < maximumScrollTop) ?
                    +1 :
                      -1;

    scrollTop += delta;

    this.scrollTo(scrollTop, scrollLeft);

    requestAnimationFrame(() => {
      scrollTop -= delta;

      this.scrollTo(scrollTop, scrollLeft);
    });
  }

  didMount() {
    this.onResize(this.resizeHandler, this);

    window.onKeyDown(this.keyDownHandler);
  }

  willUnmount() {
    this.offResize(this.resizeHandler, this);

    window.offKeyDown(this.keyDownHandler);
  }

  childElements() {
    const resizeHandler = this.resizeHandler.bind(this);

    return (

      <DocumentDiv resizeHandler={resizeHandler} />

    );
  }

  initialise() {
    this.assignContext();
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
  display: flex;
  overflow: scroll;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;

  touch-action: none;

  background-color: ${backgroundColour};
  
  ${scrollbarMixin}
  
  @media (pointer: fine) {
    ::-webkit-scrollbar-thumb {
      background-color: ${scrollbarThumbBackgroundColour};
    }
    
    ::-webkit-scrollbar-track {
      background-color: ${scrollbarTrackBackgroundColour};
    }
  
    ::-webkit-scrollbar-corner {
      background-color: ${scrollbarCornerBackgroundColour};
    }
  
    scrollbar-color: ${scrollbarThumbBackgroundColour} ${scrollbarTrackBackgroundColour};
  }
    
`;
