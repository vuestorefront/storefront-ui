"use strict";
process.on("exit", code => {
  if (code === 0) {
    console.log(`\n\nNew component created successfully. Refresh your files tree, if you can't see the new files :)\n\n`);
  }
});

const path = require("path");
const fs = require("fs");
const fileSave = require("file-save");
const uppercamelcase = require("uppercamelcase");
const glob = require("glob");
const prompts = require("prompts");

const PACKAGE_TYPE = ["vue"]; // @todo: before adding new framework ensure you also generate the correct files for that (ie. component.vue)
const ATOMIC_TYPE = ["atoms", "molecules", "organisms"];

const questions = [
  {
    type: "select",
    name: "framework",
    message: "Which framework do you want to create the component with?",
    choices: PACKAGE_TYPE
  },
  {
    type: "select",
    name: "component",
    message: "What type of component do you want to create?",
    choices: ATOMIC_TYPE,
    initial: 1
  },
  {
    type: "text",
    name: "name",
    message: "Enter the name for the component",
    initial: "banner"
  }
];

(async () => {
  const response = await prompts(questions);

  const framework = PACKAGE_TYPE[response.framework];
  const component = ATOMIC_TYPE[response.component];
  const fwFolder = `./packages/${framework}/scripts/component-template/`;
  const name = response.name;

  createComponent(framework, component, name);

  function createComponent(packageFolder, componentFolder, componentName) {
    const ComponentType = uppercamelcase(componentFolder);
    const ComponentName = uppercamelcase(componentName);
    const ComponentNameCamelCase = ComponentName.startsWith("Sf")
      ? ComponentName
      : "Sf" + ComponentName;
    const PackagePath = path.resolve(
      __dirname,
      `../packages/${packageFolder}/src/components/${componentFolder}`,
      `${ComponentNameCamelCase}`
    );
    const SharedFilesPath = path.resolve(
      __dirname,
      `../packages/shared/styles/components/${componentFolder}`
    );
    const ComponentNameKebabCase =
      "sf" +
      ComponentName.replace(
        /([A-Z])(?=\w)/g,
        (s1, s2) => "-" + s2.toLowerCase()
      );
    const ret = glob.sync(PackagePath + "/" + ComponentNameCamelCase + ".js");

    if (ret.length > 0) {
      console.warn(`${ComponentNameCamelCase} component was already created. \n`);
      process.exit(-1);
    }

    const sharedFiles = [
      {
        fileName: `${ComponentNameCamelCase}.scss`,
        filePath: SharedFilesPath,
        content: `@import '../../variables';

// :root {
//    --component__block-property: var(value);
// }

// .${ComponentNameKebabCase} {
//   &__element {

//   }
//   &--modifier {

//   }
// }`
      }
    ];

    if (!fs.existsSync(fwFolder)) {
      console.warn(`\n\nSomething went wrong while generating files: no component templates available for ${framework}. Component not created. \n`);
      process.exit(-1);
    }

    fs.readdirSync(fwFolder).forEach(file => {
      const fileName = file.replace('component', ComponentNameCamelCase);
      
      let content = fs.readFileSync(fwFolder + file, 'utf8');
      content = content.replace(/ComponentFolder/g, componentFolder);
      content = content.replace(/ComponentNameCamelCase/g, ComponentNameCamelCase);
      content = content.replace(/ComponentNameKebabCase/g, ComponentNameKebabCase);
      content = content.replace(/ComponentName/g, ComponentName);
      content = content.replace(/ComponentType/g, ComponentType);

      fileSave(path.join(PackagePath, fileName))
        .write(content, "utf8")
        .end("\n");
    });

    sharedFiles.forEach(file => {
      let filePath = path.join(file.filePath || PackagePath, file.fileName);
      if (!fs.existsSync(filePath)) {
        fileSave(filePath)
          .write(file.content, "utf8")
          .end("\n");
      }
    });
  }
})();
