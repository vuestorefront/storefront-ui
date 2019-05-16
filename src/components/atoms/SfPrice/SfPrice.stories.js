/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfPrice from "./SfPrice.vue";

storiesOf("Atoms|Price", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        regularPrice: {
          default: text("regularPrice (prop)", "$3,99")
        },
        specialPrice: {
          default: text("specialPrice (prop)", "$3,59")
        }
      },
      components: { SfPrice },
      template:
        '<SfPrice :regular-price="regularPrice" :special-price="specialPrice"/>'
    }),
    {
      info: {
        summary: `<p>Component for displaying product price.</p>
        <h2> Usage </h2>
        <pre><code>import SfPrice from "@storefrontui/vue/dist/SfPrice.vue"</code></pre>
        `
      },
      notes
    }
  );
