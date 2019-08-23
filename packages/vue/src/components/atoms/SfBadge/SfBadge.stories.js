// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfBadge from "./SfBadge.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$badge--text-color", "$c-white", "badge text color"],
    ["$badge--alert", "$c-pink-primary", "alert badge color"],
    ["$badge--warning", "$c-blue-primary", "warning badge color"],
    ["$badge--info", "$c-green-primary", "info badge color"],
    ["$badge--font-size", "0.875rem", "badge font-size"],
    ["$badge--padding", "0.3125rem 0.625rem", "badge padding"],
    ["$badge--line-height", "1.3", "line height of badge"]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-badge--warning", "sets blue color for badge"],
    [".sf-badge--alert", "sets pink color for badge"],
    [".sf-badge--full-width", "sets the badge with 100%"]
  ]
};

storiesOf("Atoms|Badge", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfBadge },
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            [
              "null",
              "sf-badge--alert",
              "sf-badge--warning",
              "sf-button--full-width",
              "sf-button--full-width  sf-badge--warning"
            ],
            "null"
          )
        }
      },
      template: `<SfBadge :class="customClass">
      LIMITED
</SfBadge>`
    }),
    {
      info: {
        summary: `
        <h2> Description </h2>
        <p>Badge component. Place desired content into its default slot.</p>
        <h2> Usage </h2>
        <pre><code>import { SfBadge } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
        `
      }
    }
  );
