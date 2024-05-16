"use strict";

import withStyle from "easy-with-style";  ///

import Button from "../button";

import { borderWidth, borderRadius, borderColour, menuButtonSize, menuButtonPadding } from "../../styles";

class MenuButton extends Button {
  didMount() {
    this.onClick(this.clickHandler);
  }

  willUnmount() {
    this.offClick(this.clickHandler);
  }

  childElements() {
    const { SVG } = this.constructor;

    return (

      <SVG/>

    );
  }

  static defaultProperties = {
    className: "menu"
  };
}

export default withStyle(MenuButton)`

  width: ${menuButtonSize};
  height: ${menuButtonSize};
  border: ${borderWidth} solid ${borderColour};
  padding: ${menuButtonPadding};
  background: transparent;
  border-radius: ${borderRadius};   
  
`;
