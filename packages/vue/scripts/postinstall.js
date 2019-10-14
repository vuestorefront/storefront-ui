"use strict";

const { createPlaygroundVue } = require("./create-playground-vue");
const { createRootSfuiScss } = require("./create-root-sfui-scss");

function runPostInstall() {
  createPlaygroundVue();
  createRootSfuiScss();
}

runPostInstall();
