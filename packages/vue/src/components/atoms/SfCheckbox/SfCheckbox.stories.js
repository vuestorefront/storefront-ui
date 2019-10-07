/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfCheckbox from "./SfCheckbox.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$checkbox-font-family",
      "$body-font-family-secondary",
      "font family for label"
    ],
    ["$checkbox-font-size", "$font-size-big-mobile", "font size for label"],
    [
      "$checkbox-font-size-desktop",
      "$font-size-big-desktop",
      "font size for label on desktop"
    ],
    [
      "$checkbox-font-weight",
      "$body-font-weight-primary",
      "font weight for label"
    ],
    ["$checkbox-line-height", "1.6", "line height for label"],
    ["$checkbox__checkmark-size", "1.25rem", "size for checkbox"],
    [
      "$checkbox__checkmark-size-desktop",
      "1.5rem",
      "size for checkbox on mobile"
    ],
    [
      "$checkbox__checkmark-primary-color",
      "$c-green-primary",
      "primary color for checkbox"
    ],
    [
      "$checkbox__checkmark-secondary-color",
      "$c-gray-secondary",
      "secondary color for checkbox"
    ],
    [
      "$checkbox__checkmark-transition",
      "background-color 0.25s cubic-bezier(1, 0.5, 0.8, 1), border-color 0.25s cubic-bezier(1, 0.5, 0.8, 1)",
      "transition for checkbox"
    ]
  ]
};
const data = () => {
  return {
    checked: [],
    checkboxes: [
      {
        name: "shipping",
        value: "shipping-address",
        label: "Copy address data from shipping"
      },
      {
        name: "invoice",
        value: "invoice",
        label: "I want to generate invoice for the company"
      }
    ]
  };
};
storiesOf("Atoms|Checkbox", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data,
      components: {
        SfCheckbox
      },
      computed: {
        checkbox() {
          return this.checkboxes[0];
        }
      },
      template: `<SfCheckbox v-model="checked" :disabled="checkbox.disabled" :name="checkbox.name" :value="checkbox.value" :label="checkbox.label"/>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
        <pre><code>import { SfCheckbox } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  );
