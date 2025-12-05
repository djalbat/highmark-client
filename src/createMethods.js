"use strict";

export default function createMethods(scheduler, model, view) {
  function draftMode() {
    view.draftMode();
  }

  function embeddedMode() {
    view.embeddedMode();
  }

  function invertColours() {
    view.invertColours();
  }

  function revertColours() {
    view.revertColours();
  }

  function fullScreenMode() {
    view.fullScreenMode();
  }

  function presentationMode() {
    view.presentationMode();
  }

  return ({
    draftMode,
    embeddedMode,
    invertColours,
    revertColours,
    fullScreenMode,
    presentationMode,
  });
}
