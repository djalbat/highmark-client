"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { controller } from "sufficient";

import View from "./view";
import loadingDiv from "./view/div/loading";
import createMethods from "./createMethods";

import { setOrientation } from "./state";
import { migratePersistentState } from "./localStorage";
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

getOrientation((orientation) => {
  setOrientation(orientation);

  loadingDiv.hide();

  body.mount(view);
});
