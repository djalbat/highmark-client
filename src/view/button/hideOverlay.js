"use strict";

import withStyle from "easy-with-style";  ///

import { Button } from "easy";

import { hideOverlayButtonColour } from "../../styles";

class HideOverlayButton extends Button {
  childElements() {
    return "╳";
  }

  static defaultProperties = {
    className: "hide-overlay"
  };
}

export default withStyle(HideOverlayButton)`

  width: fit-content;
  color: ${hideOverlayButtonColour};
  cursor: pointer;
  padding: 0;
  font-size: 1.5em;
  grid-area: hide-overlay-button;
  background: transparent;
  font-family: inherit;
  justify-self: end;

`;
