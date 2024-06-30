"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { resetFragment } from "fragmented";
import { touchMixins, fullScreenMixins, fullScreenUtilities } from "easy-mobile";

import DivisionDiv from "../div/division";

import { DIVISION_DIVS_SELECTOR } from "../../selectors";
import { elementsFromDOMElements } from "../../utilities/element";
import { PREVIEW_IMAGE_CUSTOM_EVENT_TYPE } from "../../customEventTypes";
import { scrollToAnchor, findDivByAnchorId } from "../../utilities/element";
import { getDivisionsZoom as getZoom, areColoursInverted, areNativeGesturesRestored } from "../../state";
import { EMPTY_STRING,
         SCROLL_DELAY,
         UP_DIRECTION,
         DECELERATION,
         DOWN_DIRECTION,
         OPEN_MENU_TAP_AREA_HEIGHT } from "../../constants";

const { isFullScreen } = fullScreenUtilities;

const divisionDivDOMElements = [ ...document.querySelectorAll(DIVISION_DIVS_SELECTOR) ]; ///

divisionDivDOMElements.forEach((divisionDivDOMElement) => {
  divisionDivDOMElement.remove();
});

class DivisionsDiv extends Element {
  fullScreenChangeCustomHandler = (event, element) => {
    controller.updateFullScreen();

    this.updateDivisionsZoom();
  }

  singleTapCustomHandler = (event, element, top, left) => {
    const fullScreen = isFullScreen();

    if (!fullScreen) {
      const showingDivisionDiv = this.findShowingDivisionDiv(),
            image = showingDivisionDiv.findImageByTopAndLeft(top, left);

      if (image !== null) {
        this.previewImage(event, element, image);

        return;
      }
    }

    const height = this.getHeight(),
          bottom = height - top;

    if (bottom < OPEN_MENU_TAP_AREA_HEIGHT) {
      controller.openMenu();
    }
  }

  doubleTapCustomHandler = (event, element, top, left) => {
    const fullScreen = isFullScreen();

    if (fullScreen) {
      controller.exitFullScreen();

      return;
    }

    const nativeGesturesRestored = areNativeGesturesRestored();

    nativeGesturesRestored ?
      controller.suppressNativeGestures() :
        controller.restoreNativeGestures();
  }

  pinchStartCustomHandler = (event, element) => {
    const zoom = getZoom(),
          startZoom = zoom; ///

    this.setStartZoom(startZoom);
  }

  pinchMoveCustomHandler = (event, element, ratio) => {
    const startZoom = this.getStartZoom(),
          divisionsZoom = startZoom * Math.sqrt(ratio);  ///

    controller.zoomDivisions(divisionsZoom);
  }

  swipeRightCustomHandler = (event, element, top, left, spped) => {
    this.showLeftDivisionDiv();
  }

  swipeLeftCustomHandler = (event, element, top, left, spped) => {
    this.showRightDivisionDiv();
  }

  swipeDownCustomHandler = (event, element, top, left, speed) => {
    const direction = DOWN_DIRECTION;

    this.startScrolling(speed, direction);
  }

  swipeUpCustomHandler = (event, element, top, left, speed) => {
    const direction = UP_DIRECTION;

    this.startScrolling(speed, direction);
  }

  dragStartCustomHandler = (event, element, top, left) => {
    const scrollTop = this.getScrollTop(),
          startScrollTop = scrollTop; ///

    this.setStartScrollTop(startScrollTop);
  }

  dragDownCustomHandler = (event, element, top, left) => {
    const startScrollTop = this.getStartScrollTop();

    if (startScrollTop === null) {
      return;
    }

    const scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);
  }

  dragUpCustomHandler = (event, element, top, left) => {
    const startScrollTop = this.getStartScrollTop();

    if (startScrollTop === null) {
      return;
    }

    const scrollTop = startScrollTop - top;

    this.setScrollTop(scrollTop);
  }

  scrollToTop() {
    const scrollTop = 0;

    this.setScrollTop(scrollTop);
  }

  stopScrolling() {
    let interval = this.getInterval();

    if (interval !== null) {
      clearInterval(interval);

      interval = null;

      this.setInterval(interval);
    }
  }

  scrollToAnchor(anchorId) {
    if (anchorId === EMPTY_STRING) {
      this.showFirstDivisionDiv();

      return;
    }

    let divisionDiv;

    divisionDiv = findDivByAnchorId(anchorId);  ///

    if (divisionDiv === null) {
      return;
    }

    const nextDivisionDiv = divisionDiv;  ///

    divisionDiv = this.findDivisionDiv();

    const previousDivisionDiv = divisionDiv,  ///
          divisionDivs = this.getDivisionDivs(),
          nextIndex = divisionDivs.indexOf(nextDivisionDiv),  ///
          previousIndex = divisionDivs.indexOf(previousDivisionDiv);  ///

    this.showNextDivisionDiv(nextIndex, previousIndex, () => {
      scrollToAnchor(anchorId);
    });
  }

  previewImage(event, element, image) {
    const customEventType = PREVIEW_IMAGE_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event, element, image);
  }

  startScrolling(speed, direction) {
    let scrollTop = this.getScrollTop();

    scrollTop += speed * SCROLL_DELAY;

    this.setScrollTop(scrollTop);

    let interval = this.getInterval();

    if (interval !== null) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      speed = speed - direction * DECELERATION;

      if ((speed * direction) < 0) {
        clearInterval(interval);

        interval = null;

        this.setInterval(interval);
      }

      let scrollTop = this.getScrollTop();

      scrollTop += speed * SCROLL_DELAY;

      this.setScrollTop(scrollTop);
    }, SCROLL_DELAY);

    this.setInterval(interval);
  }

  enterFullScreen() {
    this.requestFullScreen();
  }

  updateDivisionsZoom() {
    const divisionDiv = this.findDivisionDiv();

    if (divisionDiv !== null) {
      const zoom = getZoom();

      divisionDiv.zoom(zoom);
    }
  }

  updateDivisionsColours() {
    const coloursInverted = areColoursInverted();

    coloursInverted ?
      this.addClass("inverted-colours") :
        this.removeClass("inverted-colours");
  }

  updateNativeGestures() {
    const nativeGesturesRestored = areNativeGesturesRestored();

    nativeGesturesRestored ?
      this.addClass("native-gestures") :
        this.removeClass("native-gestures");

    nativeGesturesRestored ?
      this.disableCustomGestures() :
        this.enableCustomGestures();
  }

  enableCustomGestures() {
    let nativeGesturedEnabled = this.areNativeGesturesEnabled();

    if (nativeGesturedEnabled) {
      return;
    }

    this.onCustomDragUp(this.dragUpCustomHandler);
    this.onCustomDragDown(this.dragDownCustomHandler);
    this.onCustomDragStart(this.dragStartCustomHandler);
    this.onCustomSwipeUp(this.swipeUpCustomHandler);
    this.onCustomSwipeDown(this.swipeDownCustomHandler);
    this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.onCustomSwipeRight(this.swipeRightCustomHandler);
    this.onCustomPinchMove(this.pinchMoveCustomHandler);
    this.onCustomPinchStart(this.pinchStartCustomHandler);
    this.onCustomDoubleTap(this.doubleTapCustomHandler);

    nativeGesturedEnabled = true;

    this.setNativeGesturesEnabled(nativeGesturedEnabled);
  }

  disableCustomGestures() {
    let nativeGesturedEnabled = this.areNativeGesturesEnabled();

    if (!nativeGesturedEnabled) {
      return;
    }

    this.offCustomDragUp(this.dragUpCustomHandler);
    this.offCustomDragDown(this.dragDownCustomHandler);
    this.offCustomDragStart(this.dragStartCustomHandler);
    this.offCustomSwipeUp(this.swipeUpCustomHandler);
    this.offCustomSwipeDown(this.swipeDownCustomHandler);
    this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
    this.offCustomSwipeRight(this.swipeRightCustomHandler);
    this.offCustomPinchMove(this.pinchMoveCustomHandler);
    this.offCustomPinchStart(this.pinchStartCustomHandler);
    this.offCustomDoubleTap(this.doubleTapCustomHandler);

    nativeGesturedEnabled = false;

    this.setNativeGesturesEnabled(nativeGesturedEnabled);
  }

  areNativeGesturesRestored() {
    const nativeGesturesRestored = this.hasClass("native-gestures");

    return nativeGesturesRestored;
  }

  showRightDivisionDiv() {
    const divisionDivs = this.getDivisionDivs(),
          divisionDiv = this.findDivisionDiv(),
          divsLength = divisionDivs.length,
          index = divisionDivs.indexOf(divisionDiv),
          nextIndex = index + 1,
          previousIndex = index;  ///

    if (nextIndex === divsLength) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showLeftDivisionDiv() {
    const divisionDiv = this.findDivisionDiv(),
          divisionDivs = this.getDivisionDivs(),
          index = divisionDivs.indexOf(divisionDiv),
          nextIndex = index - 1,
          previousIndex = index;  ///

    if (nextIndex === -1) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showLastDivisionDiv() {
    const divisionDivs = this.getDivisionDivs(),
          divisionDiv = this.findDivisionDiv(),
          divsLength = divisionDivs.length,
          index = (divisionDiv === null) ?
                    -1 :
                      divisionDivs.indexOf(divisionDiv),
          nextIndex = divsLength - 1,
          previousIndex = index;  ///

    if (nextIndex === previousIndex) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showFirstDivisionDiv() {
    const divisionDivs = this.getDivisionDivs(),
          divisionDiv = this.findDivisionDiv(),
          index = (divisionDiv === null) ?
                    -1 :
                      divisionDivs.indexOf(divisionDiv),
          nextIndex = 0,
          previousIndex = index;  ///

    if (nextIndex === previousIndex) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showNextDivisionDiv(nextIndex, previousIndex, done = () => {}) {
    resetFragment();

    const divisionDivs = this.getDivisionDivs();

    if (previousIndex !== -1) {
      const previousDivisionDiv = divisionDivs[previousIndex];

      previousDivisionDiv.hide();
    }

    const zoom = getZoom(),
          nextDivisionDiv = divisionDivs[nextIndex];

    this.stopScrolling();

    this.scrollToTop();

    nextDivisionDiv.zoom(zoom);

    nextDivisionDiv.show();

    defer(() => {
      const backgroundColour = nextDivisionDiv.getBackgroundColour();

      this.setBackgroundColour(backgroundColour);

      done();
    });
  }

  findShowingDivisionDiv() {
    const divisionDivs = this.getDivisionDivs(),
          showingDivisionDiv = divisionDivs.find((divisionDiv) => {
            const divShowing = divisionDiv.isShowing();

            if (divShowing) {
              return true;
            }
          }) || null;

    return showingDivisionDiv;
  }

  setBackgroundColour(backgroundColour) {
    const backgroundColor = backgroundColour, ///
          css = {
            backgroundColor
          };

    this.css(css);
  }

  findDivisionDiv() {
    const divisionDivs = this.getDivisionDivs(),
          divisionDiv = divisionDivs.find((divisionDiv) => {
            const showing = divisionDiv.isShowing();

            if (showing) {
              return true;
            }
          }) || null;

    return divisionDiv;
  }

  getDivisionDivs() {
    const childElements = this.getChildElements(),
          divisionDivs = [
            ...childElements
          ];

    return divisionDivs;
  }

  getInterval() {
    const { interval } = this.getState();

    return interval;
  }

  setInterval(interval) {
    this.updateState({
      interval
    });
  }

  getStartZoom() {
    const { startZoom } = this.getState();

    return startZoom;
  }

  setStartZoom(startZoom) {
    this.updateState({
      startZoom
    });
  }

  getStartScrollTop() {
    const { startScrollTop } = this.getState();

    return startScrollTop;
  }

  setStartScrollTop(startScrollTop) {
    this.updateState({
      startScrollTop
    });
  }

  areNativeGesturesEnabled() {
    const { nativeGesturesEnabled } = this.getState();

    return nativeGesturesEnabled;
  }

  setNativeGesturesEnabled(nativeGesturesEnabled) {
    this.updateState({
      nativeGesturesEnabled
    });
  }

  setInitialState() {
    const interval = null,
          startZoom = null,
          startScrollTop = null,
          nativeGesturesEnabled = false;

    this.setState({
      interval,
      startZoom,
      startScrollTop,
      nativeGesturesEnabled
    });
  }

  didMount() {
    this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);

    this.onCustomSingleTap(this.singleTapCustomHandler);

    this.enableFullScreen();

    this.enableTouch();
  }

  willUnmount() {
    this.disableTouch();

    this.disableFullScreen();

    this.offCustomSingleTap(this.singleTapCustomHandler);

    this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
  }

  childElements() {
    const divisionDivs = elementsFromDOMElements(divisionDivDOMElements, DivisionDiv),
          childElements = [
            ...divisionDivs
          ];

    return childElements;
  }

  parentContext() {
    const showDivisionsDiv = this.show.bind(this),  ///
          scrollToAnchor = this.scrollToAnchor.bind(this),
          exitFullScreen = this.exitFullScreen.bind(this),
          enterFullScreen = this.enterFullScreen.bind(this),
          showLastDivisionDiv = this.showLastDivisionDiv.bind(this),
          showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this),
          showRightDivisionDiv = this.showRightDivisionDiv.bind(this),
          showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this),
          updateDivisionsZoom = this.updateDivisionsZoom.bind(this),
          updateNativeGestures = this.updateNativeGestures.bind(this),
          updateDivisionsColours = this.updateDivisionsColours.bind(this);

    return ({
      showDivisionsDiv,
      scrollToAnchor,
      exitFullScreen,
      enterFullScreen,
      showLastDivisionDiv,
      showLeftDivisionDiv,
      showRightDivisionDiv,
      showFirstDivisionDiv,
      updateDivisionsZoom,
      updateNativeGestures,
      updateDivisionsColours
    });
  }

  initialise() {
    this.hide();

    this.assignContext();

    this.setInitialState();
  }

  static tagName = "div";

  static ignoredProperties = [];

  static defaultProperties = {
    className: "divisions"
  };
}

Object.assign(DivisionsDiv.prototype, touchMixins);
Object.assign(DivisionsDiv.prototype, fullScreenMixins);

export default withStyle(DivisionsDiv)`
  
  width: 100%;
  height: 100%;

  overflow: hidden;
  touch-action: none;
    
  .native-gestures {
    overflow: scroll;
    touch-action: auto;
  }
  
  .inverted-colours {
    filter: invert(1);
  }
    
`;

function defer(func) {
  setTimeout(func, 0);
}
