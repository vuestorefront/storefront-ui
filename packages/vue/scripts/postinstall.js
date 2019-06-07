const fs = require("fs");
const path = require("path");
const currentDir = path.dirname(__dirname);
const stylesPath = path.resolve("../../../sfui.scss");
const playgroundPath = path.resolve("src/Playground.vue");
const isDependency = currentDir.includes("node_modules");

const stylesContent = `/* Here you can override global SCSS variables */
  
// global override excluding scoped components
// $button-desktop-padding: 5px !default;
// global override including scoped componentss
// $button-desktop-padding: 50px;`;

const playgroundContent = `<template>
  <div id="playground"></div>
</template>
  
<script>
// Use this component to play with other components
export default {};
</script>`;

if (isDependency && !fs.existsSync(stylesPath)) {
  fs.appendFile("../../../sfui.scss", stylesContent, err => {
    if (err) throw err;
  });
} else if (!fs.existsSync(playgroundPath) && !isDependency) {
  fs.appendFile("src/Playground.vue", playgroundContent, err => {
    if (err) throw err;
  });
}
