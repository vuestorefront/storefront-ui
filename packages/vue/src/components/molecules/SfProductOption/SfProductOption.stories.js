import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfProductOption from "./SfProductOption.vue";

export default storiesOf("Molecules|ProductOption", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: text("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label"/>
    </div>`
  }))
  .add("[slot] color", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: text("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label">
        <template #color="{color}">
          <div :style="{width: '20px', height:'20px', backgroundColor: color, borderRadius: '100%', marginRight: '10px'}"></div>
        </template>
      </SfProductOption>
    </div>`
  }))
  .add("[slot] label", () => ({
    components: { SfProductOption },
    props: {
      color: {
        default: text("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      }
    },
    template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label">
        <template #label="{label}">
          CUSTOM LABEL
        </template>
      </SfProductOption>
    </div>`
  }));
