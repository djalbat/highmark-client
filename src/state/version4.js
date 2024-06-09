"use strict";

import { VERSION_4 } from "../versions";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "../constants";

export function createState() {
  const version = VERSION_4,
        menuZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        divisionsZoom = {
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
          nativeGesturesRestored
        };

  return state;
}

export function migrateToVersion4(json) {
  const version = VERSION_4;

  json = Object.assign({}, json, {
    version
  });

  delete json.fullScreenDivisionsZoom;

  return json;
}