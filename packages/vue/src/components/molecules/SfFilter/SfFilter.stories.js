import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfFilter from "./SfFilter.vue";
storiesOf("Molecules|Filter", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfFilter
    },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: text("count", "30", "Props")
      },
      selected: {
        default: boolean("selected", true, "Props")
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        :label="label"
        :count="count"
        :selected="selected" />
    </div>`
  }))
  .add("[slot] label", () => ({
    components: {
      SfFilter
    },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: text("count", "30", "Props")
      },
      selected: {
        default: boolean("selected", true, "Props")
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        :label="label"
        :count="count"
        :selected="selected">
        <template #label="{label}">CUSTOM LABEL</template>
      </SfFilter>
    </div>`
  }))
  .add("[slot] count", () => ({
    components: {
      SfFilter
    },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: text("count", "30", "Props")
      },
      selected: {
        default: boolean("selected", true, "Props")
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        :label="label"
        :count="count"
        :selected="selected">
        <template #count="{count}">CUSTOM COUNT</template>
      </SfFilter>
    </div>`
  }));
