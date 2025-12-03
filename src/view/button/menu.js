"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { menuButtonFill, menuButtonWidth, menuButtonDisabledFill, menuButtonDisabledColour } from "../../styles";

class MenuButton extends Button {
  didMount() {
    const { hidden = false } = this.properties;

    if (hidden) {
      this.hide();
    }

    this.onClick(this.clickHandler);
  }

  willUnmount() {
    this.offClick(this.clickHandler);
  }

  childElements() {
    const { MenuSVG } = this.constructor;

    return (

      <MenuSVG/>

    );
  }

  static ignoredProperties = [
    "hidden"
  ];

  static defaultProperties = {
    className: "menu"
  };
}

export default withStyle(MenuButton)`

  fill: ${menuButtonFill};
  width: ${menuButtonWidth};
  height: auto;
  cursor: pointer;
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
  
  :disabled {
  fill: ${menuButtonDisabledFill};
    cursor: default;
    filter: drop-shadow(0 0 3px ${menuButtonDisabledColour});  
  }
   
`;
