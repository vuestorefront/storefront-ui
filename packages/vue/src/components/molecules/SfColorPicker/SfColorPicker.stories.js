/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfColorPicker from "./SfColorPicker.vue";
import SfColor from "../../atoms/SfColor/SfColor.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
storiesOf("Molecules|ColorPicker", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-color-picker--modifier": "sf-color-picker--modifier"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Choose your color", "Props")
      }
    },
    data() {
      return {
        isOpen: false,
        colors: [
          { label: "Red", value: "red", color: "#990611", selected: false },
          { label: "Black", value: "black", color: "#000000", selected: false },
          {
            label: "Yellow",
            value: "yellow",
            color: "#DCA742",
            selected: false
          },
          { label: "Blue", value: "blue", color: "#004F97", selected: false },
          { label: "Navy", value: "navy", color: "#656466", selected: false }
        ]
      };
    },
    components: { SfColorPicker, SfColor, SfButton },
    template: `
      <div>
        <SfButton v-if="!isOpen" class="sf-button--text" @click="isOpen = !isOpen">+ Colors</SfButton>
        <SfColorPicker
          :label="label"
          :isOpen="isOpen"
          @click:close="isOpen = !isOpen"
        >
          <SfColor v-for="color in colors" :key="color.value" :color="color.color" :selected="color.selected" @click="color.selected = !color.selected"/>
        </SfColorPicker>
      </div>`
  }));
