import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import SfFilter from "./SfFilter.vue";
storiesOf("Molecules|Filter", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfFilter
    },
    data() {
      return {
        filters: [
          {
            label: "Red",
            count: "30",
            selected: false
          },
          {
            label: "Blue",
            count: "20",
            selected: false
          }
        ]
      };
    },
    label: {
      default: text("label", "Red", "Props")
    },
    count: {
      default: text("count", "30", "Props")
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        v-for="filter in filters"
        v-model="filter.selected"
        :key="filter.label"
        :label="filter.label"
        :count="filter.count"
        :selected="filter.selected"
        />
    </div>`
  }))
  .add("[slot] label", () => ({
    components: {
      SfFilter
    },
    data() {
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
      };
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
    data() {
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
      };
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
         v-for="filter in filters"
         v-model="filter.selected"
         :key="filter.label"
        :label="filter.label"
        :count="filter.count">
        <template #count="{count}">CUSTOM COUNT</template>
      </SfFilter>
    </div>`
  }));
