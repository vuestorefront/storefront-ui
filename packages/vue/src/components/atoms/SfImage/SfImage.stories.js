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

const data = () => {
  return {
    src: {
      normal: {
        url:
          "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
        alt: "Macbook PRO Apple"
      },
      small: {
        url:
          "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
        alt: "Macbook PRO Apple"
      }
    }
  };
};

storiesOf("Atoms|Image", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
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
      data,
      components: { SfImage },
      template: `<SfImage
        :src="src"
        />`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
        <pre><code>import { SfImage } from "@storefrontui/vue"</code></pre>
        To render a picture tag with different img sizes for mobile and desktop
        you should pass an object with the format below:
        <code>
        let src = {
          small: { url, alt },
          normal: { url, alt }
        }
        </code>
        <br>
        <br>
        To render a simple img tag you should pass
        an src string with the image url:
        <code>let src = "assets/storybook/product_thumb.jpg"</code>
        <br>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      props: {
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
      data,
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
