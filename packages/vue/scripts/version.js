"use strict";

const { createIndexFiles } = require("./create-index-files");
const { createVueComponentsDocs } = require("./create-vue-components-docs");
const {
  setStylesVariablesRootPath
} = require("./set-styles-variables-root-path");

function runVersion() {
  createIndexFiles();
  createVueComponentsDocs();
  setStylesVariablesRootPath();
}

runVersion();
