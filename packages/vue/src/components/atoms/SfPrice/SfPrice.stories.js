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
        <pre><code>import { SfPrice } from "@storefrontui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  );
