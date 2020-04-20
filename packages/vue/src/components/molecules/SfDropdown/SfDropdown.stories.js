import {
  withKnobs,
  text,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfDropdown, SfList, SfButton } from "@storefront-ui/vue";
export default {
  title: "Molecules|Dropdown",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfDropdown, SfList, SfButton },
  props: {
    title: {
      default: text("title", "Choose size", "Props"),
    },
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-dropdown--up": "sf-dropdown--up",
        },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
  },
  data() {
    return {
      isOpen: false,
      actionList: ["Add to cart", "Add to compare", "Add to wishlist", "Share"],
    };
  },
  template: `<div>
      <div style="position: relative; display: inline-block;">
        <SfButton @click="isOpen = !isOpen">Choice your action</SfButton>
        <SfDropdown :is-open="isOpen" :title="title" @click:close="isOpen = !isOpen">
          <SfList>
            <SfListItem v-for="(action, key) in actionList" :key="key">
              <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="isOpen = !isOpen">{{ action }}</SfButton>
            </SfListItem>
          </SfList>
        </SfDropdown>
      </div>
    </div>`,
});
