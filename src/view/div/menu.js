"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import ButtonsDiv from "../div/buttons";
import CheckboxesDiv from "../div/checkboxes";

import { getMenuZoom } from "../../state";
import { borderColour, menuDivPadding, menuDivBackgroundColour } from "../../styles";

class MenuDiv extends Element {
  openMenu() {
    this.show();
  }

  closeMenu() {
    this.hide();
  }

  updateMenuZoom() {
    const menuZoom = getMenuZoom(),
          width = `${100/menuZoom}%`,
          transform = `scale(${menuZoom})`,
          css = {
            width,
            transform
          };

    this.css(css);
  }

  childElements() {
    return ([

      <CheckboxesDiv/>,
      <ButtonsDiv/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          openMenu = this.openMenu.bind(this),
          closeMenu = this.closeMenu.bind(this),
          updateMenuZoom = this.updateMenuZoom.bind(this);

    return ({
      ...context,
      openMenu,
      closeMenu,
      updateMenuZoom
    });
  }

  initialise() {
    this.hide();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "menu"
  };
}

export default withStyle(MenuDiv)`

  left: 0;
  bottom: 0;
  display: block;
  padding: ${menuDivPadding};
  position: fixed;
  border-top: 1px solid ${borderColour};
  background-color: ${menuDivBackgroundColour};
  transform-origin: bottom left;
    
`;
