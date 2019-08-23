import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfChevron from "@/components/atoms/SfChevron/SfChevron.vue";

storiesOf("Atoms|Chevron", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        isActive: {
          default: boolean("isActive (prop)", "false")
        }
      },
      components: {
        SfChevron
      },
      template: '<SfChevron :isActive="isActive"/>'
    }),
    {
      info: {
        summary: `
            <h2> Description </h2>
            <p>Chevron component. Place desired content into slot.</p>
            <h2> Usage </h2>
            <pre><code>import { SfChevron } from "@storefront-ui/vue"</code></pre>
            `
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: {
        SfChevron
      },
      template: `<SfChevron><img src='assets/chevron_down.svg' alt="Chevron icon"></SfChevron>`
    }),
    {
      info: {
        summary: "Use this slot if passing basic props in not enough."
      }
    }
  );
