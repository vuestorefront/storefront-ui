import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
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
        notClosableEl: undefined
      };
    },
    template: `<div>
      <div style="position: relative; display: inline-block;">
        <SfButton @click="isOpen = true" ref="button">Choice your action</SfButton>
        <SfDropdown :is-open="isOpen" :title="title" @click:close="isOpen = false" :not-closable-el='["button"]'>
          <SfList>
            <SfListItem v-for="(action, key) in actionList" :key="key">
              <SfButton class="sf-button--full-width sf-button--underlined color-primary" @click="isOpen = false">{{ action }}</SfButton>
            </SfListItem>
          </SfList>
        </SfDropdown>
      </div>
    </div>`,
  }));
