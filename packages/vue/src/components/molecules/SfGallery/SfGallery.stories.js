/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object, number } from "@storybook/addon-knobs";

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
      },
      current: {
        default: number("current (prop)", 0)
      }
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
      },
      current: {
        default: number("current (prop)", 0)
      }
    },
    template: `<SfGallery
    :images="images"
    :slider-options="sliderOptions"
    :current="current">
    <template #thumbs>
      <!-- slot content -->
    </template>
  </SfGallery>`
  }));
