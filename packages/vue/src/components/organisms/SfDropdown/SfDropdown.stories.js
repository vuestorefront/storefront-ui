/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

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
      title: {
        default: text("title", "title", "Props")
      },
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-dropdown--up": "sf-dropdown--up"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    data() {
      return {
        isOpen: true,
        items: ["item1", "item2", "item3", "item4", "item5"]
      };
    },
    template: `<div>
      <SfDropdown 
        :class="customClass"
        :is-open="isOpen" 
        :title="title"
        :transition="transition" 
        @triggerDropdown="isOpen = !isOpen" 
        @close="isOpen = false">
        <template #trigger>
          <div style="width: 300px;">
            <SfButton 
              style="display: flex; align-items: center; justify-content: space-between; padding: 5px;" 
              class="sf-button--underlined sf-button--full-width" 
              @click="isOpen = !isOpen">
              Name
              <SfChevron />
            </SfButton>
          </div>
        </template>
        <SfDropdownItem v-for="(item, i) in items" :key="i">
          <SfButton 
            class="sf-button--underlined sf-button--full-width"
            style="background: var(--c-white); color: var(--c-text-muted);"
          >
            {{ item }}
          </SfButton>
        </SfDropdownItem>
      </SfDropdown>
    </div>`
  }));
