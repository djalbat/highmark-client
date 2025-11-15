"use strict";

import { VERSION_3 } from "../versions";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "../constants";

export function createState() {
  const version = VERSION_3,
        menuZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        divisionsZoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        coloursInverted = false,
        nativeGesturesRestored = false,
        state = {
          version,
          menuZoom,
          divisionsZoom,
          coloursInverted,
          nativeGesturesRestored
        };

  return state;
}

export function migrateToVersion3(json) {
  const version = VERSION_3;

  json = Object.assign({}, json, {
    version
  });

  delete json.fullScreenDivisionsZoom;

  return json;
}