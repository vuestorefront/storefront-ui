import { storiesOf } from "@storybook/vue";

import SfProductOption from "./SfProductOption.vue";

import { withKnobs, text, select } from "@storybook/addon-knobs";

export default storiesOf("Molecules|ProductOption", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfProductOption },
      data() {
        return {
          activeFilters: []
        };
      },
      props: {
        title: {
          default: text("label (prop of SfFilterItem)", "Red")
        },
        count: {
          default: text("count (prop of SfFilterItem)", "30")
        },
        color: {
          default: select(
            "color (prop of SfFilterItem)",
            ["red", "null"],
            "red"
          )
        }
      },
      template: `
      <div style="width: 300px">
          <SfProductOption
            :color="color"
            :label="title"
            value="filter_val"
          />
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
