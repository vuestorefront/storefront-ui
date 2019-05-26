import { storiesOf } from "@storybook/vue";
import SfCheckbox from "./SfCheckbox.vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default storiesOf("Molecules|Checkbox", module)
  .addDecorator(withKnobs)

  .add(
    "Basic",
    () => ({
      components: { SfCheckbox },

      data: () => {
        return {
          status: false
        };
      },

      props: {
        checkedValue: {
          default: boolean("checkedValue (prop)", true)
        },
        uncheckedValue: {
          default: boolean("uncheckedValue (prop)", false)
        },
        id: {
          default: text("id (prop)", "sf-checkbox-default")
        },
        name: {
          default: text("id (prop)", "sf-checkbox-default")
        },
        disabled: {
          default: boolean("disabled (prop)", false)
        }
      },

      template: `<SfCheckbox
        :id="id"
        :name="name"
        :disabled="disabled"
        v-model="status"
        />`
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
