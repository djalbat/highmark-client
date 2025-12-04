"use strict";

export default function createMethods(scheduler, model, view) {
  function embeddedMode() {
    view.embeddedMode();
  }

  function fullScreenMode() {
    view.fullScreenMode();
  }

  return ({
    embeddedMode,
    fullScreenMode
  });
}
