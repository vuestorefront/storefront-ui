"use strict";

const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sass = require("node-sass");
const vueDocs = require("vue-docgen-api");

const pathTemplateFile = path.resolve(__dirname, "component-docs-template.md");
const pathTargetMdsRoot = path.resolve(__dirname, "..", "docs/components");
const pathVuepressConfigRoot = path.resolve(__dirname, "..", "docs/.vuepress");
const pathComponentsScssRoot = path.resolve(
  __dirname,
  "../..",
  "shared/styles/components"
);
const nodePathGlidejsIncludes = "@glidejs/glide/src/assets/sass/";
const pathsSassIncludes = [
  path.resolve(__dirname, "../..", "shared/styles/variables/"),
  path.resolve(__dirname, "../../..", "node_modules/" + nodePathGlidejsIncludes)
];
const pathVueComponentsRoot = path.resolve(__dirname, "..", "src/components");
const pathsVueComponents = glob.sync("*/*/Sf*.vue", {
  cwd: pathVueComponentsRoot
});

function createVueComponentsDocs() {
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

    let resultMd = replacePlaceholdersInTemplate(
      contentTemplateFile,
      componentInfoFull
    );

    if (componentInfoFull.internalComponentsInfo) {
      resultMd = addInternalComponentsToTargetMd(
        componentInfoFull.internalComponentsInfo,
        resultMd
      );
    }

    const targetFilepath = path.join(
      pathTargetMdsRoot,
      componentInfoFull.componentName + ".md"
    );
    const success = saveResultMd(targetFilepath, resultMd);
    if (success) {
      sfComponents.push({
        sfComponentName: componentInfoFull.sfComponentName,
        componentName: componentInfoFull.componentName,
        pathComponentVue
      });
    }
  }

  const successCount = sfComponents.length;
  if (successCount === 0) {
    console.error("ERROR: No component docs were generated. Quit.");
    process.exit(2);
  }

  if (successCount === pathsVueComponents.length) {
    console.log(`Successfully generated ${successCount} component docs.`);
  } else {
    console.warn(
      `WARN: Generated component docs for ${successCount} but found ${pathsVueComponents.length} components.`
    );
  }

  try {
    editVuepressConfigFiles(sfComponents);
  } catch (e) {
    console.warn(`WARN: Cannot update VuePress config files: ${e.message}`);
    process.exit(3);
  }

  console.log("Successfully updated VuePress config files. Done.");
}

function getFullComponentInfo(pathComponentVue) {
  const componentInfoFromPath = getComponentInfoFromPath(pathComponentVue);

  const pathComponentMd = componentInfoFromPath.pathComponentMd;
  let componentInfoFromMd;
  try {
    componentInfoFromMd = getComponentInfoFromMd(pathComponentMd);
  } catch (e) {
    throw new Error(`Cannot read "${pathComponentMd}": ${e.message}`);
  }

  const filenameComponentScss = componentInfoFromPath.pathComponentScss;
  let componentInfoFromScss;
  try {
    componentInfoFromScss = getComponentInfoFromScss(filenameComponentScss);
  } catch (e) {
    throw new Error(`Cannot read "${filenameComponentScss}": ${e.message}`);
  }

  const componentInfoFromVue = getComponentInfoFromVue(pathComponentVue);

  const internalComponentsInfo =
    getInternalComponentsInfo(componentInfoFromPath.pathInternalComponents) ||
    {};

  return {
    ...componentInfoFromPath,
    ...componentInfoFromMd,
    ...componentInfoFromScss,
    ...componentInfoFromVue,
    ...internalComponentsInfo
  };
}

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
    pathComponentHtml: pathComponentVue.replace(/(.+)\.vue$/, "$1.html"),
    pathComponentJs: pathComponentVue.replace(/(.+)\.vue$/, "$1.js"),
    pathComponentScss: sfComponentName + ".scss",
    pathComponentMd: pathComponentVue.replace(/(.+)\.vue$/, "$1.md"),
    pathInternalComponents: path.join(componentDirname, "_internal"),
    storybookLink
  };
}

function getComponentInfoFromMd(pathComponentMd) {
  const contentComponentFile = readComponentMd(pathComponentMd);
  if (!contentComponentFile) {
    console.warn(
      `WARN: Descriptive file (${pathComponentMd}) for extra component info not found. Some fields might be missing in the target Markdown file.`
    );
    return null;
  }
  try {
    return parseComponentFile(contentComponentFile);
  } catch (e) {
    console.error(`ERROR: Cannot parse "${pathComponentMd}": ${e.message}`);
    process.exit(1);
  }
}

function getComponentInfoFromScss(filename) {
  const contentScssFile = readComponentScss(filename);
  if (!contentScssFile) {
    return null;
  }
  try {
    return parseScssFile(contentScssFile);
  } catch (e) {
    console.error(`ERROR: Cannot parse "${filename}": ${e.message}`);
    process.exit(1);
  }
}

function getComponentInfoFromVue(pathVueFile) {
  const fullPathVueFile = pathInsideComponentsRoot(pathVueFile);
  const componentDoc = vueDocs.parse(fullPathVueFile);

  const props = extractPropsFromComponentDoc(componentDoc);
  const slots = extractSlotsFromComponentDoc(componentDoc);
  const events = extractEventsFromComponentDoc(componentDoc);
  return {
    props: generateComponentDetailsInfo(props),
    slots: generateComponentDetailsInfo(slots),
    events: generateComponentDetailsInfo(events)
  };
}

function getInternalComponentsInfo(pathInternalComponent) {
  const fullPath = pathInsideComponentsRoot(pathInternalComponent);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const internalComponentsVue = glob.sync("**/Sf*.vue", { cwd: fullPath });
  const internalComponentsInfo = internalComponentsVue.map(component =>
    getFullComponentInfo(path.join(pathInternalComponent, component))
  );

  return {
    internalComponentsInfo
  };
}

function readComponentMd(pathComponentMd) {
  const fullPathComponentMd = pathInsideComponentsRoot(pathComponentMd);
  if (!fs.existsSync(fullPathComponentMd)) {
    return null;
  }
  return fs.readFileSync(fullPathComponentMd, "utf8");
}

function readComponentScss(filename) {
  const pathComponentScss = pathInsideComponentsScssRoot(filename);
  if (!fs.existsSync(pathComponentScss)) {
    return null;
  }
  return fs.readFileSync(pathComponentScss, "utf8");
}

function readVuepressConfig(filename) {
  const pathVuepressConfig = pathInsideVuepressConfigRoot(filename);
  if (!fs.existsSync(pathVuepressConfig)) {
    return null;
  }
  return fs.readFileSync(pathVuepressConfig, "utf8");
}

function parseComponentFile(contentComponentFile) {
  const headlines = ["# component-description", "# common-usage"];
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
    commonUsage: reResult[2]
  };
}

function parseScssFile(contentScssFile) {
  const scssVariables = extractScssVariables(contentScssFile);
  const cssModifiers = extractCssModifiers(contentScssFile);

  return {
    scssVariables,
    cssModifiers
  };
}

function extractScssVariables(contentScssFile) {
  const lines = contentScssFile.split("\n");

  // account for multiline variable definition (a variable is considered terminated when the line ends with a semicolon)
  let lastLineNotTerminated = false;
  let scssVariables = "";
  for (const line of lines) {
    if (lastLineNotTerminated || /^\$/.test(line)) {
      scssVariables += line + "\n";
      lastLineNotTerminated = !/(^$)|(;$)/.test(line);
    }
  }

  if (!scssVariables) {
    return "";
  }

  return "```scss\n" + scssVariables + "```";
}

function extractCssModifiers(contentScssFile) {
  // remove webpack-alias-style import; the SASS compiler resolves all imports by simple name, if includePath is set
  const webpackGlidePath = "~" + nodePathGlidejsIncludes;
  const contentWithFixedImports = contentScssFile.replace(webpackGlidePath, "");
  const { css } = sass.renderSync({
    data: contentWithFixedImports,
    includePaths: pathsSassIncludes,
    outputStyle: "expanded"
  });

  const lines = css.toString().split("\n");

  // collect all unique modifiers and search for modifier descriptions in comments
  const uniqueModifiers = new Map();
  for (let i = 0; i < lines.length; ++i) {
    const line = lines[i];
    const regExp = /(\S+--[^\s,:]+)/g;
    let partialReResult;
    let lastModifierFound;
    // as multiple modifiers may be on one line, we have to make this (stateful) reg exp. search
    while ((partialReResult = regExp.exec(line)) !== null) {
      // skip CSS vars which the simple regexp catches accidentally
      if (partialReResult[0].includes("var(")) {
        continue;
      }
      if (!uniqueModifiers.has(partialReResult[0])) {
        uniqueModifiers.set(partialReResult[0], null);
        lastModifierFound = partialReResult[0];
      }
    }
    // go on with modifier search if no modifier was found or we already have a description for this modifier
    if (!lastModifierFound || uniqueModifiers.get(lastModifierFound)) {
      continue;
    }
    // otherwise find next opening-brace; the line after that may contain a modifier comment
    for (let j = i; j < lines.length; ++j) {
      if (!lines[j].endsWith("{")) {
        continue;
      }
      // opening-brace found; but if the line after it contains a @no-docs annotation, remove it again from the found modifiers
      if (lines[j + 1].trim().includes("@no-docs")) {
        uniqueModifiers.delete(lastModifierFound);
        break;
      }
      // if it doesn't contain a @modifier annotation, keep it in the found modifiers, but break (don't look for description)
      if (!lines[j + 1].trim().includes("@modifier")) {
        break;
      }
      // modifier found; extract whole comment block (even if multi-line)
      let comment = "";
      do {
        comment += lines[++j] + "\n";
      } while (j < lines.length && !lines[j].includes("*/"));

      // replace line breaks inside description with a space
      // and remove spurious whitespace, the modifier annotation and the comment marks.
      // Expected syntax (though the Reg. Exp. is less strict):
      //   .sf-badge--full-width {
      //     /* @modifier This is the full-width modifier.
      //      * (Multiple lines get concatenated) */
      //     width: 100%;
      //   }
      const description = comment
        .trim()
        .replace(/\s*\/\*\s*?@modifier */, "")
        .replace(/\n\s*(\*\s*)?/g, " ")
        .replace(/\s*\*?\/$/, "")
        .trim();

      uniqueModifiers.set(lastModifierFound, description);
      break;
    }
  }

  if (!uniqueModifiers.size) {
    return "";
  }

  let cssModifiers = "";
  for (const [modifier, description] of uniqueModifiers) {
    cssModifiers += `- **\`${modifier}\`**\n`;
    if (description) {
      cssModifiers += `  - _${escapeHtmlAngleBrackets(description)}_\n`;
    }
  }

  return cssModifiers.trim();
}

function extractPropsFromComponentDoc(componentDoc) {
  const propNames = Object.keys(componentDoc.props || {});
  if (!propNames.length) {
    return [];
  }
  const props = [];
  for (const propName of propNames) {
    const prop = componentDoc.props[propName];
    const propInfo = {
      name: prop.name,
      description: escapeHtmlAngleBrackets(prop.description),
      type: prop.type.name,
      defaultValue: prop.defaultValue && prop.defaultValue.value,
      required: !!prop.required
    };
    props.push(propInfo);
  }
  return props;
}

function extractSlotsFromComponentDoc(componentDoc) {
  const slotNames = Object.keys(componentDoc.slots || {});
  if (!slotNames.length) {
    return [];
  }
  const slots = [];
  for (const slotName of slotNames) {
    const slot = componentDoc.slots[slotName];
    const slotInfo = {
      name: slotName,
      description: escapeHtmlAngleBrackets(slot.description),
      bindings: Object.keys(slot.bindings)
    };
    slots.push(slotInfo);
  }
  return slots;
}

function extractEventsFromComponentDoc(componentDoc) {
  const eventNames = Object.keys(componentDoc.events || {});
  if (!eventNames.length) {
    return [];
  }
  const events = [];
  for (const eventName of eventNames) {
    const event = componentDoc.events[eventName];
    const eventInfo = {
      name: eventName,
      description: escapeHtmlAngleBrackets(event.description)
    };
    events.push(eventInfo);
  }
  return events;
}

function generateComponentDetailsInfo(rawDetails) {
  if (!rawDetails.length) {
    return "";
  }

  const commonObjKeys = ["name", "description"];
  let str = "";
  for (const detailsItem of rawDetails) {
    str += `- **\`${detailsItem.name}\`**\n`;

    if (detailsItem.description) {
      // replace line breaks inside description with a point
      const description = detailsItem.description.replace(/\.?\n/g, ". ");
      str += `  - _${description}_\n`;
    }

    // exclude the already displayed fields
    const extraObjKeys = Object.keys(detailsItem).filter(
      objKey => !commonObjKeys.includes(objKey)
    );
    for (const objKey of extraObjKeys) {
      const item = detailsItem[objKey];
      // skip this key if there is no value
      if (!item || (Array.isArray(item) && !item.length)) {
        continue;
      }
      str += `  - **${objKey}:** \``;
      // if the value is an array, format each element
      if (Array.isArray(item)) {
        str += item.join("`, `");
      } else {
        str += item;
      }
      str += "`\n";
    }
    str += "\n";
  }
  // remove spurious line breaks
  return str.trim();
}

function replacePlaceholdersInTemplate(contentTemplateFile, componentInfo) {
  const componentDescription =
    componentInfo.componentDescription || "<!-- No Component description -->";
  const replaceMap = new Map([
    ["[[component-name]]", componentInfo.componentName],
    ["[[component-description]]", componentDescription],
    ["[[sf-component-name]]", componentInfo.sfComponentName],
    ["[[common-usage]]", componentInfo.commonUsage || getFallbackCommonUsage()],
    ["[[props]]", componentInfo.props || "None."],
    ["[[slots]]", componentInfo.slots || "None."],
    ["[[events]]", componentInfo.events || "None."],
    ["[[css-modifiers]]", componentInfo.cssModifiers || "None."],
    ["[[scss-variables]]", componentInfo.scssVariables || "None."],
    ["[[path-component-html]]", componentInfo.pathComponentHtml],
    ["[[path-component-js]]", componentInfo.pathComponentJs],
    ["[[storybook-link]]", componentInfo.storybookLink || ""]
  ]);
  let renderedTemplate = contentTemplateFile;
  for (const [placeholder, value] of replaceMap.entries()) {
    // a simple string replacement isn't enough here (changes only first occurrence),
    // so use a Reg. Exp.-based replace; we need to escape the brackets first though
    const escapedKey = placeholder.replace(/\[/g, "\\[").replace(/]/g, "\\]");
    const regExp = new RegExp(escapedKey, "g");
    renderedTemplate = renderedTemplate.replace(regExp, value);
  }
  return renderedTemplate;
}

function addInternalComponentsToTargetMd(internalComponentsInfo, renderedMd) {
  const internalComponentTemplate = getInternalComponentTemplate();

  const internalSections = [];
  for (const componentInfo of internalComponentsInfo) {
    const replaceMap = new Map([
      ["[[internal-component-name]]", componentInfo.componentName],
      ["[[internal-props]]", componentInfo.props || "None."],
      ["[[internal-slots]]", componentInfo.slots || "None."],
      ["[[internal-events]]", componentInfo.events || "None."],
      ["[[internal-css-modifiers]]", componentInfo.cssModifiers || "None."],
      ["[[internal-scss-variables]]", componentInfo.scssVariables || "None."]
    ]);
    let renderedTemplate = internalComponentTemplate;
    for (const [placeholder, value] of replaceMap.entries()) {
      const escapedKey = placeholder.replace(/\[/g, "\\[").replace(/]/g, "\\]");
      const regExp = new RegExp(escapedKey, "g");
      renderedTemplate = renderedTemplate.replace(regExp, value);
    }
    internalSections.push(renderedTemplate);
  }

  const renderedInternalSections =
    "## Internal components\n\n" + internalSections.join("\n\n");

  return renderedMd.replace(
    "<!-- No _internal components -->",
    renderedInternalSections
  );
}

function saveResultMd(targetFilepath, resultMd) {
  const pathWithoutFilename = path.dirname(targetFilepath);
  if (!fs.existsSync(pathWithoutFilename)) {
    fs.mkdirSync(pathWithoutFilename, { recursive: true });
  }
  fs.writeFileSync(targetFilepath, resultMd);
  return true;
}

function editVuepressConfigFiles(sfComponents) {
  const contentConfigJs = readVuepressConfig("config.js");
  const contentEnhanceApp = readVuepressConfig("enhanceApp.js");

  if (!contentConfigJs || !contentEnhanceApp) {
    throw new Error("Error reading VuePress config files");
  }

  /* config.js */
  // divide content into:
  // - (1) everything before the line with the start tag,
  // - (2) the indentation of the start tag (needed for nice indentation),
  // - (3) the components part (including start and end tag)
  // - (4) everything after the end tag
  let regExp = /([\s\S]+)\n(\s*)(\/\/\s*@components-docs-start.*[\s\S]*@components-docs-end)\n([\s\S]+)/g;
  let reResult = regExp.exec(contentConfigJs);

  if (!reResult || reResult.length !== 5) {
    throw new Error("Error parsing VuePress config.js: Reg. Exp. mismatch");
  }

  // skip the components part (index 3) because we replace it entirely anyway
  let [, before, indent, , after] = reResult;

  sfComponents.sort((a, b) => (a.sfComponentName > b.sfComponentName ? 1 : -1));
  let components = [];
  for (const { componentName } of sfComponents) {
    const path = "/components/" + componentName;
    // put spaces between words for title
    const title = componentName.replace(/([A-Z])/g, " $1").trim();

    components.push(`["${path}", "${title}"]`);
  }
  let startTag = `\n${indent}// @components-docs-start (keep comment and indentation for auto-generated component docs)\n`;
  let endTag = `\n${indent}// @components-docs-end\n`;
  let formattedComponents = indent + components.join(`,\n${indent}`);
  let newContent = before + startTag + formattedComponents + endTag + after;
  let pathVuepressConfig = pathInsideVuepressConfigRoot("config.js");
  fs.writeFileSync(pathVuepressConfig, newContent);

  /* enhanceApp.js */
  // divide content into:
  // - (1) everything before the line with the start tag (for other imports),
  // - (2) the components imports part (including start and end tag)
  // - (3) everything between the end tag and the line with the next start tag
  // - (4) the indentation of the start tag (needed for nice indentation)
  // - (5) the components part (including start and end tag)
  // - (6) everything after the end tag
  regExp = /([\s\S]*?)\n?(\/\/\s*@components-docs-start.*[\s\S]*?@components-docs-end)\n([\s\S]+?)\n(\s*)(\/\/\s*@components-docs-start.*[\s\S]*@components-docs-end)\n([\s\S]+)/g;
  reResult = regExp.exec(contentEnhanceApp);

  if (!reResult || reResult.length !== 7) {
    throw new Error("Error parsing VuePress enhanceApp.js: Reg. Exp. mismatch");
  }

  let beforeImports, middle;
  // skip the component imports part (index 2) and components part (index 5) because we replace them entirely anyway
  [, beforeImports, , middle, indent, , after] = reResult;

  const importStatements = [];
  components = [];
  for (const { sfComponentName, pathComponentVue } of sfComponents) {
    const importStatement = `import ${sfComponentName} from "../../src/components/${pathComponentVue}"`;
    importStatements.push(importStatement);
    components.push(`Vue.component("${sfComponentName}", ${sfComponentName});`);
  }
  const importStartTag = `\n// @components-docs-start (keep comment and indentation for auto-generated component docs)\n`;
  const importEndTag = `\n// @components-docs-end\n`;
  const formattedImports = importStatements.join("\n");
  startTag = `\n${indent}// @components-docs-start (keep comment and indentation for auto-generated component docs)\n`;
  endTag = `\n${indent}// @components-docs-end\n`;
  formattedComponents = indent + components.join(`\n${indent}`);
  newContent =
    beforeImports +
    importStartTag +
    formattedImports +
    importEndTag +
    middle +
    startTag +
    formattedComponents +
    endTag +
    after;
  pathVuepressConfig = pathInsideVuepressConfigRoot("enhanceApp.js");
  fs.writeFileSync(pathVuepressConfig, newContent);
}

function pathInsideComponentsRoot(subPath) {
  return path.join(pathVueComponentsRoot, subPath);
}

function pathInsideComponentsScssRoot(subPath) {
  return path.join(pathComponentsScssRoot, subPath);
}

function pathInsideVuepressConfigRoot(subPath) {
  return path.join(pathVuepressConfigRoot, subPath);
}

function escapeHtmlAngleBrackets(rawString) {
  return rawString.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getFallbackCommonUsage() {
  return `:::warning NOT YET DOCUMENTED 
This section is not fully documented yet. We are doing our best to make our documentation a good and complete source of knowledge about Storefront UI. If you would like to help us, please don't hesitate to contribute to our docs. You can read more about it [here](https://docs.storefrontui.io/contributing/become-a-contributor.html#work-on-documentation).
:::`;
}

function getInternalComponentTemplate() {
  return `### [[internal-component-name]]

#### Props

[[internal-props]]


#### Slots

[[internal-slots]]


#### Events

[[internal-events]]


#### CSS modifiers

[[internal-css-modifiers]]


#### SCSS variables

[[internal-scss-variables]]`;
}

module.exports = {
  createVueComponentsDocs
};

if (require.main === module) {
  createVueComponentsDocs();
}
