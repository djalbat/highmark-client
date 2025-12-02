"use strict";

import { getPersistentState, setPersistentState } from "./localStorage";

const orientation = null,
      state = {
        orientation
      };

export function getScale() {
  stateFromPersistentState();

  const orientation = getOrientation();

  let scale;

  ({ scale } = state);

  const orientedScale = scale[orientation]; ///

  scale = orientedScale;  ///

  return scale;
}

export function setScale(scale) {
  stateFromPersistentState();

  const orientation = getOrientation(),
        orientedScale = scale;  ///

  ({ scale } = state);

  Object.assign(scale, {
    [orientation]: orientedScale
  });

  stateToPersistentState();
}

export function getOrientation() {
  const { orientation } = state;

  return orientation;
}

export function setOrientation(orientation) {
  Object.assign(state, {
    orientation
  });
}

function stateToPersistentState() {
  const { version, scale } = state,
        persistentState = {
          version,
          scale
        };

  setPersistentState(persistentState);
}

function stateFromPersistentState() {
  const persistentState = getPersistentState();

  Object.assign(state, persistentState);
}
