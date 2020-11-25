import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
  select,
} from "@storybook/addon-knobs";
import { SfSelect, SfProductOption } from "@storefront-ui/vue";
const optionsList = [
  { value: "" },
  { value: "amaranth", color: "#E52B50", label: "Amaranth" },
  { value: "amber", color: "#FFBF00", label: "Amber" },
  { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
  { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
  { value: "buff", color: "#F0DC82", label: "Buff" },
];
const optionValues = ["", ...optionsList.map((i) => i.value)];
storiesOf("Molecules|Select", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-select--underlined": "sf-select--underlined",
          },
          "sf-select--underlined",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      label: {
        default: text("label", "Color", "Props"),
      },
      selectedValue: {
        default: text("selectedValue", "", "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      placeholder: {
        default: text("placeholder", "select color", "Props"),
      },
      selectedValue: {
        default: options(
          "selectedValue",
          knobOptionsList,
          optionsList[0].value,
          { display: "select" },
          "Data"
        ),
      },
    },
    data() {
      return {
        options: optionsList,
      };
    },
    methods: {
      alert(label) {
        console.log(label);
      },
    },
    template: `
      <SfSelect
        v-model="selectedValue"
        :class="customClass"
        :label="label"
        :hintMessage="hintMessage"
        :required="required"
        :error-message="errorMessage"
        :valid="valid"
        :infoMessage="infoMessage"
        :disabled="disabled"
        :error-message="errorMessage"
        :placeholder="placeholder"       
        @input="alert(selectedValue)"
        style="max-width: 30rem; margin: 10px;"
      >
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
      </SfSelect>`,
  }))
  .add("[slot] label", () => ({
    components: { SfSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-select--underlined": "sf-select--underlined",
            "sf-select--no-chevron": "sf-select--no-chevron",
          },
          "sf-select--underlined",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      label: {
        default: text("label", "Color", "Props"),
      },
      selectedValue: {
        default: text("selectedValue", "", "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      placeholder: {
        default: text("placeholder", "", "Props"),
      },
      selectedValue: {
        default: options(
          "selectedValue",
          knobOptionsList,
          optionsList[0].value,
          { display: "select" },
          "Data"
        ),
      },
    },
    data() {
      return {
        options: optionsList,
      };
    },
    methods: {
      alert(label) {
        console.log(label);
      },
    },
    template: `<div style="max-width: 30rem">    
      <SfSelect
        v-model="selectedValue"
        :class="customClass"
        :label="label"
        :hintMessage="hintMessage"
        :required="required"
        :error-message="errorMessage"
        :valid="valid"
        :infoMessage="infoMessage"
        :disabled="disabled"
        :placeholder="placeholder"
        :selected-value="selectedValue"  
        @input="alert(selectedValue)"   
        >
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #label>
          CUSTOM LABEL
        </template>
      </SfSelect>
    </div>`,
  }))
  .add("[slot] errorMessage", () => ({
    components: { SfSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-select--underlined": "sf-select--underlined",
          },
          "sf-select--underlined",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      label: {
        default: text("label", "Color", "Props"),
      },
      selectedValue: {
        default: text("selectedValue", "", "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      placeholder: {
        default: text("placeholder", "", "Props"),
      },
      selectedValue: {
        default: options(
          "selectedValue",
          knobOptionsList,
          optionsList[0].value,
          { display: "select" },
          "Data"
        ),
      },
    },
    data() {
      return {
        options: optionsList,
      };
    },
    methods: {
      alert(label) {
        console.log(label);
      },
    },
    template: `<div style="max-width: 30rem">
      <SfSelect
        v-model="selectedValue"
        :class="customClass"
        :label="label"
        :hintMessage="hintMessage"
        :required="required"
        :error-message="errorMessage"
        :valid="valid"
        :infoMessage="infoMessage"
        :disabled="disabled"
        :placeholder="placeholder"
        :selected-value="selectedValue"
        @input="alert(selectedValue)"
        >
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #errorMessage>
          <span>
            CUSTOM ERROR MESSAGE
          </span>
        </template>
      </SfSelect>
    </div>`,
  }));
