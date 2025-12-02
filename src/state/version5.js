"use strict";

import { VERSION_5 } from "../versions";
import { PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "../constants";

export function createState() {
  const version = VERSION_5,
        scale = {
          [PORTRAIT_ORIENTATION]: 1,
          [LANDSCAPE_ORIENTATION]: 1
        },
        state = {
          version,
          scale
        };

  return state;
}

export function migrateToVersion5(json) {
  const version = VERSION_5,
        { zoom } = json,
        scale = zoom;

  json = Object.assign({}, json, {
    version,
    scale
  });

  delete json.zoom

  return json;
}