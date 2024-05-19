"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import MenuDiv from "./view/div/menu";
import OverlayDiv from "./view/div/overlay";
import DivisionsDiv from "./view/div/divisions";
import PreloaderDiv from "./view/div/preloader";

class View extends Element {
  updateZoom() {
    this.updateMenuZoom();
    this.updateDivisionsZoom();
  }

  childElements() {
    const { divDOMElements } = this.properties;

    return ([

      <PreloaderDiv/>,
      <OverlayDiv/>,
      <DivisionsDiv divDOMElements={divDOMElements} />,
      <MenuDiv/>

    ]);
  }

  initialise() {
    this.show();  ///

    this.assignContext();

    this.updateNativeGestures();
    this.updateDivisionsColours();
    this.updateFullScreenCheckboxDiv();
    this.updateInvertColoursCheckboxDiv();
    this.updateNativeGesturesCheckboxDiv();
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
    
`;
