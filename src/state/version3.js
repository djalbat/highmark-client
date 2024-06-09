"use strict";

import { VERSION_3 } from "../versions";

export function migrateToVersion3(json) {
  const version = VERSION_3,
        overlayHidden = false;

  json = Object.assign({}, json, {
    version,
    overlayHidden
  });

  return json;
}