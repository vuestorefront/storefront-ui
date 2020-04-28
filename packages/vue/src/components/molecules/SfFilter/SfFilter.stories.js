import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import { SfFilter } from "@storefront-ui/vue";
storiesOf("Molecules|Filter", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
  }))
  .add("Color Filter", () => ({
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
  }))
  .add("[slot] label", () => ({
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
  }))
  .add("[slot] count", () => ({
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
  }));
