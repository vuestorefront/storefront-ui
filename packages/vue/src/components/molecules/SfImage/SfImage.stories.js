// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfImage from "./SfImage.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["image__overlay-justify-content", "center", "size of checkmark"],
    ["$image__overlay-align-items", "center", "size of checkmark"],
    [
      "$image__overlay-background-color",
      "rgba(29, 31, 34, 0.8)",
      "size of checkmark"
    ],
    ["$image__overlay-color", "$c-white", "size of checkmark"]
  ]
};

storiesOf("Molecules|Image", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        editableProp: {
          default: text("(prop) propname")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-image--modifier"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfImage },
      template: `<SfImage
        src="assets/storybook/product_thumb.png"
        alt="angelina_trn"
        transition="slide-left"
      />`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
       <pre><code>import { SfImage } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      props: {
        editableProp: {
          default: text("(prop) propname")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-image--modifier"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfImage },
      template: `<SfImage
        src="assets/storybook/product_thumb.png"
        alt="angelina_trn"
        transition="slide-left"
      >
        angelina_trn
      </SfImage>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
       <pre><code>import { SfImage } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
