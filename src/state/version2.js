"use strict";

import { VERSION_2 } from "../versions";

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