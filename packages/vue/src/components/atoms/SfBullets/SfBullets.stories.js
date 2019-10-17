// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, optionsKnob as options } from "@storybook/addon-knobs";

import SfBullets from "./SfBullets.vue";

storiesOf("Atoms|Bullets", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    () => ({
      props: {
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
      },
      components: { SfBullets },
      template: `<SfBullets
        :class="customClass"
        :total="total"
        :current="current" />`
    })
  )
  .add(
    "[slot] active",
    () => ({
      props: {
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
      },
      components: { SfBullets },
      template: `<SfBullets
        :class="customClass"
        :total="total"
        :current="current">
        <template #active>
          <li></li>
        </template>
      </SfBullets>`
    })
  )
  .add(
    "[slot] inactive",
    () => ({
      props: {
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
      },
      components: { SfBullets },
      template: `<SfBullets
        :class="customClass"
        :total="total"
        :current="current">
        <template #inactive>
          <li></li>
        </template>
      </SfBullets>`
    })
  );
