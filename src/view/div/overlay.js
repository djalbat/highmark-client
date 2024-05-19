"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import ContainerDiv from "../div/container";

import { overlayDivBackgroundColour } from "../../styles";

class OverlayDiv extends Element {
  childElements() {
    return (

      <ContainerDiv/>

    );
  }

  parentContext() {
    const hideOverlayDiv = this.hide.bind(this);  ///

    return ({
      hideOverlayDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "overlay"
  };
}

export default withStyle(OverlayDiv)`

  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
  background-color: ${overlayDivBackgroundColour};

`;
