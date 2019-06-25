/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfButton from "./SfButton.vue";

storiesOf("Atoms|Button", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfButton },
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-button--secondary", "sf-button--full-width"],
            "null"
          )
        }
      },
      template: `
      <SfButton :class="customClass">Hello world</SfButton>
    `
    }),
    {
      info: {
        summary: `
        <h2> Description </h2>
        <p>Button component. Place desired content into its default slot.</p>
        <h2> Usage </h2>
        <pre><code>import { SfButton } from "@storefrontui/vue"</code></pre>
        `
      }
    }
  );
