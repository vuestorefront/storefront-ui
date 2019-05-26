// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md"
import SfBadge from "./SfBadge.vue";

storiesOf("Atoms|Badge", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfBadge },
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-badge--alert", "sf-badge--warning", "sf-button--full-width","sf-button--full-width  sf-badge--warning"],
            "null"
          )
        }
      },
      template: `<SfBadge :class="customClass">
      LIMITED
</SfBadge>`
    }),
    {
      info: {
        summary: `
        <h2> Description </h2>
        <p>Badge component. Place desired content into its default slot.</p>
        <h2> Usage </h2>
        <pre><code>import SfBadge from "@storefrontui/vue/dist/SfBadge.vue"</code></pre>
        `
      }
    }
  )


        
