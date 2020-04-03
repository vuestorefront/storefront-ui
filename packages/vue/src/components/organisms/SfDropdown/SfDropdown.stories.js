/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import SfDropdown from "./SfDropdown.vue";
import { SfButton, SfChevron } from "@storefront-ui/vue";

storiesOf("Organisms|Dropdown", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfDropdown, SfButton, SfChevron },
    props: {
      transition: {
        default: text("transition", "fade", "Props")
      },
      dropdownUp: {
        default: boolean("dropdownUp", false, "Props")
      },
      label: {
        default: text("label", "Label", "Props")
      },
      cancelLabel: {
        default: text("cancelLabel", "Cancel", "Props")
      }
    },
    data() {
      return {
        isOpen: false,
        items: ["item1", "item2", "item3", "item3", "item3"]
      };
    },
    template: `<SfDropdown 
  :is-open="isOpen" 
  :label="label"
  :cancel-label="cancelLabel"
  :dropdownUp="dropdownUp" 
  :transition="transition" 
  @triggerDropdown="isOpen = !isOpen" 
  @close="isOpen = false">
    <SfButton class="sf-button--underlined" v-for="(item, i) in items" :key="i" style="width: 100%; --button-background: var(--c-white)">{{ item }}</SfButton>
   </SfDropdown>`
  }));
