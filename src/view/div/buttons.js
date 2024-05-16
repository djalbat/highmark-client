"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import CloseMenuButton from "../button/menu/close";
import ZoomInMenuButton from "../button/menu/zoomIn";
import ZoomOutMenuButton from "../button/menu/zoomOut";

import { buttonsDivGap } from "../../styles";

class ButtonsDiv extends Element {
  childElements() {
    return ([

      <ZoomOutMenuButton/>,
      <ZoomInMenuButton/>,
      <CloseMenuButton/>

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "buttons"
  };
}

export default withStyle(ButtonsDiv)`

  gap: ${buttonsDivGap};
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: min-content min-content min-content;
  
`;
