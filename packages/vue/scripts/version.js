"use strict";

const { createIndexFiles } = require("./create-index-files");
const { createVueComponentsDocs } = require("./create-vue-components-docs");

function runVersion() {
  createIndexFiles();
  createVueComponentsDocs();
}

runVersion();
