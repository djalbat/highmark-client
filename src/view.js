"use strict";

import withStyle from "easy-with-style";  ///

import { keyCodes } from "necessary";
import { Element, window } from "easy";
import { touchMixins, fullScreenMixins } from "easy-mobile";
import { scrollbarMixin, previewPaneScheme } from "occam-styles";

import MenuDiv from "./view/div/menu";
import DocumentDiv from "./view/div/document";

import { getScale, setScale } from "./state";
import { ANCHOR_HREF_SELECTOR } from "./selectors";
import { HREF,
         HASH,
         EMPTY_STRING,
         BLANK_TARGET,
         UP_DIRECTION,
         LEFT_DIRECTION,
         DOWN_DIRECTION,
         RIGHT_DIRECTION,
         SCROLL_TOP_DELTA,
         SCROLL_SPEED_DELTA } from "./constants";

const { backgroundColour, scrollbarThumbBackgroundColour, scrollbarTrackBackgroundColour, scrollbarCornerBackgroundColour } = previewPaneScheme,
      { ENTER_KEY_CODE,
        ESCAPE_KEY_CODE,
        ARROW_UP_KEY_CODE,
        BACKSPACE_KEY_CODE,
        ARROW_DOWN_KEY_CODE,
        ARROW_LEFT_KEY_CODE,
        ARROW_RIGHT_KEY_CODE } = keyCodes;

class View extends Element {
  singleTapCustomHandler = (event, element, top, left) => {
    const link = this.goToLink(event, element);

    if (link !== null) {
      return;
    }

    this.toggleMenuDiv();
  }

  doubleTapCustomHandler = (event, element, top, left) => {
    const scale = 1;

    setScale(scale);

    this.zoom();
  }

  pinchStartCustomHandler = (event, element) => {
    const scale = getScale(),
          startScale = scale; ///

    this.setScale(scale);

    this.setStartScale(startScale);
  }

  pinchStopCustomHandler = (event, element) => {
    const scale = this.getScale();

    setScale(scale);
  }

  pinchMoveCustomHandler = (event, element, ratio) => {
    const startScale = this.getStartScale(),
          scale = startScale * Math.sqrt(ratio);

    this.setScale(scale);

    this.zoom(scale);
  }

  swipeRightCustomHandler = (event, element, top, left, speed) => {
    this.stopScrolling();

    const scrollHorizontally = this.canScrollHorizontally(),
          scrollLeft = this.getScrollLeft(),
          scrolledLeft = scrollLeft <= 1,
          noScrollLeft = !scrollHorizontally;

    if (scrolledLeft || noScrollLeft) {
      this.showLeftDivisionDiv();

      this.resetScrolling();

      this.zoom();

      return;
    }

    const scrollSpeed = speed,  ///
          direction = RIGHT_DIRECTION;

    this.startScrolling(scrollSpeed, direction);
  }

  swipeLeftCustomHandler = (event, element, top, left, speed) => {
    this.stopScrolling();

    const scrollHorizontally = this.canScrollHorizontally(),
          maximumScrollLeft = this.getMaximumScrollLeft(),
          scrollLeft = this.getScrollLeft(),
          scrolledRight = scrollLeft >= maximumScrollLeft - 1,
          noScrollRight = !scrollHorizontally;

    if (scrolledRight || noScrollRight) {
      this.showRightDivisionDiv();

      this.resetScrolling();

      this.zoom();

      return;
    }

    const scrollSpeed = speed,  ///
          direction = LEFT_DIRECTION;

    this.startScrolling(scrollSpeed, direction);
  }

  swipeDownCustomHandler = (event, element, top, left, speed) => {
    this.stopScrolling();

    const scrollVertically = this.canScrollVertically();

    if (!scrollVertically) {
      return;
    }

    const scrollSpeed = speed,  ///
          direction = DOWN_DIRECTION;

    this.startScrolling(scrollSpeed, direction);
  }

  swipeUpCustomHandler = (event, element, top, left, speed) => {
    this.stopScrolling();

    const scrollVertically = this.canScrollVertically();

    if (!scrollVertically) {
      return;
    }

    const scrollSpeed = speed,  ///
          direction = UP_DIRECTION;

    this.startScrolling(scrollSpeed, direction);
  }

  dragStartCustomHandler = (event, element, top, left) => {
    this.stopScrolling();

    let startScrollTop = null,
        startScrollLeft = null;

    const scrollVertically = this.canScrollVertically(),
          scrollHorizontally = this.canScrollHorizontally();

    if (scrollVertically) {
      const scrollTop = this.getScrollTop();

      startScrollTop = scrollTop; ///
    }

    if (scrollHorizontally) {
      const scrollLeft = this.getScrollLeft();

      startScrollLeft = scrollLeft; ///
    }

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

        this.zoom();

        break;
      }

      case ARROW_DOWN_KEY_CODE: {
        this.showLastDivisionDiv();

        this.resetScrolling();

        this.zoom();

        break;
      }

      case ENTER_KEY_CODE:
      case ARROW_RIGHT_KEY_CODE: {
        this.showRightDivisionDiv();

        this.resetScrolling();

        this.zoom();

        break;
      }

      case BACKSPACE_KEY_CODE:
      case ARROW_LEFT_KEY_CODE: {
        this.showLeftDivisionDiv();

        this.resetScrolling();

        this.zoom();

        break;
      }
    }
  }

  resizeHandler = (event, element) => {
    this.zoom();
  }

  goToLink(event, element) {
    const { target } = event,
          link = target.closest(ANCHOR_HREF_SELECTOR);

    if (link !== null) {
      const href = link.getAttribute(HREF);

      if (href === EMPTY_STRING) {
        return;
      }

      const hrefStartsWithHash = href.startsWith(HASH),
            linkExternal = !hrefStartsWithHash;

      if (linkExternal) {
        const target = BLANK_TARGET;

        window.open(href, target);
      } else {
        const anchorId = href.substring(1); ///

        this.goToAnchor(anchorId);

        this.resetScrolling();

        this.zoom();
      }
    }

    return link;
  }

  zoom(scale = null) {
    if (scale === null) {
      scale = getScale();
    }

    const innerWidth = this.getInnerWidth(),
          innerHeight = this.getInnerHeight(),
          documentScale = scale, ///
          viewInnerWidth = innerWidth, ///
          viewInnerHeight = innerHeight; ///

    this.scaleDocumentDiv(documentScale, viewInnerWidth, viewInnerHeight);
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

  canScrollVertically() {
    const scale = getScale(),
          innerHeight = this.getInnerHeight(),
          documentDivHeight = this.getDocumentDivHeight(),
          scaledDocumentDivHeight = documentDivHeight * scale,
          scrollVertically = scaledDocumentDivHeight > innerHeight;

    return scrollVertically;
  }

  canScrollHorizontally() {
    const scale = getScale(),
          innerWidth = this.getInnerWidth(),
          documentDivWidth = this.getDocumentDivWidth(),
          scaledDocumentDivWidth = documentDivWidth * scale,
          scrollHorizontally = scaledDocumentDivWidth > innerWidth;

    return scrollHorizontally;
  }

  getScale() {
    const { scale } = this.getState();

    return scale;
  }

  getStartScale() {
    const { startScale } = this.getState();

    return startScale;
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

  setScale(scale) {
    this.updateState({
      scale
    });
  }

  setStartScale(startScale) {
    this.updateState({
      startScale
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
    const scale = null,
          startScale = null,
          animationFrame = null,
          startScrollTop = null,
          startScrollLeft = null;

    this.setState({
      scale,
      startScale,
      animationFrame,
      startScrollTop,
      startScrollLeft
    });
  }

  didMount() {
    this.enableTouch();

    this.onResize(this.resizeHandler);

    window.onKeyDown(this.keyDownHandler);

    this.onCustomDragUp(this.dragUpCustomHandler);
    this.onCustomSwipeUp(this.swipeUpCustomHandler);
    this.onCustomDragLeft(this.dragLeftCustomHandler);
    this.onCustomDragDown(this.dragDownCustomHandler);
    this.onCustomSingleTap(this.singleTapCustomHandler);
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

  willUnmount() {
    this.disableTouch();

    this.offResize(this.resizeHandler);

    window.offKeyDown(this.keyDownHandler);

    this.offCustomDragUp(this.dragUpCustomHandler);
    this.offCustomSwipeUp(this.swipeUpCustomHandler);
    this.offCustomDragLeft(this.dragLeftCustomHandler);
    this.offCustomDragDown(this.dragDownCustomHandler);
    this.offCustomDoubleTap(this.doubleTapCustomHandler);
    this.offCustomSingleTap(this.singleTapCustomHandler);
    this.offCustomDragRight(this.dragRightCustomHandler);
    this.offCustomDragStart(this.dragStartCustomHandler);
    this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.offCustomSwipeDown(this.swipeDownCustomHandler);
    this.offCustomPinchMove(this.pinchMoveCustomHandler);
    this.offCustomPinchStop(this.pinchStopCustomHandler);
    this.offCustomPinchStart(this.pinchStartCustomHandler);
    this.offCustomSwipeRight(this.swipeRightCustomHandler);
  }

  childElements() {
    const resizeHandler = this.resizeHandler.bind(this);

    return ([

      <MenuDiv/>,
      <DocumentDiv resizeHandler={resizeHandler} />

    ]);
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
// this.enableFullScreen();
//
// this.disableFullScreen();
//
// this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
//
// fullScreenChangeCustomHandler = (event, element) => {
//   this.zoom();
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
