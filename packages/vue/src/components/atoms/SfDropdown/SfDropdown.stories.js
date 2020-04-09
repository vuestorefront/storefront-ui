/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfDropdown from "./SfDropdown.vue";
import SfList from "../../organisms/SfList/SfList.vue";
import SfButton from "../SfButton/SfButton.vue"

storiesOf("Atoms|Dropdown", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfDropdown, SfList, SfButton },
    props: {
      transition: {
        default: text("transition", "fade", "Props")
      },
      title: {
        default: text("title", "Choose size", "Props")
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
        isOpen: true
      };
    },
    template: `<div>
      <div style="position: relative; display: inline-block;">
        <SfButton @click="isOpen = !isOpen">Choice your action</SfButton>
        <SfDropdown :is-open="isOpen" :title="title" @click:close="isOpen = !isOpen">
          <SfList>
            <SfListItem style="--list-item-padding: 16px 32px; --list-item-border: 1px solid #F1F2F3; --list-item-border-width: 0 0 1px 0; text-align: center">ADD TO CART</SfListItem>
            <SfListItem style="--list-item-padding: 16px 32px; --list-item-border: 1px solid #F1F2F3; --list-item-border-width: 0 0 1px 0; text-align: center">ADD TO COMPARE</SfListItem>
            <SfListItem style="--list-item-padding: 16px 32px; --list-item-border: 1px solid #F1F2F3; --list-item-border-width: 0 0 1px 0; text-align: center">ADD TO WISHLIST</SfListItem>
            <SfListItem style="--list-item-padding: 16px 32px; text-align: center">SHARE</SfListItem>
          </SfList>
        </SfDropdown>
      </div>
      <p>This is informative message for the user.</p>
    </div>`
  }));
