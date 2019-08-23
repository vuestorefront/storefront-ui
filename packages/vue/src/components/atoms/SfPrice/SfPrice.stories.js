/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfPrice from "./SfPrice.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$price-desktop-font-size",
      "$font-size-regular-desktop",
      "font size (desktop)"
    ],
    [
      "$price-mobile-font-size",
      "$font-size-regular-mobile",
      "font size (mobile)"
    ]
  ]
};
storiesOf("Atoms|Price", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        special: {
          default: text("special (prop)", "$50.00")
        },
        regular: {
          default: text("regular (prop)", "$100.00")
        }
      },
      components: { SfPrice },
      template: '<SfPrice :regular="regular" :special="special"/>'
    }),
    {
      info: {
        summary: `<p>Component for displaying product price.</p>
        <h2> Usage </h2>
        <pre><code>import { SfPrice } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  );
