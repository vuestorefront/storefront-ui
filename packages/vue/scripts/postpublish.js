"use strict";

const {
  setStylesVariablesPackagePath
} = require("./set-styles-variables-package-path");

function runPostPublish() {
  setStylesVariablesPackagePath();
}

runPostPublish();
