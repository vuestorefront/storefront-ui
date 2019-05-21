'use strict';

process.on('exit', () => {
  console.log();
});

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const glob = require('glob');

const FOLDER_NAME = 'Which folder';
const COMPONENT_NAME = 'Component name (Such as Table)';

inquirer
  .prompt([
    {
      name: FOLDER_NAME,
      type: 'list',
      choices: [
        'atoms',
        'molecules',
        'organisms'
      ]
    },
    {
      name: COMPONENT_NAME,
      validate: v => v.length > 0
    }
  ])
  .then(answers => {
    const selectedFolder = answers[FOLDER_NAME]
    const componentName = answers[COMPONENT_NAME]

    createComponent(selectedFolder, componentName)
  });



function createComponent(folder, componentName) {
  const ComponentName = uppercamelcase(componentName);
  const PrefixComponentName = 'Sf' + ComponentName;
  const PackagePath = path.resolve(__dirname, `../src/components/${folder}`, `${PrefixComponentName}`);
  const joinedComponentName = 'sf' + ComponentName.replace(/([A-Z])(?=\w)/g, (s1, s2) => '-' + s2.toLowerCase())
  const ret = glob.sync(PackagePath + '/' + PrefixComponentName + '.js')

  if (ret.length > 0) {
    console.warn(`The ${PrefixComponentName} was already created. \n`)
    return;
  }

  const files = [
    {
      fileName: 'README.md',
      content: `# ${PrefixComponentName}

## Events

- \`event\` - description


## CSS Modifiers

- \`classname\` - description


## SCSS variables

- \`variablename\` (defaultvalue) - description
        
        `
    },
    {
      fileName: `${PrefixComponentName}.html`,
      content: `<div class="${joinedComponentName}"></div>`
    },
    {
      fileName: `${PrefixComponentName}.js`,
      content: `export default {
  name: "${PrefixComponentName}"
};
        `
    },
    {
      fileName: `${PrefixComponentName}.scss`,
      content: `@import '../../../css/variables';

// $component__block-property: value;

// .${joinedComponentName} {
//   &__element {

//   }
//   &--modifier {

//   }
// }        
        `
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
});
        `
    },
    {
      fileName: `${PrefixComponentName}.stories.js`,
      content: `// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md"
import ${PrefixComponentName} from "./${PrefixComponentName}.vue";

// storiesOf("Component", module)
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
//       components: { SfComponent },
//       template: \`<SfComponent
//         :class="customClass"
//         :
//       >
//         Hello Button<
//       /SfComponent>\`
//     }),
//     {
//       info: true,
//       notes
//     }
//   );
        `
    },
    {
      fileName: `${PrefixComponentName}.vue`,
      content: `<script src="./${PrefixComponentName}.js"></script>
<template lang="html" src="./${PrefixComponentName}.html"></template>
<style lang="scss" src="./${PrefixComponentName}.scss"></style>
        `
    },
  ]


  files.forEach(file => {
    fileSave(path.join(PackagePath, file.fileName))
      .write(file.content, 'utf8')
      .end('\n');
  });

  console.log('DONE!');
}









