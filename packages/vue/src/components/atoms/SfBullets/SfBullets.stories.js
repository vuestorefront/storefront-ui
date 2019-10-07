// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfBullets from "./SfBullets.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$bullet-border-radius", "50%", "border radius for bullet"],
    ["$bullet-size", "8px", "bullet size"],
    ["$bullet-margin:", "6px", "margin for bullet"],
    [
      "$bullet-background-color",
      "$c-gray-primary",
      "background-color for bullet"
    ],
    ["$bullet-size--active", "10px", "active bullet size"],
    ["$bullet-margin--active", "5px", "margin for active bullet"],
    [
      "$bullet-background-color--active",
      "$c-green-secondary",
      "background-color for active bullet"
    ]
  ]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["click", "emits the index of clicked bullet"]]
};

const props = {
  total: {
    default: number("total", 3)
  },
  current: {
    default: number("current", 1)
  }
};
const methods = {
  click(index) {
    this.index = index;
  }
};

storiesOf("Atoms|Bullets", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props,
      data() {
        return {
          index: this.current
        };
      },
      components: { SfBullets },
      methods,
      template: `<SfBullets
        :total="total"
        :current="index"
        @click="click" />`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
        <pre><code>import { SfBullets } from "@storefront-ui/dist/SfBullets.vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  )
  .add(
    "[slot] active",
    () => ({
      props,
      data() {
        return {
          index: this.current,
          style: {
            width: "10px",
            height: "10px",
            margin: "5px",
            background: "#9EE2B0",
            transform: "rotate(45deg)",
            cursor: "pointer"
          }
        };
      },
      components: { SfBullets },
      methods,
      template: `<SfBullets
      :total="total"
      :current="index"
      @click="click">
        <template #active>
          <li :style="style"></li> 
        </template>
      </SfBullets>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
        <pre><code>import { SfBullets } from "@storefront-ui/dist/SfBullets.vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  )
  .add(
    "[slot] inactive",
    () => ({
      props,
      data() {
        return {
          index: this.current,
          style: {
            width: "10px",
            height: "10px",
            margin: "6px",
            background: "#E22326",
            cursor: "pointer"
          }
        };
      },
      components: { SfBullets },
      methods,
      template: `<SfBullets
      :total="total"
      :current="index"
      @click="click">
        <template #inactive="{index, go}">
          <li :style="style" @click="go(index)"></li> 
        </template>
      </SfBullets>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
        <pre><code>import { SfBullets } from "@storefront-ui/dist/SfBullets.vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  );
