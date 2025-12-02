"use strict";

export default function createMethods(scheduler, model, view) {
  function exitFullScreen() {
    view.exitFullScreen();
  }

  function enterFullScreen() {
    view.enterFullScreen();
  }

  return ({
    exitFullScreen,
    enterFullScreen
  });
}
