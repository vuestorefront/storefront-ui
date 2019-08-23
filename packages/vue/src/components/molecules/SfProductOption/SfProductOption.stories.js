import { storiesOf } from "@storybook/vue";
import SfProductOption from "./SfProductOption.vue";
import { generateStorybookTable } from "@/helpers";
import { withKnobs, text, select } from "@storybook/addon-knobs";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$product-option-padding",
      "$spacing-big $spacing-extra-big",
      "padding for product option"
    ],
    [
      "$product-optionicon-spacing",
      "0.75rem",
      "spacing for product option icon"
    ],
    ["$product-option-min-height", "35px", "minimum height for product option"],
    [
      "$product-option-font-size",
      "$font-size-big-mobile",
      "font-size for product option"
    ],
    [
      "$product-option-font-family",
      "$body-font-family-secondary",
      "font-family height for product option"
    ]
  ]
};

export default storiesOf("Molecules|ProductOption", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfProductOption },
      props: {
        label: {
          default: text("label", "Red")
        },
        color: {
          default: select("color", ["red", "null"], "red")
        }
      },
      template: `
      <div style="width: 300px">
          <SfProductOption
            :color="color"
            :label="label"
          />
      </div>
    `
    }),
    {
      info: {
        summary: `
          <h2> Usage </h2>
          <pre><code>import { SfProductOption } from "@storefront-ui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          `
      }
    }
  );
