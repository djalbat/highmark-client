"use strict";

import { VERSION_4 } from "../versions";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "../constants";

export function migrateToVersion4(json) {
  const version = VERSION_4,
        zoom = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        };

  json = Object.assign({}, json, {
    version,
    zoom
  });

  delete json.menuZoom
  delete json.divisionsZoom;
  delete json.coloursInverted;
  delete json.nativeGesturesRestored;

  return json;
}