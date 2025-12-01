"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import DivisionDiv from "../div/division";

import { removeDOMElement, removeDOMElements, elementsFromDOMElements } from "../../utilities/element";
import { ANCHOR_HREF_SELECTOR, DOCUMENT_DIV_SELECTOR, DIVISION_DIVS_SELECTOR } from "../../selectors";
import { HASH, HREF, EMPTY_STRING, TRANSFORM, BLANK_TARGET, TRANSFORM_ORIGIN, TOP_LEFT_TRANSFORM_ORIGIN } from "../../constants";
import { scrollToAnchor, findDivisionDivByAnchorId, isAnchorIdIndexAnchorId, pageNumberFromIndexAnchorId } from "../../utilities/anchor";

const divisionDivDOMElements = removeDOMElements(DIVISION_DIVS_SELECTOR),
      divisionDivs = elementsFromDOMElements(divisionDivDOMElements, DivisionDiv);

removeDOMElement(DOCUMENT_DIV_SELECTOR);

class DocumentDiv extends Element {
  clickHandler = (event, element) => {
    const { target } = event,
          link = target.closest(ANCHOR_HREF_SELECTOR);

    if (link === null) {
      return;
    }

    const href = link.getAttribute(HREF);

    if (href === EMPTY_STRING) {
      return;
    }

    event.preventDefault();

    const hrefStartsWithHash = href.startsWith(HASH),
          linkExternal = !hrefStartsWithHash;

    if (linkExternal) {
      const target = BLANK_TARGET;

      window.open(href, target);

      return;
    }

    const anchorId = href.substring(1); ///

    this.goToAnchor(anchorId);
  }

  scale(documentScale, previewPaneInnerWidth, previewPaneInnerHeight) {
    const scale = documentScale,  ///
          width = this.getWidth(),
          height = this.getHeight(),
          scaledWidth = width * scale,
          scaledHeight = height * scale,
          translateX = (scaledWidth < previewPaneInnerWidth) ?
                         (previewPaneInnerWidth - scaledWidth) / 2 :
                           0,
          translateY = (scaledHeight < previewPaneInnerHeight) ?
                         (previewPaneInnerHeight - scaledHeight) / 2 :
                           0,
          transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`,
          transformOrigin = TOP_LEFT_TRANSFORM_ORIGIN;

    this.style(TRANSFORM, transform);

    this.style(TRANSFORM_ORIGIN, transformOrigin);
  }

  goToAnchor(anchorId) {
    const anchorIdIndexAnchorId = isAnchorIdIndexAnchorId(anchorId);

    if (anchorIdIndexAnchorId) {
      const indexAnchorId = anchorId; ///

      this.showDivisionDivByIndexAnchorId(indexAnchorId);

      return;
    }

    this.showDivisionDivByAnchorId(anchorId);
  }

  showLeftDivisionDiv() {
    const showingDivisionDiv = this.findShowingDivisionDiv(),
          divisionDivs = this.getDivisionDivs(),
          index = divisionDivs.indexOf(showingDivisionDiv),
          nextIndex = index - 1,
          previousIndex = index;  ///

    if (nextIndex === -1) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showLastDivisionDiv() {
    const divisionDivs = this.getDivisionDivs(),
          showingDivisionDiv = this.findShowingDivisionDiv(),
          divsLength = divisionDivs.length,
          index = (showingDivisionDiv === null) ?
                    -1 :
                      divisionDivs.indexOf(showingDivisionDiv),
          nextIndex = divsLength - 1,
          previousIndex = index;  ///

    if (nextIndex === previousIndex) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showFirstDivisionDiv() {
    const divisionDivs = this.getDivisionDivs(),
          showingDivisionDiv = this.findShowingDivisionDiv(),
          index = (showingDivisionDiv === null) ?
                    -1 :
                      divisionDivs.indexOf(showingDivisionDiv),
          nextIndex = 0,
          previousIndex = index;  ///

    if (nextIndex === previousIndex) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showRightDivisionDiv() {
    const divisionDivs = this.getDivisionDivs(),
          showingDivisionDiv = this.findShowingDivisionDiv(),
          divsLength = divisionDivs.length,
          index = divisionDivs.indexOf(showingDivisionDiv),
          nextIndex = index + 1,
          previousIndex = index;  ///

    if (nextIndex === divsLength) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  showNextDivisionDiv(nextIndex, previousIndex) {
    const divisionDivs = this.getDivisionDivs();

    if (previousIndex !== -1) {
      const previousDivisionDiv = divisionDivs[previousIndex];

      previousDivisionDiv.hide();
    }

    const nextDivisionDiv = divisionDivs[nextIndex];

    nextDivisionDiv.show();
  }

  showDivisionDivByAnchorId(anchorId) {
    let divisionDiv;

    divisionDiv = findDivisionDivByAnchorId(anchorId);  ///

    if (divisionDiv === null) {
      return;
    }

    const divisionDivs = this.getDivisionDivs(),
          showingDivisionDiv = this.findShowingDivisionDiv(),
          nextDivisionDiv = divisionDiv,  ///
          previousDivisionDiv = showingDivisionDiv,  ///
          nextIndex = divisionDivs.indexOf(nextDivisionDiv),  ///
          previousIndex = divisionDivs.indexOf(previousDivisionDiv);  ///

    this.showNextDivisionDiv(nextIndex, previousIndex);

    scrollToAnchor(anchorId);
  }

  showDivisionDivByIndexAnchorId(indexAnchorId) {
    const divisionDivs = this.getDivisionDivs(),
          showingDivisionDiv = this.findShowingDivisionDiv(),
          divsLength = divisionDivs.length,
          pageNumber = pageNumberFromIndexAnchorId(indexAnchorId),
          index = divisionDivs.indexOf(showingDivisionDiv),
          nextIndex = pageNumber - 1,
          previousIndex = index;  ///

    if (nextIndex === divsLength) {
      return;
    }

    this.showNextDivisionDiv(nextIndex, previousIndex);
  }

  findShowingDivisionDiv() {
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

  didMount() {
    this.onClick(this.clickHandler);

    this.showFirstDivisionDiv();
  }

  willUnmount() {
    this.offClick(this.clickHandler);
  }

  childElements() {
    const childElements = divisionDivs; ///

    return childElements;
  }

  parentContext() {
    const scaleDocumentDiv = this.scale.bind(this), ///
          getDocumentDivWidth = this.getWidth.bind(this), ///
          getDocumentDivHeight = this.getHeight.bind(this), ///
          showLeftDivisionDiv = this.showLeftDivisionDiv.bind(this),
          showLastDivisionDiv = this.showLastDivisionDiv.bind(this),
          showFirstDivisionDiv = this.showFirstDivisionDiv.bind(this),
          showRightDivisionDiv = this.showRightDivisionDiv.bind(this);

    return ({
      scaleDocumentDiv,
      getDocumentDivWidth,
      getDocumentDivHeight,
      showLeftDivisionDiv,
      showLastDivisionDiv,
      showFirstDivisionDiv,
      showRightDivisionDiv
    });
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static ignoredProperties = [];

  static defaultProperties = {
    className: "document"
  };
}

export default withStyle(DocumentDiv)`
  
  width: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  
  .presentation {
    width: 100%;
    height: 100%;
    align-items: stretch;
  }
  
`;
