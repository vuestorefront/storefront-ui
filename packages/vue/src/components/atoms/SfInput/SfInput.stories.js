/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfInput from "./SfInput.vue";

const vm = {
  components: { SfInput },
  data: () => {
    return {
      value: ""
    };
  }
};

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$sf-input__transition", "all 0.3s ease-in-out", "Input transition"],
    ["$sf-input__input-font-size", "$font-size-big-desktop", "Input font size"],
    ["$sf-input__label-font-size", "$font-size-big-desktop", "Label font size"],
    [
      "$sf-input__label-focus-font-size",
      "0.625rem",
      "Focus input label font size"
    ],
    [
      "$sf-input__error-message-min-height",
      "0.875rem",
      "Error message min-height"
    ],
    ["$sf-input__active-color", "$c-accent-primary", "Active input color"],
    [
      "$sf-input__invalid-color",
      "rgba(240, 140, 125, 1)",
      "Invalid input color"
    ],
    [
      "$sf-input__disabled-color",
      "rgba(115, 118, 128, 1)",
      "Disabled input color"
    ]
  ]
};

storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      ...vm,
      props: {
        name: {
          default: text("Name", "Name")
        },
        valid: {
          default: boolean("Valid", true)
        },
        required: {
          default: boolean("Required", true)
        },
        errorMessage: {
          default: text("Error message", "Field is required.")
        }
      },
      template: `
      <div :style="{ width: '300px', margin: '50px' }">
        <SfInput v-model="value" :name="label" :valid="valid" :errorMessage="errorMessage" :required="required" />
      </div>`
    }),
    {
      info: {
        summary: `
        <p>Single form input component.</p>
        <h2> Usage </h2>
        <pre><code>import SfInput from "@storefront-ui/vue/dist/SfInput.vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      ...vm,
      props: {
        valid: {
          default: boolean("Valid")
        },
        required: {
          default: boolean("Required", true)
        },
        errorMessage: {
          default: text("Error message", "Field is required.")
        }
      },
      template: `
        <div :style="{ width: '300px', margin: '50px' }">
          <SfInput v-model="value" :valid="valid" :required="required">
            <span style="color: salmon;">Address</span>
          </SfInput>
        </div>
      `
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] with error message",
    () => ({
      ...vm,
      props: {
        label: {
          default: text("Label", "Name")
        },
        valid: {
          default: boolean("Valid", false)
        },
        required: {
          default: boolean("Required", true)
        }
      },
      template: `
        <div :style="{ width: '300px', margin: '50px' }">
          <SfInput v-model="value" :label="label" :valid="valid" :required="required">
            <span slot="errorMessage" style="color: orange;">This field is not correct.</span>
          </SfInput>
        </div>
      `
    }),
    {
      info: true
    }
  );
