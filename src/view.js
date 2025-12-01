"use strict";

import withStyle from "easy-with-style";  ///

import { keyCodes } from "necessary";
import { Element, window } from "easy";
import { touchMixins, fullScreenMixins } from "easy-mobile";
import { scrollbarMixin, previewPaneScheme } from "occam-styles";

import DocumentDiv from "./view/div/document";

import { getZoom, setZoom } from "./state";
import { UP_DIRECTION, LEFT_DIRECTION, DOWN_DIRECTION, RIGHT_DIRECTION, SCROLL_TOP_DELTA, SCROLL_SPEED_DELTA } from "./constants";

const { backgroundColour, scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour } = previewPaneScheme,
      { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  pinchStartCustomHandler = (event, element) => {
    const zoom = getZoom(),
      startZoom = zoom; ///

    this.setStartZoom(startZoom);
  }

  pinchStopCustomHandler = (event, element) => {
    const noNudge = false;

    this.zoom(noNudge);
  }

  pinchMoveCustomHandler = (event, element, ratio) => {
    const startZoom = this.getStartZoom(),
          zoom = startZoom * Math.sqrt(ratio);  ///

    setZoom(zoom);

    const noNudge = true;

    this.zoom(noNudge);
  }

  doubleTapCustomHandler = (event, element, ratio) => {
    const zoom = 1;

    setZoom(zoom);

    const noNudge = false;

    this.zoom(noNudge);
  }

  swipeRightCustomHandler = (event, element, top, left, speed) => {
    const scrollLeft = this.getScrollLeft();

    if (scrollLeft <= 1) {
      this.showLeftDivisionDiv();

      this.resetScrolling();

      return;
    }

    const scrollSpeed = speed,  ///
          direction = RIGHT_DIRECTION;

    this.startScrolling(scrollSpeed, direction);
  }

  swipeLeftCustomHandler = (event, element, top, left, speed) => {
    const scrollLeft = this.getScrollLeft(),
          maximumScrollLeft = this.getMaximumScrollLeft();

    if (scrollLeft >= maximumScrollLeft - 1) {
      this.showRightDivisionDiv();

      this.resetScrolling();

      return;
    }

    const scrollSpeed = speed,  ///
          direction = LEFT_DIRECTION;

    this.startScrolling(scrollSpeed, direction);
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

  dragRightCustomHandler = (event, element, top, left) => {
    const startScrollLeft = this.getStartScrollLeft();

    if (startScrollLeft === null) {
      return;
    }

    const scrollLeft = startScrollLeft - left;

    this.setScrollLeft(scrollLeft);

    const startScrollTop = null;

    this.setStartScrollTop(startScrollTop);
  }

  dragDownCustomHandler = (event, element, top, left) => {
    const startScrollTop = this.getStartScrollTop();

    if (startScrollTop === null) {
      return;
    }

    const scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);

    const startScrollLeft = null;

    this.setStartScrollLeft(startScrollLeft);
  }

  dragLeftCustomHandler = (event, element, top, left) => {
    const startScrollLeft = this.getStartScrollLeft();

    if (startScrollLeft === null) {
      return;
    }

    const scrollLeft = startScrollLeft - left;

    this.setScrollLeft(scrollLeft);

    const startScrollTop = null;

    this.setStartScrollTop(startScrollTop);
  }

  dragUpCustomHandler = (event, element, top, left) => {
    const startScrollTop = this.getStartScrollTop();

    if (startScrollTop === null) {
      return;
    }

    const scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);

    const startScrollLeft = null;

    this.setStartScrollLeft(startScrollLeft);
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

        this.resetScrolling();

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.showLastDivisionDiv();

        this.resetScrolling();

        break;
      }

      case ENTER_KEY_CODE:
      case ARROW_RIGHT_KEY_CODE: {
        this.showRightDivisionDiv();

        this.resetScrolling();

        break;
      }

      case BACKSPACE_KEY_CODE:
      case ARROW_LEFT_KEY_CODE: {
        this.showLeftDivisionDiv();

        this.resetScrolling();

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

  scrollToLeft() {
    const scrollLeft = 0;

    this.setScrollLeft(scrollLeft);
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

    let now = performance.now(),
        then;

    then = now;  ///

    const step = (now) => {
      const timeDelta = now - then,
            scrollSpeedDelta = SCROLL_SPEED_DELTA * timeDelta;

      scrollSpeed = scrollSpeed - scrollSpeedDelta;

      if (scrollSpeed < 0) {
        this.stopScrolling();

        return;
      }

      const scrollDelta = scrollSpeed * SCROLL_TOP_DELTA * timeDelta;

      let scrollTop = this.getScrollTop(),
          scrollLeft = this.getScrollLeft();

      switch (direction) {
        case UP_DIRECTION: {
          scrollTop = scrollTop + scrollDelta;

          break;
        }

        case LEFT_DIRECTION: {
          scrollLeft = scrollLeft + scrollDelta;

          break;
        }

        case DOWN_DIRECTION: {
          scrollTop = scrollTop - scrollDelta;

          break;
        }

        case RIGHT_DIRECTION: {
          scrollLeft = scrollLeft - scrollDelta;

          break;
        }
      }

      then = now;  ///

      this.setScrollTop(scrollTop);

      this.setScrollLeft(scrollLeft);

      const animationFrame = requestAnimationFrame(step);

      this.setAnimationFrame(animationFrame);
    }

    const animationFrame = requestAnimationFrame(step);

    this.setAnimationFrame(animationFrame);
  }

  resetScrolling() {
    this.scrollToTop();
    this.scrollToLeft();
    this.stopScrolling();
  }

  getMaximumScrollTop() {
    const innerHeight = this.getInnerHeight(),
          scrollHeight = this.getScrollHeight(),
          maximumScrollTop = Math.max(0, scrollHeight - innerHeight);

    return maximumScrollTop;
  }

  getMaximumScrollLeft() {
    const innerWidth = this.getInnerWidth(),
          scrollWidth = this.getScrollWidth(),
          maximumScrollLeft = Math.max(0, scrollWidth - innerWidth);

    return maximumScrollLeft;
  }

  enableGestures() {
    this.onCustomDragUp(this.dragUpCustomHandler);
    this.onCustomSwipeUp(this.swipeUpCustomHandler);
    this.onCustomDragLeft(this.dragLeftCustomHandler);
    this.onCustomDragDown(this.dragDownCustomHandler);
    this.onCustomDoubleTap(this.doubleTapCustomHandler);
    this.onCustomDragRight(this.dragRightCustomHandler);
    this.onCustomDragStart(this.dragStartCustomHandler);
    this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.onCustomSwipeDown(this.swipeDownCustomHandler);
    this.onCustomPinchMove(this.pinchMoveCustomHandler);
    this.onCustomPinchStop(this.pinchStopCustomHandler);
    this.onCustomPinchStart(this.pinchStartCustomHandler);
    this.onCustomSwipeRight(this.swipeRightCustomHandler);
  }

  disableGestures() {
    this.offCustomDragUp(this.dragUpCustomHandler);
    this.offCustomSwipeUp(this.swipeUpCustomHandler);
    this.offCustomDragLeft(this.dragLeftCustomHandler);
    this.offCustomDragDown(this.dragDownCustomHandler);
    this.offCustomDoubleTap(this.doubleTapCustomHandler);
    this.offCustomDragRight(this.dragRightCustomHandler);
    this.offCustomDragStart(this.dragStartCustomHandler);
    this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.offCustomSwipeDown(this.swipeDownCustomHandler);
    this.offCustomPinchMove(this.pinchMoveCustomHandler);
    this.offCustomPinchStop(this.pinchStopCustomHandler);
    this.offCustomPinchStart(this.pinchStartCustomHandler);
    this.offCustomSwipeRight(this.swipeRightCustomHandler);
  }

  getStartZoom() {
    const { startZoom } = this.getState();

    return startZoom;
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

  setStartZoom(startZoom) {
    this.updateState({
      startZoom
    });
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
    const startZoom = null,
          animationFrame = null,
          startScrollTop = null,
          startScrollLeft = null;

    this.setState({
      startZoom,
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
// enterFullScreen() {
//   this.requestFullScreen();
// }
