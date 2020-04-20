import { withKnobs, object, number, boolean } from "@storybook/addon-knobs";
import SfGallery from "./SfGallery.vue";
export default {
  title: "Molecules|Gallery",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfGallery },
  props: {
    enableZoom: {
      default: boolean("enableZoom", false, "Props"),
    },
    images: {
      default: object(
        "images",
        [
          {
            alt: "Product A",
            mobile: {
              url: "assets/storybook/SfGallery/productA.png",
            },
            desktop: {
              url: "assets/storybook/SfGallery/productA.png",
            },
            zoom: {
              url: "assets/storybook/SfGallery/productA.png",
            },
          },
          {
            alt: "Product B",
            mobile: {
              url: "/assets/storybook/SfGallery/productB.jpg",
            },
            desktop: {
              url: "/assets/storybook/SfGallery/productB.jpg",
            },
            zoom: {
              url: "/assets/storybook/SfGallery/productB.jpg",
            },
          },
          {
            alt: "Product A",
            mobile: {
              url: "assets/storybook/SfGallery/productA.png",
            },
            desktop: {
              url: "assets/storybook/SfGallery/productA.png",
            },
            zoom: {
              url: "assets/storybook/SfGallery/productA.png",
            },
          },
          {
            alt: "Product B",
            mobile: {
              url: "/assets/storybook/SfGallery/productB.jpg",
            },
            desktop: {
              url: "/assets/storybook/SfGallery/productB.jpg",
            },
            zoom: {
              url: "/assets/storybook/SfGallery/productB.jpg",
            },
          },
        ],
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 422, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 664, {}, "Props"),
    },
    sliderOptions: {
      default: object(
        "sliderOptions",
        {
          autoplay: false,
          rewind: true,
          gap: 0,
        },
        "Props"
      ),
    },
  },
  data() {
    return {
      current: 1,
    };
  },
  template: `<SfGallery
      :images="images"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :slider-options="sliderOptions"
      :current="current"
      :enable-zoom="enableZoom"
    />`,
});
