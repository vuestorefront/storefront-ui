import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import SfScrollable from "./SfScrollable.vue";
import SfProductOption from "../SfProductOption/SfProductOption.vue";

storiesOf("Molecules|Scrollable", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfScrollable, SfProductOption },
    data() {
      return {
        options: [
          {
            color: "red",
            label: "Red"
          },
          {
            color: "blue",
            label: "Blue"
          },
          {
            color: "green",
            label: "Green"
          },
          {
            color: "black",
            label: "Black"
          },
          {
            color: "navy",
            label: "Navy"
          }
        ]
      };
    },
    template: `<SfScrollable button-text="View all colors">
        <SfProductOption v-for="option in options" :color="option.color" :label="option.label"></SfProductOption>
    </SfScrollable>`
  }));
