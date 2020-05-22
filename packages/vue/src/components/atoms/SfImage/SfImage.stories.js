import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
} from "@storybook/addon-knobs";
import { SfImage } from "@storefront-ui/vue";
storiesOf("Atoms|Image", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfImage },
    props: {
      srcset: {
        default: object(
          "srcset",
            [
              {
                src: `/assets/storybook/SfImage/product-109x164.webp`,
                media: `(max-width: 480px)`,
                type: `image/webp`,
              },
              {
                src: `/assets/storybook/SfImage/product-109x164.webp`,
                media: `(min-width: 480px) and (max-width: 720px)`,
                type: `image/webp`,
              },
              {
                src: `/assets/storybook/SfImage/product-216x326.jpg`,
                media: `(min-width: 1240px)`,
                type: `image/jpg`,
              },
            ],
          "Props"
        ),
      },
      src: {
        default: text("src", "/assets/storybook/SfImage/product-216x326.jpg", "Props"),
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Props"),
      },
      width: {
        default: number("width", 216, {}, "Props"),
      },
      height: {
        default: number("height", 326, {}, "Props"),
      },
      lazy: {
        default: boolean("lazy", true, "Props"),
      },
      pictureBreakpoint: {
        default: number("pictureBreakpoint", 576, {}, "Props"),
      },
      rootMargin: {
        default: text("rootMargin", "", "Props"),
      },
      threshold: {
        default: number("threshold", 0, {}, "Props"),
      },
    },
    template: `<SfImage
        :src="src"
        :srcset="srcset"
        :alt="alt"
        :width="width"
        :height="height"
        :lazy="lazy"
        :picture-breakpoint="pictureBreakpoint" 
        :rootMargin="rootMargin"
        :threshold="threshold"/>`,
  }))
  .add("Without width and height", () => ({
    components: { SfImage },
    props: {
      src: {
        default: object(
          "src",
          {
            mobile: {
              url: "/assets/storybook/SfImage/product-109x164.jpg",
            },
            desktop: {
              url: "/assets/storybook/SfImage/product-216x326.jpg",
            },
          },
          "Props"
        ),
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Props"),
      },
      lazy: {
        default: boolean("lazy", true, "Props"),
      },
      pictureBreakpoint: {
        default: number("pictureBreakpoint", 576, {}, "Props"),
      },
      rootMargin: {
        default: text("rootMargin", "", "Props"),
      },
      threshold: {
        default: number("threshold", 0, {}, "Props"),
      },
    },
    template: `<SfImage
        :src="src"
        :alt="alt"
        :lazy="lazy"
        :picture-breakpoint="pictureBreakpoint"
        :rootMargin="rootMargin"
        :threshold="threshold"
      />`,
  }))
  .add("[slot] default", () => ({
    components: { SfImage },
    props: {
      src: {
        default: object(
          "src",
          {
            mobile: {
              url: "/assets/storybook/SfImage/product-109x164.jpg",
            },
            desktop: {
              url: "/assets/storybook/SfImage/product-216x326.jpg",
            },
          },
          "Props"
        ),
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Props"),
      },
      width: {
        default: number("width", 216, {}, "Props"),
      },
      height: {
        default: number("height", 326, {}, "Props"),
      },
      lazy: {
        default: boolean("lazy", true, "Props"),
      },
      pictureBreakpoint: {
        default: number("picture-breakpoint", 576, {}, "Props"),
      },
      rootMargin: {
        default: text("rootMargin", "", "Props"),
      },
      threshold: {
        default: number("threshold", 0, {}, "Props"),
      },
    },
    template: `<SfImage
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :lazy="lazy"
      :picture-breakpoint="pictureBreakpoint"
      :rootMargin="rootMargin"
      :threshold="threshold"
    >
      CUSTOM OVERLAY CONTENT
    </SfImage>`,
  }));
