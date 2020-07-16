import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfDropdown, SfList, SfButton } from "@storefront-ui/vue";
storiesOf("Molecules|Dropdown", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfDropdown, SfList, SfButton },
    props: {
      title: {
        default: text("title", "Choose size", "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
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
        actionList: [
          "Add to cart",
          "Add to compare",
          "Add to wishlist",
          "Share",
        ],
      };
    },
    template: `<div style="display:flex">
      <div style="position: relative; display: inline-block;">
        <SfButton @click="isOpen = true">Choose your action</SfButton>
        <SfDropdown :class="customClass" :is-open="isOpen" :persistent="persistent" :title="title" @click:close="isOpen = false">
          <SfList>
            <SfListItem v-for="(action, key) in actionList" :key="key">
              <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="isOpen = !isOpen">{{ action }}</SfButton>
            </SfListItem>
          </SfList>
        </SfDropdown>
      </div>
    </div>`,
  }))
  .add("With up modifier", () => ({
    components: { SfDropdown, SfList, SfButton },
    props: {
      title: {
        default: text("title", "Choose size", "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-dropdown--up": "sf-dropdown--up",
          },
          "sf-dropdown--up",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
    },
    data() {
      return {
        isOpen: false,
        actionList: [
          "Add to cart",
          "Add to compare",
          "Add to wishlist",
          "Share",
        ],
      };
    },
    template: `<div>
      <div style="position: absolute; display: inline-block; bottom: 0;">
        <SfButton @click="isOpen = true">Choose your action</SfButton>
        <SfDropdown :class="customClass" :is-open="isOpen" :persistent="persistent" :title="title" @click:close="isOpen = false">
          <SfList>
            <SfListItem v-for="(action, key) in actionList" :key="key">
              <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="isOpen = false">{{ action }}</SfButton>
            </SfListItem>
          </SfList>
        </SfDropdown>
      </div>
    </div>`,
  }));
