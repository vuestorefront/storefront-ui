import { storiesOf } from "@storybook/vue";
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import SfGallery from "./SfGallery.vue";

const vm = {
  components: { SfGallery },
  data: () => {
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
  },
  methods: {}
};

export default storiesOf("Gallery", module).add(
  "Props",
  () => ({
    ...vm,
    template: `
    <sf-gallery :images='images' />`
  }),
  {
    info: true
  }
);
