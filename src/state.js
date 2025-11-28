"use strict";

import { getPersistentState, setPersistentState } from "./localStorage";

const orientation = null,
      state = {
        orientation
      };

export function getOrientation() {
  const { orientation } = state;

  return orientation;
}

export function setOrientation(orientation) {
  Object.assign(state, {
    orientation
  });
}

export function getZoom() {
  stateFromPersistentState();

  const orientation = getOrientation();

  let zoom;

  ({ zoom } = state);

  const orientedZoom = zoom[orientation]; ///

  zoom = orientedZoom;  ///

  return zoom;
}

export function setZoom(zoom) {
  stateFromPersistentState();

  const orientation = getOrientation(),
        orientedZoom = zoom;  ///

  ({ zoom } = state);

  Object.assign(zoom, {
    [orientation]: orientedZoom
  });

  stateToPersistentState();
}

function stateToPersistentState() {
  const { version, zoom } = state,
        persistentState = {
          version,
          zoom
        };

  setPersistentState(persistentState);
}

function stateFromPersistentState() {
  const persistentState = getPersistentState();

  Object.assign(state, persistentState);
}
