"use strict";

const fs = require("fs");
const path = require("path");

const isDependency = __dirname.includes("node_modules");

function createPlaygroundVue() {
  const playgroundPath = path.resolve(__dirname, "..", "src/Playground.vue");
  if (!fs.existsSync(playgroundPath) && !isDependency) {
    fs.writeFileSync(playgroundPath, getPlaygroundContent());
  }
}
function getPlaygroundContent() {
  return `<template>
    <div id="playground"></div>
  </template>
  <script>
    // Use this component to play with other components
    export default {};
  </script>`;
}

module.exports = {
  createPlaygroundVue
};
