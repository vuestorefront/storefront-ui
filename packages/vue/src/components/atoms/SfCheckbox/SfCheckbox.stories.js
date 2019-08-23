/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfCheckbox from "./SfCheckbox.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$checkbox__label-font-size", "1.125rem", "font size for label"],
    [
      "$checkbox__checkmark-transition",
      "background-color 0.25s cubic-bezier(1, 0.5, 0.8, 1), border-color 0.25s cubic-bezier(1, 0.5, 0.8, 1)",
      "transition for checkmark"
    ],
    ["$checkbox__checkmark-size", "1.4375rem ", "size for checkmark"],
    [
      "$checkbox__checkmark-primary-color",
      "$c-green-primary",
      "primary color for checkmark"
    ],
    [
      "$checkbox__checkmark-secondary-color",
      "$c-gray-secondary",
      "secondary color for checkmark"
    ]
  ]
};

storiesOf("Atoms|Checkbox", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          checked: [],
          checkboxes: [
            {
              name: "shipping",
              value: "shipping-addres",
              label: "Copy address data from shipping"
            },
            {
              name: "invoce",
              value: "invoce",
              label: "I want to generate invoce for the company"
            }
          ]
        };
      },
      components: {
        SfCheckbox
      },
      template: `<div>
        <p><b>Checked: {{checked}}</b></p>
        <p v-for="(checkbox, key) in checkboxes" :key="key">
          <SfCheckbox v-model="checked" :disabled="checkbox.disabled" :name="checkbox.name" :value="checkbox.value" :label="checkbox.label"/>
        </p>
      </div>`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
          <pre><code>import { SfCheckbox } from "@storefront-ui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  );
