"use strict";

import { VERSION_3 } from "../versions";

export function migrateToVersion3(json) {
  const version = VERSION_3;

  json = Object.assign({}, json, {
    version
  });

  delete json.fullScreenDivisionsZoom;

  return json;
}