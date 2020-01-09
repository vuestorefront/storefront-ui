/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import SfSelect from "./SfSelect.vue";
import SfProductOption from "../SfProductOption/SfProductOption.vue";
const optionsList = [
  { value: "amaranth", color: "#E52B50", label: "Amaranth" },
  { value: "amber", color: "#FFBF00", label: "Amber" },
  { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
  { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
  { value: "buff", color: "#F0DC82", label: "Buff" }
];
const knobOptionsList = optionsList.reduce(
  (a, c) => ({ ...a, [c.label]: c.value }),
  {}
);
storiesOf("Molecules|Select", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-select--bordered": "sf-select--bordered",
            "sf-select--underlined": "sf-select--underlined"
          },
          "sf-select--underlined",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Color", "Props")
      },
      size: {
        default: number("size", 5, {}, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      },
      valid: {
        default: boolean("valid", true, "Props")
      },
      errorMessage: {
        default: text("errorMessage", "Color", "Props")
      },
      selected: {
        default: options(
          "selected",
          knobOptionsList,
          optionsList[0].value,
          { display: "select" },
          "Data"
        )
      }
    },
    data() {
      return {
        options: optionsList
      };
    },
    template: `<div style="max-width: 18.75rem">
      <SfSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :size="size"
        :required="required"
        :valid="valid"
        :error-message="errorMessage">
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
      </SfSelect>
      <br>
      <h3>Selected option: {{selected}}</h3>
    </div>`
  }))
  .add("[slot] label", () => ({
    components: { SfSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-select--bordered": "sf-select--bordered",
            "sf-select--underlined": "sf-select--underlined"
          },
          "sf-select--underlined",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Color", "Props")
      },
      size: {
        default: number("size", 5, {}, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      },
      valid: {
        default: boolean("valid", true, "Props")
      },
      errorMessage: {
        default: text("errorMessage", "Color", "Props")
      }
    },
    data() {
      return {
        selected: "",
        options: optionsList
      };
    },
    template: `<div style="max-width: 18.75rem">
      <SfSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :size="size"
        :required="required"
        :valid="valid"
        :error-message="errorMessage">
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #label>
          CUSTOM LABEL
        </template>
      </SfSelect>
    </div>`
  }))
  .add("[slot] errorMessage", () => ({
    components: { SfSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-select--bordered": "sf-select--bordered",
            "sf-select--underlined": "sf-select--underlined"
          },
          "sf-select--underlined",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Color", "Props")
      },
      size: {
        default: number("size", 5, {}, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      },
      valid: {
        default: boolean("valid", false, "Props")
      },
      errorMessage: {
        default: text("errorMessage", "Color", "Props")
      }
    },
    data() {
      return {
        selected: "",
        options: optionsList
      };
    },
    template: `<div style="max-width: 18.75rem">
      <SfSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :size="size"
        :required="required"
        :valid="valid"
        :error-message="errorMessage">
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #errorMessage>
          CUSTOM ERROR MESSAGE
        </template>
      </SfSelect>
    </div>`
  }));
