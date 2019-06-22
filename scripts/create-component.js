"use strict";

process.on("exit", code => {
  if (code === 0) {
    console.log(`New component is created successfully.`);
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
  const name = response.name;

  createComponent(framework, component, name);

  function createComponent(packageFolder, componentFolder, componentName) {
    const ComponentType = uppercamelcase(componentFolder);
    const ComponentName = uppercamelcase(componentName);
    const PrefixComponentName = ComponentName.startsWith("Sf")
      ? ComponentName
      : "Sf" + ComponentName;
    const PackagePath = path.resolve(
      __dirname,
      `../packages/${packageFolder}/src/components/${componentFolder}`,
      `${PrefixComponentName}`
    );
    const SharedFilesPath = path.resolve(
      __dirname,
      `../packages/shared/styles/components`
    );
    const joinedComponentName =
      "sf" +
      ComponentName.replace(
        /([A-Z])(?=\w)/g,
        (s1, s2) => "-" + s2.toLowerCase()
      );
    const ret = glob.sync(PackagePath + "/" + PrefixComponentName + ".js");

    if (ret.length > 0) {
      console.warn(`${PrefixComponentName} component was already created. \n`);
      process.exit(-1);
    }

    const files = [
      {
        fileName: `${PrefixComponentName}.html`,
        content: `<div class="${joinedComponentName}"></div>`
      },
      {
        fileName: `${PrefixComponentName}.js`,
        content: `export default {
    name: "${PrefixComponentName}"
  };`
      },
      {
        fileName: `${PrefixComponentName}.scss`,
        filePath: SharedFilesPath,
        content: `@import '../variables';

// $component__block-property: value;

// .${joinedComponentName} {
//   &__element {

//   }
//   &--modifier {

//   }
// }`
      },
      {
        fileName: `${PrefixComponentName}.spec.ts`,
        content: `import { shallowMount } from "@vue/test-utils";
import ${PrefixComponentName} from "@/components/${componentFolder}/${PrefixComponentName}.vue";

describe("${PrefixComponentName}.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(${PrefixComponentName});
    expect(component.contains(".${joinedComponentName}")).toBe(true);
  });
});`
      },
      {
        fileName: `${PrefixComponentName}.stories.js`,
        content: `// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import ${PrefixComponentName} from "./${PrefixComponentName}.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$component-size", "1.438rem", "size of checkmark"]
  ]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    ["input", "event emited when option is selected"]
  ]
};

// storiesOf("${ComponentType}|${ComponentName}", module)
//   .addDecorator(withKnobs)
//   .add(
//     "[slot] default",
//     () => ({
//       props: {
//         editableProp: {
//           default: text("(prop) propname")
//         },
//         customClass: {
//           default: select(
//             "CSS Modifier",
//             ["null", "${joinedComponentName}--modifier"],
//             "null",
//             "CSS-Modifiers"
//           )
//         }
//       },
//       components: { ${PrefixComponentName} },
//       template: \`<${PrefixComponentName}
//         :class="customClass"
//       >
//       </${PrefixComponentName}>\`
//     }),
//     {
//      info: {
//        summary: \`<p>Component description.</p>
//        <h2>Usage</h2>
//        <pre><code>import { ${PrefixComponentName} } from "@storefrontui/vue"</code></pre>
//        \${generateStorybookTable(scssTableConfig, "SCSS variables")}
//        \${generateStorybookTable(eventsTableConfig, "Events")}
//        \`
//      }
//    }
// );`
      },
      {
        fileName: `${PrefixComponentName}.vue`,
        content: `<script src="./${PrefixComponentName}.js"></script>
<template lang="html" src="./${PrefixComponentName}.html"></template>
<style lang="scss">
@import "~@storefrontui/shared/styles/components/${PrefixComponentName}.scss";
</style>`
      }
    ];

    files.forEach(file => {
      fileSave(path.join(file.filePath || PackagePath, file.fileName))
        .write(file.content, "utf8")
        .end("\n");
    });
  }
})();
