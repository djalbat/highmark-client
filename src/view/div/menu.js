"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import DraftModeMenuButton from "../button/menu/draftMode";
import EmbeddedModeMenuButton from "../button/menu/embeddedMode";
import InvertColoursMenuButton from "../button/menu/invertColours";
import FullScreenModeMenuButton from "../button/menu/fullScreenMode";
import PresentationModeMenuButton from "../button/menu/presentationMode";

import { FLEX } from "../../constants";
import { menuDivPadding, menuDivColumnGap, menuDivBackgroundColour } from "../../styles";

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

  childElements() {
    return ([

      <InvertColoursMenuButton/>,
      <PresentationModeMenuButton/>,
      <DraftModeMenuButton disabled />,
      <EmbeddedModeMenuButton hidden />,
      <FullScreenModeMenuButton/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          toggleMenuDiv = this.toggle.bind(this);

    return ({
      ...context,
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
  padding: ${menuDivPadding};
  z-index: 1;
  display: flex;
  position: fixed;  
  column-gap: ${menuDivColumnGap};
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${menuDivBackgroundColour};
  
`;
