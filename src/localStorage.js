"use strict";

import { STATE_KEY } from "./constants";
import { createState } from "./state/version5";
import { migrateState } from "./migrate";

export function getPersistentState() {
  let persistentState;

  const key = STATE_KEY,
        value = localStorage.getItem(key);

  if (value === null) {
    persistentState = null;
  } else {
    const jsonString = value,  ///
          json = JSON.parse(jsonString);

    persistentState = json; ///
  }

  return persistentState;
}

export function setPersistentState(persistentState) {
  const json = persistentState, ///
        jsonString = JSON.stringify(json),
        key = STATE_KEY,
        value = jsonString;  ///

  localStorage.setItem(key, value);
}

export function migratePersistentState() {
  let state,
      persistentState;

  persistentState = getPersistentState();

  if (persistentState === null) {
    state = createState();
  } else {
    state = persistentState;  ///

    state = migrateState(state);  ///
  }

  persistentState = state;  ///

  setPersistentState(persistentState);
}
