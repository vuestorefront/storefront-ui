import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import SfFilter from "./SfFilter.vue";

export default storiesOf("Molecules|Filter", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: {
      SfFilter
    },
    props: {
      color: {
        default: text("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      selected: {
        default: boolean("selected (prop)", true)
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        :color="color"
        :label="label"
        :count="count"
        :selected="selected" />
    </div>`
  }))
  .add("[slot] color", () => ({
    components: {
      SfFilter
    },
    props: {
      color: {
        default: text("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      selected: {
        default: boolean("selected (prop)", true)
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        :color="color"
        :label="label"
        :count="count"
        :selected="selected">
        <template #color="{color}">
            <div :style="{width: '20px', height:'20px', backgroundColor: color, borderRadius: '100%', marginRight: '10px'}"></div>
        </template>
      </SfFilter>
    </div>`
  }))
  .add("[slot] label", () => ({
    components: {
      SfFilter
    },
    props: {
      color: {
        default: text("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      selected: {
        default: boolean("selected (prop)", true)
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        :color="color"
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
      color: {
        default: text("color (prop)", "red")
      },
      label: {
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      selected: {
        default: boolean("selected (prop)", true)
      }
    },
    template: `<div style="max-width: 300px">
       <SfFilter
        :color="color"
        :label="label"
        :count="count"
        :selected="selected">
        <template #count="{count}">CUSTOM COUNT</template>
      </SfFilter>
    </div>`
  }));
