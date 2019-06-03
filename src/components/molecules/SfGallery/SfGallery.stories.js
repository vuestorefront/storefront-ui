/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import SfGallery from "./SfGallery.vue";

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
          <pre><code>import SfGallery from "@storefrontui/vue/dist/SfGallery.vue"</code></pre>
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
