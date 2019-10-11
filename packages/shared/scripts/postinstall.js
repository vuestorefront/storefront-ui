const fs = require("fs");
const path = require("path");
const currentDir = path.dirname(__dirname);
const stylesPath = path.resolve(__dirname, "../../../sfui.scss");
const variablePath = path.resolve(__dirname, "../styles/_variables.scss");
const isDependency = currentDir.includes("node_modules");
const stylesContent = `/* Here you can override global SCSS variables */
  
// global override excluding scoped components
// $button-desktop-padding: 5px !default;
// global override including scoped componentss
// $button-desktop-padding: 50px;`;


if (isDependency && !fs.existsSync(stylesPath)) {
  fs.readFile(variablePath, "utf8", function(err, data) {
    if (err) return console.error(err);
    const result = data.replace("../../vue/sfui.scss", "../../../../sfui.scss");
    fs.writeFile(variablePath, result, "utf8", function(err) {
      if (err) return console.error(err);
      console.log(result);
    });
  });
  fs.appendFile("../../../sfui.scss", stylesContent, err => {
    if (err) throw err;
  });
}
