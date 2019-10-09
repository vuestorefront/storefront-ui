"use strict";

const fs = require("fs");
const path = require("path");
const stylesPath = path.resolve("../styles/_variables.scss");

fs.readFile(pathVariables, "utf8", function(err, data) {
  if (err) return console.error(err);
  const result = data.replace("../../../../sfui.scss", "../../vue/sfui.scss");
  fs.writeFile(pathVariables, result, "utf8", function(err) {
    if (err) return console.error(err);
    console.log(result);
  });
});
