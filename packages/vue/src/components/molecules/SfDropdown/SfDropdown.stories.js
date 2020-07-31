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
    template: `
            <SfDropdown :class="customClass" :is-open="isOpen"  @click:close="isOpen = false" @click:open="isOpen = true" :persistent="persistent" :title="title">
              <template>
                <SfList>
                  <SfListItem v-for="(action, key) in actionList" :key="key">
                    <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="isOpen = false">{{ action }}</SfButton>
                  </SfListItem>
                </SfList>
              </template> 
            </SfDropdown>`,
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
    template: `      
        <SfDropdown :class="customClass" :is-open="isOpen"  @click:close="isOpen = false" @click:open="isOpen = true" :persistent="persistent" :title="title">
          <template>
            <SfList>
              <SfListItem v-for="(action, key) in actionList" :key="key">
                <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="isOpen = false">{{ action }}</SfButton>
              </SfListItem>
            </SfList>
          </template>
        </SfDropdown>`,
  }));
