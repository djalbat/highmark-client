"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { controller } from "sufficient";
import { onFragmentChange } from "fragmented";

import View from "./view";
import loadingDiv from "./view/div/loading";
import createMethods from "./createMethods";

import { migratePersistentState } from "./localStorage";
import { setOrientation, isOverlayHidden } from "./state";
import { getOrientation, onOrientationChange } from "./utilities/orientation";

const { renderStyles } = withStyle;

renderStyles();

migratePersistentState();

const scheduler = null,
      model = null,
      view =

        <View/>

      ,
      body = new Body();

controller.assignMethods(createMethods, scheduler, model, view);

onOrientationChange((orientation) => {
  setOrientation(orientation);

  view.updateZoom();
});

onFragmentChange((event, element, fragment) => {
  const anchorId = `${fragment}`;

  view.scrollToAnchor(anchorId);
});

getOrientation((orientation) => {
  const overlayHidden = isOverlayHidden();

  setOrientation(orientation);

  loadingDiv.hide();

  body.mount(view);

  if (overlayHidden) {
    controller.hideOverlay();

    controller.showDivisions();
  }
});
