import { storiesOf } from "@storybook/vue";

import SfProductOption from "./SfProductOption.vue";

import { withKnobs, text, select } from "@storybook/addon-knobs";

export default storiesOf("Molecules|ProductOption", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfProductOption },
      props: {
        label: {
          default: text("label", "Red")
        },
        color: {
          default: select("color", ["red", "null"], "red")
        }
      },
      template: `
      <div style="width: 300px">
          <SfProductOption
            :color="color"
            :label="label"
            value="filter_val"
          />
      </div>
    `
    }),
    {
      info: {
        summary: `
          <h2> Usage </h2>
          <pre><code>import SfProductOption from "@storefrontui/vue/dist/SfProductOption.vue"</code></pre>
          `
      }
    }
  );
