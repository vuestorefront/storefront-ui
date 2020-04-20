import {
  withKnobs,
  text,
  boolean,
  number,
  object,
} from "@storybook/addon-knobs";
import { SfImage } from "@storefront-ui/vue";
export default {
  title: "Atoms|Image",
  decorators: [withKnobs],
};
export const Common = () => ({
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
        :width="width"
        :height="height"
        :lazy="lazy"
        :picture-breakpoint="pictureBreakpoint" 
        :rootMargin="rootMargin"
        :threshold="threshold"/>`,
});
export const WithoutWidthAndHeight = () => ({
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
});
WithoutWidthAndHeight.story = {
  name: "Without width and height",
};
export const SlotDefault = () => ({
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
});
SlotDefault.story = {
  name: "[slot] default",
};
