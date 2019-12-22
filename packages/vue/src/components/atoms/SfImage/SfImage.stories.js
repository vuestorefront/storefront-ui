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
            small: {
              url: "/assets/storybook/product-109x164.jpg",
              alt: "Vila stripe maxi shirt dress"
            },
            normal: {
              url: "/assets/storybook/product-216x326.jpg",
              alt: "Vila stripe maxi shirt dress"
            }
          },
          "Props"
        )
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Props")
      },
      placeholder: {
        default: text("placeholder", "/assets/placeholder.png", "Props")
      },
      transition: {
        default: text("transition", "fade", "Props")
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
        :transition="transition"
        :lazy="lazy"
        :placeholder="placeholder"
        :picture-breakpoint="pictureBreakpoint" />`
  }))
  .add("[slot] default", () => ({
    components: { SfImage },
    props: {
      src: {
        default: object(
          "src",
          {
            small: {
              url: "/assets/storybook/product-109x164.jpg"
            },
            normal: {
              url: "/assets/storybook/product-216x326.jpg"
            }
          },
          "Props"
        )
      },
      alt: {
        default: text("alt", "Vila stripe maxi shirt dress", "Props")
      },
      placeholder: {
        default: text("placeholder", "/assets/placeholder.png", "Props")
      },
      transition: {
        default: text("transition", "fade", "Props")
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
      :transition="transition"
      :lazy="lazy"
      :placeholder="placeholder"
      :picture-breakpoint="pictureBreakpoint">
      <span>CUSTOM OVERLAY CONTENT</span>
    </SfImage>`
  }));
