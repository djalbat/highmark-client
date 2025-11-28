"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { resetFragment } from "fragmented";
import { touchMixins, fullScreenMixins } from "easy-mobile";

import DivisionDiv from "../div/division";

import { getZoom } from "../../state";
import { DOCUMENT_DIV_SELECTOR, DIVISION_DIVS_SELECTOR } from "../../selectors";
import { removeDOMElement, removeDOMElements, elementsFromDOMElements } from "../../utilities/element";
import { EMPTY_STRING, SCROLL_DELAY, UP_DIRECTION, DECELERATION, DOWN_DIRECTION } from "../../constants";
import { scrollToAnchor, findDivisionDivByAnchorId, isAnchorIdIndexAnchorId, pageNumberFromIndexAnchorId } from "../../utilities/anchor";

const divisionDivDOMElements = removeDOMElements(DIVISION_DIVS_SELECTOR),
      divisionDivs = elementsFromDOMElements(divisionDivDOMElements, DivisionDiv);

removeDOMElement(DOCUMENT_DIV_SELECTOR);

class DocumentDiv extends Element {
  fullScreenChangeCustomHandler = (event, element) => {
    controller.updateFullScreen();

    this.updateZoom();
  }

  singleTapCustomHandler = (event, element, top, left) => {
    ///
  }

  doubleTapCustomHandler = (event, element, top, left) => {
    const fullScreen = this.isFullScreen();

    if (fullScreen) {
      controller.exitFullScreen();

      return;
    }
  }

  pinchStartCustomHandler = (event, element) => {
    const zoom = getZoom(),
          startZoom = zoom; ///

    this.setStartZoom(startZoom);
  }

  pinchMoveCustomHandler = (event, element, ratio) => {
    const startZoom = this.getStartZoom(),
          zoom = startZoom * Math.sqrt(ratio);  ///

    controller.zoom(zoom);
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

  updateZoom() {
    const divisionDiv = this.findDivisionDiv();

    if (divisionDiv !== null) {
      const zoom = getZoom(),
            zoom = zoom; ///

      divisionDiv.zoom(zoom);
    }
  }

  enableCustomGestures() {
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
  }

  disableCustomGestures() {
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
  }

  goToAnchor(anchorId) {
    if (anchorId === EMPTY_STRING) {
      this.showFirstDivisionDiv();

      return;
    }

    const anchorIdIndexAnchorId = isAnchorIdIndexAnchorId(anchorId);

    if (anchorIdIndexAnchorId) {
      const indexAnchorId = anchorId; ///

      this.showDivisionDivByIndexAnchorId(indexAnchorId);

      return;
    }

    this.showDivisionDivByAnchorId(anchorId);
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

  showDivisionDivByAnchorId(anchorId) {
    let divisionDiv;

    divisionDiv = findDivisionDivByAnchorId(anchorId);  ///

    if (divisionDiv === null) {
      return;
    }

    const nextDivisionDiv = divisionDiv;  ///

    divisionDiv = this.findDivisionDiv();

    const previousDivisionDiv = divisionDiv,  ///
          divisionDivs = this.getDivisionDivs(),
          nextIndex = divisionDivs.indexOf(nextDivisionDiv),  ///
          previousIndex = divisionDivs.indexOf(previousDivisionDiv);  ///

    this.showNextDivisionDiv(nextIndex, previousIndex);

    scrollToAnchor(anchorId);
  }

  showDivisionDivByIndexAnchorId(indexAnchorId) {
    const divisionDivs = this.getDivisionDivs(),
          divisionDiv = this.findDivisionDiv(),
          divsLength = divisionDivs.length,
          pageNumber = pageNumberFromIndexAnchorId(indexAnchorId),
          index = divisionDivs.indexOf(divisionDiv),
          nextIndex = pageNumber - 1,
          previousIndex = index;  ///

    if (nextIndex === divsLength) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showNextDivisionDiv(nextIndex, previousIndex) {
    resetFragment();

    const divisionDivs = this.getDivisionDivs();

    if (previousIndex !== -1) {
      const previousDivisionDiv = divisionDivs[previousIndex];

      previousDivisionDiv.hide();
    }

    const nextDivisionDiv = divisionDivs[nextIndex],
          zoom = getZoom();

    this.stopScrolling();

    this.scrollToTop();

    nextDivisionDiv.zoom(zoom);

    nextDivisionDiv.show();
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

  getStartZoom() {
    const { startZoom } = this.getState();

    return startZoom;
  }

  getStartScrollTop() {
    const { startScrollTop } = this.getState();

    return startScrollTop;
  }

  setInterval(interval) {
    this.updateState({
      interval
    });
  }

  setStartZoom(startZoom) {
    this.updateState({
      startZoom
    });
  }

  setStartScrollTop(startScrollTop) {
    this.updateState({
      startScrollTop
    });
  }

  setInitialState() {
    const interval = null,
          startZoom = null,
          startScrollTop = null;

    this.setState({
      interval,
      startZoom,
      startScrollTop
    });
  }

  didMount() {
    this.onCustomFullScreenChange(this.fullScreenChangeCustomHandler);

    this.onCustomSingleTap(this.singleTapCustomHandler);

    this.enableFullScreen();

    this.enableTouch();

    this.showFirstDivisionDiv();
  }

  willUnmount() {
    this.disableTouch();

    this.disableFullScreen();

    this.offCustomSingleTap(this.singleTapCustomHandler);

    this.offCustomFullScreenChange(this.fullScreenChangeCustomHandler);
  }

  childElements() {
    const childElements = divisionDivs; ///

    return childElements;
  }

  parentContext() {
    const goToAnchor = this.goToAnchor.bind(this),  ///
          updateZoom = this.updateZoom.bind(this),
          exitFullScreen = this.exitFullScreen.bind(this),
          enterFullScreen = this.enterFullScreen.bind(this),
          showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this),
          showLastDivisionDiv = this.showLastDivisionDiv.bind(this),
          showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this),
          showRightDivisionDiv = this.showRightDivisionDiv.bind(this);

    return ({
      goToAnchor,
      updateZoom,
      exitFullScreen,
      enterFullScreen,
      showLeftDivisionDiv,
      showLastDivisionDiv,
      showFirstDivisionDiv,
      showRightDivisionDiv
    });
  }

  initialise() {
    this.assignContext();

    this.setInitialState();
  }

  static tagName = "div";

  static ignoredProperties = [];

  static defaultProperties = {
    className: "document"
  };
}

Object.assign(DocumentDiv.prototype, touchMixins);
Object.assign(DocumentDiv.prototype, fullScreenMixins);

export default withStyle(DocumentDiv)`
  
  width: 100%;
  height: 100%;

  overflow: hidden;
  touch-action: none;
  
`;

function defer(func) {
  setTimeout(func, 0);
}
