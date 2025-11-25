"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import CheckmarkSVG from "./svg/checkmark";

import { borderWidth, borderRadius, borderColour, checkboxSize, checkboxPadding, checkboxBackgroundColour } from "../styles";

class Checkbox extends Element {
  clickHandler = (event, element) => {
    event.preventDefault();

    const checked = this.isChecked();

    checked ?
      this.uncheck() :
        this.check();
  }

  check() {
    this.showCheckmarkSVG();
  }

  uncheck() {
    this.hideCheckmarkSVG();
  }

  isChecked() {
    const checkmarkSVGShowing = this.isCheckmarkSVGShowing(),
          checked = checkmarkSVGShowing;  ///

    return checked;
  }

  didMount() {
    this.onClick(this.clickHandler);
  }

  willUnmount() {
    this.offClick(this.clickHandler);
  }

  childElements() {
    return (

      <CheckmarkSVG/>

    )
  }

  parentContext() {
    const checkCheckbox = this.check.bind(this),  ///
          uncheckCheckbox = this.uncheck.bind(this);  ///

    return ({
      checkCheckbox,
      uncheckCheckbox
    });
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "checkbox"
  };
}

export default withStyle(Checkbox)`

  width: ${checkboxSize};
  height: ${checkboxSize};
  border: ${borderWidth} solid ${borderColour};
  padding: ${checkboxPadding};
  border-radius: ${borderRadius};   
  background-color: ${checkboxBackgroundColour};

  cursor: pointer;  
  display: block;
  outline: none;
  flex-shrink: 0;
  
`;
