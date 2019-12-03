/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object } from "@storybook/addon-knobs";

import SfGallery from "./SfGallery.vue";

storiesOf("Molecules|Gallery", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfGallery },
    props: {
      images: {
        default: object("images (prop)", [
          {
            small: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple"
            },
            normal: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple"
            },
            big: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple"
            }
          },
          {
            small: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple (keyboard)"
            },
            normal: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple (keyboard)"
            },
            big: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple (keyboard)"
            }
          }
        ])
      },
      sliderOptions: {
        default: object("slider-options (prop)", {
          autoplay: false,
          rewind: true
        })
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
      :current="current" />`
  }))
  .add("[slot] thumbs", () => ({
    components: { SfGallery },
    props: {
      images: {
        default: object("images (prop)", [
          {
            small: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple"
            },
            normal: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple"
            },
            big: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple"
            }
          },
          {
            small: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple (keyboard)"
            },
            normal: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple (keyboard)"
            },
            big: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/700px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple (keyboard)"
            }
          }
        ])
      },
      sliderOptions: {
        default: object("slider-options (prop)", {
          autoplay: false,
          rewind: true
        })
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
    :current="current">
    <template #thumbs="{images, active, go}">
      <div v-for="(image, key) in images" :key="key" @click="go(key)" style="position: relative">
        <img :src="image.small.url" :alt="image.small.alt">
        <div v-if="active === key" style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%">🔍</div>
      </div>
    </template>
  </SfGallery>`
  }));
