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
      isActive: {
        default: boolean("isActive", true, "Props")
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        v-model="isActive"
        :label="label"
        :count="count"
        :is-active="isActive"
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
      },
      isActive: {
        default: boolean("isActive", true, "Props")
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        v-model="isActive"
        :label="label"
        :count="count"
        :is-active="isActive">
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
      isActive: {
        default: boolean("isActive", true, "Props")
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        v-model="isActive"
        :label="label"
        :count="count"
        :is-active="isActive">
        <template #count="{count}">CUSTOM COUNT</template>
      </SfFilter>
    </div>`
  }));
