import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfChevron from "@/components/atoms/SfChevron/SfChevron.vue";

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [[".sf-chevron--top", "change chevron direction to top"]]
};

storiesOf("Atoms|Chevron", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-chevron--top": "sf-chevron--top"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      components: {
        SfChevron
      },
      template: '<SfChevron :class="customClass" />'
    }),
    {
      info: {
        summary: `
            <h2> Description </h2>
            <p>Chevron component. Place desired content into slot.</p>
            <h2> Usage </h2>
            <pre><code>import { SfChevron } from "@storefront-ui/vue"</code></pre>
            ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
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
