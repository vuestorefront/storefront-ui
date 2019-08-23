import { storiesOf } from "@storybook/vue";
import SfMenuItem from "./SfMenuItem.vue";
import { generateStorybookTable } from "@/helpers";
import { withKnobs, text } from "@storybook/addon-knobs";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$sf-menu-item-padding",
      "$spacing-big $spacing-extra-big",
      "padding for menu item"
    ],
    ["$sf-menu-item-icon-spacing", "0.75rem", "spacing for icon"],
    ["$sf-menu-item-min-height", "35px", "minimum height for menu item"],
    [
      "$sf-menu-item-font-size",
      "$font-size-big-mobile",
      "font size for menu item"
    ],
    [
      "$sf-menu-item-font-family",
      "$body-font-family-secondary",
      "font family for menu item"
    ],
    ["$sf-title-font-size", "1rem", "font-size for title"],
    ["$sf-count-font-color", "$c-gray-primary", "font-color for count"],
    ["$sf-count-font-size", "0.875rem", "font-size for count"]
  ]
};

export default storiesOf("Molecules|[WIP]MenuItem", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfMenuItem },
      props: {
        label: {
          default: text("label (prop)", "label prop")
        },
        count: {
          default: text("count (prop)", "30")
        }
      },
      template: `
      <div style="width: 300px">
        <SfMenuItem
          :label="label"
          :count="count"
        />
      </div>
    `
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfMenuItem } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  );
