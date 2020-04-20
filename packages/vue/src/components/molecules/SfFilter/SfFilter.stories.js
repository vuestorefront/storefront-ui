import { withKnobs, text, number } from "@storybook/addon-knobs";
import { SfFilter } from "@storefront-ui/vue";
export default {
  title: "Molecules|Filter",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfFilter },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: number("count", 30, {}, "Props"),
    },
    color: {
      default: text("color", "", "Props"),
    },
  },
  data() {
    return {
      selected: true,
    };
  },
  template: `<SfFilter
       :label="label"
       :count="count"
       :selected="selected"
       :color="color"
       @change="selected = !selected"
       style="max-width: 22.875rem"
     />`,
});
export const ColorFilter = () => ({
  components: { SfFilter },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: number("count", 30, {}, "Props"),
    },
    color: {
      default: text("color", "#E69494", "Props"),
    },
  },
  data() {
    return {
      selected: true,
    };
  },
  template: `<SfFilter
        :label="label"
        :count="count"
        :selected="selected"
        :color="color"
        @change="selected = !selected"
        style="max-width: 22.875rem"
    />`,
});
export const SlotLabel = () => ({
  components: { SfFilter },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: number("count", 30, {}, "Props"),
    },
    color: {
      default: text("color", "", "Props"),
    },
  },
  data() {
    return {
      selected: true,
    };
  },
  template: `<SfFilter
       :label="label"
       :count="count"
       :color="color"
       :selected="selected"
       @change="selected = !selected"
       style="max-width: 22.875rem"
     >
     <template #label="{label}">CUSTOM LABEL</template>
     </SfFilter>`,
});
SlotLabel.story = {
  name: "[slot] label",
};
export const SlotCount = () => ({
  components: { SfFilter },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: number("count", 30, {}, "Props"),
    },
    color: {
      default: text("color", "", "Props"),
    },
  },
  data() {
    return {
      selected: true,
    };
  },
  template: `<SfFilter
       :label="label"
       :count="count"
       :color="color"
       :selected="selected"
       @change="selected = !selected"
       style="max-width: 22.875rem"
     >
     <template #count="{count}">CUSTOM COUNT</template>
     </SfFilter>`,
});
SlotCount.story = {
  name: "[slot] count",
};
