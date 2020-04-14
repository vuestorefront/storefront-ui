/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfColorPicker from "./SfColorPicker.vue";
import SfColor from "../../atoms/SfColor/SfColor.vue";

storiesOf("Molecules|ColorPicker", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-color-picker--vertical": "sf-color-picker--vertical",
            "sf-color-picker--left": "sf-color-picker--left"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Choose color", "Props")
      }
    },
    data() {
      return {
        isOpen: false,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Light Gray",
            value: "light gray",
            color: "#F1F2F3",
            selected: false
          },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false
          },
          { label: "Peach", value: "peach", color: "#F59F93", selected: false },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false
          }
        ]
      };
    },
    components: { SfColorPicker, SfColor },
    template: `
      <div style="position: relative; min-height: 250px;">
        <SfColorPicker
          style="max-width: 10rem;"
          :class="customClass"
          :label="label"
          :isOpen="isOpen"
          @click:toggle="isOpen = !isOpen"
        >
          <SfColor style="margin: 0.4375rem" v-for="color in colors" :key="color.value" :color="color.color" :selected="color.selected" @click="color.selected = !color.selected"/>
        </SfColorPicker>
      </div>`
  }))
  .add("with --vertical", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-color-picker--vertical": "sf-color-picker--vertical",
            "sf-color-picker--left": "sf-color-picker--left"
          },
          "sf-color-picker--vertical",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "", "Props")
      },
      closeIcon: {
        default: text("closeIcon", "cross", "Props")
      }
    },
    data() {
      return {
        isOpen: false,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Light Gray",
            value: "light gray",
            color: "#F1F2F3",
            selected: false
          },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false
          },
          { label: "Peach", value: "peach", color: "#F59F93", selected: false },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false
          }
        ]
      };
    },
    components: { SfColorPicker, SfColor },
    template: `
      <div style="position: relative; height: 100vh;">
        <SfColorPicker
          :isOpen="isOpen"
          :class="customClass"
          :label="label"
          :closeIcon="closeIcon"
          @click:toggle="isOpen = !isOpen"
        >
          <SfColor style="margin: 0.4375rem" v-for="color in colors" :key="color.value" :color="color.color" :selected="color.selected" @click="color.selected = !color.selected"/>
        </SfColorPicker>
      </div>`
  }));
