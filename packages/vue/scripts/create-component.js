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
const ATOMIC_TYPE = ["atoms", "molecules", "organisms"];

if (process.argv.length < 4) {
  console.warn("Please input atomic type and component name");
  process.exit(-1);
}

createComponent(process.argv[2], process.argv[3]);

function createComponent(folder, componentName) {
  if (!ATOMIC_TYPE.includes(folder)) {
    console.warn(
      "Following atomic types are supported: atoms, molecules, organisms"
    );
    process.exit(-1);
  }
  const ComponentName = uppercamelcase(componentName);
  const PrefixComponentName = ComponentName.startsWith("Sf")
    ? ComponentName
    : "Sf" + ComponentName;
  const PackagePath = path.resolve(
    __dirname,
    `../src/components/${folder}`,
    `${PrefixComponentName}`
  );
  const joinedComponentName =
    "sf" +
    ComponentName.replace(/([A-Z])(?=\w)/g, (s1, s2) => "-" + s2.toLowerCase());
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
import ${PrefixComponentName} from "@/components/${folder}/${PrefixComponentName}.vue";

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

// storiesOf("${PrefixComponentName}", module)
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
//        <pre><code>import ${PrefixComponentName} from "@storefrontui/vue/dist/${PrefixComponentName}.vue"</code></pre>
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
<style lang="scss" src="./${PrefixComponentName}.scss"></style>`
    }
  ];

  files.forEach(file => {
    fileSave(path.join(PackagePath, file.fileName))
      .write(file.content, "utf8")
      .end("\n");
  });
}
