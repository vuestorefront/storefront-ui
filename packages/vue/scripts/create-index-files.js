"use strict";

const fs = require("fs");
const glob = require("glob");
const path = require("path");

const pathTargetIndexJs = path.resolve(__dirname, "..", "index.js");
const pathTargetStoriesOfJs = path.resolve(__dirname, "..", "storiesOf.js");

const pathVueComponentsRoot = path.resolve(__dirname, "..", "src/components");
const pathsVueComponents = glob.sync("*/*/Sf*.vue", {
  cwd: pathVueComponentsRoot,
});

function createIndexFiles() {
  const filesContent = generateFilesContent();
  saveIndexJs(filesContent.contentIndexJs);
  console.log("index.js created");
  saveStoriesOfJs(filesContent.contentStoriesOfJs);
  console.log("storiesOf.js created");
}

function generateFilesContent() {
  const imports = [];
  const exports = [];
  for (const pathComponentVue of pathsVueComponents) {
    const sfComponentName = pathComponentVue.replace(/.*\/(Sf.+)\.vue/, "$1");
    const importLine = `import ${sfComponentName} from "./src/components/${pathComponentVue}";`;
    imports.push(importLine);
    const exportLine = "  " + sfComponentName;
    exports.push(exportLine);
  }
  const contentIndexJs =
    `// Auto-generated file by create-index-files.js. Do not edit manually\n` +
    imports.join("\n") +
    "\n\n" +
    "export {\n" +
    exports.join(",\n") +
    "\n};\n";
  const contentStoriesOfJs = contentIndexJs
    .replace(/import/g, "const")
    .replace(/ from /g, " = require(")
    .replace(/\.vue";/g, '.stories.js");')
    .replace(/export/g, "module.exports =");
  return {
    contentIndexJs,
    contentStoriesOfJs,
  };
}

function saveIndexJs(contentIndexJs) {
  fs.writeFileSync(pathTargetIndexJs, contentIndexJs);
}
function saveStoriesOfJs(contentStoriesOfJs) {
  fs.writeFileSync(pathTargetStoriesOfJs, contentStoriesOfJs);
}
module.exports = {
  createIndexFiles,
};

if (require.main === module) {
  createIndexFiles();
}
