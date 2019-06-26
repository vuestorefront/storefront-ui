// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfBullets from "./SfBullets.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT"],
  tableBodyConfig: [
    ["$border-radius", "50%"],
    ["$inactive-size", "8px"],
    ["$active-size", "10px"],
    ["$inactive-margin", "4px"],
    ["$active-margin", "3px"],
    ["$inactive-color", "$c-gray-primary"],
    ["$active-color", "$c-green-secondary"]
  ]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["click", "emits the index of clicked bullet"]]
};

storiesOf("Atoms|Bullets", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        bulletsNumber: {
          default: text("bulletsNumber", "3")
        },
        currentBulletIndex: {
          default: text("currentBulletIndex", "1")
        }
      },
      components: { SfBullets },
      template: `<SfBullets
        :bulletsNumber="bulletsNumber"
        :currentBulletIndex="currentBulletIndex"
        @click="currentBulletIndex = $event"
        >
      </Sf Bullets>`
    }),
    {
      info: {
        summary: `<p>Component for bullet-pagination.</p>
       <h2>Usage</h2>
       <pre><code>import { SfBullets } from "@storefrontui/dist/SfBullets.vue"</code></pre>
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
        bulletsNumber: {
          default: text("bulletsNumber", "3")
        },
        currentBulletIndex: {
          default: text("currentBulletIndex", "1")
        }
      },
      components: { SfBullets },
      template: `<SfBullets
        :bulletsNumber="bulletsNumber"
        :currentBulletIndex="currentBulletIndex"
        @click="currentBulletIndex = $event"
        >
        <template #active>
          <div style="width: 10px; height: 10px; margin: 3px; background: lime;"></div>
        </template>
      </Sf Bullets>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] inactive",
    () => ({
      props: {
        bulletsNumber: {
          default: text("bulletsNumber", "3")
        },
        currentBulletIndex: {
          default: text("currentBulletIndex", "1")
        }
      },
      components: { SfBullets },
      template: `<SfBullets
        :bulletsNumber="bulletsNumber"
        :currentBulletIndex="currentBulletIndex"
        @click="currentBulletIndex = $event"
        >
        <template #inactive>
          <div style="width: 10px; height: 10px; margin: 3px; background: red;"></div>
        </template>
      </Sf Bullets>`
    }),
    {
      info: true
    }
  );
