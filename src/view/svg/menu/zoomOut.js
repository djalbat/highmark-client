"use strict";

import MenuSVG from "../../svg/menu";

export default class ZoomOutMenuSVG extends MenuSVG {
  childElements() {
    return (

      <g>
        <rect x="3" y="10" width="19" height="5"/>
      </g>

    );
  }

  static defaultProperties = {
    className: "zoom-out"
  };
}
