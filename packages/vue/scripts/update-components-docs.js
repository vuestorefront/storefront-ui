"use strict";
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sass = require("sass");
const pathComponentsScssRoot = path.resolve(
  __dirname,
  "../..",
  "shared/styles/components"
);
const pathVueComponentsRoot = path.resolve(__dirname, "..", "src/components");
const pathsVueComponents = glob.sync("*/*/Sf*.vue", {
  cwd: pathVueComponentsRoot,
});


// updates stories with css vars info

function updateComponentStories() {
  const sfComponents = [];
  for (const pathComponentVue of pathsVueComponents) {
    let componentInfo;
    try {
      componentInfo = getComponentInfo(pathComponentVue);
    } catch (e) {
      console.warn(`WARN: Skipping component stories generation: ${e.message}`);
      continue;
    }
    const componentPath = getComponentInfoFromPath(pathComponentVue)

    const story = componentInfo.componentInfoFromStories;
    console.log(typeof story);
    const cssVariables = componentInfo.componentInfoFromScss.cssVariablesList;
    const parametersIndexValue = componentInfo.componentInfoFromStories.indexOf('parameters:');
    let cssVariablesFixedNames = {}
    for (let cssVariable in cssVariables) {
      Object.assign(cssVariablesFixedNames,
        {
          [cssVariable.slice(2)]: {
          ...cssVariables[cssVariable]
          }
        }
      );
    };

    let resultStory = [
      story.slice(0, parametersIndexValue + 13), 
      `
        cssprops: ${JSON.stringify(cssVariablesFixedNames)}
      `,
      story.slice(parametersIndexValue + 13)
    ].join(''); 
    
    const targetFilepath = path.join(
      pathVueComponentsRoot,
      componentPath.componentType,
      "Sf" + componentPath.componentName,
      componentPath.sfComponentName + ".stories1.js"
    );
    const success = saveResultComponentStories(targetFilepath, resultStory);
    if (success) {
      sfComponents.push({
        sfComponentName: componentInfo.sfComponentName,
        componentName: componentInfo.componentName,
        pathComponentVue,
      });
    }
  }
}


function getComponentInfo(pathComponentVue) {
  const componentInfoFromPath = getComponentInfoFromPath(pathComponentVue);  
  const pathComponentStories = componentInfoFromPath.pathComponentStories;
  let componentInfoFromStories;
  try {
    componentInfoFromStories = getComponentInfoFromStories(
      pathComponentStories
    );
  } catch (e) {
    throw new Error(`Cannot read "${pathComponentStories}": ${e.message}`);
  }
  const filenameComponentScss = componentInfoFromPath.pathComponentScss;
  let componentInfoFromScss;
  try {
    componentInfoFromScss = getComponentInfoFromScss(componentInfoFromPath);
  } catch (e) {
    throw new Error(`Cannot read "${filenameComponentScss}": ${e.message}`);
  }
  return {
    componentInfoFromPath,
    componentInfoFromStories,
    componentInfoFromScss,
  };
}

// getting component info from path 

function getComponentInfoFromPath(pathComponentVue) {
  const componentDirname = path.dirname(pathComponentVue);
  const componentFilename = path.basename(pathComponentVue);
  const componentName = componentFilename.replace(/Sf(.+)\.vue$/, "$1");
  const sfComponentName = "Sf" + componentName;
  const atomicType = componentDirname.replace(/\/.*/, "");
  return {
    componentName,
    sfComponentName,
    pathComponentScss: sfComponentName + ".scss",
    pathComponentStories: pathComponentVue.replace(
      /(.+)\.vue$/,
      "$1.stories.js"
    ),
    componentType: atomicType,
  };
}

// get component info from Stories

function getComponentInfoFromStories(pathComponentStories) {
  // there is no usage section for internal components
  if (pathComponentStories.includes("_internal")) {
    return null;
  }
  const contentStoriesFile = readComponentStories(pathComponentStories);
  console.log(contentStoriesFile);
  if (!contentStoriesFile) {
    console.warn(
      `WARN: Stories file (${pathComponentStories}) not found. The common usage section in the target Markdown file will render a fallback text.`
    );
  }
  try {
    return parseStoriesFile(contentStoriesFile);
  } catch (e) {
    console.error(
      `ERROR: Cannot parse "${pathComponentStories}": ${e.message}`
    );
    process.exit(1);
  }
}

// parse scss file 

function getComponentInfoFromScss(componentInfo) {
  const contentScssFile = readComponentScss(componentInfo);
  if (!contentScssFile) {
    return null;
  }
  try {
    return parseScssFile(contentScssFile);
  } catch (e) {
    console.error(
      `ERROR: Cannot parse "${componentInfo.pathComponentScss}": ${e.message}`
    );
    process.exit(1);
  }
}

// read stories

function readComponentStories(pathComponentStories) {
  const fullPathComponentStories = pathInsideComponentsRoot(
    pathComponentStories
  );
  if (!fs.existsSync(fullPathComponentStories)) {
    return null;
  }
  return fs.readFileSync(fullPathComponentStories, "utf8");
}

// read scss

function readComponentScss(componentInfo) {
  const pathComponentScss = pathInsideComponentsScssRoot(componentInfo);
  if (!fs.existsSync(pathComponentScss)) {
    return null;
  }
  return fs.readFileSync(pathComponentScss, "utf8");
}

function pathInsideComponentsScssRoot(componentInfo) {
  const namePathInsideComponents = path.join(
    componentInfo.componentType,
    componentInfo.pathComponentScss
  );
  return path.join(pathComponentsScssRoot, namePathInsideComponents);
}


function pathInsideComponentsRoot(subPath) {
  return path.join(pathVueComponentsRoot, subPath);
}

// parse stories

function parseStoriesFile(contentStoriesFile) {
  contentStoriesFile = contentStoriesFile.replace(
    /^(import [\s\S]+?;)$/gm,
    "`$1`;"
  );
  contentStoriesFile = contentStoriesFile.replace(
    /components: {([\s\S]+?)},/gm,
    "components: `$1`,"
  );
  return contentStoriesFile;
}


// parse scss file with extract css variables !!!

function parseScssFile(contentScssFile) {
  const cssVariables = getVarsArray(contentScssFile);
  let cssVariablesList = {};
  for (let cssVariable of cssVariables[0]) {
    Object.assign(cssVariablesList, {
      [cssVariable[0]]: {
        value: cssVariable[1],
      }
    })    
  };
  for (let cssVariable of cssVariables[1]) {
    Object.assign(cssVariablesList, {
      [cssVariable[0]]: {
        value: cssVariable[1],
        description: "Overridden other component's CSS variable",
      }
    })
  };
  return {
    cssVariablesList,
  };
}

const nodePathSimplebarIncludes = "simplebar/dist/";
const pathsSassIncludes = [
  path.resolve(__dirname, "../..", "shared/styles/helpers/"),
  path.resolve(
    __dirname,
    "../../..",
    "node_modules/" + nodePathSimplebarIncludes
  ),
];

// getting css vars 

function getVarsArray(file) {
  const webpackGlidePath = "~" + nodePathSimplebarIncludes;
  let contentWithFixedImports = file.replace(webpackGlidePath, "");
  contentWithFixedImports = contentWithFixedImports.replace(
    "../../helpers",
    "../helpers"
  );
  const { css } = sass.renderSync({
    data: contentWithFixedImports,
    includePaths: pathsSassIncludes,
    outputStyle: "expanded",
  });
  const text = css.toString();
  const patterns = [/var\((\S+)(, (.+))?\)/g, / {2}(--.+):( (.+));/g];
  const componentName = /.sf-(.+) ?{/g.exec(text)[1].trim();
  let variables = [];
  let keys = [];
  let result;
  patterns.forEach((pattern, index) => {
    let array = [];
    while ((result = pattern.exec(text)) !== null) {
      if (index === 0 && !result[1].includes(componentName)) {
        continue;
      }
      if (keys.includes(result[1])) continue;
      let variable = [];
      let font;
      if ((font = /--\S+-font/g.exec(result[1]))) {
        const regex = /var\((\S+)(, (\S+))?\)/g;
        let fontVar;
        array.push([font, ""]);
        while ((fontVar = regex.exec(result[3])) !== null) {
          keys.push(fontVar[1]);
          array.push([fontVar[1], fontVar[3]]);
        }
        continue;
      }
      variable.push(result[1]);
      keys.push(result[1]);
      if (result[3]) {
        variable.push(result[3]);
      } else {
        variable.push("");
      }
      array.push(variable);
    }
    variables.push(array);
  });
  return variables;
}


// save result in story

function saveResultComponentStories(targetFilepath, resultStory) {
  const pathWithoutFilename = path.dirname(targetFilepath);
  if (!fs.existsSync(pathWithoutFilename)) {
    fs.mkdirSync(pathWithoutFilename, { recursive: true });
  }
  fs.writeFileSync(targetFilepath, resultStory);
  return true;
}

module.exports = {
  updateComponentStories,
};
if (require.main === module) {
  updateComponentStories();
}
