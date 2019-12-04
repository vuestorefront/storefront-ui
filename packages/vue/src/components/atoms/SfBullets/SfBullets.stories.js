/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";

import SfBullets from "./SfBullets.vue";

storiesOf("Atoms|Bullets", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      total: {
        default: number("total", 3, {}, "Props")
      },
      current: {
        default: number("current", 1, {}, "Props")
      }
    },
    components: { SfBullets },
    template: `<SfBullets
      :total="total"
      :current="current" />`
  }))
  .add("[slot] active", () => ({
    props: {
      total: {
        default: number("total", 3, {}, "Props")
      },
      current: {
        default: number("current", 1, {}, "Props")
      }
    },
    components: { SfBullets },
    template: `<SfBullets
      :total="total"
      :current="current">
      <template #active>
        <li style="width: 10px; height: 10px; background-color:#9EE2B0"></li>
      </template>
    </SfBullets>`
  }))
  .add("[slot] inactive", () => ({
    props: {
      total: {
        default: number("total", 3, {}, "Props")
      },
      current: {
        default: number("current", 1, {}, "Props")
      }
    },
    components: { SfBullets },
    template: `<SfBullets
      :total="total"
      :current="current">
      <template #inactive="{index, go}">
        <li style="width: 10px; height: 10px; background-color:#CCC; transform: rotate(45deg)"></li>
      </template>
    </SfBullets>`
  }));
