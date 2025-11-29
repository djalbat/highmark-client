"use strict";

import { setZoom } from "./state";

export default function createMethods(scheduler, model, view) {
  function zoom(zoom) {
    setZoom(zoom);

    view.updateZoom();
  }

  function exitFullScreen() {
    view.exitFullScreen();
  }

  function enterFullScreen() {
    view.enterFullScreen();
  }

  return ({
    zoom,
    exitFullScreen,
    enterFullScreen
  });
}
