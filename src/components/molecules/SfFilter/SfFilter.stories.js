import { storiesOf } from "@storybook/vue";

import SfFilter from "./SfFilter.vue";

import { withKnobs, text, select } from "@storybook/addon-knobs";

export default storiesOf("Molecules|Filter", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfFilter },
      data() {
        return {
          activeFilters: []
        };
      },
      props: {
        multiple: {
          default: select("multiple (prop)", ["true", "false"], "true")
        },
        title_1: {
          default: text("label (prop of SfFilterItem)", "Red")
        },
        count_1: {
          default: text("count (prop of SfFilterItem)", "30")
        },
        color_1: {
          default: select(
            "color (prop of SfFilterItem)",
            ["red", "null"],
            "red"
          )
        },
        title_2: {
          default: text("label (prop of SfFilterItem)", "Blue")
        },
        count_2: {
          default: text("count (prop of SfFilterItem)", "30")
        },
        color_2: {
          default: select(
            "color (prop of SfFilterItem)",
            ["blue", "null"],
            "blue"
          )
        }
      },
      template: `
      <div style="width: 300px">
        <SfFilter v-model="activeFilters">
          <SfFilterItem
            :color="color_1"
            :label="title_1"
            :count="count_1"
            value="filter_1_red"
          />
          <SfFilterItem
            :color="color_2"
            :label="title_2"
            :count="count_2"
            value="filter_2_blue"
          />
        </SfFilter>
        <p><b>Active filters:</b> {{ activeFilters }}</p>
      </div>
    `
    }),
    {
      info: {
        summary: `
          <h2> Description </h2>
          <p>This component should be used for filtering products on listings. Use \`<SfFilter>\` as a wrapper for individual filters (\`<SfFilterItem>\`). Value passed to \`v-model\` holds an array (or string if multiple prop is set to false) of value properties from active filters.</p>
          <p> \`<SfFilterItem>\` has following properties:</p>
          <ul>
            <li> \`label\` - label that will be displayed in a component</li>
            <li> \`value\` - unique identifier</li>
            <li> \`count\` - (optional) number of items matching given filter</li>
            <li> \`color\` - (optional) color that will be displayed in a box on the left side (all valid CSS colors can be passed)</li>
          </ul>
          <h2> Usage </h2>
          <pre><code>import SfFilter from "@storefrontui/vue/dist/SfFilter.vue"</code></pre>
          `
      }
    }
  );
