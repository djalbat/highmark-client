"use strict";

import SVG from "../../svg";

export default class ZoomOutMenuSVG extends SVG {
  childElements() {
    return (

      <g>
        <rect x="3" y="10" width="19" height="5"/>
      </g>

    );
  }

  static defaultProperties = {
    className: "zoom-out-menu"
  };
}
