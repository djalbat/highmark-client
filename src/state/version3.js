"use strict";

import { VERSION_3 } from "../versions";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "../constants";

export function createState() {
  const version = VERSION_3,
        menuZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 0.5
        },
        divisionsZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        fullScreenDivisionsZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        overlayHidden = false,
        coloursInverted = false,
        nativeGesturesRestored = false,
        state = {
          version,
          menuZoom,
          overlayHidden,
          divisionsZoom,
          coloursInverted,
          nativeGesturesRestored,
          fullScreenDivisionsZoom
        };

  return state;
}

export function migrateToVersion3(json) {
  const version = VERSION_3,
        overlayHidden = false;

  json = Object.assign({}, json, {
    version,
    overlayHidden
  });

  return json;
}