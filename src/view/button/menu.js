"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { menuButtonFill, menuButtonWidth, menuButtonDisabledFill, menuButtonDisabledColour } from "../../styles";

class MenuButton extends Button {
  didMount() {
    const { active = false, hidden = false } = this.properties;

    if (hidden) {
      this.hide();
    }

    if (active) {
      this.activate();
    }

    this.onClick(this.clickHandler);
  }

  isActive() {
    const active = this.hasClass("active");

    return active;
  }

  activate() {
    this.addClass("active");
  }

  deactivate() {
    this.removeClass("active");
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
    "hidden",
    "active"
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
  
  .active {
    fill: ${menuButtonDisabledFill};
    cursor: default;
    filter: drop-shadow(0 0 3px ${menuButtonDisabledColour});  
  }
   
`;
