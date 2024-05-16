"use strict";

import {VERSION_1, VERSION_2} from "../versions";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "../constants";

export function createState() {
  const version = VERSION_1,
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
        coloursInverted = false,
        nativeGesturesRestored = false,
        state = {
          version,
          menuZoom,
          divisionsZoom,
          coloursInverted,
          nativeGesturesRestored,
          fullScreenDivisionsZoom
        };

  return state;
}

export function migrateToVersion2(json) {
  const { overlayZoom, fullScreenOverlayZoom } = json,
        version = VERSION_2,
        divisionsZoom = overlayZoom,  ///
        fullScreenDivisionsZoom = fullScreenOverlayZoom;  ///

  json = Object.assign({}, json, {
    version,
    divisionsZoom,
    fullScreenDivisionsZoom
  });

  delete json.overlayZoom;
  delete json.fullScreenOverlayZoom;

  return json;
}