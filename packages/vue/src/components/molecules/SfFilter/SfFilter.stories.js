import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
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
      }
    },
    data() {
      return {
        checked: ""
      };
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        v-model="checked"
        :label="label"
        :count="count"
        />
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
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        v-model="checked"
        :label="label"
        :count="count">
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
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        v-model="checked"
        :label="label"
        :count="count">
        <template #count="{count}">CUSTOM COUNT</template>
      </SfFilter>
    </div>`
  }));
