"use strict";

import { getOrientation } from "./utilities/orientation";
import { INITIAL_SCALE, PORTRAIT_ORIENTATION, LANDSCAPE_ORIENTATION } from "./constants";

const scale = {
        [PORTRAIT_ORIENTATION]: INITIAL_SCALE,
        [LANDSCAPE_ORIENTATION]: INITIAL_SCALE,
      },
      state = {
        scale
      };

export function getScale() {
  const orientation = getOrientation();

  let scale;

  ({ scale } = state);

  const orientedScale = scale[orientation]; ///

  scale = orientedScale;  ///

  return scale;
}

export function setScale(scale) {
  const orientation = getOrientation(),
        orientedScale = scale;  ///

  ({ scale } = state);

  Object.assign(scale, {
    [orientation]: orientedScale
  });
}
