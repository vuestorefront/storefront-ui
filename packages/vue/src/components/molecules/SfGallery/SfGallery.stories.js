/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object, number, boolean } from "@storybook/addon-knobs";
import SfGallery from "./SfGallery.vue";
storiesOf("Molecules|Gallery", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfGallery },
    props: {
      enableZoom: {
        default: boolean("enableZoom", false, "Props")
      },
      outsideZoom: {
        default: boolean("outsideZoom", false, "Props")
      },
      images: {
        default: object(
          "images",
          [
            {
              alt: "Macbook PRO Apple",
              mobile: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              },
              desktop: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              },
              zoom: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              }
            },
            {
              alt: "Macbook PRO Apple (keyboard)",
              mobile: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              },
              desktop: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              },
              zoom: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              }
            }
          ],
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 400, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 400, {}, "Props")
      },
      sliderOptions: {
        default: object(
          "sliderOptions",
          {
            autoplay: false,
            rewind: true
          },
          "Props"
        )
      }
    },
    data() {
      return {
        current: 0
      };
    },
    template: `<SfGallery
      :images="images"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :slider-options="sliderOptions"
      :current="current"
      :enable-zoom="enableZoom"
      :outside-zoom="outsideZoom"/>`
  }))
  .add("[slot] thumbs", () => ({
    components: { SfGallery },
    props: {
      enableZoom: {
        default: boolean("enable-zoom", false, "Props")
      },
      outsideZoom: {
        default: boolean("outside-zoom", false, "Props")
      },
      images: {
        default: object(
          "images",
          [
            {
              alt: "Macbook PRO Apple",
              mobile: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              },
              desktop: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              },
              zoom: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              }
            },
            {
              alt: "Macbook PRO Apple (keyboard)",
              mobile: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              },
              desktop: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              },
              zoom: {
                url:
                  "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg"
              }
            }
          ],
          "Props"
        )
      },
      sliderOptions: {
        default: object(
          "sliderOptions",
          {
            autoplay: false,
            rewind: true
          },
          "Props"
        )
      }
    },
    data() {
      return {
        current: 0
      };
    },
    template: `<SfGallery
    :images="images"
    :slider-options="sliderOptions"
    :current="current"
    :enable-zoom="enableZoom"
    :outside-zoom="outsideZoom">
    <template #thumbs="{images, active, go}">
      <div v-for="(image, key) in images" :key="key" @click="go(key)" style="position: relative">
        <img :src="image.mobile.url" :alt="image.alt">
        <div v-if="active === key" style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%">🔘</div>
      </div>
    </template>
  </SfGallery>`
  }));
