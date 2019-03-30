import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfButton from "./../../src/components/atoms/SfButton/SfButton.vue";

export default storiesOf("Transitions", module)
  .add("fade in-out", () => ({
    components: { SfButton },
    template: `
    <div>
      <sf-button v-on:click="show = !show">
        Toggle
      </sf-button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>`,
    data: () => ({
      show: true
    })
  }));
