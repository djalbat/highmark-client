"use strict";

import CheckboxDiv from "../../div/checkbox";

export default class FullScreenCheckboxDiv extends CheckboxDiv {
  changeHandler = (event, element) => {
    const checkbox = element, ///
          checked = checkbox.isChecked();

    checked ?
      controller.enterFullScreen() :
        controller.exitFullScreen();
  }

  update() {
    const fullScreen = this.isFullScreen();

    fullScreen ?
      this.checkCheckbox() :
        this.uncheckCheckbox();
  }

  parentContext() {
    const updateFullScreenCheckboxDiv = this.update.bind(this); ///

    return ({
      updateFullScreenCheckboxDiv
    });
  }

  static message = `Full screen
(double tap to exit)`;

  static defaultProperties = {
    className: "full-screen"
  };
}
