/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfRadio from "./SfRadio.vue";

const data = () => ({
  options: [
    { label: "Apple", value: "apple", price: "1", quantity: 3 },
    { label: "Orange", value: "orange", price: "2", quantity: 1 },
    { label: "Banana", value: "banana", flavour: "amazing", quantity: 2 }
  ],
  selected: "orange"
});

const scssDocs = [
  ["$sf-radio__checkmark-size", "23px", "size of checkmark"],
  [
    "$sf-radio__checkmark-border-color",
    "$c-gray-secondary",
    "border color of the unchecked radio"
  ],
  ["$sf-radio__checkmark-border-width", "1px", "unchecked radio, ring width"],
  [
    "$sf-radio__checkmark-border-color--checked",
    "$c-green-primary",
    "border color of the checked radio"
  ],
  [
    "$sf-radio__checkmark-border-width--checked",
    "9px",
    "checked radio, ring width"
  ],
  ["$sf-radio__checkmark-margin", "10px", "margin around checkmark"],
  [
    "$sf-radio__container-align-items",
    "center",
    "container displays as flex, you can customize here how items should be aligned"
  ]
];

const getTableBody = tableData =>
  tableData.reduce(
    (acc, item, index) =>
      (acc =
        acc +
        `<tr>${item.reduce(
          (acc, item, index) => (acc = acc + `<td>${item}</td>`),
          ""
        )}</tr>`),
    ""
  );

const generateTable = (tableData, label) => `
<label class="src-components-Table-label-3GH2">${label ? label : ""}</label>
<table class="src-components-Table-table-3VHw">
    <thead>
        <tr>
            <th>Name</th>
            <th>Default</th> 
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
       ${getTableBody(tableData)}
    </tbody>
</table>`;

storiesOf("Atoms|Radio", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data,
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-radio--align-bottom", "sf-radio--align-top"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfRadio },
      template: `<SfRadio
        :options="options"
        v-model='selected'
        :class="customClass"
      />`
    }),
    {
      info: {
        summary: `<p>Component for simple group of radio buttons, pass an array get selected value via v-model.</p>
        <h2> Usage </h2>
        <pre><code>import SfRadio from "@storefrontui/vue/dist/SfRadio.vue"</code></pre>
        ${generateTable(scssDocs, "SCSS variables")}
        `
      },
      notes
    }
  )
  .add(
    "[slot] button",
    () => ({
      data,
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-radio--align-bottom", "sf-radio--align-top"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfRadio },
      template: `<SfRadio
        :options="options"
        v-model='selected'
        :class="customClass"
      >
      <button slot="button" slot-scope="{isActive}">{{ isActive }}</button>
      </SfRadio>`
    }),
    {
      info: {
        summary: `<p>Button slot for replacing default checkmark</p>
      <h2> Usage </h2>
      <pre><code>import SfRadio from "@storefrontui/vue/dist/SfRadio.vue"</code></pre>
      <table>
      `
      },
      notes
    }
  )
  .add(
    "[slot] content",
    () => ({
      data,
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-radio--align-bottom", "sf-radio--align-top"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfRadio },
      template: `<SfRadio
        :options="options"
        v-model='selected'
        :class="customClass"
      >
      <div slot="content" slot-scope={option}>
        <p>Name: {{ option.label }}</p>
        <p v-if="option.price">Price: {{ option.price }}$</p>
        <p v-if="option.flavour">Flavour: {{ option.flavour }}</p>
        <p v-if="option.quantity">Quantity: {{ option.quantity }}</p>
      </div>
      </SfRadio>`
    }),
    {
      info: {
        summary: `<p>Slot for your custom html option structure</p>
      <h2> Usage </h2>
      <pre><code>import SfRadio from "@storefrontui/vue/dist/SfRadio.vue"</code></pre>
      `
      },
      notes
    }
  );
