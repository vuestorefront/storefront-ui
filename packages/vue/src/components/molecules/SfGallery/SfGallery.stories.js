/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfGallery from "./SfGallery.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$pagination__list-padding", "1rem", "padding for paginated list"],
    ["$gallery-flex-direction", "row", "flex direction for gallery"],
    ["$gallery__nav-width", "100px", "minimum height for menu item"],
    [
      "$gallery__nav-margin",
      "0 $spacing-extra-big 0 0",
      "nav margin for gallery"
    ],
    [
      "$gallery__item-margin-bottom",
      "$spacing-medium",
      "margin for gsllery item"
    ],
    ["$gallery__item-opacity", ".5", "opacity for gallery item"],
    [
      "$gallery__item-transition",
      "opacity .15s linear",
      "transistion for gallery item"
    ],
    ["$gallery__item-mobile-size", "10px", "size of gallery item on mobile"],
    ["$gallery__stage-width", "400px", "width of gallery stage"]
  ]
};

const data = () => {
  return {
    images: [
      {
        zoom: {
          url:
            "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
          alt: "Macbook PRO Apple"
        },
        small: {
          url:
            "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
          alt: "Macbook PRO Apple"
        },
        big: {
          url:
            "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
          alt: "Macbook PRO Apple"
        }
      },
      {
        zoom: {
          url:
            "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
          alt: "Macbook PRO Apple (keyboard)"
        },
        small: {
          url:
            "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
          alt: "Macbook PRO Apple (keyboard)"
        },
        big: {
          url:
            "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
          alt: "Macbook PRO Apple (keyboard)"
        }
      }
    ]
  };
};

storiesOf("Molecules|Gallery", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      props: {
        autoplay: {
          default: number("sliderOptions (prop) autoplay")
        },
        rewind: {
          default: boolean("sliderOptions (prop) rewind", false)
        },
        current: {
          default: number("current (prop)", 1)
        }
      },
      data,
      components: { SfGallery },
      template: `<SfGallery
        :sliderOptions="{ autoplay, rewind }"
        v-model="current"
        :images="images" />`
    }),
    {
      info: {
        summary: `
          <h2>
            Description
          </h2>
          <p>
            Swappable gallery for product images,
            called by <code>&lt;SfGallery&gt;</code>.
            <br>
            You may use it with <code>v-model</code> to control current image,
            by default it starts with the first image.
            <br>
            You <b>must</b> pass an array of objects (images) with the format below:
            <code>
          let images = [
            {
              small: { url, alt },
              big: { url, alt },
              zoom: { url, alt }
            }
          ]
            </code>
          </p>
          <h2> Usage </h2>
          <pre><code>import { SfGallery } from "@storefront-ui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          `
      }
    }
  )
  .add(
    "[slot] thumb",
    () => ({
      data,
      components: { SfGallery },
      template: `
       <SfGallery :images="images">
         <template #thumb="{ image, index }">
           #{{ index }}
           <img class="sf-gallery__thumb" :src="image.small.url" />
         </template>
       </SfGallery>`
    }),
    {
      info: true
    }
  );
