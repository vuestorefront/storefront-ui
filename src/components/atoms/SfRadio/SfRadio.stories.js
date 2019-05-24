/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, select } from "@storybook/addon-knobs";
import createStorybookTable from "@/utilities/js-helpers/createStorybookTable";
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

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$radio__checkmark-size", "1.438rem", "size of checkmark"],
    [
      "$radio__checkmark-border-color",
      "$c-gray-secondary",
      "border color of the unchecked radio"
    ],
    [
      "$radio__checkmark-border-width",
      "0.0625rem",
      "unchecked radio, ring width"
    ],
    [
      "$radio__checkmark-border-color--checked",
      "$c-green-primary",
      "border color of the checked radio"
    ],
    [
      "$radio__checkmark-border-width--checked",
      "0.5625rem",
      "checked radio, ring width"
    ],
    ["$radio__checkmark-margin", "0.625rem", "margin around checkmark"],
    [
      "$radio__container-align-items",
      "center",
      "container displays as flex, you can customize here how items should be aligned"
    ],
    [
      "$radio__container-background-color--checked",
      "$c-light-primary",
      "background color of the checked radio label"
    ]
  ]
};

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
            ["null", "sf-radio--center"],
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
        ${createStorybookTable(scssTableConfig, "SCSS variables")}
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
            ["null", "sf-radio--center"],
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
            ["null", "sf-radio--center"],
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
        <p style="margin-top: 0">Name: {{ option.label }}</p>
        <p v-if="option.price">Price: {{ option.price }}$</p>
        <p v-if="option.flavour">Flavour: {{ option.flavour }}</p>
        <p style="margin-bottom: 0" v-if="option.quantity">Quantity: {{ option.quantity }}</p>
      </div>
      </SfRadio>`
    }),
    {
      info: {
        summary: `<p>Slot for your custom html option structure.</p>
        <p><strong>hint:</strong> you can extend options object with your values to make this component even more powerfull, see example</p>
      <h2> Usage </h2>
      <pre><code>import SfRadio from "@storefrontui/vue/dist/SfRadio.vue"</code></pre>
      `
      },
      notes
    }
  );
