"use strict";
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sass = require("sass");
const vueDocs = require("vue-docgen-api");
const prettier = require("prettier");
const pathComponentsScssRoot = path.resolve(
  __dirname,
  "../..",
  "shared/styles/components"
);
const pathVueComponentsRoot = path.resolve(__dirname, "..", "src/components");
const pathsVueComponents = glob.sync("*/*/Sf*.vue", {
  cwd: pathVueComponentsRoot,
});


// getting component info from files


function updateComponentStories() {
  const contentTemplateFile = fs.readFileSync(pathTemplateFile, "utf8");
  const sfComponents = [];
  for (const pathComponentVue of pathsVueComponents) {
    let componentInfoFull;
    try {
      componentInfoFull = getFullComponentInfo(pathComponentVue);
    } catch (e) {
      console.warn(`WARN: Skipping component docs generation: ${e.message}`);
      continue;
    }
    let resultStory = replacePlaceholdersInTemplate(
      // TODO: change for proper files 
      contentTemplateFile,
      componentInfoFull
    );
    
    const targetFilepath = path.join(
      pathsVueComponents,
      componentInfoFull.componentName.toLowerCase() + ".stories.js"
    );
    const success = saveResultComponentStories(targetFilepath, resultStory);
    if (success) {
      sfComponents.push({
        sfComponentName: componentInfoFull.sfComponentName,
        componentName: componentInfoFull.componentName,
        pathComponentVue,
      });
    }
  }
}


function getFullComponentInfo(pathComponentVue) {
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
    ...componentInfoFromPath,
    ...componentInfoFromStories,
    ...componentInfoFromScss,
  };
}

// getting component info from path 

function getComponentInfoFromPath(pathComponentVue) {
  const componentDirname = path.dirname(pathComponentVue);
  const componentFilename = path.basename(pathComponentVue);
  const componentName = componentFilename.replace(/Sf(.+)\.vue$/, "$1");
  const sfComponentName = "Sf" + componentName;
  const atomicType = componentDirname.replace(/\/.*/, "");
  const storybookLink = `${atomicType}-${componentName}--common`.toLowerCase();
  return {
    componentName,
    sfComponentName,
    pathComponentJs: pathComponentVue.replace(/(.+)\.vue$/, "$1.js"),
    pathComponentScss: sfComponentName + ".scss",
    pathComponentStories: pathComponentVue.replace(
      /(.+)\.vue$/,
      "$1.stories.js"
    ),
    pathInternalComponents: path.join(componentDirname, "_internal"),
    componentType: atomicType,
    storybookLink,
  };
}

// get component info from Stories

function getComponentInfoFromStories(pathComponentStories) {
  // there is no usage section for internal components
  if (pathComponentStories.includes("_internal")) {
    return null;
  }
  const contentStoriesFile = readComponentStories(pathComponentStories);
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

// return component description 

function parseComponentFile(contentComponentFile) {
  const headlines = ["# component-description", "# storybook-iframe-height"];
  const reString = headlines.join("\\n([\\s\\S]+?)\\s*?") + "\\n([\\s\\S]+)";
  const regExp = new RegExp(reString, "m");
  const reResult = regExp.exec(contentComponentFile);
  if (!reResult) {
    throw new Error(`RegExp didn't match: /${reString}/${regExp.flags}`);
  }
  if (reResult.length !== headlines.length + 1) {
    throw new Error(
      "Placeholder count in component file doesn't match " +
        `(expected ${headlines.length}, found ${reResult.length - 1})`
    );
  }
  return {
    componentDescription: reResult[1],
    storybookIFrameHeight: reResult[2].trim(),
  };
}

// parse stories

function parseStoriesFile(contentStoriesFile) {
  // remove non-relevant parts before evaluating the story
  const nonrelevantParts = [
    /\.addDecorator\((.+)\)/gm,
    /\.addParameters\((.+)\)/gm,
  ];
  for (const part of nonrelevantParts) {
    contentStoriesFile = contentStoriesFile.replace(part, "");
  }
  // prevent the engine from searching actual components by turning the
  // imports and components list into strings
  contentStoriesFile = contentStoriesFile.replace(
    /^(import [\s\S]+?;)$/gm,
    "`$1`;"
  );
  contentStoriesFile = contentStoriesFile.replace(
    /components: {([\s\S]+?)},/gm,
    "components: `$1`,"
  );
  // Next, we create a JS closure where we define functions which the storybook
  // definition file expects, e.g. `number`, `text` and the complete `storiesOf`
  // function object with its `add` method.
  // Then, we `eval()` the whole .stories-file. It will call our overridden
  // functions so we can gather the information we need.
  function evalStoriesFile() {
    /* eslint-disable no-unused-vars */
    // some stories use our icons, sizes, etc. so make them available
    const { icons, sizes, colors } = getSfUiConstants();
    const dataToggleMixin = (dataKey) => ({
      data() {
        return {
          [dataKey]: true,
        };
      },
    });
    const visibilityToggleMixin = dataToggleMixin("visible");
    let storyComponents = "";
    let storyTemplate = "";
    let storyData = {};
    const extractComponents = (data) => (storyComponents = data);
    const extractTemplate = (template) => (storyTemplate = template);
    const extractData = (data) => (storyData = data);
    const extractMixinsData = (data) => (storyData = { ...storyData, ...data });
    // ignore options: we only use it for CSS modifiers
    const options = () => null;
    // store all props
    const storyProps = new Map();
    const object = (name, value) => storyProps.set(name, value);
    const array = (name, value) => storyProps.set(name, value);
    const number = (name, value) => storyProps.set(name, value);
    const text = (name, value) => storyProps.set(name, value);
    const boolean = (name, value) => storyProps.set(name, value);
    const color = (name, value) => storyProps.set(name, value);
    const select = (name, _, value) => storyProps.set(name, value);
    function storiesOf() {
      // we need a returnable function object so all chained `.add()` calls work
      const functionObject = {
        add: function (storyName, storyFn) {
          // use only "common" stories
          if (storyName.toLowerCase() !== "common") {
            return functionObject;
          }
          // call the "storyFn" which will call our overridden function definitions from the outer closure for all props
          const storyFnObject = storyFn();
          // extract other information directly from the evaluated storyFn
          const trimmedComponents = storyFnObject.components.replace(/\s/g, "");
          extractComponents(trimmedComponents);
          extractTemplate(storyFnObject.template);
          storyFnObject.data && extractData(storyFnObject.data());
          (storyFnObject.mixins || []).forEach((mixin) =>
            extractMixinsData(mixin.data())
          );
          // allow chaining
          return functionObject;
        },
      };
      return functionObject;
    }
    /* eslint-enable no-unused-vars */
    eval(contentStoriesFile);
    return { storyComponents, storyTemplate, storyData, storyProps };
  }
  let {
    storyComponents,
    storyTemplate,
    storyData,
    storyProps,
  } = evalStoriesFile();
  /* insert story data into code block */
  // generate imports for used components
  const storyImportsString = storyComponents
    .split(",")
    .map((component) => `import { ${component} } from "@storefront-ui/vue";`)
    .join("\n");
  // merge props and data from the story into a single data object
  const componentData = [];
  for (const [k, v] of Object.entries(storyData)) {
    componentData.push(`${k}: ${JSON.stringify(v)}`);
  }
  for (const [k, v] of storyProps.entries()) {
    componentData.push(`${k}: ${JSON.stringify(v)}`);
  }
  const componentDataString = componentData.join(",\n");
  const codeBlock = getCommonUsageCodeBlock(
    storyTemplate,
    storyImportsString,
    storyComponents,
    componentDataString
  );
  const prettified = prettier.format(codeBlock, { parser: "vue" });
  const codeBlockMd = `\`\`\`html\n${prettified}\`\`\``;
  return {
    storybookCode: codeBlockMd,
  };
}


// parse scss file with extract css variables !!!

function parseScssFile(contentScssFile) {
  const cssVariables = extractCssVariables(contentScssFile);
  return {
    cssVariables,
  };
}

// extract css variables !!!

function extractCssVariables(contentScssFile) {
  // const mediaVars = getMediaArray(contentScssFile);
  const varsArray = getVarsArray(contentScssFile);
  // const headConfig = ["NAME", "DEFAULT"];
  // Object.keys(mediaVars).length > 0
  //   ? ["NAME", "DEFAULT", "DESKTOP VALUE", "DESCRIPTION"]
  //   : ["NAME", "DEFAULT", "DESCRIPTION"];
  let result = "";
  varsArray[0].forEach((variable) => {
    result += `- **\`${variable[0]}\`**\n`;
  });
  result += `### Overridden other components CSS variables \n`;
  result += varsArray[1].length ? "" : `None. \n`;
  varsArray[1].forEach((variable) => {
    result += `- **\`${variable[0]}\`**\n`;
  });
  return result;
}

// getting css vars 

function getVarsArray(file) {
  const webpackGlidePath = "~" + nodePathSimplebarIncludes;
  let contentWithFixedImports = file.replace(webpackGlidePath, "");
  contentWithFixedImports = contentWithFixedImports.replace(
    "../../helpers",
    "../helpers"
  );
  const { css } = sass.renderSync({
    data: file,
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


// save result in md

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
