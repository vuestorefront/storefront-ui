/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfButton from "./SfButton.vue";

storiesOf("Button", module)
  .addDecorator(withKnobs)
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
  );
