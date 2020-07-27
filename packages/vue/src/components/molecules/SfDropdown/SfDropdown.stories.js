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
        toggle: false,
        actionList: [
          "Add to cart",
          "Add to compare",
          "Add to wishlist",
          "Share",
        ],
      };
    },
    template: 
        `<SfDropdown :class="customClass" :persistent="persistent" :title="title">
          <template v-slot="toggle"> 
            <SfButton>Choose your action</SfButton> 
          </template>
          <template #content>
            <SfList>
              <SfListItem v-for="(action, key) in actionList" :key="key">
                <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="toggle">{{ action }}</SfButton>
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
        <SfDropdown :class="customClass" :persistent="persistent" :title="title">
          <SfButton>Choose your action</SfButton>
          <SfList>
            <SfListItem v-for="(action, key) in actionList" :key="key">
              <SfButton class="sf-button--full-width sf-button--underlined color-primary">{{ action }}</SfButton>
            </SfListItem>
          </SfList>
        </SfDropdown>`,
  }));
