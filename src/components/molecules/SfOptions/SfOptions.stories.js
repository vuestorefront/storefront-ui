/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfOptions from "./SfOptions.vue";

storiesOf("Options", module).add("with text", () => ({
  components: { SfOptions },
  template: '<sf-options :options="options" />',
  data() {
    return {
      options: [
        {
          id: "opt-size-xs",
          text: "XS",
          value: "XS"
        },
        {
          id: "opt-size-s",
          text: "S",
          value: "S"
        },
        {
          id: "opt-size-m",
          text: "M",
          value: "M"
        },
        {
          id: "opt-size-l",
          text: "L",
          value: "L"
        },
        {
          id: "opt-size-xl",
          text: "XL",
          value: "XL"
        }
      ]
    };
  }
}));
