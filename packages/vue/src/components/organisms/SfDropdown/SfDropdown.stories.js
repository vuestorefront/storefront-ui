/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import SfDropdown from "./SfDropdown.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

storiesOf("Organisms|Dropdown", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfDropdown, SfButton },
    props: {
      isOpen: {
        default: boolean("isOpen", true, "Props")
      },
      transition: {
        default: text("transition", "fade", "Props")
      }
    },
    data() {
      return {
        items: [
          {
            name: "item1"
          },
          {
            name: "item2"
          },
          {
            name: "item3"
          }
        ]
      };
    },
    template: `<SfDropdown :is-open="isOpen" :transition="transition">
        <SfButton v-for="item in items" :key="item" style="width: 100%">{{ item.name }}</SfButton>
    </SfDropdown>`
  }));
