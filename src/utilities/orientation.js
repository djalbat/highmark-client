"use strict";

import { eventTypes } from "easy";

import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION, ORIENTATION_PORTRAIT_QUERY } from "../constants";

const { CHANGE_EVENT_TYPE } = eventTypes;

const mediaQueryList = matchMedia(ORIENTATION_PORTRAIT_QUERY);

export function getOrientation() {
  const { matches } = mediaQueryList,
        orientation = orientationFromMatches(matches);

  return orientation;
}

export function onOrientationChange(handler) {
  const eventType = CHANGE_EVENT_TYPE;

  mediaQueryList.addEventListener(eventType, (event) => {
    const { matches } = event,
          orientation = orientationFromMatches(matches);

    handler(orientation);
  });
}

function orientationFromMatches(matches) {
  const orientation = matches ?
                        PORTRAIT_ORIENTATION :
                          LANDSCAPE_ORIENTATION;

  return orientation;
}