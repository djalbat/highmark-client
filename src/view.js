"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import MenuDiv from "./view/div/menu";
import OverlayDiv from "./view/div/overlay";
import AnchorsDiv from "./view/div/anchors";
import DivisionsDiv from "./view/div/divisions";
import PreloaderDiv from "./view/div/preloader";
import ImagePreviewDiv from "./view/div/imagePreview";

class View extends Element {
  updateZoom() {
    this.updateMenuZoom();
    this.updateDivisionsZoom();
  }

  previewImageCustomHandler = (event, element, image) => {
    this.showImagePreviewDiv(image);
  }

  childElements() {
    return ([

      <ImagePreviewDiv/>,
      <PreloaderDiv/>,
      <OverlayDiv/>,
      <DivisionsDiv onCustomPreviewImage={this.previewImageCustomHandler} />,
      <AnchorsDiv/>,
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

  static ignoredProperties = [];

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  width: 100%;
  height: 100%;
    
`;
