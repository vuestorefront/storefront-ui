/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import SfQuantitySelector from "./SfQuantitySelector.vue";
storiesOf("Atoms|QuantitySelector", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfQuantitySelector },
    data() {
      return {
        value: 1
      };
    },
    template: `<SfQuantitySelector 
        v-model="value"         
      />`
  }));
