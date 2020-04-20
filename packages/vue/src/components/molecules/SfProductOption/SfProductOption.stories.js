import { withKnobs, text } from "@storybook/addon-knobs";
import SfProductOption from "./SfProductOption.vue";
export default {
  title: "Molecules|ProductOption",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfProductOption },
  props: {
    color: {
      default: text("color", "red", "Props"),
    },
    label: {
      default: text("label", "Red", "Props"),
    },
  },
  template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label"/>
    </div>`,
});
export const SlotColor = () => ({
  components: { SfProductOption },
  props: {
    color: {
      default: text("color", "red", "Props"),
    },
    label: {
      default: text("label", "Red", "Props"),
    },
  },
  template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label">
        <template #color="{color}">
          <div :style="{width: '20px', height:'20px', backgroundColor: color, borderRadius: '100%', marginRight: '10px'}"></div>
        </template>
      </SfProductOption>
    </div>`,
});
SlotColor.story = {
  name: "[slot] color",
};
export const SlotLabel = () => ({
  components: { SfProductOption },
  props: {
    color: {
      default: text("color", "red", "Props"),
    },
    label: {
      default: text("label", "Red", "Props"),
    },
  },
  template: `<div style="max-width: 300px">
      <SfProductOption
        :color="color"
        :label="label">
        <template #label="{label}">
          CUSTOM LABEL
        </template>
      </SfProductOption>
    </div>`,
});
SlotLabel.story = {
  name: "[slot] label",
};
