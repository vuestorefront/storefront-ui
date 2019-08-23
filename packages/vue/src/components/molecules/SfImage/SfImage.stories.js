// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfImage from "./SfImage.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "image__overlay-justify-content",
      "center",
      "overlay content horizontal justify"
    ],
    ["$image__overlay-align-items", "center", "overlay content vertical align"],
    [
      "$image__overlay-background-color",
      "rgba(29, 31, 34, 0.8)",
      "overlay background color"
    ],
    ["$image__overlay-color", "$c-white", "overlay content color"]
  ]
};

storiesOf("Molecules|Image", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        src: {
          default: text("src (prop)", "assets/storybook/product_thumb.png")
        },
        alt: {
          default: text("alt (prop)", "angelina_trn")
        }
      },
      components: { SfImage },
      template: `<SfImage
        :src="src"
        alt="angelina_trn"/>`
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
        src: {
          default: text("src (prop)", "assets/storybook/product_thumb.png")
        },
        alt: {
          default: text("alt (prop)", "angelina_trn")
        },
        transition: {
          default: select(
            "transition (prop)",
            {
              fade: "fade",
              "slide-left": "slide-left",
              "slide-right": "slide-right",
              "collapse-top": "collapse-top",
              "collapse-bottom": "collapse-bottom",
              "fade-slide": "fade-slide",
              "fade-collapse": "fade-collapse"
            },
            "fade"
          )
        }
      },
      components: { SfImage },
      template: `<SfImage
        :src="src"
        :alt="alt"
        :transition="transition"
      >angelina_trn</SfImage>`
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
