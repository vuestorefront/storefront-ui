"use strict";

const fs = require("fs");
const path = require("path");
const stylesPath = path.resolve("../styles/_variables.scss");

fs.readFile(stylesPath, "utf8", function(err, data) {
  if (err) return console.error(err);
  const result = data.replace("../../vue/sfui.scss", "../../../../sfui.scss");
  fs.writeFile(stylesPath, result, "utf8", function(err) {
    if (err) return console.error(err);
    console.log(result);
  });
});
