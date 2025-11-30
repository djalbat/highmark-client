"use strict";

import withStyle from "easy-with-style";  ///

import { keyCodes } from "necessary";
import { Element, window } from "easy";
import { touchMixins, fullScreenMixins } from "easy-mobile";
import { scrollbarMixin, previewPaneScheme } from "occam-styles";

import DocumentDiv from "./view/div/document";

import { getZoom } from "./state";
import { UP_DIRECTION, DOWN_DIRECTION, SCROLL_TOP_DELTA, SCROLL_SPEED_DELTA } from "./constants";

const { backgroundColour, scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour } = previewPaneScheme,
      { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  swipeRightCustomHandler = (event, element, top, left, spped) => {
    this.showLeftDivisionDiv();

    this.stopScrolling();

    this.scrollToTop();
  }

  swipeLeftCustomHandler = (event, element, top, left, spped) => {
    this.showRightDivisionDiv();

    this.stopScrolling();

    this.scrollToTop();
  }

  swipeDownCustomHandler = (event, element, top, left, speed) => {
    const scrollSpeed = speed,  ///
          direction = DOWN_DIRECTION;

    this.startScrolling(scrollSpeed, direction);
  }

  swipeUpCustomHandler = (event, element, top, left, speed) => {
    const scrollSpeed = speed,  ///
          direction = UP_DIRECTION;

    this.startScrolling(scrollSpeed, direction);
  }

  dragStartCustomHandler = (event, element, top, left) => {
    const scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft(),
          startScrollTop = scrollTop, ///
          startScrollLeft = scrollLeft; ///

    this.setStartScrollTop(startScrollTop);

    this.setStartScrollLeft(startScrollLeft);
  }

  dragUpCustomHandler = (event, element, top, left) => {
    const startScrollLeft = this.getStartScrollLeft(),
          startScrollTop = this.getStartScrollTop(),
          scrollLeft = startScrollLeft - left,
          scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);

    this.setScrollLeft(scrollLeft);
  }

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

        this.stopScrolling();

        this.scrollToTop();

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.showLastDivisionDiv();

        this.stopScrolling();

        this.scrollToTop();

        break;
      }

      case ENTER_KEY_CODE:
      case ARROW_RIGHT_KEY_CODE: {
        this.showRightDivisionDiv();

        this.stopScrolling();

        this.scrollToTop();

        break;
      }

      case BACKSPACE_KEY_CODE:
      case ARROW_LEFT_KEY_CODE: {
        this.showLeftDivisionDiv();

        this.stopScrolling();

        this.scrollToTop();

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

  scrollToTop() {
    const scrollTop = 0;

    this.setScrollTop(scrollTop);
  }

  stopScrolling() {
    let animationFrame = this.getAnimationFrame();

    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);

      animationFrame = null;

      this.setAnimationFrame(animationFrame);
    }
  }

  startScrolling(scrollSpeed, direction) {
    this.stopScrolling();

    let then = performance.now();

    const step = (now) => {
      const timeDelta = now - then;

      scrollSpeed = scrollSpeed - SCROLL_SPEED_DELTA * timeDelta;

      if (scrollSpeed < 0) {
        this.stopScrolling();

        return;
      }

      let scrollTop = this.getScrollTop();

      scrollTop = scrollTop + direction * scrollSpeed * SCROLL_TOP_DELTA * timeDelta;

      then = now;  ///

      this.setScrollTop(scrollTop);

      const animationFrame = requestAnimationFrame(step);

      this.setAnimationFrame(animationFrame);
    }

    const animationFrame = requestAnimationFrame(step);

    this.setAnimationFrame(animationFrame);
  }

  enableGestures() {
    this.onCustomDragUp(this.dragUpCustomHandler);
    this.onCustomDragStart(this.dragStartCustomHandler);
    this.onCustomSwipeUp(this.swipeUpCustomHandler);
    this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.onCustomSwipeDown(this.swipeDownCustomHandler);
    this.onCustomSwipeRight(this.swipeRightCustomHandler);
  }

  disableGestures() {
    this.offCustomDragUp(this.dragUpCustomHandler);
    this.offCustomDragStart(this.dragStartCustomHandler);
    this.offCustomSwipeUp(this.swipeUpCustomHandler);
    this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.offCustomSwipeDown(this.swipeDownCustomHandler);
    this.offCustomSwipeRight(this.swipeRightCustomHandler);
  }

  getAnimationFrame() {
    const { animationFrame } = this.getState();

    return animationFrame;
  }

  getStartScrollTop() {
    const { startScrollTop } = this.getState();

    return startScrollTop;
  }

  getStartScrollLeft() {
    const { startScrollLeft } = this.getState();

    return startScrollLeft;
  }

  setAnimationFrame(animationFrame) {
    this.updateState({
      animationFrame
    });
  }

  setStartScrollTop(startScrollTop) {
    this.updateState({
      startScrollTop
    });
  }

  setStartScrollLeft(startScrollLeft) {
    this.updateState({
      startScrollLeft
    });
  }

  setInitialState() {
    const animationFrame = null,
          startScrollTop = null,
          startScrollLeft = null;

    this.setState({
      animationFrame,
      startScrollTop,
      startScrollLeft
    });
  }

  didMount() {
    this.enableTouch();

    this.enableGestures();

    this.onResize(this.resizeHandler, this);

    window.onKeyDown(this.keyDownHandler);
  }

  willUnmount() {
    this.disableTouch();

    this.disableGestures();

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


Object.assign(View.prototype, touchMixins);
Object.assign(View.prototype, fullScreenMixins);

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
  }
    
`;

// this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);
//
// this.onCustomSingleTap(this.singleTapCustomHandler);
//
// this.enableFullScreen();
//
// this.disableFullScreen();
//
// this.offCustomSingleTap(this.singleTapCustomHandler);
//
// this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
//
// fullScreenChangeCustomHandler = (event, element) => {
//   this.updateZoom();
// }
//
// singleTapCustomHandler = (event, element, top, left) => {
//   ///
// }
//
// doubleTapCustomHandler = (event, element, top, left) => {
//   const fullScreen = this.isFullScreen();
//
//   if (fullScreen) {
//     controller.exitFullScreen();
//
//     return;
//   }
// }
//
// pinchStartCustomHandler = (event, element) => {
//   const zoom = getZoom(),
//         startZoom = zoom; ///
//
//   this.setStartZoom(startZoom);
// }
//
// pinchMoveCustomHandler = (event, element, ratio) => {
//   const startZoom = this.getStartZoom(),
//         zoom = startZoom * Math.sqrt(ratio);  ///
//
//   controller.zoom(zoom);
// }
//
// enterFullScreen() {
//   this.requestFullScreen();
// }
//
// enableGestures() {
//   this.onCustomSwipeUp(this.swipeUpCustomHandler);
//   this.onCustomSwipeDown(this.swipeDownCustomHandler);
//   this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
//   this.onCustomSwipeRight(this.swipeRightCustomHandler);
//   this.onCustomPinchMove(this.pinchMoveCustomHandler);
//   this.onCustomPinchStart(this.pinchStartCustomHandler);
//   this.onCustomDoubleTap(this.doubleTapCustomHandler);
// }
//
// disableGestures() {
//   this.offCustomDragUp(this.dragUpCustomHandler);
//   this.offCustomDrag(this.dragCustomHandler);
//   this.offCustomDragStart(this.dragStartCustomHandler);
//   this.offCustomSwipeUp(this.swipeUpCustomHandler);
//   this.offCustomSwipeDown(this.swipeDownCustomHandler);
//   this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
//   this.offCustomSwipeRight(this.swipeRightCustomHandler);
//   this.offCustomPinchMove(this.pinchMoveCustomHandler);
//   this.offCustomPinchStart(this.pinchStartCustomHandler);
//   this.offCustomDoubleTap(this.doubleTapCustomHandler);
// }
//
// getStartZoom() {
//   const { startZoom } = this.getState();
//
//   return startZoom;
// }
//
// setStartZoom(startZoom) {
//   this.updateState({
//     startZoom
//   });
// }
//
