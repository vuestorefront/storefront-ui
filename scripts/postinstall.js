var fs = require("fs");
var path = require("path");
const currentDir = path.dirname(__dirname);

if (currentDir.includes("node_modules")) {
  fs.appendFile(
    "../../../sfui.scss",
    `/* Here you can override global SCSS variables */
  
  // global override excluding scoped components
  // $button-desktop-padding: 5px !default;
  // global override including scoped componentss
  // $button-desktop-padding: 50px;
    `,
    err => {
      if (err) throw err;
    }
  );
}
