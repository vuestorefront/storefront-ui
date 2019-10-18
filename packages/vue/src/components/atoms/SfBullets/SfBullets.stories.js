// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";

import SfBullets from "./SfBullets.vue";

storiesOf("Atoms|Bullets", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    props: {
      total: {
        default: number("total (props)", 3)
      },
      current: {
        default: number("current (props)", 1)
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
        default: number("total (props)", 3)
      },
      current: {
        default: number("current (props)", 1)
      }
    },
    components: { SfBullets },
    template: `<SfBullets
      :total="total"
      :current="current">
      <template #active>
        <!-- add content to replace slot fallback -->
      </template>
    </SfBullets>`
  }))
  .add("[slot] inactive", () => ({
    props: {
      total: {
        default: number("total (props)", 3)
      },
      current: {
        default: number("current (props)", 1)
      }
    },
    components: { SfBullets },
    template: `<SfBullets
      :total="total"
      :current="current">
      <template #inactive>
        <!-- add content to replace slot fallback -->
      </template>
    </SfBullets>`
  }));
