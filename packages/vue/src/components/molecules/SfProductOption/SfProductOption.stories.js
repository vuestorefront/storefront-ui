import { storiesOf } from "@storybook/vue";
import { withKnobs, text, color } from "@storybook/addon-knobs";

import SfProductOption from "./SfProductOption.vue";

export default storiesOf("Molecules|ProductOption", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: color("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      },
      value: {
        default: text("value (prop)", "red")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label"
        :value="value"/>
    </div>`
  }))
  .add("[slot] color", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: color("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      },
      value: {
        default: text("value (prop)", "red")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label"
        :value="value">
        <template #color>
          <!-- -->
        </template>
      </SfProductOption>
    </div>`
  }))
  .add("[slot] label", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: color("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      },
      value: {
        default: text("value (prop)", "red")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label"
        :value="value">
        <template #label>
          <!-- -->
        </template>
      </SfProductOption>
    </div>`
  }));
