// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfBullets from "./SfBullets.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$bullet-border-radius", "50%", "border radius for bullet"],
    ["$bullet-size", "8px", "bullet size"],
    ["$bullet-margin:", "6px", "margin for bullet"],
    ["$bullet-background-color", "$c-gray-primary", "background-color for bullet"],
    ["$bullet-size--active", "10px", "active bullet size"],
    ["$bullet-margin--active", "5px", "margin for active bullet"],
    ["$bullet-background-color--active", "$c-green-secondary", "background-color for active bullet"]
  ]
};

const props = {
  customClass: {
    default: options(
      "CSS Modifier",
      {
        "sf-foo--modifier":"sf-foo--modifier"
      },
      "",
      { display: "multi-select" }
    )
  },
  total: {
    default: number("(props) total", 3)
  },
  current: {
    default: number("(props) current", 1)
  }
};

storiesOf("Atoms|Bullets", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    () => ({
      props,
      components: { SfBullets },
      template: `<SfBullets
        :class="customClass"
        :total="total"
        :current="current" />`
    }),
    // {
    //   info: {
    //     summary: `<p>Component description.</p>
    //    <h2>Usage</h2>
    //    <pre><code>import { SfBullets } from "@storefront-ui/vue"</code></pre>
    //    ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
    //   }
    // }
  )
  .add(
    "[slot] active",
    () => ({
      props,
      components: { SfBullets },
      template: `<SfBullets
        :class="customClass"
        :total="total"
        :current="current">
        <template #active>
          <li></li>
        </template>
      </SfBullets>`
    }),
    // {
    //   info: {
    //     summary: `<p>Component description.</p>
    //    <h2>Usage</h2>
    //    <pre><code>import { SfBullets } from "@storefront-ui/vue"</code></pre>
    //    ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
    //   }
    // }
  )
  .add(
    "[slot] inactive",
    () => ({
      props,
      components: { SfBullets },
      template: `<SfBullets
        :class="customClass"
        :total="total"
        :current="current">
        <template #inactive>
          <li></li>
        </template>
      </SfBullets>`
    }),
    // {
    //   info: {
    //     summary: `<p>Component description.</p>
    //    <h2>Usage</h2>
    //    <pre><code>import { SfBullets } from "@storefront-ui/vue"</code></pre>
    //    ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
    //   }
    // }
  );
