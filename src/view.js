"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import MenuDiv from "./view/div/menu";
import DivisionsDiv from "./view/div/divisions";
import PreloaderDiv from "./view/div/preloader";
import InstructionsDiv from "./view/div/instructions";

class View extends Element {
  updateZoom() {
    this.updateMenuZoom();
    this.updateDivisionsZoom();
  }

  didMount() {
    this.show();

    this.updateNativeGestures();
    this.updateDivisionsColours();
    this.updateFullScreenCheckboxDiv();
    this.updateInvertColoursCheckboxDiv();
    this.updateNativeGesturesCheckboxDiv();
  }

  willUnmount() {
    ///
  }

  childElements() {
    const { divDOMElements } = this.properties;

    return ([

      <InstructionsDiv/>,
      <PreloaderDiv/>,
      <DivisionsDiv divDOMElements={divDOMElements} />,
      <MenuDiv/>

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static ignoredProperties = [
    "divDOMElements"
  ];

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  width: 100%;
  height: 100%;
  align-items: stretch;
  flex-direction: column;
    
`;
