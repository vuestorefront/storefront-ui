"use strict";

const fs = require("fs");
const path = require("path");

const isDependency = path.resolve(__dirname).includes("node_modules");
const stylesPath = path.resolve(__dirname, "../../../../sfui.scss");

function getStylesContent() {
  return `/* Here you can override global SCSS variables */

// global override excluding scoped components
// $button-padding: 5px !default;
// global override including scoped componentss
// $button-padding: 50px;`;
}
function createRootSfuiScss() {
  if (isDependency && !fs.existsSync(stylesPath)) {
    fs.appendFile(stylesPath, getStylesContent(), err => {
      if (err) throw err;
    });
  }
}

module.exports = {
  createRootSfuiScss
};
