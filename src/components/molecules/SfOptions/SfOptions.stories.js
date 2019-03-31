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
          headingId: "option-label-size-1",
          id: "opt-size-xs",
          text: "XS",
          value: "XS"
        },
        {
          headingId: "option-label-size-1",
          id: "opt-size-s",
          text: "S",
          value: "S"
        },
        {
          headingId: "option-label-size-1",
          id: "opt-size-m",
          text: "M",
          value: "M"
        },
        {
          headingId: "option-label-size-1",
          id: "opt-size-l",
          text: "L",
          value: "L"
        },
        {
          headingId: "option-label-size-1",
          id: "opt-size-xl",
          text: "XL",
          value: "XL"
        }
      ]
    };
  }
}));
