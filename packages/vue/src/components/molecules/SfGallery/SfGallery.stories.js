import { storiesOf } from "@storybook/vue";
import { withKnobs, object, number, boolean } from "@storybook/addon-knobs";
import { SfGallery } from "@storefront-ui/vue";
storiesOf("Molecules|Gallery", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfGallery },
    props: {
      enableZoom: {
        default: boolean("enableZoom", false, "Props"),
      },
      outsideZoom: {
        default: boolean("outsideZoom", false, "Props"),
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
      :outsideZoom="outsideZoom"
    />`,
  }));
