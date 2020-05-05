import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options,
  boolean,
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
            "sf-color-picker--left": "sf-color-picker--left",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      label: {
        default: text("label", "Choose color", "Props"),
      },
      hasClose: {
        defaukt: boolean("hasClose", false, "Props"),
      },
    },
    data() {
      return {
        isOpen: false,
        isMobile: false,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Light Gray",
            value: "light gray",
            color: "#F1F2F3",
            selected: false,
          },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          { label: "Peach", value: "peach", color: "#F59F93", selected: false },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      };
    },
    components: { SfColorPicker, SfColor },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `
      <div style="position: relative; min-height: 250px;">
        <SfColorPicker
          style="max-width: 11rem;"
          :class="customClass"
          :label="label"
          :has-close="hasClose"
          :isOpen="isOpen || !isMobile"
          @click:toggle="isOpen = !isOpen"
        >
          <SfColor style="margin: 0.4375rem" v-for="color in colors" :key="color.value" :color="color.color" :selected="color.selected" @click="color.selected = !color.selected"/>
        </SfColorPicker>
      </div>`,
  }))
  .add("with --vertical", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-color-picker--vertical": "sf-color-picker--vertical",
            "sf-color-picker--left": "sf-color-picker--left",
          },
          "sf-color-picker--vertical",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      label: {
        default: text("label", "", "Props"),
      },
      hasClose: {
        default: boolean("hasClose", true, "Props"),
      },
    },
    data() {
      return {
        isOpen: false,
        isMobile: false,
        colors: [
          { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
          { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
          {
            label: "Light Gray",
            value: "light gray",
            color: "#F1F2F3",
            selected: false,
          },
          {
            label: "Vivid rose",
            value: "vivid rose",
            color: "#DB5593",
            selected: false,
          },
          { label: "Peach", value: "peach", color: "#F59F93", selected: false },
          {
            label: "Citrus",
            value: "citrus",
            color: "#FFEE97",
            selected: false,
          },
        ],
      };
    },
    components: { SfColorPicker, SfColor },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `
      <div style="position: relative; height: 100vh;">
        <SfColorPicker
          :class="customClass"
          :label="label"
          :has-close="hasClose"
          :isOpen="isOpen || !isMobile"
          @click:toggle="isOpen = !isOpen"
        >
          <SfColor style="margin: 0.4375rem" v-for="color in colors" :key="color.value" :color="color.color" :selected="color.selected" @click="color.selected = !color.selected"/>
        </SfColorPicker>
      </div>`,
  }));
