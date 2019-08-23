import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfFilter from "./SfFilter.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$filter-item-padding",
      "$spacing-big $spacing-extra-big",
      "padding for filter item"
    ],
    ["$filter-item-icon-spacing", "0.75rem", "spacing for filter icon"],
    ["$filter-item-min-height", "35px", "minimum height for filter"],
    ["$filter-item-font-size", "$font-size-big-mobile", "font-size for filter"],
    [
      "$filter-item-font-family",
      "$body-font-family-secondary",
      "font-family for filter"
    ]
  ]
};

export default storiesOf("Molecules|Filter", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfFilter },
      props: {
        label: {
          default: text("label (prop)", "Red")
        },
        count: {
          default: text("count (prop)", "30")
        },
        color: {
          default: select("color (prop)", ["red", "null"], "red")
        },
        selected: {
          default: select("selected (prop)", ["true", "false"], "false")
        }
      },
      template: `
      <div style="width: 300px">
          <SfFilter
            :color="color"
            :label="label"
            :count="count"
            :selected="selected"
          />
      </div>
    `
    }),
    {
      info: {
        summary: `
          <h2> Description </h2>
          <p>This component should be used for filtering products on listings.</p>
          <h2> Usage </h2>
          <pre><code>import { SfFilter } from "@storefront-ui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          `
      }
    }
  );
