"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { FLEX } from "../../constants";

class MenuDiv extends Element {
  toggle() {
    const showing = this.isShowing();

    showing ?
      this.hide() :
        this.show();
  }

  show() {
    const display = FLEX;

    this.display(display);
  }

  didMount() {
    this.hide();
  }

  willUnmount() {
    ///
  }

  parentContext() {
    const toggleMenuDiv = this.toggle.bind(this);

    return ({
      toggleMenuDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "menu"
  };
}

export default withStyle(MenuDiv)`

  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  position: fixed;  
  
`;
