/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  select
} from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfCounter from "./SfCounter.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$counter-background", "$c-white", "background of counter"],
    ["$counter-color", "$c-dark-primary", "color of counter"],
    ["$counter-width", "3.7rem", "width of counter"],
    ["$counter-border", "none", "border of counter"],
    [
      "$counter--large-width",
      "$counter-width * 2",
      "double the width of counter"
    ]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [[".sf-counter--large", "double the default width"]]
};

const eventTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "change",
      "triggered when native input is changed and validated,returns the new number value"
    ]
  ]
};

storiesOf("Molecules|Counter", module)
  .addDecorator(withKnobs)
  .add(
    "Props / CSS Modifiers",
    () => ({
      props: {
        value: {
          default: number("value (prop)", 1)
        },
        autoFill: {
          default: boolean("autoFill (prop)")
        },
        min: {
          default: number("min (prop)")
        },
        max: {
          default: number("max (prop)")
        },
        step: {
          default: number("step (prop)", 1)
        },
        precision: {
          default: number("precision (prop)", 0)
        },
        delimiter: {
          default: text("delimiter (prop)", ".")
        },
        thousands: {
          default: text("delimiter (prop)", ",")
        },
        name: {
          default: text("name (prop)")
        },
        type: {
          default: text("type (prop)", "tel")
        },
        placeholder: {
          default: text("placeholder (prop)")
        },
        disabled: {
          default: boolean("disabled (prop)")
        },
        required: {
          default: boolean("required (prop)")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-counter--large"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfCounter },
      template: `<SfCounter
         :class="customClass"
         v-model="value"
         :autoFill="autoFill"
         :min="min"
         :max="max"
         :step="step"
         :precision="precision"
         :delimiter="delimiter"
         :thousands="thousands"
         :type="type"
         :name="name"
         :placeholder="placeholder"
         :disabled="disabled"
         :required="required"
         />`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfCounter } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
        ${generateStorybookTable(eventTableConfig, "Events")}
        `
      }
    }
  )
  .add(
    "[slot] up",
    () => ({
      components: { SfCounter },
      template: `
       <SfCounter value="1">
         <template #up>+</template>
       </SfCounter>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] down",
    () => ({
      components: { SfCounter },
      template: `
       <SfCounter value="1">
         <template #down>-</template>
       </SfCounter>`
    }),
    {
      info: true
    }
  );
