"use strict";

const {
  setStylesVariablesPackagePath
} = require("./set-styles-variables-root-path");

function runPostPublish() {
  setStylesVariablesPackagePath();
}

runPostPublish();
