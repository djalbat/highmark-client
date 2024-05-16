"use strict";

import MenuButton from "../../button/menu";
import ZoomInMenuSVG from "../../svg/menu/zoomIn";

export default class ZoomInMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.zoomMenuIn();
  }

  static SVG = ZoomInMenuSVG;

  static defaultProperties = {
    className: "zoom-in"
  };
}
