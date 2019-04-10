/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfButton from "./SfButton.vue";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "[slot] default",
    () => ({
      components: { SfButton },
      template: '<sf-button @click="action">Hello Button</sf-button>',
      methods: { action: action("clicked") }
    }),
    {
      info: true
    }
  )
  .add(
    "CSS Modifiers",
    () => ({
      components: { SfButton },
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-button--secondary", "sf-button--full-width"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      template: `
      <SfButton :class="customClass">Hello world</SfButton>
    `
    }),
    {
      info: true
    }
  );
