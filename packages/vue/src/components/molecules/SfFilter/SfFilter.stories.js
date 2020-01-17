import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfFilter from "./SfFilter.vue";
storiesOf("Molecules|Filter", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfFilter
    },
    data () {
      return {
        filters: [
          {
            label: "Red",
            count: "30",
            selected: false
          },
          {
            label: "Blue",
            count: "30",
            selected: false
          }
        ]
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        v-for="filter in filters"
        :key="filter.label"
        :label="filter.label"
        :count="filter.count"
        :selected="filter.selected"
        @click="filter.selected = !filter.selected"
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
