// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfBullets from "./SfBullets.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT"],
  tableBodyConfig: [
    ["$bullet-border-radius", "50%"],
    ["$bullet-size", "8px"],
    ["$bullet-margin", "6px"],
    ["$bullet-color", "$c-gray-primary"],
    ["$bullet-size--active", "10px"],
    ["$bullet-margin--active", "5px"],
    ["$bullet-color--active", "$c-green-secondary"]
  ]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["click", "emits the index of clicked bullet"]]
};

const click = function(index) {
  this.index = index;
};
storiesOf("Atoms|Bullets", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        total: {
          default: number("total", 3)
        },
        current: {
          default: number("current", 1)
        }
      },
      data() {
        return {
          index: this.current
        };
      },
      components: { SfBullets },
      methods: {
        click
      },
      template: `<SfBullets
        :total="total"
        :current="index"
        @click="click"
        >
      </SfBullets>`
    }),
    {
      info: {
        summary: `<p>Component for bullet-pagination.</p>
       <h2>Usage</h2>
       <pre><code>import { SfBullets } from "@storefront-ui/dist/SfBullets.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}
       `
      }
    }
  )
  .add(
    "[slot] active",
    () => ({
      props: {
        total: {
          default: number("total", 3)
        },
        current: {
          default: number("current", 1)
        }
      },
      data() {
        return {
          index: this.current
        };
      },
      components: { SfBullets },
      methods: {
        click
      },
      template: `<SfBullets
      :total="total"
      :current="index"
      @click="click"
      >
        <template #active>
          <li style="width: 10px; height: 10px; margin: 5px; background: #9EE2B0; transform: rotate(45deg); cursor: pointer"></li>   
        </template>
      </SfBullets>`
    }),
    {
      info: {
        summary: `<p>Component for bullet-pagination.</p>
       <h2>Usage</h2>
       <pre><code>import { SfBullets } from "@storefront-ui/dist/SfBullets.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}
       `
      }
    }
  )
  .add(
    "[slot] inactive",
    () => ({
      props: {
        total: {
          default: number("total", 3)
        },
        current: {
          default: number("current", 1)
        }
      },
      data() {
        return {
          index: this.current
        };
      },
      components: { SfBullets },
      methods: {
        click
      },
      template: `<SfBullets
      :total="total"
      :current="index"
      @click="click"
      >
        <template #inactive="{index, go}">
          <li style="width: 10px; height: 10px; margin: 6px; background: #E22326; cursor: pointer" @click="go(index)"></li>   
        </template>
      </SfBullets>`
    }),
    {
      info: {
        summary: `<p>Component for bullet-pagination.</p>
       <h2>Usage</h2>
       <pre><code>import { SfBullets } from "@storefront-ui/dist/SfBullets.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}
       `
      }
    }
  );
