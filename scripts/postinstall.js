var fs = require("fs");

fs.appendFile(
  "sfui.scss",
  `/* Here you can override global SCSS variables */

// global override excluding scoped components
// $button-padding: 5px !default;
// global override including scoped components
// $button-padding: 50px;
  `,
  err => {
    if (err) throw err;
  }
);
