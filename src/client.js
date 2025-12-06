"use strict";

import "juxtapose";

import withStyle from "easy-with-style";  ///

import { Body } from "easy";
import { controller } from "sufficient";

import View from "./view";
import loadingDiv from "./view/div/loading";
import createMethods from "./createMethods";

import { DRAFT_VIEW_MODE } from "./constants";
import { onOrientationChange } from "./utilities/orientation";

const { renderStyles } = withStyle;

renderStyles();

const scheduler = null,
      model = null,
      view =

        <View/>

      ,
      body = new Body();

controller.assignMethods(createMethods, scheduler, model, view);

onOrientationChange((orientation) => {
  view.zoom();
});

loadingDiv.hide();

body.mount(view);

const { viewMode } = globalThis;

(viewMode === DRAFT_VIEW_MODE) ?
  view.draftMode() :
    view.presentationMode();
