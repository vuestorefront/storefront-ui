"use strict";

const { createIndexFiles } = require("./create-index-files");
const {
  setStylesVariablesRootPath
} = require("./set-styles-variables-root-path");

function runPrePublish() {
  createIndexFiles();
  setStylesVariablesRootPath();
}

runPrePublish();
