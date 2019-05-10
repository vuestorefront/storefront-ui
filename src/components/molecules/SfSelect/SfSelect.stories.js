// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./SfSelect.md";
import SfSelect from "./SfSelect.vue";

storiesOf("Molecules|[WIP] Select", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfSelect },
      data() {
        return {
          selected: "s"
        };
      },
      template: `
        <div style="width: 300px;">
          <SfSelect v-model="selected">
            <SfSelectOption 
              value="s" 
              label="S" />
            <SfSelectOption 
              value="m" 
              label="M" />
            <SfSelectOption 
              value="l" 
              label="L" />
          </SfSelect>
        </div>
      `
    }),
    {
      info: {
        summary: `
        <h2> Description </h2>
        <p>This component should be used for selecting an option. Use \`<SfSelect>\` as a wrapper for individual filters (\`<SfSelectOption>\`). Value passed to \`v-model\` holds an string of value properties from active option.</p>
        <p> \`<SfSelectItem>\` has following properties:</p>
        <ul>
          <li> \`label\` - label that will be displayed in a component</li>
          <li> \`value\` - unique identifier</li>
          <li> \`color\` - (optional) color that will be displayed in a box on the left side (all valid CSS colors can be passed)</li>
        </ul>
        <h2> Usage </h2>
        <pre><code>import SfSelect from "@storefrontui/vue/dist/SfSelect.vue"</code></pre>
        `
      },
      notes
    }
  );
