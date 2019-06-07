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
        specialPrice: {
          default: text("specialPrice (prop)", "$50.00")
        },
        regularPrice: {
          default: text("regularPrice (prop)", "$100.00")
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
