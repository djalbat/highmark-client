"use strict";

import { DIV_SELECTOR } from "../selectors";
import { EMPTY_STRING, INDEX_PREPEND } from "../constants";

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
  let div = null;

  const anchorDOMElement = findAnchorDOMElement(anchorId);

  if (anchorDOMElement !== null) {
    let divDOMElement;

    const anchorIdIndexAnchorId = isAnchorIdIndexAnchorId(anchorId);

    if (anchorIdIndexAnchorId) {
      const nextDOMElement = findNextDOMElement(anchorDOMElement);

      divDOMElement = nextDOMElement; ///
    } else {
      const selector = DIV_SELECTOR,
            ancestorDOMElement = findAncestorDOMElement(anchorDOMElement, selector);

      divDOMElement = ancestorDOMElement; ///
    }

    if (divDOMElement !== null) {
      ({ __element__: div = null } = divDOMElement);
    }
  }

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

function findNextDOMElement(domElement) {
  let nextDOMElement = null;

  const { nextSibling } = domElement;

  if (nextSibling !== null) {
    const { nodeType } = nextSibling;

    if (nodeType === Node.ELEMENT_NODE) {
      nextDOMElement = nextSibling; ///
    } else {
      domElement = nextSibling; ///

      nextDOMElement = findNextDOMElement(domElement);
    }
  }

  return nextDOMElement;
}

function classNameFromElement(element) {
  const domElement = element.getDOMElement(),
        { className } = domElement;

  return className;
}

function findAncestorDOMElement(domElement, selector) {
  const ancestorDOMElement = domElement.closest(selector);

  return ancestorDOMElement;
}

function isAnchorIdIndexAnchorId(anchorId) {
  const anchorIdIncludesIndexPrepend = anchorId.includes(INDEX_PREPEND),
        anchorIdIndexAnchorId = anchorIdIncludesIndexPrepend; ///

  return anchorIdIndexAnchorId;
}

function addClassNameToDOMElement(domElement, className) {
  if (className === EMPTY_STRING) {
    return;
  }

  const { classList } = domElement;

  classList.add(className);
}
