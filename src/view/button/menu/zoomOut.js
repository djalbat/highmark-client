"use strict";

import MenuButton from "../../button/menu";
import ZoomOutMenuSVG from "../../svg/menu/zoomOut";

export default class ZoomMenuOutMenuButton extends MenuButton {
  clickHandler = (event, element) => {
    controller.zoomMenuOut();
  }

  static SVG = ZoomOutMenuSVG;

  static defaultProperties = {
    className: "zoom-out"
  };
}
