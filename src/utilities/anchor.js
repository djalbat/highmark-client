"use strict";

import { arrayUtilities } from "necessary";

import { DIV_SELECTOR } from "../selectors";
import { INDEX_PREPEND } from "../constants";

const { second } = arrayUtilities;

export function scrollToAnchor(anchorId) {
  const anchorDOMElement = findAnchorDOMElement(anchorId);

  anchorDOMElement.scrollIntoView();
}

export function isAnchorIdIndexAnchorId(anchorId) {
  const anchorIdStartsWithIndexPrepend = anchorId.startsWith(INDEX_PREPEND),
        anchorIdIndexAnchorId = anchorIdStartsWithIndexPrepend; ///

  return anchorIdIndexAnchorId;
}

export function findDivisionDivByAnchorId(anchorId) {
  let divisionDiv = null;

  const anchorDOMElement = findAnchorDOMElement(anchorId);

  if (anchorDOMElement !== null) {
    const selector = DIV_SELECTOR,
          ancestorDOMElement = findAncestorDOMElement(anchorDOMElement, selector);

    if (ancestorDOMElement !== null) {
      const divDOMElement = ancestorDOMElement; ///

      ({ __element__: divisionDiv = null } = divDOMElement);
    }
  }

  return divisionDiv;
}

export function pageNumberFromIndexAnchorId(anchorId) {
  const matches = anchorId.match(/^index-(\d+)$/),
        secondMatch = second(matches),
        pageNumber = Number(secondMatch);

  return pageNumber;
}

function findAnchorDOMElement(anchorId) {
  const selector = `a#${anchorId}`,
        anchorDOMElement = document.querySelector(selector);

  return anchorDOMElement;
}

function findAncestorDOMElement(domElement, selector) {
  const ancestorDOMElement = domElement.closest(selector);

  return ancestorDOMElement;
}
