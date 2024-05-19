"use strict";

import { EMPTY_STRING, MENU_ZOOM_RATIO } from "./constants";
import { getMenuZoom, setMenuZoom, setDivisionsZoom, setColoursInverted, setNativeGesturesRestored } from "./state";

export default function createMethods(scheduler, model, view) {
  function openMenu() {
    view.openMenu();
  }

  function closeMenu() {
    view.closeMenu();
  }

  function zoomMenuIn() {
    let menuZoom = getMenuZoom();

    menuZoom *= MENU_ZOOM_RATIO;

    setMenuZoom(menuZoom);

    view.updateMenuZoom();
  }

  function zoomMenuOut() {
    let menuZoom = getMenuZoom();

    menuZoom /= MENU_ZOOM_RATIO;

    setMenuZoom(menuZoom);

    view.updateMenuZoom();
  }

  function showDivisions() {
    view.hideOverlayDiv();

    view.showDivisionsDiv();

    const anchorId = `${fragment}`;

    (anchorId === EMPTY_STRING) ?
      view.showFirstDiv() :
        view.scrollToAnchor(anchorId);

    view.updateZoom();
  }

  function zoomDivisions(divisionsZoom) {
    setDivisionsZoom(divisionsZoom);

    view.updateDivisionsZoom();
  }

  function invertColours() {
    const coloursInverted = true;

    setColoursInverted(coloursInverted);

    view.updateDivisionsColours();
  }

  function revertColours() {
    const coloursInverted = false;

    setColoursInverted(coloursInverted);

    view.updateDivisionsColours();
  }

  function exitFullScreen() {
    view.exitFullScreen();
  }

  function enterFullScreen() {
    view.enterFullScreen();
  }

  function updateFullScreen() {
    view.closeMenu();

    view.updateFullScreenCheckboxDiv();
  }

  function restoreNativeGestures() {
    const nativeGesturesRestored = true;

    setNativeGesturesRestored(nativeGesturesRestored);

    view.updateNativeGestures();

    view.updateNativeGesturesCheckboxDiv();
  }

  function suppressNativeGestures() {
    const nativeGesturesRestored = false;

    setNativeGesturesRestored(nativeGesturesRestored);

    view.updateNativeGestures();

    view.updateNativeGesturesCheckboxDiv();
  }

  return ({
    openMenu,
    closeMenu,
    zoomMenuIn,
    zoomMenuOut,
    showDivisions,
    zoomDivisions,
    invertColours,
    revertColours,
    exitFullScreen,
    enterFullScreen,
    updateFullScreen,
    restoreNativeGestures,
    suppressNativeGestures
  });
}
