/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfInput from "./SfInput.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$input-color", "$c-text-primary", "color for input"],
    ["$input-color-active", "$c-accent-primary", "color for active input"],
    ["$input-color-invalid", "#d12727", "color for invalid input"],
    ["$input-color-disabled", "$c-dark-secondary", "color for disabled input"],
    [
      "$input-font-family",
      "$body-font-family-secondary",
      "font family for input"
    ],
    ["$input-font-size", "$font-size-big-mobile", "font size for input"],
    [
      "$input-font-size-desktop",
      "$font-size-big-desktop",
      "font size for input on desktop"
    ],
    [
      "$input-font-weight",
      "$body-font-weight-secondary",
      "font weight for input"
    ],
    ["$input-line-height", "1.6", "line height for input"],
    [
      "$input__label-focus-font-size",
      "$font-size-small-mobile",
      "font size for input label"
    ],
    [
      "$input__label-focus-font-size-desktop",
      "$font-size-extra-small-desktop",
      "font size for input label on desktop"
    ],
    [
      "$input__label-transition",
      "all 150ms ease-in-out",
      "transition for input label"
    ],
    [
      "$input__bar-transition",
      "all 150ms ease-in-out",
      "transition for input transition"
    ],
    [
      "$input__error-message-font-family",
      "$body-font-family-primary",
      "font family for input error"
    ],
    [
      "$input__error-message-font-size",
      "$font-size-small-mobile",
      "font size for input error"
    ]
  ]
};

const components = { SfInput };
const data = () => ({
  value: ""
});
const summary = `<h2> Usage </h2>
<pre><code>import SfInput from "@storefront-ui/vue/dist/SfInput.vue"</code></pre>
${generateStorybookTable(scssTableConfig, "SCSS variables")}`;

storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components,
      data,
      props: {
        name: {
          default: text("Name", "name")
        },
        label: {
          default: text("Label", "label")
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
      template: `<div :style="{ width: '300px' }">
        <SfInput 
          v-model="value" 
          :name="name" 
          :label="label" 
          :valid="valid" 
          :errorMessage="errorMessage" 
          :required="required" 
        />
      </div>`
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    "[slot] label",
    () => ({
      components,
      data,
      props: {
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
      template: `<div :style="{ width: '300px' }">
        <SfInput 
          v-model="value" 
          :valid="valid" 
          :required="required">
          <template #label>
            <span style="color: salmon;">Address</span>
          </template>
        </SfInput>
      </div>`
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    "[slot] with error message",
    () => ({
      components,
      data,
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
      template: `<div :style="{ width: '300px'}">
        <SfInput 
          v-model="value" 
          :label="label" 
          :valid="valid" 
          :required="required">
          <template #errorMessage>
            <span style="color: orange;">This field is not correct.</span>
          </template>
        </SfInput>
      </div>`
    }),
    {
      info: {
        summary
      }
    }
  );
