// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {withKnobs, text, boolean, number, object} from "@storybook/addon-knobs";

import SfImage from "./SfImage.vue";

storiesOf("Atoms|Image", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    () => ({
      components: { SfImage },
      props: {
        src: {
          default: object( "(prop) src", {
            small: {
              url: "/assets/storybook/product-109x164.png",
              alt: "Vila stripe maxi shirt dress"
            },
            normal: {
              url: "/assets/storybook/product-216x326.png",
              alt: "Vila stripe maxi shirt dress"
            }
          })
        },
        placeholder: {
          default: text("(prop) placeholder", "/assets/placeholder.png")
        },
        transition: {
          default: text("(prop) transition", "fade")
        },
        lazy: {
          default: boolean("(prop) lazy", true)
        },
        pictureBreakpoint: {
          default: number("(prop) pictureBreakpoint", 576)
        }
      },
      template: `<SfImage
        :src="src"
        :alt="alt"
        :transition="transition"
        :lazy="lazy"
        :placeholder="placeholder"
        :picture-breakpoint="pictureBreakpoint" />`
    })
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfImage },
      props: {
        src: {
          default: object( "(prop) src", {
            small: {
              url: "/assets/storybook/product-109x164.png",
              alt: "Vila stripe maxi shirt dress"
            },
            normal: {
              url: "/assets/storybook/product-216x326.png",
              alt: "Vila stripe maxi shirt dress"
            }
          })
        },
        placeholder: {
          default: text("(prop) placeholder", "/assets/placeholder.png")
        },
        transition: {
          default: text("(prop) transition", "fade")
        },
        lazy: {
          default: boolean("(prop) lazy", true)
        },
        pictureBreakpoint: {
          default: number("(prop) pictureBreakpoint", 576)
        }
      },
      template: `<SfImage
        :src="src"
        :alt="alt"
        :transition="transition"
        :lazy="lazy"
        :placeholder="placeholder"
        :picture-breakpoint="pictureBreakpoint">
        <span></span>
      </SfImage>`
    })
  );
