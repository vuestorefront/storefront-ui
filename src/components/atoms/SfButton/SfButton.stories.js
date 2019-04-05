/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfButton from "./SfButton.vue";

storiesOf("Button", module)
  .add(
    "with text",
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
    "with some emoji",
    () => ({
      components: { SfButton },
      template: '<sf-button @click="action">😀 😎 👍 💯</sf-button>',
      methods: { action: action("clicked") }
    }),
    {
      info: true
    }
  );
