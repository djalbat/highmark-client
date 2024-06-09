"use strict";

import { DIV_SELECTOR } from "../selectors";
import { EMPTY_STRING } from "../constants";

export function elementsFromDOMElements(domElements, Element) {
  const elements = domElements.map((domElement) => {
    const element = elementFromDOMElement(domElement, Element);

    return element;
  });

  return elements;
}

export function elementFromDOMElement(domElement, Element) {
  const element =

          <Element/>

        ,
        className = classNameFromElement(element);

  addClassNameToDOMElement(domElement, className)

  element.domElement = domElement;  ///

  domElement.__element__ = element; ///

  return element;
}

export function findDivByAnchorId(anchorId) {
  const selector = DIV_SELECTOR,
        anchorDOMElement = findAnchorDOMElement(anchorId),
        divDOMElement = anchorDOMElement.closest(selector);

  const { __element__: div } = divDOMElement;

  return div;
}

export function scrollToAnchor(anchorId) {
  const anchorDOMElement = findAnchorDOMElement(anchorId);

  anchorDOMElement.scrollIntoView();
}

function findAnchorDOMElement(anchorId) {
  const selector = `a#${anchorId}`,
        anchorDOMElement = document.querySelector(selector);

  return anchorDOMElement;
}

function classNameFromElement(element) {
  const domElement = element.getDOMElement(),
        { className } = domElement;

  return className;
}

function addClassNameToDOMElement(domElement, className) {
  if (className === EMPTY_STRING) {
    return;
  }

  const { classList } = domElement;

  classList.add(className);
}
