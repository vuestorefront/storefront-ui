/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

import SfImage from "./SfImage.vue";

storiesOf("Atoms|Image", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfImage },
    props: {
      src: {
        default: object(
          "src",
          {
            mobile: {
              url: "/assets/storybook/product-109x164.jpg"
            },
            desktop: {
              url: "/assets/storybook/product-216x326.jpg"
            }
          },
          "Props"
        )
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Props")
      },
      width: {
        default: number("width", 216, {}, "Props")
      },
      height: {
        default: number("height", 326, {}, "Props")
      },
      lazy: {
        default: boolean("lazy", true, "Props")
      },
      pictureBreakpoint: {
        default: number("pictureBreakpoint", 576, {}, "Props")
      }
    },
    template: `<SfImage
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        :lazy="lazy"
        :picture-breakpoint="pictureBreakpoint" />`
  }))
  .add("Without width and height", () => ({
    components: { SfImage },
    props: {
      src: {
        default: object(
          "src",
          {
            mobile: {
              url: "/assets/storybook/product-109x164.jpg"
            },
            desktop: {
              url: "/assets/storybook/product-216x326.jpg"
            }
          },
          "Props"
        )
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Props")
      },
      lazy: {
        default: boolean("lazy", true, "Props")
      },
      pictureBreakpoint: {
        default: number("pictureBreakpoint", 576, {}, "Props")
      }
    },
    template: `<div style="display: flex">
      <SfImage
        :src="src"
        :alt="alt"
        :lazy="lazy"
        :picture-breakpoint="pictureBreakpoint"
      />
      <p>
        I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend.. Read more
      </p>
      </div>
    `
  }))
  .add("[slot] default", () => ({
    components: { SfImage },
    props: {
      src: {
        default: object(
          "src",
          {
            mobile: {
              url: "/assets/storybook/product-109x164.jpg"
            },
            desktop: {
              url: "/assets/storybook/product-216x326.jpg"
            }
          },
          "Props"
        )
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Props")
      },
      width: {
        default: number("width", 216, {}, "Props")
      },
      height: {
        default: number("height", 326, {}, "Props")
      },
      lazy: {
        default: boolean("lazy", true, "Props")
      },
      pictureBreakpoint: {
        default: number("picture-breakpoint", 576, {}, "Props")
      }
    },
    template: `<SfImage
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :lazy="lazy"
      :picture-breakpoint="pictureBreakpoint"
    >
      CUSTOM OVERLAY CONTENT
    </SfImage>`
  }));
