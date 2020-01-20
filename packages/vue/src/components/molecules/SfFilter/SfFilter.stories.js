import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import SfFilter from "./SfFilter.vue";
storiesOf("Molecules|Filter", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfFilter },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: number("count", 30, {}, "Props")
      }
    },
    data() {
      return {
        selected: true
      };
    },
    template: `<SfFilter 
        :label="label" 
        :count="count"
        :selected="selected"
        @change="selected = !selected"
        style="max-width: 18.75rem" 
      />`
  }))
  .add("[slot] label", () => ({
    components: { SfFilter },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: number("count", 30, {}, "Props")
      }
    },
    data() {
      return {
        selected: true
      };
    },
    template: `<SfFilter 
        :label="label" 
        :count="count"
        :selected="selected"
        @change="selected = !selected"
        style="max-width: 18.75rem" 
      >
      <template #label="{label}">CUSTOM LABEL</template>
      </SfFilter>`
  }))
  .add("[slot] count", () => ({
    components: { SfFilter },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: number("count", 30, {}, "Props")
      }
    },
    data() {
      return {
        selected: true
      };
    },
    template: `<SfFilter 
        :label="label" 
        :count="count"
        :selected="selected"
        @change="selected = !selected"
        style="max-width: 18.75rem" 
      >
      <template #count="{count}">CUSTOM COUNT</template>
      </SfFilter>`
  }));
